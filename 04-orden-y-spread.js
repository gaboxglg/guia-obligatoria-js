// Datos simulados
const productos = [
    { id: 1, nombre: "Remera", precio: 1500, categoria: "Ropa" },
    { id: 2, nombre: "Pantalón", precio: 2500, categoria: "Ropa" },
    { id: 3, nombre: "Zapatillas", precio: 8000, categoria: "Calzado" },
    { id: 4, nombre: "Gorra", precio: 1200, categoria: "Accesorios" },
    { id: 5, nombre: "Campera", precio: 9500, categoria: "Ropa" }
];

// --- Parte 4: Ordenamiento y Spread ---

// 11. Ordenar con .sort():
// Ordenamos de menor a mayor precio. 
// Usamos [...productos] para crear una copia y no romper el array original.
const productosOrdenados = [...productos].sort((a, b) => a.precio - b.precio);
console.log("11. Productos ordenados por precio (Menor a Mayor):");
console.table(productosOrdenados);

// 12. Generar mensajes personalizados con .map():
const frasesPersonalizadas = productos.map(p => 
    `El producto ${p.nombre} cuesta $${p.precio} y pertenece a la categoría ${p.categoria}.`
);
console.log("12. Mensajes generados:");
console.log(frasesPersonalizadas);

// 13. Agregar productos con spread:
// Creamos productos nuevos
const masProductos = [
    { id: 6, nombre: "Medias", precio: 500, categoria: "Ropa" },
    { id: 7, nombre: "Reloj", precio: 12000, categoria: "Accesorios" }
];

// Combinamos el array original con el nuevo usando el operador spread (...)
const inventarioFinal = [...productos, ...masProductos];
console.log("13. Inventario final combinado:");
console.table(inventarioFinal);