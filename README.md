> 有幸参加公司内部管理系统的开发，前端工作基本是自己单独负责，项目期间完成了多个模块。现在把主要的都展示出来。

先把这几个截图给贴上

![](http://upload-images.jianshu.io/upload_images/3502567-cbca93cc52af1592.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](http://upload-images.jianshu.io/upload_images/3502567-583fff080fb7f1bb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](http://upload-images.jianshu.io/upload_images/3502567-de18a0c36f4125f2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](http://upload-images.jianshu.io/upload_images/3502567-c56c3a8d4fc6c8db.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

####业务元数据（创建模板表）

创建模板表的目的是为下面这个elt做准备的，因为是做数据分析，所以要有一套干净有用的模板表，这个就是根据业务需求来完成的。

下面是部分演示

![业务元数据](http://upload-images.jianshu.io/upload_images/3502567-1819de52deee1b97.gif?imageMogr2/auto-orient/strip)

####数据源接入（etl工具）

这一部分主要是对数据进行一系列的转化，包括对数据抽取、清洗、转换、聚合、映射到模板表当中。

下面是部分演示

![数据源接入](http://upload-images.jianshu.io/upload_images/3502567-66cfbe6112fefa48.gif?imageMogr2/auto-orient/strip)

####标签系统

这个项目主要是针对公牛插座的天猫和淘宝数据平台的分类正确与错误的判断，因为这个将产品特征分类已经通过程序分词完成了大部分工作。但是程序还是会出现一些误差，所以小部分还是要通过人工来完成特征是否正确。这套系统相对还是比较完善。

下面是部分演示


![标签系统](http://upload-images.jianshu.io/upload_images/3502567-6f59c4221fbf4121.gif?imageMogr2/auto-orient/strip)


####调度系统

任务调度系统是为了让某些任务定时执行，并且可以记录任务执行日志，任务执行状态等信息，里面还涉及到上传jar包等等

下面是部分演示

![调度系统](http://upload-images.jianshu.io/upload_images/3502567-93e912c36847172f.gif?imageMogr2/auto-orient/strip)

####总结

主要就是上面几个系统，当然还有登录注册，左侧菜单折叠，不同用户登录显示不同的信息。前端使用jquery框架，后台是用java。主要有下面一些技术点的收获：
```
1.ajax遍历复杂json
2.x-editable实战
3.datatable实战
4.jquery-steps实战
5.draggable实战
6.dom与json的删除添加
7.draggable实战
8.math.cos()实现拱形菜单
9.json数组对象复杂创建
10.bootstrap tags input 实战
11.tooltip用法（container:body）
12.json 处理显示多级展示
13.多级筛选数据实战
14.jquery ajax文件上传（form表单解决不刷新不跳转）
15.bind()、live()、delegate()方法区别
16.页面高度自适应大小
17.全选、复选、全不选
18.return遇到复杂层级函数
19.arguments动态传参（多层遍历）
20.对象倒序输出（先转数组）
21.css3页面切换特效
22.滚动条一直保持最上
23.侧边滑动显示与隐藏
24.input既可以输又可以选择
```
因为项目时间比较长了，有些数据可能丢失，展示效果就差了点，项目源码已经托管到github,[https://github.com/Elliottssu/inner-system.git](https://github.com/Elliottssu/inner-system.git)