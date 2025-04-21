function calculateFactorial(n){
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

function askNumber(){
    let number;
    do {
        const input = prompt("Introduce un número entero positivo:");
        number = parseInt(input);

        if (isNaN(number) || number < 0 || !Number.isInteger(number)) {
            alert("Por favor, introduce un número entero positivo. No letras ni decimales.");
        }
    } while (isNaN(number) || number < 0 || !Number.isInteger(number));
    return number;
}

const number = askNumber();
const factorial = calculateFactorial(number);

console.log(`El factorial de ${number} es = ${factorial}.`);

const resultElement = document.getElementById("result");
resultElement.textContent = `El factorial de ${number} es = ${factorial}.`;