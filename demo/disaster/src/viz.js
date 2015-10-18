/*
//全局变量初始化
var svgwWidth, svgHeight;
var margins; //{top: 20, right: 0.1, bottom;20, left:0.1} 如果屏幕大于1200，左右边距比例调大
var selectedOption; //控件状态存储
var mouseTooltip;
var dataView //充当每次视图改变的数据载体

//画布初始化
iniSvg(width, height, margins);

//数据初始化，处理时间，添加必要属性
iniData();

//注册表单控制事件:triggerControlChange();
setControlsAction();

//默认执行一次
//执行控制状态变化
//triggerControlChange();
--getControlsState(); //获取已经改变的selectedOption
--render(selectedOption); //由getControlsState传递全局变量新值selectedOption

//获取表单状态,返回selectedOption
getControlsState();

//渲染图表
render(selectedOption); //渲染视图，视图的类别取决于selectedOption的值
--changeDataView(); //处理数据,根据表单状态selectedOption改变数据nest状态，数据本身不改变
--renderLabels(); //标签
----renderTopLabel(); //标签-顶部标签
----renderLeftLabel(); ////标签-左侧标签
--renderPoints();
--renderTooltip();
*/
var viz = {};
var countFlag = 0;

var svg; //svg canvas
var svgwWidth = 1000;
var svgHeight = 600;
var svgMargins = {top:20, right:50, bottom:10, left:50};

var dataView; //nest之后的数据
var rawData; //未nest之前到数据
var selectedOption; //控件状态存储

var mouseTooltip = d3.select("body")
        .append("div")
        .attr("class", "mouseTooltip")
        .style("opacity", 0);

d3.csv('data/geo_disaster.csv', function(data) {
	//画布初始化，初始宽度加上左右边距，初始高度加上上下边距，因此svg画框原点即是边距的上、左点
	iniSvg(svgwWidth, svgHeight, svgMargins);

	//数据初始化，处理时间，添加必要属性
	rawData = data;
	iniData(rawData);
	// console.log(dataView);

	//注册表单控制事件
	setControlsAction('#selectContainer', triggerControlChange);

	//默认执行一次，包括获取默认表单状态，渲染视图
	// triggerControlChange执行后返回的是函数，需要调用apply执行
	triggerControlChange('#selectContainer').apply();

});

function iniSvg(svgwWidth, svgHeight) {
	svg = d3.select('#vizContainer')
		.append('svg')
		.attr('id', 'svgCanvas')
		.attr('width', svgwWidth + svgMargins.right + svgMargins.left)
		.attr('height', svgHeight + svgMargins.top + svgMargins.bottom);

	return svg;	
}

//数据初始化，处理时间，添加必要属性
function iniData(data) {
	var dateFormat = d3.time.format('%Y-%m-%d');
	var yearFormat = d3.time.format('%Y');
	var monthFormat = d3.time.format('%m');
	// 提取每个数值的年份
	data.forEach(function(d) {
		d.standardTime = dateFormat.parse(d.date);//将字符串转为标准时间格式
		d.year = yearFormat(d.standardTime);
		d.month = monthFormat(d.standardTime);
	});

	// console.log('fun iniData: ');
	// console.log(data);
	return data;
}

//注册表单控制事件:triggerControlChange();
function setControlsAction(selectDivId, handlerFunction) {
	d3.select(selectDivId)
		.on('change', handlerFunction(selectDivId));
}

//执行控制状态变化
function triggerControlChange(selectDivId) {
	return function() {
		getControlsState(selectDivId);
		render(selectedOption); 
	}
}

//获取表单状态,返回selectedOption
function getControlsState(selectDivId) {
	var selectedOptionIndex = d3.select(selectDivId)[0][0].selectedIndex;
	selectedOption = d3.select(selectDivId)[0][0][selectedOptionIndex].value;

	console.log('fun getControlsState: ' + selectedOption);
	return selectedOption;
}

//渲染图表
function render(selectedOption) {
	//处理数据,根据表单状态selectedOption改变数据nest状态，数据本身不改变
	changeDataView(selectedOption); 
	// //渲染标签
	renderLabels(); 
	// //渲染数据点
	renderPoints();
	// //渲染鼠标浮动提示框
	// renderTooltip();
}

//处理数据,根据表单状态selectedOption改变数据nest状态，数据本身不改变
function changeDataView(selectedOption) {
	dataView = d3.nest()
		.key(function(d) {
			return d[selectedOption];
		})
		.key(function(d) { //按季度分类
			// return d.month; //暂时直接用已知变量
			if (d.month>=1 && d.month<=3) {
				return 1;
			} else if (d.month>=4 && d.month<=6) {
				return 2;
			} else if (d.month>=7 && d.month<=9) {
				return 3;
			} else if (d.month>=10 && d.month<=12) {
				return 4;
			}
		})
		.entries(rawData);

	// console.log(dataView);
}

