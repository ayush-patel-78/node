const express = require('express')
const dbConnect = require('../mongodb')
const app = express()

app.use(express.json())

// GET Api method

app.get('/', async (req, resp) => {
  const db = await dbConnect()
  const data = await db.find().toArray()
  console.log(data)
  resp.send(data)
})

// POST API method

app.post('/', async (req, resp) => {
  console.log(req.body)
  const db = dbConnect()
  const data = await db.insertMany(req.body)
  resp.send(data)
})

//PUT API method

app.put('/', async (req, resp) => {
  const db = await dbConnect()
  const data = await (await db).updateOne({ name: 'max 3' }, { $set: req.body })
  resp.send('result updated:' + data)
})
app.listen(3000)
