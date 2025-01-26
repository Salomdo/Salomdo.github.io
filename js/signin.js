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
    leerTexto('Bienvenido al registro de Tic-Tac-Toe. Por favor, elige un nombre de usuario y contraseña.');

    // Gestión del formulario de registro
    const signinForm = document.getElementById('signinForm');
    signinForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        if (!username || !password) {
            leerTexto('Por favor, completa todos los campos para registrarte.');
            alert('Por favor, completa todos los campos para registrarte.');
            return;
        }

        // Recuperar usuarios existentes desde cookies
        const existingUsers = JSON.parse(getCookie('users') || '[]');

        // Verificar si el usuario ya existe
        if (existingUsers.some(user => user.username === username)) {
            leerTexto('El nombre de usuario ya está registrado. Por favor, elige otro.');
            alert('El nombre de usuario ya está registrado. Por favor, elige otro.');
            return;
        }

        // Agregar nuevo usuario
        existingUsers.push({ username, password });
        setCookie('users', JSON.stringify(existingUsers), 7); // Guardar por 7 días

        leerTexto('Registro exitoso. Ahora puedes iniciar sesión.');
        alert('Registro exitoso. Ahora puedes iniciar sesión.');
        window.location.href = 'login.html'; // Redirigir al login
    });

    // Gestión del botón "Volver al login"
    const volverButton = document.getElementById('volverButton');
    volverButton.addEventListener('click', () => {
        window.location.href = 'login.html';
    });

    // Función para establecer cookies
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = `${name}=${encodeURIComponent(value)};expires=${date.toUTCString()};path=/`;
    }

    // Función para obtener cookies
    function getCookie(name) {
        const cookies = document.cookie.split('; ');
        const cookie = cookies.find(c => c.startsWith(name + '='));
        return cookie ? decodeURIComponent(cookie.split('=')[1]) : null;
    }
});