//渲染所有标题
function renderLabels() {
	//删除上次渲染内容
	if (d3.select('#labelsGroup')) {
		d3.select('#labelsGroup').remove();
		console.log('old label remove');
	}
	svg.append('g').attr('id', 'labelsGroup');
	// countFlag++;
	// console.log(countFlag);
	renderTopLabel();
	renderLeftLabel();
}

//渲染顶部标题
function renderTopLabel() {
	//顶部标题内容，提取自dataview
	var topLabelContent = getNestedDataKeys(dataView);
	// console.log(topLabelContent);
	//顶部标题内容字符串个数
	var numTopLabel = topLabelContent.length;
	//顶部标题位置
	var leftGapTopLabelGroup = 50; //左侧空出边距，配合leftLabel
	var xPositionTopLabelGroup = svgMargins.left+ leftGapTopLabelGroup;
	var yPositionTopLabelGroup = svgMargins.top;
	//顶部标题容器，#labelsGroup来自renderLabels()函数预先生成
	// console.log(d3.select('#labelsGroup'));
	var topLabelGroup = d3.select('#labelsGroup')
			.append('g')
			.attr('id', 'topLabelGroup')
			.attr('transform', 'translate(' + xPositionTopLabelGroup + ',' + yPositionTopLabelGroup + ')');
	//顶部标题容器实际宽度，减去左边距
	var widthTopLabelCanvas = svgwWidth - leftGapTopLabelGroup;
	var heightTopLabelCanvas = 20;

	//顶部标题容器每一块宽度，除于numTopLabel
	var singleTopLabelBlockWidth = widthTopLabelCanvas / numTopLabel;

	topLabelGroup.selectAll('text.titleTop')
		.data(topLabelContent)
		.enter()
		.append('text')
		.attr('class', 'titleTop')
		.attr('transform', function(d, i) {
			//加0.5半个singleTopLabelBlockWidth，居中效果
			return 'translate(' + ((i+0.5)*singleTopLabelBlockWidth) + ', 0)';
		})
		.text(function(d) {
			return d;
		});
}

//渲染左侧标题
function renderLeftLabel() {
	var leftlabelContent = ['第一季度','第二季度','第三季度','第四季度'];
	var topGapLeftLabelGroup = 50; //顶侧空出边距，配合leftLabel
	var gapIntervolLeftLabelGroup = 100; //左侧标题每个间隙
	var xPositionLeftLabelGroup = svgMargins.left;
	var yPositionLeftLabelGroup = svgMargins.top + topGapLeftLabelGroup;

	var leftLabelGroup = d3.select('#labelsGroup')
			.append('g')
			.attr('id', 'leftLabelGroup')
			.attr('transform', 'translate(' + xPositionLeftLabelGroup + ',' + yPositionLeftLabelGroup + ')');

	leftLabelGroup.selectAll('text.titleLeft')
		.data(leftlabelContent)
		.enter()
		.append('text')
		.attr('class', 'titleLeft')
		.attr('transform', function(d, i) {
			return 'translate(0, ' + i*gapIntervolLeftLabelGroup + ')';
		})
		.text(function(d) {
			return d;
		});
}

//所有数据点
function renderPoints() {
	//删除上次渲染数据点
	if (d3.select('#pointsGroup')) {
		d3.select('#pointsGroup').remove();
		console.log('old pointsGroup remove');
	}
	svg.append('g').attr('id', 'pointsGroup');
	// 根据下拉列表选项渲染数据点类型
	if (selectedOption == 'year') {
		drawForce();
	} else if (selectedOption == 'province') {
		drawPoints();
	}
}

//渲染力图类型数据点
function drawForce() {
	var leftGapForceGroup = 50; //左侧空出边距，配合leftLabel
	var xPositionForceGroup = svgMargins.left+ leftGapForceGroup;
	var yPositionForceGroup = svgMargins.top;

	var numHorizontalForce = dataView.length;
	var singleForceClusterWidth = (svgwWidth - leftGapForceGroup) / numHorizontalForce;
	var singleForceClusterHeight = 100;

	//数据点总容器
	var allFroceGroup = d3.select('#pointsGroup')
			.attr('transform', 'translate(' + xPositionForceGroup + ',' + yPositionForceGroup + ')');
	//循环渲染每幅力图
	for(var i=0; i<dataView.length; i++) {
		// console.log(dataView[i].values);
		dataView[i].values.forEach(function(d, j) {
			// console.log(d);
			// console.log(d.values.length);
			// console.log(d.values);
			//移动单个力图
			var forceGroupColumn = allFroceGroup.append('g')
					.attr('transform', function(e) {
						return 'translate(' + i * singleForceClusterWidth + ',' + j * singleForceClusterHeight + ')';
					});
			//绘制单个力图
			drawSingleForceCluster(forceGroupColumn, d.values, singleForceClusterWidth, singleForceClusterHeight);
		});
	}
}

