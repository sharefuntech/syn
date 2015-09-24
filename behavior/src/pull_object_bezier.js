//**********************************************************
//==========================================================
// 设置viz顶层div容器
var vizContainer = d3.select('body')
		.append('div')
		.attr('id', 'vizContainer')
		.style('width', '100%')
		.style('height', '100%');
//设置svg画布
var svg = d3.select('#vizContainer')
		.append('svg')
		.style('width', '100%')
		.style('height', '100%');
var svgNode = d3.select('svg').node();
// console.log(svgNode.parent); //svgNode.parent is undefined
//==========================================================
//screen.width = 设备屏幕大小
var deviceWidth = screen.width;
var deviceHeight = screen.height;

// 不直接用screen.width是因为设备屏幕大小，还包括浏览器菜单栏地址栏等尺寸，和浏览器可用显示区域不一致，而包裹在div中的svg，正好表示为浏览器可用尺寸
var screenWidth = parseFloat(svgNode.clientWidth || svgNode.parent.clientWidth);
var screenHeight = parseFloat(svgNode.clientHeight || svgNode.parent.clientHeight);

// 设置viewbox才能保证旋转屏幕弹性调整svg图片
svg.attr('viewBox', '0 0 ' + screenWidth + ' ' + screenHeight);
//==========================================================
//这里需要根据设备屏幕而不是浏览器可用屏幕进行判断
if (deviceWidth < 400) { 
	//手机视图
}
else if (deviceWidth < 1000) {
	//平板视图
}
else {
	//桌面视图
}
//==========================================================
//**********************************************************

//定义大圆初始位置
var downPoint = [200, 200];

//生成一组圆形的原始位置点
var upPointGroup = d3.range(4).map(function(i) {
	return [(50 + i * 100), 50, (Math.random()*15 + 15)];
});
// console.log(upPointGroup);

//生成一组连线贝塞尔曲线数据
var curvePathGroup = [];
upPointGroup.forEach(function(d) {
	var yDistance = downPoint[1] - d[1];

	var m_1 = [d[0], (d[1] + yDistance/2)];
	var m_2 = [downPoint[0], (downPoint[1] - yDistance/2)];

	var curveElement = curveJoin([d[0], d[1]], m_1, m_2, downPoint);

	curvePathGroup.push(curveElement);
});
// console.log(curvePathGroup);

var drag = d3.behavior.drag()
		.on('dragstart', function() {
			d3.event.sourceEvent.stopPropagation();
		})
		.on('drag', dragmove);

//绘制一组贝塞尔曲线
var curveWidth = 3;

curvePathGroup.forEach(function(d, i) {
	svg.append('path')
		.attr('id', 'bezier_' + i)
	    .attr("d", d)
	    .attr("stroke", "lightgray")
	    .attr("stroke-width", curveWidth)
	    .attr("fill", "none");
});

//绘制上半组圆形
createCircle(svg, upPointGroup);

//绘制下半部分可拖动圆球
var downCircle = svg.append('g')
		.attr('transform', 'translate(' + downPoint[0] + ',' + downPoint[1] + ')')
		// .attr('id', 'downCircle')
		.call(drag)
		.append('circle')
		.attr('id', 'downCircle')
		.attr('r', 50)
		.style('fill', 'teal');

function dragmove(d) {
	// var x = d3.event.x;
	var pullRatio = 4; //上球移动下球的1/4
	var x = downPoint[0];
	var y = d3.event.y;

	// 判断是否在可移动距离内
	var maxPullDistance = 200,
		minPullDistance = 0;
	var pulledDistance = y - downPoint[1];

	if (pulledDistance > minPullDistance && pulledDistance < maxPullDistance) {
		//移动下方大圆
		d3.select(this)
			.attr('transform', 'translate(' + x + ',' + y + ')');

		//单个被动圆的移动比例尺
		var rExtent = d3.extent(upPointGroup, function(d) {
			return d[2];
		});
		// console.log(rExtent);
		var distanceScale = d3.scale.linear()
				.domain(rExtent)
				.range([2,4]);

		var colorScale = d3.scale.linear()
				.domain([0, maxPullDistance/2])
				.range(['lightgray', 'steelblue']);

		//定义填充曲线渐变方式
		function fillCurveColor(i) {
			return colorScale(pulledDistance/distanceScale(upPointGroup[i][2]));
		}

		//移动一组圆形 ============================
		upPointGroup.forEach(function(d, i) {
			d3.select('#upCircle_' + i)
				.attr('transform', 'translate(' + d[0] + ',' + (d[1] + pulledDistance/distanceScale(d[2])) +')')
				.attr('fill', colorScale(pulledDistance/distanceScale(d[2])));
		});

		//计算新的曲线数据
		var newCurvePathGroup = [];
		// var newUpPointGroup = [];

		upPointGroup.forEach(function(d, i) {
			var newUpPoint = [d[0], (d[1] + pulledDistance/distanceScale(d[2]))];
			var newDownPoint = [downPoint[0], y];

			// var newMiddlePoint = [(newUpPoint[0] + newDownPoint[0])/2, newDownPoint[1]];
			var newYDistance = newDownPoint[1] - newUpPoint[1];
			var newM_1 = [newUpPoint[0], (newUpPoint[1] + newYDistance/2)];
			var newM_2 = [newDownPoint[0], (newDownPoint[1] - newYDistance/2)];

			var newCurvePath = curveJoin(newUpPoint, newM_1, newM_2, newDownPoint);

			newCurvePathGroup.push(newCurvePath);
			// newUpPointGroup.push(newUpPoint);
		});
		// console.log(newCurvePathGroup);

		//更新曲线数据============================
		newCurvePathGroup.forEach(function(d, i) {
			d3.select('#bezier_' + i)
				.attr("d", d)
			    // .attr("stroke", "lightgray")
			    .attr("stroke", fillCurveColor(i))
			    .attr("stroke-width", curveWidth)
			    .attr("fill", "none");
		});	

	}
}


//将4个点连接成贝塞尔曲线数据
function curveJoin(start, m_1, m_2, end) {
	var newStart = 'M' + start.join(',');
	var newM_1 = 'C' + m_1.join(',');
	var newM_2 = m_2.join(',');
	var newEnd = end.join(',');

	return newStart + ' ' + newM_1 + ' ' + newM_2 + ' ' + newEnd;
}

//绘制上班部分圆形
function createCircle(svg,data) {
	svg.selectAll('circle.up')
		.data(data)
		.enter()
		.append('circle')
		.attr('class', 'up')
		.attr('id', function(d, i) {
			return 'upCircle_' + i;
		})
		.attr('transform', function(d) {
			return 'translate(' + d[0] + ',' + d[1] + ')';
		})
		.attr('r', function(d) {
			return d[2];
		})
		.attr('fill', 'lightgray');
}