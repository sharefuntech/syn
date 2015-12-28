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
    .defined(function(d) {
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
        return 'translate(' + x(d.name) + ')';
    });

d3.tsv('data/happy.tsv', function(data) {
    dimensions.forEach(function(dimension) {
        var extentDimensionDomain = d3.extent(data, function(d) {
            return +d[dimension.name];
        });
        var dataCategoryLabel = data.map(function(d) {
            return d[dimension.name];
        })
        .sort();

        dimension.scale.domain(
            // var extentDimensionDomain = d3.extent(data, function(d) {
            //     return +d[dimension.name];
            // });
            // var dataCategoryLabel = data.map(function(d) {
            //     return d[dimension.name];
            // })
            // .sort();

            dimension.type === Number ? extentDimensionDomain : dataCategoryLabel
        );
    });

    // 设置不可见的大宽度，便于鼠标经过高亮显示
    svg.append('g')
        .attr('class', 'background')
        .selectAll('path')
        .data(data)
        .enter()
        .append('path')
        .attr('d', draw);

    svg.append('g')
        .attr('class', 'foreground')
        .selectAll('path')
        .data(data)
        .enter()
        .append('path')
        .attr({
            'fill': 'none',
            'stroke': function(d, i) {
                return color(d.国家);
            },
            'stroke-width': '1.5px'
        })
        .transition()
        // .duration(1000)
        .delay(function(d, i) {
            return i * 50;
        })
        .attr('d', draw);

    dimension.append('g')
        .attr('class', 'axis')
        .each(function(d) {
            d3.select(this).call(yAxis.scale(d.scale));
        })
        .append('text')
        .attr('class', 'title')
        .attr('text-anchor', 'middle')
        .attr('y', -9)
        .text(function(d) {
            return d.name;
        });

    svg.select('.axis')
        .selectAll('text:not(.title)')
        .attr('class', 'label')
        .data(data, function(d) {
            return d.name || d;
        });

    var projection = svg.selectAll('.axis text, .background path, .foreground path')
        .on('mouseover', mouseover)
        .on('mouseout', mouseout);

    function mouseover(d) {
        svg.classed('active', true);
        projection.classed('inactive', function(p) {
            return p !== d;
        });

        projection.filter(function(p) {
            return p === d;
        })
            .each(moveToFront);
    }

    function mouseout() {
        svg.classed('active', false);
        projection.classed('inactive', false);
    }

    function moveToFront() {
        this.parentNode.appendChild(this);
    }
});

function draw(d) {
    //inspect geometry of each dimension after scale
    var dataDimensions = dimensions.map(function(dimension) {
        return [x(dimension.name), dimension.scale(d[dimension.name])];
    });
    console.log(dataDimensions[1]);
    // console.log(dimension.name + ': ' + d[dimension.name] + ' after scale is: ' + dataSingleDimension);
    return line(dimensions.map(function(dimension) {
        // //inspect geometry of each dimension after scale
        // var dataSingleDimension = [x(dimension.name), dimension.scale(d[dimension.name])];
        // console.log(dimension.name + ': ' + d[dimension.name] + ' after scale is: ' + dataSingleDimension);

        return [x(dimension.name), dimension.scale(d[dimension.name])];
    }));
}
