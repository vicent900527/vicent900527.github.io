---
layout: post
category: book
tags: android
keywords: android
description: 学习android
title: 《Android高级进阶》
---

![img](/images/android_high_level.jpeg)

正如封面的说明：50个技能点

这本书不是循序渐进的从入门到精通式的进阶，而是已经到了一定级别后的一个知识点巩固。

其中大部分可能是之前就知道的，比如：

* View的渲染过程

* 事件传递机制

* 动画机制

* Gradle的配置

* Proguard相关

这些是一个安卓开发必须要知道的东西，只要是在这个岗位上工作，这些是必备技能。

不过沉下心来从前往后看还是有收益，比如这些必备技能，之前可能只知一二，不知深层的逻辑。

书中有更详细的阐述。

比如View的渲染过程：

``` window->activity->ViewGroup->View->MeasureSpec->Measure->layout->draw```

除此之外，还有一些高版本的支持库新组件，这个是在项目中用的比较少，是之前不知道的，有必要记下来。

以下组件出自Design Support Library

### Snackbar
	
	- 旨在替换Toast组件，或者给开发者更多选择，UI表现是从屏幕底部弹出一个提示，可以带按钮。

### TextInputLayout

	- TextView和EditText组件的组合组件，效果是EditText中的placeholder内容在输入内容后会在EditText上方显示出来。并在EditText下方显示输入的错误信息和成功信息，比如校验手机号出错还是正确的信息可以提示出来。

### TabLayout

	- 组合组件，把tab按钮和PageView组合使用，tab按钮可以横向滚动。

### NavigationView

	- 官方提供的左侧抽屉导航栏组件

### FloatingActionButton
	
	- 恒定悬浮在屏幕指定位置的按钮




