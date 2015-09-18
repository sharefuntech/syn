// global setting=================================
var svgWidth = 1200,
	svgHeight = 2800;

var svg = d3.select('body')
		.append('svg')
		.attr('width', svgWidth)
		.attr('height', svgHeight)
		.append('g');

var lineGrid = svg.append('g').attr('id', 'lineGrid');

for (var i = 0; i < 7; i++) {
	lineGrid.append('line')
		.attr('class', 'canvasGrid')
		.attr('x1', 20)
		.attr('y1', 400*(i+1))
		.attr('x2', 1180)
		.attr('y2', 400*(i+1))
		.attr('stroke', '#999')
		.attr('stroke-width', .5);
};

// ==================================================
// no_1 手工画单条直线 ===================================
// ==================================================
var no_1 = svg.append('g')
		.attr('id', 'no_1')
		.attr('transform', 'translate(50, 50)');

no_1.append('text').text('No.1 手工画单条直线');

no_1.append('line')
		.attr('class', 'canvasGrid')
		.attr('x1', 0)
		.attr('y1', 150)
		.attr('x2', 300)
		.attr('y2', 150)
		.attr('stroke', 'teal')
		.attr('stroke-width', 5);

// ==================================================
// no_2 path生成单条直线 ===================================
// ==================================================
var no_2 = svg.append('g')
		.attr('id', 'no_2')
		.attr('transform', 'translate(450, 50)');
no_2.append('text').text('No.2 path生成单条直线');

var data_no_2 = [[{x: 0, y: 150}, {x: 100, y: 250}, {x: 200, y: 50}, {x: 300, y: 150}]];

var line_no_2 = d3.svg.line()
		.x(function(d) { return d.x; })
		.y(function(d) { return d.y; });

no_2.selectAll('path.line_no_2')
	.data(data_no_2)
	.enter()
	.append('path')
	.attr('class', 'line_no_2')
	.attr('d', function(d) {
		return line_no_2(d);
	})
	.attr('fill', 'none')
	.attr('stroke', 'teal')
	.attr('stroke-width', 5);


// ==================================================
// no_3 path生成多条直线 ===================================
// ==================================================
var no_3 = svg.append('g')
		.attr('id', 'no_3')
		.attr('transform', 'translate(850, 50)');
no_3.append('text').text('No.3 path生成多条直线');

var xScale_no_3 = d3.scale.linear()
	.domain([0,10])
	.range([0, 300]);
var yScale__no_3 = d3.scale.linear()
	.domain([0,10])
	.range([300, 0]);

var data_no_3 = [
		[{x: 0, y: 5},{x: 1, y: 9},{x: 2, y: 7},
    	{x: 3, y: 5},{x: 4, y: 3},{x: 6, y: 4},
    	{x: 7, y: 2},{x: 8, y: 3},{x: 9, y: 2}],
    	d3.range(10).map(function(i){
		    return {x: i, y: Math.cos(i) + 5};
		})
	];

var line_no_3 = d3.svg.line()
		.x(function (d) { return xScale_no_3(d.x); })
		.y(function (d) { return yScale__no_3(d.y); });

no_3.selectAll("path.line_no_3")
	.data(data_no_3)
	.enter()
	.append("path")
	.attr("class","line_no_3")
	.attr("d", function (d) {
		return line_no_3(d);
	})
	.attr('fill', 'none')
	.attr('stroke', 'teal')
	.attr('stroke-width', 5);

// ==================================================
// no_4 interpolate 单条直线 (basis )=================
// ==================================================
var no_4 = svg.append('g')
		.attr('id', 'no_4')
		.attr('transform', 'translate(50, 450)');
no_4.append('text').text('No.4 interpolate 单条直线');

var data_no_4_1 = [[{x: 150, y: 300}, {x: 250, y: 250}, {x: 300, y: 100}]];
var data_no_4_2 = [[{x: 150, y: 300}, {x: 50, y: 250}, {x: 0, y: 100}]];

var line_no_4 = d3.svg.line()
		.x(function(d) { return d.x; })
		.y(function(d) { return d.y; })
		.interpolate('basis');

