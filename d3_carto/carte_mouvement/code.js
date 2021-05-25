let geojson = {};

const context = d3.select('canvas')
  .node()
  .getContext('2d');

const projection = d3.geoStereographic()
  .scale(100)
  .rotate([30,-30]);

// le chemin
const geoGenerator = d3.geoPath()
  .projection(projection)
  .pointRadius(5)
  .context(context);

const londonLonLat = [0.1278, 51.5074];
const newYorkLonLat = [-74.0059, 40.7128];
const lausanneLonLat = [6.6667,46.5333];
const geoInterpolator = d3.geoInterpolate(lausanneLonLat, newYorkLonLat);
let u = 0;

function update() {
  context.clearRect(0, 0, 800, 600);

  context.lineWidth = 0.5;
  context.strokeStyle = '#333';

  context.beginPath();
  geoGenerator({type: 'FeatureCollection', features: geojson.features})
  context.stroke();

  // Graticule
  const graticule = d3.geoGraticule();
  context.beginPath();
  context.strokeStyle = '#ccc';
  geoGenerator(graticule());
  context.stroke();

  // Lausanne - New York
  context.beginPath();
  context.strokeStyle = 'red';
  geoGenerator({type: 'Feature', geometry: {type: 'LineString', coordinates: [lausanneLonLat, newYorkLonLat]}});
  context.stroke();
  
  // londres - New York
  context.beginPath();
  context.strokeStyle = 'red';
  geoGenerator({type: 'Feature', geometry: {type: 'LineString', coordinates: [lausanneLonLat, newYorkLonLat]}});
  context.stroke();

  // Point
  context.beginPath();
  context.fillStyle = 'red';
  geoGenerator({type: 'Feature', geometry: {type: 'Point', coordinates: geoInterpolator(u)}});
  context.fill();

  // boucle d'évolution
  // du curseur
  u += 0.01;
  if(u > 1) u = 0
}

// récupération des données
d3.json('https://gist.githubusercontent.com/d3indepth/f28e1c3a99ea6d84986f35ac8646fac7/raw/c58cede8dab4673c91a3db702d50f7447b373d98/ne_110m_land.json').then( structure_json => {
  geojson = structure_json;
  window.setInterval(update, 50);
  console.log(d);
});



