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

        ////////////////////////////////////////////////////////
        /// model start ////////////////////////////////////////
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
            placeList: { //存储地点list，用于菜单展开
                countryList: '',
                provinceList: '',
                cityList: '',
                townList: ''
            },
            dataSourceMode:['country', 'province', 'city', 'town'], //数据源选项
            selectedStatus: { //选中的菜单项，
                selectedDataSourceMode: 'country',
                selectedCountryList: ['china'],
                selectedProvinceList: [],
                selectedCityList: [],
                selectedTownList: []
            },
            controlPanelVisibility: { //控制面板四大类的显示控制
                country: true,
                province: false,
                city: false,
                town: false
            },
            graphConfig: {
                svgWidth: 800,
                svgHeight: 500,
                margin: {
                    top: 50,
                    bottom:30,
                    left: 50,
                    right: 50
                },
                color: d3.scale.category10()
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
            getCityList: function(mode, selectedProvince) {
                if (mode == 'city' || mode == 'town') {
                    return this.filterCityByProvince(selectedProvince);
                } else {
                    return [];
                }
            },
            // 用于选择县级菜单展开
            getTownList: function(mode, selectedCity) {
                if (mode == 'town') {
                    return this.filterTownByCity(selectedCity);
                } else {
                    return [];
                }
            }
        }
        /// model end ////////////////////////////////////////

        ////////////////////////////////////////////////////////
        /// modelView start ////////////////////////////////////
        var vm = new Vue({
            el: '#app',
            data: model.data,
            methods: model.methods,
            computed: model.computed
        });
        /// modelView end /////////////////////////////////////

        ////////////////////////////////////////////////////////
        /// function definition start //////////////////////////
        function drawGraph() {
            // console.log(selectedStatus);
            iniSvg(graphConfig);
            parseData(mode);
            iniDimensions();
            generateParellel();

            //初始化svg画布################
            function iniSvg(svgWidth, svgHeight, vizContainer) {
                var svg = vizContainer.append('svg')
                    .attr('width', svgWidth)
                    .attr('height', svgHeight);

                return svg;
            }

            // 将数据转换为平行坐标格式######
            function parseData() {
                
            }
        }
    });

///////////////////////////////////////////////////////////////////
// var dataSourceMode = [
//     {mode: 'country', label: '世界各国数据'},
//     {mode: 'province', label: '中国省份数据'},
//     {mode: 'city', label: '中国地级市数据'},
//     {mode: 'town', label: '中国县级数据'},
// ];
//
// var countryListTemp = [
//     {country: 'china', label: '中国'},
//     {country: 'america', label: '美国'},
//     {country: 'japan', label: '日本'},
//     {country: 'thailand', label: '泰国'},
//     {country: 'netherland', label: '荷兰'}
// ];
//
//
// var provinceList; // 省份列表，固定，无须根据国家动态抽取？
// var cityList;
// var twonList;
//
// d3.csv('data/cityProvince.csv', function(data) {
//     // console.log(data);
//     var place = d3.nest()
//         .key(function(d) {
//             return d.province;
//         })
//         .entries(data);
//     // console.log(place);
//     provinceList = place.map(function(d) {
//         return d.key;
//     });
//     // console.log(provinceList);
//
//     var model = {
//         data: {
//             geo: {
//                 countryList: '',
//                 provinceList: provinceList,
//                 cityList: '',
//                 twonList: ''
//             },
//             dataPath: {
//                 country:'',
//                 province: 'data/data-province.csv',
//                 city: '',
//                 town: ''
//             },
//             dataSourceMode: dataSourceMode,
//             place: place,
//             selectedSourceMode: '',
//             selectedCountry: '',
//             selectedProvince: [],
//             selectedCity: '',
//             selectedTown: '',
//             //control the available state of each select via class 'disable', with boolean value 1 or 0
//             selectionDisabledState: {
//                 mode: false,
//                 country: false,
//                 province: false,
//                 city: false,
//                 town: false
//             },
//             panelVisibility: {
//                 country: true,
//                 province: false,
//                 city: false,
//                 town: false
//             }
//         },
//         methods: {
//             testUpdateButton: function() {
//                 console.log(this.selectedProvince);
//                 console.log(this.selectedSourceMode);
//             },
//             resetCityList: function() {
//                 this.selectedCity = '';
//                 return this.selectedCity;
//             },
//             showPanel: function(mode) {
//                 for (key in this.panelVisibility) {
//                     // console.log(this.panelVisibility[key]);
//                     this.panelVisibility[key] = false;
//                 }
//
//                 this.panelVisibility[mode] = true;
//                 // console.log(this.panelVisibility);
//                 // 确定选择数据源模式
//                 this.selectedSourceMode = mode;
//             },
//             drawGraph: drawGraph //绘制图表
//         },
//         computed: {
//             getCountryList: function() {
//                 var countryList = countryListTemp;
//                 return countryList;
//             },
//             getProvinceList: function() {
//                 // var provinceList = '';
//                 // var dataSourceMode = this.selectedSourceMode;
//                 // if (dataSourceMode == 'city') {
//                 //     provinceList = this.place;
//                 //     this.selectionDisabledState.province = false;
//                 // } else if (dataSourceMode == 'province') {
//                 //     provinceList = this.place;
//                 //     this.selectionDisabledState.province = false;
//                 // } else if (dataSourceMode == 'country') {
//                 //     this.selectionDisabledState.province = true;
//                 // }
//
//                 return provinceList;
//             },
//             getCityList: function() {
//                 var cityList = '';
//                 // console.log(this.selectedProvince);
//                 var targetProvence = this.selectedProvince;
//                 this.place.forEach(function(d) {
//                     // console.log(d.province);
//                     // console.log(targetProvence);
//                     if (d.key == targetProvence) {
//                         cityList = d.values;
//                         // return cityList;
//                     }
//                 });
//                 return cityList;
//             },
//             test: function() {
//                 // return this.selectedProvince + 'selected';
//
//             },
//             countryPanelVisibility: function() {
//                 return this.panelVisibility.country;
//             },
//             provincePanelVisibility: function() {
//                 return this.panelVisibility.province;
//             }
//         }
//     };
//
//     var vm = new Vue({
//         el: '#app',
//         data: model.data,
//         methods: model.methods,
//         computed: model.computed
//     });
//
// });
//
// function drawGraph(mode, selectedPlace, selectedIndex) {
//     var dataPath = 'data/data-' + mode + '.csv';
//     d3.csv(dataPath, function(data) {
//         console.log(data);
//         console.log(selectedPlace);
//         console.log(selectedIndex);
//     });
// }
