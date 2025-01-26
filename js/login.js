document.addEventListener('DOMContentLoaded', () => {
    // Función para leer texto en voz alta
    function leerTexto(texto) {
        const utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'es-ES';
        window.speechSynthesis.speak(utterance);
    }

    // Leer los campos al pasar el mouse por encima
    const campos = document.querySelectorAll('input, button');
    campos.forEach(campo => {
        campo.addEventListener('mouseover', () => {
            const texto = campo.placeholder || campo.innerText || campo.id;
            if (texto) {
                leerTexto(`Campo: ${texto}`);
            }
        });
    });

    // Mensaje de bienvenida al cargar la página
    leerTexto('Bienvenido al Tic-Tac-Toe. Por favor, introduce tu nombre de usuario y contraseña o regístrate.');

    // Gestión del formulario de login
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        if (!username || !password) {
            leerTexto('Por favor, completa todos los campos.');
            alert('Por favor, completa todos los campos.');
            return;
        }

        // Recuperar usuarios desde cookies
        const existingUsers = JSON.parse(getCookie('users') || '[]');
        const user = existingUsers.find(user => user.username === username && user.password === password);

        if (user) {
            leerTexto('Inicio de sesión exitoso. Bienvenido.');
            alert('Inicio de sesión exitoso. Bienvenido.');
            window.location.href = 'index.html'; // Redirigir a la página principal
        } else {
            leerTexto('Credenciales incorrectas. Por favor, intenta nuevamente.');
            alert('Credenciales incorrectas. Por favor, intenta nuevamente.');
        }
    });

    // Gestión del botón de registro
    const registrarButton = document.getElementById('registrarButton');
    registrarButton.addEventListener('click', () => {
        window.location.href = 'signin.html'; // Redirigir al formulario de registro
    });

    // Función para obtener cookies
    function getCookie(name) {
        const cookies = document.cookie.split('; ');
        const cookie = cookies.find(c => c.startsWith(name + '='));
        return cookie ? decodeURIComponent(cookie.split('=')[1]) : null;
    }
});

// Función para guardar el nombre de usuario en las cookies
function guardarUsuarioEnCookies(nombreUsuario) {
    const expiracion = new Date();
    expiracion.setTime(expiracion.getTime() + (7 * 24 * 60 * 60 * 1000)); // 7 días de duración
    document.cookie = `usuario=${encodeURIComponent(nombreUsuario)}; expires=${expiracion.toUTCString()}; path=/;`;
}

// Evento al iniciar sesión
document.querySelector("#btnIniciarSesion").addEventListener("click", () => {
    const nombreUsuario = document.querySelector("#inputUsuario").value;
    const contrasena = document.querySelector("#inputContrasena").value;

    if (nombreUsuario && contrasena) {
        // Simulación de verificación (ajusta esto según tus requisitos)
        if (nombreUsuario === "test" && contrasena === "1234") { // Ejemplo de credenciales
            guardarUsuarioEnCookies(nombreUsuario); // Guardar el nombre en las cookies
            alert("Inicio de sesión exitoso");
            window.location.href = "/index.html"; // Redirigir al juego
        } else {
            alert("Credenciales incorrectas, intenta nuevamente.");
        }
    } else {
        alert("Por favor, completa todos los campos.");
    }
});