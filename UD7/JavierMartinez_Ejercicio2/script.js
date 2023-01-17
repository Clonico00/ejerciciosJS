/*Crea una página web que debe contener inicialmente un cuadro de texto (URL) y un botón (Mostrar Contenidos).

• Al cargar la página, el cuadro de texto debe mostrar por defecto la URL de la propia página.

• Al pulsar el botón "Mostrar Contenidos", se debe descargar mediante peticiones AJAX el contenido correspondiente a la URL introducida por el usuario.
El contenido de la respuesta recibida del servidor se debe mostrar en una zona llamada "Contenidos del archivo".

• Debe aparecer también una zona "Estados de la petición", que debe mostrar en todo momento el estado en el que se encuentra la petición (No inicializada, cargando, completada, etc.)

• Mostrar el contenido de todas las cabeceras de la respuesta del servidor en otra zona llamada "Cabeceras HTTP de la respuesta del servidor".

• Mostrar el código y texto de estado de la respuesta del servidor en una última zona "Código de estado".*/

function mostrarContenido() {
    var url = document.getElementById("url").value;
    var tabla = document.getElementById("tabla");
    var peticion = new XMLHttpRequest();
    peticion.onreadystatechange = function () {
        if (peticion.status == 200) {
            tabla.innerHTML = "<tr><td>" + peticion.responseText +
                "</td><td>" + peticion.getAllResponseHeaders() + "</td><td>" +
                peticion.status + " " + peticion.statusText + "</td></tr>";
        }
    }
    peticion.open("GET", url, true);
    peticion.send();
}