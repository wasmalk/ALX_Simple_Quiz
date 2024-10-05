
function add(num1, num2) {
    return num1 + num2;
}


function subtract(num1, num2) {
    return num1 - num2;
}


function multiply(num1, num2) {
    return num1 * num2;
}


function divide(num1, num2) {
    return num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
}


function displayResult(result) {
    document.getElementById("calculation-result").textContent = result;
}


document.getElementById("add").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("number1").value);
    const num2 = parseFloat(document.getElementById("number2").value);
    const result = add(num1, num2);
    displayResult(result);
});

document.getElementById("subtract").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("number1").value);
    const num2 = parseFloat(document.getElementById("number2").value);
    const result = subtract(num1, num2);
    displayResult(result);
});

document.getElementById("multiply").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("number1").value);
    const num2 = parseFloat(document.getElementById("number2").value);
    const result = multiply(num1, num2);
    displayResult(result);
});

document.getElementById("divide").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("number1").value);
    const num2 = parseFloat(document.getElementById("number2").value);
    const result = divide(num1, num2);
    displayResult(result);
});
