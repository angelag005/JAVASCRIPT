let sumaTotal = 0;
let Multiplos5 = 0;

for (let i = 1; i <= 100; i++) {
    let resultadoSumaAnterior = sumaTotal; 
    
    sumaTotal += i; 
    
    console.log(`${i} + ${resultadoSumaAnterior} = ${sumaTotal}`);

    if (i % 5 === 0) {
       Multiplos5++;
    }

}

console.log(`Suma total: ${sumaTotal}`);
console.log(`Total múltiplos de 5: ${Multiplos5}`);
