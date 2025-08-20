

console.log("Empiezo a cocinar 🍳");

function pizzaLista() {
    console.log("La pizza ya está lista 🍕");
}
setTimeout(pizzaLista, 2000); // Esto no detiene el código


console.log("Mientras tanto, voy a poner la mesa 🍽️");


const numeros = [1, 2, 3, 4];

// Mismo método forEach, diferentes callbacks
numeros.forEach(function(numero) {
  console.log(numero * 2); // Callback 1: duplica cada número
});

numeros.forEach(function(numero) {
  console.log(`El número es: ${numero}`); // Callback 2: imprime un texto
});