import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://khanhbinh1186:khanhbinh1186@shop.ewrj9yl.mongodb.net/shop?retryWrites=true&w=majority', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })

    console.log(`MongoDB Connected`)
  } catch (error) {
    console.error(`Error: ${error.message}`)

  }
}

export default connectDB
