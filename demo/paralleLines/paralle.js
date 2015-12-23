var numericHeaders = ["Presidency"];
var jsonData = [{"President":"George Washington","Presidency":"1","Home State":"Virginia","Party":"Independent"},{"President":"John Adams","Presidency":"2","Home State":"Massachusetts","Party":"Federalist"},{"President":"Thomas Jefferson","Presidency":"3","Home State":"Virginia","Party":"Democratic-Republican"},{"President":"James Madison","Presidency":"4","Home State":"Virginia","Party":"Democratic-Republican"},{"President":"James Monroe","Presidency":"5","Home State":"Virginia","Party":"Democratic-Republican"},{"President":"John Quincy Adams","Presidency":"6","Home State":"Massachusetts","Party":"Democratic-Republican/National Republican"},{"President":"Andrew Jackson","Presidency":"7","Home State":"Tennessee","Party":"Democratic"},{"President":"Martin Van Buren","Presidency":"8","Home State":"New York","Party":"Democratic"},{"President":"William Henry Harrison","Presidency":"9","Home State":"Ohio","Party":"Whig"},{"President":"John Tyler","Presidency":"10","Home State":"Virginia","Party":"Whig"},{"President":"James K. Polk","Presidency":"11","Home State":"Tennessee","Party":"Democratic"},{"President":"Zachary Taylor","Presidency":"12","Home State":"Louisiana","Party":"Whig"},{"President":"Millard Fillmore","Presidency":"13","Home State":"New York","Party":"Whig"},{"President":"Franklin Pierce","Presidency":"14","Home State":"New Hampshire","Party":"Democratic"},{"President":"James Buchanan","Presidency":"15","Home State":"Pennsylvania","Party":"Democratic"},{"President":"Abraham Lincoln","Presidency":"16","Home State":"Illinois","Party":"Republican/National Union"},{"President":"Andrew Johnson","Presidency":"17","Home State":"Tennessee","Party":"Democratic/National Union"},{"President":"Ulysses S. Grant","Presidency":"18","Home State":"Ohio","Party":"Republican"},{"President":"Rutherford B. Hayes","Presidency":"19","Home State":"Ohio","Party":"Republican"},{"President":"James A. Garfield","Presidency":"20","Home State":"Ohio","Party":"Republican"},{"President":"Chester A. Arthur","Presidency":"21","Home State":"New York","Party":"Republican"},{"President":"Grover Cleveland","Presidency":"22","Home State":"New York","Party":"Democratic"},{"President":"Benjamin Harrison","Presidency":"23","Home State":"Indiana","Party":"Republican"},{"President":"Grover Cleveland","Presidency":"24","Home State":"New York","Party":"Democratic"},{"President":"William McKinley","Presidency":"25","Home State":"Ohio","Party":"Republican"},{"President":"Theodore Roosevelt","Presidency":"26","Home State":"New York","Party":"Republican"},{"President":"William Howard Taft","Presidency":"27","Home State":"Ohio","Party":"Republican"},{"President":"Woodrow Wilson","Presidency":"28","Home State":"New Jersey","Party":"Democratic"},{"President":"Warren G. Harding","Presidency":"29","Home State":"Ohio","Party":"Republican"},{"President":"Calvin Coolidge","Presidency":"30","Home State":"Massachusetts","Party":"Republican"},{"President":"Herbert Hoover","Presidency":"31","Home State":"Iowa","Party":"Republican"},{"President":"Franklin D. Roosevelt","Presidency":"32","Home State":"New York","Party":"Democratic"},{"President":"Harry S. Truman","Presidency":"33","Home State":"Missouri","Party":"Democratic"},{"President":"Dwight D. Eisenhower","Presidency":"34","Home State":"Texas","Party":"Republican"},{"President":"John F. Kennedy","Presidency":"35","Home State":"Massachusetts","Party":"Democratic"},{"President":"Lyndon B. Johnson","Presidency":"36","Home State":"Texas","Party":"Democratic"},{"President":"Richard Nixon","Presidency":"37","Home State":"California","Party":"Republican"},{"President":"Gerald Ford","Presidency":"38","Home State":"Michigan","Party":"Republican"},{"President":"Jimmy Carter","Presidency":"39","Home State":"Georgia","Party":"Democratic"},{"President":"Ronald Reagan","Presidency":"40","Home State":"California","Party":"Republican"},{"President":"George H. W. Bush","Presidency":"41","Home State":"Texas","Party":"Republican"},{"President":"Bill Clinton","Presidency":"42","Home State":"Arkansas","Party":"Democratic"},{"President":"George W. Bush","Presidency":"43","Home State":"Texas","Party":"Republican"},{"President":"Barack Obama","Presidency":"44","Home State":"Illinois","Party":"Democratic"}];


