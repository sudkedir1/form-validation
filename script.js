
// 1. Select the form
const form = document.getElementById("registerForm");

// 2. Select all input fields
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput =
    document.getElementById("confirmPassword");

// 3. Select error message elements
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmError = document.getElementById("confirmError");

const successMessage =
    document.getElementById("successMessage");


// 4. Listen for form submission
form.addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();

    // Reset previous errors
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmError.textContent = "";
    successMessage.textContent = "";

    // Get input values
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    let isValid = true;


    // 5. Validate name
    if (name.length < 3) {
        nameError.textContent =
            "Name must be at least 3 characters.";

        isValid = false;
    }else if(/\d/.test(name)){
        nameError.textContent="name should not contain a number";
        isValid = false;

    }


    // 6. Validate email
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        emailError.textContent =
            "Please enter a valid email.";

        isValid = false;
    }


    // 7. Validate password
    if (password.length < 8) {
        passwordError.textContent =
            "Password must be at least 8 characters.";

        isValid = false;
    }


    // 8. Confirm password
    if (confirmPassword !== password) {
        confirmError.textContent =
            "Passwords do not match.";

        isValid = false;
    }


    // 9. Check final result
    if (isValid) {
        successMessage.textContent =
            "Registration successful!";

        form.reset();
    }

});
