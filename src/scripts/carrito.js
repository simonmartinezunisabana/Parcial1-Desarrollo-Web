import mapaProductos from "./data/products.js";
const carrito = JSON.parse(localStorage.getItem("carrito")) || {};
let totalCarrito = 0;

for(let id in carrito){
    totalCarrito += parseInt(mapaProductos[id].precio) * carrito[id];
}

window.onload = () => {
    const carritoProductos = document.getElementById("carrito-productos");
    const textoTotal = document.getElementById("total-carrito");
    textoTotal.innerText = "$" + totalCarrito;

    function anadirProductoAVista(id){
        const infoProducto = mapaProductos[id];
        const carritoItem = document.createElement("article");
        carritoItem.className = "carrito-item";

        const img = document.createElement("img");
        img.src = infoProducto.imagen;
        img.alt = infoProducto.nombre;
        carritoItem.appendChild(img);

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
            totalCarrito -= carrito[id] * parseInt(mapaProductos[id].precio);
            let cnt = parseInt(input.value);
            if(cnt <= 0){
                cnt = input.value = 1;
            }
            carrito[id] = cnt;
            totalCarrito += carrito[id] * parseInt(mapaProductos[id].precio);
            textoTotal.innerText = "$" + totalCarrito;
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
        totalCarrito -= carrito[id] * parseInt(mapaProductos[id].precio);
        textoTotal.innerText = "$" + totalCarrito;
        delete carrito[id];
        localStorage.setItem("carrito", JSON.stringify(carrito));
        if(totalCarrito == 0){
            console.log("Carrito Vacío");
            const vacio = document.createElement("h2");
            vacio.class = "vacio";
            vacio.innerText = "Carrito Vacío.";
            carritoProductos.appendChild(vacio);
        }
    }

    if(totalCarrito > 0){
        for (let id in carrito) {
            anadirProductoAVista(id);
        }
    }else{
        console.log("Carrito Vacío");
        const vacio = document.createElement("h2");
        vacio.class = "vacio";
        vacio.innerText = "Carrito Vacío.";
        carritoProductos.appendChild(vacio);
    }

    document.getElementById("btn-checkout").addEventListener("click", () =>{
        if(totalCarrito > 0){
            window.location.href = "checkout.html";
        }
    });
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