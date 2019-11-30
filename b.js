function add(x,y){
	return x+y;
}

var sum = add(100,200);

console.log(sum);

// ---------------module.exports 介绍-------------------

// module.exports = 'hello world'

// module.exports = 6666

// module.exports = function(msg){
// 	console.log(msg);
// }
// 

// module.exports.name = '陈锦辉'
// module.exports.age = 18;

// module.exports.show = function (){
// 	console.log(this.name+this.age);
// }



// -------------------exports 介绍----------------
// exports 和 module.exports 指向的是同一个对象，稳点的做法是都使用module.exports
// 最终require() 函数返回的是 module.exports对象中的数据
exports.name = '陈锦辉'
exports.age = 24;

exports.show = function (){
	console.log(this.name+':'+this.age);
}

module.exports = 'hello22'
exports = 'hello'