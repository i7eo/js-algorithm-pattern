// 704. 二分查找

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    var low = 0
    var high = nums.length - 1
    while (low <= high) {
        var guessIdx = Math.floor((low + high) / 2)
        var guess = nums[guessIdx]
        if (target > guess) {
            low = guessIdx + 1
        } else if (target < guess) {
            high = guessIdx - 1
        } else {
            return guessIdx
        }
    }
    return -1
}
