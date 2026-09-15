var inputname = document.getElementById("logName"); 
var inputpassword = document.getElementById("logPassword");
var btnsend = document.getElementById("loginForm").querySelector("button");

var nameStorage = localStorage.getItem("firstname");
var passStorage = localStorage.getItem("password");

function send(e) {
    e.preventDefault(); 

    if (inputname.value === nameStorage && inputpassword.value === passStorage) {
        
        btnsend.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Verifying...';

        setTimeout(() => {
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("loggedInUser", nameStorage);
            location = "index.html";
        }, 1000);

    } else {
        alert("Invalid Name or Password. Please try again.");
    }
}

btnsend.addEventListener("click", send);
