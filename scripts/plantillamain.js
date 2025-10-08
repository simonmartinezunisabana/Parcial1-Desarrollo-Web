window.onload = () => {
    const loader = document.querySelector(".loader"); // mismo selector que usaste en el HTML
    const params = new URLSearchParams(window.location.search);
    const productosGrid = document.getElementById("productos-grid");

    // 🔹 Mostrar y ocultar el loader
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
        showLoader(); // 🌀 Mostrar loader mientras se cargan los productos

        const productos = await getProducts();

        if (!productos) {
            hideLoader();
            productosGrid.innerHTML = "<p>Error al cargar los productos. Intenta recargar la página.</p>";
            return;
        }

        function anadirProductoAVista(id) {
            const infoProducto = productos[id - 1];
            const producto = document.createElement("div");
            producto.className = "producto";

            const link = document.createElement("a");
            link.href = "PlantillaProducto.html?id=" + infoProducto.id;

            const img = document.createElement("img");
            img.src = infoProducto.imagen;
            img.alt = infoProducto.nombre;

            // ⏳ Esperar que la imagen cargue para quitar el loader al final
            img.addEventListener("load", () => {
                // si todas las imágenes se cargaron, ocultar loader
                const allLoaded = [...document.querySelectorAll("#productos-grid img")]
                    .every(im => im.complete);
                if (allLoaded) setTimeout(() => hideLoader(), 300);
            });

            link.appendChild(img);

            const nombre = document.createElement("h3");
            nombre.innerText = infoProducto.nombre;
            link.appendChild(nombre);

            const precio = document.createElement("p");
            precio.innerText = "$" + infoProducto.precio;
            link.appendChild(precio);

            producto.appendChild(link);
            productosGrid.appendChild(producto);
        }

        function construirVista(tipo) {
            productosGrid.innerHTML = ""; // limpiar antes de renderizar
            for (let id in productos) {
                const product = productos[id];
                if (tipo === product.tipo) {
                    anadirProductoAVista(product.id);
                }
            }
        }

        const tipo = params.get("tipo");
        document.getElementById("titulo").innerText = tipo;
        construirVista(tipo);
    }

    renderProductos();
};
