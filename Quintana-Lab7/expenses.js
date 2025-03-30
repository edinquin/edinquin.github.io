// "use strict";

let currentDate = new Date();
const currentDateString = currentDate.toISOString().split("T")[0];
currentDate = new Date(currentDateString);

const expenseName = document.getElementById("expenseName");
const expenseDate = document.getElementById("expenseDate");
expenseDate.setAttribute("max", currentDateString);
const expenseAmount = document.getElementById("expenseAmount");
const methodType = document.getElementById("methodType");
const comments = document.getElementById("comments");
const submit = document.getElementById("submit");

function validateForm() {
    const nameError = document.getElementById('nameError');
    const amountError = document.getElementById('amountError');
    const dateError = document.getElementById('dateError');
    const categoryError = document.getElementById('categoryError');
    const methodTypeError = document.getElementById('methodTypeError');
    const commentsError = document.getElementById('commentsError');
    const expenseCategory = document.querySelector('input[type="radio"]:checked');

    nameError.textContent = "";
    amountError.textContent = "";
    dateError.textContent = "";
    categoryError.textContent = "";
    methodTypeError.textContent = "";
    commentsError.textContent = "";

    let isValid = true;

    if (expenseName.value.trim().length < 3) {
        nameError.textContent = "Please Enter Your Expense Name.";
        isValid = false;
    }

    const expenseAmountNumber = parseFloat(expenseAmount.value.trim());
    if (!expenseAmountNumber || expenseAmountNumber <= 0) {
        amountError.textContent = "Please Enter Your Income Amount.";
        isValid = false;
    }

    const inputDate = new Date(expenseDate.value.trim());
    if (inputDate == "Invalid Date" || inputDate > currentDate) {
        dateError.textContent = "Invalid Date.";
        isValid = false;
    }

    const categoryOptions = ["groceries", "business", "restaurants", "fun"]
    const category = expenseCategory.value.trim();
    if (categoryOptions.findIndex(option => option === category) === -1) {
        categoryError.textContent = "Category Invalid.";
        isValid = false;
    }

    const methodOptions = ["creditCard", "debitCard", "cash"]
    const method = methodType.value.trim()
    if (methodOptions.findIndex(option => option === method) === -1) {
        methodTypeError.textContent = "Invalid Method.";
        isValid = false;
    }

    if (comments.value.trim().length > 100) {
        nameError.textContent = "Comment Can't Be Over 100 Characters."
        isValid = false;
    }

    if (isValid) {
        console.log("Form is submitting.");
        alert("Form is submitting.");
    }
}


expenseAmount.addEventListener("blur", (e) => {
    const number = parseFloat(e.target.value.trim());
    if (number) {
        e.target.value = number.toFixed(2);
    }
})


submit.addEventListener("click", (e) => {
    e.preventDefault();
    validateForm();
})