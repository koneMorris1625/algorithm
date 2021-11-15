/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number} k+1, means there are k+1 elements in nums.
        if (nums[k] !== nums[i]) 
        if (nums[i - 1] !== nums[i]) 
 * nums remove duplications: [0, 1, 2, 3, 4, 2, 2, 3, 3, 4]
 * 
 */
/* 
 * 
 */
var removeDuplicates = function (nums) {
    var k = 0;
    for (let i = 0; i < nums.length; i++) {
        const e = nums[i];
        if (nums[k] != e) {
            nums[++k] = e;
        }
    }
    return ++k;

    // if (nums.length < 2)
    //     return nums.length;
    // var k = 0, i = 1;
    // while (i < nums.length) {
    //     if (nums[i - 1] !== nums[i]) {
    //         k++;
    //         nums[k] = nums[i];
    //     }
    //     i++;
    // }
    // return k + 1;

    // while (i < nums.length) {
    //      if (nums[k] !== nums[i]) 
    //         k++;
    //         nums[k] = nums[i];
    //     }
    //     i++;
    // }
    // return ++k;

    // let i = 0;
    // for (let j = 0; j < nums.length; j++) {
    //     if (nums[j] != nums[i])
    //         nums[++i] = nums[j];
    // }
    // return ++i;
};
// @lc code=end

