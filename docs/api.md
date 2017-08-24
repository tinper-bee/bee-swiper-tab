# SwiperTab

为多个数据小屏幕中展示量身定做，tab与swiper的结合，多用于表情的展示或者小item的展示。

## API
|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|title|tab标签|array|["群组1","群组2","群组3"]|
|swiperArray|滑动数据|array||
|activeIndex|tab页签activeIndex|number|0|
|columnItemNum|定义没列swiper的数据放几个item|number|4|
|onSelectItem|点击选中某个item的回调,返回三个参数(param1:当前tab页签swiper的activeIndex,param2:当前swiper的activeIndex,param3:当前列下第几个)|func|-|
|addItem|点击添加按钮的回调param1:当前tab页签的activeIndex|func|-|
|deleteItem|点击删除按钮的回调param1:当前tab页签的activeIndex|func|-|
|onChangeTab|切换tab页回调param:切换后的activeIndex|func|-|
|render|自定义的展示出来的item,需要展示哪些字段最多两个(label,img）|Function(record)|-|