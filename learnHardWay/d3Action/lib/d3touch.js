//all together: panning, zooming, rotate

var initialD = [];
var initialTransform;

d3.select('svg').on('touchstart', touchBegin);
d3.select('svg').on('touchend', touchBegin);
d3.select('svg').on('touchmove', touchUpdate);

var graphicsG = d3.select('svg')
		.append('g')
		.attr('id', 'graphics');

var simpleData = d3.range(10).map(function(d) {
	var datapoint = {};
	datapoint.id = 'Sample' + d;
	datapoint.x = Math.random() * 500;
	datapoint.y = Math.random() * 500;
	return datapoint;
});

var samples = graphicsG.selectAll('g')
		.data(simpleData)
		.enter()
		.append('g')
		.attr('transform', function(d) {
			return 'translate(' + d.x + ',' + d.y + ')'
		});

var sampleSubG = samples.append('g').attr('class', 'sample');

sampleSubG.append('rect')
	.attr('width', 100)
	.attr('height', 100)
	.style('fill', 'red');

sampleSubG.append('text')
	.text(function(d) {
		return d.id;
	})
	.attr('y', 20);

function touchBegin() {
	d3.event.preventDefault();
	d3.event.stopPropagation();

	d = d3.touches(this);

	initialD = d;
	initialTransform = d3.transform(d3.select('#graphics').attr('transform'));
}

function touchUpdate() {
	d3.event.preventDefault();
	d3.event.stopPropagation();

	d = d3.touches(this);

	visualizeTouches(d);

	var newX = initialTransform.translate[0];
	var newY = initialTransform.translate[1];

	var newRotate = initialTransform.rotate;

	var newScale = initialTransform.scale[0];

	if (d.length == 1) {
		newX = -(initialD[0][0] - d[0][0] - initialTransform.translate[0]);
		newY = -(initialD[0][1] - d[0][1] - initialTransform.translate[1]);
	}
	else if (d.length == 2) {
		var initialLength = Math.sqrt(Math.abs(initialD[0][0] - initialD[1][0]) + Math.abs(initialD[0][1] - initialD[1][1]));
		var currentLength = Math.sqrt(Math.abs(d[0][0] - d[1][0]) + Math.abs(d[0][1] - d[1][1]));

		var zoom = currentLength / initialLength;
		newScale = zoom * initialTransform.scale[0];
	}
	else if (d.length == 3) {
		var slope1 = (initialD[0][1] - initialD[1][1]) / (initialD[0][0] - initialD[1][0]);

		var slope2 = (d[0][1] - d[1][1]) / (d[0][0] - d[1][0]);

		var angle = Math.atan((slope1 - slope2) / (1 + slope1 * slope2)) * 180 / Math.PI;

		var newRotate = initialTransform.rotate - angle;

		d3.selectAll('g.sample > text')
			.attr('transform', 'rotate(' + (-newRotate) + ')')
	}

	d3.select('#graphics')
			.attr('transform', 'translate(' + newX + ',' + newY + ')' + 'scale(' + newScale + ')' + 'rotate(' + newRotate + ')');
}

function visualizeTouches(d) {
	var touchColor = d3.scale.linear()
			.domain([0, 10])
			.range(['pink', 'darkred']);

	d3.select('svg')
		.selectAll('circle')
		.data(d)
		.enter()
		.append('circle')
		.attr('r', 60)
		.style('fill', function(d, i) {
			return touchColor(i);
		});

	d3.select('svg')
		.selectAll('circle')
		.data(d)
		.exit()
		.remove();

	d3.select('svg')
		.selectAll('circle')
		.attr('cx', function(d) {
			return d[0];
		})
		.attr('cy', function(d) {
			return d[1];
		});
}


