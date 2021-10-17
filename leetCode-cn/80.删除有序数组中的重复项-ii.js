/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums 
 * @param {number} Kth
 * @return {number} 
 */
function process(nums, Kth) {
    let idx = 0; // [0,,,idx) 有效数组, [idx,nums.length-1] 冗余的元素
	for (let i = 0; i < nums.length; i++) {
		if (idx < Kth || nums[idx - Kth] !== nums[i]) { // `idx<Kth`利用sorted array的特性;`idx-Kth`保留 k个:有效区间[0,,,idx)内往前推算 k个的元素是否和 nums[i] (当前元素一样)
			nums[idx] = nums[i];
			idx++;
		}
	}
	return idx;
}
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    return process(nums, 2);
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = removeDuplicates;
// @after-stub-for-debug-end