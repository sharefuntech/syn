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

var sampleData = [d3.range(360).map(function (i) {
			return {x: i, y: Math.round(Math.random()*20 + 80)};
	})];

d3.csv('data/stockSample.csv', function(data) {
	// 初始化画布
	iniSvg(svgwWidth, svgHeight);
	// 渲染雷达背景
	renderRadar(vizG, svgwWidth, svgHeight);
	//数据初始化
	iniData(data);
	// 渲染数据
	renderData(vizG, data);

	//渲染走时红点
	//renderTick();
});

//渲染走时红点
function renderTick(){

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
		d.quote = +d.quote;
	});

	// console.log('fun iniData: ');
	// console.log(data);
	return data;
}

function renderData(vizG, data){
	var dataVirtualLength = data.length - 1;
	// console.log(dataVirtualLength);
	var dataVirtual = d3.range(dataVirtualLength);
	// 股价极值
	var quoteExtent = d3.extent(data, function(d) {
		return d.quote;
	});
	// console.log(quoteExtent);
	// 时间极值
	var dateExtent = d3.extent(data, function(d) {
		return d.standardTime;
	});
	// console.log(dateExtent);
	//设定日期范围
	var rScale = d3.scale.linear()
			.domain(quoteExtent)
			.range([0, rInterpolateCircle*numMarkerCircle]);

	var fullDateTime = ['2001/1/1', '2016/12/31'];
	//当前数据日期跨度占元周角度
	var dateScaleAngleExtent = caculateDateAngleExtent(fullDateTime, dateExtent);
	var dateScaleAngle = d3.time.scale()
			.domain(dateExtent)
			.range(dateScaleAngleExtent);

	var lineCircle = d3.svg.line.radial()
			.radius(function (d) { return rScale(d.quote); })
			.angle(function(d) { return dateScaleAngle(d.standardTime); }); 
			// .interpolate("basis");

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
	// 		 return lineCircle(d); });

	vizG.append("g")
		.attr('id', 'dataLineGroup')
		.attr("transform", "translate(" + svgwWidth / 2 + "," + svgHeight / 2 + ")")
		.selectAll("line.dataLine")
		.data(dataVirtual)//需要存入数组进行操作
		.enter()
		.append('line')
		.transition()
		.delay(function(d, i) {
			return i*10;
		})
		// .duration(500)
		.attr("class", "dataLine")
		.attr('x1', function(d, i) {
			return Math.sin(dateScaleAngle(data[i].standardTime)) * rScale(data[i].quote);
		})
		.attr('y1', function(d, i) {
			return -Math.cos(dateScaleAngle(data[i].standardTime)) * rScale(data[i].quote);
		})
		.attr('x2', function(d, i) {
			return Math.sin(dateScaleAngle(data[i+1].standardTime)) * rScale(data[i+1].quote);
		})
		.attr('y2', function(d, i) {
			return -Math.cos(dateScaleAngle(data[i+1].standardTime)) * rScale(data[i+1].quote);
		});

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
					return + Math.sin(angleLineMarkerYear * i) * (rInterpolateCircle*numMarkerCircle + 10);
				})
				.attr('y2', function(d, i) {
					return - Math.cos(angleLineMarkerYear * i) * (rInterpolateCircle*numMarkerCircle + 10);
				});

			//年标签
			radarStructureLineMarkerGroup.selectAll('text.radarMarkerYearLabel')
				.data(dataRadarLineMarkerYearVirtual)
				.enter()
				.append('text')
				.attr('class', 'radarMarkerYearLabel')
				// .attr('transform', function(d, i) {
				// 	console.log(360 * i / numYear);
				// 	return 'rotate(' + 360 * i / numYear  + ')';
				// })
				.attr('x', function(d, i) {
					return + Math.sin(angleLineMarkerYear * i) * (rInterpolateCircle*numMarkerCircle + 25);
				})
				.attr('y', function(d, i) {
					return - Math.cos(angleLineMarkerYear * i) * (rInterpolateCircle*numMarkerCircle + 25);
				})
				.text(function(d, i) {
					return startYear+i;
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
					return - Math.cos(angleLineMarkerMonth * i) * (rInterpolateCircle*numMarkerCircle + 7);
				});

			//月标签
			radarStructureLineMarkerGroup.selectAll('text.radarMarkerMonthLabel')
				.data(dataRadarLineMarkerMonthVirtual)
				.enter()
				.append('text')
				.attr('class', 'radarMarkerMonthLabel')
				.attr('x', function(d, i) {
					return + Math.sin(angleLineMarkerMonth * i) * (rInterpolateCircle*numMarkerCircle + 15);
				})
				.attr('y', function(d, i) {
					return - Math.cos(angleLineMarkerMonth * i) * (rInterpolateCircle*numMarkerCircle + 15);
				})
				.text(function(d, i) {
					return i%12 + 1;
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

function caculateDateLength(d1, d2) {
	var dateFormat = d3.time.format('%Y/%m/%d');
	// var yearFormat = d3.time.format('%Y');
	// var monthFormat = d3.time.format('%m');
	// var dayFormat = d3.time.format('%d');

	var standardTime_1 = dateFormat.parse(d1);
	var standardTime_2 = dateFormat.parse(d2);

	// var dateExtent = d3.extent(data, function(d) {
	// 	return d.standardTime;
	// });
	// console.log(dateExtent);

	// var dateScaleAngle = d3.time.scale()
	// 		.domain(dateExtent)
	// 		.range([0, Math.PI*2]);
	var dateLenth = standardTime_2 - standardTime_1;
	console.log(dateLenth);
	return dateLenth;
}



// var data = [d3.range(200).map(function (i) {
// 			return {x: i, y: Math.round(Math.random()*20 + 80)};
// 	})];

// // console.log(data);

// var rScale = d3.scale.linear()
// 		.domain([0, 100])
// 		.range([0, 200]);


// svg = d3.select("body").append("svg")
// 		.attr("id", "svgCanvas")
// 		.attr("width", svgwWidth)
// 		.attr("height", svgHeight);

// var lineCircle = d3.svg.line.radial()
// 		.radius(function (d) { return rScale(d.y); })
// 		.angle(function(d, i) { return i/100*Math.PI; }) //max over 2 Pi means more than 1 round
// 		// .interpolate("basis-closed");
// 		.interpolate("basis");

// svg.append("g")
//     	.attr("transform", "translate(" + svgwWidth / 2 + "," + svgHeight / 2 + ")")
// 		.selectAll("path.line")
// 		.data(data)
// 		.enter()
// 		.append("path")
// 		.attr("class", "line")
// 		.attr("d", function (d) { return lineCircle(d); });





