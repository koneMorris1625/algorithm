/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 *
 * https://leetcode-cn.com/problems/rotate-array/description/
 *
 * algorithms
 * Medium (45.07%)
 * Likes:    1166
 * Dislikes: 0
 * Total Accepted:    356.6K
 * Total Submissions: 793.5K
 * Testcase Example:  '[1,2,3,4,5,6,7]\n3'
 *
 * 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
 *
 *
 *
 * 进阶：
 *
 *
 * 尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
 * 你可以使用空间复杂度为 O(1) 的 原地 算法解决这个问题吗？
 *
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: nums = [1,2,3,4,5,6,7], k = 3
 * 输出: [5,6,7,1,2,3,4]
 * 解释:
 * 向右旋转 1 步: [7,1,2,3,4,5,6]
 * 向右旋转 2 步: [6,7,1,2,3,4,5]
 * 向右旋转 3 步: [5,6,7,1,2,3,4]
 *
 *
 * 示例 2:
 *
 *
 * 输入：nums = [-1,-100,3,99], k = 2
 * 输出：[3,99,-1,-100]
 * 解释:
 * 向右旋转 1 步: [99,-1,-100,3]
 * 向右旋转 2 步: [3,99,-1,-100]
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * -2^31
 * 0
 *
 *
 *
 *
 *
 */
// @lc code=start
const gcd = (n, k) => (k ? gcd(k, n % k) : n);
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
	// 5.2 环形数组, 最多遍历 n 次
	let len = nums.length,
		visited = 0;
	// current = 0; 定义在这里是极端错误的.
	k = k % len;
	for (let start = 0; visited < len; start++) { // len 个数, 应该遍历 len 次
		let current =  ,
		prev = nums[current];
		do {
			let next = (current + k) % len,
				temp = nums[next];
			nums[next] = prev;
			prev = temp;
			current = next;
			visited++;
		} while (current !== start);

	}
};
// @lc code=end

// 5.1 环状数组 最大公约数
// let len = nums.length;
// // current = 0; 定义在这里是极端错误的.
// k = k % len;
// let count = gcd(len, k); // count = 1, 递归求最大公约数
// for (let start = 0; start < count; start++) {
// 	let current = start,
// 		prev = nums[start];
// 	do {
// 		let next = (current + k) % len;
// 		const temp = nums[next];
// 		nums[next] = prev;
// 		prev = temp;
// 		current = next;
// 	} while (current !== start);
// }

// 4. 利用 javascript 动态数组的特性, 补位截取
// let i = (len = nums.length),
// 	km = k % len;
// if (km === 0) { // 处理 [1], 1 这种特殊情况.
// 	return nums;
// }
// for (i = i - 1; i >= 0; i--) {
// 	nums[i + km] = nums[i];
// 	if (i <= k) {
// 		nums[i] = nums[len + i];
// 	}
// }
// nums.length = len;

// let n = i = nums.length
// if ((k %= n) === 0) return
// while (i--) {
//     nums[i + k] = nums[i]
//     if (i <= k) nums[i] = nums[n + i]
// }
// nums.length = n

// 	// 3. 翻转法 O(2N) | O(1)
// /**
//  *
//  * @param {numbers[]} nums
//  * @param {number} start
//  * @param {number} end
//  */
// let reverse = function (nums, start, end) {
// 	while (start < end) {
// 		// es6 swap(nums[start], nums[end].
// 		[nums[start++], nums[end--]] = [nums[end], nums[start]];
// 	}
// };
// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// var rotate = function (nums, k) {
// 	let len = nums.length,
// 		km = k % len; // 10 % 7 = 3
// 	reverse(nums, 0, len - 1);
// 	reverse(nums, 0, km - 1);
// 	reverse(nums, km, len - 1);
// };

// // 2. 新数组, 计算后覆盖法, O(2N) | O(N)
// let len = nums.length,
// 	buffer = new Array(len);
// for (let i = 0; i < nums.length; i++) {
// 	buffer[(i + k) % len] = nums[i];
// }
// for (let i = 0; i < nums.length; i++) {
// 	nums[i] = buffer[i];
// }

// // 1. 暴力 API 法 O(kN^2) | O(1)	TIME LIMIT EXECEEDED
// let len = nums.length,
// 	kn = k % len;
// for (let i = 0; i < kn; i++) {
// 	nums.unshift(nums.pop());
// }

// const gcd = (x, y) => (y ? gcd(y, x % y) : x);

// var rotate = function (nums, k) {
// 	let len = nums.length,
// 		km = k % len;
// 	let newArr = Array.from(nums);
// 	for (let i = 0; i < km; i++) {
// 		let temp = newArr[len - 1 - i]; // 变量保存最后一位
// 		for (let j = len - 1; j > i; j--) {
// 			nums[j] = nums[j - 1];
// 			if (j + 1 === i + 1) {
// 				nums[j] = nums[j - 1];
// 				nums[0] = temp;
// 			}
// 		}
// 	}
// };
// @after-stub-for-debug-begin
module.exports = rotate;
// @after-stub-for-debug-end
