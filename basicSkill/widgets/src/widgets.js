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
//no.1 ==============================================================
// 红色圆点 竖排 旁边数字
//===================================================================
var no_1 = svg.append('g')
		.attr('id', 'no_1')
		.attr('transform', 'translate(50, 50)');

var data_no_1 = [39, 35, 17, 10];

var rScale_no_1 = d3.scale.linear()
		.domain([10, 40])
		.range([5, 25]);

var strokeScale_no_1 = d3.scale.linear()
		.domain([10, 40])
		.range([1, 10]);
//background
// no_1.append('rect')
// 	.attr('width', 300)
// 	.attr('height', 400)
// 	.attr('fill', '#FDF7E9');

no_1.append('g')
	.selectAll('circle.no_1')
 	.data(data_no_1)
 	.enter()
 	.append('circle')
 	.attr('class', 'no_1')
 	.attr('cx', 150)
 	.attr('cy', function(d, i) {
 		return 80 * (i + 1) - 50;
 	})
 	.attr('r', function(d) {
 		return rScale_no_1(d);
 	})
 	.attr('fill', '#EA2D31')
 	.attr('fill-opacity', .9)
 	.attr('stroke', '#ED6A6E')
 	.attr('stroke-opacity', .6)
 	.attr('stroke-width', function(d) {
 		return strokeScale_no_1(d);
 	});

no_1.append('g')
	.selectAll('text.no_1')
 	.data(data_no_1)
 	.enter()
 	.append('text')
 	.attr('class', 'no_1')
 	.attr('x', 200)
 	.attr('y', function(d, i) {
 		return 80 * (i + 1) + rScale_no_1(d) + strokeScale_no_1(d)/2 - 50;
 	})
 	.attr('fill', '#333')
 	.attr('font-family', 'Arial Narrow')
 	.attr('font-size', 40)
 	.attr('font-weight', 600)
 	.text(function(d) {
 		return d + '%';
 	});

no_1.append('g')
	.selectAll('text.no_1_cat')
 	.data(data_no_1)
 	.enter()
 	.append('text')
 	.attr('class', 'no_1_cat')
 	.attr('x', 70)
 	.attr('y', function(d, i) {
 		return 80 * (i + 1) + rScale_no_1(d) + strokeScale_no_1(d)/2 - 50;
 	})
 	.attr('fill', '#333')
 	.attr('font-family', 'Arial')
 	.attr('font-size', 12)
 	.attr('font-weight', 800)
 	.text(function(d, i) {
 		return 'Cate: ' + i;
 	});
 
no_1.append('g')
	.selectAll('line.no_1')
 	.data(data_no_1)
 	.enter()
 	.append('line')
 	.attr('class', 'no_1')
 	.attr('x1', 70)
 	.attr('y1', function(d, i) {
 		return 80 * (i + 1) + rScale_no_1(d) + strokeScale_no_1(d)/2 + 10 - 50;
 	})
 	.attr('x2', 265)
 	.attr('y2', function(d, i) {
 		return 80 * (i + 1) + rScale_no_1(d) + strokeScale_no_1(d)/2 + 10 - 50;
 	})
 	.attr('stroke', '#666')
 	.attr('stroke-width', 3);


//no.2 ==============================================================
// 红色条形图 横排 旁边数字 开头图标
//===================================================================
var no_2 = svg.append('g')
		.attr('id', 'no_2')
		.attr('transform', 'translate(450, 50)');

var data_no_2 = [5, 17, 30, 123, 165];
var barWidthScale_no_2 = d3.scale.linear()
		.domain([0, 170])
		.range([5, 150]);

no_2.append('g')
	.selectAll('image.no_2')
 	.data(data_no_2)
 	.enter()
 	.insert('image')
 	.attr('class', 'no_2')
 	.attr('xlink:href', function(d, i) {
 		return 'image/country_' + (i + 1) + '.png';
 	})
 	.attr('width', 23)
 	.attr('height', 15)
 	.attr('x', 0)
 	.attr('y', function(d, i) {
 		return 30 * i;
 	});

