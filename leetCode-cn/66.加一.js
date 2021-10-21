/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 *
 * https://leetcode-cn.com/problems/plus-one/description/
 *
 * algorithms
 * Easy (45.75%)
 * Likes:    825
 * Dislikes: 0
 * Total Accepted:    382.2K
 * Total Submissions: 824K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
 *
 * 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 *
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：digits = [1,2,3]
 * 输出：[1,2,4]
 * 解释：输入数组表示数字 123。
 *
 *
 * 示例 2：
 *
 *
 * 输入：digits = [4,3,2,1]
 * 输出：[4,3,2,2]
 * 解释：输入数组表示数字 4321。
 *
 *
 * 示例 3：
 *
 *
 * 输入：digits = [0]
 * 输出：[1]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 0
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 * [9,9,9]
 */
var plusOne = function (digits) {
	// 3.
	let len = digits.length;
	for (let i = len - 1; i >= 0; i--) {
		digits[i] = digits[i] + 1;
		digits[i] = digits[i] % 10; // 精妙之处一: 原 digits[i] = 9 的话, 此处将其进行赋值, 省去官方二解的for赋值
		// 精妙处二: 做出口判断条件, 且已经 +1 过了.
		if (digits[i] !== 0) {
			return digits;
		}
	}
	digits.unshift(1); // 处理第三种情况. [9,9,9]
	return digits;
};
// @lc code=end

// 三叶女神的通用解 [2](https://leetcode-cn.com/problems/add-two-numbers/)
// let len = digits.length;
// digits[len - 1]++;
// let list = new Array();
// for (let i = len - 1, t = 0; i >= 0 || t != 0; i--) {
// 	let x = i >= 0 ? digits[i] + t : t;
// 	list.unshift(x % 10);
// 	t = parseInt(x / 10);
// }
// let ans = new Array(list.length);
// for (let i = 0; i < list.length; i++)
// 	ans[i] = list[i];
// return ans;

// 2. 官方二解. 分析透彻, 思路清晰, for 中 for 精妙!
// 解决前两种情况: [9,8], [1,2,3,9,9]
// let len = digits.length;
// for (let i = len - 1; i >= 0; i--) {
// 	if (digits[i] !== 9) {
// 		++digits[i];
// 		for (let j = i + 1; j < len; j++) {
// 			//第一次 j = len, 不满足 j < len, 所以进不来, 精妙!
// 			digits[j] = 0;
// 		}
// 		return digits;
// 	}
// }
// return [1, ...new Array(len).fill(0)]; // 解决第三种情况: [9,9]

// 1. 官方 1解,
// let carry = 1,
// 	n = digits.length;
// for (let i = n - 1; i >= 0; i--) {
// 	if (digits[i] === 9) {
//         if (carry === 1) {
//             digits[i] = 0;
//             carry = 1;
//         }
// 	} else {
// 			digits[i] += carry;
//             carry = 0;
// 	}
// }
// if (carry === 1) {
//     digits = [1, ...digits];
// }
// return digits;

// @after-stub-for-debug-begin
module.exports = plusOne;
// @after-stub-for-debug-end
