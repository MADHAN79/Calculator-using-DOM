document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('result');

    document.addEventListener('keydown', function(e) {
        if (isNumberKey(e.key)) {
            appendNumber(e.key);
        } else if (isOperatorKey(e.key)) {
            appendOperator(e.key);
        } else if (e.key === 'Enter') {
            calculateResult();
        } else if (e.key === 'Backspace') {
            display.value = display.value.slice(0, -1);
        } else if (!isControlKey(e.key)) {
            alert('Only numbers and basic operators (+, -, *, /) are allowed');
            e.preventDefault();
        }
    });

    function isNumberKey(key) {
        return !isNaN(key) && key.trim() !== '';
    }

    function isOperatorKey(key) {
        return ['+', '-', '*', '/'].includes(key);
    }

    function isControlKey(key) {
        return ['Backspace', 'Enter', 'Escape', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Delete'].includes(key);
    }
});

function appendNumber(number) {
    const display = document.getElementById('result');
    display.value += number;
}

function appendOperator(operator) {
    const display = document.getElementById('result');
    display.value += ' ' + operator + ' ';
}

function clearDisplay() {
    const display = document.getElementById('result');
    display.value = '';
}

function calculateResult() {
    const display = document.getElementById('result');
    try {
        display.value = eval(display.value.replace(/\s+/g, ''));
    } catch (e) {
        alert('Invalid expression');
    }
}
