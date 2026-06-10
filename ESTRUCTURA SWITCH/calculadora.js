let num1 = 5;
let num2 = 3;
let operador = "-";

switch (operador) {
    case "+":
        
        console.log("Resultado: " );
        console.log(num1 + num2);

        break;

    case "-":
        console.log("Resultado: " );
        console.log(num1 - num2);

        break;

    case "*":
        console.log("Resultado: " );
        console.log(num1 * num2);

        break;

    case "/":
        if(num1 == 0 || num2 == 0 ){
            console.log("No se puede dividir entre 0");
        }else{
            console.log("Resultado: " + num1 / num2);
        }

        break;

    default:
        console.log("NO ESTA ESE OPERADOR");
        break;
}


