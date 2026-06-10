const tipoVehiculo = "bicicleta";
const horas = 5;
const valorHora = 
    tipoVehiculo === "carro" ? 3000 : 
    tipoVehiculo === "moto" ? 1500 : 
    0; 


const total = valorHora * horas;

console.log(`Pago por ${horas}h de ${tipoVehiculo}: $${total}`);