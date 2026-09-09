const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});


const navLinks = document.querySelectorAll("#nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });

});


const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Thank you for contacting Caffeco!");

    contactForm.reset();

});