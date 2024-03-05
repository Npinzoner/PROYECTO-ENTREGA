const dondeJugar = [
    {
        "nombre": "Paga Todo",
        "telefono": "PBX: 4786888",
        "descripcion": "Más de 3.000 puntos en Bogotá y Cundinamarca."
    },
    {
        "nombre": "Jer",
        "telefono": "PBX: 555555",
        "descripcion": "Con más de 1.200 terminales entre oficinas en Boyacá y Amazonas."
    },
    {
        "nombre": "Jer Putumayo",
        "telefono": "PBX: 89303048",
        "descripcion": "Somos MATRIX  una red de m+as de 200 puntos en el Putumayo."
    },
    {
        "nombre": "Acertemos",
        "telefono": "PBX: 4556067",
        "descripcion": "Presente en el Valle del Caua y Cauca con más de 3.000 oficinas."
    },
]

function mostrarInformacion(arregloInformacion){
    let lista = "<h1>Donde Jugar</h1>";
    arregloInformacion.forEach(element => {
        lista += `<div class="contenedor"> 
            <h3 class="titulo">${element.nombre}</h3>
            <h4>${element.telefono}</h4>
            <p>${element.descripcion}</p>
        </div>`
    });

    document.getElementById('informacionJuegos').innerHTML = lista
}

mostrarInformacion(dondeJugar)