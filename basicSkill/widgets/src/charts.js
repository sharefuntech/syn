// global setting=================================
var svgWidth = 1200,
	svgHeight = 2800;

var dataSeq = [1,2,3,4,5,6,7];

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

// 基本图表类型：条型、折线、散点、堆积、饼图
// no1 条型 ===============================
//========================================
var no_1 = svg.append('g')
		.attr('id', 'no_1')
		.attr('transform', 'translate(50, 50)');

var num_bar_no_1 = 7; //条型数量
var data_no_1 = d3.range(num_bar_no_1)
		.map(function(i) { return Math.ceil(Math.random() * 50);});
// console.log(data_no_1);

var chart_width_no_1 = 300;
var chart_height_no_1 = 200;

var bar_padding_no_1 = 5; //条型间宽度
var bar_width_no_1 = (chart_width_no_1 - bar_padding_no_1 * (num_bar_no_1 - 1)) / num_bar_no_1; //条宽

var extent_data_no_1 = d3.extent(data_no_1, function(d) { return d;}); //条型数据最大小值
// console.log(extent_data_no_1);
var yScale_no_1 = d3.scale.linear() //条型高度比例尺
		.domain(extent_data_no_1)
		.range([chart_height_no_1 / 5, chart_height_no_1]);

no_1.append('rect') //图表背景框
	.attr('id', 'chart_background_no_1')
	.attr('width', chart_width_no_1)
	.attr('height', chart_height_no_1)
	.attr('fill', '#eee');

no_1.selectAll('rect.bar_no_1')
	.data(data_no_1)
	.enter()
	.append('rect')
	.attr('class', 'bar_no_1')
	.attr('width', bar_width_no_1)
	.attr('height', function(d) {
		return yScale_no_1(d);
	})
	.attr('x', function(d, i) {
		return (bar_width_no_1 + bar_padding_no_1) * i;
	})
	.attr('y', function(d) {
		return chart_height_no_1 - yScale_no_1(d);
	})
	.attr('fill', "teal");

//========================================
//no2 折线 ===============================
//========================================
var no_2 = svg.append('g')
		.attr('id', 'no_2')
		.attr('transform', 'translate(450, 50)');

var num_line_no_2 = 3; //线条数量
var num_points_line_no_2 = 7; //每条线的数据点
var data_no_2 = [];

function generateLineData(numberRange) { //用函数每次生成一条线的随机数
	var data = d3.range(numberRange) //每条线的数据
		.map(function(i) { return {'x': i, 'y': Math.ceil(Math.random() * 10)};});
	return data;
}
// var data_line_no_2 = d3.range(num_points_line_no_2) //每条线的数据
// 		.map(function(i) { return {'x': i, 'y': Math.ceil(Math.random() * 10)};});

for (var i = 0; i < num_line_no_2; i++) { //构造包含三条线的对象的数组
	data_no_2.push(generateLineData(num_points_line_no_2));
};
// console.log(data_no_2);

var max_data_no_2 = d3.max(data_no_2, function(d) { return d3.max(d, function(j) { return j['y']});});
var min_data_no_2 = d3.min(data_no_2, function(d) { return d3.min(d, function(j) { return j['y']});}); 
// console.log(min_data_no_2);

var chart_width_no_2 = 300;
var chart_height_no_2 = 200;

var xScale_no_2 = d3.scale.linear() //条型宽度比例尺
		.domain([0, (num_points_line_no_2 - 1)])
		.range([0, chart_width_no_2]);

var yScale_no_2 = d3.scale.linear() //条型高度比例尺
		.domain([max_data_no_2, min_data_no_2])
		.range([chart_height_no_2 / 5, chart_height_no_2]);

var linePath = d3.svg.line() //线类型函数
		.x(function(d) {return xScale_no_2(d.x)}) //按比例缩放x
		.y(function(d) {return yScale_no_2(d.y)})
		.interpolate('basis');

