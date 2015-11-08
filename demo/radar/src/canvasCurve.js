var canvasWidth = 600;
var canvasHeight = 600;
var animateTime = 7000;

// 鼠标提示框
var mouseTooltip = d3.select("body")
        .append("div")
        .attr("class", "mouseTooltip")
        .style("opacity", 0);

d3.csv('data/allFundQuoteLess.csv', function(data) {
	// console.log(data);
	data = iniData(data);
	// console.log(data);
	// renderCanvas(data);
	prepareRenderData(data); 
});

// canvas render
function renderCanvas(dataView) {
	//初始化canvas画布
	var canvas = d3.select('body')
			.append('canvas')
			.attr('width', canvasWidth) //css设置不能控制canvas的大小，否则会出现自动放大模糊
			.attr('height', canvasHeight);

	var context = d3.select('canvas')
			.node()
			.getContext('2d');

	// context.strokeStyle = 'black';
	// context.lineWidth = 1;

	dataView.forEach(function(d) {
		return renderSingleCanvasCurve(canvas, context, d.values);
	});
	// var curveNumber = dataView.length;

	// for(var i=0; i<curveNumber; i++) {
	// 	renderSingleCanvasCurve(canvas, context, dataView[i].values);
	// }
	// renderSingleCanvasCurve(canvas, context, dataView[3].values);
	// renderSingleCanvasCurve(canvas, context, dataView[2].values);
}

function renderSingleCanvasCurve(canvas, context, data) {
	// 股价极值
	var totalValueExtent = d3.extent(data, function(d) {
		return d.totalValue;
	});
	// console.log(totalValueExtent);
	// 时间极值
	var dateExtent = d3.extent(data, function(d) {
		return d.standardTime;
	});
	// console.log(dateExtent);
	//设定日期范围
	var rScale = d3.scale.linear()
			// .domain(totalValueExtent)
			.domain([0,6])
			.range([0, 280]);

	var fullDateTime = ['2001/1/1', '2016/12/31'];
	//当前数据日期跨度占元周角度
	var dateScaleAngleExtent = caculateDateAngleExtent(fullDateTime, dateExtent);
	var dateScaleAngle = d3.time.scale()
			.domain(dateExtent)
			.range(dateScaleAngleExtent);

	// 渲染数据曲线开始前需要delay的时间长度
	var startDelayPortion = dateScaleAngleExtent[0]/(Math.PI*2)*animateTime;

	var dataLength = data.length;
	var i = 0;
	var animateCurveId;

	var xPosition_start;
	var yPosition_start;
	var xPosition_end;
	var yPosition_end;

	context.beginPath();
	context.strokeStyle = 'lightsteelblue';
	context.lineWidth = 0.5;
	context.lineCap = 'round';

	//set interval mode ============================================
	
	// var setAnim;
	// setTimeout(triggerSingleCureDraw, Math.floor(startDelayPortion));

	// function triggerSingleCureDraw() {
	// 	setAnim = setInterval(drawCurve, 40);
	// }
	// function drawCurve() {
	// 	if (i < (dataLength-1)) {
	// 		xPosition_start = Math.sin(dateScaleAngle(data[i].standardTime)) * rScale(data[i].totalValue) + canvasWidth/2;;
	// 		yPosition_start = -Math.cos(dateScaleAngle(data[i].standardTime)) * rScale(data[i].totalValue)+ canvasHeight/2;
	// 		xPosition_end = Math.sin(dateScaleAngle(data[i+1].standardTime)) * rScale(data[i+1].totalValue) + canvasWidth/2;;
	// 		yPosition_end = -Math.cos(dateScaleAngle(data[i+1].standardTime)) * rScale(data[i+1].totalValue)+ canvasHeight/2;
	// 		// console.log('{' + xPosition + ', ' + yPosition + '}');
	// 		context.moveTo(xPosition_start, yPosition_start);
	// 		context.lineTo(xPosition_end, yPosition_end);
	// 		context.stroke();

	// 		i++;
	// 	} else{
	// 		clearInterval(setAnim);
	// 	}
	// }

	//request animation mode ======================================
	setTimeout(triggerDrawFrame, Math.floor(startDelayPortion));
	
	function triggerDrawFrame() {
		(function drawFrame(){
			animateCurveId = window.requestAnimationFrame(drawFrame, canvas);
			if (i < (dataLength-1)) {
				xPosition_start = Math.round(Math.sin(dateScaleAngle(data[i].standardTime)) * rScale(data[i].totalValue) + canvasWidth/2);
				yPosition_start = Math.round(-Math.cos(dateScaleAngle(data[i].standardTime)) * rScale(data[i].totalValue)+ canvasHeight/2);
				xPosition_end = Math.round(Math.sin(dateScaleAngle(data[i+1].standardTime)) * rScale(data[i+1].totalValue) + canvasWidth/2);
				yPosition_end = Math.round(-Math.cos(dateScaleAngle(data[i+1].standardTime)) * rScale(data[i+1].totalValue)+ canvasHeight/2);
				// console.log('{' + xPosition_start + ', ' + yPosition_start + '}');
				context.moveTo(xPosition_start, yPosition_start);
				context.lineTo(xPosition_end, yPosition_end);
				context.stroke();

				i++;
			} else{
				window.cancelAnimationFrame(animateCurveId);
			}
		}());
	}
	

}