//渲染单幅力图类型数据点
function drawSingleForceCluster(placeHolder, data, singleForceClusterWidth, singleForceClusterHeight) {
	var numForcePoints = data.length;
	var nodes = d3.range(numForcePoints).map(function(i) {
	  return {index: i, value: data[i]};
	});
	// console.log(nodes);
	var rScale = d3.scale.linear()
		.domain([10, 30])
		.range([5, 12])
		.clamp(true);

	var force = d3.layout.force()
		    .nodes(nodes)
		    .size([singleForceClusterWidth, singleForceClusterHeight])
		    .gravity([0.4])
		    .on("tick", tick)
		    .start();

	// var node = placeHolder.append('g')
	// 		.selectAll("circle.dataPoints")
	// 	    .data(nodes)
	// 		.enter()
	// 		.append("circle")
	// 	    .attr("class", "dataPoints")
	// 	    .attr("cx", function(d) { return d.x; })
	// 	    .attr("cy", function(d) { return d.y; })
	// 	    .attr("r", function(d) {
	// 	    	return rScale(+d.value.death);
	// 	    })
	// 	    .on('mouseover', showMouseTooltip)
	// 	    .on('mouseout', hideMouseTooltip)
	// 	    .on("mousedown", function() { d3.event.stopPropagation(); });

	//start try use blod image=================================
	var node = placeHolder.append('g')
			.selectAll("image.blod")
		    .data(nodes)
			.enter()
			.append('image')
		    .attr("class", "blod")
		    .attr("x", function(d) { return d.x; })
		    .attr("y", function(d) { return d.y; })
		    .attr('xlink:href', 'images/blod.png')
			.attr('width', function(d) {
			    	return rScale(+d.value.death)*3 + 'px';
			})
			.attr('height', function(d) {
			    	return rScale(+d.value.death)*3 + 'px';
			})
		    .on('mouseover', showMouseTooltip)
		    .on('mouseout', hideMouseTooltip)
		    .on("mousedown", function() { d3.event.stopPropagation(); });

	//end try use blod image=================================

	node.style("opacity", 1e-6)
		.transition()
	    .duration(1000)
	    .style("opacity", 0.8); //半透明效果

	d3.select("body")
	    .on("mousedown", mousedown);

	//针对图像版，所以是x，y
	function tick(e) {
		node.attr("x", function(d) { return d.x; })
	    	.attr("y", function(d) { return d.y; });
	}

	//针对图像版，所以是cx，cy
	// function tick(e) {
	// 	node.attr("cx", function(d) { return d.x; })
	//     	.attr("cy", function(d) { return d.y; });
	// }

	function mousedown() {
	  nodes.forEach(function(o, i) {
	    o.x += (Math.random() - .5) * 40;
	    o.y += (Math.random() - .5) * 40;
	  });
	  force.resume();
	}
}

//出现提示框
function showMouseTooltip(d, i) {
	mouseTooltip.style("opacity", 1)
		.style('z-index', 10);

	mouseTooltip.html(generateMouseTipContent (d.value))
        .style("left", function() {
        	// if (d3.event.pageX < screenWidth/2) {
        	// 	return d3.event.pageX + "px";
        	// } else{
        	// 	return (d3.event.pageX - 70) + "px";
        	// }
        	return d3.event.pageX + "px";
        })
        .style("top", (d3.event.pageY) + "px");
}

// 隐藏提示框
function hideMouseTooltip(d, i) {
	// 隐藏提示框
	mouseTooltip.style("opacity", 0);
}

//生成提示框内容
function generateMouseTipContent (d) {
	return "<div id='dateTooltip'>" + d.date + "</div>" + 
	"<div id='deathTooltip'>死亡" + d.death + "人</div>" +
	"<div id='placeTooltip'>" + d.place + "</div>" +
	"<div class='lineTooltip'><hr id='lineInTooltip'></div>" +
	"<div class='innerTitleTooltip'>事故描述</div>" +
	"<div id='descriptionTooltip'>" + d.desc + "</div>" +
	"<div class='lineTooltip'><hr id='lineInTooltip'></div>" +
	"<div class='innerTitleTooltip'>事故责任方</div>" +
	"<div id='responsibleTooltip'>" + d.responsible + "</div>";
}

//渲染圆点类型数据点
function drawPoints() {
	
}
//utility tools ===================================
// 获取nesteddata数据的第一层key
function getNestedDataKeys(data) {
	var dataKeys = [];
	data.forEach(function(d) {
		dataKeys.push(d.key);
	});
	// console.log('output from function getNestedDataKeys: ' + dataKeys);
	return dataKeys;
}


