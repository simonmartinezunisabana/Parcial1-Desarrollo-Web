window.onload = () => {
    const params = new URLSearchParams(window.location.search);
    const productosGrid = document.getElementById("productos-grid");

    async function getProducts() {
        let mp = null;
        try {
            const response = await fetch("https://script.google.com/macros/s/AKfycbyxrNFOHXJw8SU3qRFQbPUoq9-X6JWVWIDN5ZRjC_vPPZSlegn_CDUsb9zlkXern9Ew/exec");
            const result = await response.json();
            console.log(result.data);
            mp = result.data;
        } catch (error) {
            console.error("Error al obtener el producto", error);
        }
        return mp;
    }

    async function renderProductos() {
        const productos = await getProducts();

        function anadirProductoAVista(id){
            const infoProducto = productos[id-1];
            const producto = document.createElement("div");
            producto.className = "producto";

            const link = document.createElement("a");
            link.href = "PlantillaProducto.html?id=" + infoProducto.id;

            const img = document.createElement("img");
            img.src = infoProducto.imagen;
            img.alt = infoProducto.nombre;
            link.appendChild(img);

            const nombre = document.createElement("h3");
            nombre.innerText = infoProducto.nombre;
            link.appendChild(nombre);

            const precio = document.createElement("p");
            precio.innerText = "$" + infoProducto.precio;
            link.appendChild(precio)

            producto.appendChild(link);

            productosGrid.appendChild(producto);
        }

        function construirVista(tipo){
            for (let id in productos) {
                const product = productos[id];
                if (tipo === product.tipo) {
                    anadirProductoAVista(product.id);
                }
            }
        }

        document.getElementById("titulo").innerText = params.get("tipo");
        construirVista(params.get("tipo"));
    }
    renderProductos();
}