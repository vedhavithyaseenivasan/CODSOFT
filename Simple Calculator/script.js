// script.js
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let operator = null;
let firstOperand = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value === 'C') {
            currentInput = '';
            operator = 0;
            firstOperand = 0;
            display.textContent = '';
        } else if (value === '=') {
            if (operator && firstOperand !== 0) {
                currentInput = calculate(firstOperand, parseFloat(currentInput), operator);
                display.textContent = currentInput;
                operator = null;
                firstOperand = null;
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (currentInput !== '') {
                firstOperand = parseFloat(currentInput);
                operator = value;
                currentInput = '';
            }
        } else {
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});

function calculate(operand1, operand2, operator) {
    switch (operator) {
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case '*':
            return operand1 * operand2;
        case '/':
            return operand1 / operand2;
        default:
            return 0;
    }
}
