// 9. 回文数（判断一个字符串是不是回文字符串）

/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
    x = x + '';
    var i = 0,
        j = x.length - 1;
    while (i < x.length) {
        if (x[i] === x[j]) {
            // j - i === 1 是x长度为整数的情况
            if (i === j || j - i === 1) return true
            i++
            j--
        } else {
            return false
        }
    }
};