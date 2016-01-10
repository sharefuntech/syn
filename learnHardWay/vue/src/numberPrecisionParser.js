//输入数字与有效位数，返回保留有效位数数字
//返回类型：数字
//num 传入数字
//dig 要保留的有效位数
function numberPrecision(num, dig) {
    if (num < Math.pow(10, (dig + 1))) {
        if (num.toString().length <= (dig + 1)) {
            return num
        }
    }
    //toPrecision返回的是字符串，强制转化为数字类型
    return +num.toPrecision(dig);
}

//测试
var numA = 1234567.89101234567;
var numB = 123.89101234567;
var numC = 11.89;

console.log((numberPrecision(numA, 5)));
console.log(numberPrecision(numB, 5));
console.log(numberPrecision(numC, 5));
