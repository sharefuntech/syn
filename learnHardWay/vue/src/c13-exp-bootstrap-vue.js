var dataSourceMode = [
    {mode: 'country', label: '世界各国数据'},
    {mode: 'province', label: '中国省份数据'},
    {mode: 'city', label: '中国地级市数据'}
];

// var dataSourceMode = [
//     {mode: 'country', label: '世界各国数据'},
//     {mode: 'province', label: '中国省份数据'},
//     {mode: 'city', label: '中国地级市数据'},
//     {mode: 'town', label: '中国县级数据'}
// ];

var countryListTemp = [
    {country: 'china', label: '中国'},
    {country: 'america', label: '美国'},
    {country: 'japan', label: '日本'},
    {country: 'thailand', label: '泰国'},
    {country: 'netherland', label: '荷兰'}
];

var provinceList;
var cityList;
var twonList;

// var placeRawData = [{
//     countryName: 'China', province: [
//         {
//             provinceName: '浙江', city: [
//                 {
//                     cityName: '嘉兴', twon: [
//                         {townName: '海宁'},
//                         {townName: '桐乡'},
//                         {townName: '海盐'}
//                     ]
//                 },
//                 {
//                     cityName: '杭州', twon: [
//                         {townName: '余杭'},
//                         {townName: '临安'},
//                         {townName: '建德'}
//                     ]
//                 }
//             ]
//         },
//         {
//             provinceName: '江苏', city: [
//                 {
//                     cityName: '南京', twon: [
//                         {townName: '雨花台'},
//                         {townName: '白龙'},
//                         {townName: '海安'}
//                     ]
//                 },
//                 {
//                     cityName: '常州', twon: [
//                         {townName: '常熟'},
//                         {townName: '无锡'}
//                     ]
//                 }
//             ]
//         }
//     ]
// },
// {
//     countryName: 'Japan'
// }];

d3.csv('data/cityProvince.csv', function(data) {
    // console.log(data);
    var place = d3.nest()
        .key(function(d) {
            return d.province;
        })
        .entries(data);
    console.log(place);

    var model = {
        data: {
            dataSourceMode: dataSourceMode,
            place: place,
            selectedSourceMode: '',
            selectedCountry: '',
            selectedProvince: '',
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
            resetCityList: function() {
                this.selectedCity = '';
                return this.selectedCity;
            },
            showPanel: function(mode) {
                for (key in this.panelVisibility) {
                    console.log(this.panelVisibility[key]);
                    this.panelVisibility[key] = false;
                }

                this.panelVisibility[mode] = true;
                // console.log(this.panelVisibility);
            }
        },
        computed: {
            // getCountryList: function() {
            //     var countryList = '';
            //     // console.log(this.selectedProvince);
            //     var dataSourceMode = this.selectedSourceMode;
            //     // console.log(dataSourceMode);
            //     if (dataSourceMode == 'country') {
            //         //暂时设置国家列表
            //         countryList = countryListTemp;
            //         // this.selectedCountry = '';
            //         this.selectionDisabledState.country = false;
            //     } else {
            //         // 设置国家列表位中国一个国家
            //         countryList = [countryListTemp[0]];
            //         // this.selectedCountry = 'China';
            //         this.selectionDisabledState.country = true;
            //     }
            //     // console.log(countryList);

            //     return countryList;
            // },
            getCountryList: function() {
                var countryList = countryListTemp;
                return countryList;
            },
            getProvinceList: function() {
                var provinceList = '';
                // console.log(this.selectedProvince);
                var dataSourceMode = this.selectedSourceMode;
                // console.log(dataSourceMode);
                if (dataSourceMode == 'city') {
                    provinceList = this.place;
                    this.selectionDisabledState.province = false;
                } else if (dataSourceMode == 'province') {
                    provinceList = this.place;
                    this.selectionDisabledState.province = false;
                } else if (dataSourceMode == 'country') {
                    this.selectionDisabledState.province = true;
                }
                // console.log(countryList);

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
                return this.selectedProvince + 'selected';
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
