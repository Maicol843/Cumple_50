# 🎂 Tarjeta de Invitación Digital Interactiva - Cumple de 50 (Mario & Cris)

¡Bienvenido/a al repositorio de la tarjeta digital de invitación para el cumpleaños de 50 de Mario & Cris! Este proyecto es una invitación web interactiva, moderna y **optimizada exclusivamente para dispositivos móviles**, diseñada para ofrecer una experiencia fluida y festiva a los invitados.

🎯 **Demo en Vivo:** [Ver Invitación en GitHub Pages](https://maicol843.github.io/Cumple_50/)

---

## 📱 Características del Proyecto

* **Diseño Mobile-First:** Estructura adaptada y optimizada al 100% para pantallas de celulares (iOS/Android).
* **Pantalla de Bienvenida (Overlay):** Un telón de entrada elegante que invita al usuario a "Abrir Invitación".
* **Interactividad y Efectos:**
    * Generador dinámico de **globos flotantes** de colores que recorren el fondo vertical de la tarjeta.
    * Efecto de **explosión de confeti** con la librería `canvas-confetti` al abrir el sobre.
    * **Música de fondo** autoejecutable tras la interacción del usuario.
* **Cuenta Regresiva:** Un contador en tiempo real (Días, Horas, Minutos, Segundos) sincronizado con la fecha del evento.
* **Confirmación vía WhatsApp Automatizada:** Valida que el invitado ingrese su nombre y genera dinámicamente un enlace personalizado hacia WhatsApp sin recargar la página.
* **Integración con Google Maps:** Vista de mapa integrada y botón directo para abrir la ubicación en la app nativa de Maps.
* **Módulo de Regalos:** Opción ágil para copiar el alias de Mercado Pago al portapapeles con un solo toque.

---

## 🔗 Optimización OpenGraph (Vista previa en WhatsApp)

Para que la invitación luzca profesional desde el primer momento en que se comparte por mensajería (WhatsApp, Telegram, etc.), el proyecto implementa etiquetas **OpenGraph** en el `<head>` del `index.html`. 

Esto asegura que se genere una tarjeta de presentación con título, descripción y una imagen de portada optimizada:

```html
<meta property="og:title" content="¡Estás invitado a nuestro 50! - Mario & Cris" />
<meta property="og:description" content="Te espero el 27 de Junio para celebrar nuestro cumpleaños. ¡No faltes!" />
<meta property="og:url" content="[https://maicol843.github.io/Cumple_50/](https://maicol843.github.io/Cumple_50/)" /> 
<meta property="og:type" content="website" />
<meta property="og:image" content="[https://maicol843.github.io/Cumple_50/img/portada.png](https://maicol843.github.io/Cumple_50/portada.png)" />
<meta property="og:image:secure_url" content="[https://maicol843.github.io/Cumple_50/img/portada.png](https://maicol843.github.io/Cumple_50/portada.png)" />
<meta property="og:image:type" content="image/png" />
<meta property="og:image:width" content="600" />
<meta property="og:image:height" content="700" />
```

---

## 🛠️ Tecnologías Utilizadas

- HTML5 y CSS3 (Variables personalizadas :root y Animaciones clave @keyframes).
- Bootstrap 5.3.3 (Estructura de grillas y componentes fluidos).
- JavaScript (Vanilla JS) (Lógica de eventos, manejo del DOM, intervalos y asincronía).
- FontAwesome 6.4.0 (Iconografía estilizada).
- Canvas-Confetti (Librería externa para la animación de celebración).

---

## ⚙️ Personalización Rápida

Si deseas clonar o adaptar este proyecto para otro evento, los puntos clave de edición se encuentran al inicio de los archivos:

1. Fecha y Teléfono (en script.js):

```html
const FECHA_CUMPLE = new Date("Jun 27, 2026 21:30:00").getTime();
const TELEFONO_WA = "5493885846141"; // Código de país + número
```

2. Datos de Transferencia (en index.html): Modificar el bloque de la clase .pago con el nombre y alias correspondientes.
3. Música de Fondo: Reemplazar el archivo en la ruta sound/Boquita de coral.MP3 manteniendo la etiqueta <audio>.

---

## 📱 Vista Previa del Proyecto
<div align="center">
  <img src="portada.png" alt="Portada de la Invitación" width="300" height="auto">
</div>

---

## ✒️ Créditos

- Desarrollo: maicol843
- Librería de Confeti: catdad/canvas-confetti