no_2.append('g')
	.selectAll('rect.no_2')
 	.data(data_no_2)
 	.enter()
 	.append('rect')
 	.attr('width', function(d) {
 		return barWidthScale_no_2(d);
 	})
 	.attr('height', 10)
 	.attr('fill', '#333')
 	.attr('x', 30)
 	.attr('y', function(d, i) {
 		return 30 * i + 5;
 	});

no_2.append('g')
	.selectAll('text.no_2_cat')
 	.data(data_no_2)
 	.enter()
 	.append('text')
 	.attr('class', 'no_2_cat')
 	.attr('text-anchor', 'start')
 	.attr('x', function(d) {
 		return barWidthScale_no_2(d) + 35;
 	})
 	.attr('y', function(d, i) {
 		return 30 * i + 15;
 	})
 	.attr('fill', '#333')
 	.attr('font-family', 'Arial')
 	.attr('font-size', 12)
 	.attr('font-weight', 800)
 	.text(function(d, i) {
 		return 'Cate: ' + d;
 	});

no_2.append('g')
	.selectAll('text.no_2_cmmt')
 	.data(data_no_2)
 	.enter()
 	.append('text')
 	.attr('class', 'no_2_cmmt')
 	.attr('text-anchor', 'start')
 	.attr('x', 30)
 	.attr('y', function(d, i) {
 		return 30 * i + 3;
 	})
 	.attr('fill', '#333')
 	.attr('font-family', 'Arial')
 	.attr('font-size', 8)
 	.attr('font-weight', 800)
 	.text('Comment Notes');


//no.3 ==============================================================
// 红圈白字
//===================================================================
var no_3 = svg.append('g')
		.attr('id', 'no_3')
		.attr('transform', 'translate(850, 50)');

var data_no_3 = [5, 171, 3089];
var data_no_3_cmt = ['年', '次', '人'];

no_3.append('g')
	.selectAll('circle.no_3_circle')
 	.data(data_no_3)
 	.enter()
 	.append('circle')
 	.attr('class', 'no_3_circle')
 	.attr('cx', function(d, i) {
 		return 100 * i + 40;
 	})
 	.attr('cy', 50)
 	.attr('r', 40)
 	.attr('fill', '#EA2D31');

no_3.append('g')
	.selectAll('text.no_3_text')
 	.data(data_no_3)
 	.enter()
 	.append('text')
 	.attr('class', 'no_3_text')
 	.attr('text-anchor', 'middle')
 	.attr('x', function(d, i) {
 		return 100 * i + 40;
 	})
 	.attr('y', 55)
 	.attr('fill', '#fff')
 	.attr('font-family', 'Arial')
 	.attr('font-size', 24)
 	.attr('font-weight', 800)
 	.text(function(d) {
 		return d;
 	});

no_3.append('g')
	.selectAll('text.no_3_text_cmt')
 	.data(data_no_3_cmt)
 	.enter()
 	.append('text')
 	.attr('class', 'no_3_text_cmt')
 	.attr('text-anchor', 'middle')
 	.attr('x', function(d, i) {
 		return 100 * i + 40;
 	})
 	.attr('y', 75)
 	.attr('fill', '#fff')
 	.attr('font-family', 'Microsoft Hahei')
 	.attr('font-size', 16)
 	.attr('font-weight', 800)
 	.text(function(d) {
 		return d;
 	});


//no.4 ==============================================================
// 带logo表格
//===================================================================
var no_4 = svg.append('g')
		.attr('id', 'no_4')
		.attr('transform', 'translate(50, 450)');

var data_no_4_title = ['GDP PER CAPITA*', '1800', '2009'];
var data_no_4 = [
	{'country':'USA', 'color': '#4376AB', '1800': 1343, '2009': 41256},
	{'country': 'GERMANY', 'color': '#90BD6A', '1800': 1643, '2009': 31191},
	{'country': 'JAPAN', 'color': '#FED55B', '1800': 896, '2009': 29681},
	{'country': 'BRAZIL', 'color': '#CE8E52', '1800': 509, '2009': 9570},
	{'country': 'CHINA', 'color': '#BE5344', '1800': 992, '2009': 7226},
	{'country': 'CONGO', 'color': '#B82578', '1800': 394, '2009': 359}
];
var data_no_4_line = [1,1,1,1,1,1,1];
// console.log(data_no_4['USA']['2009']);

