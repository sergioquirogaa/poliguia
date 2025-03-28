// ESTA PARTE VA LAS IMAGENES A USAR EN EL SLIDER
const imagenes = {
    "prefix__Espacio_deportivo_1": [
        "assets/img/espacio_deportivo-1.jpg"
    ],
    "prefix__Espacio_deportivo_2": [
        "assets/img/espacio_deportivo-1.jpg"
    ],
    "prefix__Laboratorios": [
        "assets/img/laboratorios-1.jpg",
        "assets/img/laboratorios-2.jpg",
        "assets/img/laboratorios-3.jpg",
        "assets/img/laboratorios-4.jpg",
        "assets/img/laboratorios-5.jpg"
    ],
    "prefix__Baño_hombres": [
        "assets/img/baño-hombres-1.jpg"

    ],
    "prefix__Baño_Mujeres": [
        "assets/img/baño-mujeres-1.jpg"
    ],
    "prefix__Coordinacion": [
        "assets/img/coordinacion-1.jpg",
        "assets/img/coordinacion-2.jpg"
    ],
    "prefix__Bilblioteca": [
        "assets/img/biblioteca-1.jpg",
        "assets/img/biblioteca-2.jpg",
        "assets/img/biblioteca-3.jpg"
    ],
    "prefix__Cantina": [
        "assets/img/restaurante-univ-1.jpg",
        "assets/img/restaurante-univ-2.jpg"
    ],
    "prefix__Aulas": [
        "assets/img/aulas-1.jpg",
        "assets/img/aulas-2.jpg",
        "assets/img/aulas-3.jpg",
        "assets/img/aulas-4.jpg",
        "assets/img/aulas-5.jpg",
        "assets/img/aulas-6.jpg"
    ],
    "prefix__Aula_Magna": [
        "assets/img/aula-magna-1.jpg",
        "assets/img/aula-magna-2.jpg",
        "assets/img/aula-magna-3.jpg",
        "assets/img/aula-magna-4.jpg",
        "assets/img/aula-magna-5.jpg"
    ],
    "prefix__Calistenia": [
        "assets/img/calistenia-1.jpg",
        "assets/img/calistenia-2.jpg",
        "assets/img/calistenia-3.jpg"
    ],
    "prefix__Comedor_y_Sala_de_estudio": [
        "assets/img/comedor-1.jpg",
        "assets/img/comedor-2.jpg",
        "assets/img/comedor-3.jpg",
        "assets/img/comedor-4.jpg"
    ],
    "prefix__Mesa_de_Entrada": [
        "assets/img/mesa-de-entrada-1.jpg",
        "assets/img/mesa-de-entrada-2.jpg"
    ],
    "prefix__Poliplaza1": [
        "assets/img/poliplaza-1.jpg",
        "assets/img/poliplaza-3.jpg",
        "assets/img/poliplaza-8.jpg",
        "assets/img/poliplaza-9.1.jpg"
    ],
    "prefix__Poliplaza2": [
        "assets/img/poliplaza-1.jpg",
        "assets/img/poliplaza-3.jpg",
        "assets/img/poliplaza-8.jpg",
        "assets/img/poliplaza-9.1.jpg"
    ],
    "prefix__Poliplaza3": [
        "assets/img/poliplaza-1.jpg",
        "assets/img/poliplaza-3.jpg",
        "assets/img/poliplaza-8.jpg",
        "assets/img/poliplaza-9.1.jpg"
    ],
    "prefix__Poliplaza4": [
        "assets/img/poliplaza-1.jpg",
        "assets/img/poliplaza-3.jpg",
        "assets/img/poliplaza-8.jpg",
        "assets/img/poliplaza-9.1.jpg"
    ],
    "prefix__Poliplaza5": [
        "assets/img/poliplaza-1.jpg",
        "assets/img/poliplaza-3.jpg",
        "assets/img/poliplaza-8.jpg",
        "assets/img/poliplaza-9.1.jpg"
    ],
    "prefix__Poliplaza6": [
        "assets/img/poliplaza-1.jpg",
        "assets/img/poliplaza-3.jpg",
        "assets/img/poliplaza-8.jpg",
        "assets/img/poliplaza-9.1.jpg"
    ],
    "prefix__Poliplaza8": [
        "assets/img/poliplaza-1.jpg",
        "assets/img/poliplaza-3.jpg",
        "assets/img/poliplaza-8.jpg",
        "assets/img/poliplaza-9.1.jpg"
    ],
    "prefix__Poliplaza_9_-_sala_lectura": [
        "assets/img/poliplaza-1.jpg",
        "assets/img/poliplaza-3.jpg",
        "assets/img/poliplaza-8.jpg",
        "assets/img/poliplaza-9.1.jpg",
        "assets/img/poliplaza-9.2.jpg",
        "assets/img/poliplaza-9.3.jpg"
    ],
    "prefix__Estacionamientos_principal": [
        "assets/img/estacionamiento-princ-1.jpg",
        "assets/img/estacionamiento-princ-2.jpg",
        "assets/img/estacionamiento-princ-3.jpg",
        "assets/img/estacionamiento-princ-4.jpg"
    ],
    "prefix__Estacionamiento_laboratorios": [
        "assets/img/estacionamiento-princ-1.jpg",
        "assets/img/estacionamiento-princ-2.jpg",
        "assets/img/estacionamiento-princ-3.jpg",
        "assets/img/estacionamiento-princ-4.jpg"
    ],
    "prefix__Est_profesores_y_func": [
        "assets/img/estacionamiento-prof-1.jpg",
        "assets/img/estacionamiento-prof-2.jpg"
    ]
};

