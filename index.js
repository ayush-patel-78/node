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

// const fs = require('fs')
// const path = require('path')
// const dirPath = path.join(__dirname, 'crud')
// const filePath = `${dirPath}/apple.txt`

// creating a file

// fs.writeFileSync(filePath, 'This is a simple text file')

// reading a file

// fs.readFile(filePath, 'utf8', (err, item) => {
//   console.log(item)
// })

// updating a file

// fs.appendFile(filePath, " and it's name is apple.txt", (err) => {
//   if (!err) console.log('file is updated')
// })

// renaming a file

// fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
//   if (!err) console.log('file name is updated')
// })

// deleting a file

// fs.unlinkSync(`${dirPath}/fruit.txt`)

// express js introduction

// const express = require('express')
// const app = express()
// app.get('', (req, res) => {
//   console.log(req.query.name)
//   res.send('Hello, this is home page ')
// })
// app.get('/about', (req, res) => {
//   res.send(
//     `<input type="text" placeholder="user name" value="${req.query.name}"/>`,
//   )
// })
// app.get('/help', (req, res) => {
//   res.send('Hello , this is help page')
// })
// app.listen(3000)

// accessing HTML files using express js

// const express = require('express')
// const app = express()
// const path = require('path')

// const publicPath = path.join(__dirname, 'public')
// app.use(express.static(publicPath))

// app.set('view engine', 'ejs')

// app.get('/', (req, resp) => {
//   resp.sendFile(`${publicPath}/index.html`)
// })

// app.get('/about', (req, resp) => {
//   resp.sendFile(`${publicPath}/about.html`)
// })

// app.get('/help', (req, resp) => {
//   resp.sendFile(`${publicPath}/help.html`)
// })

// app.get('/profile', (req, resp) => {
//   const user = {
//     name: 'Ayush patel',
//     email: 'ayush@gmail.com',
//     city: 'jabalpur',
//     skills: [
//       'C/C++',
//       'Python',
//       'Java SE',
//       'Java EE',
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'JQuery',
//       'AJAX',
//       'Bootstrap',
//     ],
//   }
//   resp.render('profile', { user })
// })
// app.get('/login', (req, resp) => {
//   resp.render('login')
// })
// app.get('*', (req, resp) => {
//   resp.sendFile(`${publicPath}/nopagefound.html`)
// })

// app.listen(3000)

// Application level middleware

// const express = require('express')

// const app = express()
// const path = require('path')

// const publicPath = path.join(__dirname, 'public')

// const reqFilter = (req, resp, next) => {
//   if (!req.query.age) {
//     resp.send('Please provide age')
//   } else if (req.query.age < 18) {
//     resp.send('You cannot access this page')
//   } else {
//     next()
//   }
// }
// app.use(reqFilter)

// app.get('/', (req, resp) => {
//   resp.sendFile(`${publicPath}/index.html`)
// })

// app.get('/about', (req, resp) => {
//   resp.sendFile(`${publicPath}/about.html`)
// })
// app.listen(3000)

// Route level MiddleWare

// const express = require('express')

// const app = express()
// const path = require('path')

// const publicPath = path.join(__dirname, 'public')
// const reqFilter = require('./middleware.js')
// const route = express.Router()

// // app.use(reqFilter)
// route.use(reqFilter)

// app.get('/', (req, resp) => {
//   resp.sendFile(`${publicPath}/index.html`)
// })

// app.get('/about', reqFilter, (req, resp) => {
//   resp.sendFile(`${publicPath}/about.html`)
// })

// route.get('/contact', (req, resp) => {
//   resp.sendFile(`${publicPath}/contact.html`)
// })
// app.use('/', route)

// app.listen(3000)

// connecting mongodb from nodejs

// const { MongoClient } = require('mongodb')
// const url = 'mongodb://localhost:27017'
// const database = 'e-comm'
// const client = new MongoClient(url)

// async function dbConnect() {
//   let result = await client.connect()
//   let db = result.db(database)
//   let collection = db.collection('products')
//   // let response = await collection.find({}).toArray()
//   // console.log(response)
// }
// dbConnect()

//reading data from mongo db using promise

const dbConnect = require('./mongodb')
dbConnect().then((resp) => {
  resp
    .find()
    .toArray()
    .then((data) => {
      console.log(data)
    })
})

//reading data from mongodb using async await

// const dbConnect = require('./mongodb')-
async function main() {
  let data = await dbConnect()
  data = await data.find().toArray()
  console.log(data)
}
main()
