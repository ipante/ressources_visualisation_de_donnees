// charger le fichier json
d3.json('https://gist.githubusercontent.com/d3indepth/f28e1c3a99ea6d84986f35ac8646fac7/raw/c58cede8dab4673c91a3db702d50f7447b373d98/ne_110m_land.json').then(structure_json => {
    // données disponibles sous structure_json
    const ctx = d3.select('canvas')
        .node()
        .getContext('2d');

    // paramètres de dessin
    ctx.lineWidth = 0.5;
    ctx.strokeStyle = '#333';

    // type de projection
    const ma_projection = d3.geoOrthographic()
        .scale(200)
        // tourner la mappemonde vers nous
        .rotate([0,0]);

    // dessiner les chemins
    const generateur_de_chemins = d3.geoPath()
        .projection(ma_projection)
        .context(ctx);

    // formes de pays
    ctx.beginPath();
    generateur_de_chemins({
        type : 'FeatureCollection',
        features :  structure_json.features
    });
    ctx.fill();

    // ajouter les méridiens
    const graticule = d3.geoGraticule();
    ctx.beginPath();
    ctx.strokeStyle = '#ccc';
    generateur_de_chemins(graticule());
    ctx.stroke();
});