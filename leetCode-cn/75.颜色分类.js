/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
let swap = function (nums, first, second) {
	let temp = nums[first];
	nums[first] = nums[second];
	nums[second] = temp;
};
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
	// 2. quick sort three. **CLEAR the variable's definatition**
	let zero = 0, // [0...zero] 0   !**[zero+1, i/two] 1 **!
		two = nums.length - 1; //(two...nums.length-1] 2
	for (let i = 0; i <= two; ) {
		if (nums[i] === 2) {
			swap(nums, two, i);
			two--;
		} else if (nums[i] === 0) {
			swap(nums, zero, i);
			zero++;
			i++;
		} else {
			i++;
		}
	}
};
// @lc code=end

// 3. [LIGHTUP] Thinking is the most important. just 4 fresh.
// let count = [0, 0, 0];
// for (var e of nums) {
//     count[e]++;
// }
// let flag = 0;
// for (let i = 0; i < count.length; i++) {
//     for (let j = 0; j < count[i]; j++) {
//         nums[flag++] = i;
//     }
// }
// for (var i = 0; i < count[0]; i++) {
//     arr[flag++] = o; // <==> arr[flag] = 0; flag++;
// }
// for (var i = 0; i < count[1]; i++) {
//     arr[flag++] = 1;
// }
// for (var i = 0; i < count[2]; i++) {
//     arr[flag++] = 2;
// }
// // // 1. for*2  O(2n) | O(1)
// let len = nums.length,
// 	flag = 0;
// if (len < 2) return nums;
// for (let i = 0; i < len; i++) {
// 	if (nums[i] === 0) {
// 		let temp = nums[flag];
// 		nums[flag] = nums[i];
//         nums[i] = temp;
//         flag++;
// 	}
// }
// for (let i = flag; i < len; i++) {
// 	if (nums[i] === 1) {
// 		let temp = nums[flag];
// 		nums[flag] = nums[i];
// 		nums[i] = temp;
//         flag++;
// 	}
// }
