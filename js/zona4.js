
// Crear un mapa centrado en Salta
const mapa = new ol.Map({
    target: 'mapa',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([-65.4117, -24.7859]),
        zoom: 10
    })
});

// Definir las zonas y sus coordenadas
const zonas = [
    { nombre: "Guachipas", coordenadas: ol.proj.fromLonLat([-25.52216765,-65.5083359012118]) },
    { nombre: "Rosario del Lerma", coordenadas: ol.proj.fromLonLat([-24.53873, -65.8991090851796]) },
    { nombre: "Campo Quijano", coordenadas: ol.proj.fromLonLat([-24.9079731, -65.6425972]) },
    { nombre: "El Encon", coordenadas: ol.proj.fromLonLat([-24.8515869, -65.5542379]) },
    { nombre: "Cerrillos", coordenadas: ol.proj.fromLonLat([-24.8970543, -65.484497]) }
];

// Crear una capa vectorial para los marcadores
const vectorSource = new ol.source.Vector();
const vectorLayer = new ol.layer.Vector({
    source: vectorSource
});

mapa.addLayer(vectorLayer);

// Añadir un marcador para cada zona
zonas.forEach(zona => {
    const marcador = new ol.Feature({
        geometry: new ol.geom.Point(zona.coordenadas),
        name: zona.nombre
    });

    // Estilo del marcador
    marcador.setStyle(new ol.style.Style({
        image: new ol.style.Circle({
            radius: 15,
            fill: new ol.style.Fill({ color: 'red' }),
            stroke: new ol.style.Stroke({ color: 'white', width: 4 })
        })
    }));

    vectorSource.addFeature(marcador);

    // Añadir un popup al hacer clic en el marcador
    marcador.on('click', function (event) {
        const nombre = event.target.values_.name;
        alert("Zona: " + nombre);
    });
});
