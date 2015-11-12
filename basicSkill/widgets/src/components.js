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
// no_1 x轴 linear ===================================
// ==================================================
var no_1 = svg.append('g')
		.attr('id', 'no_1')
		.attr('transform', 'translate(50, 50)');
no_1.append('text').text('x轴 linear');

var data_no_1 = d3.range(7)
		.map(function(i) { return Math.ceil(Math.random() * 10);});

var chart_width_no_1 = 300;
var chart_height_no_1 = 200;

var xScale_no_1 = d3.scale.linear()
		.domain([0, 7])
		.range([0, chart_width_no_1]);

var xAxis_no_1 = d3.svg.axis()
		.scale(xScale_no_1)
		.orient('bottom')
		.ticks(9) //不能精确制定ticks个数 非常奇怪
		.tickFormat(function(d) {
			return d + '年'; //中文刻度
		});

no_1.append('g')
	.attr('class', 'axis')
	.attr('transform', 'translate(0, 150)')
	.call(xAxis_no_1);


// ==================================================
// no_2 y轴 linear ==================================
// ==================================================
var no_2 = svg.append('g')
		.attr('id', 'no_2')
		.attr('transform', 'translate(450, 50)');
no_2.append('text').text('y轴 linear');

var data_no_2 = d3.range(7)
		.map(function(i) { return Math.ceil(Math.random() * 10);});

var chart_width_no_2 = 300;
var chart_height_no_2 = 200;

var xScale_no_2 = d3.scale.linear()
		.domain([0, 7])
		.range([chart_height_no_2, 0]);

var xAxis_no_2 = d3.svg.axis()
		.scale(xScale_no_2)
		.orient('left');

no_2.append('g')
	.attr('class', 'axis')
	.attr('transform', 'translate(150, 0)')
	.call(xAxis_no_2);

// ==================================================
// no_3 时间x轴 中文刻度===============================
// ==================================================
var no_3 = svg.append('g')
		.attr('id', 'no_3')
		.attr('transform', 'translate(850, 50)');
no_3.append('text').text('时间x轴 中文刻度');

var chart_width_no_3 = 300;
var chart_height_no_3 = 200;

// var timeFormater_no_3 = d3.time.format('%Y-%m-%d');
var month_timeFormater_no_3 = d3.time.format('%m');
var year_timeFormater_no_3 = d3.time.format('%Y');

var xScale_no_3 = d3.time.scale()
		.domain([new Date(2015, 6, 6), new Date(2015, 9, 9)])
		.range([0, chart_width_no_3]);

var xAxis_no_3 = d3.svg.axis()
		.scale(xScale_no_3)
		.orient('bottom')
		.tickFormat(function(d) { //时间刻度不能单纯使用匿名函数定制刻度
			return year_timeFormater_no_3(d) + '年' + month_timeFormater_no_3(d) + '月'; //中文刻度
		})
		.ticks(3);

no_3.append('g')
	.attr('class', 'axis')
	.attr('transform', 'translate(0, 150)')
	.call(xAxis_no_3);

// ==================================================
// no_4 x轴 ordinal =================================
// ==================================================
var no_4 = svg.append('g')
		.attr('id', 'no_4')
		.attr('transform', 'translate(50, 450)');
no_4.append('text').text('x轴 ordinal');

var data_no_4 = ['c', 'b', 'a', 'a+', 'a++'];


var chart_width_no_4 = 300;
var chart_height_no_4 = 200;

var xScale_no_4 = d3.scale.ordinal()
		.domain(d3.range(data_no_4.length)) //需要一个数组形式作为ordinal输入
		.rangePoints([0, chart_width_no_4]);

var axis_xScale_no_4 = d3.scale.ordinal() //坐标轴比例尺需要用标签作为输入
		.domain(data_no_4)
		.rangePoints([0, chart_width_no_4]);

var xAxis_no_4 = d3.svg.axis()
		.scale(axis_xScale_no_4)
		.orient('bottom');

no_4.append('g')
	.attr('class', 'axis')
	.attr('transform', 'translate(0, 300)')
	.call(xAxis_no_4);

no_4.append('g')
	.selectAll('circle.no_4')
	.data(data_no_4)
	.enter()
	.append('circle')
	.attr('class', 'no_4')
	.attr('fill', 'teal')
	.attr('cx', function(d, i) {
		return xScale_no_4(i);
	})
	.attr('cy', 250)
	.attr('r', function(d, i) {
		return (i + 1) * 5 ;
	});


// ==================================================
//no_5 没有坐标轴线 ===================================
// ==================================================
var no_5 = svg.append('g')
		.attr('id', 'no_5')
		.attr('transform', 'translate(450, 450)');
no_5.append('text').text('没有坐标轴线 x轴 linear');

var chart_width_no_5 = 300;
var chart_height_no_5 = 200;

var xScale_no_5 = d3.scale.linear()
		.domain([0, 7])
		.range([0, chart_width_no_5]);

var xAxis_no_5 = d3.svg.axis()
		.scale(xScale_no_5)
		.orient('bottom')
		.tickFormat(function(d) {
			return d + '年'; //中文刻度
		});

no_5.append('g')
	.attr('class', 'axis_no_path') //样式定义在css文件中 通过class操纵
	.attr('transform', 'translate(0, 150)')
	.call(xAxis_no_5);

// ==================================================
//no_6 没有ticks线 ===================================
// ==================================================
var no_6 = svg.append('g')
		.attr('id', 'no_6')
		.attr('transform', 'translate(850, 450)');
no_6.append('text').text('没有坐标轴线 x轴 linear');

var chart_width_no_6 = 300;
var chart_height_no_6 = 200;

var xScale_no_6 = d3.scale.linear()
		.domain([0, 7])
		.range([0, chart_width_no_6]);

var xAxis_no_6 = d3.svg.axis()
		.scale(xScale_no_6)
		.orient('bottom')
		.tickFormat(function(d) {
			return d + '年'; //中文刻度
		});

no_6.append('g')
	.attr('class', 'axis_no_ticks') //样式定义在css文件中 通过class操纵
	.attr('transform', 'translate(0, 150)')
	.call(xAxis_no_6);

// ==================================================
// 网格线 ============================================
// ==================================================

