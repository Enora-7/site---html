document.addEventListener("mousemove", function (e) {
    const star = document.createElement("span");

    star.className = "star";
    star.textContent = "★";

    star.style.left = e.clientX + "px";
    star.style.top = e.clientY + "px";

    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 800);
});

// ===== HAMBURGER MENU =====

const menuButton = document.getElementById("menu-button");
const sideMenu = document.getElementById("side-menu");
const closeButton = document.getElementById("close-menu");
const menuOverlay = document.getElementById("menu-overlay");

function openMenu() {
    sideMenu.classList.add("open");
    menuOverlay.classList.add("visible");
    menuButton.setAttribute("aria-expanded", "true");
}

function closeMenu() {
    sideMenu.classList.remove("open");
    menuOverlay.classList.remove("visible");
    menuButton.setAttribute("aria-expanded", "false");
}

menuButton.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);
menuOverlay.addEventListener("click", closeMenu);

// Close the menu when Escape is pressed
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeMenu();
    }
});

// ===== CONTENT SLIDER =====

document.querySelectorAll(".content-slider").forEach((slider) => {
    const track = slider.querySelector(".slider-track");
    const prevButton = slider.querySelector(".slider-arrow.prev");
    const nextButton = slider.querySelector(".slider-arrow.next");

    function moveSlider(direction) {
        const card = track.querySelector(".slider-card");

        if (!card) return;

        const trackStyles = getComputedStyle(track);
        const gap = parseFloat(trackStyles.gap) || 0;
        const distance = card.getBoundingClientRect().width + gap;

        track.scrollBy({
            left: direction * distance,
            behavior: "smooth"
        });
    }

    prevButton.addEventListener("click", () => {
        moveSlider(-1);
    });

    nextButton.addEventListener("click", () => {
        moveSlider(1);
    });
});
