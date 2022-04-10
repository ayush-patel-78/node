const dbConnect = require('./mongodb')

let deletedata = async () => {
  let db = await dbConnect()
  let result = await db.deleteMany({ name: 'max 3' })
  console.log(result)
  if (result.acknowledged) {
    console.log('data deleted')
  }
}
deletedata()
