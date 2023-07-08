const mongoose = require('mongoose')
const  MONGODB_URL  ="mongodb://localhost:27017/newdatadb";

const dbConnect  = async (options = {}) =>{
    if(mongoose.connection.readyState >= 1){    
        console.log("database connected")
        return;
    }

    try {
        const { connection } = mongoose.connect(MONGODB_URL, options)
        console.log("database connected successfully")

        mongoose.connection.on('error', (error)=>{
            console.error("DB Connection Error", error)
        })
    } catch (error) {
        console.error("DB Connection Error:: Can not connect database", error.toString())
        Promise.reject(error);
    }
}

module.exports = dbConnect

