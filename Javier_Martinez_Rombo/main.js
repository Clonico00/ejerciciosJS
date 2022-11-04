var size = prompt("Dime el tamaño del rombo",6);
var i, j;
for (i = 1; i <= size; i++) {
  for (j = 1; j <= size - i; j++) document.write("&nbsp"); // espacio 
  for (j = 1; j <= i; j++) {
    document.write("*");
  }
  document.write("</br>");
}
for (i = (size-1); i >= 1; i--) {
  for (j = 1; j <= size - i; j++)document.write("&nbsp");  //espacio  
  for (j = i; j >= 1; j--) {
    document.write("*");
  }
  document.write("</br>");

}
