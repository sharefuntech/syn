/*
项目：中国开放型基金历史受益可视化

定义全局变量
－画布尺寸
－－svgCanvas，svgWidth，svgHeight，margin
－数据
－－rawData
－－dataView
－网页控件
－－radioSelected
－－selectedOption

渲染流程
－初始化画布 iniSvg()
－初始化数据 iniData()
－渲染雷达背景 rendaerRadar();
－－渲染雷达框架线条 rendaerRadarStructure
－－－渲染圆圈 rendaerRadarStructureCircle
－－－渲染半径射线 rendaerRadarStructureLine
－－渲染雷达数据标签 rendaerRadarLabel
－－－外框年月 rendaerRadarLabelTime
－－－内框净值 rendaerRadarLabelRevenue
－渲染数据线条 renderData
*/

var svg; //svg canvas
var vizG; //所有svg元素容器，偏移到margin圆点
var svgwWidth = 1000;
var svgHeight = 1000;
var svgMargins = {top:10, right:10, bottom:10, left:10};

//雷达背景参数
var numCircle = 15; //雷达圈数
var rInterpolateCircle = 50; //雷达圈之间间隔距离
var numYear = 16; //2001-1016,从第一支开放式基金成立开始计算
var startYear = 2001; //第一支开放式基金成立于2001年
var numLine = 36; //半径射线数量，36符合美感，不密不疏
var numMarkerCircle = 9;//黑色标签圈在第九圈

var animateTime = 20*1000; //动画总时间，用于线条展开

var sampleData = [d3.range(360).map(function (i) {
			return {x: i, y: Math.round(Math.random()*20 + 80)};
	})];

var rawData, dataView;

d3.csv('data/allFundQuoteLess.csv', function(data) {
	// console.log(data);
	rawData = data;
	dataView = iniData(rawData);
	// console.log(dataView);
	// 初始化画布
	iniSvg(svgwWidth, svgHeight);
	// 渲染雷达背景
	renderRadar(vizG, svgwWidth, svgHeight);
	//渲染canvas动态连接曲线
	// renderCanvas(dataView);
	// 渲染svg静态曲线
	dataView.forEach(function(d) {
		return renderData(vizG, d.values, d.key);
	});
	//渲染走时红点
	renderTick();
});

// function renderHighlightLine() {
// 	// body...
// }
//渲染走时红点
function renderTick(){
	var radarTickGroup = vizG.append('g')
			.attr('id', 'radarTickGroup')
			.attr('transform', 'translate(' + svgwWidth/2 + ',' + svgHeight/2 + ')');

	radarTickGroup.append('circle')
		.attr('id', 'radarTick')
		.attr('r', '5')
		.attr('cx', 0)
		.attr('cy', rInterpolateCircle*numMarkerCircle-5);

	var totalAngleNum = numYear; //按年跳动
	var singleAngle = Math.PI *2 / totalAngleNum;
	var angleCount = 1;
	var tickTime = animateTime / totalAngleNum;
	var tickTimeOut = tickTime * totalAngleNum;

	var tickInterval = window.setInterval(tickMove, tickTime);
	setTimeout(stopTick, tickTimeOut);

	function tickMove() {
		d3.select('#radarTick')
			.attr('cx', Math.sin(singleAngle*angleCount) * (rInterpolateCircle*numMarkerCircle-5))
			.attr('cy', -Math.cos(singleAngle*angleCount) * (rInterpolateCircle*numMarkerCircle-5));

		angleCount++;	
	}

	function stopTick() {
		clearInterval(tickInterval);
	}
}

//数据初始化，处理时间，添加必要属性
function iniData(data) {
	var dateFormat = d3.time.format('%Y/%m/%d');
	var yearFormat = d3.time.format('%Y');
	var monthFormat = d3.time.format('%m');
	var dayFormat = d3.time.format('%d');
	// 提取每个数值的年份
	data.forEach(function(d) {
		d.standardTime = dateFormat.parse(d.date);//将字符串转为标准时间格式
		// d.year = yearFormat(d.standardTime);
		// d.month = monthFormat(d.standardTime);
		// d.day = dayFormat(d.standardTime);
		d.totalValue = +d.totalValue;
	});

	var nestedData = d3.nest()
	    // .sortValues(d3.descending, function(d) { return d.standardTime; })
	    .key(function(d) { return d.fundName; })
	    .entries(data);

	nestedData.forEach(function(d) {
		d.values = _.sortBy(d.values, 'standardTime');
	});

	// console.log('fun iniData: ');
	console.log(nestedData);
	return nestedData;
}

