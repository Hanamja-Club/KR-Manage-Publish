//header_menu.js

document.addEventListener("DOMContentLoaded", function() {
    const menuOpen = document.getElementById("menuOpen");
    const menuClose = document.getElementById("menuClose");
    const naviMove = document.getElementById("mobile-nav");

    menuOpen.addEventListener('click', function() {
        naviMove.classList.add('on');
    });

    menuClose.addEventListener('click', function() {
        naviMove.classList.remove('on');
    });
});