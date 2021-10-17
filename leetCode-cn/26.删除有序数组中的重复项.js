/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */
// var process = function (nums, k) {
// 	let idx = 0;
// 	for (const k of nums) {
// 		if (idx < k || nums[idx - k] != x) nums[idx++] = x;
// 	}
// 	return idx;
// };
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
	// ! `sorted array` how to use it? sorted means first 2 or 3 or Kth element is same, like[1,1,2] or [0,1,2,2,3,4,4]
	let idx = 0,
		Kth = 1;
	for (let i = 0; i < nums.length; i++) {
		if (idx < Kth || nums[idx - Kth] !== nums[i]) {
			nums[idx] = nums[i];
			idx++;
		}
	}
	return idx;
};
// @lc code=end
// 三叶女神的通用解法, 强; 但写法太过高级, 初级之人不易懂, 增加了学习成本, 但这种却更锻炼思维和 debug 能力, 仁者见仁智者见智吧
// let idx = 0,
// 	k = 3; // 保留几个重复的元素
// for (const x of nums) {
// 	if (idx < k || nums[idx - k] != x) {
// 		nums[idx++] = x;
// 	}
// }
// return idx;

// 1.1 --------------map + splice O(n)|O(n)
// let n = nums.length;
// let hash = new Map();
// for (let i = 0; i < n; i++) {
// 	const e = nums[i];
// 	if (hash.has(e)) {
// 		nums.splice(i, 1);
// 		i--;
// 		n--;
// 	} else {
// 		hash.set(nums[i], i);
// 	}
// }
// return nums.length;
// ||||||||||||||or||||||||||||||||
// for (let i = n - 1; i >= 0; i--) {
// 	const e = nums[i];
// 	if (hash.has(e)) {
// 		nums.splice(i, 1);
// 	} else {
// 		hash.set(nums[i], i);
// 	}
// }

// 1.2 -------------------Set + spilce  O(n)|O(n)
// Thanks dude: [黎哥笑](https://leetcode-cn.com/u/li-ge-xiao/)
// let set = new Set(nums);
// nums.splice(0);
// set.forEach((e) => nums.push(e));
// return nums.length;

// 2. for O(n)|O(1)
// let flag = 0,
// 	n = nums.length;
// if (n < 2) {
// 	return n;
// }
// for (let i = 1; i < n; i++) {
// 	if (nums[flag] !== nums[i]) {
// 		flag++;
// 		nums[flag] = nums[i];
// 	}
// }
// return flag + 1;
// ||||||||||||||||or|||||||||||||||
// let flag = 0,
// 	n = nums.length;
// for (let i = 0; i < n; i++) {
// 	if (nums[i] === nums[flag]) continue;
// 	else {
// 		flag++;
// 		nums[flag] = nums[i];
// 	}
// }
// return flag + 1;
// @after-stub-for-debug-begin
module.exports = removeDuplicates;
// @after-stub-for-debug-end

// time is money! 知道解法就行了, 不必再苛求具体实现
// 但不同的判断条件这种可以学习学习, 譬如本题中: 重复项的判断
// 就可以写作: nums[i-1] !== nums[i], 但对应的其他流程就会不一致, 要注意.
