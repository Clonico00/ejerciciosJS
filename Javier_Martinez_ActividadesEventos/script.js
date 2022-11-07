//Ejercicio 1
//----------------------------------------------------------------------------------------------------------------------
document.getElementById("btn1").addEventListener("click", function () {
    alert("Click");
});
//Ejercicio 2
//----------------------------------------------------------------------------------------------------------------------
document.addEventListener("mousemove", function (event) {
    console.log("X: " + event.clientX + " Y: " + event.clientY);
});
//Ejercicio 3
//----------------------------------------------------------------------------------------------------------------------
window.addEventListener("load", function () {
    var fecha = new Date();
    console.log("Tiempo transcurrido desde la carga de la página: " + fecha.getTime());
});
//Ejercicio 4
//----------------------------------------------------------------------------------------------------------------------
function pintarCelda(celda) {
    if (event.ctrlKey) {
        celda.style.backgroundColor = "red";
    } else if (event.shiftKey) {
        celda.style.backgroundColor = "yellow";
    } else {
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



