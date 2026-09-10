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
/* =========================================
   CAFFECO — SCROLL REVEAL ANIMATION
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        section.classList.add("reveal");
    });

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);

                }
            });
        },
        {
            threshold: 0.15
        }
    );

    sections.forEach(section => {
        observer.observe(section);
    });

});
/* =========================================
   CAFFECO — STAT NUMBER ANIMATION
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const counters = document.querySelectorAll(
        ".story-percent, .moment-circle, .taste2-info strong, .marketplace-discount span"
    );

    counters.forEach(counter => {

        const originalText = counter.textContent.trim();

        const match = originalText.match(/[\d,]+/);

        if (!match) return;

        const target = parseInt(match[0].replace(/,/g, ""), 10);

        let suffix = "";

        if (originalText.includes("%")) {
            suffix = "%";
        }

        if (originalText.includes("+")) {
            suffix = "+";
        }

        counter.textContent = "0" + suffix;

        const numberObserver = new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) return;

                    let start = 0;
                    const duration = 1200;
                    const startTime = performance.now();

                    function updateNumber(currentTime) {

                        const progress = Math.min(
                            (currentTime - startTime) / duration,
                            1
                        );

                        const easedProgress =
                            1 - Math.pow(1 - progress, 3);

                        const currentValue = Math.floor(
                            easedProgress * target
                        );

                        counter.textContent =
                            currentValue.toLocaleString() + suffix;

                        if (progress < 1) {
                            requestAnimationFrame(updateNumber);
                        } else {
                            counter.textContent =
                                target.toLocaleString() + suffix;
                        }
                    }

                    requestAnimationFrame(updateNumber);

                    numberObserver.unobserve(counter);
                });

            },
            {
                threshold: 0.5
            }
        );

        numberObserver.observe(counter);

    });

});