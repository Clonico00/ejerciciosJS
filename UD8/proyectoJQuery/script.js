$(document).ready(function() {
    $("#name").blur(function() {
        validateName();
    });

    $("#phone").blur(function() {
        if (validateName()) {
            validatePhone();
        }
    });

    $("#dni").blur(function() {
        if (validateName() && validatePhone()) {
            validateDni();
        }
    });

    $("#text").blur(function() {
        if (validateName() && validatePhone() && validateDni()) {
            validateText();
        }
    });

    $("#date").blur(function() {
        if (validateName() && validatePhone() && validateDni() && validateText()) {
            validateDate();
        }
    });

    function validateName() {
        var name = $("#name").val();
        var nameReg = /^[a-zA-Z]+$/;
        if (!nameReg.test(name)) {
            $("#name").addClass("error");
            $("#name").after("<span class='error-message'>El nombre solo puede contener letras</span>");
            return false;
        } else {
            $("#name").removeClass("error");
            $(".error-message").remove();
            return true;
        }
    }

    function validatePhone() {
        var phone = $("#phone").val();
        var phoneReg = /^\d{9}$/;
        if (!phoneReg.test(phone)) {
            $("#phone").addClass("error");
            $("#phone").after("<span class='error-message'>El teléfono debe tener 9 dígitos</span>");
            return false;
        } else {
            $("#phone").removeClass("error");
            $(".error-message").remove();
            return true;
        }
    }

    function validateDni() {
        var dni = $("#dni").val();
        var dniReg = /^\d{8}[a-zA-Z]$/;
        if (!dniReg.test(dni)) {
            $("#dni").addClass("error");
            $("#dni").after("<span class='error-message'>El DNI debe tener 8 números y una letra</span>");
            return false;
        } else {
            $("#dni").removeClass("error");
            $(".error-message").remove();
            return true;
        }
    }

    function validateText() {
        var text = $("#text").val();
        var textReg = /^[a-zA-Z0-9]+$/;
        if (!textReg.test(text)) {
            $("#text").addClass("error");
            $("#text").after("<span class='error-message'>El texto solo puede contener letras y números</span>");
            return false;
        } else {
            $("#text").removeClass("error");
            $(".error-message").remove();
            return true;
            
        }
    }
    
    function validateDate() {
        var date = $("#date").val();
        var dateReg = /^\d{2}\/\d{2}\/\d{4}$/;
        if (!dateReg.test(date)) {
            $("#date").addClass("error");
            $("#date").after("<span class='error-message'>La fecha debe tener el formato dd/mm/aaaa</span>");
            return false;
        } else {
            $("#date").removeClass("error");
            $(".error-message").remove();
            return true;
        }
    }
});
