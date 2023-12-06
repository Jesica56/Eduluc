

// Coordenadas de las zonas
const zonas = [
    { nombre: "Guachipas", coordenadas: [-25.121, -65.564] }, 
    { nombre: "Rosario del Lerma", coordenadas: [-24.921, -65.521] },
    { nombre: "Campo Quijano", coordenadas: [-24.889, -65.758] },
    { nombre: "El Encon", coordenadas: [-24.884, -65.541] },
    { nombre: "Cerrillos", coordenadas: [-24.896, -65.467] }
];

// Crear el mapa centrado en Salta
const mapa = L.map('mapa').setView([-24.7859, -65.4117], 14);

// Añadir un "tile layer" (capa de mapa) de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(mapa);

// Añadir marcadores para cada zona
zonas.forEach(zona => {
    const marcador = L.marker(zona.coordenadas).addTo(mapa);
    
    // Añadir un popup al marcador con el nombre de la zona
    marcador.bindPopup(zona.nombre);
});
