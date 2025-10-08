import mapaProductos from "./data/products.js";
const carrito = JSON.parse(localStorage.getItem("carrito")) || {};

window.onload = () => {
    const checkoutResumen = document.getElementById("checkout-resumen");

    function anadirProductoAVista(id){
        const infoProducto = mapaProductos[id];
        const checkoutItem = document.createElement("article");

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

        localStorage.removeItem("carrito");
        window.location.href = "index.html";
    });
}
/*{ 
<section class="checkout-resumen">
    <h2>Resumen de Compra</h2>
    <p>Anillo de Oro Blanco</p><span>$2,500</span>
    <h3>Total:</h3><span>$4,400</span>
</section>
*/
/*
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
    });*/