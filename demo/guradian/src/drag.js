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

//screen.width = 设备屏幕大小
var deviceWidth = screen.width;
var deviceHeight = screen.height;

// 不直接用screen.width是因为设备屏幕大小，还包括浏览器菜单栏地址栏等尺寸，和浏览器可用显示区域不一致，而包裹在div中的svg，正好表示为浏览器可用尺寸
var screenWidth = parseFloat(svgNode.clientWidth || svgNode.parent.clientWidth);
var screenHeight = parseFloat(svgNode.clientHeight || svgNode.parent.clientHeight);
// console.log('svgNode.clientWidth: ' + svgNode.clientWidth);
// console.log('svgNode.parent.clientWidth: ' + svgNode.parent.clientWidth);
// 设置viewbox才能保证旋转屏幕弹性调整svg图片
svg.attr('viewBox', '0 0 ' + screenWidth + ' ' + screenHeight);

//这里需要根据设备屏幕而不是浏览器可用屏幕进行判断
if (deviceWidth < 400) { 
	
}
else if (deviceWidth < 1000) {
	
}
else {
	// phoneView();
}
//================================================
var itemsGroup = svg.append('g')
			.attr('id', 'ig');
	
itemsGroup.append('circle')
	.attr('id', 'ball')
	.attr('r', 50)
	.attr('cx', 50)
	.attr('cy', 50)
	.attr('fill', 'teal')
	.attr('visibility', 'hidden')
	.on('mouseover', highlightItem)
	.on('mouseout', unHighlightItem);

itemsGroup.append('rect')
	.attr('id', 'cube')
	.attr('width', 50)
	.attr('height', 50)
	.attr('x', 150)
	.attr('y', 50)
	.attr('fill', 'teal')
	.on('mouseover', highlightItem)
	.on('mouseout', unHighlightItem);

function highlightItem () {
	d3.select(this)
		.attr('stroke', 'black')
		.attr('stroke-width', 5);
}

function unHighlightItem () {
	d3.select(this)
		.attr('stroke', 'none');
}

//================================================

function callDrag(targetObject, originPosition) {
	var originPosition = originPosition;

	d3.select(targetObject)
		.call(dragObject(dragMove, endMove));

	function dragObject(dragHandler, dragEndHandler) {
		var drag = d3.svg.drag()
				.on('drag', dragHandler)
				.on('dragend', dragEndHandler);

		return drag;
	}

	function dragMove(d) {
		d.x += d3.event.dx;
	}
}

function dragGroupItems() {
	
	var data = [{x:200, y:50}];

	var g = svg.selectAll('g')
			.data(data)
			.enter()
			.append('g')
			.attr('transform', function(d) {
				return 'translate(' + d.x + ',' + d.y + ')';
			})
			.call(onDragDrop(dragMove, dropMove));

	g.append('circle')
		.attr('r', 50)
		.attr('cx', 50)
		.attr('cy', 50)
		.attr('fill', 'teal');

	g.append('text')
		.attr('x', 50)
		.attr('y', 150)
		.text('hello');

	function onDragDrop(dragHandler, dragEndHandler) {
		var drag = d3.behavior.drag();

		drag.on('drag', dragHandler)
			.on('dragend', dragEndHandler);

		return drag;
	}

	function dragMove(d) {
		d.x += d3.event.dx;
		d.y += d3.event.dy;
		d3.select(this)
			.attr('transform', 'translate(' + d.x + ',' + d.y + ')');
	}

	function dropMove(d) {
		console.log('drop');
	}

}

function dragPrototype() {
	var blocks = [{x:200, y:50}];

	var drag = d3.behavior.drag()
			.origin(Object)
			.on('drag', function(d) {
				d.x = d3.event.x;
				d.y = d3.event.y;
				draw();
			});

	function draw() {
		g = svg.selectAll('g')
			.data(blocks);

		gEnter = g.enter()
			.append('g')
			.call(drag);

		g.attr('transform', function(d) {
			// if (d.y <= 300 && d.y >= 0) {
			// 	return 'translate(' + d.x + ',' + d.y + ')';
			// }

			if (d.y <= 0) {
				return 'translate(200,0)';
			} 
			else if (d.y >= 300) {
				return 'translate(200,300)';
			}
			else {
				return 'translate(200,' + d.y + ')';
			}
			
		});

		// gEnter.append('rect')
		// 	.attr('width', 100)
		// 	.attr('height', 100);
		gEnter.append('circle')
			.attr('r', 50)
			.attr('fill', 'teal');
	}

	draw();
}

function phoneView() {
	var drag = d3.behavior.drag()
			.on('drag', dragMoveFree);

	/*svg.append('circle')
		.attr('id', 'ball')
		.attr('r', 50)
		.attr('cx', 50)
		.attr('cy', 50)
		.attr('fill', 'teal');

	var ball = d3.select('#ball')
			.call(drag);*/

	var itemsGroup = svg.append('g')
			.attr('id', 'ig');
	
	itemsGroup.append('circle')
		.attr('id', 'ball')
		.attr('r', 50)
		.attr('cx', 50)
		.attr('cy', 50)
		.attr('fill', 'teal');

	itemsGroup.append('rect')
		.attr('id', 'cube')
		.attr('width', 50)
		.attr('height', 50)
		.attr('x', 150)
		.attr('y', 50)
		.attr('fill', 'teal');

	itemsGroup.call(drag);
}

function dragMoveVertical() {
	d3.select(this)
		.attr('cy', Math.min(d3.event.y, 200));
}

function dragMoveFree() {
	d3.select(this)
		.attr('cx', d3.event.x)
		.attr('cy', d3.event.y);
}
//prototype test modle
function createImage (width, height, color) {
	var r = d3.min([width, height]) / 2;

	svg.append('circle')
		.attr('cx', 0)
		.attr('cy', 0)
		.attr('r', r)
		.attr('transform', 'translate(' + (width / 2) + ',' + (height / 2) + ')')
		.attr('fill', color);
}