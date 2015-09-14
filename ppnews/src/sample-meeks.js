function sampleMeeks() {
	d3.json('data/realestate.json', function(data) {
		realEstate(data);
	});

	function realEstate(data) {
		svg = d3.select('svg');
		svgNode = d3.select('svg').node();
		// console.log(svgNode);

		screenHeight = parseFloat(svgNode.clientHeight || svgNode.parent.clientHeight);
		screenWidth = parseFloat(svgNode.clientWidth || svgNode.parent.clientWidth);
		//clientWidth随浏览器拉伸而变化
		// console.log(svgNode.clientWidth);
		sizeExtent = d3.extent(data, function(d) {return d.size;});
		valueExtent = d3.extent(data, function(d) {return d.value;});

		xScale = d3.scale.linear()
				.domain(sizeExtent)
				.range([40, screenWidth - 40]);
		yScale = d3.scale.linear()
				.domain(valueExtent)
				.range([screenHeight - 40, 40]);

		svg.style('width', '80%')
			.style('float', 'left');

		d3.select('#vizContainer')
			.append('div')
			.attr('id', 'list');

		d3.select('#vizContainer')
			.append('div')
			.attr('id', 'popup');

		d3.select('#list')
			.append('ol')
			.selectAll('li')
			.data(data)
			.enter()
			.append('li')
			.attr('class', 'datapoint')
			.html(function(d) {
				return d.name;
			})
			.on('mouseover', highlightDatapoint);

		

		svg.append('g')
			.attr('id', 'dataG')
			.selectAll('g.datapoint')
			.data(data, function(d) {return d.name;})
			.enter()
			.append('g')
			.attr('class', 'datapoint');
		// console.log(d3.select('#dataG'));

		locationScale = d3.scale.ordinal()
				.domain(['Rual', 'Coastal', 'Suburb', 'City'])
				.range(colorbrewer.Blues[4]);

		typeShape = {'Spanish': 'circle', 'Craftsman': 'cross', 'Ranch': 'square', 'McMansion': 'triangle-down'};

		dataG = d3.selectAll('g.datapoint')
				.attr('transform', function(d) {
					return 'translate(' + xScale(d.size) + ',' + yScale(d.value) + ')';
				})
				.each(function(d) {
					var houseSymbol = d3.svg.symbol()
							.type(typeShape[d.type])
							.size(64);
					d3.select(this)
						.append('path')
						.attr('d', houseSymbol)
						.style('fill', locationScale(d.location))
						.style('stroke', 'black')
						.on('mouseover', highlightDatapoint);
				});

		xAxis = d3.svg.axis()
				.scale(xScale)
				.orient('top')
				.tickSize(4);

		yAxis = d3.svg.axis()
				.scale(yScale)
				.orient('right')
				.tickSize(4);

		svg.append('g')
			.attr('id', 'xAxisG')
			.attr('class', 'axis')
			.attr('transform', 'translate(0,' + (screenHeight - 20) + ')')
			.call(xAxis);

		svg.append('g')
			.attr('id', 'yAxisG')
			.attr('class', 'axis')
			.attr('transform', 'translate(20,0)')
			.call(yAxis);
	}

	function highlightDatapoint(d){
		d3.selectAll('li.datapoint')
			.style('font-weight', function(p) {
				return p == d ? 900 : 100;
			});

		d3.selectAll('g.datapoint')
			.select('path')
			.style('stroke-width', function(p) {
				return p == d ? '3px' : '1px';
			});

		var popup = d3.select('body').select('#popup')
				.attr('top', (yScale(d.value) - 135))
				.attr('left', (xScale(d.size) - 100));

		console.log(yScale(d.value));

		popup.selectAll('*').remove();
		popup.append('p').html(d.name);
		popup.append('p').html(d.location);
		popup.append('p').html(d.type);
		popup.append('p').html(d.size);
		popup.append('p').html(d.value);
	}

}






