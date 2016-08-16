---
layout: post
category: tech
tags: tech
keywords: javascript 变量 作用域 妙用
description: JS中的变量作用域
title: JS中的变量作用域
---

在JavaScript中，是没有块状作用域的，比如我们可以这样写，而不报错：

```
var age = 20;
if(age > 10){
	var name = "张三";
}
console.log(name);// 张三
```

如果是Java里面，这样写是编译不过的，name变量必须要在外面申明，否则下面引用name就会报未申明的变量错误。

这里这样写不会报错的原因，是因为这段代码相当于这样：

```
var age = 20;
var name;
if(age > 10){
	name = "张三";
}
console.log(name);
```

也就是说，在JS中，最终运行时会把变量申明提前。

其实函数也是这样，这也是为什么在JS中上部的代码能引用下面的function的原因，比如：

```
console.log(foo());//1

function foo(){
	return 1;
}
```

在JS中，变量的引用，程序会自动在所在的环境里一级一级往上检索，知道找到对应的变量为止。

```
function foo(){
	var name = "tom";
	var age = 20;
	function bar(){
		console.log(name);//tom
		console.log(age);//20
	}
	bar();
}
foo();
```

再看下面这段：

```
function foo(){
	var name = "tom";
	var age = 20;
	function bar(){
		console.log(name); //undefined
		console.log(age); //undefined
		var name = "lily";
		var age = 18;
	}
	bar();
}
foo();
```

之所以这里会变成undefined，是因为这段代码等价于：

```
function foo(){
	var name = "tom";
	var age = 20;
	function bar(){
		var name,age;
		console.log(name); //undefined
		console.log(age); //undefined
		name = "lily";
		age = 18;
	}
	bar();
}
foo();
```

就是前面提到的，变量申明会被提到所在域的最前面。因此bar函数里的name，age不再是foo里的了。


