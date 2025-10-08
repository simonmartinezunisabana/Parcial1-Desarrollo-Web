const carrito = JSON.parse(localStorage.getItem("carrito")) || {};

window.onload = () => {
    const loader = document.getElementById("loader");
    const checkoutResumen = document.querySelector(".checkout-resumen");

    const showLoader = () => { if (loader) loader.classList.remove("hidden"); };
    const hideLoader = () => { if (loader) loader.classList.add("hidden"); };

    async function getProducts() {
        let mp = null;
        try {
            const response = await fetch("https://script.google.com/macros/s/AKfycbyxrNFOHXJw8SU3qRFQbPUoq9-X6JWVWIDN5ZRjC_vPPZSlegn_CDUsb9zlkXern9Ew/exec");
            const result = await response.json();
            console.log(result.data);
            mp = result.data;
        } catch (error) {
            console.error("Error al obtener los productos", error);
        }
        return mp;
    }

    async function renderProductos() {
        showLoader();

        const productos = await getProducts();

        function anadirProductoAVista(id){
            const infoProducto = productos[id-1];
            const checkoutItem = document.createElement("article");
            checkoutItem.className = "resumen-item";
            checkoutItem.classList.add("slide-in-right");

            const nombre = document.createElement("h3");
            nombre.innerText = infoProducto.nombre + " x" + carrito[id];
            checkoutItem.appendChild(nombre);

            const precio = document.createElement("p");
            precio.innerText = "$" + (parseInt(infoProducto.precio) * carrito[id]);
            checkoutItem.appendChild(precio);

            checkoutResumen.appendChild(checkoutItem);
            setTimeout(() => {checkoutItem.classList.add("show");}, 50);
        }

        let total = 0;
        for (let id in carrito) {
            const info = productos[id-1];
            if(info){
                const cantidad = carrito[id];
                const subtotal = info.precio * cantidad;
                total += subtotal;
            }
            anadirProductoAVista(id);
        }
        const resumenTotal = document.createElement("article");
        resumenTotal.className = "resumen-total";
        
        const totalTitle = document.createElement("p");
        totalTitle.innerText = "Total:";
        resumenTotal.appendChild(totalTitle);

        const totalPrecio = document.createElement("p");
        totalPrecio.innerText = "$" + (parseInt(total));
        totalPrecio.classList.add("scale-in");
        resumenTotal.appendChild(totalPrecio);

        checkoutResumen.appendChild(resumenTotal);
        setTimeout(() => {totalPrecio.classList.add("show");}, 50);

        checkoutResumen.style.height = "auto";
        setTimeout(() => {
            hideLoader();
            if(!total) {
                alert("No hay productos en el carrito");
                window.location.href = "carrito.html";
            }
        }, 400);

        const form = document.getElementById("form-pedido");
        async function enviarPedido(pedido) {
            const res = await fetch("https://script.google.com/macros/s/AKfycbyxrNFOHXJw8SU3qRFQbPUoq9-X6JWVWIDN5ZRjC_vPPZSlegn_CDUsb9zlkXern9Ew/exec", {
                redirect: "follow",
                method: "POST",
                body: JSON.stringify(pedido),
                headers: { "Content-Type": "text/plain;charset=utf-8" }
            });

            const data = await res.json();
            console.log("Respuesta:", data.data);
        };
        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            const productosPedido = [];

            for (let id in carrito){
                const info = productos[id-1];
                if (info){
                    const cantidad = carrito[id];

                    productosPedido.push({
                        id,
                        nombre: info.nombre,
                        cantidad,
                        precio: info.precio
                    })
                }
            }

            data.productosPedido = productosPedido;
            data.total = total;

            await enviarPedido(data);
            alert("Pedido enviado correctamente");

            localStorage.removeItem("carrito");
            window.location.href = "index.html";
        });
    }
    renderProductos();
}
/*{ 
<section class="checkout-resumen">
    <h2>Resumen de Compra</h2>
    <p>Anillo de Oro Blanco</p><span>$2,500</span>
    <h3>Total:</h3><span>$4,400</span>
</section>
}*/