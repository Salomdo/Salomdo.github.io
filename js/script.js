// Configuración inicial del juego
let tablero = ["", "", "", "", "", "", "", "", ""];
let jugadorActual = "X";
let juegoActivo = true;
let tiempoInicio;
let tiempoFin;
let nombreJugador = null;
let modoCegueraActivado = true;
let truePassword = false;
let modoOtaku = false;
let modoMultijugador = false;


const condicionesGanadoras = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];



const celdas = document.querySelectorAll('.celda');
const mensaje = document.getElementById('mensaje');
const botonReiniciar = document.getElementById('reiniciar');
const listaMejoresTiempos = document.getElementById('mejoresTiempos');

const CSI = document.getElementById('CSI');
const CSC = document.getElementById('CSC');
const CSD = document.getElementById('CSD');
const CCI = document.getElementById('CCI');
const CCC = document.getElementById('CCC');
const CCD = document.getElementById('CCD');
const CII = document.getElementById('CII');
const CIC = document.getElementById('CIC');
const CID = document.getElementById('CID');

const modoCeguera = document.getElementById('modoCeguera');
const modopvp = document.getElementById('modopvp');
const manualDeUsuario = document.getElementById('botonManualDeUsuario')

const leerPanelDeJuego = document.getElementById('LeerPanelDeJuego');
const leerPanelDeMejoresTiempos = document.getElementById('LeerPanelDeMejoresTiempos');
const leerComoFuncionaLaAplicacion = document.getElementById('LeerComoFuncionaLaAplicacion');
const leerReglas = document.getElementById('LeerReglas');

iniciarJuego();


modopvp.addEventListener('mouseover', () => {
	leerTexto("Modo multijugador");
});
leerPanelDeJuego.addEventListener('mouseover', () => {
	leerTexto("Leer apartado panel de juego");
});
leerPanelDeMejoresTiempos.addEventListener('mouseover', () => {
	leerTexto("Leer apartado panel de mejores tiempos");
});
leerComoFuncionaLaAplicacion.addEventListener('mouseover', () => {
	leerTexto("Leer apartado como funciona la aplicación");
});
leerReglas.addEventListener('mouseover', () => {
	leerTexto("Leer apartado reglas");
});

leerPanelDeJuego.addEventListener('click', () => {
	leerTexto("Panel de juego");
	leerTexto("Tal como lo dice su propio nombre, lo primero que muestra en el panel de juego, es el tablero de Tic-Tac-Toe, cada uno de los cuadrantes");
	leerTexto("del tablero es un botón interactivo, al seleccionar el botón, se marcará con una X el movimiento del usuario");
	leerTexto("Lo segundo que nos muestra es el mensaje (este solo se hace presente cuando termina una jugada), cuando gana el usuario se muestra el tiempo que duró la jugada, si ganó la máquina o computadora se muestra el mensaje ¡La computadora ha ganado!");
	leerTexto("si ninguno de los dos gana se muestra el mensaje ¡Empate!.");
	leerTexto("Lo tercero que nos muestra es el botón de reinicio de jugada, su función consta de limpiar el tablero y comenzar una nueva jugada. ");
	leerTexto("Lo cuarto que nos muestra, es un CheckBox que habilita y deshabilita la función de lectura en voz alta, esto es escencial puesto que la experiencia no solo es para las personas con vista");
	leerTexto("¡Las personas con discapacidad visual también pueden jugar!, la función Lectura en voz alta consiste en mencionar cada elemento sobre el que esté situado el cursor del ratón, brindando orientación auditiva. ");
	leerTexto("Lo último que nos muestra el panel, es un botón a este manual de usuario.");
});
leerPanelDeMejoresTiempos.addEventListener('click', () => {
	leerTexto("Panel de mejores tiempos");
	leerTexto("En este panel nos muestra una lista de los mejores tiempos de jugadas anteriores, mostrando el nombre del jugador, el tiempo en segundos, la fecha y hora de jugada.");
});
leerComoFuncionaLaAplicacion.addEventListener('click', () => {
	leerTexto("Cómo funciona la aplicación");
	leerTexto("Esta aplicación funciona con las mismas bases del juego de Tic-Tac-Toe:");
	leerTexto("Paso 1. Si el usuario padece discapacidad visual, se da click en el checkbox Lectura en voz alta");
	leerTexto("Paso 2. El usuario selecciona la casilla inicial en donde quiera colocar X");
	leerTexto("Paso 3.La computadora seleccionará otra casilla para colocar O");
	leerTexto("Paso 4. Se repiten los pasos 1 y 2 hasta que, o el jugador, o la computadora, gane. Esto sucede si uno de los dos logra hacer una línea de tres fichas del mismo jugador.");
	leerTexto("Paso 5. Si gana el jugador o usuario, se mostrará en debajo del tablero el tiempo transcurrido en jugada, después la aplicación le pedirá que diga su nombre en voz alta");
	leerTexto("para después ser registrado en la lista de jugadas (si está dentro de los mejores 10 tiempos (que implica en las posiciones de menor tiempo), se mostrará en la lista de mejores tiempos)");
	leerTexto("Paso 6. Si se quiere jugar otra vez, se da clic en el botón Reiniciar juego");
});
leerReglas.addEventListener('click', () => {
	leerTexto("Reglas");
	leerTexto("Solo se permite seleccionar una casilla o cuadrante por turno");
	leerTexto("No se puede seleccionar una casilla o cuadrante que ya esté seleccionada, por ejemplo, si esa casilla tiene O o X");
	leerTexto("Se puede reiniciar la jugada en cualquier momento");
});

