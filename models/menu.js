const mongoose=require('mongoose')

//define person schema
const menuItemSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true //without fill name columns from can't be submitted
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        enum:['sweet','spicy','sour'], //it means you can only fill these three work in work in field
        required:true
    },
    is_drink:{
        type:Boolean,
        default:false,
    },
    ingredients:{
        type:[String],
        defaut:[],
    },
    nums_Sales:{
        type:Number,
        default:0
    }
    
});

//create menuItems model
const menuItem=mongoose.model('menuItem',menuItemSchema);
module.exports=menuItem;