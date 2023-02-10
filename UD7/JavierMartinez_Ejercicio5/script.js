//Ejercicio 1
//----------------------------------------------------------------------------------------------------------------------

function ejercicio1() {
    $("#tabla tr:gt(2)").css("background-color", "red");
    $("#tabla tr:lt(3)").css("background-color", "blue");
}

//Ejercicio 6
//----------------------------------------------------------------------------------------------------------------------

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

function ejercicio8() {
    $("#div1").fadeIn("slow");
    $("#div2").fadeIn("fast");
    $("#div3").fadeIn(800);
    $("#div4").fadeIn(2000);
    $("#div5").fadeIn(4000);
}

//Ejercicio 9
//----------------------------------------------------------------------------------------------------------------------

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