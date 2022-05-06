const mongoose = require('mongoose')
require('dotenv').config()

const configureDB = () => {
    mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>{
        console.log('Connected to DB')
    })
    .catch((err)=>{
        console.log('Error connecting', err)
    })
}

module.exports = configureDB