// ESTA PARTE ES PARA EL SLIDER Y PRECARGA DE IMAGENES
let sliderInterval; 
// Función para pre-cargar un array de imágenes
function preloadImages(imageArray) {
    imageArray.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}
function iniciarSlider(idZona, titulo, descripcion) {
    let imagenElement = document.getElementById("infoImagen");
    let tituloElement = document.getElementById("infoTitulo");
    let textoElement = document.getElementById("infoTexto");
// Detener cualquier slider en ejecución antes de iniciar uno nuevo
    detenerSlider();
    tituloElement.textContent = titulo;
    textoElement.innerHTML = descripcion; // Permitir etiquetas HTML
// Pre-cargar imágenes antes de mostrarlas
    preloadImages(imagenes[idZona]);
    let index = 0;
// Mostrar la primera imagen inmediatamente (sin esperar al intervalo)
    imagenElement.style.opacity = 0; // Fade-out
    setTimeout(() => {
        imagenElement.src = imagenes[idZona][index];
        imagenElement.style.opacity = 1; // Fade-in
    }, 300);
// Iniciar el slider, pero saltando la primera imagen que ya mostramos
    sliderInterval = setInterval(() => {
        index = (index + 1) % imagenes[idZona].length; // Ahora empieza desde la segunda imagen
        if (index === 0) index = 1; // Saltar la primera imagen ya mostrada

        imagenElement.style.opacity = 0; // Fade-out
        setTimeout(() => {
            imagenElement.src = imagenes[idZona][index];
            imagenElement.style.opacity = 1; // Fade-in
        }, 500);
    }, 2000); // Aca espera 2 seg para mostrar otra imagen
}
function detenerSlider() {
    if (sliderInterval) {
        clearInterval(sliderInterval);
        sliderInterval = null;
    }
}
document.addEventListener("DOMContentLoaded", function () {
    let mapa = document.getElementById("mapaSVG");
    if (mapa) {
        mapa.style.opacity = "1";
        mapa.style.visibility = "visible";
    }
});

// ESTA PARTE ES PARA LA DESCRIPCIÓN
document.getElementById("prefix__Espacio_deportivo_1").addEventListener("mouseover", function () {
    iniciarSlider("prefix__Espacio_deportivo_1", "ESPACIO DEPORTIVO 1", "Cancha de fútbol con césped de alta calidad,estre para entrenamientos, torneos y partidos recreativos. Su superficie respeta un buen control del balón Y reducir el impacto en las articulaciones, comodidad a los jugadores. Además, cuenta con Lancha nocturna para entrenamientos en horarios apretrés y una Interna perimetral que brinda seguridad y delimitación de la zona de juego.");
});

document.getElementById("prefix__Espacio_deportivo_2").addEventListener("mouseover", function () {
    iniciarSlider("prefix__Espacio_deportivo_2", "ESPACIO DEPORTIVO 2", "Pista atlética con Especialidad de la superficie, ideal para la práctica de carreras de velocidad, resistencia y otras disciplinas atléticas. Diseñada para proporcionar un buen agarre y estabilidad, Permitiendo entrenamientos en condiciones óptimas. Cuenta con Gestión adecuada, zonas de calentamiento y espacios para actividades de acondicionamiento físico, promocionando un ambiente seguro para los atletas.");
});

