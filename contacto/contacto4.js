function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var telefono = document.getElementById("telefono").value;
    var texto = document.getElementById("texto").value;
    var acepto = document.getElementById("acepto").checked;

    if (nombre === "") {
        document.getElementById("errorNombre").innerHTML = "Ingrese su nombre.";
        return false;
    }

    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoRegex.test(correo)) {
        alert ('Ingrese todos los campos');
        return false;
    }

    
   const telefonoRegex = /^\d{10}$/;
    if (!telefonoRegex.test(telefono)) {
        document.getElementById("errorTelefono").innerHTML = "Ingrese un número de teléfono válido (10 dígitos).";
        return false;
    }

  
    if (texto === "") {
        document.getElementById("errorTexto").innerHTML = "Ingrese su comentario.";
        return false;
    }

    if (!acepto) {
        document.getElementById("errorAcepto").innerHTML = "Debe aceptar los términos y condiciones.";
        return false;
    }

    alert("Formulario enviado correctamente.");
    return true;
}