////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
// view ////////////////////////

////////////////////////////////

// viewModel ///////////////////

////////////////////////////////

// model ////////////////////////
/*
    data: {
        geoData: { //国家、省、地市、县的全部原始数据
            countryProvinceCityTownList: '',
            country: '',
            province: '',
            city: '',
            town: ''
        }
    },
    methods:
    computed:
*/
////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

queue()
    .defer(d3.csv, 'data/list-province-city.csv')
    .defer(d3.csv, 'data/data-province.csv')
    .await(function(error, listProvinceCity, dataProvince) {
        console.log(listProvinceCity);
        console.log(dataProvince);
    });

///////////////////////////////////////////////////////////////////
var dataSourceMode = [
    {mode: 'country', label: '世界各国数据'},
    {mode: 'province', label: '中国省份数据'},
    {mode: 'city', label: '中国地级市数据'}
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
