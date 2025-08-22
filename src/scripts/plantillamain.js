import mapaProductos from "./data/products.js";

window.onload = () => {
    const params = new URLSearchParams(window.location.search);
    const productosGrid = document.getElementById("productos-grid");

    function anadirProductoAVista(id){
        const infoProducto = mapaProductos[id];
        const producto = document.createElement("div");

        const img = document.createElement("img");
        img.src = infoProducto.imagen;
        producto.appendChild(img);

        const link = document.createElement("a");
        link.href = "PlantillaProducto.html?id=" + infoProducto.id;
        const nombre = document.createElement("h3");
        nombre.innerText = infoProducto.nombre;
        link.appendChild(nombre);
        producto.appendChild(link);

        const precio = document.createElement("p");
        precio.innerText = "$" + infoProducto.precio;
        producto.appendChild(precio);

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