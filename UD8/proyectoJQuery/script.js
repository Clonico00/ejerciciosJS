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

        function showTestimonios() {
            testimoniosContainer.empty();
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
            } else {
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

        function loadTestimonials() {
            $.ajax({
                url: 'servicios.json',
                success: function (data) {
                    let testimonios = [];
                    for (let i = 0; i < 3; i++) {
                        let testimonio = data.testimonials[Math.floor(Math.random() * data.testimonials.length)];
                        testimonios.push(testimonio);
                    }
                    let testimoniosContainer = $('#testimonios .testimonios-card-container');
                    testimonios.forEach(function (testimonio) {
                        testimoniosContainer.append(`
        <div class="testimonio-card">
          <h3>${testimonio.name}</h3>
          <p>${testimonio.text}</p>
          <span>${testimonio.date}</span>
        </div>
        `);
                    });
                },
                error: function (error) {
                    setTimeout(loadTestimonials, 5000);
                }
            });
        }
    }
});





