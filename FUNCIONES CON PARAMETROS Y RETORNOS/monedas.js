function pesosADolares(pesos, tasa = 4100) {
    
    return (pesos / tasa).toFixed(2); 
}

// dos usando la tasa por defecto
console.log(pesosADolares(20000));
console.log(pesosADolares(30000));

//uno con tasa personalizada
console.log(pesosADolares(40000, 3000));