var no_4_tableHead = no_4.append('g')
	.attr('id', 'no_4_tableHead');

addText('#no_4_tableHead', 'start', 0, 0, '#333', 'Arial', 16, 800, 'GDP PER CAPITA*');
addText('#no_4_tableHead', 'end', 250, 0, '#333', 'Arial', 16, 800, '1800');
addText('#no_4_tableHead', 'end', 320, 0, '#333', 'Arial', 16, 800, '2009');

function addText(textHolderId, textAnchor, xPosition, yPositon, fillColor, fontFamily, fontSize, fontWeight, textContent) {
	d3.select(textHolderId)
		.append('text')
		.attr('text-anchor', textAnchor)
	 	.attr('x', xPosition)
	 	.attr('y', yPositon)
	 	.attr('fill', fillColor)
	 	.attr('font-family', fontFamily)
	 	.attr('font-size', fontSize)
	 	.attr('font-weight', fontWeight)
		.text(textContent);
}

no_4.append('g')
	.selectAll('circle.no_4')
 	.data(data_no_4)
 	.enter()
 	.append('circle')
 	.attr('class', 'no_4')
 	.attr('cx', 10)
 	.attr('cy', function(d, i) {
 		return 30 * (i + 1);
 	})
 	.attr('r', 7)
 	.attr('fill', 'none')
 	.attr('stroke', function(d) {
 		return d['color'];
 	})
 	.attr('stroke-width', 4);

 no_4.append('g')
	.selectAll('text.no_4_text_country')
 	.data(data_no_4)
 	.enter()
 	.append('text')
 	.attr('class', 'no_4_text_country')
 	.attr('text-anchor', 'start')
 	.attr('x', 30)
 	.attr('y', function(d, i) {
 		return 30 * (i + 1) + 6;
 	})
 	.attr('fill', '#666')
 	.attr('font-family', 'Arial')
 	.attr('font-size', 14)
 	.attr('font-weight', 800)
 	.text(function(d) {
 		return d['country'];
 	});

no_4.append('g')
	.selectAll('text.no_4_text_1800')
 	.data(data_no_4)
 	.enter()
 	.append('text')
 	.attr('class', 'no_4_text_1800')
 	.attr('text-anchor', 'end')
 	.attr('x', 250)
 	.attr('y', function(d, i) {
 		return 30 * (i + 1) + 6;
 	})
 	.attr('fill', '#666')
 	.attr('font-family', 'Arial')
 	.attr('font-size', 14)
 	.attr('font-weight', 300)
 	.text(function(d) {
 		return '$' + d['1800'];
 	});

 no_4.append('g')
	.selectAll('text.no_4_text_2009')
 	.data(data_no_4)
 	.enter()
 	.append('text')
 	.attr('class', 'no_4_text_2009')
 	.attr('text-anchor', 'end')
 	.attr('x', 320)
 	.attr('y', function(d, i) {
 		return 30 * (i + 1) + 6;
 	})
 	.attr('fill', '#666')
 	.attr('font-family', 'Arial')
 	.attr('font-size', 14)
 	.attr('font-weight', 300)
 	.text(function(d) {
 		return '$' + d['2009'];
 	});

no_4.append('g')
	.selectAll('line.no_4')
 	.data(data_no_4_line)
 	.enter()
 	.append('line')
 	.attr('class', 'no_4')
 	.attr('x1', 0)
 	.attr('y1', function(d, i) {
 		return 30 * i + 13;
 	})
 	.attr('x2', 320)
 	.attr('y2', function(d, i) {
 		return 30 * i + 13;
 	})
 	.attr('stroke', '#999')
 	.attr('stroke-width', 1);

//no.5 ==============================================================
// 环形百分比
//===================================================================
var no_5 = svg.append('g')
		.attr('id', 'no_5')
		.attr('transform', 'translate(450, 450)');

