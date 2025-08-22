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
    img.alt = infoProducto.nombre;
    imageArticle.appendChild(img);
    
    const infoArticle = document.createElement("article");
    const nombre = document.createElement("h2");
    nombre.innerText = infoProducto.nombre;
    const precio = document.createElement("p");
    precio.innerText = "$" + infoProducto.precio;
    infoArticle.appendChild(nombre);
    infoArticle.appendChild(precio);

    productosSection.appendChild(imageArticle);
    productosSection.appendChild(infoArticle);

    function agregarAlCarrito(id, cnt) {
        if (carrito[id]) {
            carrito[id] += parseInt(cnt);
        } else {
            carrito[id] = parseInt(cnt);
        }

        console.log(cnt);
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }

    let cnt = 1;
    const inputCantidad = document.getElementById("cantidad");
    inputCantidad.addEventListener("change", () => {
        cnt = parseInt(inputCantidad.value);
        if(cnt <= 0){
            inputCantidad.value = 1;
        }
        console.log(cnt);
    });

    document.getElementById("btn-carrito").addEventListener("click", () => {
        agregarAlCarrito(ID, cnt);
        window.location.href = "./carrito.html";
    });

    const descripcion = document.getElementById("descripcion");
    descripcion.innerText = infoProducto.descripcion;

    const acordeonItems = document.querySelectorAll('.acordeon-item');

    acordeonItems.forEach(item => {
        const titulo = item.querySelector('.acordeon-titulo');

        titulo.addEventListener('click', () => {
        // Cerrar todos los demás acordeones
        acordeonItems.forEach(otherItem => {
            if (otherItem !== item) {
            otherItem.querySelector('.acordeon-titulo').classList.remove('activo');
            otherItem.querySelector('.acordeon-contenido').style.maxHeight = null;
            }
        });

        // Alternar el acordeón actual
        titulo.classList.toggle('activo');
        const contenido = item.querySelector('.acordeon-contenido');

        if (titulo.classList.contains('activo')) {
            contenido.style.maxHeight = contenido.scrollHeight + "px";
        } else {
            contenido.style.maxHeight = null;
        }
        });
    });
}