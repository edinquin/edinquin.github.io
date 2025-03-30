const incomeName = document.getElementById('incomeName');
const amount = document.getElementById('incomeAmount');
const frequency = document.getElementById('frequency');
const submitButton = document.getElementById('submit');

function validateForm() {
    const nameError = document.getElementById('nameError');
    const amountError = document.getElementById('amountError');
    const frequencyError = document.getElementById('frequencyError');
    
    nameError.textContent = "";
    amountError.textContent = "";
    frequencyError.textContent = "";
    
    let isValid = true;
    
    if (incomeName.value.trim().length < 3) {
        nameError.textContent = "Please Enter Your Income Name.";
        isValid = false;
    }
    
    const incomeAmount = parseFloat(amount.value.trim());
    if (!incomeAmount || incomeAmount <= 0) {
        amountError.textContent = "Please Enter Your Income Amount.";
        isValid = false;
    }
    
    const options = ["monthly", "one-time", "bi-weekly", "yearly"]
    const month = frequency.value.trim()
    if (options.findIndex(option => option === month) === -1) {
        frequencyError.textContent = "Please Select One Of The Avaiable Options.";
        isValid = false;
    }
    
    if (isValid) {
        console.log("Form is submitting.");
        alert("Form is submitting.");
    }
}

 amount.addEventListener("blur", (e) => {
     const number = parseFloat(e.target.value.trim());
     if (number) {
         e.target.value = number.toFixed(2);
     }
 })

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    validateForm();
})