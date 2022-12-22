//inicializacion de variables
let tarjetasDestapadas =0;

//declaracion de variable
let number = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];

//generador de numeros aleatorios
number = number.sort(()=>{return Math.random()-0.5});
console.log(number);

//funcion principal aumentar contador de tarjetas
function destapar(id){
    tarjetasDestapadas++;
    console.log(tarjetasDestapadas);
//tarjetas destapadas? 1.- mostrar primer numero
if(tarjetasDestapadas == 1)

}