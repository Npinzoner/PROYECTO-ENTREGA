    'use strict'
    const form = document.getElementById('form');
    const button = document.getElementById('btnDatos');

    const nombre = document.getElementById('nombre');
    const correo = document.getElementById('correo');
    const telefono = document.getElementById('telefono');
    const parrafo = document.getElementById('parrafo');
    const politica = document.getElementById('politica');

    const formValid = {
        nombre: false,
        correo: false,
        telefono: false,
        parrafo: false,
        politica: false

    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if(validarFormulario() === -1){
            alert("Enviando formulario");
        }else{
            alert("Error");
        }
    });
    const validarFormulario = () => {
        const formsvalues = Object.values(formValid);
        let valores = formsValues.findcontacto (v => v === false);
        console.log(valores);
        return valores;
    }

    nombre.addEventListener('change', (e) => {
        const nombreRegex = /^[a-zA-ZÀ-ÿ']+(\s[a-zA-ZÀ-ÿ']+)*$/g;
        formValid.nombre = e.target.value.match(nombreRegex) ? true : false;
        console.log (Object.values(formValid));

    });

    correo.addEventListener('change', (e) => {
        const correoRegex = /^([\w.]+[^#$%&?\/()='"!?¡]\w*-*)([@])(\w)+(\.[a-z]{2,3})$/g;
        formValid.correo = e.target.value.match(correoRegex) ? true : false;
        console.log (Object.values(formValid));

    });

    telefono.addEventListener('change', (e) => {
        const telefonoRegex = /^(\+\d{1,2}\s?)?(\d{1,4}[-.\s]?)?\d{1,4}[-.\s]?\d{1,9}$/g;
        formValid.telefono = e.target.value.match(telefonoRegex) ? true : false;
        console.log (Object.values(formValid));

    });

    parrafo.addEventListener('change', (e) => {
        const parrafoRegex = /^(\S+\s*){1,100}$/g;
        formValid.parrafo = e.target.value.match(parrafoRegex) ? true : false;
        console.log (Object.values(formValid));

    });

    politica.addEventListener('change', (e) => {
        formValid.politica = e.target.checked === true ? true : false;
        console.log (Object.values(formValid));

    });




   