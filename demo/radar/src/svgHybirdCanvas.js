var sampleData = d3.range(1000).map(function(d) {
	var datapoint = {};

	datapoint.id = 'Sample Feature ' + d;
	datapoint.type = 'Feature';
	datapoint.properties = {};
	datapoint.geometry = {};
	datapoint.geometry.type = 'Polygon';
	datapoint.geometry.coordinates = randomCoords();

	return datapoint;
});

function randomCoords() {
	var randX = (Math.random() * 350) - 175;
	var randY = (Math.random() * 170) - 85;

	return [[[randX - 5, randY], [randX, randY - 5], [randX - 10, randY - 5], [randX - 5, randY]]]; //三角形的4个坐标点
}

d3.json('data/world.geojson', function(data) {
	createMap(data);
});

function createMap(countries) {
	// var projection = d3.geo.mercator()
	// 		.scale(100).translate([250, 250]);
	var projection = d3.geo.mercator()
			.scale(100).translate([250, 250]);

	// var geoPath = d3.geo.path()
	// 		.projection(projection);
	var svgPath = d3.geo.path()
			.projection(projection);

	var canvasPath = d3.geo.path()
			.projection(projection);

	var g = d3.select('body')
			.select('svg')
			.append('g');

	var mapZoom = d3.behavior.zoom()
			.translate(projection.translate())
			.scale(projection.scale())
			.on('zoom', zoomed);

	d3.select('svg').call(mapZoom);

	// g.selectAll('path.countries')
	// 	.data(countries.features)
	// 	.enter()
	// 	.append('path')
	// 	.attr('d', geoPath)
	// 	.attr('class', 'countries');

	g.selectAll('path.sample')
		.data(sampleData)
		.enter()
		.append('path')
		.attr('d', svgPath)
		.attr('class', 'sample')
		.on('mouseover', function() {
			d3.select(this).style('fill', 'pink');
		});

	zoomed();

	function zoomed() {
		projection.translate(mapZoom.translate())
			.scale(mapZoom.scale());

		// g.selectAll('path.sample')
		// 	.attr('d', geoPath);

		// g.selectAll('path.countries')
		// 	.attr('d', geoPath);

		var context = d3.select('canvas')
				.node()
				.getContext('2d');

		context.clearRect(0, 0, 500, 500);
		canvasPath.context(context);

		context.strokeStyle = 'black';
		context.fillStyle = 'gray';
		context.lineWidth = '1px';

		for(var x in countries.features) {
			context.beginPath();
			canvasPath(countries.features[x]);
			context.stroke();
			context.fill();
		}

		// context.strokeStyle = 'black';
		// context.fillStyle = 'rgba(255, 0, 0, 0.2)';
		// context.lineWidth = '1px';

		// for(var x in sampleData) {
		// 	// console.log('var x in sampleData: ' + x); //x stand for key
		// 	context.beginPath();
		// 	geoPath(sampleData[x]);
		// 	context.stroke();
		// 	context.fill();
		// }

		d3.selectAll('path.sample')
			.attr('d', svgPath);
	}
};