var svg; //svg canvas
var vizG; //所有svg元素容器，偏移到margin圆点
var svgwWidth = 580;
var svgHeight = 580;
var svgMargins = {top:10, right:10, bottom:10, left:10};
//ini svg 
iniSvg(svgwWidth, svgHeight);

var canvas = d3.select('body')
		.append('canvas')
		.attr('width', 600) //css设置不能控制canvas的大小，否则会出现自动放大模糊
		.attr('height', 600);

var context = d3.select('canvas')
		.node().getContext('2d');

var sampleData = d3.range(100).map(function (i) {
			return {x: (i*5 + 5), y: (Math.random()*40 + 80)};
	});

// console.log(sampleData[0].x);

vizG.append('circle')
	.attr('r', 100)
	.attr('cx', 100)
	.attr('cy', 100)
	.style('fill', '#f00');

// context.beginPath();
// context.strokeStyle = 'teal';
// context.lineWidth = 30;
// context.arc(150, 150, 100, (Math.PI/180)*0, (Math.PI/180)*360, false);
// // context.moveTo(100, 100);
// // context.lineTo(200, 100);
// context.stroke();
// context.closePath();

context.beginPath();
context.strokeStyle = 'teal';
context.lineWidth = 5;
// context.moveTo(10, 10);
// sampleData.forEach(function(d, i) {
// 	return context.lineTo(d.x, d.y);
// });




var dataLength = sampleData.length;
var i = 0;
var animateCurveId;

var xPosition;
var yPosition;

context.beginPath();
context.strokeStyle = 'teal';
context.lineWidth = 5;

(function drawFrame(){
	animateCurveId = window.requestAnimationFrame(drawFrame, canvas);
	if (i < dataLength) {
		xPosition = sampleData[i].x;
		yPosition = sampleData[i].y;

		context.lineTo(xPosition, yPosition);
		context.stroke();
		// console.log(sampleData[i]);
		i++;
	} else{
		window.cancelAnimationFrame(animateCurveId);
	}
}());

context.closePath();

function delayDraw(x, y) {
	return context.lineTo(x, y);
}

// svg画布初始化
function iniSvg(svgwWidth, svgHeight) {
	svg = d3.select('body')
		.append('svg')
		.attr('id', 'svgCanvas')
		.attr('width', svgwWidth + svgMargins.right + svgMargins.left)
		.attr('height', svgHeight + svgMargins.top + svgMargins.bottom);

	vizG = svg.append('g') //总g，移动到margin原点
		.attr('id', 'vizG')
		.attr('transform', 'translate(' + svgMargins.left + ',' + svgMargins.top + ')');

	return vizG;	
}

//=========================================================================
//svg canvas hybird map -- sample of 'd3.js in action' ====================
/*
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

	var g = d3.select('svg')
			.append('g');

	var mapZoom = d3.behavior.zoom()
			.translate(projection.translate())
			.scale(projection.scale())
			.on('zoom', zoomed)
			.on('zoomstart', zoomInitialized)
			.on('zoomend', zoomFinished);

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

	zoomFinished();

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

		context.strokeStyle = 'black';
		context.fillStyle = 'rgba(255, 0, 0, 0.2)';
		context.lineWidth = '1px';

		for(var x in sampleData) {
			// console.log('var x in sampleData: ' + x); //x stand for key
			context.beginPath();
			canvasPath(sampleData[x]);
			context.stroke();
			context.fill();
		}

		// d3.selectAll('path.sample')
		// 	.attr('d', svgPath);
	}

	function zoomInitialized() {
		d3.selectAll('path.sample')
			.style('display', 'none');

		zoomed();
	}

	function zoomFinished() {
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

		d3.selectAll('path.sample')
			.style('display', 'block')
			.attr('d', svgPath);
	}
};
*/












