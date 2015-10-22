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
var svgwWidth = 800;
var svgHeight = 800;
var svgMargins = {top:10, right:10, bottom:10, left:10};

var sampleData = [d3.range(360).map(function (i) {
			return {x: i, y: Math.round(Math.random()*20 + 80)};
	})];

// 初始化画布
iniSvg(svgwWidth, svgHeight);
// 渲染雷达背景
renderRadar(vizG, svgwWidth, svgHeight);
// 渲染数据
renderData(vizG, sampleData);

function renderData(vizG, data){
	var rScale = d3.scale.linear()
			.domain([0, 100])
			.range([0, 350]);

	var lineCircle = d3.svg.line.radial()
			.radius(function (d) { return rScale(d.y); })
			.angle(function(d, i) { return i*Math.PI*2/360; }) //max over 2 Pi means more than 1 round
			// .interpolate("basis-closed");
			.interpolate("basis");

	vizG.append("g")
    	.attr("transform", "translate(" + svgwWidth / 2 + "," + svgHeight / 2 + ")")
		.selectAll("path.dataPath")
		.data(data)
		.enter()
		.append("path")
		.attr("class", "dataPath")
		.attr("d", function (d) { return lineCircle(d); });
}

// 渲染雷达背景
function renderRadar(vizG, svgwWidth, svgHeight) {
	//雷达背景参数
	var numCircle = 12; //雷达圈数
	var rInterpolateCircle = 50; //雷达圈之间间隔距离
	var numLine = 36; //半径射线数量
	// 渲染雷达框架线条
	rendaerRadarStructure(numCircle, rInterpolateCircle);
	// 渲染雷达数据标签
	// rendaerRadarLabel(numCircle, rInterpolateCircle);

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
			drawCircle(radarStructureCricleGroup, 'radarStructureCircleOutBlack', {x:0, y:0}, rInterpolateCircle*7);
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

			var dataRadarLineMarkerYearVirtual = d3.range(5);		
			var dataRadarLineMarkerMonthVirtual = d3.range(5*12);
			var angleLineMarkerYear = Math.PI*2/5;
			var angleLineMarkerMonth = Math.PI*2/(5*12);
			
			radarStructureLineMarkerGroup.selectAll('line.radarStructureLineMarkerYear')
				.data(dataRadarLineMarkerYearVirtual)
				.enter()
				.append('line')
				.attr('class', 'radarStructureLineMarkerYear')
				.attr('x1', function(d, i) {
					return Math.sin(angleLineMarkerYear * i) * rInterpolateCircle*7;
				}) //从黑圈开始
				.attr('y1', function(d, i) {
					return - Math.cos(angleLineMarkerYear * i) * rInterpolateCircle*7;
				}) //从黑圈开始
				.attr('x2', function(d, i) {
					return + Math.sin(angleLineMarkerYear * i) * (rInterpolateCircle*7 + 20);
				})
				.attr('y2', function(d, i) {
					return - Math.cos(angleLineMarkerYear * i) * (rInterpolateCircle*7 + 20);
				});

			radarStructureLineMarkerGroup.selectAll('line.radarStructureLineMarkerMonth')
				.data(dataRadarLineMarkerMonthVirtual)
				.enter()
				.append('line')
				.attr('class', 'radarStructureLineMarkerMonth')
				.attr('x1', function(d, i) {
					return Math.sin(angleLineMarkerMonth * i) * rInterpolateCircle*7;
				}) //从黑圈开始
				.attr('y1', function(d, i) {
					return - Math.cos(angleLineMarkerMonth * i) * rInterpolateCircle*7;
				}) //从黑圈开始
				.attr('x2', function(d, i) {
					return + Math.sin(angleLineMarkerMonth * i) * (rInterpolateCircle*7 + 10);
				})
				.attr('y2', function(d, i) {
					return - Math.cos(angleLineMarkerMonth * i) * (rInterpolateCircle*7 + 10);
				});

		} 

	}

	// 渲染雷达标签
	function rendaerRadarLabel(numCircle, rInterpolateCircle){
		// 雷达结构容器
		var radarLabelGroup = vizG.append('g')
			.attr('id', 'radarLabelGroup');

		rendaerRadarLabelTime(numCircle, rInterpolateCircle);//渲染雷达时间标签
		rendaerRadarLabelRevenue(numCircle, rInterpolateCircle); //渲染雷达收益标签

		//渲染雷达时间标签
		function rendaerRadarLabelTime(numCircle, rInterpolateCircle){
			// body...
		}

		//渲染雷达收益标签
		function rendaerRadarLabelRevenue(numCircle, rInterpolateCircle){
			// body...
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

//function utility
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





