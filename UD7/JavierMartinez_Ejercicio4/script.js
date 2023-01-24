function ocultarElemento() {
    //$("#lista1 li:first").hide();
    $("#lista1 li").hide();
}

function cambiarTamano() {
    $("#noticia1").css("font-size", "20px");
    $("#noticia2").css("font-size", "30px");
    $("#noticia3").css("font-size", "40px");
}
function mostrarOcultar(id) {
    
    $("#noticia1").toggle();
    $("#noticia2").toggle();
    $("#noticia3").toggle();
}

function cambiarColor() {
    $("#noticia1").css("background-color", "red");
    $("#noticia2").css("background-color", "blue");
    $("#noticia3").css("background-color", "green");
}
function volverColor() {
    $("#noticia1").css("background-color", "white");
    $("#noticia2").css("background-color", "white");
    $("#noticia3").css("background-color", "white");
}

window.onload = function () {
    ocultarElemento();
    cambiarTamano();
   // mostrarOcultar();
    $("#titulo1").click(mostrarOcultar);
    $("#titulo2").click(mostrarOcultar);
    $("#titulo3").click(mostrarOcultar);
    $("#noticia1").mouseover(cambiarColor);
    $("#noticia2").mouseover(cambiarColor);
    $("#noticia3").mouseover(cambiarColor);
    $("#noticia1").mouseout(volverColor);
    $("#noticia2").mouseout(volverColor);
    $("#noticia3").mouseout(volverColor);
}
    

