/*
1. El adivino
• Escribe una función llamada miFortuna que: - toma 4 argumentos: número de hijos, nombre de la pareja, ubicación geográfica, cargo. 
    - muestra su fortuna en la pantalla de la siguiente manera: "Serás un X(encargado, administrativo,..) en Y(ciudad), y estarás casado con Z y tendrás N hijos". 
    • Llame a esa función 3 veces con 3 valores diferentes para los argumentos.
*/

function miFortuna(numHijos, nomPareja, ubicacion, cargo) {
    console.log("Serás un " + cargo + " en " + ubicacion + ", y estarás casado con " + nomPareja + " y tendrás " + numHijos + " hijos");
}

miFortuna(2, "Mercedes", "Granada", "Ingeniero Informatico");

/*
2. La calculadora de edad
Escribe una función llamada calcularEdad que: 
    • toma 2 argumentos: año de nacimiento, año actual. 
    • calcula las 2 edades posibles en base a esos años. 
    • muestra el resultado en la pantalla de la siguiente manera: "Usted es NN o NN" Llame a la función tres veces con diferentes conjuntos de valores. 
Bonificación: descubra cómo obtener el año actual en JavaScript en lugar de pasarlo.
*/
function calcularEdad(anioNac, anioAct, mesNac, mesAct) {
    if (mesAct >= mesNac) {
        edad = anioAct - anioNac;
        console.log("Usted tiene " + edad);
    } else if (mesAct < mesNac) {
        edad = (anioAct - anioNac) - 1;
        console.log("Usted tiene " + edad);
    }
    //asi se obtiene el anio actual en JS
    var hoy = new Date();
    var anio = hoy.getFullYear();
}

calcularEdad(2002, 2022, 6, 3);

/*
3. La calculadora de suministro de por vida
Escriba una función llamada calcularSuministro que:
    • toma 3 argumentos: bebida favorita, edad, cantidad por día.
    • calcula la cantidad consumida por el resto de la vida (basado en una edad máxima constante).
    • muestra el resultado en la pantalla de la siguiente manera: "Necesitarás que NN te dure hasta la vejez madura de X"
Llame a esa función tres veces, pasando diferentes valores cada vez.
Bonificación: acepte valores de coma flotante para la cantidad por día y redondee el resultado a un número redondo.
*/
function calcularSuministro(favDrink, edad, cantidadDia) {
    const edadMax = 80;
    añosPorVivir = 80 - edad;
    diasPorVivir = añosPorVivir * 365;
    bebidasPorVivir = diasPorVivir, cantidadDia;
    console.log("Necesitarás de " + bebidasPorVivir + " de tu bebida favorita " + favDrink + " te dure hasta la vejez madura de " + edadMax)

}

calcularSuministro("coca cola zero", 20, 2);