import mongoose from 'mongoose'

const connectDb = handler => async (req, res) => {
  if (mongoose.connections[0].ready !== 1) {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  }
  return handler(req, res)
}

const db = mongoose.connection
db.once('open', () => {
  console.log('Connected to mongo')
})

export default connectDb
