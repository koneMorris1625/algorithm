/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    var flag = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            //21/21 cases passed (133 ms)
            // Your runtime beats 14.31 % of javascript submissions
            // if (i === flag) {
            //     flag++;
            // }  
            flag++;
            var temp = nums[i];
            nums[i] = nums[flag];
            nums[flag] = temp;
        }
    }
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = moveZeroes;
// @after-stub-for-debug-end