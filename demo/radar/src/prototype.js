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
－渲染画布 iniSvg()
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
var svgHeight = 600;
var svgMargins = {top:20, right:50, bottom:10, left:50};



iniSvg(svgwWidth, svgHeight);

rendaerRadar(vizG, svgwWidth, svgHeight);

function rendaerRadar(vizG, svgwWidth, svgHeight) {
	//雷达背景参数
	var numCircle = 6; //雷达圈数
	var rInterpolateCircle = 50; //雷达圈之间间隔距离
	var numLine = 60; //半径射线数量
	// 渲染雷达框架线条
	rendaerRadarStructure(numCircle, rInterpolateCircle);
	// 渲染雷达数据标签
	// rendaerRadarLabel(numCircle, rInterpolateCircle);

	function rendaerRadarStructure(numCircle, rInterpolateCircle){
		
		var radarStructureGroup = vizG.append('g')
			.attr('id', 'radarStructureGroup');

		rendaerRadarStructureCircle(numCircle, rInterpolateCircle);
		rendaerRadarStructureLine(numCircle, rInterpolateCircle); 

		function rendaerRadarStructureCircle(numCircle, rInterpolateCircle) {
			var radarStructureCricleGroup = radarStructureGroup
					.append('g')
					.attr('id', 'radarStructureCricleGroup');

			var dataRadarCircleVirtual = d3.range(numCircle);

			radarStructureCricleGroup.selectAll('circle.radarStructureCircle')
				.data(dataRadarCircleVirtual)
				.enter()
				.append('circle')
				.attr('class', 'radarStructureCircle')
				.attr('r', function(d, i) {
					return (i + 1) * rInterpolateCircle;
				})
				.attr('transform', 'translate(' + svgwWidth/2 + ',' + svgHeight/2 + ')');
		}
		
		function rendaerRadarStructureLine(numCircle, rInterpolateCircle) {
			var radarStructureLineGroup = radarStructureGroup
					.append('g')
					.attr('id', 'radarStructureLineGroup');

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
				.attr('x1', svgwWidth/2)
				.attr('y1', svgHeight/2)
				.attr('x2', function(d, i) {
					return svgwWidth/2 + Math.cos(angleInerpolate * i) * rLenthFull;
				})
				.attr('y2', function(d, i) {
					return svgHeight/2 - Math.sin(angleInerpolate * i) * rLenthFull;
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





