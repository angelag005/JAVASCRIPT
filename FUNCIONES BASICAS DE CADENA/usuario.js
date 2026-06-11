let nombreCrudo = "pEDRO peRez";
let limpiaNombre = nombreCrudo.trim();

let dividir = limpiaNombre.split(" "); 

let nombre = dividir[0]; 
let apellido = dividir[1]; 


let nombreCapitalizado = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
let apellidoCapitalizado = apellido.charAt(0).toUpperCase() + apellido.slice(1).toLowerCase();


let completo = [nombreCapitalizado, apellidoCapitalizado];


let nombreFinal = completo.join(' ');

console.log("nombre crudo: ", nombreCrudo); 
console.log("nombre Capitalizado: " + nombreCapitalizado); 
console.log("apellido Capitalizado: " + apellidoCapitalizado); 
console.log(nombreFinal); 
