/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] Valid Parentheses
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (44.54%)
 * Likes:    2784
 * Dislikes: 0
 * Total Accepted:    843.8K
 * Total Submissions: 1.9M
 * Testcase Example:  '"()"'
 *
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and
 * ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *
 *
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: s = "()"
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: s = "()[]{}"
 * Output: true
 *
 *
 * Example 3:
 *
 *
 * Input: s = "(]"
 * Output: false
 *
 *
 * Example 4:
 *
 *
 * Input: s = "([)]"
 * Output: false
 *
 *
 * Example 5:
 *
 *
 * Input: s = "{[]}"
 * Output: true
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 10^4
 * s consists of parentheses only '()[]{}'.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	if (s.length % 2) {
		return false;
	}
	const stack = [];
	for (let i = 0; i < s.length; i++) {
		const element = s[i];
		if (element === "(" || element === "{" || element === "[") {
			stack.push(element);
		} else {
			const topElement = stack[stack.length - 1];
			if (
				(element === ")" && topElement === "(") ||
				(topElement === "{" && element === "}") ||
				(topElement === "[" && element === "]")
			) {
				stack.pop();
			} else {
				return false;
			}
		}
	}
	return stack.length === 0;
};
// @lc code=end 
isValid("()");
