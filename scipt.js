// Quando carregar a página
document.addEventListener("DOMContentLoaded", () => {
    
    // FADE-IN inicial
    document.querySelectorAll(".fade-in").forEach(el => {
        el.classList.add("visible");
    });

    // Scroll animation
    const revealElements = document.querySelectorAll(".reveal");

    function revealOnScroll() {
        const windowHeight = window.innerHeight;

        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;

            if (elementTop < windowHeight - 50) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);

    // Executa quando abre também
    revealOnScroll();
});


