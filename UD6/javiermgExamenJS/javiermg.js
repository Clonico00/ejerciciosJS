// Javier Martinez Garcia

//Ejercicio 1
//-----------------------------------------------------------------------------------------------------
/*Escribe una función llamada rectangulo que haciendo uso de SVG y DOM, cree un
rectángulo de color aleatorio y borde amarillo, dentro del elemento cuyo ID se pasa
como parámetro. El segundo y tercer parámetro serán las dimensiones en alto y
ancho del rectángulo (en píxeles).*/

function rectangulo(id, alto, ancho) {
    var canvas = document.getElementById(id);
    var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("width", ancho);
    rect.setAttribute("height", alto);
    rect.setAttribute("fill", "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")");
    rect.setAttribute("stroke", "yellow");
    canvas.appendChild(rect);
    
}

var body = document.getElementsByTagName("body")[0];
var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("id", "svg");
svg.setAttribute("width", "600");
svg.setAttribute("height", "400");
body.appendChild(svg);
rectangulo("svg", 400, 600);

//Ejercicio 2
//-----------------------------------------------------------------------------------------------------
/*Realiza mediante DOM que muestre por pantalla el siguiente array preguntas. En html
el body debe aparecer vacío, sólo se muestran los elementos mediante la creación de
nodos en el DOM. Las preguntas, respuestas y solución las tienes en el array
preguntas. El número final indica la respuesta correcta.*/

preguntas = [["¿Cuál es el río más largo de la Península Ibérica?",[["Ebro","Tajo","Guadalquivir"],1]],["¿Cuál es el país más pequeño del mundo?",[["Granada","Andorra","Ciudad del Vaticano"],2]],["¿Cuántos océanos hay en la Tierra?",[["5","6","7"],0]], ["Transilvania es una región localizada en el centro de:",[["Bulgaria","Ucrania","Rumania"],2]],[" Los montes Cárpatos son un sistema montañoso de Europa oriental que se extienden por Austria, la República Checa, Eslovaquia, Polonia, Ucrania, Hungria, Rumanía y:",[["Bulgaria","Serbia","Croacia"],1]],[" Marsella es una ciudad portuaria localizada en el sur de:",[["Francia","Bélgica","Suiza"],0]],[" El Bósforo (o estrecho de Estambul) es un estrecho de 30 km. de longitud que separa Europa de Asia. ¿En qué país se encuentra?",[["Grecia","Turquía","Bulgaria"],1]],[" El monte Elbrús es el pico más elevado de Europa ya que cuenta con una altitud de 5642 metros; está localizado en la parte occidental de la cordillera caucásica. ¿En qué país está este pico?",[["Rusia","Ucrania","Georgia"],0]]];

function mostrarPreguntas() {
    var body = document.getElementsByTagName("body")[0];
    var ol = document.createElement("ol");
    //el bucle creado funciona de la siguiente manera, primero se crea un li, dentro de este se crea un h3 con el texto de la pregunta y despues un ul, dentro del ul se crean los li con las respuestas
    for (var i = 0; i < preguntas.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = preguntas[i][0];
        var ul = document.createElement("ul");
        for (var j = 0; j < preguntas[i][1][0].length; j++) {
            var li2 = document.createElement("li");
            li2.innerHTML = preguntas[i][1][0][j];
            ul.appendChild(li2);
        }
        li.appendChild(ul);
        ol.appendChild(li);
    }
    body.appendChild(ol);
}

//mostrarPreguntas();

//Ejercicio 3
//-----------------------------------------------------------------------------------------------------
/* En el anterior programa añade un botón para reiniciar el test y que desordene las
preguntas.*/

var boton = document.createElement("button");
boton.innerHTML = "Reiniciar";
boton.setAttribute("onclick", "reiniciar()");
body.appendChild(boton);

function reiniciar() {
    //elimina el ol ya que queremos que se vuelva a crear con las preguntas desordenadas cada vez que se pulse el boton 
    // y al ser el elemento padre de los li, estos tambien se eliminan
    var ol = document.getElementsByTagName("ol")[0];
    body.removeChild(ol);
    
    preguntas.sort(function() {
        return Math.random() - 0.5;
    });
    // el sort de arriba funciona de la siguiente manera, el sort por defecto ordena los elementos de menor a mayor, 
    // pero como el resultado de la resta es un numero aleatorio entre -0.5 y 0.5, el sort los ordena de forma aleatoria
    //mostrarPreguntas();
    mostrarPreguntas2();
    
    //recargamos la pagina para que se vuelva a crear el ol con las preguntas desordenadas y el cronometro
    location.reload();
    
}

//Ejercicio 4
//-----------------------------------------------------------------------------------------------------
/*En el anterior programa añade un cronómetro que limite el tiempo para realizar el
test a 3 minutos tiene que aparecer por pantalla cuando pulsemos el botón de
reinicio del test.*/
var segundos = 0;
var minutos = 0;
var cronometro = document.createElement("p");
cronometro.setAttribute("id", "cronometro");
body.appendChild(cronometro);

function mostrarCronometro() {
    if (segundos == 60) {
        segundos = 0;
        minutos++;
    }
    if (minutos == 3) {
        clearInterval(intervalo);
        alert("Se ha acabado el tiempo");
        
    }
    cronometro.innerHTML = minutos + ":" + segundos;
    segundos++;
}

var intervalo = setInterval(mostrarCronometro, 1000);




//Ejercicio 5
//-----------------------------------------------------------------------------------------------------
/*En el anterior programa añade un radio options a todas las respuestas del test de tal
manera que sólo se pueda seleccionar una opción por cada pregunta e insertar un
botón que nos corrija el test y nos indique el resultado del test
(Resultado=númeroCorrectas-númeroIncorrectas/3). Sólo corrige si están todas las
respuestas respondidas.*/

function mostrarPreguntas2() {
    var body = document.getElementsByTagName("body")[0];
    var ol = document.createElement("ol");
    for (var i = 0; i < preguntas.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = preguntas[i][0];
        var ul = document.createElement("ul");
        for (var j = 0; j < preguntas[i][1][0].length; j++) {
            var li2 = document.createElement("li");
            var radio = document.createElement("input");
            radio.setAttribute("type", "radio");
            radio.setAttribute("name", "pregunta" + i);
            radio.setAttribute("value", j);
            li2.appendChild(radio);
            li2.innerHTML += preguntas[i][1][0][j];
            ul.appendChild(li2);
        }
        li.appendChild(ul);
        ol.appendChild(li);
    }
    body.appendChild(ol);
}

//creamos el boton corregir
var boton2 = document.createElement("button");
boton2.innerHTML = "Corregir";
boton2.setAttribute("onclick", "corregir()");
body.appendChild(boton2);

function corregir() {
    var correctas = 0;
    var incorrectas = 0;
    //recorremos el array preguntas
    for (var i = 0; i < preguntas.length; i++) {
        //recorremos el array de las respuestas
        var radio = document.getElementsByName("pregunta" + i);
        //recorremos el array de los radio
        for (var j = 0; j < radio.length; j++) {
            //si el radio esta seleccionado
            if (radio[j].checked) {
                //si el valor del radio es igual al valor de la respuesta correcta
                if (j == preguntas[i][1][1]) {
                    correctas++;
                } else {
                    incorrectas++;
                }
            }
        }
    }
    alert("Correctas: " + correctas + " Incorrectas: " + incorrectas + " Resultado: " + (correctas - incorrectas) / 3);
}

window.onload = function() {
    mostrarPreguntas2();
}

