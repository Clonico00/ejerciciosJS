function muestraSugerencia(nombreUsuario) {
    if(nombreUsuario.length==0) {
        document.getElementById("txtSugerencia").innerHTML="";
        return;
    }else {
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtSugerencia").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","sugerencias.php?param="+nombreUsuario,true);
        xmlhttp.send();
        
    }
}