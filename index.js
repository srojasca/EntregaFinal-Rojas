let listaU1= ['Universidad de Chile','Universidad Católica de Chile']
let listaU2= ['Universidad de Santo Cielo','Universidad Mar Azul']
let UChile1=['Contador Auditor',listaU2[0],"60%",listaU2[1],"30%"]
let UChile2=['Ingeniería Comercial',listaU2[0],"50%",listaU2[1],"10%"]
let UC1=['Ingeniería Comercial',listaU2[0],"20%",listaU2[1],"30%"]
let UC2=['Contador Auditor',listaU2[0],"50%",listaU2[1],"90%"]


function comparacion(universidad1,universidad2,carrera){
    if (universidad1== listaU1[0] && universidad2==listaU2[0]){
        if (carrera=='Contador Auditor'){
            console.log("Las carreras tienen un "+UChile1[2] + " de similitud")} else{
                console.log("Las carreras tienen un "+UChile2[2] + " de similitud")
            }
    } else if (universidad1== listaU1[0] && universidad2==listaU2[1]){
        if (carrera=='Contador Auditor'){
            console.log("Las carreras tienen un "+UChile1[4] + " de similitud")} else{
                console.log("Las carreras tienen un "+UChile2[4] + " de similitud")
            }
    } else if (universidad1== listaU1[1] && universidad2==listaU2[0]){
        if (carrera=='Contador Auditor'){
            console.log("Las carreras tienen un "+UC1[2] + " de similitud")} else{
                console.log("Las carreras tienen un "+UC2[2] + " de similitud")
            }
    } else{
        if (carrera=='Contador Auditor'){
            console.log("Las carreras tienen un "+UC1[4] + " de similitud")} else{
                console.log("Las carreras tienen un "+UC2[4] + " de similitud")
            }
    }
}


var u1= prompt("Ingrese alguna de las siguientes universidades [ Universidad de Chile, Universidad Católica de Chile]:");
var u2= prompt("Ingrese alguna de las siguientes universidades [ Universidad de Santo Cielo, Universidad Mar Azul]:");
var c= prompt("Ingrese alguna de las siguientes carreras [ Ingeniería Comercial, Contador Auditor]:");
let n=0;
let x=0;

while(n < 4){
    n++;
    console.log(comparacion(u1,u2,c));
    x+=n;
}

alert("Revisa el resultado en la consola!")