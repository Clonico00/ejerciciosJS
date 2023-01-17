function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            readData(this);
        }
    };
    xhttp.open("GET", "data.xml", true);
    xhttp.send();
}

function readData(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table = "<tr><th>Correo</th><th>Asunto</th></tr>";
    var x = xmlDoc.getElementsByTagName("correo");
    for (i = 0; i < x.length; i++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("email")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("asunto")[0].childNodes[0].nodeValue +
            "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
}

//hacemos una funcion que se ejcute al recara la pagina, que lo que hace es que crea un intervalo para que se ejecute cada 5 segundos la funcion loadDoc
setInterval(loadDoc, 2000);
