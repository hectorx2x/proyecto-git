// var aprendiendo;
// aprendiendo='oksdosd';
// aprendiendo=99;
// aprendiendo=false;

// const aprendiendo = true;
// aprendiendo = false;

// let aprendiendo = true;
// aprendiendo ="SKDJ";

// console.log(aprendiendo);

// SCOPE CON VAR
// var musica = 'Rock';
// if (musica) {
//     var musica = 'Tipico';
//     console.log('Dentro del if: '+musica);
// }
// console.log('Fuera del if: '+musica);

// SCOPE CON LET
// let musica = 'Rock';
// if (musica) {
//     let musica = 'Tipico';
//     console.log('Dentro del if: '+musica);
// }
// console.log('Fuera del if: '+musica);

// TEMPLATE STRINGS
// const nombre = 'Hector';
// let trabajo = "SIBUS";
 
// CONCATENAR JAVASCRIPT
// console.log('Nombre: '+ nombre +' , Trabajo: '+ trabajo);
// console.log(`Nombre: ${nombre} , Trabajo: ${trabajo}`);

// function saludar(nombre) {
//     console.log('Bienvenido '+nombre);
// }

// saludar(nombre);

// let viaje (lugar,hora) => {Console.log('wiiiiiiii');}

// console.log(viaje);


// OBJECT LITERAL
let joder = {
    tarea:'Aprender',
    urgencia:'SI',
}
console.log(joder);

// OBJECT CONSTRUCTOR
function Tarea (nombre,urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;
}

// PROTOYPES
Tarea.prototype.mostrarInformacionTarea = function(){
    return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`;
}

let tarea1 = new Tarea('Aprender React','Urgente');
console.log(tarea1);
console.log(tarea1.mostrarInformacionTarea());

// HO SHI

//comentario de nuevo