//Pedir los datos
let titulo = "Boulevard";
let autor = "flormsalvador";
const añoPublicacion = 2020;
let paginas = 33;
let disponibles = true;

//Imprimir los datos
console.log("Titulo: ", titulo, "-", typeof titulo);
console.log("Autor: ", autor, "-", typeof autor);
console.log("Año de publicacion: ", añoPublicacion, "-", typeof añoPublicacion);
console.log("Paginas: ", paginas, "-", typeof paginas);
console.log("Disponibles: ", disponibles, "-", typeof disponibles);

//template literal
const mensaje = `El libro se llama ${titulo}, su autor es ${autor}, se publico en el año ${añoPublicacion}, tiene ${paginas} paginas, disponible:${disponibles}`;
console.log(mensaje);