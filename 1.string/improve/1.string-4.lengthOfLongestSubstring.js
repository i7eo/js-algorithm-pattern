// 3. 无重复字符的最长子串

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

    if (s.length < 2) {
        return s.length;
    }

    let slidingWindow = new Map();

    let left = 0;
    let right = 0;

    let res = 0;

    while (right < s.length) {
        let rc = s[right];
        right++;

        if (slidingWindow.has(rc)) {
            slidingWindow.set(rc, slidingWindow.get(rc) + 1);
        } else {
            slidingWindow.set(rc, 1);
        }

        while (slidingWindow.get(rc) > 1) {
            let lc = s[left];
            left++;

            if (slidingWindow.has(lc)) {
                slidingWindow.set(lc, slidingWindow.get(lc) - 1);
            }

            
        }

        res = Math.max(res, right - left);
    }

    return res;
};