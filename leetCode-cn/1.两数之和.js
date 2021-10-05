/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

    var obj = {};

    for (let i = 0; i < nums.length; i++) {
        const e = nums[i];
        const targetNum = target - nums[i];
        if (obj[targetNum] !== undefined) {
            return [obj[targetNum], i];
        }
        obj[nums[i]] = i;
    }
};
// @lc code=end

