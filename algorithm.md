# Algorithm and Data Construction

## 学习目标

1. 面对常见的算法面试题, 有一个合理的思考路径;
2. 培养使用计算机算法思维解决问题的素养.

## 如何写出正确的代码?

1. 明确我们所声明的所有变量的含义
2. 每一个变量都有固定的含义, 循环中改变了变量的取值, 但不代表改变变量的含义, **维护好循环不变量**
3. 小数据调试
   1. [0, 1, 2, 3] 小规模数据集调试错误, 准确定位发生错误的位置.
   2. 保持耐心, 大部分时间都是在调试, 快准的找到可以说是一种核心竞争力.
   3. 也是理解代码, 程序的一种捷径.
   4. 工科的一种特性.
4. 大数据测试
   1. 更大范围的代码正确性
   2. 测试代码的性能

## 如何刷题: 三四五组合, 世界观与方法论

可操作方案:

* 精进基础
* "正确" 是一种相对的概念, 展现你的全面考虑问题的素养.

> 对一个数组排序的例子
> 快排是普通情况下的最优解, 但有些特殊情况, 如果考虑进去, 就有更优解.
> 譬如: 数组中元素是什么特征? 是否近乎有序? 如银行业务完成时间, 肯定先执行先完成, 但总会有后完成的, 但整体而言, 就是近乎有序.

做题时关注:

* 不同分类下的基础知识
* 该类型下的算法流程
* --> 不仅仅是努力`accepted`, 更要不断地追问自己, 我是不是能做得更好一些. 努力考虑问题更详细些, 针对特殊情况进行优化.
* 完成后下意识分析时空复杂度
  + 节约资源, 提升在公司的印象力

> 对问题的分析
> 逻辑的构建
> 最终代码的实现

### 精通任何领域的三重要点

#### 1. 知识网络 -- chunk it up

1. 分解知识要点
2. 构建知识图谱(脑图)

数据结构脑图: 

![image](https://raw.githubusercontent.com/koneMorris1625/myGitImageRepo/develop/newLife/20210919/001039355.png)

算法脑图: 

![image](https://raw.githubusercontent.com/koneMorris1625/myGitImageRepo/develop/newLife/20210919/001159945.png)

#### 2. 刻意练习 -- deliberate practicing

刻意练习 — 过遍数（五毒神掌）
* 练习缺陷、弱点地方

#### 3. 即时反馈 -- feedback

1. 主动型 -- 
   1. 主动看GitHub 优秀代码
   2. LeeetCode 更精妙的题解 / issue
2. 被动型
   1. code reviewed

### 四步切题法

1. Clarification
2. Possible Solutions
   1. Compare(time/space)
   2. Optimal
3. Coding
4. Test cases

### 五步刷题法 [五毒神掌]

第一遍: 
1. 5-10 min 看题和思考
2. 有思路否 ? 开写 : 直接看题解
3. 注意多题解, 寻找最优解
4. 背诵, 熟练, 默写好的解法

第二遍: 
1. 马上 LeetCode 上自己写 --> leetCode accepted
2. 多种解法的比较,体会 --> 优化

第三遍: 
1. 一天后, 重复做题
2. 不同解法的熟练程度 --> 专项练习

第四遍: 
一周后, 再次进行练习相同的题目

第五遍: 
面试前恢复性训练

## 时间复杂度

### Big O

1. O 代表数据规模量级, 学术上,严格来说, O(f(n))代表算法执行上界, O(logn) 是小于**等于** O(n^2) 的. 然而, **业界默认就是最低下界 logn**
2. O(n), 其实是 O(f(n))
3. O(logn) 有三种状态, 最差情况, 最好, 平均. 一般而言, 都说的是**平均状态下的时间复杂度.**

### 常见的时间复杂度

1. 求和 sum
   1. 常见 O(n): for 循环
   2. 数学公式: `sum = n * (n + 1) / 2; `

2. 递归时间复杂度分析: 了解分析代码总共执行了多少次. 譬如: fiborna: `f(n) = f(n-1) + f(n-2)`; f(6) 的话就要计算 2^6 次.
   > **递归树**

## 数组 Array

基础数据结构
处理边界索引

### 二分查找

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

### LeetCode 283 Move Zeros

> title: 给定一个数组 nums, 写一个 function, 将数组中所有的 0 挪动到数组的末尾, 而维持其他所有非零元素的相对位置.
> e.g. [0, 0, 1, 3, 12] --> [1, 3 , 12, 0, 0] > [moveZeros03Exchange](html/algorithm/binarySlimit.html)
> 优化的思路: 使用了辅助的空间, 能否原地

1. O(n) + O(n) + O(1)
2. O(n) + O(1)
3. exchange
   1. 进一步优化: 或者说考虑问题, 发挥 k 指针的意义, 扫描整个数组. **思考特殊测试用例**时该怎么囊括进来.

      [moveZeros03Exchange](html/algorithm/binarySlimit.html)

练习 27: LeetCode 27 remove Element
沟通明确问题的具体定义

> - 如何定义删除? 从数组中删除, 还是说移动到末尾?
> - 剩余元素是否要保证原有的相对顺序?
> - 是否有空间复杂度的要求? O(1)

练习 26: Remove Duplicated from Sorted Array
练习 80: Remove Duplicated from Sorted Array ||

### LeetCode 75 Sort Colors

_计数排序_: 元素个数有限的场景. 分别统计 0, 1, 2 的元素个数

[sortColors00()](./html/algorithm/sortColors.html)

quick sort 3 ways _三路快排法_--> 经典问题的延伸

[sortColorsByQuickSort3Ways()](./html/algorithm/sortColors.html)

练习 88: Merge Sorted Array --> 归并排序
练习 215: Kth largest Element in an Array

### LeetCode 167 Two Sum || - Input array is sorted

**对撞指针**
和面试官沟通:

> 1. 必须是不同的元素还是说能不能同一个元素? 比如说, 给定的有序整型数组中有只有一个 4, 但 target=8, 取两个 4 可以吗?
> 2. 返回的索引是从 0 开始还是从 1 开始?
> 3. 如果没有解怎么样?
> 4. 如果有多个解? 返回任意解还是说解的集合, 这集合有什么顺序要求吗?

解法:

1. 暴力解法, for\*2 --> O(n^2)
2. 暴力解法 02, i, binarySearch(`target - nums[i]`) --> O(nlogn)
3. O(n):

练习:
125 Valid Palindrome
344 Reverse String
345 Reverse Vowels of a String
11 Container With Most Water

## String

首先要注意到的问题:

> - 空字符串怎么看待
> - 通常会被看做是回文串的一部分, 但具体还是看题
> - 字符的定义
> - 大小写的问题
