/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
 *
 * https://leetcode-cn.com/problems/swap-nodes-in-pairs/description/
 *
 * algorithms
 * Medium (70.34%)
 * Likes:    1098
 * Dislikes: 0
 * Total Accepted:    331.6K
 * Total Submissions: 471.3K
 * Testcase Example:  '[1,2,3,4]'
 *
 * Given a linked list, swap every two adjacent nodes and return its head. You
 * must solve the problem without modifying the values in the list's nodes
 * (i.e., only nodes themselves may be changed.)
 *
 *
 * Example 1:
 *
 *
 * Input: head = [1,2,3,4]
 * Output: [2,1,4,3]
 *
 *
 * Example 2:
 *
 *
 * Input: head = []
 * Output: []
 *
 *
 * Example 3:
 *
 *
 * Input: head = [1]
 * Output: [1]
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the list is in the range [0, 100].
 * 0 <= Node.val <= 100
 *
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
 * @return {ListNode}
 */
var swapPairs = function (head) {
	// 1.终止条件
	if (!head || !head.next) {
		return head;
	}
	// // 获取第二个节点, 递归解决子问题
	// let newHead = head.next,
	// 	rest = swapPairs(newHead.next);
	// // 第二个节点指向第一个节点
	// newHead.next = head;
	// // 第一个节点指向已经递归好的节点 rest
	// head.next = rest;
	let newHead = head.next;
	[newHead.next, head.next] = [head, swapPairs(newHead.next)];
	return newHead;
};
// @lc code=end

// if (head === null || head.next === null) {
// 	return head;
// }
// let dummy = new ListNode(0, head),
// 	f = dummy;

// while (f && f.next && f.next.next) {
// 	let s = f.next,
// 	t = s.next;

// 	f.next = t;
// 	s.next = t.next;
// 	t.next = s;

// 	f = f.next.next;
// }
// // return head; //2节点丢失
// return dummy.next;

let e = new ListNode(5, null),
	ed = new ListNode(4, e),
	edf = new ListNode(3, ed),
	edfc = new ListNode(2, edf),
	head = new ListNode(1, edfc);
console.log(swapPairs(head));

// @after-stub-for-debug-begin
module.exports = swapPairs;
// @after-stub-for-debug-end
