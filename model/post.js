var mongoClient = require('./db');
var settings = require('../settings');

function Post(name, title, post) {
  this.name = name;
  this.title = title;
  this.post = post;
}

module.exports = Post;

//存储一篇文章及其相关信息
Post.prototype.save = function(callback) {
  var date = new Date();
  var time = {
      date: date
  }

  //要存入数据库的文档
  var post = {
      name: this.name,
      time: time,
      title: this.title,
      post: this.post
  };

  //打开数据库
  mongoClient.connect(settings.url, {useNewUrlParser: true}, function (err, db) {
    if (err) {
      return callback(err);
    }

    var dbo = db.db('blog');
    //读取 posts 集合
    db.collection('posts', function (err, collection) {
      if (err) {
        db.close();
        return callback(err);
      }
      //将文档插入 posts 集合
      collection.insertOne(post, {
        safe: true
      }, function (err) {
        db.close();
        if (err) {
          return callback(err);//失败！返回 err
        }
        callback(null);//返回 err 为 null
      });
    });
  });
};

//读取文章及其相关信息
Post.get = function(name, callback) {
  //打开数据库
  mongoClient.connect(settings.url, {useNewUrlParser: true}, function (err, db) {
    if (err) {
      return callback(err);
    }
    //读取 posts 集合
    db.collection('posts', function(err, collection) {
      if (err) {
        db.close();
        return callback(err);
      }
      var query = {};
      if (name) {
        query.name = name;
      }
      //根据 query 对象查询文章
      collection.find(query).sort({
        time: -1
      }).toArray(function (err, docs) {
        db.close();
        if (err) {
          return callback(err);//失败！返回 err
        }
        callback(null, docs);//成功！以数组形式返回查询的结果
      });
    });
  });
};
