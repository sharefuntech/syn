//**********************************************************
//==========================================================
// start 设置viz顶层div容器
//==========================================================
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
// console.log(svgNode);
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
//end 设置viz顶层div容器
//==========================================================
//**********************************************************

// 布局设置
// 两边距去除15%
var marginHorizontal = screenWidth * 0.15;
var marginTop = 30;

//共分4.5块，第一块行首，占0.5块
 //内容连行标题分5块，每块宽度
var singleBlockWidth = (screenWidth - marginHorizontal * 2)/4.5;
// 每块高度100
var singleBlockHeight = 100;

//==================================================================
//===========start 绘制季度标题
// console.log(singleBlockWidth);
var titleSeasonContent = ['第一季度','第二季度','第三季度','第四季度'];
var titleSeasonGroup = svg.append('g')
		.attr('transform', 'translate(' + marginHorizontal + ',' + marginTop + ')');
titleSeasonGroup.selectAll('text.titleSeason')
	.data(titleSeasonContent)
	.enter()
	.append('text')
	.attr('class', 'titleSeason')
	.attr('transform', function(d, i) {
		return 'translate(' + (i+1) * singleBlockWidth + ',0)';
	})
	.text(function(d) {
		return d;
	});
//===========end 绘制季度标题
//==================================================================

d3.csv('data/geo_disaster.csv', function(data) {
	var dateFormat = d3.time.format('%Y-%m-%d');
	var yearFormat = d3.time.format('%Y');
	var monthFormat = d3.time.format('%m');
	// 提取每个数值的年份
	data.forEach(function(d) {
		d.standardTime = dateFormat.parse(d.date);//将字符串转为标准时间格式
		d.year = yearFormat(d.standardTime);
		d.month = monthFormat(d.standardTime);
	});
	// console.log(data);
	// 获取列表默认选中值
	var defaultSelectedOption = d3.select('#selectContainer')[0][0].value;
	// console.log('default selected option: ' + defaultSelectedOption);

	var defaultNestedData = d3.nest()
			.key(function(d) {
				return d[defaultSelectedOption];
			})
			.key(function(d) { //按季度分类
				// return d.month; //暂时直接用已知变量
				if (d.month>=1 && d.month<=3) {
					return 1;
				} else if (d.month>=4 && d.month<=6) {
					return 2;
				} else if (d.month>=7 && d.month<=9) {
					return 3;
				} else if (d.month>=10 && d.month<=12) {
					return 4;
				}
			})
			.entries(data);
	// console.log(defaultNestedData);
	// console.log(defaultNestedData[0].values);

	var maxSeasonLength = 0; //单个季度最多的事故数量
	for(var i=0; i<defaultNestedData.length; i++) {
		defaultNestedData[i].values.forEach(function(d) {
			// console.log(d.values.length);
			if (d.values.length > maxSeasonLength) {
				maxSeasonLength = d.values.length;
			}
		});
	}
	// console.log(maxSeasonLength);

	//==================================================================
	//===========start 绘制年度标题
	var titleYearContent = getNestedDataKeys(defaultNestedData);
	var titleYearGroup = svg.append('g')
			.attr('transform', 'translate(' + marginHorizontal + ',' + marginTop + ')');
	titleYearGroup.selectAll('text.titleYear')
		.data(titleYearContent)
		.enter()
		.append('text')
		.attr('class', 'titleYear')
		.attr('transform', function(d, i) {
			return 'translate(0,' + (i+0.5) * singleBlockHeight + ')';
		})
		.text(function(d) {
			return d;
		});

	//===========end 绘制年度标题
	//==================================================================

	// 绘制默认试图
	renderViz(defaultNestedData);

	// 列表菜单设置触发函数
	d3.select('#selectContainer')
		.on('change', selectedChange(data));

});

function drawSinglePointsBlock (pointNum) {
	var canvasWidth = singleBlockWidth;
	var canvasHeight = singleBlockHeight;
	var rPoint = 5;
	var pointsVirtualData = d3.range(pointNum);
	var pointsGroup = svg.append('g');

	pointsGroup.selectAll('circle.dataPoints')
		.data(pointsVirtualData)
		.enter()
		.append('circle')
		.attr('class', 'dataPoints')
}

// 获取nesteddata数据的第一层key
function getNestedDataKeys(data) {
	var dataKeys = [];
	data.forEach(function(d) {
		dataKeys.push(d.key);
	});
	// console.log('output from function getNestedDataKeys: ' + dataKeys);
	return dataKeys;
}

function showSelectedValue() {
	console.log(this.value);
}

function selectedChange(data) {
	// on模式处理event不能传递参数，故用闭包传递参数
	return function selectedChangeEventHandler() {
		var currentSelectedValue = this.value;
		var currentNestedData = d3.nest()
			.key(function(d) {
				return d[currentSelectedValue];
			})
			.key(function(d) { //按季度分类
				// return d.month; //暂时直接用已知变量
				if (d.month>=1 && d.month<=3) {
					return 1;
				} else if (d.month>=4 && d.month<=6) {
					return 2;
				} else if (d.month>=7 && d.month<=9) {
					return 3;
				} else if (d.month>=10 && d.month<=12) {
					return 4;
				}
			})
			.entries(data);
		// console.log(currentNestedData);
	}
}

function renderViz(data) {
	// body...
}
