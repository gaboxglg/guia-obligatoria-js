// Datos simulados
const productos = [
    { id: 1, nombre: "Remera", precio: 1500, categoria: "Ropa" },
    { id: 2, nombre: "Pantalón", precio: 2500, categoria: "Ropa" },
    { id: 3, nombre: "Zapatillas", precio: 8000, categoria: "Calzado" },
    { id: 4, nombre: "Gorra", precio: 1200, categoria: "Accesorios" },
    { id: 5, nombre: "Campera", precio: 9500, categoria: "Ropa" }
];

// --- Parte 2: Métodos de transformación y filtrado ---

// 4. Obtener solo los nombres con .map()
// Creamos un nuevo array solo con los strings de los nombres
const nombres = productos.map(p => p.nombre);
console.log("4. Lista de nombres:", nombres);

// 5. Filtrar por categoría "Ropa" con .filter()
// Crea un array con los objetos que cumplen la condición
const soloRopa = productos.filter(p => p.categoria === "Ropa");
console.log("5. Productos de categoría Ropa:", soloRopa);

// 6. Filtrar por precio con .filter() (> $3000)
const caros = productos.filter(p => p.precio > 3000);
console.log("6. Productos con precio mayor a $3000:", caros);

// 7. Buscar un producto específico con .find()
// Devuelve el PRIMER objeto que coincida con el nombre "Gorra"
const productoEncontrado = productos.find(p => p.nombre === "Gorra");
console.log("7. Producto buscado (Gorra):", productoEncontrado);