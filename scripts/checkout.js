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
            checkoutItem.className = "checkout-item";

            const nombre = document.createElement("h3");
            nombre.innerText = infoProducto.nombre + " x" + carrito[id];
            checkoutItem.appendChild(nombre);

            const precio = document.createElement("p");
            precio.innerText = "$" + (parseInt(infoProducto.precio) * carrito[id]);
            checkoutItem.appendChild(precio);

            checkoutResumen.appendChild(checkoutItem);
        }

        for (let id in carrito) {
            anadirProductoAVista(id);
        }
        checkoutResumen.style.height = "auto";
        setTimeout(() => hideLoader(), 400);

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

            const productos = [];
            let total = 0;

            for (let id in carrito){
                const info = mapaProductos[id];
                if (info){
                    const cantidad = carrito[id];
                    const subtotal = info.precio * cantidad;
                    total += subtotal;

                    productos.push({
                        id,
                        nombre: info.nombre,
                        cantidad,
                        precio: info.precio
                    })
                }
            }

            data.productos = productos;
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