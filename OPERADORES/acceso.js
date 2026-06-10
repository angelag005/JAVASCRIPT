let mayorEdad = true;
let cuentaActiva = false;
let administrador = false;

const puedeEntrar = mayorEdad == true && cuentaActiva || administrador;

console.log("¿Puede ingresar?: " + puedeEntrar);
