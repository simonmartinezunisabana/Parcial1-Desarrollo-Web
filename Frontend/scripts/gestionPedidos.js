window.onload = () =>{
    const tablaPedidos = document.getElementById("tablaPedidos");
    const filterSelect = document.getElementById("filterSelect");
    const nameInput = document.getElementById("nameInput");
    const loader = document.getElementById("loader");
    
    const showLoader = () => { if (loader) loader.classList.remove("hidden"); };
    const hideLoader = () => { if (loader) loader.classList.add("hidden"); };

    filterSelect.addEventListener("change", () =>{
        manageFilter();
    });
    nameInput.addEventListener("input", () =>{
        manageFilter();
    });

    function renderTable(pedidosFiltrados){
        if(!pedidosFiltrados) return;

        const atributeList = ["nombre", "correo", "telefono", "direccion", "ciudad", "codigo_postal", "productos", "total", "estado"]
        for(let pedido of pedidosFiltrados){
            const row = document.createElement("tr");
            for(let atr of atributeList){
                const cell = document.createElement("th");
                if(atr == "productos"){
                    const listaProductos = document.createElement("ul");
                    //console.log(pedido[atr]);
                    for(let x of pedido[atr]){
                        //console.log(x);
                        let producto = x["producto"];
                        const item = document.createElement("li");
                        item.innerText = `${producto["nombre"]} ($${producto["precio"]}) x${x["cantidad"]}`;
                        listaProductos.appendChild(item);
                    }
                    cell.appendChild(listaProductos);
                }else if(atr == "estado"){
                    const value = document.createElement("p");
                    value.innerText = (pedido[atr]) ? "Completado" : "Pendiente";
                    const checker = document.createElement("button");
                    checker.innerText = "✓";
                    checker.addEventListener("click", async () => {await completarPedido(pedido["id"]); manageFilter();});

                    cell.appendChild(value);
                    if(!pedido[atr]) cell.appendChild(checker);
                }else{
                    cell.innerText = ((atr == "total") ? "$" : "") + pedido[atr];
                }
                row.appendChild(cell);
            }
            tablaPedidos.appendChild(row);
        }
    }

    async function completarPedido(id){
        const pedidoActualizado = {estado: true};
        const response = await fetch(`http://localhost:8080/pedidos/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(pedidoActualizado)
        });

        if (!response.ok) {
            throw new Error("Error al actualizar el pedido");
        }

        const data = await response.json();
        console.log("Respuesta del servidor:", data);
    }

    async function fetchPedidos(filter, search) {
        let pedidos = null;
        try {
            let url = `http://localhost:8080/pedidos?`;
            if(filter && filter != "" && filter != "todos") url += `filter=${filter}`;
            if(search && search != "") url += `&search=${search}`;
            const response = await fetch(url);
            const result = await response.json();
            //console.log(result);
            pedidos = result;
        } catch (error) {
            console.error("Error al obtener los pedidos", error);
        }
        return pedidos;
    }

    async function manageFilter(filter=filterSelect.value, search=nameInput.value){
        tablaPedidos.innerHTML = "";
        showLoader();
        const pedidos = await fetchPedidos(filter, search);
        hideLoader();
        renderTable(pedidos);
    }

    manageFilter(filterSelect.value);
}