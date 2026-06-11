const estudiantes = [
  { nombre: "María", nota: 3.9 },
  { nombre: "Pedro", nota: 4.2 },
  { nombre: "Luna", nota: 2.5 }
];

let altaNota = estudiantes.reduce((alta, e) => e.nota > alta.nota ? e : alta);
console.log("estudiante con nota mas alta:", altaNota);

let sumaPro = estudiantes.reduce((suma, e) => suma + e.nota, 0)  
let promedio = sumaPro / estudiantes.length;
console.log("Promedio:", promedio);

let aprobados = estudiantes.filter(e => e.nota >= 3.0);
console.log("Cantidad de aprobados:", aprobados.length);


const algunoReprobo = estudiantes.some(e => e.nota < 3.0);
console.log("¿Alguno reprobó?", algunoReprobo);

const todosAprobaron = estudiantes.every(e => e.nota >= 3.0);
console.log("¿Todos aprobaron?", todosAprobaron);