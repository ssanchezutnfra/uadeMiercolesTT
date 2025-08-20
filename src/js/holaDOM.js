// Por ID
let titulo = document.getElementById('titulo'); // Retorna 1 elemento

// Por selector CSS (primer coincidencia)
let parrafo = document.querySelector('.texto'); // Retorna 1 elemento

// Por selector CSS (todos los que coincidan)
let botones = document.querySelectorAll('button'); // Retorna NodeList

function updTitle() {
    let titulo = document.getElementById('titulo'); // Retorna 1 elemento
    titulo.innerHTML="Chau Dom"
    titulo.style.backgroundColor="lightblue"
}

function addElement() {
    let nuevoDiv = document.createElement('div'); // Crear elemento
    nuevoDiv.textContent = '¡Soy un nuevo Div!';
    nuevoDiv.style.backgroundColor="lightblue"
    nuevoDiv.style.padding="1rem"
    document.body.appendChild(nuevoDiv); // Agregar al final    

}



function updStyle() {
    let titulo = document.getElementById('titulo'); // Retorna 1 elemento
    titulo.style.backgroundColor="lightcoral"
}


function removeBtn() {
    let btn1 = document.getElementById('btn1'); // Retorna 1 elemento
    btn1.remove();
}

function showDiv() {
    let div = document.querySelector('div[style="display: none;"]');
    if (div) {
        div.style.display = 'block';
    }
}

let botones1= document.querySelectorAll('button'); // Retorna NodeList
let classTexto=document.querySelectorAll('.texto'); // Retorna NodeList

// debo usar 3 instrucciones
document.getElementById('parrafo')
document.getElementsByClassName('texto')
document.getElementsByTagName('p')

//simplifica las busquedas en una sola instrucción
document.querySelector('p .texto #parrafo')