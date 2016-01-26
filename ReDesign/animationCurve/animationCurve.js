var drawDuration = 20;

var svg = d3.select("#chart").append("svg")
	.attr("width", 600)
	.attr("height", 600)
	.append("g").attr("class", "wrapper")
	// .attr("transform", "translate(300, 300)");

var line = d3.svg.line()
	.x(function(d) { return d.x; })
	.y(function(d) { return d.y; })
	.interpolate('basis');

////////////////////////////////////////////////////////////
//////////////////// Draw a Spirograph /////////////////////
////////////////////////////////////////////////////////////
var colors = ["#00AC93", "#EC0080", "#FFE763"];
var numColors = 3;
var startColor = getRandomNumber(0,numColors); //Loop through the colors, but the starting color is random

//#########################################################
addSpiro(false);
//#########################################################

function addSpiro(doDash) {
	console.log(plotSpiroGraph());
	var alternertiveLineData = d3.range(100).map(function(d, i) {
		return { x: i*5, y: (200 + 100*Math.sin(d)) };
	});
	console.log(alternertiveLineData);

	var path = svg.append("path")
	.attr("class", "spirograph")
	// .attr("d", line(plotSpiroGraph()) )
	.attr("d", line(alternertiveLineData))
	.style("stroke", colors[startColor]);
	//.style("stroke", "hsla(" + startColor/numColors * 360 + ", 100%, 50%, " + 0.9 + ")");

	var totalLength = path.node().getTotalLength();
	// console.log(totalLength);

	if (doDash) {
		//Adjusted from http://stackoverflow.com/questions/24021971/animate-the-drawing-of-a-dashed-svg-line
		//The first number specifies the length of the visible part, the dash, the second number specifies the length of the white part
		var dashing = getRandomNumber(1,10) + ", " + getRandomNumber(1,10);  //Something such as "6,6" could happen
		// console.log("Dash pattern is: " + dashing);
		//This returns the length of adding all of the numbers in dashing (the length of one pattern in essense)
		//So for "6,6", for example, that would return 6+6 = 12
		var dashLength = dashing.split(/[\s,]/)
			.map(function (a) { return parseFloat(a) || 0 })
			.reduce(function (a, b) { return a + b });
		//How many of these dash patterns will fit inside the entire path?
		var dashCount = Math.ceil( totalLength / dashLength );
		//Create an array that holds the pattern as often so it will fill the entire path
		var newDashes = new Array(dashCount).join( dashing + " " );
		//Then add one more dash pattern, namely with a visible part of length 0 (so nothing) and a white part
		//that is the same length as the entire path
		var dashArray = newDashes + " 0, " + totalLength;
	} else {
		//For a solid looking line, create a dash pattern with a visible part and a white part
		//that are the same length as the entire path
		var dashArray = totalLength + " " + totalLength;
	}

	//Animate the path by offsetting the path so all you see is the white last bit of dashArray
	//(which has a length that is the same length as the entire path), and then slowly move this
	//out of the way so the rest of the path becomes visible (the stuff at the start of dashArray)
	path
		.attr("stroke-dasharray", dashArray)
		.attr("stroke-dashoffset", totalLength)
		.transition().duration(drawDuration * 1000).ease("linear")
		.attr("stroke-dashoffset", 0);

}//function addSpiro

////////////////////////////////////////////////////////////
////////////////// Spirograph functions ////////////////////
////////////////////////////////////////////////////////////

function plotSpiroGraph() {
	//Function adjusted from: https://github.com/alpha2k/HTML5Demos/blob/master/Canvas/spiroGraph.html
	var maxSize = 300;
	var R = getRandomNumber(60, maxSize);
	var r = getRandomNumber(40, (R * 0.75));
	var alpha = getRandomNumber(25, r);
	var l = alpha / r;
	var k = r / R;

	//Create the x and y coordinates for the spirograph and put these in a variable
	var lineData = [];
	for(var theta=1; theta<=1000; theta += 1){
	var t = ((Math.PI / 180) * theta);
	var ang = ((l-k)/k) * t;
	var x = R * ((1-k) * Math.cos(t) + ((l*k) * Math.cos(ang)));
	var y = R * ((1-k) * Math.sin(t) - ((l*k) * Math.sin(ang)));

	lineData.push({x: x, y: y});
	}

	//Output the variables of this spiro
	console.log("R: " + R + ", r: " + r + ", alpha: " + alpha + ", l: " + l + ", k: " + k);

	return lineData;
}

function getRandomNumber(start, end) {
	return (Math.floor((Math.random() * (end-start))) + start);
}
