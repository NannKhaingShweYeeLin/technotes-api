const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        mongoose.connect("mongodb://127.0.0.1:27017/CompanyDB" , {
          useNewUrlParser: true,
        })
        console.log(`Database is connected`);
        
      } catch (error) {
        console.log(error);
        throw new Error(error);
      }
    }

    module.exports = connectDB
   