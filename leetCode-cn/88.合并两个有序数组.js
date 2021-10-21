/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 *
 * https://leetcode-cn.com/problems/merge-sorted-copyNums1/description/
 *
 * algorithms
 * Easy (51.70%)
 * Likes:    1150
 * Dislikes: 0
 * Total Accepted:    479K
 * Total Submissions: 925.4K
 * Testcase Example:  '[1,2,3,0,0,0]\n3\n[2,5,6]\n3'
 *
 * 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。
 *
 * 请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。
 *
 * 注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，其中前 m
 * 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * 输出：[1,2,2,3,5,6]
 * 解释：需要合并 [1,2,3] 和 [2,5,6] 。
 * 合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums1 = [1], m = 1, nums2 = [], n = 0
 * 输出：[1]
 * 解释：需要合并 [1] 和 [] 。
 * 合并结果是 [1] 。
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums1 = [0], m = 0, nums2 = [1], n = 1
 * 输出：[1]
 * 解释：需要合并的数组是 [] 和 [1] 。
 * 合并结果是 [1] 。
 * 注意，因为 m = 0 ，所以 nums1 中没有元素。nums1 中仅存的 0 仅仅是为了确保合并结果可以顺利存放到 nums1 中。
 *
 *
 *
 *
 * 提示：
 *
 *
 * nums1.length == m + n
 * nums2.length == n
 * 0 <= m, n <= 200
 * 1 <= m + n <= 200
 * -10^9 <= nums1[i], nums2[j] <= 10^9
 *
 *
 *
 *
 * 进阶：你可以设计实现一个时间复杂度为 O(m + n) 的算法解决此问题吗？
 *
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
	// 3. 从后往前排序并入, O(m+n) | O(1)
	let p1 = m - 1,
		p2 = n - 1,
		i = nums1.length - 1;
	while (p1 >= 0 || p2 >= 0) {
		if (p1 === -1) {
			nums1[i--] = nums2[p2--];
		} else if (p2 === -1) {
			nums1[i--] = nums1[p1--];
		} else if (nums1[p1] <= nums2[p2]) {
			nums1[i--] = nums2[p2--];
		} else if (nums1[p1] > nums2[p2]) {
			nums1[i--] = nums1[p1--];
		}
	}
};
// @lc code=end

// 2. new copyNums1 从前往后并入 O(m+n) | O(m+n)
// let copyNums1 = [...nums1];
// let p1 = 0,
// 	p2 = 0,
// 	i = 0;
// while (p1 < m || p2 < n) {
// 	if (p1 === m) {
// 		nums1[i++] = nums2[p2++];
// 	} else if (p2 === n) {
// 		nums1[i++] = copyNums1[p1++]; // 以上核心逻辑02.当 nums1 或 nums2 被遍历完了, 直接copy另一个数组里剩下的(两个数组均有序, 另一个数组里的数也是有序的)
// 		// 核心逻辑01
// 	} else if (copyNums1[p1] <= nums2[p2]) {
// 		nums1[i++] = copyNums1[p1++];
// 	} else if (copyNums1[p1] > nums2[p2]) {
// 		nums1[i++] = nums2[p2++];
// 	}
// }
// //////// while for 😂🤣
// for (let i = 0; p2 < n || p1 < m; ) {
//     if (p1 === m) {
//         nums1[i++] = nums2[p2++];
// 	} else if (p2 === n) {
//         nums1[i++] = copyNums1[p1++];
// 	} else if (copyNums1[p1] <= nums2[p2]) {
//         nums1[i++] = copyNums1[p1++];
// 	} else if (copyNums1[p1] > nums2[p2]){
//         nums1[i++] = nums2[p2++];
// 	}
// }

// 1. 暴力API O(n+lgn)|O(1)
// let idx = 0;
// for (let i = m; i < m + n; i++) {
//     nums1[i] = nums2[idx++];
// ||||||||or|||||||||||||
// nums1.splice(m, nums1.length - m, ...nums2);
// return nums1.sort((a, b) => a - b);

// @after-stub-for-debug-begin
module.exports = merge;
// @after-stub-for-debug-end
