const productContainer = document.getElementById("product-container");
        const forHim = document.getElementById("for-him");
        const forHer = document.getElementById("for-her");

        // Definir productos masculinos
        const productsForHim = `
            
        `;

        // Definir productos femeninos
        const productsForHer = `
            
        `;

        // Mostrar productos iniciales (Hombres)
        productContainer.innerHTML = productsForHim;

        // Función para cambiar productos con animación
        function changeProducts(target, products) {
            productContainer.style.opacity = "0"; // Desvanecer contenido
            setTimeout(() => {
                productContainer.innerHTML = products; // Reemplazar contenido
                productContainer.style.opacity = "1"; // Volver a mostrar
            }, 300);

            forHim.classList.toggle("active", target === "him");
            forHer.classList.toggle("active", target === "her");
        }

        // Eventos para cambiar productos en hover con animación
        forHer.addEventListener("mouseover", () => changeProducts("her", productsForHer));
        forHim.addEventListener("mouseover", () => changeProducts("him", productsForHim));
