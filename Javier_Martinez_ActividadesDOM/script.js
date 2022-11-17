//Ejercicio 1
//----------------------------------------------------------------------------------------------------------------------
var enlaces = document.getElementsByTagName("a");
console.log("Número de enlaces de la página: " + enlaces.length);

var penultimoEnlace = enlaces[enlaces.length - 2];
console.log("Dirección a la que enlaza el penúltimo enlace: " + penultimoEnlace.href);

var contador = 0;
for (var i = 0; i < enlaces.length; i++) {
    if (enlaces[i].href == "https://www.google.com/") {
        contador++;
    }
}
console.log("Numero de enlaces que enlazan a google: " + contador);

var parrafos = document.getElementsByTagName("p");
var tercerParrafo = parrafos[2];
var enlacesParrafo = tercerParrafo.getElementsByTagName("a");
console.log("Número de enlaces del tercer párrafo: " + enlacesParrafo.length);

//Ejercicio 4
//----------------------------------------------------------------------------------------------------------------------
var boton = document.getElementById("boton");
boton.addEventListener("click", function () {
    var lista = document.getElementById("lista");
    var entrada = document.createElement("li");
    entrada.innerHTML = "Hola Mundo";
    lista.appendChild(entrada);
});
//Ejercicio 5
//----------------------------------------------------------------------------------------------------------------------
var botonAdjuntar = document.createElement("button");
botonAdjuntar.innerHTML = "Adjuntar otro fichero";
document.body.appendChild(botonAdjuntar);
document.body.appendChild(document.createElement("br"));

var botonEnviar = document.createElement("button");
botonEnviar.innerHTML = "Enviar";
document.body.appendChild(botonEnviar);
document.body.appendChild(document.createElement("br"));

var input = document.createElement("input");
input.type = "file";
document.body.appendChild(input);
document.body.appendChild(document.createElement("br"));

botonAdjuntar.addEventListener("click", function () {
    var input = document.createElement("input");
    input.type = "file";
    document.body.appendChild(input);
});
botonEnviar.addEventListener("click", function () {
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type == "file") {
            console.log(inputs[i].value);
        }
    }
});
//Ejercicio 6
//----------------------------------------------------------------------------------------------------------------------
var imagenes = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDt9WcKbNzsbpd5iGlQgKwlTCjUNNq3br0fQ2s1ONVu3faXzL-2l1ORW5Bl42zzMZgd0A&usqp=CAU",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg/280px-Tour_Eiffel_Wikimedia_Commons.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/All_Gizah_Pyramids.jpg/1200px-All_Gizah_Pyramids.jpg"];
var imagen = document.createElement("img");
imagen.src = imagenes[0];
document.body.appendChild(imagen);
document.body.appendChild(document.createElement("br"));

var botonAnterior = document.createElement("button");
botonAnterior.innerHTML = "Anterior";
document.body.appendChild(botonAnterior);
document.body.appendChild(document.createElement("br"));

var botonSiguiente = document.createElement("button");
botonSiguiente.innerHTML = "Siguiente";
document.body.appendChild(botonSiguiente);
document.body.appendChild(document.createElement("br"));

var contador = 0;
botonAnterior.addEventListener("click", function () {
    if (contador > 0) {
        contador--;
        imagen.src = imagenes[contador];
    }
});
botonSiguiente.addEventListener("click", function () {
    if (contador < imagenes.length - 1) {
        contador++;
        imagen.src = imagenes[contador];
    }
});
