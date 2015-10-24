var svg; //svg canvas
var vizG; //所有svg元素容器，偏移到margin圆点
var svgwWidth = 1000;
var svgHeight = 1000;
var svgMargins = {top:10, right:10, bottom:10, left:10};

var numDataPoints = 100;
var sampleData = [d3.range(numDataPoints).map(function (i) {
			return {x: i*10, y: (Math.sin(i)*100 + 500)};
	})];
console.log(sampleData);

var data = d3.range(numDataPoints-1);

iniSvg(svgwWidth, svgHeight);

//==========================================================
// 旋转文字，圆周环绕
// var data_2 = d3.range(6);

// vizG.append('g')
// 	.attr("id", "holder")
// 	.selectAll('g.textGroup')
// 	.data(data_2)
// 	.enter()
// 	.append('g')
// 	.attr("class", "textGroup")

// d3.selectAll('g.textGroup')
// 	.data(data_2)
// 	.append('text')
// 	.attr("class", "dataText")
// 	.text(function(d) {
// 		return d;
// 	})
// 	.attr('transform', function(d, i) {
// 		return 'rotate(' + 15 * i + ')';
// 	});

// d3.select('#holder')
// 	.attr('transform', function(d, i) {
// 		return 'translate(' + 300 + ',' + 300 + ')';
// 	});

// d3.selectAll('g.textGroup')
// 	.data(data_2)
// 	.attr('transform', function(d, i) {
// 		return 'translate(' + 50 * i + ',' + 50 * i + ')';
// 	});

//==========================================================
//动画生成曲线，delay效果
vizG.append("g")
	.attr('id', 'dataLineGroup')
	// .attr("transform", "translate(" + svgwWidth / 2 + "," + svgHeight / 2 + ")")
	.selectAll("line.dataLine")
	.data(sampleData)//需要存入数组进行操作
	.enter()
	.append('line')
	.transition()
	.delay(function(d, i) {
		return i*100;
	})
	// .duration(500)
	.attr("class", "dataLine")
	.attr('x1', function(d, i) {
		return sampleData[0][i].x;
	})
	.attr('y1', function(d, i) {
		return sampleData[0][i].y;
	})
	.attr('x2', function(d, i) {
		return sampleData[0][i+1].x;
	})
	.attr('y2', function(d, i) {
		return sampleData[0][i+1].y;
	});

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