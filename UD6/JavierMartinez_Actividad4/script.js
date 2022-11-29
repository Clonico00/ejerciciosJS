//Primero creamos la tabla 
var table = document.createElement("table");
var tbody = document.createElement("tbody");
var tr = document.createElement("tr");
var td = document.createElement("td");

//vamos creando las distintas casillas
for (var i = 0; i < 4; i++) {
    var tr = document.createElement("tr");
    for (var j = 0; j < 4; j++) {
        var td = document.createElement("td");
        //le asignamos los atributos a cada casilla incluido el evento onclick para mover la casilla
        td.setAttribute("id", "td" + i + j);
        td.setAttribute("class", "td");
        td.setAttribute("onclick", "mover(this)");
        td.setAttribute("style", "background-color: #000000; color: #ffffff; width: 50px; height: 50px; text-align: center; vertical-align: middle;");
        td.innerHTML = (i * 4) + j + 1;
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
}
table.appendChild(tbody);
document.body.appendChild(table);

//la siguiente funcion se encarga de desordenar los valores del tablero para asi cada vez tener valores distintos, la casilla en blanco siempre sera la ultima
function desordenar() {
    var array = [];
    for (var i = 0; i < 16; i++) {
        array[i] = i + 1;
    }
    array.sort(function () {
        return Math.random() - 0.5
    });
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            document.getElementById("td" + i + j).innerHTML = array[i * 4 + j];
        }
    }
    document.getElementById("td33").innerHTML = "";
}
//la siguiente funcion es la encargada de mover la casilla, pasandole esta misma para realizar el intercambio
function mover(casilla) {
    //recogemos los id para saber la posicion de la casilla en blanco
    var id = casilla.id;
    var i = parseInt(id.charAt(2));
    var j = parseInt(id.charAt(3));

    if (i > 0 && document.getElementById("td" + (i - 1) + j).innerHTML == "") {
        document.getElementById("td" + (i - 1) + j).innerHTML = casilla.innerHTML;
        casilla.innerHTML = "";
    } else if (i < 3 && document.getElementById("td" + (i + 1) + j).innerHTML == "") {
        document.getElementById("td" + (i + 1) + j).innerHTML = casilla.innerHTML;
        casilla.innerHTML = "";
    } else if (j > 0 && document.getElementById("td" + i + (j - 1)).innerHTML == "") {
        document.getElementById("td" + i + (j - 1)).innerHTML = casilla.innerHTML;
        casilla.innerHTML = "";
    } else if (j < 3 && document.getElementById("td" + i + (j + 1)).innerHTML == "") {
        document.getElementById("td" + i + (j + 1)).innerHTML = casilla.innerHTML;
        casilla.innerHTML = "";
    }
}
//funcion que va comprobando en cada momento si se ha ganado o no
function comprobar() {
    var array = [];
    for (var i = 0; i < 16; i++) {
        array[i] = i + 1;
    }
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (document.getElementById("td" + i + j).innerHTML != array[i * 4 + j]) {
                return false;
            }
        }
    }
    return true;
}
desordenar();
//creamos un intervalo para saber si se ha ganado o no
var intervalo = setInterval(function () {
    if (comprobar()) {
        alert("Has ganado");
        clearInterval(intervalo);
    }
}, 1000);