/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 *
 * https://leetcode-cn.com/problems/reverse-linked-list-ii/description/
 *
 * algorithms
 * Medium (54.86%)
 * Likes:    1057
 * Dislikes: 0
 * Total Accepted:    220.3K
 * Total Submissions: 401K
 * Testcase Example:  '[1,2,3,4,5]\n2\n4'
 *
 * 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left  。请你反转从位置 left 到位置 right 的链表节点，返回
 * 反转后的链表 。
 *
 *
 * 示例 1：
 *
 *
 * 输入：head = [1,2,3,4,5], left = 2, right = 4
 * 输出：[1,4,3,2,5]
 *
 *
 * 示例 2：
 *
 *
 * 输入：head = [5], left = 1, right = 1
 * 输出：[5]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 链表中节点数目为 n
 * 1
 * -500
 * 1
 *
 *
 *
 *
 * 进阶： 你可以使用一趟扫描完成反转吗？
 *
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
class ListNode {
	constructor(val, next) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
	let dummyHead = new ListNode(0, head),
		g = dummyHead,
		p = g.next;

	for (let i = 0; i < left - 1; i++) {
		g = g.next;
		p = p.next;
	}

	for (let i = 0; i < right - left; i++) {
		let nxtNode = p.next;
		p.next = p.next.next;
		nxtNode.next = g.next;
		g.next = nxtNode;
	}

	console.log(head);
	return dummyHead.next;

	// 3. 双指针反转区间后拼接✔️
	// 1. 尝试用递归 --> 最小子问题✔️
	// https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247484467&idx=1&sn=beb3ae89993b812eeaa6bbdeda63c494&scene=21#wechat_redirect
};
// @lc code=end

// let m = left,
// 	n = right;
// // 2. 双指针头插法 ✔️
// let dummyHead = new ListNode(0, head);
// // 初始化 p, g 节点
// let g = dummyHead,
// 	p = dummyHead.next;
// // 移动到正确的位置上, 注意不是 i < m
// for (let i = 0; i < m - 1; i++) {
// 	g = g.next;
// 	p = p.next;
// }
// // 头插法
// for (let i = 0; i < n - m; i++) {
// 	let removedNode = p.next;
// 	p.next = p.next.next;
// 	removedNode.next = g.next;
// 	g.next = removedNode;
// }
// return dummyHead.next;
// @after-stub-for-debug-begin
module.exports = reverseBetween;
// @after-stub-for-debug-end
