# express-blog-demo

使用 express-generator + mongodb + ejs 搭建的简单博客

## 依赖的版本
- nodejs: v10.15.3
- mongodb: v3.4
- express: 4.16.0

## views
页面视图，此处用ejs模板，也可以用前后端分离的模式再次导入前端页面

## bin
express启动项目的目录文件

## middleware
中间件是项目中所用到的中间件放置在此

## model
mongodb数据库数据处理

## public
express静态资源

## routes
express请求路由的处理

## settings.js
mongodb数据库配置文件

## mongodbv3.4

### 启动
- cd D:\mongodb\bin
- mongod --dbpath ../data/blog
> 可以看到mongodb自动连接端口27017