CSI.addEventListener('mouseover', () => {
	leerTexto("Cuadrante Superior Izquerdo");
});
CSC.addEventListener('mouseover', () => {
	leerTexto("Cuadrante Superior Central");
});
CSD.addEventListener('mouseover', () => {
	leerTexto("Cuadrante Superior Derecho");
});
CCI.addEventListener('mouseover', () => {
	leerTexto("Cuadrante Central Izquierdo");
});
CCC.addEventListener('mouseover', () => {
	leerTexto("Cuadrante Central");
});
CCD.addEventListener('mouseover', () => {
	leerTexto("Cuadrante Central Derecho");
});
CII.addEventListener('mouseover', () => {
	leerTexto("Cuadrante Inferior Izquierdo");
});
CIC.addEventListener('mouseover', () => {
	leerTexto("Cuadrante Inferior Central");
});
CID.addEventListener('mouseover', () => {
	leerTexto("Cuadrante Inferior Derecho");
});
botonReiniciar.addEventListener('mouseover', ()=>{
	leerTexto("Reiniciar juego");
});
manualDeUsuario.addEventListener('mouseover', ()=>{
	leerTexto("Manual de Usuario");
});
modoCeguera.addEventListener('mouseover', ()=>{
	leerTexto("Lectura en voz alta");
});

modoCeguera.checked = true;

modoCeguera.addEventListener('change', () => {
    if (modoCeguera.checked) {
        modoCegueraActivado = true;
        leerTexto("Lectura en voz alta activada");
    } else {
        leerTexto("Lectura en voz alta desactivada");
        modoCegueraActivado = false;
    }
});
modopvp.addEventListener('change', () => {
    if (modopvp.checked) {
        modoMultijugador = true;
        leerTexto("Modo multijugador activado");
        reiniciarJuego();
    } else {
        leerTexto("Modo multijugador desactivado");
        modoMultijugador = false;
        reiniciarJuego();
    }
});



// Función para leer texto en voz alta
function leerTexto(texto) {
	if(modoCegueraActivado){
		// Crear una instancia de SpeechSynthesisUtterance
		const utterance = new SpeechSynthesisUtterance(texto);
		
		// Configurar la voz y el idioma
		utterance.lang = 'es-ES'; // Español
		utterance.pitch = 1;    // Tonalidad
		if(modoOtaku){
			//Pongo esto para su comodidad, GRACIAS POR SU ATENCIÓN :]
			utterance.lang = 'ja-JA';
			utterance.pitch = 1.2;
		}
		utterance.rate = 1;       // Velocidad de lectura

		// Iniciar la síntesis de voz
		window.speechSynthesis.speak(utterance);
	}
    
}



