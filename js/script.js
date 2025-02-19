document.addEventListener("DOMContentLoaded", function() {
    console.log("Navbar loaded successfully.");

    // Adding a slight boucne effect when hovering over button
    const buttons = document.querySelectorAll(".nav-btn, .name-btn");

    buttons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.transform = "scale(1.1)";
        });

        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
        });
    });

});

function toggleMenu() {
    const menu = document.querySelector(".nav-middle");
    menu.classList.toggle("active");
}
