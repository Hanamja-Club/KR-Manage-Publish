//title.js

document.addEventListener("DOMContentLoaded", function() {
    
    const validId = "junghj96";
    const validPassword = "richard1996";

    
    const loginButton = document.getElementById("loginButton");
    loginButton.addEventListener("click", function() {
        
        const enteredId = document.getElementById("userId").value;
        const enteredPassword = document.getElementById("userPW").value;

        
        if (enteredId === validId && enteredPassword === validPassword) {
            
            alert("로그인 성공!");
        } else {
            
            document.querySelector(".modal").style.display = "flex";
        }
    });

    
    const modalCloseButton = document.querySelector(".modal-close");
    modalCloseButton.addEventListener("click", function() {
        document.querySelector(".modal").style.display = "none";
    });
});