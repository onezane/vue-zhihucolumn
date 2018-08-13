![zhihu-columns.png](http://upload-images.jianshu.io/upload_images/1158621-c2895c861d876ba8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

# vue-zhihucolumn 
[![](https://img.shields.io/badge/ZCOOL-%E6%B2%B9%E6%9F%91%E9%B8%9F%E6%A2%A8-yellow.svg)](http://www.zcool.com.cn/u/15243725) [![](https://img.shields.io/badge/WeChat-JASON%E6%B2%B9%E6%9F%91%E9%B8%9F%E6%A2%A8-green.svg)](https://www.jianshu.com/p/4f49400c4c91)

一个基于Vue.js(v2.5.2)开发的知乎专栏WebApp

项目展示地址：---

设计展示地址：http://www.zcool.com.cn/work/ZMjU2NDgwMzI=.html 

## 项目技术栈

[vue-cli](https://github.com/vuejs/vue-cli) + [vue-router](https://github.com/vuejs/vue-router) + [vuex](https://github.com/vuejs/vuex) + [better-scroll](https://github.com/ustbhuangyi/better-scroll) + [axios](https://github.com/axios/axios) + [stylus](http://www.zhangxinxu.com/jq/stylus/) + [iconfont](http://iconfont.cn/)

## 项目预览

![知乎专栏录屏动画.gif](http://upload-images.jianshu.io/upload_images/1158621-19a79cc8ff660878.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/800)

## 项目运行

**本地运行**

``` bash
# 克隆项目
git clone https://github.com/jasonwongui/vue-zhihucolumn.git

# 安装依赖
npm install

# 运行项目
npm run dev
```
在浏览器输入 [localhost:8080](http://localhost:8080)，
按F12打开浏览器手机模拟器，刷新即可访问

**手机运行**

![知乎专栏项目二维码](http://upload-images.jianshu.io/upload_images/1158621-c438f6f9f4ae3ad6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/200)

手机扫一扫二维码即可访问

## 项目流程

![知乎专栏流程图](http://on-img.com/chart_image/5a50cba8e4b010a6e7052c4a.png)

## 项目结构
```
vue-zhihucolumn
┣━━build                                // 项目构建(webpack)相关代码
┃  ┣━━build.js                          // 生产环境构建代码
┃  ┣━━check-versions.js                 // 检查node、npm等版本               
┃  ┣━━utils.js                          // 构建工具相关
┃  ┣━━vue-loader.conf.js                // 配置了css加载器
┃  ┣━━webpack.base.conf.js              // webpack基础配置
┃  ┣━━webpack.dev.conf.js               // webpack开发环境配置
┃  ┗━━webpack.prod.conf.js              // webpack生产环境配置
┣━━config                               // 项目开发环境配置
┃  ┣━━dev.env.js                        // 开发环境变量
┃  ┣━━index.js                          // 项目一些配置变量
┃  ┗━━prod.env.js                       // 生产环境变量
┣━━src                                  // 源码目录
┃  ┣━api                                // 接口数据请求
┃  ┣━base                               // vue基础组件
┃  ┣━common                             // 公共资源文件
┃  ┣━components                         // vue公共业务组件
┃  ┣━router                             // vue路由配置
┃  ┣━store                              // vuex状态管理
┃  ┣━App.vue                            // 页面入口文件
┃  ┗━main.js                            // 程序入口文件，加载各种公共组件
┣━━static                               // 静态文件夹
┣━━.babelrc                             // ES6语法编译配置
┣━━.editorconfig                        // 定义代码格式
┣━━.eslintignore                        // ESLint检查忽略的文件
┣━━.eslistrc.js                         // ESLint文件
┣━━.gitignore                           // git上传需要忽略的文件格式
┣━━.postcssrc.js                        // postcss配置文件
┣━━index.html                           // 入口页面
┣━━package-lock.json                    // 记录node_modules文件夹的结构树和模块的下载地址
┣━━package.json                         // 项目基本信息
┣━━prod.server.js                       // 配置node服务
┗━━README.md                            // 项目说明
```

## 结语

* 学习Vue.js后练手的第一个项目，主要功能是对知乎专栏的展示，接口数据仅做学习使用；
* 设计稿均由本人完成，欢迎访问我的[站酷](http://www.zcool.com.cn/u/15243725)查看；
* 欢迎 Star 本项目，感谢您的支持。


## License
[MIT](https://github.com/GaryChangCN/zhihu-daily-byVuejs/blob/master/LICENSE)
