var species = ["setosa", "versicolor", "virginica"],
    traits = ["sepal length", "petal length", "sepal width", "petal width"];

var m = [80, 160, 200, 160],
    w = 1280 - m[1] - m[3],
    h = 800 - m[0] - m[2];

var x = d3.scale.ordinal().domain(traits).rangePoints([0, w]),
    y = {};

var line = d3.svg.line(),
    axis = d3.svg.axis().orient("left"),
    foreground;

var svg = d3.select("body").append("svg:svg")
    .attr("width", w + m[1] + m[3])
    .attr("height", h + m[0] + m[2])
  .append("svg:g")
    .attr("transform", "translate(" + m[3] + "," + m[0] + ")");

d3.csv("iris.csv", function(flowers) {

  // Create a scale and brush for each trait.
  traits.forEach(function(d) {
    // Coerce values to numbers.
    flowers.forEach(function(p) { p[d] = +p[d]; });

    y[d] = d3.scale.linear()
        .domain(d3.extent(flowers, function(p) { return p[d]; }))
        .range([h, 0]);
 });

  // Add foreground lines.
  foreground = svg.append("svg:g")
      .attr("class", "foreground")
    .selectAll("path")
      .data(flowers)
    .enter()

    .append("svg:path")
  //   .transition()
  // .duration(500)
      .attr("d", path)


      .attr("class", function(d) { return d.species; });

  // Add a group element for each trait.
  var g = svg.selectAll(".trait")
      .data(traits)
    .enter().append("svg:g")
      .attr("class", "trait")
      .attr("transform", function(d) { return "translate(" + x(d) + ")"; })

  // Add an axis and title.
  g.append("svg:g")
      .attr("class", "axis")
      .each(function(d) { d3.select(this).call(axis.scale(y[d])); })
    .append("svg:text")
      .attr("text-anchor", "middle")
      .attr("y", -9)
      .text(String);

});

// Returns the path for a given data point.
function path(d) {
  return line(traits.map(function(p) { return [x(p), y[p](d[p])]; }));
}
