function calcularFactorial(n){
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

function pedirNumero(){
    let numero;
    do {
        const entrada = prompt("Introduce un número entero positivo:");
        numero = parseInt(entrada);

        if (isNaN(numero) || numero < 0 || !Number.isInteger(numero)) {
            alert("Por favor, introduce un número entero positivo. No letras ni decimales.");
        }
    } while (isNaN(numero) || numero < 0 || !Number.isInteger(numero));
    return numero;
}

const numero = pedirNumero();
const factorial = calcularFactorial(numero);

console.log(`El factorial de ${numero} es ${factorial}.`);

const resultadoElemento = document.getElementById("resultado");
resultadoElemento.textContent = `El factorial de ${numero} es ${factorial}.`;