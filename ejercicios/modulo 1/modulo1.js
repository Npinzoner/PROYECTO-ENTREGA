'use strict'
//Realizar el algoritmo que convierta litros en centilitros, decilitros, galones y onza//
let opcion = prompt ('ingrese cantidad de litros');

let resultado = opcion * 100;
console.log ("Cantidad en centilitros:" +resultado)
resultado = opcion * 10;
console.log ("Cantidad en decilitros:" +resultado)
resultado = opcion * 0.264172;
console.log ("Cantidad en galones:" +resultado)
resultado = opcion * 33.814;
console.log ("Cantidad en onzas:" +resultado)


//Realizar el algoritmo que realice las 4 operaciones básicas para dos números de entrada//
let numero1= prompt("ingrese un número");
let numero2= prompt("ingrese otro número");

let total = numero1 + numero2;
console.log("Suma:" + total);
total = numero1 - numero2;
console.log("Resta:" + total);
total = numero1 * numero2;
console.log("Multiplicación:" + total);
total = numero1 / numero2;
console.log("División:" + total);

//Realizar el algoritmo que convierta grados centígrados en Fahrenheit y viceversa.//
let centi, Fahren
centi = prompt("Ingrese grados centrigrados")
Fahren = (9/5*centi)+32;
console.log(centi + "grados centrigrados equivalen a:"+ Fahren + "farhenheit")

//Realizar el algoritmo que calcule el valor a pagar por algunos galones de gasolina sisabemos que cada centilitro cuesta 25 pesos. Imprimir el valor a pagar y la cantidadde gasolina despachada en litros//
 let galones= prompt("ingrese la cantidad de galones")

 let precio= (galones * 378.541)*25;
 console.log("El que precio que debe pagar por"+ galones + " galones es"+ precio + "pesos")
 let litros= (galones * 3.78541);
 console.log ("Cantidad en litros:" + litros)

 //Realizar un algoritmo que calcule el salario de un empleado según los siguientes parámetros.//
let salariobruto= prompt('Ingrese un valor entre 5 y 8 cifras');
let salario ="";

switch (true) {
    case salariobruto < 699999:
         salario =`El salario es: ${salariobruto-(salariobruto*0.20)+(salariobruto*0.60)}`;
    break; 
    case salariobruto > 700000 && salariobruto < 999999:
        salario = `El salario es: ${salariobruto-(salariobruto*0.40)+12000}`;
    break;
    case  salariobruto > 100000:
        salario = `El salario es:${salariobruto-(salariobruto*0.60)}`;
        break;
}
console.log (salario)





