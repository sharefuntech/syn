// basic chart configuration, width/ height/ margin/ color
var chartConfig = {
    svgWidth: 800,
    svgHeight: 600,
    margin: {
        top: 30,
        bottom:30,
        left: 50,
        right: 30
    },
    color: d3.scale.category10()
};

//parallel data index for axis
var dimensionsBase = [
    {
        name: "区域",
        scale: d3.scale.ordinal().rangePoints([0, chartConfig.svgHeight]),
        type: String
    },
    {
        name: "年份",
        scale: d3.scale.linear().range([chartConfig.svgHeight, 0]),
        type: Number
    }];

var dimensionsAvailable = [
    {
        name: "单位GDP用水总量_立方米每万元",
        scale: d3.scale.linear().range([chartConfig.svgHeight, 0]),
        type: Number
    },
    {
        name: "单位GDP能源消耗总量_公斤每万元",
        scale: d3.scale.linear().range([chartConfig.svgHeight, 0]),
        type: Number
    },
    {
        name: "单位产值建设用地消耗_亩每亿元",
        scale: d3.scale.linear().range([chartConfig.svgHeight, 0]),
        type: Number
    },
    {
        name: "单位GDP固定资产投资_元每万元",
        scale: d3.scale.linear().range([chartConfig.svgHeight, 0]),
        type: Number
    }
];

var iniDimensions = dimensionsBase.concat(dimensionsAvailable);
console.log(iniDimensions);

//model for mvvm
var model = {
    data: {
        chartConfig: chartConfig,
        dimensionsBase: dimensionsBase,
        dimensionsAvailable: dimensionsAvailable,
        checkedDimensions: [], //checkboxes' values of view
        chartDataPath: 'data/sample.csv',
        chartData: 0
    },
    methods: {
        //turn the csv table into parallel data
        iniParallesData: iniParallesData,
        //draw graph on load with default setting
        iniGraph: iniGraph,
        //update graph with new setting by user, get changes from viewer
        updateGraph: updateGraph
    },
    //try to ini graph on vue life cycle of ready
    ready: bootGraph
};

//view-model for mvvm
var vm = new Vue({
    el: '#app',
    data: model.data,
    methods: model.methods,
    ready: model.ready
});

//parepare the svg
function iniSvg(svgWidth, svgHeight) {
    var svg = d3.select('body')
        .append('svg')
        .attr('width', svgWidth)
        .attr('height', svgHeight);

    return svg;
}

function iniGraph() {
    // body...
}

function updateGraph() {
    // body...
}

function bootGraph() {
    // console.log(d3.select('#app'));
    //parepare the svg
    var svgWidth = model.data.chartConfig.svgWidth + model.data.chartConfig.margin.left + model.data.chartConfig.margin.right;
    var svgHeight = model.data.chartConfig.svgHeight + model.data.chartConfig.margin.top + model.data.chartConfig.margin.bottom;
    var svg = iniSvg(svgWidth, svgHeight);
    // assign the removable g with id 'vizG'
    var vizG = svg.append('g')
        .attr('id', 'vizG')
        .attr("transform", "translate(" + model.data.chartConfig.margin.left + "," + model.data.chartConfig.margin.top + ")");

    var chartDataPath = model.data.chartDataPath;
    d3.csv(chartDataPath, function(rawData) {
        // console.log(rawData);
        var paralleledData;
        model.data.chartData = iniParallesData(rawData);
        // console.log(model.data.chartData);
        paralleledData = model.data.chartData;
        // console.log(paralleledData[0]);
        // for (k in paralleledData[0]) {
        //     console.log(k);
        // }
        drawChart(paralleledData);
    });
}

function iniParallesData(data) {
    // console.log(data);
    var dataProcessed = [];
    data.forEach(function(d) {
        d.年份 = +d.年份;
        d.指标值 = +d.指标值;
        d[d.指标名称] = d.指标值;
        var obj = {};
        obj['区域'] = d.区域;
        obj['年份'] = d.年份;
        obj[d.指标名称] = d.指标值;
        dataProcessed.push(obj);
    });
    // console.log(dataProcessed);

    var dataNested = d3.nest()
        .key(function(d) {
            return d.区域;
        })
        .key(function(d) {
            return d.年份;
        })
        .entries(dataProcessed);
        // console.log(dataNested);

    var dataParallel = [];
    var keyYear = '年份';
    var keyPlace = '区域';

    dataNested.forEach(function(d) {
        var place = d.key;
        d.values.forEach(function(e) {
            // console.log(e);
            var year = +e.key;
            var obj = {};
            obj[keyYear] = year;
            obj[keyPlace] = place;
            e.values.forEach(function(f) {
                for(key in f) {
                    if (key != keyPlace && key != keyYear) {
                        // console.log(key + ': ' + f[key]);
                        obj[key] = f[key];
                    }
                }
            });
            dataParallel.push(obj);
        });
    });

    return dataParallel;
}

function drawChart(data) {
    var dimensions = model.data.dimensionsBase.concat(model.data.dimensionsAvailable);

    var x = d3.scale.ordinal()
        .domain(dimensions.map(function(d) { return d.name; }))
        .rangePoints([0, model.data.chartConfig.svgWidth]);

    var line = d3.svg.line()
        .defined(function(d) { return !isNaN(d[1]); });

    var yAxis = d3.svg.axis()
        .orient("left");

    var dimension = d3.select('#vizG').selectAll(".dimension")
        .data(dimensions)
        .enter()
        .append("g")
        .attr("class", "dimension")
        .attr("transform", function(d) {
            return "translate(" + x(d.name) + ")";
        });

    dimensions.forEach(function(dimension) {
        dimension.scale.domain(dimension.type === Number
            ? d3.extent(data, function(d) { return +d[dimension.name]; })
            : data.map(function(d) { return d[dimension.name]; }).sort());
    });

    d3.select('#vizG').append("g")
        .attr("class", "background")
        .selectAll("path")
        .data(data)
        .enter().append("path")
        .attr("d", draw);

    d3.select('#vizG').append("g")
        .attr("class", "foreground")
        .selectAll("path")
        .data(data)
        .enter()
        .append("path")
        .attr({
            fill: "none",
        	stroke:function(d,i){ return model.data.chartConfig.color(d.区域); },
            "stroke-width": "1.5px"
        })
        .attr("d", draw);

    dimension.append("g")
        .attr("class", "axis")
        .each(function(d) { d3.select(this).call(yAxis.scale(d.scale)); })
        .append("text")
        .attr("class", "title")
        .attr("text-anchor", "middle")
        .attr("y", -9)
        .text(function(d) { return d.name; });

    d3.select('#vizG').select(".axis").selectAll("text:not(.title)")
        .attr("class", "label")
        .data(data, function(d) { return d.name || d; });

    function draw(d) {
        return line(dimensions.map(function(dimension) {
            return [x(dimension.name), dimension.scale(d[dimension.name])];
        }));
    }
}
