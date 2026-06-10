const numeros = [12, 45, 67, 23, 89, 11, 56, 34];

const mayoresA30 = numeros.filter(p => p > 30);
console.log("Mayores a 30:", mayoresA30);

const multiplicados = mayoresA30.map(p => p * 2);
console.log("Multiplicados por 2:", multiplicados);

const sumaTotal = multiplicados.reduce((suma, d) => suma + d, 0);
console.log("Suma total:", sumaTotal);