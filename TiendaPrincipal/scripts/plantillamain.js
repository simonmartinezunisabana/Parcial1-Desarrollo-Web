window.onload = () => {
    const loader = document.querySelector(".loader");
    const params = new URLSearchParams(window.location.search);
    const productosGrid = document.getElementById("productos-grid");
    const categoria = document.querySelector(".categoria");
    //console.log(categoria);

    const showLoader = () => { if (loader) loader.classList.remove("hidden"); };
    const hideLoader = () => { if (loader) loader.classList.add("hidden"); };

    async function getProducts() {
        let mp = null;
        try {
            const response = await fetch("https://parcial1-desarrollo-web-production.up.railway.app/productos");
            const result = await response.json();
            //console.log(result);
            mp = result;
        } catch (error) {
            console.error("Error al obtener los productos", error);
        }
        return mp;
    }

    async function renderProductos() {
        showLoader();

        const productos = await getProducts();

        if (!productos) {
            hideLoader();
            productosGrid.innerHTML = "<p>Error al cargar los productos. Intenta recargar la página.</p>";
            return;
        }

        function anadirProductoAVista(id) {
            const infoProducto = productos[id];
            //console.log(infoProducto);
            const producto = document.createElement("div");
            producto.className = "producto";
            producto.classList.add("scale-in");

            const link = document.createElement("a");
            link.href = "PlantillaProducto.html?id=" + (id+1);

            const img = document.createElement("img");
            img.src = infoProducto.imagen;
            img.alt = infoProducto.nombre;

            img.addEventListener("load", () => {
                const allLoaded = [...document.querySelectorAll("#productos-grid img")]
                    .every(im => im.complete);
                categoria.style.height = "auto";
                if (allLoaded) setTimeout(() => {hideLoader();}, 400);
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
            setTimeout(() => {producto.classList.add("show");}, 50);
        }

        function construirVista(tipo) {
            productosGrid.innerHTML = "";
            for (let id in productos) {
                id = parseInt(id);
                const product = productos[id];
                if (tipo === product["tipo"]) {
                    //console.log(product);
                    anadirProductoAVista(id);
                }
            }
        }

        const tipo = params.get("tipo");
        document.getElementById("titulo").innerText = tipo;
        construirVista(tipo);
    }

    renderProductos();
};
