// Configuración inicial del juego
let tablero = ["", "", "", "", "", "", "", "", ""];
let jugadorActual = "X";
let juegoActivo = true;
let tiempoInicio;
let tiempoFin;
const condicionesGanadoras = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

const celdas = document.querySelectorAll('.celda');
const mensaje = document.getElementById('mensaje');
const botonReiniciar = document.getElementById('reiniciar');
const listaMejoresTiempos = document.getElementById('mejoresTiempos');

iniciarJuego();

function iniciarJuego() {
    celdas.forEach(celda => celda.addEventListener('click', manejarClickCelda));
    botonReiniciar.addEventListener('click', reiniciarJuego);
    cargarMejoresTiempos();
    tiempoInicio = new Date().getTime();
}

function manejarClickCelda(event) {
    const indiceCelda = event.target.getAttribute('data-index');

    if (tablero[indiceCelda] !== "" || !juegoActivo) return;

    tablero[indiceCelda] = jugadorActual;
    event.target.innerText = jugadorActual;

    if (jugadorActual === "X") {
        event.target.classList.add('x');
    }

    if (verificarGanador()) {
        juegoActivo = false;
        tiempoFin = new Date().getTime();
        const tiempoTranscurrido = (tiempoFin - tiempoInicio) / 1000;
        mensaje.innerText = `Tiempo: ${tiempoTranscurrido} segundos`;

        let nombreJugador = prompt("¡Ganaste! Introduce tu nombre:");
        guardarMejorTiempo(nombreJugador, tiempoTranscurrido);
        cambiarFondo(true); 
    } else if (!tablero.includes("")) {
        mensaje.innerText = "¡Empate!";
    } else {
        jugadorActual = "O"; 
        movimientoComputadora();
    }
}

function movimientoComputadora() {
    let celdasVacias = tablero.map((val, index) => val === "" ? index : null).filter(val => val !== null);
    let indiceAleatorio = celdasVacias[Math.floor(Math.random() * celdasVacias.length)];
    
    tablero[indiceAleatorio] = "O";
    celdas[indiceAleatorio].innerText = "O";
    
    celdas[indiceAleatorio].classList.add('o');
    
    if (verificarGanador()) {
        juegoActivo = false; 
        mensaje.innerText = "¡La computadora ha ganado!";
        cambiarFondo(false);  
    } else {
        jugadorActual = "X"; 
    }
}

function verificarGanador() {
    return condicionesGanadoras.some(condicion => 
        condicion.every(indice => tablero[indice] === jugadorActual)
    );
}

function cambiarFondo(esVictoria) {
    if (esVictoria) {
        document.body.style.background = "linear-gradient(to right, #00b63a, #f4ee42)";
        botonReiniciar.style.background = "linear-gradient(to right, #00b63a, #00b63a)";
    } else {
        document.body.style.background = "linear-gradient(to right, #ff0116, #ffc942)";
        botonReiniciar.style.background = "linear-gradient(to right, #ff0116, #ff0116)"; 
    }
}

function reiniciarJuego() {
    tablero = ["", "", "", "", "", "", "", "", ""];
    juegoActivo = true; 
    jugadorActual = "X";
    mensaje.innerText = "";
    celdas.forEach(celda => {
        celda.innerText = "";
        celda.classList.remove('x', 'o'); 
    });
    document.body.style.background = "";
    botonReiniciar.style.background = ""; 

    tiempoInicio = new Date().getTime();
}

function guardarMejorTiempo(nombreJugador, tiempo) {
    let mejoresTiempos = JSON.parse(localStorage.getItem('mejoresTiempos')) || [];
    mejoresTiempos.push({ nombre: nombreJugador, tiempo: tiempo, fecha: new Date() });
    mejoresTiempos.sort((a, b) => a.tiempo - b.tiempo);
    mejoresTiempos = mejoresTiempos.slice(0, 10);
    localStorage.setItem('mejoresTiempos', JSON.stringify(mejoresTiempos));
    cargarMejoresTiempos();
}

function cargarMejoresTiempos() {
    let mejoresTiempos = JSON.parse(localStorage.getItem('mejoresTiempos')) || [];
    listaMejoresTiempos.innerHTML = mejoresTiempos.map(entry => `<li>${entry.nombre}: ${entry.tiempo}s (${new Date(entry.fecha).toLocaleString()})</li>`).join('');
}
