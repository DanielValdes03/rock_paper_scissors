let wins = 0;
let loses = 0;
let empates = 0;


let posibilidades = ["rock", "paper", "scissors"];


/*Almacenar los valores de las imagenes mediante el atributo alt*/ 

let seleccion;

function almacenar_roca() {
    let random = Math.floor(Math.random() * 3);
    seleccion = document.getElementById("rock").alt;
    console.log(seleccion);
    operaciones(random);
}

function almacenar_papel() {
    let random = Math.floor(Math.random() * 3);
    seleccion = document.getElementById("paper").alt;
    console.log(seleccion);
    operaciones(random);
}

function almacenar_tijera() {
    let random = Math.floor(Math.random() * 3);
    seleccion = document.getElementById("scissors").alt;
    console.log(seleccion);
    operaciones(random);
}

/*Condiciones para ganar, perder o empate*/

function operaciones(random) {

if (seleccion == posibilidades[random]) {
    empates++;
}
else {
    if (
        (seleccion == "rock" && posibilidades[random] != "paper") ||
        (seleccion == "paper" && posibilidades[random] != "scissors") ||
        (seleccion == "scissors" && posibilidades[random] != "rock")
    ) {
        wins++;
    }
    else {
        loses++;
    }
}
console.log("Yo he escogido " + seleccion + " la maquina ha escogido " + posibilidades[random]);
console.log("El numero de empates es " + empates);
console.log("Las wins son" + wins);
console.log("Las loses son" + loses);

}

/*Resultado*/ 

