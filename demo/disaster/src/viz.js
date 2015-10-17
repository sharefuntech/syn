/*
//全局变量初始化
var svgwWidth, svgHeight;
var margins; //{top: 20, right: 0.1, bottom;20, left:0.1} 如果屏幕大于1200，左右边距比例调大
var selectedOption; //控件状态存储
var mouseTooltip;
var dataView //充当每次视图改变的数据载体

//画布初始化
iniSvg(width, height, margins);

//数据初始化，处理时间，添加必要属性
iniData();

//注册表单控制事件:triggerControlChange();
setControlsAction();

//默认执行一次
//执行控制状态变化
//triggerControlChange();
--getControlsState(); //获取已经改变的selectedOption
--render(selectedOption); //由getControlsState传递全局变量新值selectedOption

//获取表单状态,返回selectedOption
getControlsState();

//渲染图表
render(selectedOption); //渲染视图，视图的类别取决于selectedOption的值
--changeDataView(); //处理数据,根据表单状态selectedOption改变数据nest状态，数据本身不改变
--renderLabels(); //标签
----renderTopLabel(); //标签-顶部标签
----renderLeftLabel(); ////标签-左侧标签
--renderPoints();
--renderTooltip();
*/
var viz = {};
var svg; //svg canvas
var dataView; //nest之后的数据
var rawData; //未nest之前到数据
var selectedOption; //控件状态存储

d3.csv('data/geo_disaster.csv', function(data) {
	rawData = data;
	iniData(rawData);
	// console.log(dataView);

	//注册表单控制事件
	setControlsAction('#selectContainer', triggerControlChange);

});

function iniSvg() {
	// body...
}

//数据初始化，处理时间，添加必要属性
function iniData(data) {
	var dateFormat = d3.time.format('%Y-%m-%d');
	var yearFormat = d3.time.format('%Y');
	var monthFormat = d3.time.format('%m');
	// 提取每个数值的年份
	data.forEach(function(d) {
		d.standardTime = dateFormat.parse(d.date);//将字符串转为标准时间格式
		d.year = yearFormat(d.standardTime);
		d.month = monthFormat(d.standardTime);
	});

	console.log('fun iniData: ');
	console.log(data);
	return data;
}

//注册表单控制事件:triggerControlChange();
function setControlsAction(selectDivId, handlerFunction) {
	d3.select(selectDivId)
		.on('change', handlerFunction(selectDivId));
}

//执行控制状态变化
function triggerControlChange(selectDivId) {
	return function() {
		getControlsState(selectDivId);
		render(selectedOption); 
	}
}

//获取表单状态,返回selectedOption
function getControlsState(selectDivId) {
	var selectedOptionIndex = d3.select(selectDivId)[0][0].selectedIndex;
	selectedOption = d3.select(selectDivId)[0][0][selectedOptionIndex].value;

	console.log('fun getControlsState: ' + selectedOption);
	return selectedOption;
}

//渲染图表
function render(selectedOption) {
	//处理数据,根据表单状态selectedOption改变数据nest状态，数据本身不改变
	changeDataView(selectedOption); 
	// //渲染标签
	// renderLabels(); 
	// //渲染数据点
	// renderPoints();
	// //渲染鼠标浮动提示框
	// renderTooltip();
}

//处理数据,根据表单状态selectedOption改变数据nest状态，数据本身不改变
function changeDataView(selectedOption) {
	dataView = d3.nest()
		.key(function(d) {
			return d[selectedOption];
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
		.entries(rawData);

	console.log(dataView);
}

function renderLabels() {
	//删除上次渲染内容
	if (d3.select('#labelsGroup')) {
		d3.select('#labelsGroup').remove();
	}

}



