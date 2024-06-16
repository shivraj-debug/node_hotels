const mongoose=require('mongoose')

//define person schema
const personSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true //without fill name columns from can't be submitted
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'], //it means you can only fill these three work in work in field
        required:true
    },
    mobile:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true //it means you can not fill two form with same email id
    },
    address:{
        type:String
    },
    salary:{
        type:String,
        required:true
    }
    
});

//create person model
const person=mongoose.model('person',personSchema);
module.exports=person;