document.addEventListener("DOMContentLoaded", function () {
    // Agregar funcionalidad para que el menú se abra al pasar el mouse y se cierre al salir
    const dropdowns = document.querySelectorAll(".nav-item.dropdown");

    dropdowns.forEach((dropdown) => {
        dropdown.addEventListener("mouseenter", function () {
            let menu = this.querySelector(".dropdown-menu");
            if (menu) {
                menu.style.display = "block";
            }
        });

        dropdown.addEventListener("mouseleave", function () {
            let menu = this.querySelector(".dropdown-menu");
            if (menu) {
                menu.style.display = "none";
            }
        });
    });

    // Activar el carrusel automáticamente
    let carousel = new bootstrap.Carousel(document.querySelector("#carouselExample"), {
        interval: 3000, // Cambia de imagen cada 3 segundos
        ride: "carousel"
    });
});