//=============stage 6: three fingers rotation========
/*
var initialRotate;
var initialD;

d3.select('svg').on('touchstart', touchBegin);
d3.select('svg').on('touchmove', touchStatus);

var graphicsG = d3.select('svg')
		.append('g')
		.attr('id', 'graphics');

graphicsG.append('rect')
	.attr('width', 250)
	.attr('height', 50)
	.attr('x', 50)
	.attr('y', 50)
	.style('fill', 'red');

graphicsG.append('rect')
	.attr('width', 100)
	.attr('height', 400)
	.attr('x', 350)
	.attr('y', 400)
	.style('fill', 'gray');

function touchBegin() {
	d3.event.preventDefault();
	d3.event.stopPropagation();

	initialRotate = d3.transform(d3.select('#graphics').attr('transform')).rotate;

	d = d3.touches(this);
	
	if (d.length == 3) {
		initialD = d;
		d3.select('#output')
			.html(d);
	}
}

function touchStatus() {
	d3.event.preventDefault();
	d3.event.stopPropagation();

	d = d3.touches(this);

	visualizeTouches(d);

	if (d.length == 3) {
		var slope1 = (initialD[0][1] - initialD[1][1]) / (initialD[0][0] - initialD[1][0]);

		var slope2 = (d[0][1] - d[1][1]) / (d[0][0] - d[1][0]);

		var angle = Math.atan((slope1 - slope2) / (1 + slope1 * slope2)) * 180 / Math.PI;

		var newRotate = initialRotate - angle;

		d3.select('#graphics')
			.attr('transform', 'rotate(' + newRotate + ')');
	}

}

function visualizeTouches(d) {
	var touchColor = d3.scale.linear()
			.domain([0, 10])
			.range(['pink', 'darkred']);

	d3.select('svg')
		.selectAll('circle')
		.data(d)
		.enter()
		.append('circle')
		.attr('r', 60)
		.style('fill', function(d, i) {
			return touchColor(i);
		});

	d3.select('svg')
		.selectAll('circle')
		.data(d)
		.exit()
		.remove();

	d3.select('svg')
		.selectAll('circle')
		.attr('cx', function(d) {
			return d[0];
		})
		.attr('cy', function(d) {
			return d[1];
		});
}

*/

//=============stage 5: two fingers zooming========
/*
// var initialD;
// var initialPosition;

var initialLength = 0;
var initialScale = 1;

d3.select('svg').on('touchstart', touchBegin);
d3.select('svg').on('touchmove', touchStatus);

var graphicsG = d3.select('svg')
		.append('g')
		.attr('id', 'graphics');

graphicsG.append('rect')
	.attr('width', 250)
	.attr('height', 50)
	.attr('x', 50)
	.attr('y', 50)
	.style('fill', 'red');

graphicsG.append('rect')
	.attr('width', 100)
	.attr('height', 400)
	.attr('x', 350)
	.attr('y', 400)
	.style('fill', 'gray');

function touchBegin() {
	d3.event.preventDefault();
	d3.event.stopPropagation();

	d = d3.touches(this);
	// console.log(d);

	// if (d.length == 1) {
	// 	initialD = d;
	// 	initialPosition = d3.transform(d3.select('#graphics').attr('transform')).translate;
	// }

	if (d.length == 2) {
		initialLength = Math.sqrt(Math.abs(d[0][0] - d[1][0]) + Math.abs(d[0][1] - d[1][1]));

		initialScale = d3.transform(d3.select('#graphics').attr('transform')).scale[0];

		console.log(d3.transform(d3.select('#graphics').attr('transform')).scale);
	}
}

function touchStatus() {
	d3.event.preventDefault();
	d3.event.stopPropagation();

	d = d3.touches(this);

	visualizeTouches(d);

	// if (d.length == 1) {
	// 	var newX = initialD[0][0] - d[0][0] - initialPosition[0];
	// 	var newY = initialD[0][1] - d[0][1] - initialPosition[1];

	// 	d3.select('#graphics')
	// 		.attr('transform', 'translate(' + (-newX) + ',' + (-newY) + ')');
	// }

	if (d.length == 2) {
		var currentLength = Math.sqrt(Math.abs(d[0][0] - d[1][0]) + Math.abs(d[0][1] - d[1][1]));

		var zoom = currentLength / initialLength;

		var newScale = zoom * initialScale;

		d3.select('#graphics')
			.attr('transform', 'scale(' + newScale + ')');
	}
}

function visualizeTouches(d) {
	var touchColor = d3.scale.linear()
			.domain([0, 10])
			.range(['pink', 'darkred']);

	d3.select('svg')
		.selectAll('circle')
		.data(d)
		.enter()
		.append('circle')
		.attr('r', 60)
		.style('fill', function(d, i) {
			return touchColor(i);
		});

	d3.select('svg')
		.selectAll('circle')
		.data(d)
		.exit()
		.remove();

	d3.select('svg')
		.selectAll('circle')
		.attr('cx', function(d) {
			return d[0];
		})
		.attr('cy', function(d) {
			return d[1];
		});
}
*/


