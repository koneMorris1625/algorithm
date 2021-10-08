/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    // bottom-left
    let col = 0, row = matrix.length - 1;
    if (matrix === null || row < 0 || matrix[0].length <= 0){
        return false;
    }   // 
    while (row >= 0 && col < matrix[0].length) {
        const e = matrix[row][col];
        if (e === target) {
            return true;
        }
        e > target ? row-- : col++;
        // if (e < target) {
        //     col++;
        // }
        // else if (e > target) {
        //     row--;
        // }
        // else {
        //     return true;
        // }
    }
    return false;
    // if (matrix.length == 0 && matrix[0].length == 0) return false;
    // let i = 0, j = matrix[0].length - 1;  //矩阵右上角
    // while (i < matrix.length && j >= 0) {
    //     if (matrix[i][j] == target) return true;
    //     else if (matrix[i][j] < target) i++;  //排除一行
    //     else if (matrix[i][j] > target) j--;  //排除一列
    // }
    // return false;
    // TODO!:  binary search

};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = searchMatrix;
// @after-stub-for-debug-end