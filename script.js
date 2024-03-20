function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Formatear la hora para asegurar dos dígitos
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Mostrar la hora en el elemento con id="clock"
    document.getElementById('clock').innerText = `${hours}:${minutes}:${seconds}`;
}

// Actualizar el reloj cada segundo
setInterval(updateClock, 1000);
updateClock(); // Llama a la función inmediatamente para evitar retraso inicial de 1 segundo