var fill = d3.scale.category10();

function setColorScheme()
{
  if (colorScheme == 1)
  {
   fill = d3.scale.category10();
  }
  else if (colorScheme == 2)
  {
    fill = d3.scale.category20();
  }
  else if (colorScheme == 3)
  {
    fill = d3.scale.category20b();
  }
  else if (colorScheme == 4)
  {
    fill = d3.scale.category20c();
  }
  else if (colorScheme in colorbrewer)
  {
    fill = d3.scale.ordinal().range(colorbrewer[colorScheme][9]);
  }
  else
  {
    fill = d3.scale.category20();
  }
}

readJson = function(text, callback)
{
  callback(text ? JSON.parse(text) : null);
}

var width        = parseInt(d3.select("#chartWidth").attr("value"));
var height       = parseInt(d3.select("#chartHeight").attr("value"));
var topMargin    = parseInt(d3.select("#topMargin").attr("value"));
var rightMargin  = parseInt(d3.select("#rightMargin").attr("value"));
var bottomMargin = parseInt(d3.select("#bottomMargin").attr("value"));
var leftMargin   = parseInt(d3.select("#leftMargin").attr("value"));
var axisFontSize = parseInt(d3.select("#axisFontSize").attr("value"));
var fontSize     = parseInt(d3.select("#fontSize").attr("value"));
var opacity      = parseInt(d3.select("#opacity").attr("value"));
var colorScheme  = d3.select("#colorScheme").attr("value");
var strokeWidth  = parseInt(d3.select("#strokeWidth").attr("value"));

var titleTop = parseInt(d3.select("#titleTop").attr("value"));
var titleTop = parseInt(d3.select("#titleLeft").attr("value"));
var chartTop = parseInt(d3.select("#chartTop").attr("value"));
var chartLeft = parseInt(d3.select("#chartLeft").attr("value"));
var chartConfigTop = parseInt(d3.select("#chartConfigTop").attr("value"));
var chartConfigLeft = parseInt(d3.select("#chartConfigLeft").attr("value"));

setColorScheme();

$("#chartTitle").position({ top : titleTop, left : titleLeft });
$("#chart").position({ top : chartTop, left : chartLeft });
$("#chartConfig").position({ top : chartConfigTop, left : chartConfigLeft });

function draw()
{
  d3.select("#chart").html("");
  drawParallelLines(width, height, topMargin, rightMargin, bottomMargin, leftMargin,
                    fontSize, axisFontSize, strokeWidth);
}

