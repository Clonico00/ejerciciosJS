google.charts.load('current', {'packages': ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Partido', 'Escaños'],
        ['PP', 137],
        ['PSOE', 85],
        ['PODEMOS', 71],
        ['CIUDADANOS', 32],
        ['VOX', 24],
        ['ERC', 13],
        ['PNV', 6],
        ['EH Bildu', 5],
        ['JxCAT', 4],
        ['CC', 3],
        ['BNG', 3],
        ['UPN', 2],
        ['Más País', 2],
        ['CUP', 1],
        ['Teruel Existe', 1],
        ['NCa', 1],
        ['CCa-PNC', 1]]);
    var options = {
        title: 'Representación en el Congreso de los Diputados Español por partidos en las últimas elecciones generales en españa',
        is3D: true,
    };
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}

google.charts.load('current', {'packages': ['corechart']});
google.charts.setOnLoadCallback(drawChart);


google.charts.load('current', {
    'packages': ['geochart'],
    'mapsApiKey': 'AIza ...'
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
        ['Country', 'Popularity'],
        ['Germany', 200],
        ['United States', 300],
        ['Brazil', 400],
        ['Canada', 500],
        ['France', 600],
        ['RU', 700]
    ]);

    var options = {
        colorAxis: {colors: ['#e7711c', '#4374e0']}
    };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
}

