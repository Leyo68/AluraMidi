
// Trae toda la lista de elementos con esa misma clase
const listaDeTeclas = document.querySelectorAll('.tecla');

// let contador = 0;

function playSonido(idElement) {
    // accede a la etiqueta de audio HTML con # y reproduce con .play
    document.querySelector(idElement).play();
}

// selecciona la clase del elemento HTML y al hacer click llama a la función playSonidoPom
// document.querySelector('.tecla_pom').onclick = playSonidoPom;

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    console.log(contador);
    const tecla =  listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#sonido_${instrumento}`;

    tecla.onclick = function(){
        playSonido(idAudio);
    };

    tecla.onkeydown = function(evento){
        // console.log(evento);
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('activa');    
        }
        
    }

    tecla.onkeyup = function(evento){
        tecla.classList.remove('activa');
        
    }

}
/*
while (contador < 9) {
    const tecla =  listaDeTeclas[contador];
    // classList[1] toma la clase de la posición 1 del boton
    const instrumento = tecla.classList[1];
    //Template String
    // Creación de un id
    const idAudio = `#sonido_${instrumento}`;
            //Ejemplo de interpolación de Strings
                // function mensajePersonalizado(nombre, cantidad) {
                //     const mensaje = `¡Hola ${nombre}, encontramos ${cantidad} libros para ti!`;
                //     console.log(mensaje);
                // }

    // console.log(instrumento);
    //Función anónima
    tecla.onclick = function(){
        // Asigna el audio correctamente
        playSonido(idAudio);
    }
    contador++;
    // console.log("Vuelta" + contador);
}*/