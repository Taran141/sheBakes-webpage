let next = document.querySelector(".next");
let prev = document.querySelector(".prev");


next.addEventListener("click", function () {
    let items = document.querySelectorAll('.slider-item');
    document.querySelector('.slider').appendChild(items[0]);
})

prev.addEventListener("click", function () {
    let items = document.querySelectorAll('.slider-item');
    document.querySelector('.slider').prepend(items[items.length - 1]);
})


// //**  menu buttons   **//

document.addEventListener("DOMContentLoaded", function () {
    const menuSlider = document.querySelector(".menu-slider");
    const menuPrevBtn = document.querySelector(".menu-prev-btn");
    const menuNextBtn = document.querySelector(".menu-next-btn");
    const menuItems = document.querySelectorAll(".menu-item");
    const menuItemWidth = menuItems[0].offsetWidth + 20; // Includes margin
    const visibleItems = 4; // Number of items visible
    let menuCounter = 0;

    function updateMenuSlider() {
        menuSlider.style.transition = "transform 0.5s ease-in-out";
        menuSlider.style.transform = `translateX(-${menuCounter * menuItemWidth}px)`;
    }

    menuNextBtn.addEventListener("click", function () {
        if (menuCounter < menuItems.length - visibleItems) {
            menuCounter++;
        } else {
            menuCounter = 0; // Loop back to first
        }
        updateMenuSlider();
    });

    menuPrevBtn.addEventListener("click", function () {
        if (menuCounter > 0) {
            menuCounter--;
        } else {
            menuCounter = menuItems.length - visibleItems; // Loop back to last
        }
        updateMenuSlider();
    });
});
