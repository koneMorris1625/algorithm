/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (33.59%)
 * Likes:    3827
 * Dislikes: 0
 * Total Accepted:    662.1K
 * Total Submissions: 2M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0
 * 且不重复的三元组。
 *
 * 注意：答案中不可以包含重复的三元组。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = []
 * 输出：[]
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums = [0]
 * 输出：[]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0
 * -10^5
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums test case: [-4, -1, -1, -1, 0, 0, 1, 1, 1, 2, 2]
 * @return {number[][]}
 */
var threeSum = function (nums) {
	let len = nums.length,
		ans = [];

	if (len < 3 || nums.every((e) => e > 0)) {
		return ans;
	}

	nums.sort((a, b) => a - b);

	for (let i = 0; i < len; i++) {
		if (nums[i] > 0) {
			return ans;
		}
		// ! 去重; i>0: 从 i=1 开始比较
		if (i > 0 && nums[i] === nums[i - 1]) {
			continue;
		}
		let l = i + 1,
			r = len - 1;
		while (l < r) {
			let condition = nums[i] + nums[l] + nums[r];
			if (condition === 0) {
				ans.push([nums[i], nums[l], nums[r]]);
				// ! 去重
				while (l < r && nums[l] === nums[l + 1]) {
					l++;
				}
				while (l < r && nums[r] === nums[r - 1]) {
					r--;
				}
				l++;
				r--;
			} else if (condition < 0) {
				l++;
			} else {
				r--;
			}
		}
	}
	return ans;
};
// @lc code=end

// 不成熟的思考, 思路原本就没想清楚, 特值的处理, 对[无重复项]的题目条件理解不对.
// let len = nums.length,
// 	r = len - 1,
// 	ans = [];

// if (!len || nums.every((e) => e === 0)) {
// 	return ans;
// }
// nums.sort((a, b) => a - b);
// for (let i = 0; i < len; i++) {
// 	let l = i + 1;
// 	if (nums[i] > 0) {
// 		return ans;
// 	}
// 	while (l < r && nums[l] < 0 && nums[r] > 0) {
// 		let condition = nums[i] + nums[l] + nums[r];
// 		if (condition === 0) {
// 			ans.push([nums[i], nums[l], nums[r]]);
// 			continue;
// 		}
// 		if (condition < 0) {
// 			l++;
// 		} else {
// 			r++;
// 		}
// 	}
// }
// return ans;

// @after-stub-for-debug-begin
module.exports = threeSum;
// @after-stub-for-debug-end
