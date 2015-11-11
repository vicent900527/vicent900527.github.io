---
layout: post
category: tech
tags: tech
keywords: mongodb
description: mongoDB数据表批量拷贝
title: mongoDB数据表批量拷贝
---
把当前数据库中的tb_a中的数据拷贝到db_b数据库中的tb_a中
```
db.tb_a.find().forEach(function(d){db.getSiblingDB('db_b')['tb_a'].insert(d);})
```

解释：
把tb_a中的数据逐行取出并插入到db_b中的tb_a中。
db.getSiblingDb：
官网的解释是：a database object
所以 db.getSiblingDB('db_b')['tb_a'] 是指db_b数据库中的tb_a表
然后insert