let puntajes = [33, 4, 20, 8, 39, 10,];

let copia = [...puntajes];

const ordenados = copia.sort((a, b) => b - a);
console.log("mayor a menor:", ordenados);


let top = copia.slice(0, 3);

console.log("Top 3",top);

let suma = top.reduce((suma, d) => suma + d, 0);
let promedio = suma / top.length;

console.log("Promedio: ",promedio);




