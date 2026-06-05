// 导入 fs
const fs = require('fs')
const path = require('path')

// 写入文件
// fs.writeFileSync(_dirname + '/index.html', 'love')
// console.log(__dirname + '/index.html')

// resolve 解决(拼接规范的绝对路径-常用)
console.log(path.resolve(__dirname, './index.html'))
console.log(path.resolve(__dirname, 'index.html'))
console.log(path.resolve(__dirname, '/index.html'))

// sep 分隔符(获取操作系统的路径分隔符)
// console.log(path.sep)  //windows:\ linux:/

//paese 方法 __dirname '全局变量'
// console.log(__filename); //文件的绝对路径
// let str = 'D:/code/nodejs/Day01/index.html'
// console.log(path.parse(str))

// basename 方法 获取文件名
// console.log(path.basename(str))

// dirname 方法 获取文件夹名
// console.log(path.dirname(str))

// extname 方法 获取文件扩展名
// console.log(path.extname(str))
