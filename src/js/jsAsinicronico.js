console.log("Paso 1"); // Síncrono (se ejecuta inmediatamente)

const paso2= () => console.log("Paso 2");
// Asíncrono (se ejecuta después de 2 segundos)
setTimeout(paso2, 1000);

console.log("Paso 3"); // Síncrono (no espera al setTimeout)


// async/await no es un reemplazo de fetch, sino una forma más limpia de manejar su resultado

// ejemplos sencillo de fetch
//fetch función asincrónica de js, se ejecuta y no detiene el programa, continua con la isugiente linea
fetch('https://jsonplaceholder.typicode.com/users') // <-- Aquí la promesa fetch está en estado 'pending'
  .then(response => response.json()) // <-- La promesa de 'fetch' se cumple aquí, se lanza la promesa response.json
  .then(data => console.log(data)) // <-- La promesa de 'response.json()' se cumple aquí
  .catch(error => console.error(error)); // <-- La promesa se rechaza y se maneja el error  


// fetch explicado
// Recibe la URL del recurso que queremos solicitar.
fetch('https://jsonplaceholder.typicode.com/users')
  // .then() maneja el resultado de la Promesa devuelta por fetch.
  // El argumento `response` es el objeto de la respuesta del endpoint.
  .then(response => response.json())
    // response.json() lee el cuerpo de la respuesta y lo parsea como JSON.
    // Esta operación también es asíncrona y devuelve una nueva Promesa.
    
  // El segundo .then() maneja el resultado de la promesa anterior (response.json()).
  // El argumento `data` contiene el objeto JSON parseado anteriormente y listo para usar.
  .then(data => console.log(data))
    // console.log() imprime el objeto `data` en la consola del navegador.
    
  // .catch() maneja cualquier error que ocurra en cualquiera de las promesas anteriores.
  // El argumento `error` es el objeto del error.
  .catch(error => console.error(error));
    // console.error() imprime el error en la consola, destacándolo visualmente.
    


// Llamamos a la API de JSONPlaceholder para obtener una lista de usuarios
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    // La primera 'then' se ejecuta cuando el servidor responde (promesa cumplida)
    // Se verifica si la respuesta NO es exitosa
    if (!response.ok) {
      throw new Error('Error al obtener los datos');
    }
    // Convertimos la respuesta a formato JSON, que también devuelve una Promesa
    return response.json();
  })

  .then(usuarios => {
    // La segunda 'then' se ejecuta cuando la promesa de 'response.json()' se cumple
    // Aquí tenemos los datos de los usuarios listos para usar
    console.log('Datos de usuarios obtenidos:', usuarios);
  })

  .catch(error => {
    // El 'catch' se ejecuta si alguna de las promesas anteriores es rechazada
    // por un error de red o de otro tipo, error que uno mismo lanzó
    console.error('Ha ocurrido un error:', error);
  });

//diferencia entre fetch y async/await
fetch('https://jsonplaceholder.typicode.com/users') // <-- Aquí la promesa fetch está en estado 'pending'
  .then(response => response.json()) // <-- La promesa de 'fetch' se cumple aquí, se lanza la promesa response.json
  .then(data => console.log(data)) // <-- La promesa de 'response.json()' se cumple aquí
  .catch(error => console.error(error)); // <-- La promesa se rechaza y se maneja el error    

async function getData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    mostrarUsuarios(data);

  } catch (error) {
    console.error(error);
  }
}  

function mostrarUsuarios(data) {
  data.map(usuario => {
    `
    <td>${usuario.name}</td>
    <td>${usuario.email}</td>
    <td>${usuario.address.city}</td>
    `
    console.log(`Nombre: ${usuario.name}, Email: ${usuario.email}`);
  });
}


// Definimos una función asíncrona usando la palabra clave 'async'.
// Esto nos permite usar la palabra clave 'await' dentro de ella para esperar promesas.
async function getData() {
  // El bloque 'try' contiene el código que podría fallar (como una llamada a una API).
  try {
    // 'await' hace asincrónica la función  hasta que la promesa de 'fetch', el resto del programa y otras funciones siguen ejecutándose normalmente.
    // se resuelva. La respuesta del servidor se almacena en la constante 'response'.
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    // 'await' pausa la ejecución nuevamente hasta que la promesa de 'response.json()'
    // se resuelva. Esto convierte la respuesta en un objeto JSON y lo almacena en 'data'.
    const data = await response.json();
    
    // Imprimimos el objeto de datos en la consola del navegador.
    console.log(data);
    
  // El bloque 'catch' se ejecuta si alguna de las promesas dentro de 'try' es rechazada
  // (por un error de red, por ejemplo). El error es capturado como 'error'.
  } catch (error) {
    // Imprimimos el objeto de error en la consola, lo que ayuda a la depuración.
    console.error(error);
  }
}

// La palabra clave 'async' convierte la función en asíncrona.
// Esto nos permite usar 'await' dentro de ella.
async function obtenerDatosDeUsuario() {
  try {
    // 'await' pausa la ejecución hasta que la Promesa de 'fetch' se resuelva.
    // Simula una llamada a una API real.
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users/1');
    
    // Si la respuesta de la red no es exitosa (ej. 404 o 500), lanzamos un error.
    if (!respuesta.ok) {
      throw new Error('Error en la respuesta de la red: ' + respuesta.status);
    }
    
    // 'await' pausa de nuevo para que la Promesa de 'respuesta.json()' se resuelva.
    // Esto convierte la respuesta en un objeto JavaScript.
    const datosUsuario = await respuesta.json();
    
    console.log("Datos de usuario obtenidos:");
    console.log(datosUsuario);
    
  } catch (error) {
    // Si hay algún problema en el 'try', 'catch' lo maneja.
    console.error("Hubo un problema con la operación fetch:", error);
  }
}

// Llamamos a la función para ejecutarla.
obtenerDatosDeUsuario();