// 渲染数据曲线
function renderData(vizG, data, dataLineClass){
	// 用于数据点技术配合动画
	var dataVirtualLength = data.length - 1;
	// console.log(dataVirtualLength);
	var dataVirtual = d3.range(dataVirtualLength);
	// 股价极值
	var quoteExtent = d3.extent(data, function(d) {
		return d.totalValue;
	});
	// console.log(quoteExtent);
	// 时间极值
	var dateExtent = d3.extent(data, function(d) {
		return d.standardTime;
	});
	// console.log(dateExtent);
	//设定日期范围
	var rScale = d3.scale.linear()
			// .domain(quoteExtent)
			.domain([0,9])
			.range([0, rInterpolateCircle*numMarkerCircle]);

	var fullDateTime = ['2001/1/1', '2016/12/31'];
	//当前数据日期跨度占元周角度
	var dateScaleAngleExtent = caculateDateAngleExtent(fullDateTime, dateExtent);
	var dateScaleAngle = d3.time.scale()
			.domain(dateExtent)
			.range(dateScaleAngleExtent);

	// console.log('dateScaleAngleExtent: ' + dateScaleAngleExtent);
	// 渲染数据曲线开始前需要delay的时间长度
	var startDelayPortion = dateScaleAngleExtent[0]/(Math.PI*2)*animateTime;

	// 填色根据延迟时间而定
	var strokeScale = d3.scale.linear()
			.domain([0, animateTime])
			.range(['#000', 'teal']);
	//===================================================================
	//单条曲线方式，不能实现delay动画 =======================================
	// var lineCircle = d3.svg.line.radial()
	// 		.radius(function (d) { return rScale(d.totalValue); })
	// 		.angle(function(d) { return dateScaleAngle(d.standardTime); }); 

	// vizG.append("g")
	// 	.attr('id', 'dataPath')
 //    	.attr("transform", "translate(" + svgwWidth / 2 + "," + svgHeight / 2 + ")")
	// 	.selectAll("path.dataPath")
	// 	.data([data])//需要存入数组进行操作
	// 	.enter()
	// 	.append("path")
	// 	.attr("class", "dataPath")
	// 	.attr("d", function (d) {
	// 		// console.log(d);
	// 		 return lineCircle(d); 
	// 	})
	// 	.on('mouseover', hightLightDataPath)
	// 	.on('mouseout', unHightLightDataPath);
	//---------------------------------------------------------------------

	//=====================================================================
	//多条曲线拼接方式，delay动画 ============================================
	var singleDelayTime = ((dateScaleAngleExtent[1]-dateScaleAngleExtent[0])/(Math.PI*2))*animateTime / data.length;

	vizG.append("g")
		.attr('id', 'dataLineGroup')
		.attr("transform", "translate(" + svgwWidth / 2 + "," + svgHeight / 2 + ")")
		.selectAll("line.dataLine")
		.data(dataVirtual)//需要存入数组进行操作
		.enter()
		.append('line')
		.on('mouseover', hightLightDataLine)
		.on('mouseout', unHightLightDataLine)
		.classed(dataLineClass, true)
		.classed("dataLine", true)
		.transition()
		.delay(function(d, i) {
			return i*singleDelayTime + startDelayPortion;
		})
		// .attr("class", 'dataLine')
		.attr('x1', function(d, i) {
			return Math.sin(dateScaleAngle(data[i].standardTime)) * rScale(data[i].totalValue);
		})
		.attr('y1', function(d, i) {
			return -Math.cos(dateScaleAngle(data[i].standardTime)) * rScale(data[i].totalValue);
		})
		.attr('x2', function(d, i) {
			return Math.sin(dateScaleAngle(data[i+1].standardTime)) * rScale(data[i+1].totalValue);
		})
		.attr('y2', function(d, i) {
			return -Math.cos(dateScaleAngle(data[i+1].standardTime)) * rScale(data[i+1].totalValue);
		})
		.style('stroke', strokeScale(startDelayPortion)); //根据时间生成不同的填色
	//---------------------------------------------------------------------
}

