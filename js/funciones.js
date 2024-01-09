console.log("desde funciones");

let a=5
let b=3

let resultadoSuma=a+b
//let resultadoSuma= 'Hola';
console.log('el resultado d la suma es: ',resultadoSuma);

let c=10;
let d=15;

resultadoSuma=c+d;

console.log('el resultado de suma es: ', resultadoSuma);

//FUNCIONES DECLARATIVAS,SINTAXIS function <NOMBRE DE LA FUNCION> (parametro1, parametro2,....parametro-N){codigo a ejecutar}

//funcion sin parametros-declaracion

function sinParametros() {
    console.log('DESDE LA FUNCION SIN PARAMETROS');
};
//llamada a una funcion
sinParametros();

//funcion con parametros

function Suma(numero1, numero2){
    let suma=numero1+ numero2;
    console.log('El resultado de funcion Suma es:' , suma);
}

Suma(35, 15);
Suma(a, b);
Suma(c,d);