document.getElementById("prefix__Laboratorios").addEventListener("mouseover", function () {
    iniciarSlider(
        "prefix__Laboratorios",
        "LABORATORIOS",
        `<p>Espacios diseñados para la experimentación y el aprendizaje práctico en diversas disciplinas científicas y tecnológicas. Equipados con instrumentos modernos, software especializado y tecnología avanzada, estos laboratorios permiten realizar investigaciones, pruebas y análisis en un entorno controlado. Su objetivo es fomentar la innovación y el desarrollo académico a través de la aplicación de conocimientos teóricos en situaciones reales.</p>
        <h5>Reglamentos</h5>
        <ul>
            <li><strong>Uso adecuado:</strong> Se prohíbe el uso indebido de equipos y sustancias.</li>
            <li><strong>Seguridad:</strong> Es obligatorio el uso de equipo de protección en todo momento.</li>
            <li><strong>Acceso:</strong> Solo estudiantes y profesores autorizados pueden ingresar.</li>
            <li><strong>Limpieza:</strong> Se debe mantener el orden y limpieza después de cada uso.</li>
        </ul>
        <blockquote>"El laboratorio es un lugar de aprendizaje y descubrimiento; su buen uso garantiza una mejor experiencia para todos."</blockquote>`
    );
});

document.getElementById("prefix__Baño_hombres").addEventListener("mouseover", function () {
    iniciarSlider("prefix__Baño_hombres", "BAÑO HOMBRES", "Servicios higiénicos amplios, bien mantenidos y adaptaciones con suministros esenciales. Disponibles para toda la comunidad universitaria, estos espacios garantizados higiene, comodidad y accesibilidad para todos los usuarios.");
});

document.getElementById("prefix__Baño_Mujeres").addEventListener("mouseover", function () {
    iniciarSlider("prefix__Baño_Mujeres", "BAÑO MUJERES", "Servicios higiénicos amplios, bien mantenidos y adaptaciones con suministros esenciales. Disponibles para toda la comunidad universitaria, estos espacios garantizados higiene, comodidad y accesibilidad para todos los usuarios.");
});

document.getElementById("prefix__Coordinacion").addEventListener("mouseover", function () {
    iniciarSlider("prefix__Coordinacion", "COORDINACION", "Oficina administrativa de la planificación, gestión y supervisión académica . En este espacio, los estudiantes y docentes pueden Realizar consultas, solicitar información y recibir orientación sobre sus actividades académicas. También se gestionan trámites administrativos relacionados con la organización institucional.");
});

document.getElementById("prefix__Bilblioteca").addEventListener("mouseover", function () {
    iniciarSlider("prefix__Bilblioteca", "BIBLIOTECA", "Espacio con una amplia colección de libros, revistas, publicaciones científicas y material digital . Diseñada para la y el estudio en un ambiente tranquilo , ofrece áreas de lectura individual y grupal, además de acceso a bases de datos académicos y recursos electrónicos. Su infraestructura moderna proporciona comodidad y acceso a información clave para la formación académica.");
});

document.getElementById("prefix__Cantina").addEventListener("mouseover", function () {
    iniciarSlider("prefix__Cantina", "RESTAURANTE UNIVERSITARIO", "Área de servicio donde los estudiantes y el personal pueden encontrar variedad de comidas y bebidas a precios accesibles. Ofrece opciones de desayunos, almuerzos y refrigerios, una alimentación equilibrada dentro del campus. Su ambiente es adecuado para la convivencia y el descanso entre clases.");
});

document.getElementById("prefix__Aulas").addEventListener("mouseover", function () {
    iniciarSlider("prefix__Aulas", "BLOQUE DE AULAS", "Salones de clases, bien iluminados y ventilados, diseñados para garantizar una educación de calidad. Cuentan con pizarras interactivas, proyectores y ergonómico para proporcionar como empresa a los estudiantes. Además, su distribución favorece la participación, el trabajo en equipo y un ambiente de aprendizaje efectivo.");
});

document.getElementById("prefix__Aula_Magna").addEventListener("mouseover", function () {
    iniciarSlider("prefix__Aula_Magna", "AULA MAGNA", "Auditorio de gran capacidad destinado a conferencias, presentaciones, eventos académicos y actividades culturales. Su infraestructura cuenta con equipos de sonido profesional, iluminación y proteitos de proyección, que garantiza una experiencia óptima tanto para expositores como para el asistente público. Es un espacio clave para el intercambio de ideas y el desarrollo de actividades institucionales.");
});

