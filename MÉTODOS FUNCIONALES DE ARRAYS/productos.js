const productos = [
  { nombre: "Computador", precio: 2500000, stock: 5 },
  { nombre: "Cargador", precio: 50000, stock: 0 },
  { nombre: "Teclado", precio: 120000, stock: 8 },
];

const mayor = productos.filter(p => p.stock > 0);
console.log(mayor);

const nombresMayusculas = productos.map(p => p.nombre.toUpperCase());
console.log(nombresMayusculas);

const valorInventario = productos.reduce((total, p) => total + (p.precio * p.stock), 0);
console.log("inventario: ", valorInventario);