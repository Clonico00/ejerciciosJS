class Alumno {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }
}

let users = [""];
let alumnos = [""];

function addUser() {
  var userName = document.getElementById("nombreUsuario").value;
  console.log(userName);
  users.push(userName);
  users.sort();
  alert("añadido");
}
function showUser() {
  for (var i = 0; i < users.length; i++) {
    document.getElementById("contenido").innerHTML += users[i] + "<br>";
    console.log(users[i]);
  }
}
function deleteUser() {
  users.pop();
}

function crearAlumno() {
  var nomAlumno = document.getElementById("nombreAlumno").value;
  var apeAlumno = document.getElementById("apellidoAlumno").value;
  var edadAlumno = document.getElementById("edadAlumno").value;

  var alumno = new Alumno(nomAlumno, apeAlumno, edadAlumno);
  alumnos.push(alumno);

  alert("creado");
}
function showAlumnos() {
  alumnos.forEach(
    (car) =>
      (document.getElementById("contenido2").innerHTML +=
        JSON.stringify(car, null, 3) + "<br>")
  );
}
