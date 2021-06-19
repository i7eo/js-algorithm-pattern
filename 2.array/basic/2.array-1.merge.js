// 88. 合并两个有序数组

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    //     nums1.splice(m)
    //     nums2.splice(n)
    //     nums1.push(...nums2)
    //     nums1.sort((a,b) => a-b)
    //     return nums1
    var i = m - 1

    var j = n - 1

    var idx = m + n - 1

    var leftIdx = 0

    var leftArr = []

    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[idx] = nums1[i]
            i--
        } else {
            nums1[idx] = nums2[j]
            j--
        }
        idx--
    }
    // 补全剩余
    if (i > 0) {
        leftIdx = i
        leftArr = nums1
    } else {
        leftIdx = j
        leftArr = nums2
    }

    while (leftIdx >= 0) {
        nums1[idx] = leftArr[leftIdx]
        leftIdx--
        idx--
    }

    return nums1
}
