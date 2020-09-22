// 1. 俩数之和

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 常规解法双for
    // 告诉了一个数与和那么另一个数即差值
    const map = new Map()
    for(let i = 0; i<nums.length; i++) {
        let cur = nums[i]
        let other = target - cur
        // 利用map进行缓存避免了第二层for循环，并且提升了查找效率
        if(map.has(other)) {
            return [map.get(other), i]
        }
        map.set(cur, i)
    }
    return []
};