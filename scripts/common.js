var btn1 = document.getElementById("sign-up-button");
var signUpLink = document.getElementById("sign-up-link");
var modalSignUp = document.getElementById("signUpModal");
var close_signUp = document.getElementsByClassName("close_signUp")[0];
var btn2 = document.getElementById("sign-in-button");
var modalSignIn = document.getElementById("signInModal");
var close_signIn = document.getElementsByClassName("close_signIn")[0];

btn1.onclick = function () {
    modalSignUp.style.display = "block";
}
close_signUp.onclick = function () {
    modalSignUp.style.display = "none";
}
btn2.onclick = function () {
    modalSignIn.style.display = "block";
}
close_signIn.onclick = function () {
    modalSignIn.style.display = "none";
}
signUpLink.onclick = function () {
    modalSignIn.style.display = "none";
    modalSignUp.style.display = "block";
}
window.onclick = function (event) {
    if (event.target == modalSignUp) {
        modalSignUp.style.display = "none";
    }
    if (event.target == modalSignIn) {
        modalSignIn.style.display = "none";
    }
}