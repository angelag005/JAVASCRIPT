const menu = [1, 2, 3, 0];
let i = 0;
let opciones;

do {
    opciones = menu[i];

    console.log("1 sumar");
    console.log("2. restar");
    console.log("3. multiplicar");
    console.log("0. salir");

    switch (opciones) {
        case 1:
            console.log("suma");
            console.log("-------------------------");

            break;
        
        case 2: 
            console.log("resta");
            console.log("-------------------------");

            break;
        
        case 3:
            console.log("multiplicacion");
            console.log("-------------------------");

            break;

        case 0:
            console.log("¡ADIOSSSS!");
            console.log("-------------------------");

            break;
    
        default:
            console.log("ERROR");
            console.log("-------------------------");
            
            break;
    }
    i++
} while (opciones !== 0);