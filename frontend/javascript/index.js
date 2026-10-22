const demoEmail="aziad711@gmail.com"
const demoPassword="password123"
const emailInput=document.getElementById("email")
const passwordInput=document.getElementById("password")
const emailIcon=document.getElementById("email-icon")
const passwordIcon=document.getElementById("password-icon")
const logo=document.getElementById("logo")
function validateForm(email, password) {
    if (email === demoEmail && password === demoPassword) {
        return true;
    } else {
        return false;
    }
}
const form=document.querySelector("form")
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const email=emailInput.value;
    const password=passwordInput.value;
    if (validateForm(email, password)) {
        alert("Login successful!");
    } else {
        alert("Invalid email or password.");
    }
});