function iniciarJuego() {
    celdas.forEach(celda => celda.addEventListener('click', manejarClickCelda));
    botonReiniciar.addEventListener('click', reiniciarJuego);
    cargarMejoresTiempos();
    tiempoInicio = new Date().getTime();
}

function manejarClickCelda(event) {
	if (modoMultijugador){
		if (jugadorActual=="X"){
			const indiceCelda = event.target.getAttribute('data-index');

			if (tablero[indiceCelda] == "O") {
				leerTexto("No puedes ingresar aquí equis, el cuadrante ya fue ocupado por círculo");
			}
			if (tablero[indiceCelda] == "X") {
				leerTexto("No puedes ingresar aquí equis, el cuadrante ya fue ocupado por equis");
			}
			if (tablero[indiceCelda] !== "" || !juegoActivo) return;

			tablero[indiceCelda] = jugadorActual;
			leerTexto("Jugador 1 ingresó X, turno de jugador 2");
			event.target.innerText = jugadorActual;
			event.target.classList.add(jugadorActual.toLowerCase());

			if (verificarGanador()) {
				juegoActivo = false;
				leerTexto("Felicidades, jugador 1, has ganado, di en voz alta tu nombre");
				tiempoFin = new Date().getTime();
				const tiempoTranscurrido = (tiempoFin - tiempoInicio) / 1000;
				mensaje.innerText = `Tiempo: ${tiempoTranscurrido} segundos`;
				capturarNombreJugador().then(nombre => {
				    nombreJugador = nombre || "Usuario";
				    guardarMejorTiempo(nombreJugador, tiempoTranscurrido);
				    cambiarFondo(true);
				});
			} else if (!tablero.includes("")) {
				leerTexto("Empate");
				mensaje.innerText = "¡Empate!";
			} else {
				jugadorActual = "O";
			}
		}else{
			const indiceCelda = event.target.getAttribute('data-index');

			if (tablero[indiceCelda] == "O") {
				leerTexto("No puedes ingresar aquí O, el cuadrante ya fue ocupado por círculo");
			}
			if (tablero[indiceCelda] == "X") {
				leerTexto("No puedes ingresar aquí O, el cuadrante ya fue ocupado por equis");
			}
			if (tablero[indiceCelda] !== "" || !juegoActivo) return;

			tablero[indiceCelda] = jugadorActual;
			leerTexto("Jugador 2 ingresó O, turno de jugador 1");
			event.target.innerText = jugadorActual;
			event.target.classList.add(jugadorActual.toLowerCase());
			if (verificarGanador()) {
				juegoActivo = false;
				leerTexto("Felicidades, jugador 2, has ganado, di en voz alta tu nombre");
				tiempoFin = new Date().getTime();
				const tiempoTranscurrido = (tiempoFin - tiempoInicio) / 1000;
				mensaje.innerText = `Tiempo: ${tiempoTranscurrido} segundos`;
				capturarNombreJugador().then(nombre => {
				    nombreJugador = nombre || "Usuario";
				    guardarMejorTiempo(nombreJugador, tiempoTranscurrido);
				    cambiarFondo(true);
				});
			} else if (!tablero.includes("")) {
				leerTexto("Empate");
				mensaje.innerText = "¡Empate!";
			} else {
				jugadorActual = "X";
			}
		}
		
	}else{
		const indiceCelda = event.target.getAttribute('data-index');

		if (tablero[indiceCelda] == "O") {
		    leerTexto("No puedes ingresar aquí equis, el cuadrante ya fue ocupado por círculo");
		}
		if (tablero[indiceCelda] == "X") {
		    leerTexto("No puedes ingresar aquí equis, el cuadrante ya fue ocupado por equis");
		}
		if (tablero[indiceCelda] !== "" || !juegoActivo) return;

		tablero[indiceCelda] = jugadorActual;
		leerTexto("Usuario ingresó X");
		event.target.innerText = jugadorActual;
		event.target.classList.add(jugadorActual.toLowerCase());

		if (verificarGanador()) {
		    juegoActivo = false;
		    leerTexto("Felicidades, has ganado, di en voz alta tu nombre");
		    tiempoFin = new Date().getTime();
		    const tiempoTranscurrido = (tiempoFin - tiempoInicio) / 1000;
		    mensaje.innerText = `Tiempo: ${tiempoTranscurrido} segundos`;
		    capturarNombreJugador().then(nombre => {
		        nombreJugador = nombre || "Usuario";
		        guardarMejorTiempo(nombreJugador, tiempoTranscurrido);
		        cambiarFondo(true);
		    });
		} else if (!tablero.includes("")) {
		    leerTexto("Empate");
		    mensaje.innerText = "¡Empate!";
		} else {
		    jugadorActual = "O";
		    movimientoComputadora();
		}
	}
    
}

