 document.addEventListener("DOMContentLoaded", function() {
        escribirTexto("Transformando tus sueños <br> en estructuras sólidas.", "texto-escrito");
    });

    function escribirTexto(textoCompleto, elementoId) {
        let textoElemento = document.getElementById(elementoId);
        let textoParcial = "";
        let velocidadEscritura = 50; // Ajusta la velocidad según sea necesario

        for (let i = 0; i <= textoCompleto.length; i++) {
            setTimeout(function() {
                textoParcial = textoCompleto.substring(0, i);
                textoElemento.innerHTML = textoParcial;
            }, i * velocidadEscritura);
        }
    }

function mostrarDescripcion(tarjeta) {
    tarjeta.querySelector('.descripcion').style.display = 'block';
}

function ocultarDescripcion(tarjeta) {
    tarjeta.querySelector('.descripcion').style.display = 'none';
}

let currentIndex = 0;
const imagenes = document.querySelectorAll('.imagen-container');

function mostrarImagen(index) {
    imagenes.forEach((imagen, i) => {
        imagen.style.display = i === index ? 'block' : 'none';
    });
}

function cambiarImagen(direccion) {
    currentIndex += direccion;

    if (currentIndex < 0) {
        currentIndex = imagenes.length - 1;
    } else if (currentIndex >= imagenes.length) {
        currentIndex = 0;
    }

    mostrarImagen(currentIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarImagen(currentIndex);
});



function toggleMenu() {
    var navList = document.querySelector('.nav-list');
    navList.classList.toggle('active');
}