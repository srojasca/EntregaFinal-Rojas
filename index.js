// DATOS PARA COMPARAR
const Ucl = {
    universidad1: 'Universidad de Chile',
    carrera: ['Contador Auditor','Ingeniería Comercial'],
    hrs1: [4999,5234],
    universidad2: 'Universidad Católica de Chile',
    hrs2: [4698,5163],
}

const Uex = {
    universidad1:'Universidad de Santo Cielo',
    universidad2:'Universidad Mar Azul',
    hrsSC: [1800,5010],
    hrsMA: [3500,2230],
}

// FUNCIÓN QUE CALCULA EL PORCENTAJE DE SIMILITUD
function diferencia(hrs1,hrs2){
    let diferencia= (hrs2-hrs1)/hrs2*100
    return Math.round(diferencia)
}

// FUNCIÓN QUE OBTIENE Y COMPARA LOS VALORES DE ACUERDO A LO ENTREGADO POR EL USUARIO
function comparacion(universidad1,universidad2,carrera){
    if (universidad1== Ucl.universidad1 && universidad2==Uex.universidad1){
        if (carrera=='Contador Auditor'){
            console.log("Las carreras tienen un "+ diferencia(Uex.hrsSC[0],Ucl.hrs1[0]) + "% de similitud")} else{
                console.log("Las carreras tienen un "+ diferencia(Uex.hrsSC[1],Ucl.hrs1[1]) + " de similitud")
            }
    } else if (universidad1==Ucl.universidad1 && universidad2==Uex.universidad2){
        if (carrera=='Contador Auditor'){
            console.log("Las carreras tienen un "+ diferencia(Uex.hrsMA[0],Ucl.hrs1[0]) + "% de similitud")} else{
                console.log("Las carreras tienen un "+ diferencia(Uex.hrsMA[1],Ucl.hrs1[1]) + "% de similitud")
            }
    } else if (universidad1==Ucl.universidad2 && universidad2==Uex.universidad1){
        if (carrera=='Contador Auditor'){
            console.log("Las carreras tienen un "+ diferencia(Uex.hrsSC[0],Ucl.hrs2[0]) + "% de similitud")} else{
                console.log("Las carreras tienen un "+ diferencia(Uex.hrsSC[1],Ucl.hrs2[1]) + "% de similitud")
            }
    } else{
        if (carrera=='Contador Auditor'){
            console.log("Las carreras tienen un "+ diferencia(Uex.hrsMA[0],Ucl.hrs2[0]) + "% de similitud")} else{
                console.log("Las carreras tienen un "+ diferencia(Uex.hrsMA[1],Ucl.hrs2[1]) + "% de similitud")
            }
    }
}


// let u1= prompt("Ingrese alguna de las siguientes universidades [ Universidad de Chile, Universidad Católica de Chile]:");
// let u2= prompt("Ingrese alguna de las siguientes universidades [ Universidad de Santo Cielo, Universidad Mar Azul]:");
// let c= prompt("Ingrese alguna de las siguientes carreras [ Ingeniería Comercial, Contador Auditor]:");
// let n=0;
// let x=0;

while(n < 4){
    n++;
    console.log(comparacion(u1,u2,c));
    x+=n;
}
// // alert("Revisa el resultado en la consola!")

// // OBTENCIÓN DE DATOS DESDE EL FORMULARIO

// // Hrs totales programa
let hrsTotales = document.getElementById("hrsTotales").value;

// // U para la que se busca info
let select_Ubuscada = document.getElementById("Uni1");
let selec1 = select_Ubuscada.options[select_Ubuscada.selectedIndex].text;

// // U desde la que postula
let select_Upostula = document.getElementById("Uni2");
let selec2 = select_Upostula.options[select_Upostula.selectedIndex].text;

// // Carrera buscada
let select_Ucarrera = document.getElementById("Uni1");
let selec3 = select_Ucarrera.options[select_Ucarrera.selectedIndex].text;

// // ALMACENAMIENTO INFO RELEVANTE EN LOCAL STORAGE

// // Nombre completo
let nombre = document.getElementById("nombre").value;
let apellido = document.getElementById("apellido").value;
let email = document.getElementById("email").value;

// // almacenamiento en local storage
localStorage.setItem('nombre', nombre);
localStorage.setItem('apellido', apellido);
localStorage.setItem('email', email);

const form = document.getElementById("formulario");

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const usuario = {
        nombres= e.target[0].value;
        apellidos= e.target[1].value;
        emails= e.target[2].value;
    };

    localStorage.setItem('usuario', JSON.stringify(usuario));
}
