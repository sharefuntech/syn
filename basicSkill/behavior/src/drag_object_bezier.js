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
var start_point = [50, 300];
var end_point = [250, 50];

var mid_point = [(end_point[0] - start_point[0])/3*2, start_point[1]];

var data = []; 
	data.push(start_point);
	data.push(mid_point);
	data.push(end_point);


var drag = d3.behavior.drag()
		.on('dragstart', function() {
			d3.event.sourceEvent.stopPropagation();
		})
		.on('drag', dragmove);

// var line = svg.append('line')
// 		.attr('x1', 50)
// 		.attr('y1', 50)
// 		.attr('x2', 350)
// 		.attr('y2', 350)
// 		.style('stroke', 'orange')
// 		.style('stroke-width', 5);

var bezier = d3.svg.line()
	    .x(function(d) { return d[0]; })
	    .y(function(d) { return d[1]; })
	    .interpolate("basis");

svg.append('path')
	.attr('id', 'bezier')
    .attr("d", bezier(data))
    .attr("stroke", "teal")
    .attr("stroke-width", 5)
    .attr("fill", "none");

var circle_1 = svg.append('g')
		.attr('transform', 'translate(' + start_point[0] + ',' + start_point[1] + ')')
		.attr('class', 'first')
		.call(drag)
		.append('circle')
		.attr('r', 30)
		.style('fill', 'teal');

var circle_2 = svg.append('g')
		.attr('transform', 'translate(' + end_point[0] + ',' + end_point[1] + ')')
		.attr('class', 'second')
		.call(drag)
		.append('circle')
		.attr('r', 30)
		.style('fill', 'teal');

function dragmove(d) {
	var x = d3.event.x;
	var y = d3.event.y;

	d3.select(this)
		.attr('transform', 'translate(' + x + ',' + y + ')');

	if (d3.select(this).attr('class') == 'first') {
		//line munipulation
		data[0] = [x, y];
		data[1] = [(data[2][0] - data[0][0])/3*2,data[0][1]];

		d3.select('#bezier')
			.data(data)
			.exit();

		d3.select('#bezier')
			.data(data)
			.attr("d", bezier(data))
		    .attr("stroke", "teal")
		    .attr("stroke-width", 5)
		    .attr("fill", "none");	

		//push another object
		var step = (start_point[1] - y)/4;
		d3.select('.second')
			.attr('transform', 'translate(250,' + (50 - step) +')');

	} 
	else {
		//line munipulation
		data[2] = [x, y];
		data[1] = [(data[2][0] - data[0][0])/3*2,data[0][1]];

		d3.select('#bezier')
			.data(data)
			.exit();

		d3.select('#bezier')
			.data(data)
			.attr("d", bezier(data))
		    .attr("stroke", "teal")
		    .attr("stroke-width", 5)
		    .attr("fill", "none");	
	}
}

