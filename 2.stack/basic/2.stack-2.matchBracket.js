// leetcode: 20.有效的括号

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    var map = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    var leftArr = []
    for (var ch of s){
        if (ch in map) {
            //为左括号时，顺序保存   
            leftArr.push(ch);
        }else {
            //为右括号时，与数组末位匹配
            if(ch != map[leftArr.pop()]) return false;
        }
    }
    return !leftArr.length //防止全部为左括号
};