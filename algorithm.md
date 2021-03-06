# Algorithm and Data Construction
- [Algorithm and Data Construction](#algorithm-and-data-construction)
  - [学习目标](#学习目标)
  - [入门注意](#入门注意)
  - [如何写出正确的代码?](#如何写出正确的代码)
  - [如何刷题: 三四五组合, 世界观与方法论](#如何刷题-三四五组合-世界观与方法论)
    - [精通任何领域的三重要点](#精通任何领域的三重要点)
      - [1. 知识网络 -- chunk it up](#1-知识网络----chunk-it-up)
      - [2. 刻意练习 -- deliberate practicing](#2-刻意练习----deliberate-practicing)
      - [3. 即时反馈 -- feedback](#3-即时反馈----feedback)
    - [四步切题法](#四步切题法)
    - [五步刷题法 [五毒神掌]](#五步刷题法-五毒神掌)
  - [百家之言](#百家之言)
  - [正视算法题](#正视算法题)
  - [时间复杂度](#时间复杂度)
    - [Big O](#big-o)
    - [常见的时间复杂度](#常见的时间复杂度)
  - [数组 Array](#数组-array)
    - [二分查找](#二分查找)
  - [Linkded List](#linkded-list)
  - [必知必会代码实现](#必知必会代码实现)
  - [待刷题一览](#待刷题一览)

## 学习目标

1. 面对常见的算法面试题, 有一个合理的思考路径;
2. 培养使用计算机算法思维解决问题的素养.
3. 表现： 
   1. 和面试官积极讨论题目条件, 划定边界; 
   2. 由易到难的解法都概述一下, `暴力解法 --> hash 解法 --> 对撞指针` 对应的 time complexity 也能分析对; 
   3. 一气呵成写出跑的通的代码.

## 入门注意

1. 通过'解题'夯实基础算法
-> 算法较抽象, 在做题中体会

2. 理解算法的本质, 学会**挖掘'规律'**
-> 科学本身就是对自然规律的归纳总结

3. 举一反三, **学会变通和延申**

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

1. 主动型
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

## 百家之言

> 一个类型针对练习一些题目之后，你就可以发现一定的规律，某一些题目是这样解，另一些题目是那样解... 这是一个很正常的现象，每种类型的题目肯定是存在一定规律的。
>  
> 这时候就可以开始对此类题目进行总结了，针对此类问题，以及其典型的题目，发现的解题方法，进行总结。当下次你再遇到这种类型的题目，你就能很快想到解题思路，从而很快的解答。
>  
> 所以，当你看到一个题目，**首先你要想到它属于哪种数据结构或算法，然后要想到这是一个什么类型的问题，然后是此类问题的解决方法。**

## 正视算法题

我们的计算机很傻, 只能 `if for while recursion` , 所以做题深入到本质就是找循环体(找重复性).

> 为什么？ 
> 究其原因：计算机是人发明的，本质是重复干活的工具，用来解决的问题自然也是具有重复性

破解懵逼状态办法:

> 由易到难, 思考路径：有没有暴力解 --> 理解基本情况是怎么被解决, 去找最近重复子问题 --> 再泛化, 去**找重复性**

万事万物都是统一的. 

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

<i id='array'></i>

基础数据结构
处理边界索引
<a href='#necessaryKnowledge'>array's necessary implementation </a>

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

## Linkded List

面试前一定要手写一遍

> 解法固定, 算法 / 思路简单, 但代码容易写的很复杂.

## 必知必会代码实现

<i id='necessaryKnowledge'></i><a href='#array'>数组</a> <a href='./algorithmJS.md#arrayNecessary'>JS实现</a>

> 一个支持动态扩容的数组
> 实现一个大小固定的有序数组，支持动态增删改操作
> 实现两个有序数组合并为一个有序数组

链表实现

> 单链表、循环链表、双向链表，支持增删操作
> 实现单链表反转
> 实现两个有序的链表合并为一个有序链表
> 实现求链表的中间结点

## 待刷题一览

看见一个课程, 挺想买的, 有机会试下[](https://ke.qq.com/course/package/31104?flowToken=1039500), 放了链接又没放链接, hhh

最下面贴了课程讲解问题, 听说有三四百道题的讲解. 

![基础班的](https://10.idqqimg.com/qqke_course_info/ajNVdqHZLLBqO5xicic16Fayib252nXsia4vONCUKhhiakSg1aIPszzwdrZicH5Z4qf7RZRTsU9Sbaiaxk/)

![刷题中级班](https://10.idqqimg.com/qqke_course_info/ajNVdqHZLLBkssX1Zmictic2jRvKxSkKYiaicPlyXvBX938cQzuWorqn3XfY8Un98f9Uct8H9LuVSvs/)
