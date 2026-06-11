function contarVocales(texto) {
  texto = texto.toLowerCase();

  let contador = 0;

  for (let i = 0; i < texto.length; i++) {
    let letra = texto.charAt(i);

    if (
      letra === "a" ||
      letra === "e" ||
      letra === "i" ||
      letra === "o" ||
      letra === "u"
    ) {
      contador++;
    }
  }

  return contador;
}

console.log(contarVocales("dormir bien"));
console.log(contarVocales("¿Como estas?"));
console.log(contarVocales("comer"));