document.addEventListener("DOMContentLoaded", function () {
    const thumbnails = document.querySelectorAll(".thumbnails img");
    
    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener("click", function () {
            document.querySelector(".thumbnails img.active")?.classList.remove("active");
            this.classList.add("active");
            const carousel = new bootstrap.Carousel(document.querySelector("#productCarousel"));
            carousel.to(index);
        });
    });
});
