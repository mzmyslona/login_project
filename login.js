const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
//zmiana wartosci zmiennych do loginu i hasla w celu mozliwosci zalogowania się 
    if (username === "maja" && password === "admin") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
