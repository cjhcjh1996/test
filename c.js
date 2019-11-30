var path = require('path')

var dir = path.join(__dirname,'public');

var dir2 = path.join(dir,'index.html')

var dir3 = path.join(path.join(__dirname,'public'),'404.html')
console.log(dir);
console.log(dir2)
console.log(dir3)