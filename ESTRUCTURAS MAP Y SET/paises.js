let paisesVisitados =  ['Colombia','México', 'España', 'México', 'Argentina', 'Colombia', 'Perú', 'Argentina'];

const paisesUnicos = new Set(paisesVisitados);
console.log("Paises unicos: ", paisesUnicos);

console.log("\nCuantos países distintos visito:", paisesUnicos.size);

const paises2027 = new Set(["México","Colombia","Mexico","Brasil"]);

for (let pais of paisesUnicos) {

  if (paises2027.has(pais)) {
    console.log("País en común:", pais);

  }

}