// canvas render
function renderCanvas(dataView) {
	//初始化canvas画布
	var canvas = d3.select('body')
			.append('canvas')
			.attr('width', 1020) //css设置不能控制canvas的大小，否则会出现自动放大模糊
			.attr('height', 1020);

	var context = d3.select('canvas')
			.node()
			.getContext('2d');

	context.strokeStyle = 'black';
	context.lineWidth = 1;

	dataView.forEach(function(d) {
		return renderSingleCanvasCurve(canvas, context, d.values);
	});
}

function renderSingleCanvasCurve(canvas, context, data) {
	// 用于数据点技术配合动画
	// var dataVirtualLength = data.length - 1;
	// // console.log(dataVirtualLength);
	// var dataVirtual = d3.range(dataVirtualLength);
	// 股价极值
	var totalValueExtent = d3.extent(data, function(d) {
		return d.totalValue;
	});
	// console.log(totalValueExtent);
	// 时间极值
	var dateExtent = d3.extent(data, function(d) {
		return d.standardTime;
	});
	// console.log(dateExtent);
	//设定日期范围
	var rScale = d3.scale.linear()
			// .domain(totalValueExtent)
			.domain([0,9])
			.range([0, rInterpolateCircle*numMarkerCircle]);

	var fullDateTime = ['2001/1/1', '2016/12/31'];
	//当前数据日期跨度占元周角度
	var dateScaleAngleExtent = caculateDateAngleExtent(fullDateTime, dateExtent);
	var dateScaleAngle = d3.time.scale()
			.domain(dateExtent)
			.range(dateScaleAngleExtent);

	// 渲染数据曲线开始前需要delay的时间长度
	var startDelayPortion = dateScaleAngleExtent[0]/(Math.PI*2)*animateTime;

	var dataLength = data.length;
	var i = 0;
	var animateCurveId;

	var xPosition;
	var yPosition;

	context.beginPath();
	context.strokeStyle = 'gray';
	context.lineWidth = 1;

	//test simple curve
	// context.moveTo(100, 100);
	// context.lineTo(300, 300);
	// context.lineTo(500, 300);
	// context.stroke();

	(function drawFrame(){
		animateCurveId = window.requestAnimationFrame(drawFrame, canvas);
		if (i < dataLength) {
			xPosition = Math.sin(dateScaleAngle(data[i].standardTime)) * rScale(data[i].totalValue) + svgwWidth/2 + svgMargins.left;;
			yPosition = -Math.cos(dateScaleAngle(data[i].standardTime)) * rScale(data[i].totalValue)+ svgHeight/2 + svgMargins.top;

			context.lineTo(xPosition, yPosition);
			context.stroke();

			i++;
		} else{
			window.cancelAnimationFrame(animateCurveId);
		}
	}());
}

// 单条曲线
function hightLightDataPath() {
	d3.select(this).classed('highLightLine', true);
}

function unHightLightDataPath() {
	d3.select(this).classed('highLightLine', false);
}

// 多条曲线拼接动画
function hightLightDataLine() {
	// console.log(d3.select(this).attr('class'));
	var hoverClass = d3.select(this).attr('class');
	var classList = hoverClass.split(' ');
	// console.log(classList[0]);
	d3.selectAll('.' + classList[0])
		.classed('highLightLine', true);
}

function unHightLightDataLine() {
	// console.log(d3.select(this).attr('class'));
	var hoverClass = d3.select(this).attr('class');
	var classList = hoverClass.split(' ');
	// console.log(classList[0]);
	d3.selectAll('.' + classList[0])
		.classed('highLightLine', false);
}

