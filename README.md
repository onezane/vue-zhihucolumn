![zhihu-columns.png](http://upload-images.jianshu.io/upload_images/1158621-c2895c861d876ba8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

# vue-zhihucolumn 
[![](https://img.shields.io/badge/ZCOOL-%E6%B2%B9%E6%9F%91%E9%B8%9F%E6%A2%A8-yellow.svg)](http://www.zcool.com.cn/u/15243725) [![](https://img.shields.io/badge/WeChat-JASON%E6%B2%B9%E6%9F%91%E9%B8%9F%E6%A2%A8-green.svg)](https://www.jianshu.com/p/4f49400c4c91)

一个基于Vue.js开发的知乎专栏WebApp

项目展示地址：www.ygnili.com

设计展示地址：www.ygnili.com 

## 项目运行

``` bash
# 克隆项目
git clone https://github.com/jasonwongui/vue-zhihucolumn.git

# 安装依赖
npm install

# 运行项目
npm run dev
```
在浏览器输入 [localhost:8080](http://localhost:8080)，
按F12打开浏览器手机模拟器，刷新访问即可

## 项目结构
```
> vue-zhihucolumn
>> build
>>> build.js
>>> check-versions.js
>> config
>> src
>> static
>> static                           // 静态文件，比如一些图片，json数据等
>> .babelrc                         // ES6语法编译配置
>> .editorconfig                    // 定义代码格式
>> .eslintignore                    // ESLint 检查忽略的文件
>> .eslistrc.js                     // ESLint 文件，如需更改规则则在此文件添加
>> .gitignore                       // git 上传需要忽略的文件
>> .postcssrc
>> index.html                       // 入口页面
>> README.md                        // 项目说明
>> package-lock.json
>> package.json                     // 项目基本信息
>> README.md                        // 项目说明
```
