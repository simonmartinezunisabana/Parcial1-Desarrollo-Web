import mapaProductos from "./data/products.js";
const carrito = JSON.parse(localStorage.getItem("carrito")) || {};

window.onload = () => {
    const params = new URLSearchParams(window.location.search);
    const productosSection = document.getElementById("productos-section");
    const ID = params.get("id");
    const infoProducto = mapaProductos[ID];

    const imageArticle = document.createElement("article");
    const img = document.createElement("img");
    img.src = infoProducto.imagen;
    imageArticle.appendChild(img);
    
    const infoArticle = document.createElement("article");
    const nombre = document.createElement("h1");
    nombre.innerText = infoProducto.nombre;
    const precio = document.createElement("p");
    precio.innerText = "$" + infoProducto.precio;
    const descripcion = document.createElement("p");
    descripcion.innerText = infoProducto.descripcion;
    infoArticle.appendChild(nombre);
    infoArticle.appendChild(precio);
    infoArticle.appendChild(descripcion);

    productosSection.appendChild(imageArticle);
    productosSection.appendChild(infoArticle);

    function agregarAlCarrito(id, cnt) {
        if (carrito[id]) {
            carrito[id] += parseInt(cnt);
        } else {
            carrito[id] = 1;
        }

        console.log(carrito[id]);
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }

    let cnt = 1;
    const inputCantidad = document.getElementById("cantidad");
    inputCantidad.addEventListener("change", () => {
        cnt = parseInt(inputCantidad.value);
        if(cnt <= 0){
            inputCantidad.value = 1;
        }
    });

    document.getElementById("btn-carrito").addEventListener("click", () => {
        agregarAlCarrito(ID, cnt);
        window.location.href = "./carrito.html";
    });
}