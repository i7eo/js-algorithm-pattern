// 151. 翻转字符串里的单词

/**
 * @param {string} s
 * @return {string}
 */

// var reverseWords = function(s) {
//     return s.trim().split(/\s+/g).reverse().join(' ')
// };

// 双端队列
var reverseWords = function(s) {
    var l = 0, r = s.length - 1, deque = [], word = '';
    while(s.charAt(l) == ' ') l++
    while(s.charAt(r) == ' ') r--
    while(l <= r) {
        var c= s.charAt(l)
        if(c == ' ' && word) {
            deque.unshift(word)
            word = ''
        }else if(c != ' ') {
            word += c
        }
        l++
    }
    deque.unshift(word)
    return deque.join(' ')
};