function capturarNombreJugador() {
    return new Promise(resolve => {
        if (!('webkitSpeechRecognition' in window)) {
            leerTexto("Ocurrió un problema, tu navegador no soporta la Web Speech API");
            mensaje.innerText("Tu navegador no soporta la Web Speech API.");
            resolve("Usuario");
            return;
        }

        if (!modoCeguera.checked) {
        	truePassword = false;
        	while(!truePassword){
        		leerTexto("Por favor, ingresa tu nombre: Solo se permiten hasta 15 caracteres.");
		        const nombre = prompt("Por favor, ingresa tu nombre: \n Solo se permiten hasta 15 caracteres.");

		        if (nombre && nombre.length > 15) {
		        	leerTexto("El nombre no puede tener más de 15 caracteres");
		            alert("El nombre no puede tener más de 15 caracteres.");
		            resolve(nombre.substring(0, 15));
		            truePassword = false;
		        } else {
		            truePassword = true;
		        }
        	}
            return;
        }

        const recognition = new webkitSpeechRecognition();
        recognition.lang = 'es-ES';
        recognition.interimResults = false;
        recognition.continuous = false;

        recognition.onresult = event => {
            const transcript = event.results[0][0].transcript;
            resolve(transcript);
        };

        recognition.onerror = () => resolve("Usuario");

        recognition.onend = () => {
            if (!nombreJugador) resolve("Usuario");
        };

        recognition.start();
    });
}


