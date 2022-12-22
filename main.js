//inicializacion de variables
let tarjetasDestapadas =0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos =0;
let temporizador = false;
let timer = 3;
let tiempoRegresivoId = null;
let timerInicial = timer;


//apuntando a documento html
let mostrarMovimientos = document.getElementById('movimientos');
let mostrarAciertos = document.getElementById('aciertos');
let mostrarTiempo = document.getElementById('t-restante');




//generador de numeros aleatorios
let number = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
number = number.sort(()=>{return Math.random()-0.5});


//funciones tiempo
function contarTiempo(){
tiempoRegresivoId = setInterval(()=>{
timer--;
mostrarTiempo.innerHTML = `Tiempo: ${timer} segundos`;
if(timer == 0){
 clearInterval(tiempoRegresivoId);
 bloquearTarjetas();
}
},1000);
}

//funcion bloquear tarjetas
function bloquearTarjetas (){
    for(let i = 0; i<= 15; i++){
        let tarjetaBloqueada = document.getElementById(i);
        tarjetaBloqueada.innerHTML = numeros [i];
        tarjetaBloqueada.disabled = true;
    }
}
//funcion principal aumentar contador de tarjetas
function destapar(id){
if (temporizador == false){
    contarTiempo();
    temporizador = true;
}


    tarjetasDestapadas++;
    console.log(tarjetasDestapadas);
//tarjetas destapadas? 1.- mostrar primer numero
if(tarjetasDestapadas == 1){
    tarjeta1 = document.getElementById(id);
    //guardar variable
    primerResultado =number[id]
    //imprimir
    tarjeta1.innerHTML = primerResultado;

//DesHabilitar el primer boton
tarjeta1.disabled=true;
}else if(tarjetasDestapadas==2){
//mostrar el segundo numero
    tarjeta2 =document.getElementById(id);
    segundoResultado = number[id];
    tarjeta2.innerHTML = segundoResultado;
//deshabilitar el segundo botos
    tarjeta2.disabled =true;

    //Incrementar movimientos
    movimientos++;
    mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;

    if(primerResultado == segundoResultado){
        tarjetasDestapadas = 0;

        //aumentar aciertos
        aciertos ++;
        mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;
        if(aciertos == 8) {
            clearInterval(tiempoRegresivoId);
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos} ganaste`;
            mostrarTiempo.innerHTML = `Fantastico demoraste ${timerInicial - timer} segundos`;
            mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`
        }
    }else {
        //mostrar momentaneamente y volver a tapar
    setTimeout(()=>{
        tarjeta1.innerHTML = '';
        tarjeta2.innerHTML = '';
        tarjeta1.disabled = false;
        tarjeta2.disabled = false;
        tarjetasDestapadas = 0;
        
    },800)
    }

}}