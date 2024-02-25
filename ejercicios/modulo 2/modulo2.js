'use strict'
//Realizar un programa que permita generar 100 números e imprimir solo los números pares.//
const miArray = []
for (let i = 0; i < 100; i++){
    miArray.push((Math.random() * (160 -1) + 1).toFixed(0));
}

let nuevoArray = miArray.filter(element => element % 2 == 0);

console.log(nuevoArray);//


//Realizar un programa que permita sumar los 150 primeros números.//

function sumanumeros(){
    let acumulador = 0;
    for(let i = 0; i <= 150; i++){
        acumulador += i;
    }
return acumulador;
}

console.log(sumanumeros);

// Leer 10 precios de productos y calcular cuánto cuestan los 10 productos.//
let costoTotal = 0;
for (let i = 1; i <= 10; i++) {
    let precio = parseFloat(prompt(`Ingrese el precio del producto ${i}:`));
    
        costoTotal += precio;

}
alert(`La suma total de los precios de los 10 productos es: ${costoTotal}`);

//Leer 12 notas de estudiantes y determinar cuántas aprobó y cuantas reprobó,dado un rango 0 a 10, reprueba cuando la nota está entre 0 y 5.//
function notasEstudiantes() {
    let aprobados = 0;
    let reprobados = 0;

    for (let i = 1; i <= 12; i++) {
        let nota = parseFloat(prompt(`Ingrese la nota ${i}:`));

        if (nota >= 0 && nota <= 5) {
            reprobados++;
          } else if (nota > 5 && nota <= 10) {
            aprobados++;
          } else {
            console.log(`La nota ${nota} no está en el rango válido de 0 a 10.`);
          }
        }
    
    alert(`Cantidad de estudiantes aprobados: ${aprobados}`);
    alert(`Cantidad de estudiantes reprobados: ${reprobados}`);
}
notasEstudiantes();

//Leer los primeros 50 números y contar cuantos múltiplos de 3 hay, imprimir la cantidad.//

function contarMultiplos() {
    let MultiplosDeTres = 0;

    
    for (let i = 1; i <= 50; i++) {
       
        if (i % 3 === 0) {
            MultiplosDeTres++;
        }
    }

    alert(`Dentro de los primeros 50 número, la cantidad de múltiplos de 3es: ${MultiplosDeTres}`);
}
contarMultiplos();

//Leer la cantidad de notas de un estudiante e imprimir por pantalla.//
function leerCantidadNotas() {
    let cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas del estudiante:"));


    if (isNaN(cantidadNotas) || cantidadNotas <= 0) {
        alert("Por favor, ingrese una cantidad de notas válida y mayor que cero.");
        return;  
    }
    let notas = [];

    for (let i = 1; i <= cantidadNotas; i++) {
        let nota = parseFloat(prompt(`Ingrese la nota ${i}:`));
            notas.push(nota);
        
    }
    alert(`Las notas ingresadas son: ${notas.join(", ")}`);
}

leerCantidadNotas();


//Leer la cantidad números y determinar cantidad de impares, imprimir cantidad de impares.//

function cuantosImpares() {
    let cantidadNumeros = parseInt(prompt("Ingrese la cantidad de números:"));
    let cantidadImpares = 0;

    for (let i = 1; i <= cantidadNumeros; i++) {
        let numero = parseInt(prompt(`Ingrese el número ${i}:`));
        if (isNaN(numero)) {
            alert("Por favor, ingrese un número válido.");
            i--;
        } else {
            if (numero % 2 !== 0) {
                cantidadImpares++;
            }
        }
    }
    alert(`La cantidad de números impares es: ${cantidadImpares}`);
}

cuantosImpares();

//Leer n cantidad de sueldos de empleados y determinar el sueldo más bajo,imprimir los sueldos y el sueldo más bajo.//

function SalarioBajo() {
    let numeroEmpleados = parseInt(prompt("Ingrese la cantidad de empleados:"));
    let salarios = [];
  
    for (let i = 1; i <= numeroEmpleados; i++) {
      let salario = parseFloat(prompt(`Ingrese el salario del empleado ${i}:`));
  
      salarios.push(salario);
    }
    if (salarios.valor === 0) {
        console.log("No se ingresaron salarios.");
        return;
      }
  
    let salarioMasBajo = salarios[0];
  
    for (let i = 1; i < salarios.valor; i++) {
      if (salarios[i] < salarioMasBajo) {
        salarioMasBajo = salarios[i];
      }
    }
  
    console.log("Salarios:", salarios.join(", "));
    console.log("Salario más bajo:", salarioMasBajo);
  }
  
  SalarioBajo();

  //Realizar un programa que pida la base, el exponente y se ejecute el cálculo sin uso de bibliotecas.//
function Potencia (base, exponente){
let resultado = 1;

for(let i = 0; i < exponente; i++){
    resultado *= base
}
return resultado;
}

let base = parseFloat(prompt("Ingrese la base:"));

let exponente = parseInt(prompt("Ingrese el exponente:"));

let resultado = Potencia(base, exponente);

console.log(`El resultado de ${base} elevado a la ${exponente} es: ${resultado}`);

//Llenar un arreglo de tamaño n, y estos elementos sean 1 y 0 alternado eimprimir por consola.//
function ArregloAlternado(n) {
    let arreglo = [];

    for (let i = 0; i < n; i++) {
        arreglo.push(i % 2 === 0 ? 1 : 0);
    }

 
    console.log("Arreglo alternado de 1 y 0:");
    console.log(arreglo);
}

ArregloAlternado();


//Llenar un arreglo de tamaño n, este tamaño debe ser impar, y el contenido del arreglo deben ser los números pares partiendo de 2.//

function ArregloImparconPares(n) {
    if (typeof n !== 'number' || n <= 0 || n % 2 === 0) {
        console.log(" Ingrese el tamaño del arreglo.");
        return;
    }

    let arreglo = [];

    for (let i = 2; i <= n * 2; i += 2) {
        arreglo.push(i);
    }

    console.log("Arreglo impar con números pares comenzando desde 2:");
    console.log(arreglo);
}

ArregloImparconPares();

//Llenar un arreglo con los primeros 100 números pares y muestre la suma de los elementos del arreglo.//
function ArregloSuma() {
    
    let arreglo = [];
    for (let i = 2; i <= 200; i += 2) {
        arreglo.push(i);
    }

    let suma = arreglo.reduce((total, num) => total + num, 0);

 
    console.log("Arreglo con los primeros 100 números pares:");
    console.log(arreglo);
    console.log("La suma de los elementos del arreglo es: " + suma);
}

ArregloSuma();

//Llenar un arreglo de tamaño n que se llene con números ingresados por el usuario y determine cantidad de positivos y negativos.//

function ArregloPositivosyNegativos(n) {
    if (typeof n !== 'number' || n <= 0) {
        console.log("Ingrese el tamaño del arreglo.");
        return;
    }

    let arreglo = [];

    for (let i = 0; i < n; i++) {
        let numero = parseFloat(prompt(`Ingrese el número ${i + 1}:`));
    }

    let positivos = 0;
    let negativos = 0;

    for (let i = 0; i < arreglo.valor; i++) {
        if (arreglo[i] > 0) {
            positivos++;
        } else if (arreglo[i] < 0) {
            negativos++;
        }
    }

    console.log("Cantidad de números positivos:", positivos);
    console.log("Cantidad de números negativos:", negativos);
}

ArregloPositivosyNegativos();