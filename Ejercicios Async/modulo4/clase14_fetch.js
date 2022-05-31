//No se necesita instalar ninguna librería para usar fetch en una aplicación web.
import fetch from 'node-fetch';
//No se necesita instalar ninguna librería para usar fetch en una aplicación web.

const mockApiUrl = 'https://6266363863e0f382567e1bd4.mockapi.io/usuarios';
const userId = '51';

function updateUser() {
  const nuevoUsuarioEditado = {
    name: 'Juuuuu',
    age: 43,
    lastName: 'Maaaags',
  };
  fetch(`${mockApiUrl}/${userId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(nuevoUsuarioEditado),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((e) => {
      console.log(e);
    });
}

// updateUser();

function deleteUser() {
  fetch(`${mockApiUrl}/${userId}`, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((e) => {
      console.log(e);
    });
}

// deleteUser();

function getUsers() {
  //Obtiene la lista de usuarios
}
function addUder() {
  //Agrega un nuevo usuario a la lista
}
