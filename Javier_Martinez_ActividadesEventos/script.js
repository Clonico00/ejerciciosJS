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
