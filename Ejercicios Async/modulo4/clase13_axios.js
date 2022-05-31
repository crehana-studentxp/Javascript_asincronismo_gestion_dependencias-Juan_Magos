import axios from 'axios';

const mockApiUrl = 'https://6266363863e0f382567e1bd4.mockapi.io/usuarios';

function getUsers() {
  axios
    .get(mockApiUrl, { headers: { 'Content-Type': 'application/json' } })
    .then((response) => {
      console.log(response.data);
    })
    .catch((e) => {
      console.log(e);
    });
}

getUsers();

function addUser() {
  const nuevoUsuario = {
    name: 'Daniela',
    age: 21,
    lastName: 'Lopez',
  };
  axios
    .post(mockApiUrl, nuevoUsuario)
    .then((response) => {
      console.log(response.data);
    })
    .catch((e) => {
      console.log(e);
    });
}
// addUser();

function updateUser() {
  //Actualiza un usuario
}

function deleteUser() {
  //Elimina un usuario
}
