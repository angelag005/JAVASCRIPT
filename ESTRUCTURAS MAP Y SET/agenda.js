let agenda = new Map();

agenda.set("Angie", 32910128);
agenda.set("Pedro", 31383737);
agenda.set("Maria", 34845850);
agenda.set("Luna", 38374473);
agenda.set("Moly", 31859599);



console.log("Telefono: ", agenda.get("Angie"));
console.log("Telefono: ", agenda.get("Luna"));
console.log("¿Existe Pedro:", agenda.has("Pedro")); 

agenda.forEach((nombre, telefono) => {

  console.log(`"${nombre}" => ${telefono}`);
});