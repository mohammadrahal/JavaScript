let res = document.getElementById('result')
const submitBtn = document.getElementById('submit');
const numberButtons = document.querySelectorAll('.number-btn');

// to store number of  buttons 
// const numbers = '' connt be constant variable it should be var or better let;
let numbers = '';



// loop for every button clicked
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Store the selected number in a variable
        numbers = button.value;
    });
});

// function to check button
submitBtn.addEventListener('click', () => {
    if (numbers !== null) {
        // Show an alert with the selected number
        res.innerHTML = 'You chose number: ' + numbers;
    } else {
        // If no number is selected, show an alert
        res.innerHTML = 'Please choose a number before submitting.';
    }
});
