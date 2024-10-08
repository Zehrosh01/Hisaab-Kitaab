const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');

let currentInput = '';
let previousInput = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value === 'C') {
            clear();
        } else if (value === '=') {
            calculate();
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
            handleOperator(value);
        } else {
            handleNumber(value);
        }


        display.value = previousInput + currentInput + operator ;
    });
});

function handleNumber(value) {
    currentInput += value;
    display.value = currentInput;
}

function handleOperator(value) {
    if (previousInput !== '') {
        calculate();
    }

    operator = value;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    let result;

    switch (operator) {
        case '+':
            result = parseFloat(previousInput) + parseFloat(currentInput);
            break;
        case '-':
            result = parseFloat(previousInput) - parseFloat(currentInput);
            break;
        case '*':
            result = parseFloat(previousInput) * parseFloat(currentInput);
            break;
        case '/':
            result = parseFloat(previousInput) / parseFloat(currentInput);
            break;
        default:
            return;
    }

    currentInput = result.toString();
    display.value = currentInput;
    previousInput = '';
    operator = '';
}

function clear() {
    currentInput = '';
    previousInput = '';
    operator = '';
    display.value = currentInput;
}





