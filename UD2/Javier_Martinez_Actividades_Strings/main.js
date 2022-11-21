/*
1. Crea las siguientes funciones y llámalas desde una página XHTML para mostrar su
funcionamiento:
a) invierteCadena(cad_arg): devuelve invertida una cadena dada por el usuario
b) inviertePalabras(cad_arg): devuelve invertidas las palabras contenidas en la
cadena.
c) encuentraPalabraMasLarga(cad_arg): para una cadena de caracteres dada
devuelve la longitud de la palabra más larga en ella contenida
d) fltraPalabrasMasLargas(cad_arg, i): para una cadena de caracteres y un
valor numérico (i), devuelva el número de palabras cuya longitud es mayor a i.
e) cadenaBienFormada(cad_arg): formatea correctamente la cadena pasada,
de tal modo que sólo aparece en mayúscula la primera letra y el resto en
minúscula.  
*/
document.write("Ejercicio 1 <br>");
function invierteCadena(cad_arg) {
  let cadenaInvertida = "";
  for (let i = cad_arg.length - 1; i >= 0; i--) {
    cadenaInvertida += cad_arg[i];
  }
  return cadenaInvertida;
}
function inviertePalabras(cad_arg) {
  let palabras = cad_arg.split(" ");
  let cadenaInvertida = "";
  for (let i = palabras.length - 1; i >= 0; i--) {
    cadenaInvertida += palabras[i] + " ";
  }
  return cadenaInvertida;
}
function encuentraPalabraMasLarga(cad_arg) {
  let palabras = cad_arg.split(" ");
  let palabraMasLarga = "";
  for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].length > palabraMasLarga.length) {
      palabraMasLarga = palabras[i];
    }
  }
  return palabraMasLarga;
}
function filtraPalabrasMasLargas(cad_arg, i) {
  let palabras = cad_arg.split(" ");
  let palabrasFiltradas = [];
  for (let j = 0; j < palabras.length; j++) {
    if (palabras[j].length > i) {
      palabrasFiltradas.push(palabras[j]);
    }
  }
  return palabrasFiltradas;
}
function cadenaBienFormada(cad_arg) {
  let palabras = cad_arg.split(" ");
  let cadenaBienFormada = "";
  for (let i = 0; i < palabras.length; i++) {
    let palabra = palabras[i];
    palabra = palabra[0].toUpperCase() + palabra.slice(1).toLowerCase();
    cadenaBienFormada += palabra + " ";
  }
  return cadenaBienFormada;
}
let cadena = "Hola que tal";
document.write("La cadena original es: " + cadena + "<br>");
document.write("Cadena invertida: " + invierteCadena(cadena) + "<br>");
document.write("Palabras invertidas: " + inviertePalabras(cadena) + "<br>");
document.write(
  "Palabra más larga: " + encuentraPalabraMasLarga(cadena) + "<br>"
);
document.write(
  "Palabras filtradas: " + filtraPalabrasMasLargas(cadena, 3) + "<br>"
);
document.write("Cadena bien formada: " + cadenaBienFormada(cadena) + "<br>");
/*3. Realizar una función que permita localizar todas las apariciones de una subcadena
       dentro de otra.*/
document.write("<br>");
document.write("Ejercicio 3 <br>");
function localizaSubcadena(cadena, subcadena) {
  let posiciones = [];
  let posicion = cadena.indexOf(subcadena);
  while (posicion != -1) {
    posiciones.push(posicion);
    posicion = cadena.indexOf(subcadena, posicion + 1);
  }
  return posiciones;
}
let cadena2 = "Hola que tal";
let subcadena = "a";
document.write(
  "La subcadena '" +
    subcadena +
    "' aparece en la cadena '" +
    cadena2 +
    "' en las posiciones: " +
    localizaSubcadena(cadena, subcadena) +
    "<br>"
);
/*7. Desarrolla una función que tomando como entrada una cadena de texto nos
    devuelva si es o no un palíndromo*/
document.write("<br>");
document.write("Ejercicio 7 <br>");
function esPalindromo(cadena) {
  let cadenaInvertida = "";
  for (let i = cadena.length - 1; i >= 0; i--) {
    cadenaInvertida += cadena[i];
  }
  return cadena == cadenaInvertida;
}
let cadena3 = "anitalavalatina";
document.write(
  "La cadena '" + cadena3 + "' es palíndromo: " + esPalindromo(cadena3) + "<br>"
);
/*9. Escribir un procedimiento que lea una palabra y la escriba (formateada dentro de
una tabla) como se ve en la figura:
Entrada: HOLA
Salida: 
  H O L A
  O     L
  L     O
  O L A H         
*/
document.write("<br>");
document.write("Ejercicio 9 <br>");
function escribePalabra(palabra) {
  let palabraInvertida = "";
  for (let i = palabra.length - 1; i >= 0; i--) {
    palabraInvertida += palabra[i];
  }
  document.write("<table>");
  document.write("<tr>");
  for (let i = 0; i < palabra.length; i++) {
    document.write("<td>" + palabra[i] + "</td>");
  }
  document.write("</tr>");
  for (let i = 1; i < palabra.length - 1; i++) {
    document.write("<tr>");
    document.write("<td>" + palabra[i] + "</td>");
    for (let j = 1; j < palabra.length - 1; j++) {
      document.write("<td> </td>");
    }
    document.write("<td>" + palabraInvertida[i] + "</td>");
    document.write("</tr>");
  }
  document.write("<tr>");
  for (let i = 0; i < palabra.length; i++) {
    document.write("<td>" + palabraInvertida[i] + "</td>");
  }
  document.write("</tr>");
  document.write("</table>");
}
let palabra = "Amigo";
escribePalabra(palabra);

 


