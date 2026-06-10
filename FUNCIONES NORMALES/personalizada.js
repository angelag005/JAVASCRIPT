function imprimirReloj () {
    const fecha = new Date();
    const fechaTexto = fecha.toLocaleDateString("es-CO");

    console.log(fechaTexto);
}

function imprimirFraseDelDia() {
    let frases = ["Felicidades", "Tu puedes", "lo haces bien", "No te rindas", "Eres ingreible"];

    let alAzar = Math.floor(Math.random() * frases.length);
    console.log(frases[alAzar]);
}

imprimirReloj();
imprimirFraseDelDia();

