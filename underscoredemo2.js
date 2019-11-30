// var _ = require('underscore')

// var names = ['李','陈','王'];

// var ages = [18,20,22];

// var genders = ['男','女','男'];

// //压缩
// var result = _.zip(names,ages,genders);

// console.log(result);

// //解压
// //
// result = _.unzip(result);

// console.log(result);
// 
// 

var _ = require('underscore');

var html = '<h2><%= name %></h2>'

// template() 函数 返回的还是一个函数
var fn = _.template(html);

var html = fn({name:'错错错'});

console.log(html);

