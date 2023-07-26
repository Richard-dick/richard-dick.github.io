---
title: 文献阅读-1
tags: Literatures
key: BCI-lib
---

[Control of a two-dimensional movement signal by a noninvasive brain–computer interface in humans](https://www.pnas.org/doi/abs/10.1073/pnas.0403504101)

> 2004, 很经典的文章.

<!--more-->


## abstract

背景: Whereas noninvasive BCIs are already in use for simple applications, 
it has been widely assumed that only invasive BCIs, 
which use electrodes implanted in the brain, 
can provide multidimensional movement control of a robotic arm or a neuroprosthesis.

> 侵入式强, 只有侵入式能带来多维的机器手控制

工作: We now show that a noninvasive BCI that uses scalp-recorded electroencephalographic activity and an adaptive algorithm can provide humans, including people with spinal cord injuries, with multidimensional point-to-point movement control that falls within the range of that reported with invasive methods in monkeys. 

> 非侵入式照样能做到, 而且结果和侵入式相比 comparable


## Intro

介绍脑机接口的主要目标和背景知识, 可以读原文


## Result

Independence of the vertical and horizontal variables: Yes

- Vertical - 24Hz Beta
- Horizontal - 12Hz mu



## Discussion

...

## Methods

### human subjects

Four people :
- user A
  - a man age 41
  - a complete midthoracic (T7) spinal cord injury 26 years before the study.
  - participated in several studies of onedimensional cursor control (228 sessions; 91 h of performance)
- user B
  - a woman age 27
  - participated in one such study (28 sessions; 11 h of performance)
- user C
  - a man age 31
  - no previous experience.
- user D
  - a man age 23
  - an incomplete midcervical (C6) spinal cord injury 7 years before the study.
  - participated in a one-dimensional study (47 sessions; 19 h of performance) 4–5 years earlier and had no BCI experience in the 4 years since.

> Both A and D had normal arm function, had little or no leg function, and used wheelchairs.<br>
> Users B and C had no disabilities.<br>
> The study was approved by the New York State Department of Health Institutional Review Board, and each user gave informed consent.


### Study Protocol

- EEG activity was recorded from 64 standard electrode locations distributed over the entire scalp. 
- All 64 channels were referenced to the right ear, amplified 20,000X (bandpass 0.1–60 Hz), digitized at 160 Hz, and stored. 

实验过程如下:

1. 目标位置随机产生(八选一)
2. cursor产生
3. 移动(10s内胜负)

![图示过程](/assets/images/posts/Literature/image.png)

> Protocol. The screen at Left shows the eight possible target locations. 
> The other screens show the sequence of events in one trial. 
> 1, a target appears; 
> 2, 1 s later the cursor appears and moves in two dimensions controlled by the user’s EEG activity asdescribed in Methods; 
> 3, the cursor reaches the target; 
> 4, the target flashes for 1 s; 
> 5, the screen is blank for 1 s and then the next trial begins. (Step 2 lasts up to 10 s. If the cursor does not reach the target in this time, the trial jumps to step 5.)

### Control of Cursor Movement

controlled by a linear equation in which the independent variable was a weighted combination of the amplitudes in a mu (8–12 Hz) or beta (18–26 Hz) rhythm frequency band over the right and left sensorimotor cortices.

由一维情况初始化二维值, 然后训练, 分为左右脑控制的上下移动.

$$M_V = a_V(w_{RV}R_V + w_{LV}L_V +b_V)$$

$$M_H = a_H(w_{RH}R_H + w_{LH}L_H +b_H)$$





## words-learning

- electroencephalographic 
  - 脑电图的
- 