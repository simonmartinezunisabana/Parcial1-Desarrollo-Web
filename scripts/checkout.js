import mapaProductos from "./data/products.js";
const carrito = JSON.parse(localStorage.getItem("carrito")) || {};

window.onload = () => {
    const checkoutResumen = document.getElementById("checkout-resumen");

    function anadirProductoAVista(id){
        const infoProducto = mapaProductos[id];
        const checkoutItem = document.createElement("article");

        const nombre = document.createElement("h3");
        nombre.innerText = infoProducto.nombre + " x" + carrito[id];
        checkoutItem.appendChild(nombre);

        const precio = document.createElement("p");
        precio.innerText = "$" + (parseInt(infoProducto.precio) * carrito[id]);
        checkoutItem.appendChild(precio);

        checkoutResumen.appendChild(checkoutItem);
    }

    for (let id in carrito) {
        anadirProductoAVista(id);
    }

    const form = document.getElementById("form-pedido");
    form.addEventListener("submit", async (event) =>{
        form.querySelectorAll("input[name^='cnt_id']").forEach(el => el.remove());

        for (let id in carrito) {
            const input = document.createElement("input");
            input.type = "hidden";
            input.name = `cnt_id${id}`;
            input.value = carrito[id];
            form.appendChild(input);
        }

        const datosForm = Object.fromEntries(new FormData(form))

        try {
            const response = await fetch("https://script.google.com/macros/s/AKfycbw6ewku6zOX19pQp_XPVge7witGTyxuDAqlvAaJoarCodGVpKW3iCQ2mSYqihTJizQa/exec" ,{
                method: "POST",
                mode: "cors",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(datosForm)
            });
            if (!response.ok) {
                throw new Error(`Error HTTP ${response.status}: ${response.statusText}`)
            }
            console.log(datosForm)
            console.log("Datos enviados correctamente")
        }catch (error){
            console.error("Error de Post: " + error.message);

        }
        localStorage.removeItem("carrito");
        carrito = {};
    });
}

{/* 
<section class="checkout-resumen">
    <h2>Resumen de Compra</h2>
    <p>Anillo de Oro Blanco</p><span>$2,500</span>
    <h3>Total:</h3><span>$4,400</span>
</section>
*/}
/*
const form = document.getElementById("form-pedido");
    form.addEventListener("submit", () =>{
        form.querySelectorAll("input[name^='cnt_id']").forEach(el => el.remove());

        for (let id in carrito) {
            const input = document.createElement("input");
            input.type = "hidden";
            input.name = `cnt_id${id}`;
            input.value = carrito[id];
            form.appendChild(input);
        }

        localStorage.removeItem("carrito");
        carrito = {};
    });*/