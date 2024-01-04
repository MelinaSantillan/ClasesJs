//esto es un comentario de una sola linea

/**
 * esto es un comentario de varias lineas
 */
//esto imprime un mensaje en consola
/*console.log("hola mundo");
console.log("Esto es otro mensaje mostrado por consola");*/

//variables

/**sintaxis
 * identificador del tipo de variable+ nombre de la variable= valor
 */

/*let mensaje = "este es el valor inicial de mi variable";
let edad = 31;
let nombre = "Melina";

console.log(mensaje);
console.log(edad);
console.log(nombre);

mensaje="este es el mensaje mof¿dificado";
console.log(mensaje);
// con esto escribo en el documento html
document.write(mensaje);
document.write("<br/>");
document.writeln(nombre);
document.write("<br/>")
document.writeln(edad);
//con esto muestro un mensaje de alerta en un pop
//alert("Esto es un menaje de alerta")
//con esto le pido al usuario que ingrese un dato
//prompt("por favor ingrese su nombre")

let datoIngresado = prompt ("por favor ingrese su nombre");
alert("usted ingreso lo siguiente: " + datoIngresado) */




/**tarea: leer documentacion Js campus */



//tipos de datos
//string: se las identifica xq estan contenidads por "", '', ``, siemore que vea comillas sera esta variable, aunque sea un numero

let cadena= "esto es un strig"
const cadena2= 'esto es otro string'

//tipos de datos number: se los identifica xq son numeros enteros o decimales

const numero= 13
const numero2= 13.4

//tioo booleanos: solo tienen 2 valores TRue or false

const verdadero= true
const falso= false

// array : se lo identifica xq estan contenidos por corchete []

const array= []

// OPERADORES

//OPERADOR DE ASIGNACION:=
cadena= 'cambio el valor inicial'
cadena= cadena2

//OPERADORES ARITMETICOS

//SUMA, PARTICULARIDAD DE ESTE OPERADROR: CUANDO SE TRATA DE STRING LO CONCATENA ES DECIR LOS UNE
let resultado= numero+numero2;
console.log('este es el valor de la variable resultado', resultado);
let concatenado= cadena +cadena2;
console.log('este es el valor de la variable concatenado',concatenado)
let a= 3;
let b= '2';
resultado= a+b;
console.log('este es el valor de la variable resultado', resultado);

//RESTA: 
let c= 5
let d=3
resultado= c-d;
console.log('este es el valor de la variable resultado', resultado);

//multiplicacion y division= *,/

// resto o modulo =% 
let e= 4
let f=2
resultado= 4%2
console.log('este es el valor de la variable resultado', resultado);

//operadores logicos: igual que, distinto que, negacion, estrictamnete igual, estrictamente distinto, mayor que, menor que, menor que, mayor igual que, menos igual que

console.log(e==f); //aqui se pregunta == si el valor de e es igual al valor de f

console.log(e!=f); // aqui se pregunta si el valor de e es diferente != a el de f

console.log(!verdadero); // aqui estoy estoy negando ! el valor de la constante verdadero

console.log(e>f); //aqui preguntamos si el valor de e es mayor que el de f

console.log(e>=f); // aqui preguntamos si el valor  de e es mayor o igual al de f

console.log(e<f); // aqui preguntamos si el valor  de e es menor al de f

console.log(e<=f); // aqui preguntamos si el valor  de e es menor o igual al de f

let g= "2";
let h= "4";

console.log(e==h); // el igual que == considera unicamente el valor sin importar el tipo del dato
console.log(e===h); // el estrictamente igual === tiene en cuenta el valor y el tipo del dato
console.log(e!=h); //el distinto considra el valor sin importar el tipo
console.log(e!==h); // el estritamente distinto considera tanto el valor como el tipo

//OTROS OPERADORES LOGICOS: AND LOGICO, OR LOGICO

//AND LOGICO EVALUA DOS EXPRESIONES BOOLEANAS Y SI AMBAS SON TRUE, EL VALOR RETORNADO ES TRUE, SI AL MENOS UNA DE LAS EXPRESIONES ES FALSE, EL VALOR RETORNADO ES FALSE

console.log(e>f && e!=f);
console.log(e==h && e===h);
// OR LOGICO EVALUA DOS EXPRESIONES BOOLEANAS Y SI AMBAS O UNA DE ELLLAS ES TRUE RETORNA TRUE, SOLO RETORNA FALSE SI AMBAS SON FALSE

console.log(e==h || e===h);
console.log(e===h || f!=g);


