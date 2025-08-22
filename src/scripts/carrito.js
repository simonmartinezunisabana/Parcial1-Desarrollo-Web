import mapaProductos from "./data/products.js";
const carrito = JSON.parse(localStorage.getItem("carrito")) || {};

window.onload = () => {
    const carritoProductos = document.getElementById("carrito-productos");

    function anadirProductoAVista(id){
        const infoProducto = mapaProductos[id];
        const carritoItem = document.createElement("article");

        const img = document.createElement("img");
        img.src = infoProducto.imagen;
        img.alt = infoProducto.nombre;
        carritoItem.appendChild(img);

        const itemInfo = document.createElement("div");

        const nombre = document.createElement("h3");
        nombre.innerText = infoProducto.nombre;
        itemInfo.appendChild(nombre);

        const precio = document.createElement("p");
        precio.innerText = "$" + infoProducto.precio;
        itemInfo.appendChild(precio);

        const cantidad = document.createElement("div");
        const label = document.createElement("label");
        label.innerText = "Cantidad: ";
        cantidad.appendChild(label);

        const input = document.createElement("input");
        input.value = carrito[id];
        input.type = "number";
        input.min = 1;
        input.addEventListener("change", () => {
            let cnt = parseInt(input.value);
            if(cnt <= 0){
                cnt = input.value = 1;
            }
            carrito[id] = cnt;
            localStorage.setItem("carrito", JSON.stringify(carrito));
        });
        cantidad.appendChild(input);

        const eliminar = document.createElement("button");
        eliminar.innerText = "Eliminar";
        eliminar.addEventListener("click", () => {
            eliminarDelCarrito(id);
            carritoItem.remove();
        });
        cantidad.appendChild(eliminar);
        itemInfo.appendChild(cantidad);

        carritoItem.appendChild(itemInfo);

        carritoProductos.appendChild(carritoItem);
    }

    function eliminarDelCarrito(id) {
        delete carrito[id];
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }

    for (let id in carrito) {
        anadirProductoAVista(id);
    }
}

{/* 
<div class="carrito-item">
    <img src="../assets/img/prod1.jpg" alt="Anillo oro blanco">
    <div class="item-info">
        <h3>Anillo de Oro Blanco</h3>
        <p>$2,500</p>
        <div class="cantidad">
            <label>Cantidad:</label>
            <input type="number" value="1" min="1">
        </div>
    </div>
    <button class="btn-eliminar"><i class="fas fa-trash"></i></button>
</div>
*/}