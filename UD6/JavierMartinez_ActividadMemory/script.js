/*crea la tabla*/
var tabla = document.createElement("table");
tabla.setAttribute("border", "1");
tabla.setAttribute("width", "100px");
tabla.setAttribute("height", "100px");
tabla.setAttribute("id", "tabla");
document.body.appendChild(tabla);

/*crea las filas*/
var fila1 = document.createElement("tr");
var fila2 = document.createElement("tr");
var fila3 = document.createElement("tr");
tabla.appendChild(fila1);
tabla.appendChild(fila2);
tabla.appendChild(fila3);

/*creamos el array de los numeros y lo desordenamos*/
arrayNumeros = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
/*creamos un array como el de los numeros pero con las imagenes de la carpeta img*/
arrayImagenes = ["img/batman.png", "img/flash.png", "img/superman.png", "img/hulk.png", "img/thor.png", "img/spiderman.png", "img/batman.png", "img/flash.png", "img/superman.png", "img/hulk.png", "img/thor.png", "img/spiderman.png"];
arrayNumeros.sort(function() {return Math.random() - 0.5});
arrayImagenes.sort(function() {return Math.random() - 0.5});
/*crea las celdas*/
for (var i = 0; i < 12; i++) {
    /*hacemos que por defecto salga la foto img/escudo.png, y que cuando se clique enseñe la otra*/
    var celda = document.createElement("td");
    var imagen = document.createElement("img");
    imagen.setAttribute("src", "img/escudo.png");
    imagen.setAttribute("width", "100px");
    imagen.setAttribute("height", "100px");
    celda.appendChild(imagen);
    celda.setAttribute("id", "celda" + arrayNumeros[i]);
    celda.setAttribute("onclick", "comprobar(this)");
    celda.setAttribute("style", "background-color: white");
    if (i < 4) {
        fila1.appendChild(celda);
    }
    else if (i < 8) {
        fila2.appendChild(celda);
    }
    else {
        fila3.appendChild(celda);
    }

}

var celda1 = null;
var celda2 = null;
var contador = 0;
function comprobar(celda) {
    if (celda1 == null) {
        celda1 = celda;
        celda1.style.backgroundColor = "red";
        celda1.firstChild.setAttribute("src", arrayImagenes[parseInt(celda1.getAttribute("id").substring(5)) - 1]);
    }
    else {
        celda2 = celda;
        celda2.style.backgroundColor = "red";
        celda2.firstChild.setAttribute("src", arrayImagenes[parseInt(celda2.getAttribute("id").substring(5)) - 1]);
        if (celda1.innerHTML == celda2.innerHTML) {
            celda1.style.backgroundColor = "green";
            celda2.style.backgroundColor = "green";
            celda1 = null;
            celda2 = null;
            contador++;
            if (contador == 6) {
                alert("Has ganado");
            }
        }
        else {
            setTimeout(function() {
                celda1.style.backgroundColor = "white";
                celda2.style.backgroundColor = "white";
                celda1.firstChild.setAttribute("src", "img/escudo.png");
                celda2.firstChild.setAttribute("src", "img/escudo.png");
                celda1 = null;
                celda2 = null;
            }, 1000);
        }
    }
}







