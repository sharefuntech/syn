//###############################################################
//### scroll page start #########################################
$(".main").onepage_scroll({loop: false});
//### scroll page end #########################################

//###############################################################
//### viz start ###############################################
// 视口查询
// var viewportWidth = window.innerWidth; // ios safari刷新后svg图像莫名变大
// var viewportHeight = window.innerHeight;
var viewportWidth = document.documentElement.clientWidth;
var viewportHeight = document.documentElement.clientHeight;
// console.log(viewportWidth);
// console.log(viewportHeight);

d3.csv('data/hongbao.csv', function(data) {
    data.forEach(function(d) {
        d.money_received = +d.money_received;
        // d.hb_id = +d.hb_id;
    });
    // console.log(data);
    // 在这里可以做不同设备的视口设置，代替css方案
    var svgMinCanvas = d3.min([viewportWidth, viewportHeight]);
    // console.log(svgMaxCanvas);
    drawForce(data, '#vizContainer-1', svgMinCanvas, svgMinCanvas)
    drawBundle(data, '#vizContainer-2', svgMinCanvas, svgMinCanvas);

    //###################################################################
    //### bundle start #################################################
    function drawForce(data, container, svgWidth, svgHeight) {
        var nodes = [];
        var links = [];

        data.forEach(function(d) {
            var link = {
                source: d.people_name,
                target: d.hb_id
            };
            links.push(link);
        });

        var dataNestedById = d3.nest()
            .key(function(d) {
                return d.hb_id;
            })
            .entries(data);

        dataNestedById.forEach(function(d) {
            // console.log(d.key);
            var node = {name: d.key};
            nodes.push(node);
        });

        var dataNestedByPeople = d3.nest()
            .key(function(d) {
                return d.people_name;
            })
            .entries(data);
        // console.log(dataNestedByPeople);
        dataNestedByPeople.forEach(function(d) {
            // console.log(d.key);
            var node = {name: d.key};
            nodes.push(node);
        });
        // console.log(nodes);

        var forceData = {
            nodes: nodes,
            links: links
        };
        // console.log(forceData);
        var width = svgWidth;
        var height = svgHeight;

        var svg = d3.select(container)
            .append("svg")
            .attr("width",width)
            .attr("height",height - 50);

        var forceDataIndexed = addIndex(forceData);

        setForce(forceDataIndexed, svg);

        function addIndex(data) {
            var dataIndexed = {};
            var nodesArray = [];
            var nodesData = data.nodes;
            var linksData = data.links;
            var linkIndexed;

            for(keys in nodesData) {
                nodesArray.push(nodesData[keys].name);
            }

            linkIndexed = linksData.map(function(link) {
                var sourceData = link.source;
                var targetData = link.target;

                var sourceIndex = nodesArray.indexOf(sourceData);
                var targetIndex = nodesArray.indexOf(targetData);

                return {source: sourceIndex, target: targetIndex};
            });

            dataIndexed.nodes = nodesData;
            dataIndexed.links = linkIndexed;

            return dataIndexed;
        }

        function setForce(data, svg) {
            var nodes = data.nodes;
            var edges = data.links;

            var force = d3.layout.force()
                .nodes(nodes)   //指定节点数组
                .links(edges)   //指定连线数组
                .size([width-30,height-30]) //指定范围
                .linkDistance(100)  //指定连线长度
                .charge([-300]);  //相互之间的作用力

            force.start();  //开始作用

            var color = d3.scale.category20();

            //添加连线
            var svg_edges = svg.selectAll("line")
                .data(edges)
                .enter()
                .append("line")
                .style("stroke","#eee")
                .style("stroke-width",1);

            //添加节点
            var svg_nodes = svg.selectAll("circle")
                .data(nodes)
                .enter()
                .append("circle")
                .attr("r",10)
                .style('fill', 'gray')
                .style('fill-opacity', .7)
                .call(force.drag);  //使得节点能够拖动

            //添加描述节点的文字
            var svg_texts = svg.selectAll("text")
                .data(nodes)
                .enter()
                .append("text")
                .style("fill", "black")
                .style('font-size', 10)
                .attr('text-anchor', 'middle')
                .attr("dx", 0)
                .attr("dy", -8)
                .text(function(d){
                    return d.name;
                });

            force.on("tick", function(){  //对于每一个时间间隔
                //更新连线坐标
                svg_edges.attr("x1",function(d){ return d.source.x; })
                    .attr("y1",function(d){ return d.source.y; })
                    .attr("x2",function(d){ return d.target.x; })
                    .attr("y2",function(d){ return d.target.y; });

                //更新节点坐标
                svg_nodes.attr("cx",function(d){ return d.x; })
                    .attr("cy",function(d){ return d.y; });

                //更新文字坐标
                svg_texts.attr("x", function(d){ return d.x; })
                    .attr("y", function(d){ return d.y; });
            });
        }

    }
    //### bundle end #################################################

    //###################################################################
    //### bundle start #################################################
    function drawBundle(data, container, svgWidth, svgHeight) {
        var bundleLinks = [];

        data.forEach(function(d) {
            var link = {
                source: d.hb_id,
                target: d.people_name
            };
            bundleLinks.push(link);
        });

        var dataNestedById = d3.nest()
            .key(function(d) {
                return d.hb_id;
            })
            .entries(data);
        // console.log(dataNestedById);

        var nodesId = dataNestedById.map(function(d) {
            return {name: d.key};
        });
        // console.log(children);

        var dataNestedByPeople = d3.nest()
            .key(function(d) {
                return d.people_name;
            })
            .entries(data);

        var nodesPeople = dataNestedByPeople.map(function(d) {
            return {name: d.key};
        });

        var nodesAll = nodesId.concat(nodesPeople);

        var bundleNodes = {
            name: '',
            children: nodesAll
        };

        var width  = svgWidth;	//SVG绘制区域的宽度
        var height = svgHeight;	//SVG绘制区域的高度

        var svg = d3.select(container)			//选择<body>
                    .append("svg")
                    .attr('id', 'diagram')			//在<body>中添加<svg>
                    .attr("width", width)	//设定<svg>的宽度属性
                    .attr("height", height);//设定<svg>的高度属性

        // //just for png background-color
        // svg.append('rect')
        //     .attr("width", width)
        //     .attr("height", height)
        //     .style('fill', 'black');

        var cluster = d3.layout.cluster()
                        .size([width *1.2, height/2])
                        .separation(function(a, b) { return (a.parent == b.parent ? 1 : 2) / a.depth; });

        var bundle = d3.layout.bundle();

        var nodes = cluster.nodes(bundleNodes);
        // console.log(nodes);

        var oLinks = map(nodes, bundleLinks);
        // console.log(oLinks);

        var links = bundle(oLinks);
        // console.log(links);

        //将links中的source和target由名称替换成节点
        function map( nodes, links ){
            var hash = [];
            for(var i = 0; i < nodes.length; i++){
                hash[nodes[i].name] = nodes[i];
            }
            var resultLinks = [];
            for(var i = 0; i < links.length; i++){
                resultLinks.push({  source: hash[ links[i].source ],
                                    target: hash[ links[i].target ]
                                });
            }
            return resultLinks;
        }
        //3. 绘图
        var line = d3.svg.line.radial()
                    .interpolate("bundle")
                    .tension(.85)
                    .radius(function(d) { return d.y; })
                    .angle(function(d) { return d.x / 180 * Math.PI; });

        gBundle = svg.append("g")
                    .attr("transform", "translate(" + (width/2) + "," + (height/2) + ")");

        var color = d3.scale.category20c();

        var link = gBundle.selectAll(".link")
              .data(links)
              .enter()
              .append("path")
              .attr("class", "link")
              .attr("d", line);	//使用线段生成器

        var node = gBundle.selectAll(".node")
              .data( nodes.filter(function(d) { return !d.children; }) )
              .enter()
              .append("g")
              .attr("class", "node")
              .attr("transform", function(d) {
                    return "rotate(" + (d.x- 90) + ")translate(" + d.y + ")" + "rotate("+ (90 - d.x) +")";
              });

        node.append("circle")
              .attr("r", function(d, i) {
                //  return 20 + i;
                return 2;
              })
              .style('fill', 'brown');
            //   .style("fill",function(d,i){ return color(i); });

        // node.append("text")
        // 	.attr("dy",".2em")
        // 	.style("text-anchor", "middle")
        // 	.text(function(d) { return d.name; });
    }
    //###end drawBundle #################################################

});
