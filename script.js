// --- CONFIGURACIÓN DE TU EVENTO ---
const FECHA_CUMPLE = new Date("Jun 27, 2026 21:30:00").getTime(); // Cambia la fecha de tu fiesta aquí
const TELEFONO_WA = "5491123456789"; // Reemplaza con tu código de país y número (Ej: 549 para Argentina + número)
const MENSAJE_WA = "¡Hola! Confirmo mi asistencia a tu fiesta de cumpleaños. ¡Ahí estaré! 🎉";

// --- EVENTO AL ABRIR LA INVITACIÓN ---
document.getElementById('btn-abrir').addEventListener('click', () => {
    // 1. Ocultar la pantalla de bienvenida con efecto fade
    const overlay = document.getElementById('overlay');
    overlay.style.opacity = 0;
    setTimeout(() => overlay.remove(), 500);

    // 2. Mostrar la tarjeta principal
    document.getElementById('contenido-tarjeta').classList.remove('d-none');

    // 3. Reproducir Música
    const musica = document.getElementById('musica-cumple');
    musica.play().catch(error => console.log("La reproducción automática falló o fue bloqueada:", error));

    // 4. Lanzar Explosión de Confeti de Bienvenida
    lanzarConfeti();

    // 5. Iniciar la creación de globos flotantes
    crearGlobos();
});

// --- LÓGICA DE LA CUENTA REGRESIVA ---
const x = setInterval(() => {
    const ahora = new Date().getTime();
    const distancia = FECHA_CUMPLE - ahora;

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Formatear a dos dígitos (ej: 05 en vez de 5)
    document.getElementById("dias").innerText = dias < 10 ? "0" + dias : dias;
    document.getElementById("horas").innerText = horas < 10 ? "0" + horas : horas;
    document.getElementById("minutos").innerText = minutos < 10 ? "0" + minutos : minutos;
    document.getElementById("segundos").innerText = segundos < 10 ? "0" + segundos : segundos;

    // Si terminó la cuenta regresiva
    if (distancia < 0) {
        clearInterval(x);
        document.getElementById("dias").innerText = "00";
        document.getElementById("horas").innerText = "00";
        document.getElementById("minutos").innerText = "00";
        document.getElementById("segundos").innerText = "00";
    }
}, 1000);

// --- CONFIGURACIÓN DEL BOTÓN DE WHATSAPP ---
const urlWhatsApp = `https://wa.me/${TELEFONO_WA}?text=${encodeURIComponent(MENSAJE_WA)}`;
document.getElementById('btn-whatsapp').href = urlWhatsApp;

// --- EFECTO CONFETI (Librería canvas-confetti) ---
function lanzarConfeti() {
    // Explosión izquierda
    confetti({
        particleCount: 150,
        spread: 80,
        origin: { x: 0.2, y: 0.6 }
    });
    // Explosión derecha
    confetti({
        particleCount: 150,
        spread: 80,
        origin: { x: 0.8, y: 0.6 }
    });
}

// --- GENERADOR DE GLOBOS DINÁMICOS CORREGIDO ---
function crearGlobos() {
    const contenedor = document.getElementById('contenedor-globos');
    const colores = ['#ff6b6b', '#ffd166', '#06d6a0', '#118ab2', '#f72585'];
    
    // Forzar al contenedor a medir el 100% del alto real de la tarjeta
    const tarjeta = document.getElementById('contenido-tarjeta');
    contenedor.style.height = `${tarjeta.scrollHeight}px`;

    // Crear un globo cada 1.5 segundos de forma indefinida
    setInterval(() => {
        const globo = document.createElement('div');
        globo.classList.add('globo');
        
        // Propiedades aleatorias
        const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
        const posicionX = Math.random() * 95; // Evita que se salgan por los costados del celular (max 95%)
        const retrasoAnimacion = Math.random() * 3; // Segundos de delay
        const tamano = Math.random() * (50 - 30) + 30; // Tamaño entre 30px y 50px

        globo.style.backgroundColor = colorAleatorio;
        globo.style.left = `${posicionX}%`;
        globo.style.animationDelay = `${retrasoAnimacion}s`;
        globo.style.width = `${tamano}px`;
        globo.style.height = `${tamano * 1.25}px`;

        contenedor.appendChild(globo);

        // Subimos el tiempo de remoción a 16 segundos para darles tiempo de llegar arriba del todo
        setTimeout(() => {
            globo.remove();
        }, 16000);
    }, 1500);
}

// --- FUNCIÓN COPIAR ALIAS DE REGALO ---
function copiarAlias() {
    const textoAlias = document.getElementById('alias-texto').innerText;
    navigator.clipboard.writeText(textoAlias).then(() => {
        alert('¡Alias copiado al portapapeles! 👍');
    }).catch(err => {
        console.error('Error al copiar: ', err);
    });
}