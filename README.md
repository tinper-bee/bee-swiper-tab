# bee-swiper-tab

[![npm version](https://img.shields.io/npm/v/bee-swiper-tab.svg)](https://www.npmjs.com/package/bee-swiper-tab)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-swiper-tab/master.svg)](https://travis-ci.org/tinper-bee/bee-swiper-tab)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-swiper-tab/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-swiper-tab?branch=master)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/bee-swiper-tab.svg)](https://david-dm.org/tinper-bee/bee-swiper-tab#info=devDependencies)
[![NPM downloads](http://img.shields.io/npm/dm/bee-swiper-tab.svg?style=flat)](https://npmjs.org/package/bee-swiper-tab)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/tinper-bee/bee-swiper-tab.svg)](http://isitmaintained.com/project/tinper-bee/bee-swiper-tab "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/tinper-bee/bee-swiper-tab.svg)](http://isitmaintained.com/project/tinper-bee/bee-swiper-tab "Percentage of issues still open")


为多个数据小屏幕中展示量身定做，tab与swiper的结合，多用于表情的展示或者小item的展示。



## 使用

### 使用单独的bee-swiper-tab包
#### 组件引入
先进行下载bee-swiper-tab包
```
npm install --save bee-swiper-tab
```
组件调用
```js
import Button from 'bee-swiper-tab';
 render(<SwiperTab />,document.getElementById("#app))   
```
#### 样式引入
- 可以使用link引入build目录下SwiperTab.css
```
<link rel="stylesheet" href="./node_modules/bee-swiper-tab/build/SwiperTab.css">
```
- 可以在js中import样式
```js
import "./node_modules/bee-swiper-tab/src/SwiperTab.scss"
//或是
import "./node_modules/bee-swiper-tab/build/SwiperTab.css"
```


## API


|参数|说明|类型|默认值|
|:--|:---:|:--:|---:|
|title|tab标签|array|["群组1","群组2","群组3"]|
|swiperArray|滑动数据|array||
|activeIndex|tab页签activeIndex|number|0|
|columnItemNum|定义没列swiper的数据放几个item|number|4|
|onSelectItem|点击选中某个item的回调,返回三个参数(param1:当前tab页签swiper的activeIndex,param2:当前swiper的activeIndex,param3:当前列下第几个)|func|-|
|addItem|点击添加按钮的回调param1:当前tab页签的activeIndex|func|-|
|deleteItem|点击删除按钮的回调param1:当前tab页签的activeIndex|func|-|
|onChangeTab|切换tab页回调param:切换后的activeIndex|func|-|
|render|自定义的展示出来的item,需要展示哪些字段最多两个(label,img）|Function(record)|-|






#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-bee/bee-swiper-tab
$ cd bee-swiper-tab
$ npm install
$ npm run dev
```
