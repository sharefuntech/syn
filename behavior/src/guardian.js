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
var downPoint = [screenWidth/2, 400];

//生成一组圆形的原始位置点
var numUpPoint = 8; //上部圆球个数
// var sideGap = 100; //上部圆球最左最右的留白宽度
var sideGap = screenWidth * 0.1; //上部圆球最左最右的留白宽度，固定像素不如比例能在移动设备实现弹性布局
var stepPosition = (screenWidth - sideGap*2) / (numUpPoint - 1); //每个上部元球数据点间隔
var yPositionUpPoint = 120;

var upPointGroup = d3.range(numUpPoint).map(function(i) {
	return [(sideGap + i * stepPosition), yPositionUpPoint, (Math.random()*50 + 15)];
});
// console.log(upPointGroup);

//生成一组连线贝塞尔曲线数据
var curvePathGroup = [];
upPointGroup.forEach(function(d) {
	var yDistance = downPoint[1] - d[1];

	var m_1 = [d[0], (d[1] + yDistance/3*2)];
	var m_2 = [downPoint[0], (downPoint[1] - yDistance/3*2)];

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
	    .attr("stroke", "#FEEEF1")
	    .attr("stroke-width", curveWidth)
	    .attr("fill", "none")
	    .on('mouseover', function() {
	    	return highlightElement(d, i);
	    })
		.on('mouseout', function() {
	    	return unHighlightElement(d, i);
	    });
});

//绘制上半组圆形
createCircle(svg, upPointGroup);


//=======================================================
//绘制下半部分可拖动圆球
var downCircle = svg.append('g')
		.attr('id', 'pullHandler')
		.attr('transform', 'translate(' + downPoint[0] + ',' + downPoint[1] + ')')
		// .attr('id', 'downCircle')
		.call(drag);


downCircle.append('circle')
		.attr('id', 'downCircle')
		.attr('r', 100) //下半部分控制球大小
		.style('fill', '#AA001E');

downCircle.append('circle')
	.attr('transform', 'translate(0, -50)')
	.attr('id', 'downCircle-center')
	.attr('r', 50) 
	.style('fill', '#BA324A')
	.style('stroke', 'white')
	.style('stroke-width', 1.5)
	.style("stroke-dasharray", ("2, 2"));
	
//=======================================================

// 浮动工具栏
var tooltipMap = d3.select("body")
        .append("div")
        .attr("class", "tooltipMap")
        .style("opacity", 0);

//自适应布局测试===============================================
window.onresize = function() {
	var resizeWindow = parseFloat(svgNode.clientWidth || svgNode.parent.clientWidth);
	// console.log(resizeWindow);
	if (resizeWindow > 1000) {
		console.log('pc');
	} 
	else if (resizeWindow >= 400 && resizeWindow <= 1000) {
		console.log('tablet');
	} else {
		console.log('phone');
	}
}

function dragmove(d) {
	// var x = d3.event.x;
	var pullRatio = 4; //上球移动下球的1/4
	var x = downPoint[0];
	var y = d3.event.y;

	// 判断是否在可移动距离内
	var maxPullDistance = 150,
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
				.range(['#FEEEF1', '#AA001E']);

		//定义填充曲线渐变方式
		function fillCurveColor(i) {
			return colorScale(pulledDistance/distanceScale(upPointGroup[i][2]));
		}

		//移动一组圆形 ============================
		upPointGroup.forEach(function(d, i) {
			d3.select('#upG_' + i)
				.attr('transform', 'translate(' + d[0] + ',' + (d[1] + pulledDistance/distanceScale(d[2])) +')');

			d3.select('#upCircle_' + i)	
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
			var newM_1 = [newUpPoint[0], (newUpPoint[1] + newYDistance/3*2)];
			var newM_2 = [newDownPoint[0], (newDownPoint[1] - newYDistance/3*2)];

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
	svg.selectAll('g.up')
		.data(data)
		.enter()
		.append('g')
		.attr('class', 'up')
		.attr('id', function(d, i) {
			return 'upG_' + i;
		})
		.attr('transform', function(d) {
			return 'translate(' + d[0] + ',' + d[1] + ')';
		});

	svg.selectAll('g.up')
		.append('circle')
		.attr('id', function(d, i) {
			return 'upCircle_' + i;
		})
		.attr('transform', function(d) {
			return 'translate(0,' + (-d[2] - 40) + ')'; //为说明文字上移20空出白底
		})
		.attr('r', function(d) {
			return d[2];
		})
		.attr('fill', '#FEEEF1')
		.on('mouseover', function(d, i) { //高亮选中的圆球和曲线
			highlightElement(d, i);
		})
		.on('mouseout', function(d, i) {
			unHighlightElement(d, i);
		});


	// 每个圆球的说明文字
	svg.selectAll('g.up')
		.append('text')
		.attr('text-anchor', 'middle')
		.attr('transform', function(d) {
			return 'translate(0,' + (-25) + ')';
		})
		.text(function(d,i) {
			return 'C-' + i;
		})
		.style('pointer-event', 'none');
}

// 高亮选中元素
function highlightElement(d, i) {
	// console.log('highlight ' + d);
	// 鼠标划过，Z轴第一
	// this.parentElement.appendChild(this); 
	var thisFlag = d3.select('#upG_' + i);
	// console.log(thisFlag[0][0]);
	// console.log(thisFlag[0][0].parentElement);
	// 为何是数组，原因不明，原理是将目标svg元素摘下来之后再装回去，使之达到z轴最顶端，形成最前层显示效果
	var targetElement = thisFlag[0][0]; 
	targetElement.parentElement.appendChild(targetElement);
	// thisFlag.parentElement.appendChild(thisFlag);

	d3.select('#upCircle_' + i)
		.classed('circleHighlight', true);

	d3.select('#bezier_' + i)
		.classed('curveHighlight', true);

	// 显示提示框
	tooltipMap.style("opacity", .9).style('z-index', 10);
	tooltipMap.html(d[0])
        .style("left", function() {
        	if (d3.event.pageX < screenWidth/2) {
        		return d3.event.pageX + "px";
        	} else{
        		return (d3.event.pageX - 140) + "px";
        	}
        	
        })
        .style("top", (d3.event.pageY + 20) + "px");


}

function unHighlightElement(d, i) {
	// console.log('un highlight ' + d);
	d3.select('#upCircle_' + i)
		.classed('circleHighlight', false);

	d3.select('#bezier_' + i)
		.classed('curveHighlight', false);

	// 隐藏提示框
	tooltipMap.style("opacity", 0);
}

// 将小数点保留2位
function fixNumber(numObj) {
	return numObj.toFixed(2);
}