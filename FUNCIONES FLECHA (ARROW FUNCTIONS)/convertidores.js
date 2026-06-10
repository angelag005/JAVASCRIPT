// Arrow functions
const celsiusAFahrenheit = (c) => c * ( 9 / 5 ) + 32;

const kilometrosAMillas = (km) => km * 0.621;

const kilogramosALibras = (kg) => kg * 2.205;

// Pruebas
console.log(celsiusAFahrenheit(25).toFixed(2));
console.log(kilometrosAMillas(10).toFixed(2));
console.log(kilogramosALibras(70).toFixed(2));