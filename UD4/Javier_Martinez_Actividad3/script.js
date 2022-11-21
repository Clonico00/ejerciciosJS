//Ejercicio 1
//**********************************************************************************************************************
function lanzamientoDados() {
    var dado1 = Math.floor(Math.random() * 6) + 1;
    var dado2 = Math.floor(Math.random() * 6) + 1;
    return dado1 + dado2;

}

function simulacionDados() {
    var lanzamientos = 36000;
    var combinaciones = new Array(13);
    for (var i = 0; i < combinaciones.length; i++) {
        combinaciones[i] = 0;
    }
    for (var i = 0; i < lanzamientos; i++) {
        var suma = lanzamientoDados();
        combinaciones[suma]++;
    }
    for (var i = 2; i < combinaciones.length; i++) {
        var porcentaje = combinaciones[i] / lanzamientos * 100;
        document.write("La suma " + i + " ha salido " + combinaciones[i] + " veces, esto es un " + porcentaje.toFixed(2) + "%<br>");
    }

}

//Ejercicio 2
//**********************************************************************************************************************
function generarParrafos() {
    var parrafos = new Array("Realiza algo parecido a un generador de lorem-ipsum. A través de la web pedirá un número de párrafos y la aplicación generará " +
        "aleatoriamente el número de párrafos de forma aleatoria de un array de párrafos (sobre cualquier tema que quieras menos lorem-ipsum que es muy aburrido y no se latín).");
    var numParrafos = document.getElementById("numParrafos").value;
    if (isNaN(numParrafos)) {
        alert("Introduce un número");
    } else {
        for (var i = 0; i < numParrafos; i++) {
            var numAleatorio = Math.floor(Math.random() * parrafos.length);
            document.write(parrafos[numAleatorio] + "<br>");
        }

    }

}

//Ejercicio 3
//**********************************************************************************************************************
function calcularLetraDNI() {
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    var numDNI = document.getElementById("numDNI").value;
    var letraDNI = document.getElementById("letraDNI").value;
    if (isNaN(numDNI) || numDNI < 0 || numDNI > 99999999) {
        alert("El número de DNI no es válido");
    } else {
        var resto = numDNI % 23;
        var letraCalculada = letras[resto];
        if (letraCalculada != letraDNI) {
            alert("La letra del DNI no es correcta");
        } else {
            alert("El número y la letra del DNI son correctos");
        }
    }
}







