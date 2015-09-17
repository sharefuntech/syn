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
var dragFree = d3.behavior.drag()
			.on('drag', dragMoveFree);

var dragVertical = d3.behavior.drag()
			.on('drag', dragMoveVertical);

var dragHorizontal = d3.behavior.drag()
			.on('drag', dragMoveHorizontal);

function dragMoveFree() {
	d3.select(this)
		.attr('cx', d3.event.x)
		.attr('cy', d3.event.y);

	return dragFree;
}

function dragMoveVertical() {
	d3.select(this)
		.attr('y', Math.min(d3.event.y, 200));
}

function dragMoveHorizontal() {
	d3.select(this)
		.attr('x', Math.min(d3.event.x, 500));
}

svg.append('circle')
	.attr('id', 'ball')
	.attr('r', 50)
	.attr('cx', 50)
	.attr('cy', 50)
	.attr('fill', 'teal')
	.call(dragFree);

svg.append('rect')
	.attr('id', 'cube_1')
	.attr('width', 50)
	.attr('height', 50)
	.attr('x', 150)
	.attr('y', 50)
	.attr('fill', 'orange')
	.call(dragVertical);

svg.append('rect')
	.attr('id', 'cube_2')
	.attr('width', 50)
	.attr('height', 50)
	.attr('x', 250)
	.attr('y', 50)
	.attr('fill', 'darkred')
	.call(dragHorizontal);