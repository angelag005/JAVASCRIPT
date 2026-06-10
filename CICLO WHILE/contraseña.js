let contraseña = ['hola', '123', 'abc12345', 'ContraseñaFuerte2026'];
let descartaron = 0;

//para contar las vueltas
let intentos = 0;

while (contraseña[intentos].length < 8 ) {

    descartaron++;
    intentos++;
}

console.log("Contraseña que tienen al menos 8 caracteres: " + contraseña[intentos]);
console.log("Contrseñas que descartaron: " + descartaron);