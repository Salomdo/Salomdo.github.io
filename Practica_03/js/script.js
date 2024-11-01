// Configuración inicial.

let tablero, filas, columnas, minas, primerClick;
let estadoJuegoTerminado = false;

function iniciarJuego() {
  const dificultadSeleccionada = document.getElementById('dificultad').value;

  // Asignar filas, columnas y minas de acuerdo con la dificultad.
  switch (dificultadSeleccionada) {
    case 'facil': filas = columnas = 5; minas = 5; break;
    case 'medio': filas = columnas = 10; minas = 15; break;
    case 'dificil': filas = columnas = 15; minas = 40; break;
    case 'muy-dificil': filas = columnas = 20; minas = 80; break;
    case 'leyenda': filas = columnas = 25; minas = 120; break;
    default:
      filas = parseInt(document.getElementById('filas').value);
      columnas = parseInt(document.getElementById('columnas').value);
      minas = parseInt(document.getElementById('minas').value);
  }

  primerClick = true;
  tablero = Array(filas).fill().map(() => Array(columnas).fill(0));

  document.getElementById('tablero').style.display = 'grid';
  document.getElementById('tablero').style.gridTemplateColumns = `repeat(${columnas}, 30px)`;

  generarTablero();
}

function generarTablero() {
  const tableroJuego = document.getElementById('tablero');
  tableroJuego.innerHTML = '';

  for (let r = 0; r < filas; r++) {
    for (let c = 0; c < columnas; c++) {
      const celda = document.createElement('div');
      celda.classList.add('celda');
      celda.addEventListener('click', () => manejarClick(r, c));
      celda.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        if (estadoJuegoTerminado) return;
        celda.classList.toggle('bandera');
      });
      tableroJuego.appendChild(celda);
      tablero[r][c] = { revelado: false, mina: false, conBandera: false, conteo: 0 };
    }
  }
}

function colocarMinas() {
  let colocadas = 0;
  while (colocadas < minas) {
    const r = Math.floor(Math.random() * filas);
    const c = Math.floor(Math.random() * columnas);
    if (!tablero[r][c].mina) {
      tablero[r][c].mina = true;
      colocadas++;
      // Incrementar el conteo en las celdas alrededor.   
      for (let i = r - 1; i <= r + 1; i++) {
        for (let j = c - 1; j <= c + 1; j++) {
          if (i >= 0 && i < filas && j >= 0 && j < columnas && !tablero[i][j].mina) {
            tablero[i][j].conteo++;
          }
        }
      }
    }
  }
}

function manejarClick(r, c) {
  if (primerClick) {
    primerClick = false;
    colocarMinas();
    // Si la celda seleccionada tiene una mina, reiniciar el tablero.
    if (tablero[r][c].mina) {
      reiniciarMinas(r, c);
    }
  }
  if (!tablero[r][c].revelado && !tablero[r][c].conBandera) revelarCelda(r, c);
}

function revelarCelda(r, c) {
  if (estadoJuegoTerminado || r < 0 || r >= filas || c < 0 || c >= columnas || tablero[r][c].revelado) return;

  const celda = document.getElementById('tablero').children[r * columnas + c];
  tablero[r][c].revelado = true;
  celda.classList.add('revelado');

  if (tablero[r][c].mina) {
    celda.classList.add('mina');
    finalizarJuego(false);
  } else {
    celda.textContent = tablero[r][c].conteo > 0 ? tablero[r][c].conteo : '';
    if (tablero[r][c].conteo === 0) {
      for (let i = r - 1; i <= r + 1; i++) {
        for (let j = c - 1; j <= c + 1; j++) {
          revelarCelda(i, j);
        }
      }
    }
  }
  verificarVictoria();
}

function reiniciarMinas(filaInicial, colInicial) {
  for (let r = 0; r < filas; r++) {
    for (let c = 0; c < columnas; c++) {
      tablero[r][c].mina = false;
      tablero[r][c].conteo = 0;
    }
  }

  // Colocar minas de nuevo, pero excluye la celda inicial.
  let colocadas = 0;
  while (colocadas < minas) {
    const r = Math.floor(Math.random() * filas);
    const c = Math.floor(Math.random() * columnas);

    // Asegurarse que la celda inicial no tenga mina.
    if ((r !== filaInicial || c !== colInicial) && !tablero[r][c].mina) {
      tablero[r][c].mina = true;
      colocadas++;

      // Incrementar el conteo en las celdas alrededor.
      for (let i = r - 1; i <= r + 1; i++) {
        for (let j = c - 1; j <= c + 1; j++) {
          if (i >= 0 && i < filas && j >= 0 && j < columnas && !tablero[i][j].mina) {
            tablero[i][j].conteo++;
          }
        }
      }
    }
  }
}

function verificarVictoria() {
  let victoria = true;
  for (let r = 0; r < filas; r++) {
    for (let c = 0; c < columnas; c++) {
      if (!tablero[r][c].mina && !tablero[r][c].revelado) victoria = false;
    }
  }
  if (victoria) finalizarJuego(true);
}

function finalizarJuego(ganado) {
  estadoJuegoTerminado = true;
  const mensajeModal = document.getElementById("modal-mensaje");
  mensajeModal.textContent = ganado ? '¡Has ganado!' : '¡Has perdido!';
  abrirModal();

  document.querySelectorAll('.celda').forEach(celda => celda.classList.add('deshabilitado'));
}

function abrirModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "flex";
}

function cerrarModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

function reiniciarJuego() {
  estadoJuegoTerminado = false;
  document.getElementById("tablero").innerHTML = '';
  iniciarJuego();
}
