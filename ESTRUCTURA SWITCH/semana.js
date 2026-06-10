let numero = 9;
let dia;

switch (numero) {
    case 1:
        dia = "Lunes";
        break;
    
    case 2: 
        dia = "Martes";
        break;
    
    case 3:
        dia = "Miercoles";
        break;
    
    case 4: 
        dia = "Jueves";
        break;

    case 5:
        dia = "Viernes";
        break;
    
    case 6:
        dia = "Sabado";
        break;
    
    case 7:
        dia = "Domingo";
        break;

    default:
        dia = "Dia Invalido";
        break;
}

console.log("Numero: " + numero + " Dia: " + dia);