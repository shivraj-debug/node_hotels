const mongoose=require("mongoose")

//deine mongodb connection URL
const mongoURL='mongodb://localhost:27017/hotels'

//set up mongodb connection
mongoose.connect(mongoURL,{
    useNewUrlParser:true, //it ensure we are using update version of mongodb
    useUnifiedTopology:true
})

//get the default connection
//mongoose maintain a default connection object representing the mongodb connection
const db=mongoose.connection;

//define event listener for database connection
db.on('connected',()=>{
    console.log('connected to mongodb server')
})

db.on('error',(err)=>{
    console.log('mongodb connection error',err)
})

db.on('disconnected',()=>{
    console.log('mongodb disconnected')
})

//export the database connection
module.exports=db
