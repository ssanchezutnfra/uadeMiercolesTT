// Definimos una función asíncrona usando la palabra clave 'async'.
// Esto nos permite usar 'await' dentro de ella.
async function obtenerDatos() {
  try {
    // try/catch es la mejor práctica para manejar errores en async/await.
    // El código dentro de 'try' se ejecuta primero.

    console.log("Iniciando la operación...");

    // 'await' pausa la ejecución de esta función hasta que la Promesa de 'fetch'
    // se resuelva. Esto hace que el código se vea como si fuera sincrónico.
    const response = await fetch('https://api.example.com/data');

    // Verificamos si la respuesta de la red fue exitosa. Si no lo es,
    // lanzamos un error que será capturado por el bloque 'catch'.
    if (!response.ok) {
      throw new Error('La respuesta de la red no fue exitosa');
    }

    // Usamos 'await' nuevamente para esperar que el cuerpo de la respuesta
    // se lea y se convierta a un objeto JSON.
    const data = await response.json();

    console.log("Datos obtenidos con éxito:");
    console.log(data);

  } catch (error) {
    // El bloque 'catch' se ejecuta si alguna de las promesas anteriores es rechazada.
    // Aquí puedes manejar el error de forma centralizada.
    console.error("Ocurrió un error:", error);
  }
}

// Llamamos a la función asíncrona para iniciar la operación.
obtenerDatos();

// Este mensaje se muestra inmediatamente porque la función 'obtenerDatos'
// no bloquea la ejecución del resto del código.
console.log("La ejecución del programa continúa...");



async function getUsers(page) {
    try {
        // 1. Hacemos la petición HTTP con fetch
        // await pausa la ejecución hasta que la promesa se resuelva
        const response = await fetch(`https://reqres.in/api/users?page=${page}`);
        
        // 2. Convertimos la respuesta a JSON
        const data = await response.json();
        
        // 3. Renderizamos los usuarios si todo sale bien
        renderUsers(data);
        
    } catch (error) {
        // 4. Manejo de errores (red, JSON inválido, etc.)
        showError(error);
    }
}

// Función para renderizar usuarios (igual que en el original)
function renderUsers(data) {
    const users = data.data;
    let rows = '';
    
    for(let user of users) {
        console.log(user);
        rows += `
        <tr>
            <td>${user.id}</td>
            <td>${user.first_name}</td>
            <td>${user.last_name}</td>
            <td>${user.email}</td>
            <td>
                <img src="${user.avatar}" class="img-thumbnail">
            </td>
        </tr>
        `;
    }
    
    document.getElementById('usersRows').innerHTML = rows;
}

// Función para mostrar errores (igual que en el original)
function showError(error) {
    console.log(error);
    const alerta = `
    <div class="alert alert-danger" role="alert">
        ${error.toString()}
    </div>`;
    document.getElementById('msj').innerHTML = alerta;
}

