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
    const n = nums.length;
    // solution 01  double loop O(n^2) & O(1)
    // for (let i = 0; i < n; i++) {
    //     const e = nums[i];
    //     for (let j = i + 1; j < n; j++) {// let j = 1, is wrong: 数组中同一个元素在答案里不能重复出现。
    //         if (nums[i] + nums[j] === target) return [i, j];
    //     }
    // }
    // return [];

    // solution 02  hash/obj  O(n) & O(n)  
    const map = new Map();
    for (let i = 0; i < n; i++) {
        const e = nums[i];
        if (map.has(target - e)) {
            return [map.get(target - e), i];
        }
        map.set(e,i);// 边读边存
    }
    return [];







    // var obj = {};

    // for (let i = 0; i < nums.length; i++) {
    //     const e = nums[i];
    //     const targetNum = target - nums[i];
    //     if (obj[targetNum] !== undefined) {
    //         return [obj[targetNum], i];
    //     }
    //     obj[nums[i]] = i;
    // }
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = twoSum;
// @after-stub-for-debug-end