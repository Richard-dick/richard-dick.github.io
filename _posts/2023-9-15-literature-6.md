---
title: 文献阅读-6
tags: Literatures
key: BCI-lib
---

[Design and implementation of a brain-computer interface with high transfer rates](https://ieeexplore.ieee.org/abstract/document/1035968)

[Evolution of brain-computer interfaces: going beyond classic motor physiology](https://thejns.org/focus/view/journals/neurosurg-focus/27/1/article-pE4.xml)

[Peripheral nerve signal recording and processing for artificial limb control](https://ieeexplore.ieee.org/abstract/document/5627735)

> 2002年的一篇文章, 讲述了利用 SSVEP 实现 27bits/min的数据传输速率的电话号码输入; 2009年的一篇论文, 讲述了09年侵入式 BCI 的具体情况和前景; 2010年的一篇论文, 讲述了 beamforming 提取 PNS 信号达成 BCI 的功能. 

<!--more-->

## 2002

### abstract

本文提出了一种可以帮助用户输入电话号码的脑机接口（BCI）。该系统基于稳态视觉诱发电位（SSVEP）

> 视觉诱发电位（SSVEP）是一种生物电信号，通常用于研究大脑对视觉刺激的反应。它是一种脑电图（EEG）信号，指示大脑对特定频率的视觉刺激作出的电生理响应。通常对于 6Hz 以上的闪烁对象响应. 

## 2009

[Extracting kinematic parameters for monkey bipedal walking from cortical neuronal ensemble activity](https://www.frontiersin.org/articles/10.3389/neuro.07.003.2009/full)

### abstract

神经损伤或疾病可能会严重影响行走能力。

虽然脑机接口（BMI）的最新进展已经证明了上肢神经假体的可行性，但 BMI 尚未被评估为恢复行走的手段。

在这里，我们证明了皮层神经元群的长期记录可用于预测恒河猴双足行走的运动学——无论是离线还是实时。线性解码器从数百个皮质神经元的活动中提取腿部关节的 3D 坐标和腿部肌肉肌电图。随着通过改变步态速度和方向产生更复杂的步行模式，需要更大的神经元群来准确提取步行模式。使用切换解码器进一步改进了提取，该解码器为每个行走范例指定了一个子模型。我们建议，BMI 有一天可能会让严重瘫痪的患者再次行走

-  Our approach takes the middle ground, if we can decode **key walking parameters**: step time, step length, foot location, and leg orientation, while offloading other automatic-level controls: foot orientation, load placement, balance, and safety concerns to onboard computerized systems, then we can achieve a BMI that follows the general commands of the user while enforcing stability, and overriding motions and confi gurations likely to result in falls

### vocabulary

- bipedal: 两足的
- ensemble: 整体
- rhesus macaque: 恒河猴
- locomotion: 运动
- gait: 步态
- prothetic: 修复的

## 2009

### abstract

综述文章

### Vocabulary

- enact: 使通过, 使发生
- efficacy: 功效
- underpin: 巩固
- scalp: 头皮
- skull: 头骨
- dura: 硬脑膜
- arachnoid: 蛛网膜
- pia: 软脑膜
- ipsilateral -- contralateral

## 2010

### abstract

一种侵入性较小的替代方案是神经袖带电极(nerve cuff electrode)。这些电极已被证明是一种安全且可靠的周围神经系统记录方法

### Vocabulary

- enact: 使通过, 使发生
- efficacy: 功效
- underpin: 巩固
- scalp: 头皮
- skull: 头骨
- dura: 硬脑膜
- arachnoid: 蛛网膜
- pia: 软脑膜
- ipsilateral -- contralateral


## 2011

A Hierarchical Architecture for Adaptive Brain-Computer Interfacing

### abstract

脑机接口（BCI）允许用户使用大脑信号直接控制光标和机器人等设备。非侵入式脑机接口，例如基于从头皮记录的脑电图 (EEG) 信号的脑机接口，信噪比较低，从而限制了控制带宽。侵入式脑机接口允许进行细粒度控制，但可能会让用户疲惫不堪，因为控制通常是即时进行的。在本文中，我们通过提出一种新的脑机接口自适应分层架构来解决这些问题。该方法允许用户即时教授 BCI 新技能；这些学到的技能随后会作为高级命令直接调用，从而使用户摆脱繁琐的低级控制。我们报告了四名受试者的结果，他们使用基于分层脑电图的脑机接口在虚拟家庭环境中成功训练和控制人形机器人。高斯过程用于学习高级命令，允许 BCI 根据当前的不确定性估计在自主模式和用户引导模式之间切换。我们还报告了 BCI 中多任务处理的第一个实例，涉及单个用户同时控制两个不同的设备。我们的结果表明，分层 BCI 可以提供一种灵活而强大的方式来控制现实环境中的复杂机器人设备。

- 由于其非平稳性、固有可变性和低信噪比，EEG可靠地转换成用于设备的适当控制消息可能是困难和缓慢的
- 为了克服这些问题，我们提出了一种用于脑机接口的自适应分层架构
  - 该架构允许用户在持续的基础上教授系统新的和有用的任务：
  - 低级动作首先被学习，
  - 然后使用更高级的命令（例如，半自主移动的机器人的命令“去厨房”）半自主地执行。
  - 这种更高级别的控制使用户不必在学习命令后进行繁琐的时刻控制。
- 类似于构建两次学习映射行为(个人理解)


## 2012

Automatic Extraction of Command Hierarchies for Adaptive Brain-Robot Interfacing

### abstract

神经科学和机器人技术的最新进展已经允许用于控制轮式和人形机器人的脑机接口（BCI）的初步演示。然而，由于接口的低吞吐量和机器人的高自由度（DOF），进一步的进展已被证明具有挑战性。在本文中，我们建立在我们以前的工作层次BCI（HBCIs），试图减轻这个问题。我们扩展HBCI，允许训练任意复杂的任务，训练不再局限于一个特定的机器人状态空间（如笛卡尔空间的导航任务）。 我们提出了两种算法，通过自动提取模式，从用户的命令历史来学习命令层次结构。第一个算法建立了一个任意级别的层次结构（“控制语法”），其元素可以表示技能，整个任务，任务的集合等。用户“执行”来自该语法的单个符号，这产生较低级别的命令序列。第二种算法，这是概率的，也学习可以作为高级命令执行的序列，但不建立一个明确的层次结构。这两种算法都提供了事实上的字典压缩形式，这增强了BCI的有效吞吐量。我们目前的结果，从两个人类受试者谁成功地使用了分层BCI控制一个模拟的PR2机器人使用脑信号记录非侵入性通过脑电图（EEG）。

## 2012

[Reach and grasp by people with tetraplegia using a neurally controlled robotic arm](https://www.nature.com/articles/nature11076)

### abstract

脊髓损伤后的瘫痪、脑干中风、肌萎缩侧索硬化症和其他疾病会使大脑与身体断开连接，丧失执行任意性运动的能力。神经接口系统1-5可以将神经元活动直接转化为辅助设备的控制信号，从而恢复瘫痪患者的行动能力和独立性。我们之前已经证明，患有长期四肢瘫痪的人可以使用神经接口系统来移动和点击计算机光标，并控制物理设备6-8。身体健全的猴子已经使用神经接口系统来控制机器人ARM9，但尚不清楚严重上肢瘫痪或肢体丧失的人是否可以使用皮质神经元集合信号来指导有用的手臂动作。在这里，我们展示了两个长期四肢瘫痪的人使用基于神经接口系统的机械臂控制来执行三维伸展和抓取运动的能力。参与者使用从96通道微电极阵列记录的少量局部运动皮质(MI)神经元解码的信号，在没有明确训练的情况下控制手臂并移交广阔的空间。其中一名研究参与者在5年前植入了传感器，也使用机械臂从瓶子里喝咖啡。尽管机器人的伸展和抓握动作没有健全的人那么快或准确，但我们的结果表明，对于四肢瘫痪的人来说，在中枢神经系统受伤多年后，直接从一小部分神经信号样本中重建有用的对复杂设备的多维控制是可行的。

### vocabulary

- tetraplegia: 四肢瘫痪
- amyotrophy: 肌萎缩的
- sclerosis: 硬化
- volitional: 自愿的


## 2022

[Posterior parietal cortex predicts upcoming movement in dynamic sensorimotor control](https://www.pnas.org/doi/abs/10.1073/pnas.2118903119)

### abstract

与快速变化的世界的互动依赖于动态整合感官流入和运动流出。许多研究揭示了后顶叶皮层（PPC）的感觉运动转变，但大多数研究都强调对静态目标的反应性运动，其中感觉线索和运动目标之间的关系是固定的，因此很难区分相关的神经活动到反映刺激的运动。为了解决这个问题，我们记录了执行手动拦截任务的猴子 PPC 的单神经元活动，其中瞬时刺激位置通过不同的目标速度与即将发生的运动方向分离。有趣的是，结果表明 PPC 明确传达与即将到来的运动有关的信息，而不是瞬时刺激，这表明 PPC 在运动规划中发挥着密切的作用

- A controversy: 
  - whether the PPC predominately 
  - integrates and converts sensory information into a map for **elaborating appropriate movements**
  - or plays a proactive role in **motor preparation** 
- The objective of this study is 
  - to separate the neuronal encoding of **impending reach direction** (or predicted target location at interception time) from the encoding of **current target location**.
- If a neuron encodes the instantaneous location of the moving target, its activity should covary with target direction at reach onset, regardless of reaching direction.


### Vocabulary

- parietal: 顶骨的
- proactive: 主动的
- contigency: 将发生之事
- intraparietal sulcus: 顶内鞘