// 计算数据日期角度极值
function caculateDateAngleExtent(fullDate, targetDate) {
	var dateFormat = d3.time.format('%Y/%m/%d');

	var fullDateLengthStart = dateFormat.parse(fullDate[0]);
	var fullDateLengthEnd = dateFormat.parse(fullDate[1]);

	var fullDateLength = fullDateLengthEnd - fullDateLengthStart;

	var minDataDateLength = targetDate[0] - fullDateLengthStart;
	var maxDataDateLength = targetDate[1] - fullDateLengthStart;

	var dateStartAngle = Math.PI*2*minDataDateLength/fullDateLength;
	var dateEndAngle = Math.PI*2*maxDataDateLength/fullDateLength;

	var dateAngleExtent = [dateStartAngle, dateEndAngle];
	return dateAngleExtent;
}

// 渲染雷达背景
function renderRadar(vizG, svgwWidth, svgHeight) {
	
	// 渲染雷达框架线条
	rendaerRadarStructure(numCircle, rInterpolateCircle);
	// 渲染雷达数据标签
	rendaerRadarLabel(numCircle, rInterpolateCircle);

	function rendaerRadarStructure(numCircle, rInterpolateCircle){
		// 雷达结构容器
		var radarStructureGroup = vizG.append('g')
			.attr('id', 'radarStructureGroup');

		rendaerRadarStructureCircle(numCircle, rInterpolateCircle);//渲染雷达圆圈
		rendaerRadarStructureLine(numCircle, rInterpolateCircle); //渲染雷达辐条
		rendaerRadarStructureLineMarker(numCircle, rInterpolateCircle)//渲染雷达刻度

		//渲染雷达圆圈
		function rendaerRadarStructureCircle(numCircle, rInterpolateCircle) {
			// 雷达圆圈容器
			var radarStructureCricleGroup = radarStructureGroup
					.append('g')
					.attr('id', 'radarStructureCricleGroup')
					.attr('transform', 'translate(' + svgwWidth/2 + ',' + svgHeight/2 + ')');

			var dataRadarCircleVirtual = d3.range(numCircle);

			radarStructureCricleGroup.selectAll('circle.radarStructureCircle')
				.data(dataRadarCircleVirtual)
				.enter()
				.append('circle')
				.attr('class', 'radarStructureCircle')
				.attr('r', function(d, i) {
					return (i + 1) * rInterpolateCircle;
				});

			// 修正边缘黑色外框
			drawCircle(radarStructureCricleGroup, 'radarStructureCircleOutBlack', {x:0, y:0}, rInterpolateCircle * numMarkerCircle); //黑圈放在第九圈
		}
		
		//渲染雷达辐条
		function rendaerRadarStructureLine(numCircle, rInterpolateCircle) {
			// 雷达辐条容器
			var radarStructureLineGroup = radarStructureGroup
					.append('g')
					.attr('id', 'radarStructureLineGroup')
					.attr('transform', 'translate(' + svgwWidth/2 + ',' + svgHeight/2 + ')');

			var dataRadarLineVirtual = d3.range(numLine);
			// 雷达半径长度
			var rLenthFull = numCircle * rInterpolateCircle;
			// 每个半径射线夹角
			var angleInerpolate = Math.PI * 2 / numLine;

			radarStructureLineGroup.selectAll('line.radarStructureLine')
				.data(dataRadarLineVirtual)
				.enter()
				.append('line')
				.attr('class', 'radarStructureLine')
				.attr('x1', function(d, i) {
					return Math.cos(angleInerpolate * i) * rInterpolateCircle;
				}) //从内圈第一圈外开始
				.attr('y1', function(d, i) {
					return - Math.sin(angleInerpolate * i) * rInterpolateCircle;
				}) //从内圈第一圈外开始
				.attr('x2', function(d, i) {
					return + Math.cos(angleInerpolate * i) * rLenthFull;
				})
				.attr('y2', function(d, i) {
					return - Math.sin(angleInerpolate * i) * rLenthFull;
				});

			// 修正中心十字线-竖线
			drawLine(radarStructureLineGroup, 'radarStructureLine', {x:0, y:-rInterpolateCircle}, {x:0, y:rInterpolateCircle});
			// 修正中心十字线-横线
			drawLine(radarStructureLineGroup, 'radarStructureLine', {x:-rInterpolateCircle, y:0}, {x:rInterpolateCircle, y:0});

		}

		//渲染雷达外框刻度
		function rendaerRadarStructureLineMarker(numCircle, rInterpolateCircle){
			var radarStructureLineMarkerGroup = radarStructureGroup
					.append('g')
					.attr('id', 'radarStructureLineMarkerGroup')
					.attr('transform', 'translate(' + svgwWidth/2 + ',' + svgHeight/2 + ')');

			var dataRadarLineMarkerYearVirtual = d3.range(numYear);		
			var dataRadarLineMarkerMonthVirtual = d3.range(numYear*12);
			var angleLineMarkerYear = Math.PI*2/numYear;
			var angleLineMarkerMonth = Math.PI*2/(numYear*12);
			// 年刻度
			radarStructureLineMarkerGroup.selectAll('line.radarStructureLineMarkerYear')
				.data(dataRadarLineMarkerYearVirtual)
				.enter()
				.append('line')
				.attr('class', 'radarStructureLineMarkerYear')
				.attr('x1', function(d, i) {
					return Math.sin(angleLineMarkerYear * i) * rInterpolateCircle*numMarkerCircle;
				}) //从黑圈开始
				.attr('y1', function(d, i) {
					return - Math.cos(angleLineMarkerYear * i) * rInterpolateCircle*numMarkerCircle;
				}) //从黑圈开始
				.attr('x2', function(d, i) {
					return + Math.sin(angleLineMarkerYear * i) * (rInterpolateCircle*numMarkerCircle + 8);
				})
				.attr('y2', function(d, i) {
					return - Math.cos(angleLineMarkerYear * i) * (rInterpolateCircle*numMarkerCircle + 8);
				});

			//年标签旋转 translate not work
			svg.append('g')
				.attr('id', 'yearLabelGroupGroup')
				.selectAll('g.yearLabelGroup')
				.data(dataRadarLineMarkerYearVirtual)
				.enter()
				.append('g')
				.attr('class', 'yearLabelGroup');

			d3.selectAll('g.yearLabelGroup')
				.data(dataRadarLineMarkerYearVirtual)
				.append('text')
				.attr('class', 'radarMarkerYearLabel')
				.text(function(d, i) {
					return startYear+i;
				})
				.attr('transform', function(d, i) {
					// console.log(360 * i / numYear);
					return 'rotate(' + 360 * i / numYear  + ')';
				});

			d3.select('#yearLabelGroupGroup')
				.attr('transform', 'translate(' + (svgMargins.left + svgwWidth/2) + ',' + (svgMargins.top + svgHeight/2) + ')');

			d3.selectAll('g.yearLabelGroup')
				.data(dataRadarLineMarkerYearVirtual)
				.attr('transform', function(d, i) {
					return 'translate(' + (Math.sin(angleLineMarkerYear * i) * (rInterpolateCircle*numMarkerCircle + 25)) + ',' + (-Math.cos(angleLineMarkerYear * i) * (rInterpolateCircle*numMarkerCircle + 25)) + ')';
				});

			// 月刻度
			radarStructureLineMarkerGroup.selectAll('line.radarStructureLineMarkerMonth')
				.data(dataRadarLineMarkerMonthVirtual)
				.enter()
				.append('line')
				.attr('class', 'radarStructureLineMarkerMonth')
				.attr('x1', function(d, i) {
					return Math.sin(angleLineMarkerMonth * i) * rInterpolateCircle*numMarkerCircle;
				}) //从黑圈开始
				.attr('y1', function(d, i) {
					return - Math.cos(angleLineMarkerMonth * i) * rInterpolateCircle*numMarkerCircle;
				}) //从黑圈开始
				.attr('x2', function(d, i) {
					return + Math.sin(angleLineMarkerMonth * i) * (rInterpolateCircle*numMarkerCircle + 5);
				})
				.attr('y2', function(d, i) {
					return - Math.cos(angleLineMarkerMonth * i) * (rInterpolateCircle*numMarkerCircle + 5);
				});

			//月标签旋转 translate not work
			svg.append('g')
				.attr('id', 'monthLabelGroupGroup')
				.selectAll('g.monthLabelGroup')
				.data(dataRadarLineMarkerMonthVirtual)
				.enter()
				.append('g')
				.attr('class', 'monthLabelGroup');

			d3.selectAll('g.monthLabelGroup')
				.data(dataRadarLineMarkerMonthVirtual)
				.append('text')
				.attr('class', 'radarMarkerMonthLabel')
				.text(function(d, i) {
					return i%12 + 1;
				})
				.attr('transform', function(d, i) {
					// console.log(360 * i / numYear);
					return 'rotate(' + 360 * i / (numYear*12)  + ')';
				});

			d3.select('#monthLabelGroupGroup')
				.attr('transform', 'translate(' + (svgMargins.left + svgwWidth/2) + ',' + (svgMargins.top + svgHeight/2) + ')');

			d3.selectAll('g.monthLabelGroup')
				.data(dataRadarLineMarkerMonthVirtual)
				.attr('transform', function(d, i) {
					return 'translate(' + Math.sin(angleLineMarkerMonth * i) * (rInterpolateCircle*numMarkerCircle + 10) + ',' + (-Math.cos(angleLineMarkerMonth * i) * (rInterpolateCircle*numMarkerCircle + 10)) + ')';
				});


		} 

	}

	// 渲染雷达标签
	function rendaerRadarLabel(numCircle, rInterpolateCircle){
		// 雷达结构容器
		var radarLabelGroup = vizG.append('g')
			.attr('id', 'radarLabelGroup')
			.attr('transform', 'translate(' + svgwWidth/2 + ',' + svgHeight/2 + ')');;

		// rendaerRadarLabelTime(numCircle, rInterpolateCircle);//渲染雷达时间标签
		rendaerRadarLabelRevenue(numCircle, rInterpolateCircle); //渲染雷达收益标签

		//渲染雷达时间标签
		function rendaerRadarLabelTime(numCircle, rInterpolateCircle){
			// body...
		}

		//渲染雷达收益标签
		function rendaerRadarLabelRevenue(numCircle, rInterpolateCircle){
			var dataRadarLabelRevenueVirtual = d3.range(numCircle);

			radarLabelGroup.selectAll('text.radarLabelRevenue')
				.data(dataRadarLabelRevenueVirtual)
				.enter()
				.append('text')
				.attr('class', 'radarLabelRevenue')
				.attr('x', 0)
				.attr('y', function(d, i) {
					return -i*rInterpolateCircle + 10;
				})
				.text(function(d, i) {
					return i + '￥';
				});
		}
	}
}
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

