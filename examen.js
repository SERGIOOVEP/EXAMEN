/*Solicita al usuario que elija entre la opción 1 o 2:
Se le debe pedir dos números al usuario e indicar si son pares y múltiplos de 25 ambos, uno de ellos o ninguno.
Se le debe pedir una palabra y comprobar si empieza o termina por a */

var opcionElegida = prompt("Elige la opcion 1 o 2:");

if (opcionElegida == "1") {
    var numero1 = prompt("Dime un numero:");
    var numero2 = prompt("Dime otro numero:");
    var elPrimeroEsParYMultiplo = false;
    var elSegundoEsParYMultiplo = false;

    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);

    if (numero1 % 2 == 0 && numero1 % 25 == 0)
        elPrimeroEsParYMultiplo = true;
    if (numero2 % 2 == 0 && numero2 % 25 == 0) {
        elSegundoEsParYMultiplo = true;

    } if (elPrimeroEsParYMultiplo == true && elSegundoEsParYMultiplo == true) {
        alert("Los dos son pares y multiplos de 25");
    } else if (elPrimeroEsParYMultiplo == true || elSegundoEsParYMultiplo == true) {
        alert("Uno de ellos es par y multiplo de 25");
    } else
        alert("Ninguno es par ni multiplo");
}

if (opcionElegida == "2") {
    var palabra = prompt("Dime una palabra y te dire si empieza o termina por a");
} if (palabra[0] == "a" || palabra[palabra.length - 1] == "a") {
    alert("La palabra empieza o termina por a");
} else
    alert("La palabra no empieza o termina por a");



/*
 Solicita una frase al usuario y contando los espacios que tiene,
indica de cuántas palabras consta(debes presuponer que la frase tiene un único espacio entre palabras).*/


let frase = prompt("Dime una frase:");
let palabras = 1;

for (let i = 0; i < frase.length; i++) {
    if (frase[i] == " ")
        numeroDePalabras = numeroDePalabras + 1;
}

alert("La frase tiene " + numeroDePalabras + " palabras");
