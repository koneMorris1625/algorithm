# JS Algorithm and Data Construction
- [JS Algorithm and Data Construction](#js-algorithm-and-data-construction)
  - [Array & String](#array--string)
    - [2D / 3D Array](#2d--3d-array)
    - [Binary Search in JS](#binary-search-in-js)
    - [必知必会代码实现](#必知必会代码实现)
    - [经典题目](#经典题目)
      - [LeetCode 283 Move Zeros](#leetcode-283-move-zeros)
          - [练习 27: LeetCode 27 remove Element](#练习-27-leetcode-27-remove-element)
          - [练习 26: Remove Duplicated from Sorted Array](#练习-26-remove-duplicated-from-sorted-array)
          - [练习 80: Remove Duplicated from Sorted Array ||](#练习-80-remove-duplicated-from-sorted-array-)
      - [LeetCode 75 Sort Colors](#leetcode-75-sort-colors)
          - [练习 88: Merge Sorted Array --> 归并排序](#练习-88-merge-sorted-array----归并排序)
          - [练习 215: Kth largest Element in an Array](#练习-215-kth-largest-element-in-an-array)
    - [对撞指针](#对撞指针)
      - [LeetCode 167 Two Sum || - Input array is sorted](#leetcode-167-two-sum----input-array-is-sorted)
    - [slider window 滑动窗口](#slider-window-滑动窗口)
      - [subString](#substring)
          - [slider window 练习](#slider-window-练习)
    - [String](#string)
  - [Linkded List](#linkded-list)
  - [Stack](#stack)

## Array & String

### 2D / 3D Array

```js
// js 中不支持二维数组, 但可以这样实现.
let averageTemp = [];
averageTemp[0] = [72, 75, 79, 79, 81, 81];
averageTemp[1] = [81, 79, 75, 75, 73, 73];
consle.table(averageTemp); //更好的在控制台展示
// 3D array's Construction
const matrix3x3x3 = [];
for (let i = 0; i < 3; i++) {
    matrix3x3x3[i] = [1, 2, 3]; // 我们需要初始化每个数组
    for (let j = 0; j < 3; j++) {
        matrix3x3x3[i][j] = [1, 2, 3];
        for (let z = 0; z < 3; z++) {
            matrix3x3x3[i][j][z] = i + j + z;
        }
    }
}
```

### Binary Search in JS

简单的二分查找 js 实现:

* [binarySearch00()](./html/algorithm/binarySlimit.html)
* [binarySearch()](./html/algorithm/forwhile.html)

前置条件

* 数组形式的数据结构
* 数组中元素有序且不重复

> [thoughtInCoding.md](https://github.com/koneMorris1625/h5c3JS/blob/a0411977eeb167ddcfef3c2d2ddd077579108379/thoughtInCoding.md)
>
> - 循环中维护了一个循环不变量, 维护了一种声明, target 始终保持在 [l, r] 区间中
> - 快排, 堆, 图
> - 关注**如何控制边界来保证循环不变量**

### 必知必会代码实现

<i id='arrayNecessary'></i>数组实现

> 一个支持动态扩容的数组 // javascript 本身就支持动态扩容
> 实现一个大小固定的有序数组，支持动态增删改操作
> 实现两个有序数组合并为一个有序数组

链表实现

> 单链表、循环链表、双向链表，支持增删操作
> 实现单链表反转
> 实现两个有序的链表合并为一个有序链表
> 实现求链表的中间结点

### 经典题目

#### LeetCode 283 Move Zeros

> title: 给定一个数组 nums, 写一个 function, 将数组中所有的 0 挪动到数组的末尾, 而维持其他所有非零元素的相对位置.
> e.g. [0, 0, 1, 3, 12] --> [1, 3 , 12, 0, 0] > [moveZeros03Exchange](html/algorithm/binarySlimit.html)
> 优化的思路: 使用了辅助的空间, 能否原地

1. O(n) + O(n) + O(1)
2. O(n) + O(1)
3. exchange
   1. 进一步优化: 或者说考虑问题, 发挥 k 指针的意义, 扫描整个数组. **思考特殊测试用例**时该怎么囊括进来.

      [moveZeros03Exchange](html/algorithm/binarySlimit.html)

###### 练习 27: LeetCode 27 remove Element

沟通明确问题的具体定义

> - 如何定义删除? 从数组中删除, 还是说移动到末尾?
> - 剩余元素是否要保证原有的相对顺序?
> - 是否有空间复杂度的要求? O(1)

###### 练习 26: Remove Duplicated from Sorted Array

###### 练习 80: Remove Duplicated from Sorted Array ||

#### LeetCode 75 Sort Colors

_计数排序_: 元素个数有限的场景. 分别统计 0, 1, 2 的元素个数

[sortColors00()](./html/algorithm/sortColors.html)

quick sort 3 ways _三路快排法_--> 经典问题的延伸

[sortColorsByQuickSort3Ways()](./html/algorithm/sortColors.html)

###### 练习 88: Merge Sorted Array --> 归并排序

###### 练习 215: Kth largest Element in an Array

### 对撞指针

#### LeetCode 167 Two Sum || - Input array is sorted

和面试官沟通:

> 1. 必须是不同的元素还是说能不能同一个元素? 比如说, 给定的有序整型数组中有只有一个 4, 但 target=8, 取两个 4 可以吗?
> 2. 返回的索引是从 0 开始还是从 1 开始?
> 3. 如果没有解怎么样?
> 4. 如果有多个解? 返回任意解还是说解的集合, 这集合有什么顺序要求吗?

解法:

1. 暴力解法, for\*2 --> O(n^2)
2. 暴力解法 02, i, binarySearch(`target - nums[i]`) --> O(nlogn)
3. O(n):

### slider window 滑动窗口

#### subString

###### slider window 练习

125 Valid Palindrome
344 Reverse String
345 Reverse Vowels of a String
11 Container With Most Water

### String

首先要注意到的问题:

> - 空字符串怎么看待
> - 通常会被看做是回文串的一部分, 但具体还是看题
> - 字符的定义
> - 大小写的问题

## Linkded List

面试前一定要手写一遍

> 解法固定, 算法 / 思路简单, 但代码容易写的很复杂.

## Stack

implement
 