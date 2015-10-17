iniSvg(); //svg, margin
iniWidgets(); //title, remarks
iniAxes(); //left, bottom
iniData(); //process time and so on
renderViz();

var viz = {};

function initialSvg(svgDiv, width, height) {
	viz.svg = d3.select(svgDiv)
		.append('svg')
		.style('width', '100%')
		.style('height', '100%');

	return viz.svg;
}

