let numero;
let intentos = 0;

do {
    numero = Math.floor(Math.random() * 100) + 1; 
    intentos++;

    console.log("Número generado:", numero);

} while (numero >= 10);

console.log("-------------------------");
console.log("Intentos:", intentos);