
const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (event) {

    // Prevent form submission
    event.preventDefault();

    // Get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword =
        document.getElementById("confirmPassword").value;

    const age = document.getElementById("age").value;

    const gender =
        document.querySelector('input[name="gender"]:checked');

    const terms =
        document.getElementById("terms").checked;

    // Error elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError =
        document.getElementById("confirmPasswordError");
    const ageError = document.getElementById("ageError");
    const genderError = document.getElementById("genderError");
    const termsError = document.getElementById("termsError");
    const successMessage =
        document.getElementById("successMessage");

    // Clear old messages
    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
    ageError.textContent = "";
    genderError.textContent = "";
    termsError.textContent = "";
    successMessage.textContent = "";

    let valid = true;

    // Name validation
    const namePattern = /^[A-Za-z ]+$/;

    if (name === "") {
        nameError.textContent = "Name is required";
        valid = false;
    } 
    else if (!namePattern.test(name)) {
        nameError.textContent =
            "Name should contain only letters";
        valid = false;
    }

    // Email validation
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        emailError.textContent = "Email is required";
        valid = false;
    } 
    else if (!emailPattern.test(email)) {
        emailError.textContent =
            "Enter a valid email address";
        valid = false;
    }

    // Phone validation
    const phonePattern = /^[0-9]{10}$/;

    if (phone === "") {
        phoneError.textContent = "Phone number is required";
        valid = false;
    } 
    else if (!phonePattern.test(phone)) {
        phoneError.textContent =
            "Phone number must contain exactly 10 digits";
        valid = false;
    }

    // Password validation
    if (password === "") {
        passwordError.textContent =
            "Password is required";
        valid = false;
    } 
    else if (password.length < 8) {
        passwordError.textContent =
            "Password must contain at least 8 characters";
        valid = false;
    }

    // Confirm password
    if (confirmPassword === "") {
        confirmPasswordError.textContent =
            "Please confirm your password";
        valid = false;
    } 
    else if (password !== confirmPassword) {
        confirmPasswordError.textContent =
            "Passwords do not match";
        valid = false;
    }

    // Age validation
    if (age === "") {
        ageError.textContent = "Age is required";
        valid = false;
    } 
    else if (age < 18 || age > 60) {
        ageError.textContent =
            "Age must be between 18 and 60";
        valid = false;
    }

    // Gender validation
    if (!gender) {
        genderError.textContent =
            "Please select your gender";
        valid = false;
    }

    // Terms validation
    if (!terms) {
        termsError.textContent =
            "You must accept the terms and conditions";
        valid = false;
    }

    // Final result
    if (valid) {
        successMessage.textContent =
            "Registration successful!";

        form.reset();
    }
});
```