function drawParallelLines(width, height, topMargin, rightMargin, bottomMargin, leftMargin,
                           fontSize, axisFontSize, strokeWidth)
{
  //var colors = d3.scale.category20().range();
  var colorNum = 0;
  var categoryMap = {}

  var x = d3.scale.ordinal()
      .rangePoints([0, width], 1);

  var y = {};

  var line = d3.svg.line();
  var axis = d3.svg.axis().orient("left");
  var background;
  var foreground;

  var svg = d3.select("#chart").append("svg")
    .attr("width", (width + leftMargin + rightMargin))
    .attr("height", height + topMargin + bottomMargin)
    .append("g")
    .attr("transform", "translate(" + leftMargin + "," + topMargin + ")");

  readJson(JSON.stringify(jsonData), function(cars)
  {
    // Extract the list of dimensions and create a scale for each.
    //x.domain(dimensions = d3.keys(cars[0]).filter(function(d)
    //{
    //  return d != "name" && (y[d] = d3.scale.linear()
    //    .domain(d3.extent(cars, function(p) { return +p[d]; }))
    //    .range([height, 0]));
    //}));

    x.domain(dimensions = d3.keys(cars[0]).filter(function(d)
    {
      if(d === "name") return false;

      if(contains(numericHeaders, d))
      {
        y[d] = d3.scale.linear()
          .domain(d3.extent(cars, function(p) { return +p[d]; }))
          .range([height, 0]);
      }
      else
      {
        y[d] = d3.scale.ordinal()
          .domain(cars.map(function(p) { return p[d]; }))
          .rangePoints([height, 0]);
      }

      return true;
    }));

    // Add grey background lines for context.
    background = svg.append("g")
      .attr("class", "background")
      .selectAll("path")
      .data(cars)
      .enter().append("path")
      .attr("d", path);

    foreground = svg.append("g")
      .attr("fill", "none")
      .attr("stroke-opacity", opacity/100.0)
      .selectAll("path")
      .data(cars)
      .enter().append("path")
      .attr("d", path)
      .attr("stroke", function(d, i) { return fill(i); })
      .attr("stroke-width", strokeWidth)
      .attr("title", function(d, i)
      {
        var info = "<table border=\"1\">";
        for (var key in cars[i])
        {
          info += "<tr><td><b><i>" + key + "</i></b></td><td>" + cars[i][key] + "</td></tr>"
        }
        return info + "</table>";
      })
      .on("mouseover", function()
      {
        d3.select(this)
          .style("stroke-width", strokeWidth + (strokeWidth/3))
          .style("stroke-opacity", 1.0);
      })
      .on("mouseout", function()
      {
        d3.select(this)
          .style("stroke-width", strokeWidth)
          .style("stroke-opacity", opacity/100);
      });

// Original random colors:
//      .attr("stroke", function(d) { return '#'+Math.floor(Math.random()*16777215).toString(16); });

    // Add a group element for each dimension.
    var g = svg.selectAll(".dimension")
      .data(dimensions)
      .enter().append("g")
      .attr("font-size", fontSize)
      .attr("class", "dimension")
      .attr("transform", function(d) { return "translate(" + x(d) + ")"; });

    // Add an axis and title.
    g.append("g")
      .attr("class", "axis")
      .each(function(d) { d3.select(this).call(axis.scale(y[d])); })
      .append("text")
      .attr("text-anchor", "middle")
      .attr("y", -9)
      .attr("font-size", axisFontSize)
      .text(String);

    // Add and store a brush for each axis.
    g.append("g")
      .attr("class", "brush")
      .each(function(d) { d3.select(this).call(y[d].brush = d3.svg.brush().y(y[d]).on("brush", brush)); })
      .selectAll("rect")
      .attr("x", -8)
      .attr("width", 16);
  });

function contains(a, obj)
{
  var i = a.length;
  while (i--)
  {
    if (a[i] === obj)
    {
      return true;
    }
  }
  return false;
}

// Returns the path for a given data point.
function path(d)
{
  return line(dimensions.map(function(p) { return [x(p), y[p](d[p])]; }));
}

// Handles a brush event, toggling the display of foreground lines.
function brush()
{
  var actives = dimensions.filter(function(p) { return !y[p].brush.empty(); }),
      extents = actives.map(function(p) { return y[p].brush.extent(); });

  foreground.style("display", function(d)
  {
    return actives.every(function(p, i)
    {
      //console.log("extents[" + i + "][0] = " + extents[i][0])
      //console.log("extents[" + i + "][1] = " + extents[i][1])
      //console.log("d[" + p + "] = " + d[p])
      // Categorical
      if (!contains(numericHeaders, p))
      {
        return extents[i][0] <= y[p](d[p]) && y[p](d[p]) <= extents[i][1];
      }
      // Numeric
      else
      {
        return extents[i][0] <= d[p] && d[p] <= extents[i][1];
      }
      }) ? null : "none";
    });
  }
}

draw();



function toggleConfig()
{
  if ($("#chartConfig").css('visibility') == 'hidden')
  {
    show("#chartConfig");
  }
  else
  {
    hide("#chartConfig");
  }
}

function hide(elt)
{
  $(elt).css("visibility", "hidden");
}

function show(elt)
{
  $(elt).css("visibility", "visible");
}

