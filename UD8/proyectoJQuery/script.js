$(document).ready(function () {
    // Función de validación para el nombre
    function validateName() {
        var name = $("#name").val();
        return name.trim() != "";
    }

    // Función de validación para el teléfono
    function validatePhone() {
        var phone = $("#phone").val();
        var phonePattern = /^\d{9}$/;
        return phonePattern.test(phone);
    }

    // Función de validación para el DNI
    function validateDni() {
        var dni = $("#dni").val();
        var dniPattern = /^\d{8}[A-Za-z]$/;
        return dniPattern.test(dni);
    }

    // Función de validación para el texto
    function validateText() {
        var text = $("#text").val();
        return text.trim() != "";
    }

    // Función de validación para la fecha
    function validateDate() {
        var date = $("#date").val();
        return date != "";
    }

    // Evento de escucha para el nombre
    $("#name").on("blur", function () {
        var isValid = validateName();
        if (!isValid) {
            alert("Por favor ingrese su nombre");
            $("#name").focus();
            //desactivamos los demas campos
            $("#phone").prop("disabled", true);
            $("#dni").prop("disabled", true);
            $("#text").prop("disabled", true);
            $("#date").prop("disabled", true);
            //si esta bien los activamos
        } else {
            $("#phone").prop("disabled", false);
            $("#dni").prop("disabled", false);
            $("#text").prop("disabled", false);
            $("#date").prop("disabled", false);

        }
    });

    // Evento de escucha para el teléfono
    $("#phone").on("blur", function () {
        var isValid = validatePhone();
        if (!isValid) {
            alert("Por favor ingrese un número de teléfono válido (9 dígitos)");
            $("#phone").focus();
            //desactivamos los demas campos
            $("#dni").prop("disabled", true);
            $("#text").prop("disabled", true);
            $("#date").prop("disabled", true);
            //si esta bien los activamos
        } else {
            $("#dni").prop("disabled", false);
            $("#text").prop("disabled", false);
            $("#date").prop("disabled", false);

        }
    });

    // Evento de escucha para el DNI
    $("#dni").on("blur", function () {
        var isValid = validateDni();
        if (!isValid) {
            alert("Por favor ingrese un DNI válido");
            $("#dni").focus();
            //desactivamos los demas campos
            $("#text").prop("disabled", true);
            $("#date").prop("disabled", true);
            //si esta bien los activamos
        } else {
            $("#text").prop("disabled", false);
            $("#date").prop("disabled", false);

        }
    });

    // Evento de escucha para el texto
    $("#text").on("blur", function () {
        var isValid = validateText();
        if (!isValid) {
            alert("Por favor ingrese un texto");
            $("#text").focus();
            //desactivamos los demas campos
            $("#date").prop("disabled", true);
            //si esta bien los activamos
        } else {
            $("#date").prop("disabled", false);


        }
    });

    // Evento de escucha para la fecha
    $("#date").on("blur", function () {
        var isValid = validateDate();
        if (!isValid) {
            alert("Por favor seleccione una fecha");
            $("#date").focus();
        }
    });
});

//---------------------------------------------------------------------------------------------------------------------


// Muestra los testimonios en formato de tabla
$.ajax({
    url: 'servicios.json',
    success: function (data) {
        // Selecciona 3 testimonios aleatorios
        let testimonios = [];
        for (let i = 0; i < 3; i++) {
            let testimonio = data.testimonials[Math.floor(Math.random() * data.testimonials.length)];
            testimonios.push(testimonio);
        }

        // Muestra los testimonios en formato original
        let testimoniosContainer = $('#testimonios .testimonios-card-container');
        let view = 'default';
        loadTestimonials();

        // Eventos para alternar entre vistas
        $('#btn-tabla').click(function () {
            view = 'table';
            showTestimonios();
        });
        $('#btn-default').click(function () {
            view = 'default';
            showTestimonios();
        });

        // La función showTestimonios se encarga de mostrar los testimonios en la página
        function showTestimonios() {
            // Primero, vaciamos el contenedor de testimonios
            testimoniosContainer.empty();

            // Si el valor de la variable "view" es "default", entonces se muestran los testimonios en formato de tarjetas
            if (view === 'default') {
                testimonios.forEach(function (testimonio) {
                    testimoniosContainer.append(`
                <div class="testimonio-card">
                    <h3>${testimonio.name}</h3>
                    <p>${testimonio.text}</p>
                    <span>${testimonio.date}</span>
                </div>
            `);
                });
            }
            // Si el valor de la variable "view" no es "default", entonces se muestran los testimonios en formato de tabla
            else {
                testimoniosContainer.append(`
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Texto</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
        `);
                testimonios.forEach(function (testimonio) {
                    testimoniosContainer.append(`
                <tr>
                    <td>${testimonio.name}</td>
                    <td>${testimonio.text}</td>
                    <td>${testimonio.date}</td>
                </tr>
            `);
                });
                testimoniosContainer.append(`
                </tbody>
            </table>
        `);
            }
        }


        // Función para cargar testimonios desde un archivo JSON y actualizarlos cada 10 segundos
        function loadTestimonials() {
            // Realiza una llamada AJAX utilizando la biblioteca jQuery
            $.ajax({
                // Especifica la URL del archivo JSON que contiene los testimonios
                url: 'servicios.json',
                // Función a ejecutarse cuando la llamada AJAX tenga éxito
                success: function (data) {
                    // Array para almacenar los testimonios seleccionados
                    let testimonios = [];
                    // Selecciona tres testimonios al azar desde el array en el archivo JSON
                    for (let i = 0; i < 3; i++) {
                        let testimonio = data.testimonials[Math.floor(Math.random() * data.testimonials.length)];
                        testimonios.push(testimonio);
                    }
                    // Contenedor donde se mostrarán los testimonios
                    let testimoniosContainer = $('#testimonios .testimonios-card-container');
                    // Vacía el contenedor de testimonios antes de agregar los nuevos
                    testimoniosContainer.empty();
                    // Recorre el array de testimonios y los agrega al contenedor
                    testimonios.forEach(function (testimonio) {
                        testimoniosContainer.append(`
                          <div class="testimonio-card">
                            <h3>${testimonio.name}</h3>
                            <p>${testimonio.text}</p>
                            <span>${testimonio.date}</span>
                          </div>
                        `);
                    });
                    // Agrega un efecto de desaparecer/aparecer a los testimonios
                    testimoniosContainer.fadeIn(1000).fadeOut(1000).fadeIn(1000);
                },
                // Función a ejecutarse cuando la llamada AJAX falle
                error: function (error) {
                    // Si la llamada falla, se vuelve a intentar cargar los testimonios después de 5 segundos
                    setTimeout(loadTestimonials, 5000);
                }
            });
            // Cambia los testimonios cada 10 segundos
            setTimeout(loadTestimonials, 10000);
        }
    }
});