no_2.append('rect') //图表背景框
	.attr('id', 'chart_background_no_2')
	.attr('width', chart_width_no_2)
	.attr('height', chart_height_no_2)
	.attr('fill', '#eee');

no_2.selectAll('path.line')
	.data(data_no_2)
	.enter()
	.append('path')
	.attr('d', function(d) {
		return linePath(d);
	})
	.attr('stroke', 'teal')
	.attr('stroke-width', 3)
	.attr('fill', 'none');
//========================================
//no3 散点 ===============================
//========================================
var no_3 = svg.append('g')
		.attr('id', 'no_3')
		.attr('transform', 'translate(850, 50)');

var chart_width_no_3 = 300;
var chart_height_no_3 = 200;

var num_scatter_no_3 = 7; //散点数量

var data_no_3 = d3.range(num_scatter_no_3) //散点数据
		.map(function(i) { return {'x': Math.random() * 10, 'y': Math.random() * 10 }; });

var x_extent_data_no_3 = d3.extent(data_no_3, function(d) { return d.x;}); 
var y_extent_data_no_3 = d3.extent(data_no_3, function(d) { return d.y;}); 

var xScale_no_3 = d3.scale.linear() //宽度比例尺
		.domain(x_extent_data_no_3)
		.range([0, chart_width_no_3]);

var yScale_no_3 = d3.scale.linear() //高度比例尺
		.domain(y_extent_data_no_3)
		.range([0, chart_height_no_3]);

no_3.append('rect') //图表背景框
	.attr('id', 'chart_background_no_3')
	.attr('width', chart_width_no_3)
	.attr('height', chart_height_no_3)
	.attr('fill', '#eee');

no_3.selectAll('circle.scatter')
	.data(data_no_3)
	.enter()
	.append('circle')
	.attr('class', 'scatter')
	.attr('cx', function(d) {
		return xScale_no_3(d.x);
	})
	.attr('cy', function(d) {
		return yScale_no_3(d.y);
	})
	.attr('fill', 'teal')
	.attr('r', 5);

//========================================
//no4 clipPath遮罩 兼气泡图=================	
//========================================
var no_4 = svg.append('g')
		.attr('id', 'no_4')
		.attr('transform', 'translate(50, 450)');

var chart_width_no_4 = 300;
var chart_height_no_4 = 200;

// <clipPath id='clipPath_no_4'>
// 	<rect x='0' y='0' width='300' height='200'></rect>
// </clipPath> 

var num_scatter_no_4 = 7; //散点数量

var data_no_4 = d3.range(num_scatter_no_4) //散点数据
		.map(function(i) { return {'x': Math.random() * 10, 'y': Math.random() * 10 }; });

var x_extent_data_no_4 = d3.extent(data_no_4, function(d) { return d.x;}); 
var y_extent_data_no_4 = d3.extent(data_no_4, function(d) { return d.y;}); 

var xScale_no_4 = d3.scale.linear() //宽度比例尺
		.domain(x_extent_data_no_4)
		.range([0, chart_width_no_4]);

var yScale_no_4 = d3.scale.linear() //高度比例尺
		.domain(y_extent_data_no_4)
		.range([0, chart_height_no_4]);

no_4.append('rect') //图表背景框
	.attr('id', 'chart_background_no_4')
	.attr('width', chart_width_no_4)
	.attr('height', chart_height_no_4)
	.attr('fill', '#eee');

no_4.append('clipPath') //图表遮罩
	.attr('id', 'clipPath_no_4')
	.append('rect')
	.attr('x', 0)
	.attr('y', 0)
	.attr('width', chart_width_no_4)
	.attr('height', chart_height_no_4);

