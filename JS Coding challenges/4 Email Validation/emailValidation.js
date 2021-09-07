const email = document.getElementById("email");
const valid = document.getElementById("valid")
var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

email.addEventListener("keypress", ()=>{
    if(email.value.match(regex)){
        valid.innerHTML = "Valid"
    } else{
        valid.innerHTML = "Invalid"
    }
})