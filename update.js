const dbConnect = require('./mongodb')
const updateData = async () => {
  let db = await dbConnect()
  let result = await db.updateOne(
    { name: 'max 3' },
    { $set: { name: 'max pro 3 ' } },
  )
  console.log(result)
}
updateData()
