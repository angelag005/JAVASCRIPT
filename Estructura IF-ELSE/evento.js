let edad = 15;
let conAcompañamiento = true;

if (edad < 13) {
    console.log("No puede entrar");

}else if(edad >= 13 && edad <= 17 && conAcompañamiento === true){
    console.log("entrar solo con el acompañante");

}else if(edad >= 13 && edad <= 17 && conAcompañamiento === false){
    console.log("no entra porque no tiene acompañante");

}else{
    console.log("Entran solos");
}
