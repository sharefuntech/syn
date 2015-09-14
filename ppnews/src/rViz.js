d3.json('data/realestate.json', function(data) {
	realEstate(data);
});

function realEstate(data) {
	var svg = d3.select('svg');
	var svgNode = d3.select('svg').node();

	svg.style('width', '80%').style('float', 'left');

	d3.select('#vizContainer').append('div').attr('id', 'list');
	d3.select('#vizContainer').append('div').attr('id', 'popup');

	d3.select('#list').append('ol')
		.selectAll('li')
		.data(data)
		.enter()
		.append('li')
		.attr('class', 'datapoint')
		.html(function(d) {
			return d.name;
		})
		.on('mouseover', highlightDatapoint);

	var screenHeight = parseFloat(svgNode.clientHeight || svgNode.parentNode.clientHeight);

	var screenWidth = parseFloat(svgNode.clientWidth || svgNode.parentNode.clientWidth);

	var sizeExtent = d3.extent(data, function(d) { return d.size; });
	var valueExtent = d3.extent(data, function(d) { return d.value; });

	var xScale = d3.scale.linear()
			.domain(sizeExtent)
			.range([40, screenWidth - 40]);

	var yScale = d3.scale.linear()
			.domain(valueExtent)
			.range([screenWidth - 40, 40]);

	svg.append('g')
		.attr('id', 'dataG')
		.selectAll('g.datapoint')
		.data(data, function(d) { return d.name; })
		.enter()
		.append('g')
		.attr('class', 'datapoint');

	var locationScale = d3.scale.ordinal()
			.domain(['Rural', 'Coastal', 'Suburb', 'City'])
			.range(colorbrewer.Reds[4]);

	var typeShape = {'Spanish':'circle', 'Craftsman':'cross', 'Ranch':'square', 'McMansion':'triangle-down'};

	dataG = d3.selectAll('g.datapoint')
		.attr('transform', function(d) {
			return 'translate(' + xScale(d.size) + ',' + yScale(d.value) + ')';
		})
		.each(function(d) {
			houseSymbol = d3.svg.symbol()
				.type(typeShape[d.type])
				.size(64);

			d3.select(this)
				.append('path')
				.attr('d', houseSymbol)
				.style('fill', locationScale(d.location))
				.style('stroke', 'gray')
				.style('stroke-width', '1px')
				.on('mouseover', highlightDatapoint);
		});

	var xAxis = d3.svg.axis()
			.scale(xScale)
			.orient('top')
			.tickSize(4);

	var yAxis = d3.svg.axis()
			.scale(yScale)
			.orient('right')
			.tickSize(4);

	svg.append('g')
		.attr('id', 'xAxisG')
		.attr('class', 'axis')
		.attr('transform', 'translate(0' + (screenHeight - 20) + ')')
		.call(xAxis);

	svg.append('g')
		.attr('id', 'yAxisG')
		.attr('class', 'axis')
		.attr('transform', 'translate(20, 0)')
		.call(yAxis);


	function highlightDatapoint(d) {
		d3.selectAll('li.datapoint')
			.style('font-weight', function(p) {
				return p == d ? 900 : 100;
			});

		d3.selectAll('g.datapoint')
			.selectAll('path')
			.style('stroke-width', function(p) {
				return p == d ? '3px' : '1px';
			});

		var popup = d3.select('#popup')
				.style('top', yScale(d.value) - 135)
				.style('left', yScale(d.size) - 100);

		popup.selectAll('*').remove();
		popup.append('p').html(d.name);
		popup.append('p').html('location' + d.location);
		popup.append('p').html('type' + d.type);
		popup.append('p').html('size' + d.size + 'Sq.Ft');
		popup.append('p').html('value: $ ' + d.value);
	}
}

