document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar los botones y el contenedor de la pregunta
    var yesButton = document.getElementById('yesButton');
    var noButton = document.getElementById('noButton');
    var heartImage = document.getElementById('heartImage');
    var newGifImage = document.getElementById('newGif');

    // Agregar evento al botón "No"
    noButton.addEventListener('click', function() {
        // Agrandar el botón "Sí" cada vez que se presiona el botón "No"
        yesButton.style.width = (yesButton.offsetWidth + 20) + 'px';
        yesButton.style.fontSize = (parseFloat(window.getComputedStyle(yesButton, null).getPropertyValue('font-size')) + 1) + 'px';
    });

    // Agregar evento al botón "Sí"
    yesButton.addEventListener('click', function() {
        // Mostrar alerta "ahora chi"
        alert('Ahora chi! TKM');

        // Ocultar el contenedor de la pregunta
        document.getElementById('questionContainer').style.display = 'none';

        // Ocultar el botón "Sí" y el botón "No"
        yesButton.style.display = 'none';
        noButton.style.display = 'none';

        // Establecer la fuente del nuevo gif y mostrarlo
        newGifImage.style.display = 'block';
    });
});