var rangeData = d3.range(5).map(function(i) {
			return [(i + 1), (9 - i)];
	});

var color_no_5 = ['steelblue','#ccc'];

rangeData.forEach(function(d, i) {
	var pieLayout = d3.layout.pie().sort(function(k) {
		return k.id; //根据id排序，保持扇型按数据先后顺序排列
	});
	var pieData = pieLayout(d);
	var pieChart = d3.svg.arc();
	pieChart.outerRadius(30)
		.innerRadius(25);

	no_5.append('g')
		.attr('transform', 'translate(' + (80 * i) + ', 0)' )
		.selectAll('path')
		.data(pieData)
		.enter()
		.append('path')
		.attr('d', pieChart)
		.style('fill', function(d, j) {
		return color_no_5[j];
	});

	no_5.append('text')
		.attr('transform', 'translate(' + (80 * i -10) + ', 5)' )
		.attr('font-family', 'Arial Narrow')
		.attr('font-weight', 600)
		.text(d[0]/(d[0] + d[1])*100 + '%');

});

//no.6 ==============================================================
// 直线生成动画
//===================================================================
var no_6 = svg.append('g')
		.attr('id', 'no_6')
		.attr('transform', 'translate(850, 450)');

no_6.append('line')
	.attr('stroke', 'darkred')
	.attr('stroke-width', 10)
	.attr({
		x1: 0,
		y1: 5,
		x2: 5,
		y2: 5
	})
	.transition()
	.duration(2500)
	.attr({
		x2: 300,
		y2: 5
	});

//no.7 ==============================================================
// 半圆，类似柱状图功能
//===================================================================
var no_7 = svg.append('g')
		.attr('id', 'no_7')
		.attr('transform', 'translate(50, 850)');
var text_g_no_7 = no_7.append('g')
		.attr('id', 'text_g_no_7');

var num_pie = 5;
var data_r_no_7 = d3.range(num_pie).map(function(i) { return Math.ceil(Math.random() * 50);});
var sum_data_r_no_7 = d3.sum(data_r_no_7);
var position_step_pie =  (sum_data_r_no_7 * 2) / (num_pie);
// console.log(position_step_pie);
// console.log(data_r_no_7);
var data_pie_no_7 = [1, 0];
// var data_pie_no_7 = d3.range(10).map(function(i) { return [1,0]});
// console.log(data_pie_no_7);

data_r_no_7.forEach(function(d, i) {
	var pieLayout = d3.layout.pie().sort(function(k) {
			return k.id; //根据id排序，保持扇型按数据先后顺序排列
		})
		.startAngle(- Math.PI / 2)
		.endAngle(Math.PI / 2);
	var pieData = pieLayout(data_pie_no_7);
	var pieArc = d3.svg.arc();
	pieArc.outerRadius(d);

	no_7.append('g')
		.attr('transform', 'translate(' + (position_step_pie * i) + ', 50)' )
		.selectAll('path')
		.data(pieData)
		.enter()
		.append('path')
		.attr('d', pieArc)
		.style('fill', '#666')
		.style('fill-opacity', .5);

	text_g_no_7.append('text')
		.attr('transform', 'translate(' + (position_step_pie * i) + ', 60)' )
		.attr('font-family', 'Arial Narrow')
		.attr('font-size', 10)
		.attr('text-anchor', 'middle')
		.text('No.' + (i + 1));
});

//no.8 ==============================================================
// 灰色方块叠放
//===================================================================
var no_8 = svg.append('g')
		.attr('id', 'no_8')
		.attr('transform', 'translate(450, 850)');

var data_no_8 = d3.range(10);
// console.log(data_no_8);
var fillColorScale_no_8 = d3.scale.linear()
		.domain([0, 9])
		.range(['#eee', '#000']);
var strokeColorScale_no_8 = d3.scale.linear()
		.domain([0, 9])
		.range(['#ddd', '#111']);

