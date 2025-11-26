window.onload = () => {
    const slidesContainer = document.querySelector('.catalogo-slides-container');
    const prevBtn = document.querySelector('.catalogo-control.prev');
    const nextBtn = document.querySelector('.catalogo-control.next');
    const indicadores = document.querySelectorAll('.catalogo-indicadores .indicador');
    const novedadesGrid = document.querySelector(".novedades-grid");
    const coleccionesGrid = document.querySelector(".colecciones-grid");

    const loaderSlider = document.querySelector("#loader-slider");
    const loaderColecciones = document.querySelector("#loader-colecciones");
    const loaderNovedades = document.querySelector("#loader-novedades");

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
        const productos = await getProducts();

        
        function getRandomProduct() {
            let n = Math.floor(Math.random() * 55);

            return n;
        }

        const categorias = new Map();
        for(let id in productos){
            const product = productos[id];

            categorias.set(product.tipo, id);
        }
        //console.log(categorias);

        let indexCategorias = 0;
        let catalogoSlide = null;
        categorias.forEach((id, categoria) =>{
            const producto = productos[id];
            if(indexCategorias === 0 || indexCategorias === 4){
                catalogoSlide = document.createElement("div");
                catalogoSlide.className = "catalogo-slide";
            }

            const catalogoCard = document.createElement("div");
            catalogoCard.className = "catalogo-card";

            const catalogoLink = document.createElement("a");
            catalogoLink.href = "PlantillaMain.html?tipo=" + categoria;

            const catalogoImg = document.createElement("img");
            catalogoImg.src = producto.imagen;
            catalogoImg.alt = categoria;

            const catalogoNombre = document.createElement("h3");
            catalogoNombre.innerText = categoria;

            catalogoLink.appendChild(catalogoImg);
            catalogoLink.appendChild(catalogoNombre);

            catalogoCard.appendChild(catalogoLink);

            catalogoSlide.appendChild(catalogoCard);

            indexCategorias++;

            if(indexCategorias === 4 || indexCategorias === 8){
                slidesContainer.appendChild(catalogoSlide);
            }
        });
        document.querySelector(".catalogo-container").style.height = "auto";
        if (loaderSlider) loaderSlider.classList.add("hidden");
        const slides = document.querySelectorAll('.catalogo-slide');
        /*
        <div class="catalogo-slide">
            <div class="catalogo-card">
                <a href="PlantillaMain.html?tipo=Anillos">
                    <img src="./images/Anillos/ANILLO-ARES.jpg" alt="Anillos">
                    <h3>Anillos</h3>
                </a>
            </div>
            <div class="catalogo-card">
                <a href="PlantillaMain.html?tipo=Pulsos">
                    <img src="./images/Pulsos/pulso-cuadrado.jpg" alt="Pulsos"> 
                    <h3>Pulsos</h3>
                </a>
            </div>
            <div class="catalogo-card">
                <a href="PlantillaMain.html?tipo=Pulseras">
                    <img src="./images/Pulseras/pulsera-completo.jpg" alt="Pulseras">
                    <h3>Pulseras</h3>
                </a>
            </div>
            <div class="catalogo-card">
                <a href="PlantillaMain.html?tipo=Dijes">
                    <img src="./images/Dijes/dije-cruz-imperial.jpg" alt="Dijes">
                    <h3>Dijes</h3>
                </a>
            </div>
        </div>
        */

        let usedCategorias = new Set();
        let cntCategorias = 0;
        while(cntCategorias < 4){
            const producto = productos[getRandomProduct()];
            if(usedCategorias.has(producto.tipo)){
                continue;
            }else{
                usedCategorias.add(producto.tipo);
                cntCategorias++;
            }

            const coleccionesLink = document.createElement("a");
            coleccionesLink.href = "PlantillaMain.html?tipo=" + producto.tipo;
            coleccionesLink.className = "coleccion-card";

            const coleccionesImg = document.createElement("img");
            coleccionesImg.src = producto.imagen;
            coleccionesImg.alt = producto.tipo;

            const coleccionesNombre = document.createElement("h3");
            coleccionesNombre.innerText = producto.tipo;

            coleccionesLink.appendChild(coleccionesImg);
            coleccionesLink.appendChild(coleccionesNombre);

            coleccionesGrid.appendChild(coleccionesLink);
        }
        document.querySelector(".colecciones-grid").style.height = "auto";
        if (loaderColecciones) loaderColecciones.classList.add("hidden");
        /*<a href="PlantillaMain.html?tipo=Anillos" class="coleccion-card">
            <img src="./images/Exclusivo/anillo-Lucia.jpg" alt="Anillos">
            <h3>Anillos</h3>
        </a>*/

        for(let i=0; i < 3; i++){
            const productId = getRandomProduct();
            const producto = productos[productId];
            const productoCard = document.createElement("div");
            productoCard.className = "producto-card";

            const productoLink = document.createElement("a");
            productoLink.href = "PlantillaProducto.html?id=" + productId;
            productoLink.className = "btn";

            const productoImg = document.createElement("img");
            productoImg.src = producto.imagen;
            productoImg.alt = producto.nombre;

            const productoNombre = document.createElement("h4");
            productoNombre.innerText = producto.nombre;

            const productoPrecio = document.createElement("p");
            productoPrecio.innerText = "$" + producto.precio;

            productoLink.appendChild(productoImg);
            productoLink.appendChild(productoNombre);
            productoLink.appendChild(productoPrecio);

            productoCard.appendChild(productoLink);

            novedadesGrid.appendChild(productoCard);
        }
        document.querySelector(".novedades").style.height = "auto";
        if (loaderNovedades) loaderNovedades.classList.add("hidden");
        /*
        <div class="producto-card">
            <a href="PlantillaProducto.html?id=53" class="btn">
                <img src="./images/Novedades/dije-corazon-caballo.jpg" alt="Anillo oro blanco">
                <h4>Dije Corazon Caballo</h4>
                <p>$11500</p>
            </a>
        </div>
        */

        let currentSlide = 0;
        const totalSlides = slides.length;

        // Función para mover el carrusel
        function moveToSlide(slideIndex) {
            if (slideIndex < 0) {
                slideIndex = totalSlides - 1;
            } else if (slideIndex >= totalSlides) {
                slideIndex = 0;
            }

            slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
            currentSlide = slideIndex;

            // Actualizar indicadores
            indicadores.forEach((indicador, index) => {
                if (index === currentSlide) {
                    indicador.classList.add('activo');
                } else {
                    indicador.classList.remove('activo');
                }
            });
        }

        // Event listeners para los controles
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                moveToSlide(currentSlide - 1);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                moveToSlide(currentSlide + 1);
            });
        }

        // Event listeners para los indicadores
        indicadores.forEach(indicador => {
            indicador.addEventListener('click', function() {
                const slideIndex = parseInt(this.getAttribute('data-slide'));
                moveToSlide(slideIndex);
            });
        });

        // Auto slide cada 5 segundos
        setInterval(() => {
            moveToSlide(currentSlide + 1);
        }, 5000);
    }
    renderProductos();
}