document.addEventListener("DOMContentLoaded", function () {
  // Configuración del carrusel
  var currentSlide = 0;
  var totalSlides = document.querySelectorAll('.img').length;
  var carrouselGrande = document.getElementById('carrouselGrande');
  var puntosContainer = document.getElementById('puntos');

  // Función para cambiar a la siguiente diapositiva
  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
  }

  // Función para actualizar la visualización del carrusel
  function updateCarousel() {
    var translateValue = -currentSlide * 100;
    carrouselGrande.style.transform = 'translateX(' + translateValue + '%)';

    // Actualiza los puntos activos
    var puntos = puntosContainer.querySelectorAll('.punto');
    puntos.forEach(function (punto, index) {
      punto.classList.toggle('activo', index === currentSlide);
    });
  }

  // Crea los puntos de navegación
  for (var i = 0; i < totalSlides; i++) {
    var punto = document.createElement('div');
    punto.classList.add('punto');
    punto.addEventListener('click', function () {
      currentSlide = Array.from(puntosContainer.children).indexOf(this);
      updateCarousel();
    });
    puntosContainer.appendChild(punto);
  }

  // Inicia el carrusel automático
  var intervalId = setInterval(nextSlide, 5000); // Cambia la imagen cada 5 segundos

  // Detiene el carrusel al pasar el ratón sobre él
  carrouselGrande.addEventListener('mouseover', function () {
    clearInterval(intervalId);
  });

  // Reanuda el carrusel al quitar el ratón
  carrouselGrande.addEventListener('mouseout', function () {
    intervalId = setInterval(nextSlide, 5000);
  });
});
