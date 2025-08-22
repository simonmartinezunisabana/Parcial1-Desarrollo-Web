import mapaProductos from "./data/products.js";

window.onload = () => {
    const params = new URLSearchParams(window.location.search);
    const productosGrid = document.getElementById("productos-grid");

    function anadirProductoAVista(id){
        const infoProducto = mapaProductos[id];
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
        for (let id in mapaProductos) {
            const product = mapaProductos[id];
            if (tipo === product.tipo) {
                anadirProductoAVista(product.id);
            }
        }
    }

    document.getElementById("titulo").innerText = params.get("tipo");
    construirVista(params.get("tipo"));
}