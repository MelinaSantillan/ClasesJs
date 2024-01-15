//ejercicio N°1

//alert('Un mensaje');

//Ejercicio n2

//document.write('Hello world');

//Ejercicio n3

//document.write(3+5);

//Ejercicio N4
//let nombre= prompt('Hola ingresa tu nombre');
//document.write('Hola ' + nombre);

//document.write('Hola '+ prompt('Hola ingresa tu nombre'));

//Ejercicio n5

/*let texto= '3'
let parseado= parseInt(texto);
console.log(texto);
console.log(parseado);
let numero= prompt('ingrese un numero');
console.log(numero);*/


/*let parse1=parseInt(prompt('Ingrese un numero'));
let parse2=parseInt(prompt('Ingrese numero2'));
console.log(parse1+parse2);*/

//Ejercicio N°6
/*let numero1=parseInt(prompt('Ingrese un numero'));
let numero2=parseInt(prompt('Ingrese otro numero'));
if (numero1>numero2) {
    console.log("El numero mayor es: ", numero1);
    
}else if(numero2>numero1){
    console.log("El numero mayor es: ", numero2);
}else{
    console.log("Los numeros son iguales");
}*/


//Ejercicio 7

/*let numero1=parseInt(prompt('Ingrese un numero'));
let numero2=parseInt(prompt('Ingrese otro numero'));
let numero3=parseInt(prompt('Ingrese un tercer numero'));
if(numero1>numero2&& numero1>numero3){
    console.log("El numero mayor es: ", numero1);
}else if(numero2>numero1 && numero2>numero3){
    console.log("el numero mayor es: ", numero2);
}else if (numero3>numero1 && numero3>numero2) {
    console.log("el numero mayor es: ", numero3);
}else if(numero1===numero2 && numero1===numero3){
    console.log("los 3 numeros son iguales");
}else {
    console.log("Por favor ingrese 3 numeros distintos");
}*/

//Ejercicio 8 
let resto= parseInt(prompt('Ingrese un numero'));
let resultado=resto%2
if (resultado===0) {
    console.log(`El numero ingresado: ${resto} si es divisible en 2`);
    
}else{
    console.log("El numero ingresado: "+resto+" no es divisible en 2");
}