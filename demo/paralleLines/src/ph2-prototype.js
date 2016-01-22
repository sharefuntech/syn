////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
// view ////////////////////////
/*
modeButtonGroup: {
    country: @click:enterCityMode,
    province: @click:enterProvinceMode,
    city: @click:enterCityMode,
    town: @click:enterTownMode
},
countrlPanel: {
    select: dataSourceMode,
    select: country,
    select: province,
    select: city,
    select: town
},
button: {
    @click:drawGraph
}
*/
////////////////////////////////

// viewModel ///////////////////
/*
el:#app,
data:data,
methods:methods,
computed:computed
*/
////////////////////////////////

// model ////////////////////////
/*
data: {
    geoData: { //国家、省、地市、县的全部原始数据,csv载入之后未处理的数据
        countryProvinceCityTownList: '',
        country: '',
        province: '',
        city: '',
        town: ''
    },
    placeList: { //存储地点list，用于菜单展开
        countryList: '',
        provinceList: '',
        cityList: '',
        townList: ''
    },
    dataSourceMode:['country', 'province', 'city', 'town'], //数据源选项
    selectedStatus: { //选中的菜单项，
        selectedDataSourceMode = '',
        selectedCountryList = [],
        selectedProvinceList = [],
        selectedCityList = [],
        selectedTownList = []
    },
    controlPanelVisibility: { //控制面板四大类的显示控制
        country: true,
        province: false,
        city: false,
        town: false
    }
},
methods: {
     //(应该改成模式切换，不仅仅是面板显示问题，还涉及到列表状态数据的初始化)按钮点击后显示／隐藏不同模式下的控制面板 === 其实这个在computed里面处理更好，关键是mode状态
     showControlPanel,
     enterCountryMode, //进入country模式，调用getCountryList等
     enterProvinceMode, //进入province模式，调用getCountryList等
     enterCityMode, //进入province模式，调用getCountryList等
     enterTownMode, //进入province模式，调用getCountryList等
},
computed: {
    getCountryList, //进入不同模式后，返回相对应的countryList
    getProvinceList, //进入不同模式后，返回相对应的provinceList
    getCityList, //进入不同模式后，返回相对应的cityList
    getTownList ////进入不同模式后，返回相对应的townList
}
*/
////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

//debug config
Vue.config.debug = true;

