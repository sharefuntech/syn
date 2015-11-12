createSoccerViz();

function createSoccerViz() {
	d3.csv('data/worldcup.csv', function(data) {
		overallTeamViz(data);
	});
}

function overallTeamViz(incomingData) {
	d3.select('body').select('svg')
		.append('g')
		.attr('id', 'teamsG')
		.attr('transform', 'translate(50, 300)')
		.selectAll('g')
		.data(incomingData)
		.enter()
		.append('g')
		.attr('class', 'overallG')
		.attr('transform', function(d, i) {
			return 'translate(' + (i*50) + ',0)';
		});

	var teamsG = d3.selectAll('g.overallG');

	teamsG.append('circle')
		.attr('r', 20)
		.style('fill', 'pink')
		.style('stroke', 'gray');

	teamsG.append('text')
		.attr('y', 30)
		.style('text-anchor', 'middle')
		.style('fill', 'black')
		.text(function(d) {return d.team;});
}