$(function()
{
  $(document).tooltip(
  {
    track : true
  });
});

  $(document).keypress(function(e)
  {
    if (e.altKey)
    {
      toggleConfig();
    }
  });

   $("#chartConfig").draggable(
   {
    zIndex: 2,
    stop: function(event, ui) {
    	var pos = $(this).position();
    	d3.select("#chartConfigTop").attr("value", pos.top);
    	d3.select("#chartConfigLeft").attr("value", pos.left);
    }
   });

   $("#chartTitle").draggable(
   {
    zIndex: 3,
    stop: function(event, ui) {
    	var pos = $(this).position();
    	d3.select("#titleTop").attr("value", pos.top);
    	d3.select("#titleLeft").attr("value", pos.left);
    }
   });

   $("#chart").draggable(
   {
    zIndex: 1,
    stop: function(event, ui) {

    	// Show dropped position.
    	var pos = $(this).position();
    	d3.select("#chartTop").attr("value", pos.top);
    	d3.select("#chartLeft").attr("value", pos.left);
    }
   });

	$(function() {
		$( "#height-slider" ).slider(
		{
	      min: 100,
		  max: 2000,
		  value: height,
		  slide : function(event, ui)
		  {
		    height = ui.value;
		    draw();
	        $("#height-input").val(height);
	        d3.select("#chartHeight").attr("value", height);
		  }
		});
		$("#height-input").val(height);
		d3.select("#chartHeight").attr("value", height);
	});

    $(function()
    {
      $("#height-input").change(function ()
      {
          height = parseInt(this.value);
          draw();
          d3.select("#chartHeight").attr("value", height);
          $("#height-slider").slider("value", height);
      });
    });

	$(function() {
		$( "#width-slider" ).slider(
		{
	      min: 100,
		  max: 2000,
		  value: width,
		  slide : function(event, ui)
		  {
		    width = ui.value;
		    draw();
	        $("#width-input").val(width);
	        d3.select("#chartWidth").attr("value", width);
		  }
		});
		$("#width-input").val(width);
		d3.select("#chartWidth").attr(width);
	});

    $(function()
    {
      $("#width-input").change(function ()
      {
          width = parseInt(this.value);
          draw();
          d3.select("#chartWidth").attr("value", width);
          $("#width-slider").slider("value", width);
      });
    });

	$(function() {
		$( "#leftmargin-slider" ).slider(
		{
	      min: 0,
		  max: 500,
		  value: leftMargin,
		  slide : function(event, ui)
		  {
		    leftMargin = ui.value;
	        draw();
	        $("#leftmargin-input").val(leftMargin);
	        d3.select("#leftMargin").attr("value", leftMargin);
		  }
		});
		$("#leftmargin-input").val(leftMargin);
		d3.select("#leftMargin").attr("value", leftMargin);
	});

    $(function()
    {
      $("#leftmargin-input").change(function ()
      {
          leftMargin = parseInt(this.value);
          draw();
          d3.select("#leftMargin").attr("value", leftMargin);
          $("#leftmargin-slider").slider("value", leftMargin);
      });
    });

	$(function() {
		$( "#rightmargin-slider" ).slider(
		{
	      min: 0,
		  max: 500,
		  value: rightMargin,
		  slide : function(event, ui)
		  {
		    rightMargin = ui.value;
	        draw();
	        $("#rightmargin-input").val(rightMargin);
	        d3.select("#rightMargin").attr("value", rightMargin);
		  }
		});
		$("#rightmargin-input").val(rightMargin);
		d3.select("#rightMargin").attr("value", rightMargin);
	});

    $(function()
    {
      $("#rightmargin-input").change(function ()
      {
          rightMargin = parseInt(this.value);
          draw();
          d3.select("#rightMargin").attr("value", rightMargin);
          $("#rightmargin-slider").slider("value", rightMargin);
      });
    });

	$(function() {
		$( "#topmargin-slider" ).slider(
		{
	      min: 0,
		  max: 500,
		  value: topMargin,
		  slide : function(event, ui)
		  {
		    topMargin = ui.value;
	        draw();
	        $("#topmargin-input").val(topMargin);
	        d3.select("#topMargin").attr("value", topMargin);
		  }
		});
		$("#topmargin-input").val(topMargin);
		d3.select("#topMargin").attr("value", topMargin);
	});

    $(function()
    {
      $("#topmargin-input").change(function ()
      {
          topMargin = parseInt(this.value);
          draw();
          d3.select("#topMargin").attr("value", topMargin);
          $("#topmargin-slider").slider("value", topMargin);
      });
    });

	$(function() {
		$( "#bottommargin-slider" ).slider(
		{
	      min: 0,
		  max: 500,
		  value: bottomMargin,
		  slide : function(event, ui)
		  {
		    bottomMargin = ui.value;
	        draw();
	        $("#bottommargin-input").val(bottomMargin);
	        d3.select("#bottomMargin").attr("value", bottomMargin);
		  }
		});
		$("#bottommargin-input").val(bottomMargin);
		d3.select("#bottomMargin").attr("value", bottomMargin);
	});

    $(function()
    {
      $("#bottommargin-input").change(function ()
      {
          bottomMargin = parseInt(this.value);
          draw();
          d3.select("#bottomMargin").attr("value", bottomMargin);
          $("#bottommargin-slider").slider("value", bottomMargin);
      });
    });

	$(function() {
		$( "#axisfontsize-slider" ).slider(
		{
	      min: 0,
		  max: 100,
		  value: axisFontSize,
		  slide : function(event, ui)
		  {
		    axisFontSize = ui.value;
	        draw();
	        $("#axisfontsize-input").val(axisFontSize);
	        d3.select("#axisFontSize").attr("value", axisFontSize);
		  }
		});
		$("#axisfontsize-input").val(axisFontSize);
		d3.select("#axisFontSize").attr("value", axisFontSize);
	});

    $(function()
    {
      $("#axisfontsize-input").change(function ()
      {
          axisFontSize = parseInt(this.value);
          draw();
          d3.select("#axisFontSize").attr("value", axisFontSize);
          $("#axisfontsize-slider").slider("value", axisFontSize);
      });
    });

	$(function() {
		$( "#fontsize-slider" ).slider(
		{
	      min: 0,
		  max: 100,
		  value: fontSize,
		  slide : function(event, ui)
		  {
		    fontSize = ui.value;
	        draw();
	        $("#fontsize-input").val(fontSize);
	        d3.select("#fontSize").attr("value", fontSize);
		  }
		});
		$("#fontsize-input").val(fontSize);
		d3.select("#fontSize").attr("value", fontSize);
	});

    $(function()
    {
      $("#fontsize-input").change(function ()
      {
          fontSize = parseInt(this.value);
          draw();
          d3.select("#fontSize").attr("value", fontSize);
          $("#fontsize-slider").slider("value", fontSize);
      });
    });

	$(function() {
		$( "#opacity-slider" ).slider(
		{
	      min: 0,
		  max: 100,
		  value: opacity,
		  slide : function(event, ui)
		  {
		    opacity = ui.value;
	        draw();
	        $("#opacity-input").val(opacity);
	        d3.select("#opacity").attr("value", opacity);
		  }
		});
		$("#opacity-input").val(opacity);
		d3.select("#opacity").attr("value", opacity);
	});

    $(function()
    {
      $("#opacity-input").change(function ()
      {
          opacity = parseInt(this.value);
          draw();
          d3.select("#opacity").attr("value", opacity);
          $("#opacity-slider").slider("value", opacity);
      });
    });

	$(function() {
		$( "#strokewidth-slider" ).slider(
		{
	      min: 0,
		  max: 50,
		  value: strokeWidth,
		  slide : function(event, ui)
		  {
		    strokeWidth = ui.value;
	        draw();
	        $("#strokewidth-input").val(strokeWidth);
	        d3.select("#strokeWidth").attr("value", strokeWidth);
		  }
		});
		$("#strokewidth-input").val(strokeWidth);
		d3.select("#strokeWidth").attr("value", strokeWidth);
	});

    $(function()
    {
      $("#strokewidth-input").change(function ()
      {
          strokeWidth = parseInt(this.value);
          draw();
          d3.select("#strokeWidth").attr("value", strokeWidth);
          $("#strokewidth-slider").slider("value", strokeWidth);
      });
    });

    $(function()
    {
      $("#colorschemeSelection").change(function ()
      {
          colorScheme = this.value;
          setColorScheme();
          draw();
          d3.select("#colorScheme").attr("value", colorScheme);
      });
    });

  function titleChange(newTitle)
  {
    d3.select("title").text(newTitle);
    d3.select("#titletext").text(newTitle);
  }
