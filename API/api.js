'use strict'
function verificarUbicacion() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(posicion) {
            let latitud = posicion.coords.latitude;
            let longitud = posicion.coords.longitude;

            const bogotaLatitud = 4.6097;
            const bogotaLongitud = -74.0817;

            let radioTolerancia = 0.1;

            if (Math.abs(latitud - bogotaLatitud) <= radioTolerancia && Math.abs(longitud - bogotaLongitud) <= radioTolerancia) {
                document.getElementById("resultado").innerHTML = "El usuario está en Bogotá.";
            } else {
                document.getElementById("resultado").innerHTML = "El usuario NO está en Bogotá.";
            }
        }, function(error) {
            document.getElementById("resultado").innerHTML = "Error al obtener la ubicación: " + error.message;
        });
    } else {
        alert("La geolocalización no está soportada en este navegador.");
    }
}