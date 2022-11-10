//Ejercicio 1, 2 y 4( a excepcion de la parte del ejercicio 1que cuando la cookie caduque avise al usuario)
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Bienvenido de nuevo " + user);
    } else {
        user = document.getElementById("username").value;
        if (user != "" && user != null) {
            setCookie("username", user, 0.000694);
            alert("Bienvenido " + user);
        } else {
            alert("Introduce un nombre de usuario");
        }
    }
}

function deleteCookie() {
    var user = getCookie("username");
    var colorb = getCookie("colorBackground");
    var colorL = getCookie("colorLetter");
    var color = getCookie("size");
    if (user != "" && colorb != "" && colorL != "" && color != "") {
        document.cookie = 'username=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie = 'colorBackground=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie = 'colorLetter=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie = 'size=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        alert("Cookies borrada");
    } else {
        alert("No hay cookies para borrar");
    }

}

function readCookie(cname) {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].split("=");
        if (cookie[0] == cname) {
            return cookie[1];
        }
    }
    return null;
}

function saveColorBG() {
    var color = document.getElementById("colorBackground").value;
    setCookie("colorBackground", color, 0.000694);
    changeBackground();
}

function saveColorLetter() {
    var color = document.getElementById("colorLetter").value;
    setCookie("colorLetter", color, 0.000694);
    changeLetter();

}

function saveSize() {
    var color = document.getElementById("size").value;
    setCookie("size", color, 0.000694);
    changeSize();

}
//----------------------------------------------------------------------------------------------------------------------
function changeBackground() {
    var colorb = getCookie("colorBackground");
    if (colorb != null) {
        document.body.style.backgroundColor = colorb;
    }
}

function changeLetter() {
    var colorL = getCookie("colorLetter");
    if (colorL != null) {
        document.getElementById("p").style.color = colorL;
    }
}

function changeSize() {
    var color = getCookie("size");
    if (color != null) {
        document.getElementById("p").style.fontSize = color;
    }
}
//----------------------------------------------------------------------------------------------------------------------
var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
        checkCookie();
    }
);
var btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function () {
        deleteCookie();
    }
);
var btn3 = document.getElementById("btn3");
btn3.addEventListener("click", function () {
        saveColorBG();
    }
);
var btn4 = document.getElementById("btn4");
btn4.addEventListener("click", function () {
        saveColorLetter();
    }
);
var btn5 = document.getElementById("btn5");
btn5.addEventListener("click", function () {
        saveSize();
    }
);
//Ejercicio 3
//----------------------------------------------------------------------------------------------------------------------
//Para que una cookie se borre al cerrar el navegador hay que ponerle la fecha de expiración a 0





