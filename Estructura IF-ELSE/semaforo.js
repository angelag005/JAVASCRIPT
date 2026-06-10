let nota = -7;
let mensaje;

if(nota > 0 && nota < 3.0){
    mensaje = "DEFICIENTE";

}else if(nota >= 3.0 && nota <= 3.9){
    mensaje = "ACEPTABLE";

}else if(nota >= 4.0 && nota <= 4.5){
    mensaje = "SOBRESALIENTE";

}else if(nota >= 4.6){
    mensaje = "EXCELENTE";
}else{
    mensaje = "ERROR DE VALIDACION"; 
}

console.log(`Tu nota es: ${nota}, ${mensaje}`);