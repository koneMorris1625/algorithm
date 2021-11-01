/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    // [0, zero] 0 
    // [zero + 1 , i - 1]    1
    // [two, n - 1]
    // var zero = -1;
    // var two = nums.length;

    // for (var i = 0; i < two;) {
    //     if (nums[i] === 1) {
    //         i++;
    //     } else if (nums[i] === 0) {
    //         var temp = nums[i];
    //         nums[i] = nums[zero + 1];
    //         nums[zero + 1] = temp;
    //         zero++;
    //         i++;
    //     } else if (nums[i] === 2) {
    //         two--;
    //         var temp02 = nums[i];
    //         nums[i] = nums[two];
    //         nums[two] = temp02;
    //     } else {
    //         return -1;
    //     }
    // }

    var zero = 0;
    var two = nums.length - 1;
    var i = 0;
    while (i <= two) {
        if (nums[i] === 0) {
            nums[i++] = 1;
            nums[zero++] = 0;
            // zero++;
            // i++;
        } else if (nums[i] === 2) {
            nums[i] = nums[two];
            nums[two--] = 2;
            // two--;
        } else {
            i++;
        }
    }
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = sortColors;
// @after-stub-for-debug-end