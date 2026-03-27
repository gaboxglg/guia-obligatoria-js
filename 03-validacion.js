// Datos simulados
const productos = [
    { id: 1, nombre: "Remera", precio: 1500, categoria: "Ropa" },
    { id: 2, nombre: "Pantalón", precio: 2500, categoria: "Ropa" },
    { id: 3, nombre: "Zapatillas", precio: 8000, categoria: "Calzado" },
    { id: 4, nombre: "Gorra", precio: 1200, categoria: "Accesorios" },
    { id: 5, nombre: "Campera", precio: 9500, categoria: "Ropa" }
];

// --- Parte 3: Métodos de validación ---

// 8. Verificar con .some():
// ¿Existe AL MENOS UN producto con precio > 10.000?
const existeMuyCaro = productos.some(p => p.precio > 10000);
console.log("8. ¿Existe algún producto mayor a $10.000?:", existeMuyCaro);

// 9. Verificar con .every():
// ¿TODOS los productos cuestan más de 1000?
const todosSuperanMil = productos.every(p => p.precio > 1000);
console.log("9. ¿Todos los productos cuestan más de $1000?:", todosSuperanMil);

// 10. Verificar existencia con .includes():
// Primero creamos el array de nombres (como en el punto 4)
const listaNombres = productos.map(p => p.nombre);
// Comprobamos si ese array de strings contiene "Campera"
const contieneCampera = listaNombres.includes("Campera");
console.log("10. ¿La lista de nombres contiene 'Campera'?:", contieneCampera);