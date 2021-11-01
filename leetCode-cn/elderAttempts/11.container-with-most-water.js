/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    var r = height.length - 1;
    var i = 0;
    var maxArea = 0;
    while (i < r) {
        maxArea = Math.max(maxArea, Math.min(height[i], height[r]) * (r - i));
        if (height[i] < height[r]) {
            i++;
        }
        else r--;
    }
    return maxArea;
};
// @lc code=end

