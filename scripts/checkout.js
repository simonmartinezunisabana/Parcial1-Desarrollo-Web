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
        form.addEventListener("submit", () =>{
            form.querySelectorAll("input[name^='cnt_id']").forEach(el => el.remove());

            for (let id in carrito) {
                const input = document.createElement("input");
                input.type = "hidden";
                input.name = `cnt_id${id}`;
                input.value = carrito[id];
                form.appendChild(input);
            }

            localStorage.removeItem("carrito");
            carrito = {};
        });
    }

    renderProductos();
}

{/* 
<section class="checkout-resumen">
    <h2>Resumen de Compra</h2>
    <p>Anillo de Oro Blanco</p><span>$2,500</span>
    <h3>Total:</h3><span>$4,400</span>
</section>
*/}