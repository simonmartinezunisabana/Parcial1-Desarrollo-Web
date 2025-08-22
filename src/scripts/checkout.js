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
}

{/* 
<section class="checkout-resumen">
    <h2>Resumen de Compra</h2>
    <p>Anillo de Oro Blanco</p><span>$2,500</span>
    <h3>Total:</h3><span>$4,400</span>
</section>
*/}