// Datos simulados (Deben ir al principio para que los otros puntos funcionen)
const productos = [
    { id: 1, nombre: "Remera", precio: 1500, categoria: "Ropa" },
    { id: 2, nombre: "Pantalón", precio: 2500, categoria: "Ropa" },
    { id: 3, nombre: "Zapatillas", precio: 8000, categoria: "Calzado" },
    { id: 4, nombre: "Gorra", precio: 1200, categoria: "Accesorios" },
    { id: 5, nombre: "Campera", precio: 9500, categoria: "Ropa" }
];

// --- Parte 1: Acceso a elementos y recorrido ---

// 1. Acceder a propiedades individuales:
// Mostramos el nombre del primer producto (índice 0)
console.log("1. Nombre del primer producto:", productos[0].nombre);

console.log("-----------------------------------");

// 2. Recorrido con for...of:
// Es un bucle moderno que recorre cada objeto del array
console.log("2. Recorrido con for...of:");
for (const p of productos) {
    console.log(`Producto: ${p.nombre} - Precio: $${p.precio}`);
}

console.log("-----------------------------------");

// 3. Recorrido con .forEach():
// Es un método de array que ejecuta una función por cada elemento
console.log("3. Recorrido con .forEach():");
productos.forEach((p) => {
    console.log(`Producto: ${p.nombre} - Precio: $${p.precio}`);
});