//=============stage 4: connect multi touch with lines========
/*
d3.select('svg').on('touchstart', touchStatus);
d3.select('svg').on('touchmove', touchStatus);

function touchStatus() {
	d3.event.preventDefault();
	d3.event.stopPropagation();

	d = d3.touches(this);

	visualizeTouches(d);

	var lines = [];
	if (d.length > 1) {
		for (x in d) {
			for (y in d) {
				if (y != x) {
					var lineObj = {
						source: d[x],
						target: d[y]
					};
					lines.push(lineObj);
				}
			}
		}
	}

	d3.select('svg')
		.selectAll('line')
		.data(lines)
		.enter()
		.append('line')
		.style('stroke', 'gray')
		.style('stroke-width', '5px');

	d3.select('svg')
		.selectAll('line')
		.attr('x1', function(d) {
			return d.source[0];
		})
		.attr('y1', function(d) {
			return d.source[1];
		})
		.attr('x2', function(d) {
			return d.target[0];
		})
		.attr('y2', function(d) {
			return d.target[1];
		});

	d3.select('svg')
		.selectAll('line')
		.data(lines)
		.exit()
		.remove();
}

function visualizeTouches(d) {
	var touchColor = d3.scale.linear()
			.domain([0, 10])
			.range(['pink', 'darkred']);

	d3.select('svg')
		.selectAll('circle')
		.data(d)
		.enter()
		.append('circle')
		.attr('r', 60)
		.style('fill', function(d, i) {
			return touchColor(i);
		});

	d3.select('svg')
		.selectAll('circle')
		.data(d)
		.exit()
		.remove();

	d3.select('svg')
		.selectAll('circle')
		.attr('cx', function(d) {
			return d[0];
		})
		.attr('cy', function(d) {
			return d[1];
		});
}
*/


//=============stage 3: single touch panning========
/*
var initialD;
var initialPosition;

d3.select('svg').on('touchstart', touchBegin);
d3.select('svg').on('touchmove', touchStatus);

var graphicsG = d3.select('svg')
		.append('g')
		.attr('id', 'graphics');

graphicsG.append('rect')
	.attr('width', 250)
	.attr('height', 50)
	.attr('x', 50)
	.attr('y', 50)
	.style('fill', 'red');

graphicsG.append('rect')
	.attr('width', 100)
	.attr('height', 400)
	.attr('x', 350)
	.attr('y', 400)
	.style('fill', 'gray');

function touchBegin() {
	d3.event.preventDefault();
	d3.event.stopPropagation();

	d = d3.touches(this);
	// console.log(d);

	if (d.length == 1) {
		initialD = d;
		initialPosition = d3.transform(d3.select('#graphics').attr('transform')).translate;
	}
}

function touchStatus() {
	d3.event.preventDefault();
	d3.event.stopPropagation();

	d = d3.touches(this);

	visualizeTouches(d);

	if (d.length == 1) {
		var newX = initialD[0][0] - d[0][0] - initialPosition[0];
		var newY = initialD[0][1] - d[0][1] - initialPosition[1];

		d3.select('#graphics')
			.attr('transform', 'translate(' + (-newX) + ',' + (-newY) + ')');
	}
}

function visualizeTouches(d) {
	var touchColor = d3.scale.linear()
			.domain([0, 10])
			.range(['pink', 'darkred']);

	d3.select('svg')
		.selectAll('circle')
		.data(d)
		.enter()
		.append('circle')
		.attr('r', 60)
		.style('fill', function(d, i) {
			return touchColor(i);
		});

	d3.select('svg')
		.selectAll('circle')
		.data(d)
		.exit()
		.remove();

	d3.select('svg')
		.selectAll('circle')
		.attr('cx', function(d) {
			return d[0];
		})
		.attr('cy', function(d) {
			return d[1];
		});
}
*/


//=============stage 2: display touch with red circle follow x,y position========
/*
d3.select('svg').on('touchstart', touchStatus);
d3.select('svg').on('touchmove', touchStatus);

function touchStatus() {
	d3.event.preventDefault();
	d3.event.stopPropagation();

	d = d3.touches(this);

	visualizeTouches(d);
}

function visualizeTouches(d) {
	var touchColor = d3.scale.linear()
			.domain([0, 10])
			.range(['pink', 'darkred']);

	d3.select('svg')
		.selectAll('circle')
		.data(d)
		.enter()
		.append('circle')
		.attr('r', 60)
		.style('fill', function(d, i) {
			return touchColor(i);
		});

	d3.select('svg')
		.selectAll('circle')
		.data(d)
		.exit()
		.remove();

	d3.select('svg')
		.selectAll('circle')
		.attr('cx', function(d) {
			return d[0];
		})
		.attr('cy', function(d) {
			return d[1];
		});
}
*/


//===============stage 1: display touch with x,y position========
/*
d3.select('#vizContainer')
	.append('div')
	.attr('id', 'touchStatus')
	.append('p')
	.html("Touch Status: ")
	.append('ol');

d3.select('svg').on('touchstart', touchStatus);
d3.select('svg').on('touchmove', touchStatus);

function touchStatus() {
	d3.event.preventDefault();
	d3.event.stopPropagation();

	d = d3.touches(this);


	d3.select('#touchStatus')
		.select('ol')
		.selectAll('li')
		.data(d)
		.exit()
		.remove;

	d3.select('#touchStatus')
		.select('ol')
		.selectAll('li')
		.data(d)
		.enter()
		.append('li');


	d3.select('#touchStatus')
		.select('ol')
		.selectAll('li')
		.html(function(d) {
			return d3.event.type + ' : ' + d;
		})
}
*/