document.getElementById("prefix__Calistenia").addEventListener("mouseover", function () {
    iniciarSlider("prefix__Calistenia", "CALISTENIA", "Zona equipada con barras, anillas y estructuras especializadas para entrenamientos de fuerza y resistencia. Es el lugar ideal quienes para practican Daño de peso corporal, como dominadas, fondos y planchas. Diseñada para promover el desarrollo de habilidades físicas y mejorar la condición muscular, este área es frecuentada por entusiastas del fitness y deportistas que buscan entrenar al aire libre.");
});

document.getElementById("prefix__Comedor_y_Sala_de_estudio").addEventListener("mouseover", function () {
    iniciarSlider("prefix__Comedor_y_Sala_de_estudio", "COMEDOR UNIVERSITARIO Y SALA DE ESTUDIO", "Área de atención al descanso, la socialización y la alimentación de los estudiantes . El comedor universitario ofrece una variedad de menús nutritivos y prácticas, una alimentación adecuada. La sala de estudio, por otro lado, proporciona un ambiente silencioso y adaptación con mobiliario ergonómico, facilitando la concentración y el aprendizaje.");
});

document.getElementById("prefix__Mesa_de_Entrada").addEventListener("mouseover", function () {
    iniciarSlider("prefix__Mesa_de_Entrada", "MESA DE ENTRADA", "Punto de atención institucional donde se recibe Documentos, solicitudes y trámites administrativos . Aquí, los estudiantes y el personal pueden realizar gestiones académicas y administrativas de manera rápida y eficiente, el buen funcionamiento de la institución.");
});

document.getElementById("prefix__Poliplaza1").addEventListener("mouseover", function () {
    iniciarSlider("prefix__Poliplaza1", "POLIPLAZA 1", "Espacios abiertos con Verdes, bancas y zonas de recreación, ideales para el descanso, la socialización y la realización de actividades culturales. Estas plazas están diseñadas para fomentar la La convivencia, ofreciendo un entorno donde agradable los estudiantes pueden relajarse, estudiar aire libre o interactuar con sus compañeros.");
});

document.getElementById("prefix__Poliplaza2").addEventListener("mouseover", function () {
    iniciarSlider("prefix__Poliplaza2", "POLIPLAZA 2", "Espacios abiertos con Verdes, bancas y zonas de recreación, ideales para el descanso, la socialización y la realización de actividades culturales. Estas plazas están diseñadas para fomentar la La convivencia, ofreciendo un entorno donde agradable los estudiantes pueden relajarse, estudiar aire libre o interactuar con sus compañeros.");
});

document.getElementById("prefix__Poliplaza3").addEventListener("mouseover", function () {
    iniciarSlider("prefix__Poliplaza3", "POLIPLAZA 3", "Espacios abiertos con Verdes, bancas y zonas de recreación, ideales para el descanso, la socialización y la realización de actividades culturales. Estas plazas están diseñadas para fomentar la La convivencia, ofreciendo un entorno donde agradable los estudiantes pueden relajarse, estudiar aire libre o interactuar con sus compañeros.");
});

document.getElementById("prefix__Poliplaza4").addEventListener("mouseover", function () {
    iniciarSlider("prefix__Poliplaza4", "POLIPLAZA 4", "Espacios abiertos con Verdes, bancas y zonas de recreación, ideales para el descanso, la socialización y la realización de actividades culturales. Estas plazas están diseñadas para fomentar la La convivencia, ofreciendo un entorno donde agradable los estudiantes pueden relajarse, estudiar aire libre o interactuar con sus compañeros.");
});

document.getElementById("prefix__Poliplaza5").addEventListener("mouseover", function () {
    iniciarSlider("prefix__Poliplaza5", "POLIPLAZA 5", "Espacios abiertos con Verdes, bancas y zonas de recreación, ideales para el descanso, la socialización y la realización de actividades culturales. Estas plazas están diseñadas para fomentar la La convivencia, ofreciendo un entorno donde agradable los estudiantes pueden relajarse, estudiar aire libre o interactuar con sus compañeros.");
});

document.getElementById("prefix__Poliplaza6").addEventListener("mouseover", function () {
    iniciarSlider("prefix__Poliplaza6", "POLIPLAZA 6", "Espacios abiertos con Verdes, bancas y zonas de recreación, ideales para el descanso, la socialización y la realización de actividades culturales. Estas plazas están diseñadas para fomentar la La convivencia, ofreciendo un entorno donde agradable los estudiantes pueden relajarse, estudiar aire libre o interactuar con sus compañeros.");
});

