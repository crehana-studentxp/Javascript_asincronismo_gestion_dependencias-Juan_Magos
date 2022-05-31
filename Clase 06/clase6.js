//Promsea sin catch, solo muestra el error que enviamos
function promesa1() {
  const promesa = new Promise((resolve, reject) => {
    if (false) {
      resolve('Funciona');
    } else {
      reject('Hay un error');
    }
  });

  console.log(promesa);
  promesa.then(
    (result) => {
      console.log(result);
    },
    (error) => {
      console.error(error);
    }
  );
}

//Promsea sin catch, solo muestra el error que enviamos
function promesa2() {
  const promesa = new Promise((resolve, reject) => {
    if (false) {
      resolve('Funciona');
    } else {
      reject('Hay un error');
    }
  });

  promesa
    .then((resuelta) => {
      console.log(resuelta);
      reject(alert('Te equivocaste en las credecniales'));
    })
    .catch((err) => {
      console.log('Error catch');
    });
}

promesa1();
//promesa2();