/*---------------------------------------------------------------------------------------------------------------------*/
// Muestra los servicios en formato de tabla
$.ajax({
    url: 'servicios.json',
    success: function (data) {
        // Selecciona 3 servicios aleatorios
        let servicios = [];
        for (let i = 0; i < 3; i++) {
            let servicio = data.services[Math.floor(Math.random() * data.services.length)];
            servicios.push(servicio);
        }

        // Muestra los servicios en formato original
        let serviciosContainer = $('#servicios .serivcios-card-container');
        let view = 'default';
        loadServices();

        // Eventos para alternar entre vistas
        $('#btn-tabla2').click(function () {
            view = 'table';
            showServices();
        });
        $('#btn-default2').click(function () {
            view = 'default';
            showServices();
        });

        // La función showServices se encarga de mostrar los servicios en la página
        function showServices() {
            // Primero, vaciamos el contenedor de servicios
            serviciosContainer.empty();

            // Si el valor de la variable "view" es "default", entonces se muestran los servicios en formato de tarjetas
            if (view === 'default') {
                servicios.forEach(function (servicio) {
                    serviciosContainer.append(`
                <div class="servicio-card">
                    <h3>${servicio.title}</h3>
                    <p>${servicio.text}</p>
                </div>
            `);
                });
            }
            // Si el valor de la variable "view" no es "default", entonces se muestran los servicios en formato de tabla
            else {
                serviciosContainer.append(`
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Text</th>
                    </tr>
                </thead>
                <tbody>
        `);
                servicios.forEach(function (servicio) {
                    serviciosContainer.append(`
                <tr>
                    <td>${servicio.title}</td>
                    <td>${servicio.text}</td>
                </tr>
            `);
                });
                serviciosContainer.append(`
                </tbody>
            </table>
        `);
            }
        }

        // Función para cargar servicios desde un archivo JSON y actualizarlos cada 10 segundos
        function loadServices() {
            // Realiza una llamada AJAX utilizando la biblioteca jQuery
            $.ajax({
                // Especifica la URL del archivo JSON que contiene los servicios
                url: 'servicios.json',
                // Función a ejecutarse cuando
                success: function (data) {
                    let servicios = [];
                    // Selecciona tres servicios al azar desde el array en el archivo JSON
                    for (let i = 0; i < 3; i++) {
                        let servicio = data.services[Math.floor(Math.random() * data.services.length)];
                        servicios.push(servicio);

                    }
                    // Contenedor donde se mostrarán los servicios
                    let serviciosContainer = $('#servicios .serivcios-card-container');
                    // Vacía el contenedor de servicios antes de agregar los nuevos
                    serviciosContainer.empty();
                    // Recorre el array de servicios y los agrega al contenedor
                    servicios.forEach(function (servicio) {
                        serviciosContainer.append(`
                          <div class="servicio-card">
                            <h3>${servicio.title}</h3>
                            <p>${servicio.text}</p>
                          </div>
                        `);
                    });
                    // Agrega un efecto de desaparecer/aparecer a los servicios
                    serviciosContainer.fadeIn(1000).fadeOut(1000).fadeIn(1000);
                },
                // Función a ejecutarse cuando la llamada AJAX falle
                error: function (error) {
                    // Si la llamada falla, se vuelve a intentar cargar los servicios después de 5 segundos
                    setTimeout(loadServices, 5000);
                }
            });
            // Cambia los servicios cada 10 segundos
            setTimeout(loadServices, 10000);
        }
           

        $(document).ready(function () {

            // Escuchamos el evento de desplazamiento en el objeto de la ventana
            $(window).scroll(function () {
                // Comprobamos si la distancia de desplazamiento desde la parte superior es superior a 100 píxeles
                if ($(this).scrollTop() > 100) {
                    // Si es así, mostramos el botón"
                    $('.scroll-to-top-btn').fadeIn();
                } else {
                    // Si no, lo ocultamos
                    $('.scroll-to-top-btn').fadeOut();
                }
            });


            $('.scroll-to-top-btn').click(function () {
                // Animamos el desplazamiento hasta la parte superior de la página durante una duración de 1000 milisegundos
                $('html, body').animate({
                    scrollTop: 0
                }, 1000);
                // Devuelve falso para evitar el comportamiento predeterminado del botón.
                return false;
            });
        });
    },
    error: function (error) {
        // Si la llamada falla, se vuelve a intentar cargar los servicios después de 5 segundos
        setTimeout(loadServices, 5000);
        
    }
    
});



