var svg = d3.select("#chart").append("svg")
	.attr("width", 600)
	.attr("height", 600)
	.append("g").attr("class", "wrapper");

var lineModel = d3.svg.line()
	.x(function(d) { return d.x; })
	.y(function(d) { return d.y; })
	.interpolate('basis');

var data = d3.range(100).map(function(d, i) {
		return { x: i*5, y: (200 + 100*Math.sin(d)*Math.random()) };
	});

//#########################################################
animateCurve(svg, lineModel, data);
//#########################################################

function animateCurve(svg, lineModel, data) {
	var drawDuration = 10000;

	var path = svg.append("path")
		.attr("class", "spirograph")
		.attr("d", lineModel(data))
		.style("stroke", 'orange');
	console.log(path.node());

	var totalLength = path.node().getTotalLength();
	var dashArray = totalLength + " " + totalLength;

	path.attr("stroke-dasharray", dashArray)
		.attr("stroke-dashoffset", totalLength)
		.transition()
		.duration(drawDuration)
		.ease("linear")
		.attr("stroke-dashoffset", 0);
}
