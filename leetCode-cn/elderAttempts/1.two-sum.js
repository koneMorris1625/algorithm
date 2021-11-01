/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
    // const hash = new Map();
    // for (let i = 0; i < nums.length; i++) {
    //     const e = nums[i];
    //     if (hash.has(target - e))
    //         return [hash.get(target - e), i]
    //     hash.set(e, i);
    // }
    // return [];
    // ______________________________

    const obj = {};
    for (let i = 0; i < nums.length; i++) {
        const e = nums[i];
        if (obj[target - e] !== undefined) {
            return [obj[target - e], i];
        }
        obj[e] = i;
    }
    return [];

    // -----------------------------------
    // let hash = {};

    // for (let i = 0; i < nums.length; i++) {
    //     if (hash[target - nums[i]] !== undefined) { // Xa = nums[i], Xb = target - Xa;
    //         return [hash[target - nums[i]], i];
    //     }
    //     hash[nums[i]] = i;
    // }
    // return [];
    // --------------------------------------
    // let hash = new Map();

    // for (let i = 0; i < nums.length; i++) {
    //     const e = nums[i];
    //     if (hash.has(target - e)) {
    //         return [hash.get(target - e), i];
    //     }
    //     hash.set(e, i);
    // }
    // ------------------------
    // var l = 0, r = nums.length - 1;
    // var res = [];
    // nums.sort((a, b) => a - b);
    // while (l < r) {
    //     if (nums[l] + nums[r] === target) {
    //         res.push(l);
    //         res.push(r);
    //         return res;
    //     }
    //     if (nums[l] + nums[r] < target) {
    //         l++;
    //     }
    //     if (nums[l] + nums[r] > target) {
    //         r--;
    //     }
    // }
    // return res;

}

// @lc code=end
