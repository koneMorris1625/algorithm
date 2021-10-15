/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
	// ---------------✔️快慢指针法----------------
	// let slow = 0;
	// let n = nums.length;
	// for (let fast = 0; fast < n; fast++) {
	// 	const e = nums[fast];
	// 	if (e !== val) {
	// 		nums[slow] = e;
	// 		slow++; // nums[0,,,slow-1] 都是移除后剩下的元素
	// 	}
	// }
	// return slow; // [0,,,slow-1] -- [0,,,nums.length-1]

	// ---------------对撞指针法----------------
	let n = nums.length,
		i = 0; // [0,,,n)为有效区间, [n,,,nums.length-1]为删除区间
	while (i < n) {
		if (nums[i] !== val) {
			i++;
		} else {
			nums[i] = nums[n - 1]; // [n,,,nums.length-1]为应该被移除元素的区间
			n--; //
		}
	}
	return n;
	// |||||||||||||||||||||||||||||||||||||||
	// let flag = nums.length - 1,
	// 	i = 0;
	// if ((nums.length < 2 && nums[i] === val) || nums.length === 0) { // 处理特殊 [], [1]\n1
	// 	return flag;
	// }
	// while (i <= flag) {
	// 	if (nums[i] === val) {
	// 		if (nums[i] === nums[flag]) {	// 处理 [3,3]\n3 这种
	// 			flag--;
	// 			continue; // 待删除元素, 往前标识.
	// 		}
	// 		if (i == flag) {
	// 			return flag + 1; // flag = nums.length - 1;
	// 		}
	// 		let temp = nums[flag];
	// 		nums[flag] = nums[i];
	// 		nums[i] = temp;
	// 		flag--;
	// 	} else {
	// 		i++; // 非待删除元素, 直接遍历下一个.
	// 	}
	// }
	// return flag + 1;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = removeElement;
// @after-stub-for-debug-end

// 一半的时间都拿去调试代码了, 对特殊输入的处理.
//'[]', [1]\n1, [3,3]\n3, [4,5]\n5
// 理解代码运转, 看不懂别人的代码? 直接 debug 一下
