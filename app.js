// 入口文件
// 1.加载 express 模块

var express = require('express');
var path = require('path');

// 2.创建一个 app 对象，类似于创建一个 server 对象
var app = express();


//  -------------注册路由--------------
//  需要精确匹配
// app.get('/index',(req,res)=>{
// 	res.end('hello world');
// });

// 不 需要精确匹配，可以是 /index/aaa/ddd
// app.use('/index',(req,res)=>{
// 	// res.end('hello world,世界世界你好');
// 	res.send('hello world,世界世界你好');
// });

// 需要精确匹配
// app.all('/index',function(req,res){
// 	res.send('hello world');
// })

// 通过正则表达式来匹配
// app.get(/^\/index(\/.+)*$/,function(req,res){
// 	res.send('hello world aaaa');
// })


// 通过 req.params 获取路由中的参数 路由中 输入 /news/2019/08/30
// app.get('/news/:year/:month/:day',function(req,res){
// 	res.send(req.params)
// })


// 处理静态资源的方法  参数1 /xxx 叫做虚拟路径
app.use('/xxx',express.static(path.join(__dirname,'public')));

app.use('/www',express.static(path.join(__dirname,'public')));
// 3.启动服务
app.listen(3000,function(){
	console.log('http://localhost:3000');
})