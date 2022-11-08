//Ejercicio 4 y 5
//----------------------------------------------------------------------------------------------------------------------
function pintarCelda(celda) {
    if (event.ctrlKey) {
        celda.style.backgroundColor = "red";
    } else if (event.shiftKey) {
        celda.style.backgroundColor = "blue";
    } else if(event.altKey){
        celda.style.backgroundColor = "white";
    }
}

window.onload = function () {
    var tabla = document.createElement("table");
    tabla.setAttribute("border", "1");
    tabla.setAttribute("id", "tabla");
    for (var i = 0; i < 10; i++) {
        var fila = document.createElement("tr");
        for (var j = 0; j < 10; j++) {
            var celda = document.createElement("td");
            celda.setAttribute("width", "50");
            celda.setAttribute("height", "50");
            celda.setAttribute("id", "celda" + i + j);
            celda.setAttribute("onmousemove", "pintarCelda(this)");
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
    document.body.appendChild(tabla);
}
function borrarTabla(){
    var tabla = document.getElementById("tabla");
    var celdas = tabla.getElementsByTagName("td");
    for(var i=0;i<celdas.length;i++){
        celdas[i].style.backgroundColor = "white";
    }
}
var btn = document.getElementById("btn1");
btn.addEventListener("click", borrarTabla);

