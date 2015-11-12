// global setting=================================
var svgWidth = 1200,
	svgHeight = 2800;

var svg = d3.select('body')
		.append('svg')
		.attr('width', svgWidth)
		.attr('height', svgHeight)
		.append('g');

var lineGrid = svg.append('g').attr('id', 'lineGrid');

for (var i = 0; i < 7; i++) {
	lineGrid.append('line')
		.attr('class', 'canvasGrid')
		.attr('x1', 20)
		.attr('y1', 400*(i+1))
		.attr('x2', 1180)
		.attr('y2', 400*(i+1))
		.attr('stroke', '#999')
		.attr('stroke-width', .5);
};

// ==================================================
// no_1 x轴 linear ===================================
// ==================================================
var no_1 = svg.append('g')
		.attr('id', 'no_1')
		.attr('transform', 'translate(50, 50)');

no_1.append('text').text('No.1 tree:csv links');

var no_1_treeWidth = 300;
var no_1_treeheight = 300;

var no_1_tree = d3.layout.tree()
		.size([no_1_treeWidth, no_1_treeheight])
		.children(function(d) {return d.values});

var linkGenerator = d3.svg.diagonal()
		// .projection(function(d) { return [d.y, d.x]});

d3.json('data/tweets.json', function(data) {
	// console.log(data);
	var nestedTweets = d3.nest()
			.key(function(d) {
				return d.user;
			})
			.entries(data.tweets);
	// console.log(nestedTweets);
	var packableTweets = {id: 'Tweets', values: nestedTweets};
	// console.log(packableTweets);

	var depthScale = d3.scale.ordinal()
			.domain([0, 1, 2])
			.range([15, 10, 5]);

	function setNodeClass(d) {
			return 'node_level_' + d.depth;
	}

	no_1.append('g')
		.attr('id', 'treeG')
		.selectAll('g')
		.data(no_1_tree(packableTweets))
		.enter()
		.append('g')
		.attr('class', 'node')
		.attr('transform', function(d) {
			// console.log(d.depth);
			return 'translate(' + d.x + ',' + d.y + ')';
		});

	d3.selectAll('g.node')
		.append('circle')
		// .attr('class', function(d) {
		// 	return 'node_level_' + d.depth;
		// })
		// .classed(setNodeClass(d), true)
		.attr('r', function(d) {
			return depthScale(d.depth);
		})
		.attr('fill', 'teal')
		.attr('stroke', 'gray');

	d3.select('#treeG')
		.selectAll('path')
		.data(no_1_tree.links(no_1_tree(packableTweets)))
		.enter()
		.insert('path', 'g')
		.attr('d', linkGenerator)
		.style('fill', 'none')
		.style('stroke', 'gray')
		.style('stroke-width', 5);
});








