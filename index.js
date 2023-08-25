// DATOS PARA COMPARAR
const Ucl = {
  universidad1: 'Universidad de Chile',
  // carrera: ['Contador Auditor','Ingeniería Comercial'],
  hrs1: [4999, 5234],
  universidad2: 'Universidad Católica de Chile',
  hrs2: [4698, 5163],
};

const ucl_new = {
  'Universidad de Chile': {
    "Contador Auditor": 4999,
    "Ingeniería Comercial": 5234
  },
  'Universidad Católica de Chile': {
    "Contador Auditor": 4698,
    "Ingeniería Comercial": 5163,
  }
};

const uex_new = {
  'Universidad de Santo Cielo': {
    "Contador Auditor": 1800,
    "Ingeniería Comercial": 5010
  },
  'Universidad Mar Azul': {
    "Contador Auditor": 3500,
    "Ingeniería Comercial": 2230,
  }
};

const Uex = {
  universidad1: 'Universidad de Santo Cielo',
  universidad2: 'Universidad Mar Azul',
  hrsSC: [1800, 5010],
  hrsMA: [3500, 2230],
};

// FUNCIÓN QUE CALCULA EL PORCENTAJE DE SIMILITUD
function diferencia(hrs1, hrs2) {
  let diferencia = (hrs2 - hrs1) / hrs2 * 100
  return Math.round(diferencia)
};

// // FUNCIÓN QUE OBTIENE Y COMPARA LOS VALORES DE ACUERDO A LO ENTREGADO POR EL USUARIO

function comparacion(universidad1, universidad2, carrera) {
  const hrs1 = uex_new[universidad1][carrera];
  const hrs2 = ucl_new[universidad2][carrera];
  return ("Las carreras tienen un " + diferencia(hrs1, hrs2)) + "% de similitud";

};


// OBTENCIÓN DE DATOS DESDE EL FORMULARIO

const $form = document.querySelector('#formulario')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData(this)
  nombre = form.get('name')
  apellido = form.get('apellido')
  correo = form.get('email')
  hrs = form.get('hrsPrograma')
  opcion1 = form.get('U1')
  opcion2 = form.get('U2')
  carrera = form.get('carrera')


  respuesta = comparacion(opcion2, opcion1, carrera)
  resultado.innerHTML = '<h2>' + respuesta + '</h2>'

  // Generación JSON y almacenamiento en local storage 
  const almacenar = {
    Nombre: nombre,
    Apellido: apellido,
    email: email,
  }

  const enJSON = JSON.stringify(almacenar);
  localStorage.setItem("Consultante", enJSON);
}

// LO DEL FETCH LO DEJO EN COMENTARIOS PORQUE NO TIENE SENTIDO DENTRO DE MI PLATAFORMA, PERO INTENTÉ APLICARLO IGUALMENTE

// fetch('./db.json')
//   .then((data) =>
//     data
//       .json()
//       .then((res) => {console.log(res)})
//       .catch((e) => console.log('Hubo un error'))
//   )

//   .catch((e) => console.log(e));

//   let respuesta = res;

//   console.log(respuesta)

  // const div= document.createElement('div');
  // div.className= 'otros';

  // const innerDiv= document.createElement('div');
  // innerDiv.className = 'persona';
  // innerDiv.innerHTML = '<h3>${respuesta.nombre}<h3>';