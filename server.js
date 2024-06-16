const express = require('express') //we import express and saying we need express
const app = express(); //we add all data in app
const db=require('./db');
require('dotenv').config();

const bodyParser=require('body-parser');
app.use(bodyParser.json()); //it store data in request body
const PORT=process.env.PORT;

app.get('/', function (req, res) {
  res.send('Hello my darling')
})

//import the router the files
const personRoutes=require('./routes/personRoutes');
const menuItemRoutes=require('./routes/menuItemRoutes');


//use the routers
app.use('/person',personRoutes);
app.use('/menu',menuItemRoutes);

app.listen(PORT,()=>{
  console.log("listening on port 3000")
})// here 3000 is port number where we will get a server 