document.getElementById("prefix__Poliplaza8").addEventListener("mouseover", function () {
    iniciarSlider("prefix__Poliplaza8", "POLIPLAZA 8", "Espacios abiertos con Verdes, bancas y zonas de recreación, ideales para el descanso, la socialización y la realización de actividades culturales. Estas plazas están diseñadas para fomentar la La convivencia, ofreciendo un entorno donde agradable los estudiantes pueden relajarse, estudiar aire libre o interactuar con sus compañeros.");
});

document.getElementById("prefix__Poliplaza_9_-_sala_lectura").addEventListener("mouseover", function () {
    iniciarSlider("prefix__Poliplaza_9_-_sala_lectura", "POLIPLAZA 9 - SALA DE LECTURA", "Espacio tranquilo diseñado para la lectura y estudio individual o en grupo. Cuenta con mobiliario cómodo, acceso a recursos bibliográficos y un ambiente propicio para la concentración. Ideal para buscar un lugar sereno dentro del campus para revisar materiales académicos o realizar investigaciones.");
});

document.getElementById("prefix__Estacionamientos_principal").addEventListener("mouseover", function () {
    iniciarSlider("prefix__Estacionamientos_principal", "ESTACIONAMIENTO PRINCIPAL", "Amplia zona de estacionamiento parada a Estudiantes, docentes y visitantes. Ubicada estratégicamente para facilitar el acceso a diferentes áreas del campus, cuenta con Seguridad y señalización adecuada para garantizar un tránsito.");
});

document.getElementById("prefix__Estacionamiento_laboratorios").addEventListener("mouseover", function () {
    iniciarSlider("prefix__Estacionamiento_laboratorios", "ESTACIONAMIENTO LABORATORIO", "Espacio de estacionamiento destinado a personal y estudiantes que asisten a los laboratorios. Su ubicación cercana a las instalaciones científicas facilita el acceso a la empresa transportación de materiales o equipos de trabajo.");
});

document.getElementById("prefix__Est_profesores_y_func").addEventListener("mouseover", function () {
    iniciarSlider("prefix__Est_profesores_y_func", "ESTACIONAMIENTO PROFESORES Y FUNCIONARIOS", "Zonas exclusivas para y personal administrativo, con acceso restringido y seguridad garantizada. Este espacio permite que el personal de la institución disponga de un lugar seguro para estacionar sus vehículos durante la jornada laboral.");
});

// DESDE ACÁ ES PARA HACER LA FUNCION DE UBICACIÓN EN TIEMPO REAL

document.addEventListener("DOMContentLoaded", function () {
    if ("geolocation" in navigator) {
        navigator.geolocation.watchPosition(mostrarUbicacion, errorUbicacion, { enableHighAccuracy: true });
    } else {
        alert("Tu navegador no soporta geolocalización.");
    }
});

function mostrarUbicacion(pos) {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;

    console.log(`Latitud: ${lat}, Longitud: ${lng}`); // Para depuración

// Coordenadas del campus
const latMin = -25.48440, latMax = -25.48200; // De abajo a arriba
const lngMin = -54.67205, lngMax = -54.67075; // De izquierda a derecha



    // Coordenadas en píxeles de la imagen (336x320)
    const xMin = 0, xMax = 408;
    const yMin = 0, yMax = 380;

    // Verificar si está dentro del área del campus
    let x = ((lng - lngMin) / (lngMax - lngMin)) * (xMax - xMin) + xMin;
    let y = ((lat - latMin) / (latMax - latMin)) * (yMax - yMin) + yMin;
    y = yMax - (y - yMin); // Invertir eje Y

    // Limitar el marcador al borde de la imagen si está fuera del campus
    x = Math.max(xMin, Math.min(x, xMax)); // Limitar X entre 0 y 336
    y = Math.max(yMin, Math.min(y, yMax)); // Limitar Y entre 0 y 320

    // Mostrar la ubicación en el mapa
    const puntoUbicacion = document.getElementById("miUbicacion");
    puntoUbicacion.style.left = `${x}px`;
    puntoUbicacion.style.top = `${y}px`;
    puntoUbicacion.style.display = "block"; // Mostrar el marcador
}

function errorUbicacion() {
    alert("No pudimos obtener tu ubicación.");
}
// Asegúrate de que el navegador tiene permisos para acceder a la ubicación
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(mostrarUbicacion, errorUbicacion);
} else {
    alert("La geolocalización no está soportada por tu navegador.");
}




