//maninpulacion del dom
btn=document.getElementById('miBoton1');
btn1=document.getElementsByClassName('btnAzul');
btn2=document.getElementsByTagName('button');

btn3=document.querySelector('button .btnAzul #miBoton1');
console.log(btn3)

botonoes=document.querySelectorAll('button');

// propiedades del dom
const boton1 = document.querySelector('#miBoton1');
boton1.onclick = function() {
  alert('Click con propiedad onclick');
};

//sobrescribo la función
boton1.onclick = function() {
  alert('sobrescribo la función');
};

// addEventListener

// const boton2 = document.querySelector('button .btnAzul #miBoton2');
const boton2 = document.querySelector('#miBoton2 ');

boton2.addEventListener('click', function(evento) {
  alert('¡Botón presionado addEventListener!', evento.target);
});

boton2.addEventListener('click', function(evento) {
  console.log('¡Botón presionado addEventListener!', evento.target);
});

boton2.addEventListener('mouseover', function(evento) {
  console.log('¡Mouse sobre el botón!', evento.target);
});

let input = document.querySelector('#q');
let alerta = evento => alert('¡Tecla presionada!', evento.key);
input.addEventListener('keydown', alerta);