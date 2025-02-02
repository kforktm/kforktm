const mongoose = require('mongoose')

const connectionpOptions = {
    dbName: process.env.DB_NAME
  }

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,connectionpOptions)
        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline)
    } catch (error){
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB