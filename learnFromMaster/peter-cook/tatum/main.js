d3.json('data/tatum.json', function(err, json) {
    console.log(json);
  var radiusScale = d3.scale.sqrt().domain([0, 500000]).range([0.5, 8]);
  var linkOpacityScale = d3.scale.linear().domain([0.5, 1]).range([0.2, 0.6]);
  var linkWidthScale = d3.scale.linear().domain([0.5, 1]).range([0.4, 1]);
  var rootName = 'Art Tatum';

  var voronoi = d3.geom.voronoi()
    .x(function(d) {return d.x;})
    .y(function(d) {return d.y;})
    .clipExtent([[0, 0], [1200, 1000]]);

  function init() {
    // offset nodes
    var x = 10, y = 110;
    _.each(json.nodes, function(d) {
      d.x += x;
      d.y += y;

      d.lstnrs = d.lstnrs;
    });
  }

  function setupEvents() {
    d3.select('.sidebar')
      .on('mouseover', function() {
        highlightArtist(rootName);
      });

    d3.selectAll('.sidebar span.artist-tag')
      .on('mouseover', function() {
        var artist = d3.select(this).text();
        highlightArtist(artist);
        d3.event.stopPropagation();
      });
  }

  function doVoronoi() {
    var polygons = voronoi(json.nodes);

    json.nodes = _.map(json.nodes, function(d, i) {
      d.polygon = polygons[i];
      return d;
    });
  }

  function setTooltipWidth(w) {
    var d = 'm0,0 l-5,-5 l-' + (0.5*w-5) + ',0 l0,-25 l' + w + ',0 l0,25 l-' + (0.5*w-5) + ',0 z';
    d3.select('.tooltip path')
      .attr('d', d);
  }

  function updateTooltip(d) {
    d3.select('g.tooltip')
      .transition()
      .duration(100)
      .attr('transform', 'translate(' + d.x + ',' + (d.y - radiusScale(d.lstnrs)) + ')');

    setTooltipWidth(20 + d.name.length * 8);
    d3.select('g.tooltip')
      .select('text')
      .text(d.name.toUpperCase());
  }

  function highlightArtist(a) {
    _.each(json.nodes, function(d) {
      if(d.name !== a)
        return;

      updateTooltip(d);
    });
  }

  function createNodes() {
    svgLinks = d3.select('svg g.force')
      .selectAll('line')
      .data(json.links)
      .enter()
      .append('line')
      .attr('x1', function(d) {return json.nodes[d.s].x;})
      .attr('y1', function(d) {return json.nodes[d.s].y;})
      .attr('x2', function(d) {return json.nodes[d.t].x;})
      .attr('y2', function(d) {return json.nodes[d.t].y;})
      .style('opacity', function(d) {
        return linkOpacityScale(d.sim);
      })
      .style('stroke-width', function(d) {
        return linkWidthScale(d.sim);
      });

    svgNodes = d3.select('svg g.force')
      .selectAll('g.node')
      .data(json.nodes)
      .enter()
      .append('g')
      .classed('node', true)
      .on('mouseover', function(d) {
        d3.select(this).classed('hover', true);
        updateTooltip(d);
      })
      .on('mouseout', function() {
        d3.select(this).classed('hover', false);
      });

    svgNodes.append('path')
      .attr('d', function(d) {return d.polygon.length > 0 ? 'M' + d.polygon.join(',') + 'Z' : '';});

    svgNodes.append('circle')
      .attr('cx', function(d) {
        return d.x;
      })
      .attr('cy', function(d) {
        return d.y;
      })
      .attr('r', function(d) {
        return radiusScale(d.lstnrs);
      });

    svgNodes
      .append('text')
      .attr('x', function(d) {
        return d.x;
      })
      .attr('y', function(d) {
        return d.y;
      })
      .text(function(d) {
        return d.name;
      })
      .each(function(d) {
        var size = d3.max([d3.min([d.lstnrs / 10000, 4]), 1]);
        d3.select(this)
          .style('font-size', size + 'px')
          .attr('dy', 0.33 * size);
      });
  }

  init();
  doVoronoi();
  createNodes();
  setupEvents();
  highlightArtist(rootName);
});