no_4.selectAll('path.line_no_4_1')
	.data(data_no_4_1)
	.enter()
	.append('path')
	.attr('class', 'line_no_4_1')
	.attr('d', function(d) {
		return line_no_4(d);
	})
	.attr('fill', 'none')
	.attr('stroke', 'teal')
	.attr('stroke-width', 5);

no_4.selectAll('path.line_no_4_2')
	.data(data_no_4_2)
	.enter()
	.append('path')
	.attr('class', 'line_no_4_2')
	.attr('d', function(d) {
		return line_no_4(d);
	})
	.attr('fill', 'none')
	.attr('stroke', 'teal')
	.attr('stroke-width', 5);

// ==================================================
// no_5 手工绘制单条贝塞尔曲线 ==========================
// ==================================================
var no_5 = svg.append('g')
		.attr('id', 'no_5')
		.attr('transform', 'translate(450, 450)');
no_5.append('text').text('No.5 手工绘制单条贝塞尔曲线');

//jsBezier framework
/*var point_no_5 = {x:150, y:150};
var curve_no_5 = [{x:0, y:0}, {x:50, y:100}, {x:120, y:120}];
var distance_no_5 = jsBezier.distanceFromCurve(point_no_5, curve_no_5);
console.log(distance_no_5);*/

var curve_data_1_no5 = "M0,300 T150,200 T300,0"; //这些点不是控制句柄点
 
var curve_1_no5 = no_5.append("path")
			 .attr("d",curve_data_1_no5)
			 .attr("fill","none")
			 .attr("stroke","teal")
			 .attr("stroke-width", 5);

// ==================================================
// no_6 动画绘制贝塞尔曲线 ==========================
// ==================================================
var no_6 = svg.append('g')
		.attr('id', 'no_6')
		.attr('transform', 'translate(850, 450)');
no_6.append('text').text('No_6 动画绘制贝塞尔曲线');

var data_no_6 = [[0, 300], [160, 300], [300, 200], [300, 0]]; //是控制句柄点

var line_no_6 = d3.svg.line()
    .x(function(d) { return d[0]; })
    .y(function(d) { return d[1]; })
    .interpolate("basis");

no_6.append('path')
    .attr("d", line_no_6(data_no_6))
    .attr("stroke", "teal")
    .attr("stroke-width", 5)
    .attr("fill", "none")
    .transition()
    .duration(2000)
    .attrTween("stroke-dasharray", function() {
        var len = this.getTotalLength();
        return function(t) { return (d3.interpolateString("0," + len, len + ",0"))(t) };
    });

// ==================================================
// no_7 鼠标绘制直线 ==========================
// ==================================================
var no_7 = svg.append('g')
		.attr('id', 'no_7')
		.attr('transform', 'translate(50, 850)');
no_7.append('text').text('No_7 鼠标绘制直线');

//不可行，因为g没有探测鼠标等event的边界，无法侦测mousedown等行为
/*var line_no_7;
var vis_no_7 = no_7.append('g')
	.on('mousedown', mousedown)
	.on('mouseup', mouseup);

function mousedown() {
	console.log('mouse donw on g');
	var m = d3.mouse(this);
	line_no_7 = vis_no_7.append('line')
		.attr('x1', m[0])
		.attr('y1', m[1])
		.attr('x2', m[0])
		.attr('y2', m[1])
		.attr('stroke', 'teal')
		.attr('stroke-width', 5);

	vis_no_7.on('mousemove', mousemove);
}

function mouseup() {
	vis_no_7.on('mousemove', null);
}

function mousemove() {
	var m = d3.mouse(this);
	line_no_7.attr('x2', m[0])
		.attr('y2', m[1]);
}*/

//works on global svg canvas
var vis_no_7 = d3.select('svg')
	.on('mousedown', mousedown)
	.on('mouseup', mouseup);

var line_no_7;

function mousedown() {
	var m = d3.mouse(this);
	line_no_7 = vis_no_7.append('line')
		.attr('x1', m[0])
		.attr('y1', m[1])
		.attr('x2', m[0])
		.attr('y2', m[1])
		.attr('stroke', 'teal')
		.attr('stroke-width', 5);

	vis_no_7.on('mousemove', mousemove);
}

function mouseup() {
	vis_no_7.on('mousemove', null);
}

function mousemove() {
	var m = d3.mouse(this);
	line_no_7.attr('x2', m[0])
		.attr('y2', m[1]);
}