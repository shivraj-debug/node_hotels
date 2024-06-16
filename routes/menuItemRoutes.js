const express=require("express");
const router=express.Router();

const menuItem=require('./../models/menu');

router.post('/',async function(req,res){
    try{
        const menu=req.body;

        const newMenuItems=new menuItem(menu);

        const response=await newMenuItems.save();
        console.log("menu item save successfull")
        res.status(200).json(response)
    }
    catch(error){
      console.log(error);
      res.status(500).json({error:'internal server error'})

    }
  })

  router.get('/',async function(req,res){
    try{
      const menudata=await menuItem.find();
      console.log('data fetch successfully');
      res.status(200).json(menudata);  
    }
    catch(err){
    console.log(err);
    res.status(500).json({err:'internal server error'})
    }
})

//parametrised for taste
router.get('/:tasteType',async function(req,res){
    try{
      const tasteType=req.params.tasteType;

       if(tasteType=="spicy" || tasteType=="sour" || tasteType=="sweet"){
        const data=await menuItem.find({taste:tasteType});
        console.log('data fetch successfully');
        res.status(200).json(data);  
       }else{
        res.status(404).json({error:"invalid tasteType"});
       }     
    }
    catch(err){
    console.log(err);
    res.status(500).json({err:'internal server error'})
    }
})

module.exports=router