function movimientoComputadora() {
    let celdasVacias = tablero.map((val, index) => val === "" ? index : null).filter(val => val !== null);
    let indiceAleatorio = celdasVacias[Math.floor(Math.random() * celdasVacias.length)];

    tablero[indiceAleatorio] = "O";
    celdas[indiceAleatorio].innerText = "O";
    celdas[indiceAleatorio].classList.add('o');
    
    switch(indiceAleatorio){
    	case 0:
    		leerTexto("La computadora ha puesto circulo en el cuadrante superior izquierdo");
    	break;
    	case 1:
    		leerTexto("La computadora ha puesto circulo en el cuadrante superior central");
    	break;
    	case 2:
    		leerTexto("La computadora ha puesto circulo en el cuadrante superior derecho");
    	break;
    	case 3:
    		leerTexto("La computadora ha puesto circulo en el cuadrante central izquierdo");
    	break;
    	case 4:
    		leerTexto("La computadora ha puesto circulo en el cuadrante central");
    	break;
    	case 5:
    		leerTexto("La computadora ha puesto circulo en el cuadrante central derecho");
    	break;
    	case 6:
    		leerTexto("La computadora ha puesto circulo en el cuadrante inferior izquierdo");
    	break;
    	case 7:
    		leerTexto("La computadora ha puesto circulo en el cuadrante inferior central");
    	break;
    	case 8:
    		leerTexto("La computadora ha puesto circulo en el cuadrante inferior derecho");
    	break;
    }

    if (verificarGanador()) {
        juegoActivo = false;
		leerTexto("La computadora ha ganado");
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
	leerTexto("¿Estás seguro de que quieres reiniciar la partida?, presiona Enter para confirmar, presiona Esc para cancelar");
    if (confirm("¿Estás seguro de que quieres reiniciar la partida?")) {
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
    listaMejoresTiempos.innerHTML = mejoresTiempos.map(entry => 
        `<li>${entry.nombre}: ${entry.tiempo}s (${new Date(entry.fecha).toLocaleString()})</li>`
    ).join('');
}

function toggleManual() {
    const manual = document.getElementById("manualDeUsuario");
    const tablero = document.getElementById("tablero");
    const tiempos = document.getElementById("mejorestiempos");
    if (manual.style.display === "none" || manual.style.display === "") {
		leerTexto("Ahora estás en el manual de usuario");
		leerTexto("Presione el botón del apartado para leer en voz alta el contenido");
		leerTexto("Presione la tecla Q para regresar a la pantalla del juego");
        manual.style.display = "block";
        tablero.style.display = "none";
        tiempos.style.display = "none";
    } else {
		leerTexto("Ahora estás en el tablero del juego");
        manual.style.display = "none";
        tablero.style.display = "";
        tiempos.style.display = "";
    }
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'q' || event.key === 'Q') {
        toggleManual(); 
    }
    if (event.key === 'o' || event.key === 'O') {
	    const nombre = prompt("a?");
        if (nombre == "beginModoOtaku"){
        	modoOtaku = true;
        }
    }
    if (event.key === 'r' || event.key === 'R') {
        reiniciarJuego();
    }
    if (event.key === '7' || event.key === '8' || event.key === '9' || event.key === '4' || event.key === '5' || event.key === '6' || event.key === '1' || event.key === '2' || event.key === '3') {
		let indiceCelda = 0;
        switch (event.code){
        	case 'Numpad7':
        		indiceCelda = 0;
        		leerTexto("El usuario ha puesto X en el cuadrante superior izquierdo");
        	break;
        	case 'Numpad8':
        		indiceCelda = 1;
        		leerTexto("El usuario ha puesto X en el cuadrante superior central");
        	break;
        	case 'Numpad9':
        		indiceCelda = 2;
        		leerTexto("El usuario ha puesto X en el cuadrante superior derecho");
        	break;
        	case 'Numpad4':
        		indiceCelda = 3;
        		leerTexto("El usuario ha puesto X en el cuadrante central izquierdo");
        	break;
        	case 'Numpad5':
        		indiceCelda = 4;
        		leerTexto("El usuario ha puesto X en el cuadrante central");
        	break;
        	case 'Numpad6':
        		indiceCelda = 5;
        		leerTexto("El usuario ha puesto X en el cuadrante central derecho");
        	break;
        	case 'Numpad1':
        		indiceCelda = 6;
        		leerTexto("El usuario ha puesto X en el cuadrante inferior izquierdo");
        	break;
        	case 'Numpad2':
        		indiceCelda = 7;
        		leerTexto("El usuario ha puesto X en el cuadrante inferior central");
        	break;
        	case 'Numpad3':
        		indiceCelda = 8;
        		leerTexto("El usuario ha puesto X en el cuadrante inferior derecho");
        	break;
        }
        

		if (tablero[indiceCelda] == "O") {
		    leerTexto("No puedes ingresar aquí equis, el cuadrante ya fue ocupado por círculo");
		}
		if (tablero[indiceCelda] == "X") {
		    leerTexto("No puedes ingresar aquí equis, el cuadrante ya fue ocupado por equis");
		}
		if (tablero[indiceCelda] !== "" || !juegoActivo) return;

		tablero[indiceCelda] = jugadorActual;
		
		celdas[indiceCelda].innerText = jugadorActual;
		
		celdas[indiceCelda].classList.add(jugadorActual.toLowerCase());

		if (verificarGanador()) {
		    juegoActivo = false;
		    leerTexto("Felicidades, has ganado, di en voz alta tu nombre");
		    tiempoFin = new Date().getTime();
		    const tiempoTranscurrido = (tiempoFin - tiempoInicio) / 1000;
		    mensaje.innerText = `Tiempo: ${tiempoTranscurrido} segundos`;
		    capturarNombreJugador().then(nombre => {
		        nombreJugador = nombre || "Usuario";
		        guardarMejorTiempo(nombreJugador, tiempoTranscurrido);
		        cambiarFondo(true);
		    });
		} else if (!tablero.includes("")) {
		    leerTexto("Empate");
		    mensaje.innerText = "¡Empate!";
		} else {
		    jugadorActual = "O";
		    movimientoComputadora();
		}
    }
});

window.addEventListener('beforeunload', function (event) {
    const unsavedChanges = document.getElementById('unsavedChanges').value;

    if (unsavedChanges === "true") {
        event.preventDefault();
        event.returnValue = '';
    }
});