// 计算数据日期角度极值
function caculateDateAngleExtent(fullDate, targetDate) {
	var dateFormat = d3.time.format('%Y/%m/%d');

	var fullDateLengthStart = dateFormat.parse(fullDate[0]);
	var fullDateLengthEnd = dateFormat.parse(fullDate[1]);

	var fullDateLength = fullDateLengthEnd - fullDateLengthStart;

	var minDataDateLength = targetDate[0] - fullDateLengthStart;
	var maxDataDateLength = targetDate[1] - fullDateLengthStart;

	var dateStartAngle = Math.PI*2*minDataDateLength/fullDateLength;
	var dateEndAngle = Math.PI*2*maxDataDateLength/fullDateLength;

	var dateAngleExtent = [dateStartAngle, dateEndAngle];
	return dateAngleExtent;
}

function iniData(data) {
	var dateFormat = d3.time.format('%Y/%m/%d');
	var yearFormat = d3.time.format('%Y');
	var monthFormat = d3.time.format('%m');
	var dayFormat = d3.time.format('%d');
	// 提取每个数值的年份
	data.forEach(function(d) {
		d.standardTime = dateFormat.parse(d.date);//将字符串转为标准时间格式
		// d.year = yearFormat(d.standardTime);
		// d.month = monthFormat(d.standardTime);
		// d.day = dayFormat(d.standardTime);
		d.totalValue = +d.totalValue;
	});

	var nestedData = d3.nest()
	    // .sortValues(d3.descending, function(d) { return d.standardTime; })
	    .key(function(d) { return d.fundName; })
	    .entries(data);

	nestedData.forEach(function(d) {
		d.values = _.sortBy(d.values, 'standardTime');
	});

	// console.log('fun iniData: ');
	// console.log(nestedData);
	return nestedData;
}

//pre calculate the position of each data
function prepareRenderData(data) {
	

	var positionDataAll = [];
	data.forEach(function(eData) {
		// 股价极值
		var totalValueExtent = d3.extent(eData.values, function(d) {
			return d.totalValue;
		});
		// console.log(totalValueExtent);
		// 时间极值
		var dateExtent = d3.extent(eData.values, function(d) {
			return d.standardTime;
		});
		// console.log(dateExtent);
		//设定日期范围
		var rScale = d3.scale.linear()
				// .domain(totalValueExtent)
				.domain([0,6])
				.range([0, 280]);

		var fullDateTime = ['2001/1/1', '2016/12/31'];
		//当前数据日期跨度占元周角度
		var dateScaleAngleExtent = caculateDateAngleExtent(fullDateTime, dateExtent);
		var dateScaleAngle = d3.time.scale()
				.domain(dateExtent)
				.range(dateScaleAngleExtent);

		// 渲染数据曲线开始前需要delay的时间长度
		var startDelayPortion = dateScaleAngleExtent[0]/(Math.PI*2)*animateTime;
		// console.log(d.values);
		var singleDataSet = eData.values;
		var singleDataSetLength = singleDataSet.length;
		// console.log(singleDataSetLength);
		var positionData = [];
		for(var i=0; i<singleDataSetLength; i++) {
			// console.log(singleDataSet[i]);
			var singleDataPoint = {};
			singleDataPoint.x = Math.round(Math.sin(dateScaleAngle(singleDataSet[i].standardTime)) * rScale(singleDataSet[i].totalValue)) + Math.round(canvasWidth/2);
			singleDataPoint.y = Math.round(-Math.cos(dateScaleAngle(singleDataSet[i].standardTime)) * rScale(singleDataSet[i].totalValue))+ Math.round(canvasHeight/2);
			console.log(singleDataPoint.x);
			console.log(singleDataPoint.y);
			positionData.push(singleDataPoint);
		}
		positionDataAll.push(positionData);
	});
	// console.log(positionDataAll);
}
