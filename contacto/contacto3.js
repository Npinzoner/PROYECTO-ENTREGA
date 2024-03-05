    'use strict'
    function validar(){

    const nombre = document.querySelector('#nombre').value;
    const correo = document.querySelector('#correo').value;
    const telefono = document.querySelector('#telefono').value;
    const parrafo = document.querySelector('#parrafo').value;
    const politica = document.query('politica').checked;

    validarNombre(nombre);
    validarCorreo(correo);
    validarTelefono(telefono);
    validarParrafo(parrafo);

    if (!politica) {
        alert("Debes aceptar la política de datos para enviar el formulario.");
        return false;
      }

      return true;
    }

    const validarNombre = (cadena) => {
        const nombreRegex = /^[a-zA-ZÀ-ÿ']+(\s[a-zA-ZÀ-ÿ']+)*$/;
        if (!cadena.match(nombreRegex)){
            alert ('Nombre Inválido');
        }

    }

    const validarCorreo = (cadena) => {
        const correoRegex = /^([\w.]+[^#$%&?\/()='"!?¡]\w*-*)([@])(\w)+(\.[a-z]{2,3})$/;
        if (!cadena.match(correoRegex)){
            alert ('Correo Inválido');
        }

    }

    const validarTelefono = (cadena) => {
        const telefonoRegex = /^(\+\d{1,2}\s?)?(\d{1,4}[-.\s]?)?\d{1,4}[-.\s]?\d{1,9}$/;
        if (!cadena.match(telefonoRegex)){
            alert ('Teléfono Inválido');
        }

    }

    const validarParrafo = (cadena) => {
        const parrafoRegex = /^(\S+\s*){1,100}$/g;
        if (!cadena.match(parrafoRegex)){
            alert ('No hay texto');
        }

    }
    