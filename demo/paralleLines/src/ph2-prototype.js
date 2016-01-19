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
        //data for vue model
        var data = {
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
        }

        var methods = {
            showControlPanel,
            enterCountryMode, //进入country模式，调用getCountryList等
            enterProvinceMode, //进入province模式，调用getCountryList等
            enterCityMode, //进入province模式，调用getCountryList等
            enterTownMode, //进入province模式，调用getCountryList等
            filterProvinceByCountry: function(selectedCountry) {

            },
            filterCityByProvince: function(selectedProvince) {

            },
            filterTownByCity: function(selectedCity) {

            }
        }

        var computed: {
            getCountryList: function(mode) {
                if (mode == 'country') {
                    return this.countryList;
                } else {
                    return {country: 'china', label: '中国'};
                }
            },
            getProvinceList: function(mode, selectedCountry) {
                if (mode == 'province' || mode == 'city' || mode == 'town') {
                    return filterProvinceByCountry(selectedCountry);
                } else {
                    return [];
                }
            },
            getCityList: function(mode, selectedProvince) {
                if (mode == 'city' || mode == 'town') {
                    return filterCityByProvince(selectedProvince);
                } else {
                    return [];
                }
            },
            getTownList: function(mode, selectedCity) {
                if (mode == 'town') {
                    return filterTownByCity(selectedCity);
                } else {
                    return [];
                }
            }
        }
    });

///////////////////////////////////////////////////////////////////
var dataSourceMode = [
    {mode: 'country', label: '世界各国数据'},
    {mode: 'province', label: '中国省份数据'},
    {mode: 'city', label: '中国地级市数据'},
    {mode: 'town', label: '中国县级数据'},
];

var countryListTemp = [
    {country: 'china', label: '中国'},
    {country: 'america', label: '美国'},
    {country: 'japan', label: '日本'},
    {country: 'thailand', label: '泰国'},
    {country: 'netherland', label: '荷兰'}
];


var provinceList; // 省份列表，固定，无须根据国家动态抽取？
var cityList;
var twonList;

d3.csv('data/cityProvince.csv', function(data) {
    // console.log(data);
    var place = d3.nest()
        .key(function(d) {
            return d.province;
        })
        .entries(data);
    // console.log(place);
    provinceList = place.map(function(d) {
        return d.key;
    });
    // console.log(provinceList);

    var model = {
        data: {
            geo: {
                countryList: '',
                provinceList: provinceList,
                cityList: '',
                twonList: ''
            },
            dataPath: {
                country:'',
                province: 'data/data-province.csv',
                city: '',
                town: ''
            },
            dataSourceMode: dataSourceMode,
            place: place,
            selectedSourceMode: '',
            selectedCountry: '',
            selectedProvince: [],
            selectedCity: '',
            selectedTown: '',
            //control the available state of each select via class 'disable', with boolean value 1 or 0
            selectionDisabledState: {
                mode: false,
                country: false,
                province: false,
                city: false,
                town: false
            },
            panelVisibility: {
                country: true,
                province: false,
                city: false,
                town: false
            }
        },
        methods: {
            testUpdateButton: function() {
                console.log(this.selectedProvince);
                console.log(this.selectedSourceMode);
            },
            resetCityList: function() {
                this.selectedCity = '';
                return this.selectedCity;
            },
            showPanel: function(mode) {
                for (key in this.panelVisibility) {
                    // console.log(this.panelVisibility[key]);
                    this.panelVisibility[key] = false;
                }

                this.panelVisibility[mode] = true;
                // console.log(this.panelVisibility);
                // 确定选择数据源模式
                this.selectedSourceMode = mode;
            },
            drawGraph: drawGraph //绘制图表
        },
        computed: {
            getCountryList: function() {
                var countryList = countryListTemp;
                return countryList;
            },
            getProvinceList: function() {
                // var provinceList = '';
                // var dataSourceMode = this.selectedSourceMode;
                // if (dataSourceMode == 'city') {
                //     provinceList = this.place;
                //     this.selectionDisabledState.province = false;
                // } else if (dataSourceMode == 'province') {
                //     provinceList = this.place;
                //     this.selectionDisabledState.province = false;
                // } else if (dataSourceMode == 'country') {
                //     this.selectionDisabledState.province = true;
                // }

                return provinceList;
            },
            getCityList: function() {
                var cityList = '';
                // console.log(this.selectedProvince);
                var targetProvence = this.selectedProvince;
                this.place.forEach(function(d) {
                    // console.log(d.province);
                    // console.log(targetProvence);
                    if (d.key == targetProvence) {
                        cityList = d.values;
                        // return cityList;
                    }
                });
                return cityList;
            },
            test: function() {
                // return this.selectedProvince + 'selected';

            },
            countryPanelVisibility: function() {
                return this.panelVisibility.country;
            },
            provincePanelVisibility: function() {
                return this.panelVisibility.province;
            }
        }
    };

    var vm = new Vue({
        el: '#app',
        data: model.data,
        methods: model.methods,
        computed: model.computed
    });

});

function drawGraph(mode, selectedPlace, selectedIndex) {
    var dataPath = 'data/data-' + mode + '.csv';
    d3.csv(dataPath, function(data) {
        console.log(data);
        console.log(selectedPlace);
        console.log(selectedIndex);
    });
}
