const express = require('express')
const dbConnect = require('../mongodb')
const app = express()

app.get('/', async (req, resp) => {
  const db = await dbConnect()
  const data = await db.find().toArray()
  console.log(data)
  resp.send(data)
})
app.listen(3000)
