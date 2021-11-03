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

let successor = null;
/**
 * @param {ListNode} head
 * @param {number} right Top N 即 Top right
 * @return {ListNode}
 */
var reverseTopN = function (head, right) {
	if (right === 1) {
		successor = head.next;
		return head;
	}
	let reversed = reverseTopN(head.next, right - 1);
	head.next.next = head;
	head.next = successor;
	return reversed;
};
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
	// 1. 尝试用递归 --> 最小子问题✔️
	// 如何用递归思想求解该题目。
	// 1.2 子问题(终止条件) 转化成了 TOP N 的反转.
	// left = 1 时转化成最小子问题: reverseTopN
	if (left === 1) {
		return reverseTopN(head, right);
	}
	// 1.1 递归解题首先要做的是明确递推公式的含义, 接着要明确的就是递归终止条件。
	let between = reverseBetween(head.next, left - 1, right - 1);
	head.next = between;
	return head;
	// https://leetcode-cn.com/problems/reverse-linked-list-ii/solution/yi-bu-yi-bu-jiao-ni-ru-he-yong-di-gui-si-lowt/
	// https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247484467&idx=1&sn=beb3ae89993b812eeaa6bbdeda63c494&scene=21#wechat_redirect
};

// @lc code=end

// // 3. 双指针反转区间后拼接✔️
// if (head === null || head.next === null) return head;
// let dummyHead = new ListNode(0, head),
// 	g = dummyHead;
// right = right - left;
// while (--left) { // 写法优: 省去for循环的写法, 简单方便,熟悉后好理解; 缺点: 初用要适应一番; 对left参数改变, 影响后续使用.
// 	g = g.next;
// }
// let x = g.next,
// 	y = g.next.next;
// while (right--) {
// 	let temp = y.next;
// 	y.next = x; // 后一个的next指针指向前面
// 	x = y; // x,y指针往后扫描
// 	y = temp;
// }
// g.next.next = y; // g.next 即初始x节点, 现在变成了尾节点, 让它指向right+1的节点
// g.next = x; // g 节点本身的next 指向 x节点
// return dummyHead.next;

// 测试用例 [1,2,3,4,5], left =3, right = 4
let e = new ListNode(5, null),
	ed = new ListNode(4, e),
	edf = new ListNode(3, ed),
	edfc = new ListNode(2, edf),
	head = new ListNode(1, edfc);
console.log(`before reverse: ${head}`);
let after = reverseBetween(head, 3, 4);
console.log(`after reverse: ${after}`);
let a = 0;

// 双指针头插法注释版
// 定义虚拟头节点处理一个节点的特殊情况
// let dummyHead = new ListNode(0, head);
// // 定义双指针
// let g = dummyHead,
// 	p = dummyHead.next;
// // 移动双指针到 g = left - 1, p = left 的位置
// for (let i = 0; i < left - 1; i++) {
// 	g = g.next;
// 	p = p.next;
// }
// let g = dummyHead;
// while (--left) {
// 	g = g.next;
// }
// let p = g.next;
// // 头插法处理
// for (let i = 0; i < right - left; i++) {
// 	// todo [p.next.next, p, g] = [g.next, p.next.next, p.next];
// 	const removedNode = p.next;
// 	p.next = p.next.next;
// 	removedNode.next = g.next;
// 	g.next = removedNode;
// }
// return dummyHead.next;

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
