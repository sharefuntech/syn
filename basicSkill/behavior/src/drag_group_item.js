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
// dragGroupItems();
var groupPosition = [{x: 0, y: 0}]; //容器itemgroup的原始位置

var itemGroup = svg.selectAll('g')
		.data(groupPosition)
		.enter()
		.append('g')
		.attr('id', 'itemGroup')
		.attr('transform', function(d) {
			return 'translate(' + d.x + ',' + d.y + ')';
		})
		.call(dragGroup(onDragGroup));

itemGroup.append('circle')
		.attr('r', 50)
		.attr('cx', 0) //圆形在容器itemgroup里的相对原始位置
		.attr('cy', 0)
		.attr('fill', 'teal');

itemGroup.append('text')
		.attr('x', 0) //文本在容器itemgroup里的相对原始位置
		.attr('y', 0)
		.text('hello');

function dragGroup(dragHandler) {
	var drag = d3.behavior.drag()
			.on('drag', dragHandler);

	return drag;
}

function onDragGroup(d) {
		d.x += d3.event.dx;  //移动之前，先将容器里的物体的坐标加上容器的位置坐标
		d.y += d3.event.dy;
		
		d3.select(this)
			.attr('transform', 'translate(' + d.x + ',' + d.y + ')');
}
