let numeroSecreto = 36;
let numeros = [0, 8, 10, 98, 36, 14];
let intento = 1;
let acerto = false;

while (acerto === false) {
    
    if (numeros[intento] === numeroSecreto) {
        acerto = true;

        console.log(`Intentos: ${intento + 1}`);
    }
    
    intento++;
}

