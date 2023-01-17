<?php
header( "Access-Control-Allow-Origin: *" );
//Array de nombres de ciudades
$arr[] = "Juan";
$arr[] = "Pablo";
$arr[] = "Javi";
$arr[] = "Sergio";

//Primero recogemos el parámetro de la URL
$param = $_REQUEST["param"];

$sugerencia = "";

//primero comprobamos que el parámetro no esté vacío
if (strlen($param) > 0) {
    //Recorremos el array de nombres de usuarios
    for($i = 0; $i < count($arr); $i++) {
        //Si el parametro coincide con el nombre de usuario le escribimos que no está disponible
        if (strtolower($param) == strtolower($arr[$i])) {
            $sugerencia = "usuario no disponible";
        }
    }
}

echo $sugerencia === "" ? "usuario disponible" : $sugerencia;




?>