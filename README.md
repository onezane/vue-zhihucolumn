![zhihu-columns.png](http://upload-images.jianshu.io/upload_images/1158621-c2895c861d876ba8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

# vue-zhihucolumn 
[![](https://img.shields.io/badge/ZCOOL-%E6%B2%B9%E6%9F%91%E9%B8%9F%E6%A2%A8-yellow.svg)](http://www.zcool.com.cn/u/15243725) [![](https://img.shields.io/badge/WeChat-JASON%E6%B2%B9%E6%9F%91%E9%B8%9F%E6%A2%A8-green.svg)](https://www.jianshu.com/p/4f49400c4c91)

一个基于Vue.js(v2.5.2)开发的知乎专栏WebApp

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
vue-zhihucolumn
┣━━build                                // 项目构建(webpack)相关代码
┃  ┣━━build.js                          // 生产环境构建代码
┃  ┣━━check-versions.js                 // 检查node、npm等版本               
┃  ┣━━utils.js                          // 构建工具相关
┃  ┣━━vue-loader.conf.js                // 配置了css加载器
┃  ┣━━webpack.base.conf.js              // webpack基础配置
┃  ┣━━webpack.dev.conf.js               // webpack开发环境配置
┃  ┗━━webpack.prod.conf.js              // 
┣━━config                               // 
┃  ┣━━dev.env.js                        // 
┃  ┣━━index.js                          // 
┃  ┗━━prod.env.js                       // 
┣━━src                                  // 
┃  ┣━api                                // 
┃  ┣━base                               // 
┃  ┣━common                             //
┃  ┣━components                         //
┃  ┣━router                             //
┃  ┣━store                              // 
┃  ┣━App.vue                            //
┃  ┗━main.js                            //
┣━━static                               //
┣━━.babelrc                             //
┣━━.editorconfig                        // 
┣━━.eslintignore                        //
┣━━.eslistrc.js                         //
┣━━.gitignore                           //
┣━━.postcssrc                           //
┣━━index.html                           //
┣━━package-lock.json                    //
┣━━package.json                         //
┗━━README.md                            //
```