no_4.append('g')
	.attr('id', 'circle_g_no_4')
	.attr('clip-path', 'url(#clipPath_no_4)')
	.selectAll('circle.scatter')
	.data(data_no_4)
	.enter()
	.append('circle')
	.attr('class', 'scatter')
	.attr('cx', function(d) {
		return xScale_no_4(d.x);
	})
	.attr('cy', function(d) {
		return yScale_no_4(d.y);
	})
	.attr('fill', 'teal')
	.attr('fill-opacity', .7)
	.attr('r', function(d) {
		return (d.x + d.y) * 5;
	});
//========================================
//no_5 饼图 ===============================
//========================================
// (function(){
// 	var flag = '1';
// 	console.log(flag);
// })();

var no_5 = svg.append('g')
		.attr('id', 'no_5')
		.attr('transform', 'translate(450, 450)');

var num_pie_slice_no_5 = 3; //饼块数量

var data_no_5 = d3.range(num_pie_slice_no_5) //数据
		.map(function(i) {
			return Math.ceil(Math.random() * 10);
		});
// console.log(data_no_5);
var pieLayout = d3.layout.pie().sort(function(k) {
			return k.id; //根据id排序，保持扇型按数据先后顺序排列
		})
		.startAngle(- Math.PI / 2)//画半圆
		.endAngle(Math.PI / 2);
var pieData = pieLayout(data_no_5);
var pieArc = d3.svg.arc();
pieArc.outerRadius(100);

no_5.append('rect') //图表背景框
	.attr('id', 'chart_background_no_5')
	.attr('width', 300)
	.attr('height', 200)
	.attr('fill', '#eee');

no_5.append('g')
	.attr('transform', 'translate(150, 150)' )
	.selectAll('path')
	.data(pieData)
	.enter()
	.append('path')
	.attr('d', pieArc)
	.attr('stroke', 'white')
	.attr('stroke-width', 2)
	.style('fill', 'teal');

//========================================
//no_6 堆积 ===============================
//========================================
var no_6 = svg.append('g')
		.attr('id', 'no_6')
		.attr('transform', 'translate(850, 450)');

var chart_width_no_6 = 300;
var chart_height_no_6 = 200;

var num_line_no_6 = 3; //线条数量
var num_points_line_no_6 = 7; //每条线的数据点
var data_no_6 = [];

for (var i = 0; i < num_line_no_6; i++) { //构造包含三条线的对象的数组
	data_no_6.push(generateLineData(num_points_line_no_6));
};
// console.log(data_no_6[0].length);
// console.log(d3.range(7));
var stack = d3.layout.stack();
stack(data_no_6); //堆积数据
console.log(data_no_6);

var max_data_no_6 = d3.max(data_no_6, function(d) {
		return d3.max(d, function(j) {
			return j.y0 + j.y;
		});
	});
// console.log(max_data_no_6);

var xScale_no_6 = d3.scale.ordinal() //条型宽度比例尺
		.domain(d3.range(data_no_6[0].length)) //export [0...6]
		.rangeRoundBands([0, chart_width_no_6], 0.05); //第二个参数是宽度百分比，非像素大小

var yScale_no_6 = d3.scale.linear() //条型高度比例尺
		.domain([0, max_data_no_6])
		.range([0, chart_height_no_6]);

no_6.append('rect') //图表背景框
	.attr('id', 'chart_background_no_6')
	.attr('width', chart_width_no_6)
	.attr('height', chart_height_no_6)
	.attr('fill', '#eee');

data_no_6.forEach(function(d) {
	no_6.append('g')
		.selectAll('rect')
		.data(d)
		.enter()
		.append('rect')
		.attr('x', function(k, i) {
			return xScale_no_6(i);
		})
		.attr('y', function(k) {
			return -yScale_no_6(k.y0) + chart_height_no_6 - yScale_no_6(k.y);
		})
		.attr('height', function(k) {
			return yScale_no_6(k.y);
		})
		.attr('width', xScale_no_6.rangeBand())
		.attr('fill', 'teal')
		.attr('stroke', 'white');
});

