function mostrarContenido() {
    // Obtiene las secciones por su id
    var historia = document.getElementById('parte-1');
    var galeria = document.getElementById('parte-2');
    var caracteristica = document.getElementById('parte-3');
    var flotas = document.getElementById('parte-4');
    var final = document.getElementById('parte-5');

    // Muestra las secciones
    galeria.style.display = 'block';
    caracteristica.style.display = 'block';
    flotas.style.display = 'block';
    final.style.display = 'block';
  }