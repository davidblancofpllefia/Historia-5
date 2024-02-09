import { clasificacion } from "./vistas/clasificacion.js";
import { home } from "./vistas/home";
import { jugar } from "./vistas/jugar.js";

document.querySelector('#home').innerHTML = home.template;

//document.querySelector('#clasificacion').innerHTML = clasificacion.template;

const botonHome = document.querySelector('#botonHome')
botonHome.addEventListener('click', cargarHome)
function cargarHome(){
    document.querySelector('main').innerHTML = home.template;
}

const botonRanking = document.querySelector('#botonRanking')
botonRanking.addEventListener('click', cargarClasificacion)
function cargarClasificacion(){
    document.querySelector('main').innerHTML = clasificacion.template;
}

const botonJugar = document.querySelector('#botonJugar')
botonJugar.addEventListener('click', cargarJuego)
function cargarJuego(){
  document.querySelector('main').innerHTML = jugar.template
}



// Supongamos que tienes un array de partidas como el siguiente:
const partidas = [
    { id: 1, nick: 'Usuario1', resultado: 'Victoria' },
    { id: 2, nick: 'Usuario2', resultado: 'Derrota' },
    { id: 3, nick: 'Usuario3', resultado: 'Empate' },
    // ... más partidas
  ];

function buscador(texto){
    // Filtrar el array de partidas basado en el texto de búsqueda en el Nick
    const resultados = partidas.filter(partida => partida.nick.toLowerCase().includes(texto.toLowerCase()));
    return resultados;
}
// Ahora, puedes usar esta función en respuesta al evento de cambio en el input
const inputElement = document.querySelector('.form-control');

inputElement.addEventListener('input', function() {
  const textoBusqueda = this.value; // Obtener el texto del input
  const resultados = buscador(textoBusqueda);

  // Aquí puedes hacer lo que quieras con los resultados, por ejemplo, imprimirlos en la consola
  console.log(resultados);
});