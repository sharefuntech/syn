d3.csv('data/sample.csv', function(data) {
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
    dataNested.forEach(function(d) {
        var place = d.key;
        d.values.forEach(function(e) {
            // console.log(e);
            var year = +e.key;
            var obj = {};
            obj['年份'] = year;
            obj['区域'] = place;
            e.values.forEach(function(f) {
                for(key in f) {
                    if (key != '区域' && key != '年份') {
                        // console.log(key + ': ' + f[key]);
                        obj[key] = f[key];
                    }
                }
            });
            dataParallel.push(obj);
        });
    });
    // console.log(dataParallel);

});
