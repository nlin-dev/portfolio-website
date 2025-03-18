document.addEventListener("DOMContentLoaded", function() {
    console.log("Navbar loaded successfully.");

    // Slight Bounce Effect on Navbar Buttons
    const buttons = document.querySelectorAll(".nav-btn, .name-btn");

    buttons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.transform = "scale(1.1)";
        });

        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
        });
    });

    // Highlights Current Page in Navbar
    const currentPage = window.location.pathname.split("/").pop() || "index.html"; // Default to index.html

    document.querySelectorAll(".nav-btn").forEach(link => {
        const linkPage = link.getAttribute("href").split("/").pop();
        
        if (linkPage === currentPage) {
            link.classList.add("current-page");
        }
    });

    // Navbar Hamburger Toggle
    const menuIcon = document.querySelector(".menu-icon");
    const navLeft = document.querySelector(".mobile-menu");

    if (menuIcon && navLeft) {
        menuIcon.addEventListener("click", () => {
            navLeft.classList.toggle("active");
        });
    }
});
