// 需求：
// 新建一个文件，座右铭.txt，写入内容，三人行必有我师焉

// 1.导入fs模块
const fs = require('fs')
// 2.写入文件
// fs.writeFile('./座右铭.txt', '三人行必有我师焉', (err) => {
//   // err 写入失败：错误对象；写入成功：null
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('写入成功')
//   }
// })

// 读取文件
// fs.readFile('./座右铭.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })
