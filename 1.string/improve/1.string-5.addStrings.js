// 415. 字符串相加

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    var i = num1.length - 1,
        j = num2.length - 1,
        fill = 0,
        ans = [];

    // '1' + '9' 此时 fill 为 0 所以加上 fill != 0 需要再来一次
    while(i >= 0 || j >= 0 || fill != 0) {
        // 将字符串转为数字，高位不够就补0
        var ic = i>=0 ? num1.charAt(i) - 0: 0;
        var jc = j>=0 ? num2.charAt(j) - 0: 0;
        var result = ic + jc + fill;
        fill = Math.floor(result/10);
        ans.unshift(result % 10)
        i --;
        j --;
    }
    return ans.join('')
};