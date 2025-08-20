
function getUsers(page) {
    //1 preparar
    // https://reqres.in/api/users?page=1
    // const respuesta = fetch(`https://reqres.in/api/users?page=${page}`);

    //2 invocar
    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(responseJson => procesarUsers(responseJson))//fulfilled
        .catch(error => dibujarError(error))//rejected
}

async function getUsersAsync(page) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const data = await response.json();
        procesarUsers(data);
    } catch (error) {
        dibujarError(error);
    }
}

let numbers = [1, 2, 3, 4, 5];
let persona = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Madrid'
}

//funcion que muestra los datos del json, crea una fila por cada usuario
function procesarUsers(data) {
    let rows = '';
    for(let user of data) {
        console.log(user);
        rows += `
        <tr>
            <td>${user.id}</th>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.address.street}</td>
            <td>${user.address.city}</td>
        </tr>
        `
    }

    //mostrar datos de data
    data.forEach(element => {
        rows += `
        <tr>
            <td>${element.id}</th>
            <td>${element.name}</td>
            <td>${element.email}</td>
            <td>${element.address.street}</td>
            <td>${element.address.city}</td>
        </tr>
        `
    });

    document.getElementById('usersRows').innerHTML = rows;
}

function dibujarError(error) {
    console.log(error);
    const alerta = `<div class="alert alert-danger" role="alert">
        ${error.toString()}
    </div>`;
    document.getElementById('msj').innerHTML = alerta;
}

// document.getElementById('btnGetUsers').addEventListener('click',getUsers);

