/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 *
 * https://leetcode-cn.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (72.31%)
 * Likes:    2052
 * Dislikes: 0
 * Total Accepted:    743.2K
 * Total Submissions: 1M
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：head = [1,2,3,4,5]
 * 输出：[5,4,3,2,1]
 *
 *
 * 示例 2：
 *
 *
 * 输入：head = [1,2]
 * 输出：[2,1]
 *
 *
 * 示例 3：
 *
 *
 * 输入：head = []
 * 输出：[]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 链表中节点的数目范围是 [0, 5000]
 * -5000
 *
 *
 *
 *
 * 进阶：链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？
 *
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
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    // recursion
    // 1. 确定递归中递过程的结束
    if (head == null || head.next === null) {
        return head;
    }
    // 2. 递
    let ansReturned = reverseList(head.next);
    // 3. 归的过程中的操作
    head.next.next = head;
    head.next = null;
    // 4. 返回题目中需要的 `头节点`
    return ansReturned;
    // iterate
	// let curr = head,
	// 	prev = null;
	// while (curr) {
	// 	const next = curr.next;
	// 	curr.next = prev;
    //     prev = curr;
    //     curr = next;
    // }
    // return prev;
};
// location.href=
// @lc code=end
