function validateName() {
    const name = document.getElementById("fullName").value.trim();
    if (name === "") {
        throw "Error: Name is required.";
    }
}
function validateEmail() {
    const email = document.getElementById("email").value.trim();
    const emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{3}$/;
    if (!emailRegex.test(email)) {
        throw "Error: Invalid Email Address.";
    }
}
function validatePassword() {
    const password = document.getElementById("password").value;
    if (password.length < 8) {
        throw "Error: Password must be at least 8 characters.";
    }
}
function confirmPassword() {
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirmPassword").value;
    if (password !== confirm) {
        throw "Error: Passwords do not match.";
    }
}
function validateForm() {
    const feedback = document.getElementById("feedback");
    try {
        const name = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirm = document.getElementById("confirmPassword").value;
        if (!name || !email || !password || !confirm) {
            throw "Error: All fields are required.";
        }
        validateName();
        validateEmail();
        validatePassword();
        confirmPassword();
        feedback.innerHTML = `<span style="color: green;">Registration successful!</span>`;
    } catch (error) {
        feedback.innerHTML = `<span style="color: red;">${error}</span>`;
    }
}