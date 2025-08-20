// ========== MÉTODOS BÁSICOS ========== //

// 1. push() - Añadir elemento al final
let frutas = ["manzana", "pera"];
frutas.push("limon");
console.log("push():", frutas); // ["manzana", "pera", "limon"]

// 2. pop() - Eliminar último elemento
frutas.pop();
console.log("pop():", frutas); // ["manzana", "pera"]

// 3. unshift() - Añadir elemento al inicio
frutas.unshift("frutilla");
console.log("unshift():", frutas); // ["frutilla", "manzana", "pera"]

// 4. shift() - Eliminar primer elemento
frutas.shift();
console.log("shift():", frutas); // ["manzana", "pera"]

// ========== MÉTODOS DE BÚSQUEDA ========== //

// 5. indexOf() - Encontrar posición
console.log("indexOf():", frutas.indexOf("manzana")); // 0

// 6. includes() - Verificar existencia
console.log("includes():", frutas.includes("manzana")); // true

// 7. find() - Buscar primer elemento que cumpla condición
let numbers = [5, 12, 8, 130];
console.log("find():", numbers.find(num => num > 10)); // 12

// ========== MÉTODOS DE TRANSFORMACIÓN ========== //

// 8. map() - Transformar cada elemento
function restar(a,b) {
    return a-b;
}
restar(5, 3);

//callback
const duplicar = a => a*2;
numbers.map(duplicar)

for (let i = 0; i < numbers.length; i++) {
    const element = duplicar(numbers[i]);   
}

let nombres = ["Juan", "Ana", "Pedro"];
const mayuscula= nombre => nombre.toUpperCase();
nombres.map(mayuscula)

numbers.forEach(duplicar)

console.log("map():", numbers.map(num => num * 2)); // [10, 24, 16, 260]

// 9. filter() - Filtrar elementos
console.log("filter():", numbers.filter(num => num > 10)); // [12, 130]

// 10. reduce() - Reducir a un solo valor
console.log("reduce():", numbers.reduce((total, num) => total + num, 0)); // 155


// ========== MÉTODOS DE VERIFICACIÓN ========== //

// 13. every() - ¿Todos cumplen condición?
console.log("every():", numbers.every(num => num > 0)); // true

// 14. some() - ¿Alguno cumple condición?
console.log("some():", numbers.some(num => num % 2 === 0)); // true

// ========== OTROS MÉTODOS ÚTILES ========== //

// 15. sort() - Ordenar elementos
let random = [3, 1, 4, 2];
random.sort();
console.log("sort():", random); // [1, 2, 3, 4]

// 16. reverse() - Invertir orden
random.reverse();
console.log("reverse():", random); // [4, 3, 2, 1]

