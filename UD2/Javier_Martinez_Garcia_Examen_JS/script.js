function paresImpares() {
    var array = [];
    var arrayPares = [];
    var arrayImpares = [];
    for (var i = 0; i < 50; i++) {
        array[i] = Math.floor(Math.random() * 1000) + 1;
    }
    document.getElementById("array").innerHTML = array;
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            arrayPares.push(array[i]);
        } else {
            arrayImpares.push(array[i]);
        }
    }
    document.getElementById("arrayPares").innerHTML = arrayPares;
    document.getElementById("arrayImpares").innerHTML = arrayImpares;

}

function crearArray() {
    var array = [];
    for (var i = 0; i < 4; i++) {
        array[i] = [];
        for (var j = 0; j < 2; j++) {
            array[i][j] = Math.floor(Math.random() * 10) + 1;
        }
    }

    return array;
}

function ordenaArray() {
    var array = crearArray();
    document.getElementById("arrayDesordenado").innerHTML = JSON.stringify(array);

    var arrayAux = [];
    for (var i = 0; i < array.length; i++) {
        arrayAux[i] = array[i][0] + array[i][1];
    }
    for (var i = 0; i < arrayAux.length; i++) {
        for (var j = 0; j < arrayAux.length - 1; j++) {
            if (arrayAux[j] > arrayAux[j + 1]) {
                var aux = arrayAux[j];
                arrayAux[j] = arrayAux[j + 1];
                arrayAux[j + 1] = aux;
                aux = array[j];
                array[j] = array[j + 1];
                array[j + 1] = aux;
            }
        }
    }
    document.getElementById("arrayOrdenado").innerHTML = JSON.stringify(array);
}

function cifraCadena() {
    var cadena = document.getElementById("cadena").value;
    var cadenaCifrada = "";
    if (cadena.match(/^[a-zA-Z  *]+$/)) {
        for (var i = 0; i < cadena.length; i++) {
            if (cadena[i].toUpperCase() == "Z") {
                cadenaCifrada += "B";
            } else if (cadena[i].toUpperCase() == "Y") {
                cadenaCifrada += "A";
            } else if (cadena[i].toUpperCase() == " ") {
                cadenaCifrada += " ";
            } else {
                cadenaCifrada += String.fromCharCode(cadena.charCodeAt(i) + 2);
            }
        }
        document.getElementById("cadenaCifrada").innerHTML = cadenaCifrada;
    } else {
        alert("La cadena sólo admite caracteres");
    }

}

function dibujarGrafico() {
    document.getElementById("grafico").innerHTML = "";
    var array = [];
    for (var i = 0; i < 30; i++) {
        array[i] = Math.floor(Math.random() * 15) + 1;
    }
    var i = 0;
    var intervalo = setInterval(function () {
        var asteriscos = "";
        for (var j = 0; j < array[i]; j++) {
            asteriscos += "*";
        }
        document.getElementById("grafico").innerHTML += asteriscos + "<br>";
        i++;
        if (i == 30) {
            clearInterval(intervalo);
        }
    }, 500);

}

