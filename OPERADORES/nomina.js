//Declara variables
let  salario = 2000000;
const quincena = salario / 2;
const salud = quincena * 0.04;;
const pension = quincena * 0.04;
let prestamo = 100000;

let totalDes = salud + pension + prestamo;
let salarioNeto = quincena - totalDes;

//Imprimir
console.log("Salario: " + salario);
console.log("Salario bruto: " + quincena);
console.log("Salud:" + salud)
console.log("Pension: " + pension);
console.log("Prestamo: " + prestamo);
console.log("Salario Neto Final: " + salarioNeto);