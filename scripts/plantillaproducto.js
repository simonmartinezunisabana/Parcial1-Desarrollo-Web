import mapaProductos from "./data/products.js";

const carrito = JSON.parse(localStorage.getItem("carrito")) || {};

window.onload = () => {
    const loader = document.getElementById("loader");
    const params = new URLSearchParams(window.location.search);
    const productosSection = document.getElementById("productos-section");
    const ID = params.get("id");

    const showLoader = () => { if (loader) loader.classList.remove("hidden"); };
    const hideLoader = () => { if (loader) loader.classList.add("hidden"); };

    async function getProduct(id) {
        let p = null;
        try {
            const response = await fetch("https://script.google.com/macros/s/AKfycbyxrNFOHXJw8SU3qRFQbPUoq9-X6JWVWIDN5ZRjC_vPPZSlegn_CDUsb9zlkXern9Ew/exec");
            const result = await response.json();
            console.log(result.data[id - 1]);
            p = result.data[id - 1];
        } catch (error) {
            console.error("Error al obtener el producto", error);
        }
        return p;
    }

    async function renderProducto() {
        showLoader();

        const producto = await getProduct(ID);

        if (!producto) {
            hideLoader();
            if (productosSection) {
                productosSection.innerHTML = "<p>Error al cargar el producto. Intenta recargar la página.</p>";
            }
            return;
        }

        const imageArticle = document.createElement("article");
        const img = document.createElement("img");
        img.src = producto.imagen;
        img.alt = producto.nombre;

        // 👇 Aquí es la clave: ocultamos el loader cuando la imagen haya cargado
        img.addEventListener("load", () => {
            setTimeout(() => hideLoader(), 300);
        });

        imageArticle.appendChild(img);

        const infoArticle = document.createElement("article");
        const nombre = document.createElement("h2");
        nombre.innerText = producto.nombre;

        const precio = document.createElement("p");
        precio.innerText = "$" + producto.precio;

        infoArticle.appendChild(nombre);
        infoArticle.appendChild(precio);

        if (productosSection) {
            productosSection.appendChild(imageArticle);
            productosSection.appendChild(infoArticle);
        }

        function agregarAlCarrito(id, cnt) {
            if (carrito[id]) {
                carrito[id] += parseInt(cnt);
            } else {
                carrito[id] = parseInt(cnt);
            }
            localStorage.setItem("carrito", JSON.stringify(carrito));
        }

        let cnt = 1;
        const inputCantidad = document.getElementById("cantidad");

        if (inputCantidad) {
            inputCantidad.addEventListener("change", () => {
                cnt = parseInt(inputCantidad.value);
                if (cnt <= 0) {
                    inputCantidad.value = 1;
                    cnt = 1;
                }
            });
        }

        const btnCarrito = document.getElementById("btn-carrito");
        if (btnCarrito) {
            btnCarrito.addEventListener("click", () => {
                agregarAlCarrito(ID, cnt);
                window.location.href = "./carrito.html";
            });
        }

        const descripcion = document.getElementById("descripcion");
        if (descripcion) descripcion.innerText = producto.descripcion;

        const acordeonItems = document.querySelectorAll(".acordeon-item");
        acordeonItems.forEach(item => {
            const titulo = item.querySelector(".acordeon-titulo");
            titulo.addEventListener("click", () => {
                acordeonItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.querySelector(".acordeon-titulo").classList.remove("activo");
                        otherItem.querySelector(".acordeon-contenido").style.maxHeight = null;
                    }
                });

                titulo.classList.toggle("activo");
                const contenido = item.querySelector(".acordeon-contenido");

                if (titulo.classList.contains("activo")) {
                    contenido.style.maxHeight = contenido.scrollHeight + "px";
                } else {
                    contenido.style.maxHeight = null;
                }
            });
        });
    }

    renderProducto();
};