queue()
    .defer(d3.csv, 'data/list-province-city.csv')
    .defer(d3.csv, 'data/data-province.csv')
    .await(function(error, listProvinceCity, dataProvince) {
        // console.log(listProvinceCity);
        // console.log(dataProvince);
        var dataSourceMode = [
            {mode: 'country', label: '世界各国数据'},
            {mode: 'province', label: '中国省份数据'},
            {mode: 'city', label: '中国地级市数据'},
            {mode: 'town', label: '中国县级数据'},
        ];
        //temperary country list
        var countryListTemp = [
            {country: 'china', label: '中国'},
            {country: 'america', label: '美国'},
            {country: 'japan', label: '日本'},
            {country: 'thailand', label: '泰国'},
            {country: 'netherland', label: '荷兰'}
        ];

        //******************************************************
        /// vue global config start
        //******************************************************
        //### filter start #####################################
        //将对象数组处理后转化为数组
        Vue.filter('displayShortDimensionKeyName', function (keyObjArr) {
            var keyNameArr = [];
            keyObjArr.forEach(function(d) {
                keyNameArr.push(d.name);
            })
            return keyNameArr;
        });
        //### filter end #######################################
        /// vue global config end ******************************

        //******************************************************
        /// model start
        //******************************************************
        var model = {};
        //data for vue model
        model.data = {
            geoData: { //国家、省、地市、县的全部原始数据,csv载入之后未处理的数据
                countryProvinceCityTownList: listProvinceCity, //临时省级列表
                country: countryListTemp, //临时国家数据
                province: dataProvince,
                city: '',
                town: ''
            },
            dataSourceMode:['country', 'province', 'city', 'town'], //数据源选项
            selectedStatus: { //选中的菜单项，
                selectedDataSourceMode: 'country',
                selectedCountryList: ['china'],
                selectedProvinceList: [],
                selectedCityList: [],
                selectedTownList: [],
                selectedDimensionKeys:[] //选中的数据指标
            },
            controlPanelVisibility: { //控制面板四大类的显示控制
                country: true,
                province: false,
                city: false,
                town: false
            },
            graphConfig: {
                svgWidth: 800, //初始化设置为800,实例化图表时进行覆盖
                svgHeight: 500, //初始化设置为500,实例化图表时进行覆盖
                margin: {
                    top: 50,
                    bottom:30,
                    left: 50,
                    right: 50
                },
                color: d3.scale.category10()
            },
            parallelConfig: { //平行数据指标，指标索引、转换后的平行数据
                dimensionKeys: [],
                displayDimensionKeys: [], //显示出来用于选择的指标，去除年份和区域
                paralleledData: ''
            }
        }

        model.methods = {
            // 控制4个模式面板的显示，确保只有一个显示
            showControlPanel: function(mode) {
                for (key in this.controlPanelVisibility) {
                    // console.log(this.controlPanelVisibility[key]);
                    this.controlPanelVisibility[key] = false;
                }

                this.controlPanelVisibility[mode] = true;
                // console.log(this.controlPanelVisibility);
                // 确定选择数据源模式
                // this.selectedSourceMode = mode;
            },
            // 重置地域选项
            resetSelectedStatus: function() {
                this.selectedStatus.selectedCountryList = [];
                this.selectedStatus.selectedProvinceList = [];
                this.selectedStatus.selectedCityList = [];
                this.selectedStatus.selectedTownList = [];
                this.selectedStatus.selectedDimensionKeys = [];
            },
            // 初始化每个模式面板的菜单渲染数据
            iniSelectedStatus: function(mode) {
                resetSelectedStatus();

            },
            // 按钮点击进入不同模式，同时初始化变量
            enterMode: function(mode) {
                this.selectedStatus.selectedDataSourceMode = mode;
                this.showControlPanel(mode);
                // iniSelectedStatus(mode);
            },
            //进入province模式根据国家抽取省份列表
            filterProvinceByCountry: function(selectedCountry) {
                var country = selectedCountry; //暂时不检验选中国家，默认返回中国数据
                var place = d3.nest()
                    .key(function(d) {
                        // 暂时使用省份索引
                        return d.province;
                    })
                    // 暂时使用省份索引
                    .entries(this.geoData.countryProvinceCityTownList);
                // console.log(place);
                var provinceList = place.map(function(d) {
                    return d.key;
                });

                return provinceList;
            },
            filterCityByProvince: function(selectedProvince) {

            },
            filterTownByCity: function(selectedCity) {

            },
            // 抽取平行数据指标
            generateParallelDimensionKeys: generateParallelDimensionKeys,
            // 绘制图表
            drawGraph: drawGraph
        }

        model.computed = {
            // 用于选择国别菜单展开
            getCountryList: function() {
                if (this.selectedStatus.selectedDataSourceMode == 'country') {
                    //临时国别数据
                    return this.geoData.country;
                } else {
                    return {country: 'china', label: '中国'};
                }
            },
            // 用于选择省份菜单展开
            getProvinceList: function() {
                if (this.selectedStatus.selectedDataSourceMode != 'country') {
                    // console.log(' I am getProvinceList');
                    return this.filterProvinceByCountry(this.selectedStatus.selectedCountryList[0]);
                } else {
                    return [];
                }
            },
            // 用于选择国别地市菜单展开
            getCityList: function() {

            },
            // 用于选择县级菜单展开
            getTownList: function() {

            },
            // 用于选择指标菜单展开
            getParallelDimensionKeys: function() {
                if (this.selectedStatus.selectedDataSourceMode == 'province') { //暂时注册province模式
                    return this.generateParallelDimensionKeys();
                } else {
                    return [];
                }
            }
        }
        /// model end *****************************************

        //******************************************************
        /// modelView start
        //******************************************************
        var vm = new Vue({
            el: '#app',
            data: model.data,
            methods: model.methods,
            computed: model.computed
        });
        /// modelView end **************************************

        //******************************************************
        /// function definition start
        //******************************************************


        //### generateParallelDimensionKeys start ##############
        function generateParallelDimensionKeys() {
            // 获取数据来源模式
            var mode = this.selectedStatus.selectedDataSourceMode;
            // 根据模式获取对应数据源
            var data = this.geoData[mode];
            // // csv文件原始索引
            // var csvIndex = [];
            // // 转换成平行数据
            // var paralleledData;
            // // 指标索引
            // var dimensionKeys = [];

            this.parallelConfig.paralleledData = parseData(data);// 平行化数据
            this.parallelConfig.dimensionKeys = getDimensionKeys(this.parallelConfig.paralleledData); // 抽取平行数据索引

            //不能在匿名函数里使用this.parallelConfig.displayDimensionKeys，闭包的作用域会出错
            var arrayBridgeForDisplayDimensionKeys = [];

            this.parallelConfig.dimensionKeys.forEach(function(d) {
                if (d != '区域' && d != '年份') {
                    var keySplit = d.split('_');
                    var fullKey = d;
                    var shortKey = keySplit[0];

                    arrayBridgeForDisplayDimensionKeys.push(
                        { name: shortKey, value: fullKey}
                    );
                    // console.log(d);
                }
            });

            // console.log(arrayBridgeForDisplayDimensionKeys);
            this.parallelConfig.displayDimensionKeys = arrayBridgeForDisplayDimensionKeys;

            return this.parallelConfig.displayDimensionKeys;

            // 指标索引
            function getDimensionKeys(paralleledData) {
                var dimensionKeys = [];
                for (key in paralleledData[0]) {
                    dimensionKeys.push(key);
                }
                return dimensionKeys;
            }

            // 将数据转换为平行坐标格式######
            function parseData(data) {
                // console.log(data);
                var dataProcessed = [];
                data.forEach(function(d) {
                    d.年份 = +d.年份;
                    d.指标值 = +d.指标值;
                    d[d.指标名称] = d.指标值;
                    var obj = {};
                    obj['区域'] = d.区域;
                    obj['年份'] = d.年份;
                    obj[d.指标名称] = d.指标值;
                    dataProcessed.push(obj);
                });
                // console.log(dataProcessed);

                var dataNested = d3.nest()
                    .key(function(d) {
                        return d.区域;
                    })
                    .key(function(d) {
                        return d.年份;
                    })
                    .entries(dataProcessed);
                    // console.log(dataNested);

                var dataParallel = [];
                var keyYear = '年份';
                var keyPlace = '区域';

                dataNested.forEach(function(d) {
                    var place = d.key;
                    d.values.forEach(function(e) {
                        // console.log(e);
                        var year = +e.key;
                        var obj = {};
                        obj[keyYear] = year;
                        obj[keyPlace] = place;
                        e.values.forEach(function(f) {
                            for(key in f) {
                                if (key != keyPlace && key != keyYear) {
                                    // console.log(key + ': ' + f[key]);
                                    obj[key] = f[key];
                                }
                            }
                        });
                        dataParallel.push(obj);
                    });
                });

                return dataParallel;
            }
        }
        //### generateParallelDimensionKeys end ##############

        //绘制图表
        //### 绘制图表drawGraph start #########################
        function drawGraph() {
            var selectedStatus = this.selectedStatus; //控制面板选择状态参数
            console.log(selectedStatus.selectedProvinceList);
            var parallelConfig = this.parallelConfig; //平行数据参数
            // console.log(parallelConfig.paralleledData);
            // 实例化图表设置
            var graphConfig = this.graphConfig;
            // 设置图表实例边距
            var pageNavbarHeight = 0;
            var containerVerticalMargin = 120;
            var containerHorizontalMargin = 50;
            var svg; // 图表svg

            // paralleledData = parseData(data);// 平行化数据
            // dimensionKeys = getDimensionKeys(paralleledData); // 抽取平行数据索引
            setSvgConfig(); // 设置svg画布参数
            // 初始化svg画布
            svg = iniSvg(graphConfig, '#vizContainer');

            // 上海、台湾、广西、澳门、香港 数据有问题无法筛选出来
            var filterParalleledData = filterParalleledDataBySelectedProvinces(selectedStatus, parallelConfig);
            console.log(filterParalleledData);

            function filterParalleledDataBySelectedProvinces(selectedStatus, parallelConfig) {
                var selectedProvinces = d3.set();
                selectedStatus.selectedProvinceList.forEach(function(d) {
                    selectedProvinces.add(d);
                });
                console.log(selectedProvinces);

                // var filterParalleledData = parallelConfig.paralleledData.filter(function(d) {
                //     selectedProvinces.has(d['区域']);
                // });

                var filterParalleledData = [];
                parallelConfig.paralleledData.forEach(function(d) {
                    if (selectedProvinces.has(d['区域'])) {
                        filterParalleledData.push(d);
                    }
                })

                return filterParalleledData;
            }

            // testDraw();
            bootParallelGraph(svg, graphConfig, selectedStatus, filterParalleledData);

            //初始化svg画布################
            function iniSvg(graphConfig, vizContainer) {
                if (d3.select('svg')) {
                    d3.select('svg').remove();
                }
                var svg = d3.select(vizContainer).append('svg')
                    .attr('width', graphConfig.svgWidth + graphConfig.margin.left + graphConfig.margin.right)
                    .attr('height', graphConfig.svgHeight + graphConfig.margin.top + graphConfig.margin.bottom);

                return svg;
            }

            // 设置svg画布参数
            function setSvgConfig() {
                graphConfig.svgWidth = document.getElementById('vizContainer').offsetWidth - containerHorizontalMargin;
                graphConfig.svgHeight = document.documentElement.clientHeight - pageNavbarHeight - containerVerticalMargin;
            }

            function testDraw() {
                svg.append('rect')
                    .attr('width', graphConfig.svgWidth)
                    .attr('height', graphConfig.svgHeight)
                    .style('fill', 'teal');
            }

            //start 生成parallel图#########
            function bootParallelGraph(svg, graphConfig, selectedStatus, filterParalleledData) {
                var dimensions = iniDimensions(graphConfig, selectedStatus)
                // console.log(dimensions);
                var vizG = svg.append('g')
                    .attr('id', 'vizG')
                    .attr("transform", "translate(" + graphConfig.margin.left + "," + graphConfig.margin.top + ")");

                var x = d3.scale.ordinal()
                    .domain(dimensions.map(function(d) { return d.name; }))
                    .rangePoints([0, graphConfig.svgWidth]);

                var yAxis = d3.svg.axis()
                    .orient("left");

                var line = d3.svg.line()
                    .defined(function(d) { return !isNaN(d[1]); });

                var dimension = d3.select('#vizG')
                    .selectAll(".dimension")
                    .data(dimensions)
                    .enter()
                    .append("g")
                    .attr("class", "dimension")
                    .attr("transform", function(d) {
                        return "translate(" + x(d.name) + ")";
                    });

                dimensions.forEach(function(dimension) {
                    dimension.scale.domain(dimension.type === Number
                        ? d3.extent(filterParalleledData, function(d) { return +d[dimension.name]; })
                        : filterParalleledData.map(function(d) { return d[dimension.name]; }).sort());
                });

                d3.select('#vizG').append("g")
                    .attr("class", "background")
                    .selectAll("path")
                    .data(filterParalleledData)
                    .enter().append("path")
                    .attr("d", draw);

                d3.select('#vizG').append("g")
                    .attr("class", "foreground")
                    .selectAll("path")
                    .data(filterParalleledData)
                    .enter()
                    .append("path")
                    .attr({
                        fill: "none",
                    	stroke:function(d,i){ return graphConfig.color(d.区域); },
                        "stroke-width": "1.5px"
                    })
                    // .transition()
                    // .delay(function(d, i) {
                    //     return i * 50;
                    // })
                    .attr("d", draw);

                dimension.append("g")
                    .attr("class", "axis")
                    .each(function(d) { d3.select(this).call(yAxis.scale(d.scale)); })
                    .append("text")
                    .attr("class", "title")
                    .attr("text-anchor", "middle")
                    .attr("y", -9)
                    .text(function(d) { return d.name; });

                d3.select('#vizG').select(".axis").selectAll("text:not(.title)")
                    .attr("class", "label")
                    .data(filterParalleledData, function(d) { return d.name || d; });

                var projection = d3.select('#vizG').selectAll('.axis text, .background path, .foreground path')
                    .on('mouseover', mouseover)
                    .on('mouseout', mouseout);

                function mouseover(d) {
                    d3.select('#vizG').classed('active', true);
                    projection.classed('inactive', function(p) {
                        return p !== d;
                    });

                    projection.filter(function(p) {
                        return p === d;
                    })
                    .each(moveToFront);

                    // showMouseTooltip(d);
                }

                function mouseout() {
                    d3.select('#vizG').classed('active', false);
                    projection.classed('inactive', false);

                    // hideMouseTooltip();
                }

                function moveToFront() {
                    this.parentNode.appendChild(this);
                }

                function draw(d) {
                    return line(dimensions.map(function(dimension) {
                        return [x(dimension.name), dimension.scale(d[dimension.name])];
                    }));
                }
                //start 初始化dimension===
                function iniDimensions(graphConfig, selectedStatus) {
                    var baseDimensionKey = [
                        {
                            name: "区域",
                            scale: d3.scale.ordinal().rangePoints([0, graphConfig.svgHeight]),
                            type: String,
                            label: "区域"
                        },
                        {
                            name: "年份",
                            scale: d3.scale.linear().range([graphConfig.svgHeight, 0]),
                            type: Number,
                            label: "年份"
                        }];
    ;
                    var selectedDimensionKeys = selectedStatus.selectedDimensionKeys.map(function(d) {
                        return {
                            name: d.value,
                            scale: d3.scale.linear().range([graphConfig.svgHeight, 0]),
                            type: Number,
                            label: d.name
                        }
                    });

                    var dimensions = baseDimensionKey.concat(selectedDimensionKeys);

                    return dimensions;
                }
                //end 初始化dimension===
            }
            //end 生成parallel图###########
        }
        //### 绘制图表drawGraph end #########################
    });
