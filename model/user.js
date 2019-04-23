var MongoClient = require('./db');
var settings = require('../settings');

function User(user) {
  this.name = user.name;
  this.password = user.password;
  this.email = user.email;
};

module.exports = User;

//存储用户信息
User.prototype.save = function(cb) {
  //要存入数据库的用户文档
  var user = {
      name: this.name,
      password: this.password,
      email: this.email
  };
  //打开数据库
  MongoClient.connect(settings.url, {useNewUrlParser: true}, function (err, db) {
    if (err) {
      return cb(err);
    }
    
    var dbo = db.db('blog);
    
    dbo.collection('users', function (err, collection) {
      if (err) {
        db.close();
        return cb(err);
      }
      
      collection.insertOne(user, {
        safe: true
      }, function (err, user) {
        db.close();
        if (err) {
          return cb(err);
        }
        cb(null, user[0]);
      });
    });
  });
};

//读取用户信息
User.get = function(name, cb) {
  //打开数据库
  MongoClient.connect(settings.url, {useNewUrlParser: true}, function (err, db) {
    if (err) {
      return cb(err);//错误，返回 err 信息
    }
    var dbo = db.db('blog);
    
    dbo.collection('users', function (err, collection) {
      if (err) {
        db.close();
        return cb(err);
      }
      
      collection.findOne({
        name: name
      }, function (err, user) {
        db.close();
        if (err) {
          return cb(err);
        }
        cb(null, user);
      });
    });
  });
};
