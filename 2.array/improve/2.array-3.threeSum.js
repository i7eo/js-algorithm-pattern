// 15. 三数之和

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var len = nums.length,
        result = [];

    if(len < 3) return result

    nums.sort(function(a, b) {
        return a - b
    })

    for(let i = 0; i < len - 2; i++) {
        if(nums[i] > 0) break;
        // 避免重复
        if(i && nums[i] === nums[i - 1]) continue;

        var l = i + 1,
            r = len -1

        while(l < r) {
            var sum = nums[i] + nums[l] + nums[r]
            if(sum === 0) {
                // result.push([nums[i] , nums[l] , nums[r]]) // 这里因为符合条件后l r 没有递增导致死循环
                result.push([nums[i] , nums[l++] , nums[r--]])
                // 避免重复，和上一次的值做比较
                while(nums[l] === nums[l - 1]) l++
                while(nums[r] === nums[r + 1]) r--
            }else if(sum > 0) {
                r--
            }else{
                l++
            }
        }
    }
    return result;
};