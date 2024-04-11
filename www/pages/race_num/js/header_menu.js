//header_menu.js

document.addEventListener("DOMContentLoaded",function() {
    const menuToggle = document.getElementById("menu-toggle");
    const navigation = document.getElementById("mobile-nav");

    menuToggle.addEventListener("click", function(){
        if (navigation.style.display === "none" || navigation.style.display === "") {
            navigation.style.display = "block";
        } else {
            navigation.style.display = "none";
        }
    });
});