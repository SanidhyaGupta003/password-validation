let pswd = document.getElementById("password");
let toggleBtn = document.getElementById("toggle-button");

//show, hide password
toggleBtn.onclick = function(){
    if(pswd.type === "password"){
        pswd.setAttribute("type", "text");
        toggleBtn.classList.add("hide");
    } else{
        pswd.setAttribute("type", "password");
        toggleBtn.classList.remove("hide");
    }
}

// validation
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let number = document.getElementById("number");
let special = document.getElementById("special");
let length = document.getElementById("length");

function validatePassword(data){
    // javascript regular expression pattern
    const lowercaseRegEx = new RegExp("(?=.*[a-z])");
    const uppercaseRegEx = new RegExp("(?=.*[A-Z])");
    const numberRegEx = new RegExp("(?=.*[0-9])");
    const specialRegEx = new RegExp("(?=.*[!@#\$%\^&\*])");
    const lengthRegEx = new RegExp("(?=.{8,})");

    // lowercase
    if(lowercaseRegEx.test(data)){
        lowercase.classList.add("valid");
    } else{
        lowercase.classList.remove("valid");
    }

    // uppercase
    if(uppercaseRegEx.test(data)){
        uppercase.classList.add("valid");
    } else{
        uppercase.classList.remove("valid");
    }

    // number
    if(numberRegEx.test(data)){
        number.classList.add("valid");
    } else{
        number.classList.remove("valid");
    }

    // special
    if(specialRegEx.test(data)){
        special.classList.add("valid");
    } else{
        special.classList.remove("valid");
    }

    // length
    if(lengthRegEx.test(data)){
        length.classList.add("valid");
    } else{
        length.classList.remove("valid");
    }
}
