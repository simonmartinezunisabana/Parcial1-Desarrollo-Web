const carrito = JSON.parse(localStorage.getItem("carrito")) || {};
let totalCarrito = 0;

window.onload = () => {
    const loader = document.getElementById("loader");
    const carritoProductos = document.getElementById("carrito-productos");
    const textoTotal = document.getElementById("total-carrito");
    textoTotal.innerText = "$" + totalCarrito;

    const showLoader = () => { if (loader) loader.classList.remove("hidden"); };
    const hideLoader = () => { if (loader) loader.classList.add("hidden"); };

    async function getProducts() {
        let mp = null;
        try {
            const response = await fetch("https://parcial1-desarrollo-web-production.up.railway.app/productos");
            const result = await response.json();
            mp = result.data;
        } catch (error) {
            console.error("Error al obtener los productos", error);
        }
        return mp;
    }

    async function renderProductos() {
        showLoader();

        const productos = await getProducts();

        if (!productos || productos.length === 0) {
            console.error("No se encontraron productos");
            loader.classList.add("hidden");
            return;
        }

        for (let id in carrito) {
            totalCarrito += parseInt(productos[id - 1].precio) * carrito[id];
        }

        function anadirProductoAVista(id) {
            const infoProducto = productos[id - 1];
            const carritoItem = document.createElement("article");
            carritoItem.className = "carrito-item";
            carritoItem.classList.add("scale-in");

            const img = document.createElement("img");
            img.src = infoProducto.imagen;
            img.alt = infoProducto.nombre;
            carritoItem.appendChild(img);

            img.addEventListener("load", () => {
                const allLoaded = [...document.querySelectorAll("#carrito-productos img")]
                    .every(im => im.complete);
                carritoProductos.style.height = "auto";
                if (allLoaded) setTimeout(() => hideLoader(), 400);
            });

            const itemInfo = document.createElement("div");
            itemInfo.className = "item-info";

            const nombre = document.createElement("h3");
            nombre.innerText = infoProducto.nombre;
            itemInfo.appendChild(nombre);

            const precio = document.createElement("p");
            precio.innerText = "$" + infoProducto.precio;
            itemInfo.appendChild(precio);

            const cantidad = document.createElement("div");
            cantidad.className = "cantidad";
            const label = document.createElement("label");
            label.innerText = "Cantidad: ";
            cantidad.appendChild(label);

            const input = document.createElement("input");
            input.value = carrito[id];
            input.type = "number";
            input.min = 1;
            input.addEventListener("change", () => {
                totalCarrito -= carrito[id] * parseInt(productos[id - 1].precio);
                let cnt = parseInt(input.value);
                if (cnt <= 0) cnt = input.value = 1;
                carrito[id] = cnt;
                totalCarrito += carrito[id] * parseInt(productos[id - 1].precio);
                textoTotal.innerText = "$" + totalCarrito;
                localStorage.setItem("carrito", JSON.stringify(carrito));
            });
            cantidad.appendChild(input);

            const eliminar = document.createElement("button");
            eliminar.innerText = "Eliminar";
            eliminar.className = "btn-eliminar";
            eliminar.addEventListener("click", () => {
                eliminarDelCarrito(id);
                carritoItem.remove();
            });
            cantidad.appendChild(eliminar);

            itemInfo.appendChild(cantidad);
            carritoItem.appendChild(itemInfo);
            carritoProductos.appendChild(carritoItem);
            setTimeout(() => {carritoItem.classList.add("show");}, 50);
        }

        function eliminarDelCarrito(id) {
            totalCarrito -= carrito[id] * parseInt(productos[id - 1].precio);
            textoTotal.innerText = "$" + totalCarrito;
            delete carrito[id];
            localStorage.setItem("carrito", JSON.stringify(carrito));

            if (totalCarrito == 0) {
                carritoProductos.innerHTML = "";
                const vacio = document.createElement("h2");
                vacio.className = "vacio";
                vacio.innerText = "Carrito Vacío.";
                carritoProductos.appendChild(vacio);
            }
        }

        if (totalCarrito > 0) {
            for (let id in carrito) {
                anadirProductoAVista(id);
            }
        } else {
            const vacio = document.createElement("h2");
            vacio.className = "vacio";
            vacio.classList.add("scale-in");
            vacio.innerText = "Carrito Vacío.";
            carritoProductos.appendChild(vacio);
            carritoProductos.style.height = "auto";
            setTimeout(() => {vacio.classList.add("show");}, 50);
            setTimeout(() => hideLoader(), 400);
        }

        textoTotal.innerText = "$" + totalCarrito;

        document.getElementById("btn-checkout").addEventListener("click", () => {
            if (totalCarrito > 0) {
                window.location.href = "checkout.html";
            } else {
                alert('No hay artículos en el carrito.');
            }
        });
    }

    renderProductos();
};
