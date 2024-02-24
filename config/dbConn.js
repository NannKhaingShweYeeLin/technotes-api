const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        mongoose.connect(process.env.DATABASE_URI, {
          useNewUrlParser: true,
        })
        console.log(`Database is connected`);
        
      } catch (error) {
        console.log(error);
        throw new Error(error);
      }
    }

    module.exports = connectDB
   