var margin = {top: 30, right: 40, bottom: 20, left: 200};
var width = 960 - margin.left - margin.right;
var height = 500 - margin.top - margin.bottom;

var color = d3.scale.category10();

var dimensions = [
    {
        name: '国家',
        scale: d3.scale.ordinal().rangePoints([0, height]),
        type: String
    },
    {
        name: '年份',
        scale: d3.scale.linear().range([height, 0]),
        type: Number
    },
    {
        name: '收入',
        scale: d3.scale.linear().range([height, 0]),
        type: Number
    },
    {
        name: '人口',
        scale: d3.scale.linear().range([height, 0]),
        type: Number
    },
    {
        name: '幸福指数',
        scale: d3.scale.linear().range([height, 0]),
        type: Number
    }
];

var x = d3.scale.ordinal()
    .domain(dimensions.map(function(d) {
        return d.name;
    }))
    .rangePoints([0, width]);

// var xDomain = dimensions.map(function(d) {
//     return d.name;
// });
// console.log(xDomain);

var line = d3.svg.line()
    .define(function(d) {
        return !isNaN(d[1]);
    });

var yAxis = d3.svg.axis()
    .orient('left');

var svg = d3.select('body')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

var dimension = svg.selectAll('.dimension')
    .data(dimensions)
    .enter()
    .append('g')
    .attr('class', 'dimension')
    .attr('transform', function(d) {
        return 'translate' + x(d.name);
    })
