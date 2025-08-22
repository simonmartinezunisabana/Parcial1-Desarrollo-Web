window.onload = () => {
    const slidesContainer = document.querySelector('.catalogo-slides-container');
    const slides = document.querySelectorAll('.catalogo-slide');
    const prevBtn = document.querySelector('.catalogo-control.prev');
    const nextBtn = document.querySelector('.catalogo-control.next');
    const indicadores = document.querySelectorAll('.catalogo-indicadores .indicador');

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