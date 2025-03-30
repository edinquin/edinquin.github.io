// "use strict";
let currentDate = new Date();
const currentDateString = currentDate.toISOString().split("T")[0];
currentDate = new Date(currentDateString);

const checkName = document.getElementById("checkName");
const checkDate = document.getElementById("checkDate");
checkDate.setAttribute("min", currentDateString);
const checkAmount = document.getElementById("checkAmount");
const checkBank = document.getElementById("checkBank");
const checkNumber = document.getElementById("checkNumber");
const submit = document.getElementById("submit");

function validateForm() {
    const nameError = document.getElementById('nameError');
    const amountError = document.getElementById('amountError');
    const dateError = document.getElementById('dateError');
    const bankError = document.getElementById('bankError');
    const numberError = document.getElementById('numberError');
    
    nameError.textContent = "";
    amountError.textContent = "";
    dateError.textContent = "";
    bankError.textContent = "";
    numberError.textContent = "";

    let isValid = true;

    if (checkName.value.trim().length < 5) {
        nameError.textContent = "Please Enter Your Check Name.";
        isValid = false;
    }

    const inputDate = new Date(checkDate.value.trim());
    if (inputDate == "Invalid Date" || inputDate < currentDate) {
        dateError.textContent = "Invalid Date.";
        isValid = false;
    }

    const checkAmountNumber = parseFloat(checkAmount.value.trim());
    if (!checkAmountNumber || checkAmountNumber <= 0) {
        amountError.textContent = "Please Enter Your Check Amount.";
        isValid = false;
    }

    const intCheckNumber = parseFloat(checkNumber.value.trim());
    if (!intCheckNumber || checkNumber.value.trim().length < 10) {
        numberError.textContent = "Please Enter Your Income Amount.";
        isValid = false;
    }

    if (checkBank.value.trim().length < 5) {
        bankError.textContent = "Please Enter Your Bank.";
        isValid = false;
    }

    if (isValid) {
        console.log("Form is submitting.");
        alert("Form is submitting.");
    }
}


checkAmount.addEventListener("blur", (e) => {
    const number = parseFloat(e.target.value.trim());
    if (number) {
        e.target.value = number.toFixed(2);
    }
})


submit.addEventListener("click", (e) => {
    e.preventDefault();
    validateForm();
})