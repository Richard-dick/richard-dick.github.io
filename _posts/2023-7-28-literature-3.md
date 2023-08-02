---
title: 文献阅读-3
tags: Literatures
key: BCI-lib
---

[Information-based functional brain mapping](https://www.pnas.org/doi/abs/10.1073/pnas.0600244103)

> 2005, 研究的问题是**活动模式在⼤脑的哪个位置包含有关实验条件的信息？**

<!--more-->

## abstract

背景: 高分辨神经成像和多电极电生理记录的发展提供了大量的多元数据. 

疑问: where in the brain does the activity pattern contain information about the experimental condition?


工作: 

使用"searchlight", 扫描成像区域, 并对其内容进行多变量分析.

## Intro

功能性大脑图谱是从大脑功能专门化的宏观区域组成这个想法演变而来的.

激活整个功能区域, 然后成像计算体积并阈值化, 从而定位该区域. 
称这种方法为"activation-based"

随着fMRI的出现, 空间分辨率逐渐提高. 跨多个体元延申的功能区域将视作为一个整体被激活的假设也发挥出作用. 但在空间平滑的过程中, 类似于"椒盐"的结果被视作为噪声而抹去.

省略平滑会降低统计灵敏度, 降低灵敏度会带来更多的"椒盐"结构. 然而, 这些微弱效应的精细模式可能包含神经科学相关的信息.

如今(2005)标准临床扫描仪在3-T场强下可以稳健地实现2mm的体元宽度. 如果继续沿用功能区域整体被激活这一理论作为实验分析依据, 高分辨率的信息就很难被正视.

但正视它需要迎接更多的挑战:
- Should fine-scale activity patterns be thought of as distributed representations?
- How can informative patterns be sensitively detected, distinguishing them from noise of similar salt-and-pepper appearance?
- How can data be related between subjects when the availabe common spaces lack precision and, more fundamentally, fine-scale activity patterns, like fingerprints, may be unique to each individuals?

分布式 fMRI 活动模式中包含的信息已针对扩展的预定义区域、 启发式选择的不连续体素集和全局模式进⾏了分析.

我们的⽅法是"information-based"， 因为它定位包含有关实验条件的信息的区域。 该信息可以存在于空间平均活动⽔平的变化或活动模式的变化中。


## Result

### An Implementation of Information-Based Functional Mapping

来自区域内所有体素的信号的组合可以提供更⼤的统计功效。 
当分析的目标是找到激活区域时，可以通过局部平均（即通过数据的平滑） 来组合局部信号。
这里分析的目标是找到信息丰富的区域，平滑会删除数据空间精细结构中的信息。
因此，我们使用⽐较条件之间的活动模式的多元统计数据来组合本地信号.


#### Spherical Multivariate Searchlight

为了获得连续图谱, 我们将球形的searchlight以每个体元为中心计算多元效应统计量.

#### Multivariate Effect Statistics

我们重点关注每个区域内活动的空间模式所承载的信息, 假定活动模式虽然被噪声覆盖, 但是可复制的, 因此可以估计为每种条件下试验的平均值.

- 平均绝对t值: 执行专题的线性回归对比分析. 没有考虑噪声的协方差结构.
- 马哈拉诺比距离.
- 随机化测试和FDR阈值: P value


### Validation

TODO:

## Discussion

todo:



## Methods

todo:


## words-learning
