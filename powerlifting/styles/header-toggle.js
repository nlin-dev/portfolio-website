// Toggle for the dropdown menu
document.addEventListener("DOMContentLoaded", function() {
    var hamburger = document.getElementById("hamburger-menu");
    var nav = document.getElementById("main-nav");

    hamburger.addEventListener("click", function() {
        // Toggle class that changes display or visibility of menu
        nav.classList.toggle("is-active");
    });
});