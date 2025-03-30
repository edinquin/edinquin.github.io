
function validateEmail(email) {
    if (!email) {
        return "Please enter your Siena College email.";
    }
    if (!email.endsWith("@siena.edu")) {
        return "Invalid email. Use your Siena College email ending in '@siena.edu'.";
    }
    return ""; // No errors => Return empty string.
}

function validateSienaID(sienaID) {
    // Your code here: return an error message if the input is empty or not a number
    if (!sienaID) {
        return "Please Enter Your Siena ID.";
    }

    if (!parseInt(sienaID, 10)) {
        return "Invalid siena ID.";
    }

    if (sienaID.substring(0, 2) !== "90") {
        return "Invalid siena ID.";
    }

    return "";
}

function validateForm() {
    const emailInput = document.getElementById("emailAddress");
    const sienaIDInput = document.getElementById("sienaID");
    const emailError = document.getElementById("emailError");
    const sienaIDError = document.getElementById("sienaIDError");

    // Clear previous error messages
    emailError.textContent = "";
    sienaIDError.textContent = "";

    // Run validation checks
    const emailValidationMessage = validateEmail(emailInput.value.trim());

    // Display errors if any
    let isValid = true;
    if (emailValidationMessage) {
        emailError.textContent = emailValidationMessage;
        isValid = false;
    }
    // << ADD CODE HERE >>
    // Do something similar for SienaID error handling.

    // Run validation checks
    const IDValidationMessage = validateSienaID(sienaIDInput.value.trim());

    // Display errors if any
    if (IDValidationMessage) {
        sienaIDError.textContent = IDValidationMessage;
        isValid = false;
    }
    // If both are valid, submit the form
    if (isValid) {
        console.log("Form is valid! Submitting...");
        // submitRequest();
    }
}

document.getElementById("sienaForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Stop the form from submitting automatically
    validateForm(); // Call the validation function
})
