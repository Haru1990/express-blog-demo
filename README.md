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
- cd D:\mongodb\data && mkdir blog
- cd D:\mongodb\bin
- mongod --dbpath ../data/blog
> 可以看到mongodb自动连接端口27017

# express-blog-demo

use express-generator init blog and use mongodb to deal the data

> 包含用户注册、登录、发布文章、登出功能

#### how to start

- 1. npm insatll 安装依赖
- 2. (mongodb/bin下面执行) mongod --dbpath ../data/blog
- 3. npm start 启动项目

> 注意：express、express-generator和mongodb提前安装

#### mongodb
- 官网下载即可：https://www.mongodb.com/what-is-mongodb
- 命令行启动：(mongodb/bin下面执行) mongod --dbpath ../data/blog

#### blog主页面介绍

- index主页面
- login登录页
- post发表页
- register注册页面



