var inputfname = document.getElementById("signName");
var inputemail = document.getElementById("signEmail");
var inputpassword = document.getElementById("signPassword");
var btnsend = document.getElementById("sendBtn");

function send() {
    if (inputfname.value === "" || inputemail.value === "" || inputpassword.value === "") {
        alert("Please write in all sections");
    } else {
        localStorage.setItem("firstname", inputfname.value);
        localStorage.setItem("email", inputemail.value);
        localStorage.setItem("password", inputpassword.value);

        btnsend.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Creating account...';

        setTimeout(function() {
            location.href = "log.html";
        }, 1000);
    }
}

btnsend.addEventListener("click", send);
