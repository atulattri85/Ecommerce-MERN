const mongoose = require("mongoose");

const connectDatabase =()=>{
    mongoose.connect(process.env.DB_URI,{ useNewUrlParser: true, useUnifiedTopology: true }).then((data)=>{
        console.log(`Mongodb connected with server :${data.connection.host}`);
    })
    console.log("kkk");
}

module.exports = connectDatabase

//, {useNewUrlParser:true , useUnifiedTopoLogy:true }