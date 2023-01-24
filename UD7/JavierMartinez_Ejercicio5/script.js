//Ejercicio 1
//----------------------------------------------------------------------------------------------------------------------
function ejercicio1() {
    $("#tabla tr:gt(2)").css("background-color", "red");
    $("#tabla tr:lt(3)").css("background-color", "blue");
}

//Ejercicio 6
//----------------------------------------------------------------------------------------------------------------------
/*6. Crear un documento con un párrafo, tal que al hacer clic aumente el tamaño de la letra. Sólo
se producirá dicho efecto en dos ocasiones, luego el efecto debe desaparecer*/
function ejercicio6() {
    let contador = 0;
    $("p").click(function () {
        if (contador < 2) {
            $("p").css("font-size", "+=10px");
            contador++;
        } else {
            $("p").css("font-size", "16px");
            contador = 0;
        }
    });

}
//Ejercicio 8
//----------------------------------------------------------------------------------------------------------------------
/*8. Mediante una cola de 5 métodos fadeIn() aplicados sobre 5 elementos div cuadrados,
establecer un retraso “slow”, “fast”, 800 ms, 2000 ms y 4000 ms. respectivamente*/
function ejercicio8() {
    $("#div1").fadeIn("slow");
    $("#div2").fadeIn("fast");
    $("#div3").fadeIn(800);
    $("#div4").fadeIn(2000);
    $("#div5").fadeIn(4000);
}

//Ejercicio 9
//----------------------------------------------------------------------------------------------------------------------
/*9. Crea un documento con dos botones, start y stop. Mediante el primero se debe producir la
siguiente animación. Debe aparecer un elemento div cuadrado de 40 x 40, desplazarse a la
izquierda 200 px, cambiar de color a azul y ocultarse desplazándose hacia arriba.*/
function ejercicio9() {
    $("#div9")
        .css("background-color", "blue")
        .animate({
        left: '200px',
        height: 'toggle'
    }, 5000, function () {
    });
}


window.onload = function () {
    ejercicio1();
    ejercicio6();
    ejercicio8();
}