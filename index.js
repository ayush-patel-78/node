// var x = 10
// var y = 20
// var z = 30
// console.log(x + y + z)

// core modules

// const fs = require('fs')
// fs.writeFileSync('Hello.txt', 'Huehue')
// console.log(__dirname)
// console.log(__filename)

// creating basic server

// const http = require('http')
// http
//   .createServer((req, resp) => {
//     resp.write('<h1>HueHueHue</h1><p>HeHeHe</p>')
//     resp.end
//   })
//   .listen(2003)

//Try nodemon
// console.log('Huehueheu')
// console.log('fuckoff')

// const http = require('http')
// const data = require('./data')
// http
//   .createServer((req, resp) => {
//     resp.writeHead(200, { 'content-type': 'application/json' })
//     resp.write(JSON.stringify(data))
//     resp.end
//   })
//   .listen(3000)

// file system

// const fs = require('fs')
// const input = process.argv

// if (input[2] == 'add') {
//   fs.writeFileSync(input[3], input[4])
// } else if (input[2] == 'remove') {
//   fs.unlinkSync(input[3])
// } else {
//   console.log('invalid input')
// }

// const fs = require('fs')
// const path = require('path')
// const dirPath = path.join(__dirname, 'files')
// for (i = 0; i < 5; i++) {
//   fs.writeFileSync(`${dirPath}/hello${i}.txt`, `this is simple text file`)
// }

// fs.readdir(dirPath, (err, files) => {
//   files.forEach((items) => {
//     console.log(`file name is ${items}`)
//   })
// })

//  CRUD operation in file system

const fs = require('fs')
const path = require('path')
const dirPath = path.join(__dirname, 'crud')
const filePath = `${dirPath}/apple.txt`
fs.writeFileSync(filePath, 'This is a simple text file')