no_8.append('g')
	.selectAll('rect.no_8')
	.data(data_no_8)
	.enter()
	.append('rect')
	.attr('class', 'no_8')
	.transition()
	.duration(2000)
	.attr('width', 150)
	.attr('height', 150)
	.attr('x', function(d, i) {
		return 75+ (Math.random() - 0.5) * 50;
	})
	.attr('y', function(d, i) {
		return 100 - i * 15;
	})
	.attr('transform', function(d, i) {
		return 'rotate(' + (Math.random()) * 30 + '), skewX(' + (Math.random() - .5) * 10 + ')';
	})
	.attr('fill', function(d, i) {
		return fillColorScale_no_8(i);
	})
	.attr('fill-opacity', .4)
	.attr('stroke', function(d, i) {
		return strokeColorScale_no_8(i);
	})
	.attr('stroke-opacity', .6)
	.attr('stroke-width', 1);


//no.9 ==============================================================
// 彩色半圆叠放
//===================================================================
var no_9 = svg.append('g')
		.attr('id', 'no_9')
		.attr('transform', 'translate(850, 850)');
// 上半部分半圆个数
var num_pie_9 = 6;
// 半圆绑定的数据，创建半圆
var data_pie_no_9 = [1, 0];
// 上半部分半圆各自半径
var data_r_no_9 = d3.range(num_pie_9).map(function(i) { return 150 - (i * 25);});

// 绘制上半部分半圆
var fillColorScale_no_9 = d3.scale.linear()
		.domain([0, 5])
		.range(['#E1C5C0', '#740515'])
		.interpolate(d3.interpolateHsl);

var fillColorScale_no_9_2 = d3.scale.linear()
		.domain([0, 5])
		.range(['#8FA1C5', '#052137'])
		.interpolate(d3.interpolateHsl);

//上半部分半圆
data_r_no_9.forEach(function(d, j) {
	var pieLayout = d3.layout.pie().sort(function(k) {
			return k.id; //根据id排序，保持扇型按数据先后顺序排列
		})
		.startAngle(- Math.PI / 2)
		.endAngle(Math.PI / 2);
	var pieData = pieLayout(data_pie_no_9);
	var pieArc = d3.svg.arc();
	pieArc.outerRadius(d);

	no_9.append('g')
		.attr('transform', 'translate(' + d + ', 150)' )
		.selectAll('path')
		.data(pieData)
		.enter()
		.append('path')
		.attr('d', pieArc)
		.attr('fill', '#fff')
		.transition()
		.delay(j * 100)
		.duration(1000)
		.style('fill', function() {
			// console.log(j); //j是外圈data_r_no_9的计数
			return fillColorScale_no_9(j);
		})
		.style('fill-opacity', .7);
});

//下半部分半圆，左边
data_r_no_9.forEach(function(d, j) {
	var pieLayout = d3.layout.pie().sort(function(k) {
			return k.id; //根据id排序，保持扇型按数据先后顺序排列
		})
		.startAngle(Math.PI / 2)
		.endAngle(Math.PI / 2 * 3);
	var pieData = pieLayout(data_pie_no_9);
	var pieArc = d3.svg.arc();
	pieArc.outerRadius(d);

	no_9.append('g')
		.attr('transform', 'translate(' + d + ', 150)' )
		.selectAll('path')
		.data(pieData)
		.enter()
		.append('path')
		.attr('d', pieArc)
		.attr('fill', '#fff')
		.transition()
		.delay(j * 100)
		.duration(1000)
		.style('fill', function() {
			// console.log(j); //j是外圈data_r_no_9的计数
			return fillColorScale_no_9_2(j);
		})
		.style('fill-opacity', .8);
});

//下半部分半圆，右边
data_r_no_9.forEach(function(d, j) {
	var pieLayout = d3.layout.pie().sort(function(k) {
			return k.id; //根据id排序，保持扇型按数据先后顺序排列
		})
		.startAngle(Math.PI / 2)
		.endAngle(Math.PI / 2 * 3);
	var pieData = pieLayout(data_pie_no_9);
	var pieArc = d3.svg.arc();
	pieArc.outerRadius(d);

	no_9.append('g')
		.attr('transform', 'translate(' + (300 - d) + ', 150)' )
		.selectAll('path')
		.data(pieData)
		.enter()
		.append('path')
		.attr('d', pieArc)
		.attr('fill', '#fff')
		.transition()
		.delay(j * 100)
		.duration(1000)
		.style('fill', function() {
			// console.log(j); //j是外圈data_r_no_9的计数
			return fillColorScale_no_9_2(j);
		})
		.style('fill-opacity', .2);
});

//no.10 ==============================================================
// 灰色半圆嵌套
//===================================================================
var no_10 = svg.append('g')
		.attr('id', 'no_10')
		.attr('transform', 'translate(50, 1250)');
// 上半部分半圆个数
var num_pie_10 = 8;
// 半圆绑定的数据，创建半圆
var data_pie_no_10 = [1, 0];
// 上半部分半圆各自半径
var data_r_no_10 = d3.range(num_pie_10).map(function(i) { return 70 + (i * 10);});

data_r_no_10.forEach(function(d, j) {
	var pieLayout = d3.layout.pie().sort(function(k) {
			return k.id; //根据id排序，保持扇型按数据先后顺序排列
		})
		.startAngle(- Math.PI / 2 -(Math.PI/10)*j)
		.endAngle(Math.PI / 2 -(Math.PI/10)*j);
	var pieData = pieLayout(data_pie_no_9);
	var pieArc = d3.svg.arc();
	pieArc.outerRadius(d);

	no_10.append('g')
		.attr('transform', 'translate(150, 150)' )
		.selectAll('path')
		.data(pieData)
		.enter()
		.append('path')
		.attr('d', pieArc)
		.attr('fill', '#fff')
		.transition()
		.delay(j * 500)
		.duration(5000)
		.style('fill', '#000')
		.style('fill-opacity', .2);
});

//no.11 ==============================================================
// 彩色圆形堆叠
//===================================================================
var no_11 = svg.append('g')
		.attr('id', 'no_11')
		.attr('transform', 'translate(450, 1250)');

var num_circle_11 = 10;

var data_no_11 = d3.range(10).map(function(i) {
	return Math.random() * 75;
});

var fillColorScale_no_11 = d3.scale.linear()
		.domain([0, (num_circle_11 - 1)])
		.range(['#27AFB0', '#0B3366'])
		.interpolate(d3.interpolateHsl);

var fillColorScale_no_11_2 = d3.scale.linear()
		.domain([0, (num_circle_11 - 1)])
		.range(['#A12A7C', '#0B3366'])
		.interpolate(d3.interpolateHsl);

function randomSeed() {
	return Math.random() - 0.5;
}

no_11.selectAll('circle.no_11')
	.data(data_no_11)
	.enter()
	.append('circle')
	.attr('class', 'no_11')
	.attr('cx', function() {
		return 150 + randomSeed() * 150;
	})
	.attr('cy', function() {
		return 150 + randomSeed() * 150;
	})
	.attr('r', 0)
	.attr('fill', '#fff')
	.transition()
	.delay(function(d, i) {
		return i * 100;
	})
	.duration(1000)
	.attr('r', function(d) {
		return d;
	})
	// .style('fill', '#C4D6DC')
	.style('fill', function(d, i) {
		return fillColorScale_no_11(i);
	})
	.style('fill-opacity', .3);

no_11.selectAll('circle.no_11_2')
	.data(data_no_11)
	.enter()
	.append('circle')
	.attr('class', 'no_11_2')
	.attr('cx', function() {
		return 150 + randomSeed() * 200;
	})
	.attr('cy', function() {
		return 150 + randomSeed() * 200;
	})
	.attr('r', 0)
	.attr('fill', '#fff')
	.transition()
	.delay(function(d, i) {
		return i * 100;
	})
	.duration(1000)
	.attr('r', function(d) {
		return d;
	})
	// .attr('fill', '#EACFDE')
	.style('fill', function(d, i) {
		return fillColorScale_no_11_2(i);
	})
	.style('fill-opacity', .3);










