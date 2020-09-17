// leetcode: 14. 最长公共前缀

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    const lcp = strs[0]
    if (!lcp) return ''
    let result = ''
    for (let i = 0; i < lcp.length; i++) {
        if (strs.every(str => str[i] === lcp[i])) {
            result += lcp[i]
        } else {
            return result
        }
    }
    return result
};