//function utility==================================================
function drawLine(hostContainer, lineClass, p1, p2) {
	hostContainer.append('line')
				.attr('class', lineClass)
				.attr('x1', p1.x)
				.attr('y1', p1.y)
				.attr('x2', p2.x)
				.attr('y2', p2.y)
}

function drawCircle(hostContainer, circleClass, center, r) {
	hostContainer.append('circle')
				.attr('class', circleClass)
				.attr('x1', center.x)
				.attr('y1', center.y)
				.attr('r', r);
}

function drawLineWithData(hostContainer, lineClass, data) {
	// body...
}

function caculateDateAngle(date, data) {
	var dateFormat = d3.time.format('%Y/%m/%d');
	var yearFormat = d3.time.format('%Y');
	var monthFormat = d3.time.format('%m');
	var dayFormat = d3.time.format('%d');

	var standardTime = dateFormat.parse(date);

	var dateExtent = d3.extent(data, function(d) {
		return d.standardTime;
	});
	// console.log(dateExtent);

	var dateScaleAngle = d3.time.scale()
			.domain(dateExtent)
			.range([0, Math.PI*2]);

	console.log(dateScaleAngle(standardTime));
}

//计算日期间隔长度，以uts标准时间计算
function caculateDateLength(d1, d2) {
	var dateFormat = d3.time.format('%Y/%m/%d');
	// var yearFormat = d3.time.format('%Y');
	// var monthFormat = d3.time.format('%m');
	// var dayFormat = d3.time.format('%d');

	var standardTime_1 = dateFormat.parse(d1);
	var standardTime_2 = dateFormat.parse(d2);

	var dateLenth = standardTime_2 - standardTime_1;
	console.log(dateLenth);
	return dateLenth;
}






