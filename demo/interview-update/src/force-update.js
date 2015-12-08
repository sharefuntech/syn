var data_1 = {
    nodes: [{
        name: 'hello1'
    },{
        name: 'hello2'
    },{
        name: 'hello3'
    }],
    links: [{
        source: 'hello1',
        target: 'hello2'
    }]
};

var data_2 = {
    nodes: [{
        name: 'hello1'
    },{
        name: 'hello3'
    },{
        name: 'hello4'
    }],
    links: [{
        source: 'hello1',
        target: 'hello3'
    }]
};

//test multi edges
// var data_3 = {
//     nodes: [{
//         name: 'hello1'
//     },{
//         name: 'hello3'
//     },{
//         name: 'hello4'
//     }],
//     links: [{
//         source: 'hello1',
//         target: 'hello3'
//     },
//     {
//         source: 'hello1',
//         target: 'hello4'
//     }]
// };

//setup svg stage
var width = 400;
var height = 400;

var svg = d3.select("body")
    .append("svg")
    .attr("width",width)
    .attr("height",height);

dataTest = addIndex(data_1);
drawForce(dataTest, svg);

dataUpdate = addIndex(data_2);

window.setTimeout(update(dataUpdate, svg), 3000);

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

function drawForce(data, svg) {
    var nodes = data.nodes;
    var edges = data.links;

    var force = d3.layout.force()
        .nodes(nodes)   //指定节点数组
        .links(edges)   //指定连线数组
        .size([400,400]) //指定范围
        .linkDistance(150)  //指定连线长度
        .charge([-400]);  //相互之间的作用力

    force.start();  //开始作用

    var color = d3.scale.category20();

    //添加连线    
    var svg_edges = svg.selectAll("line")
        .data(edges)
        .enter()
        .append("line")
        .style("stroke","#ccc")
        .style("stroke-width",5);

    //添加节点      
    var svg_nodes = svg.selectAll("circle")
        .data(nodes)
        .enter()
        .append("circle")
        .attr("r",20)
        .style('fill', 'gray')
        .call(force.drag);  //使得节点能够拖动

    //添加描述节点的文字
    var svg_texts = svg.selectAll("text")
        .data(nodes)
        .enter()
        .append("text")
        .style("fill", "black")
        .attr("dx", 20)
        .attr("dy", 8)
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

function update(data, svg) {
    return function() {
        var nodes = data.nodes;
        var edges = data.links;

        var force = d3.layout.force()
            .nodes(nodes)   //指定节点数组
            .links(edges)   //指定连线数组
            .size([400,400]) //指定范围
            .linkDistance(150)  //指定连线长度
            .charge([-400]);  //相互之间的作用力

        force.start();  //开始作用

        var color = d3.scale.category20();

         var svg_edges = svg.selectAll("line")
            .data(edges)
            .exit()
            .remove();

        //添加连线    
        svg_edges = svg.selectAll("line")
            .data(edges)
            .enter()
            .append("line")
            .style("stroke","#ccc")
            .style("stroke-width",5);

        var svg_nodes = svg.selectAll("circle")
            .data(nodes, key)
            .exit()
            .remove();

        //添加节点      
        svg_nodes = svg.selectAll("circle")
            .data(nodes)
            .enter()
            .append("circle")
            .attr("r",20)
            .style('fill', 'gray')
            .call(force.drag);  //使得节点能够拖动

        var svg_texts = svg.selectAll("text")
            .data(nodes, key)
            .exit()
            .remove();

        //添加描述节点的文字
        svg_texts = svg.selectAll("text")
            .data(nodes)
            .enter()
            .append("text")
            .style("fill", "black")
            .attr("dx", 20)
            .attr("dy", 8)
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

//Define key function, to be used when binding data
var key = function(d) {
    return d.key;
};