
//funcion que recibe fecha limite, y devuelve lo que falta/ se ejecuta cada segundo
const obtenerTiempoFaltante = (fechaLimite) =>{ 

    let tiempoActual = new Date();
    let tiempoFaltante = (new Date(fechaLimite) - tiempoActual + 1000) / 1000; //se agrega un segundo por que el setinterval se demora un segundo en agregar
    let tiempoSegundos = ('0'+Math.floor(tiempoFaltante % 60)).slice(-2); //math redondea el numero, y concadeno el 0 para los numeros menores a 10, y slice-2 saca valores de un string comnezando desde atras
    let tiempoMinutos = ('0'+Math.floor(tiempoFaltante / 60 % 60)).slice(-2);
    let tiempoHoras = ('0'+Math.floor(tiempoFaltante / 3600 % 24)).slice(-2);
    let tiempoDias = Math.floor(tiempoFaltante / (3600 * 24));

    return {
        tiempoFaltante,
        tiempoSegundos,
        tiempoMinutos,
        tiempoHoras,
        tiempoDias
    }
};


const contadorTiempo = (fechaLimite, elemento, mensaje) => {
    let elementoHtml = document.getElementById(elemento);
    
    let actualizarTiempo = setInterval (()=>{
        let tiempo = obtenerTiempoFaltante(fechaLimite); //envio la fecha limite a la funcion arriba
        
        elementoHtml.innerHTML = `${tiempo.tiempoDias}D:${tiempo.tiempoHoras}H:${tiempo.tiempoMinutos}M:${tiempo.tiempoSegundos}S:`;
        if (tiempo.tiempoFaltante <= 1){
            clearInterval(actualizarTiempo);
           elementoHtml.innerHTML = `${mensaje}`;
        } 
    },1000);
    
}

contadorTiempo('Sep 30 2019 21:45:50 GMT-0300', 'time', 'Felicitaciones');