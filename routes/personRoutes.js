const express=require("express");
const router=express.Router();

const person=require('./../models/person');

//post route to add a person
router.post('/', async function(req,res){
    try{
          const data=req.body //assuming that request body contain the person data

          //create a new person document using mongoose model
           const newPerson= new person(data);

          //save a newperson to database
          const response =await newPerson.save();
          console.log('data save successfully');
          res.status(200).json(response);  
    }
    catch(error){
      console.log(error);
      res.status(500).json({error:'internal server error'});
    }               
  })

  router.get('/',async function(req,res){
    try{
      const data=await person.find();
      console.log('data fetch successfully');
      res.status(200).json(data);  
    }
    catch(err){
    console.log(err);
    res.status(500).json({err:'internal server error'})
    }
})

router.get('/person/:workType',async function(req,res){
    try{
    const workType=req.params.workType; //extract the work type from the url parameter
    if(workType=="chef" || workType=="manager" || workType=="waiter"){
      const response=await person.find({work:workType})
      console.log('response fetched');
      res.status(200).json(response);
      }else{
        res.status(404).json({error:"invalid worktype"})
      }
    }
    catch(err){
      console.log(err);
      res.status(500).json({err:'internal server error'})
    }
})


//for update
router.put('/:id',async function(req,res){
    try{
    const personId=req.params.id; //extract id from the url parameter
    const updatedPersonData=req.body; // updated data for person

    const response=await person.findByIdAndUpdate(personId,updatedPersonData,{
        new:true, //return the updated document
        runValidators:true //run mongoose validation
    })

    if(!response){
        return res.status(404).json({error:"person not found"});
    }

    console.log("data updated");
    res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({err:"internal server error"})
    }

})

//for delete
router.delete('/:id', async function(req,res){
    try{
        const personId=req.params.id;
        const response=await person.findByIdAndDelete(personId);

        if(!response){
            return res.status(404).json({error:"person not found"});
        }
    
        console.log("data deleted successfull");
        res.status(200).json({message:"delete data succesfull"});

    }catch(err){
        console.log(err);
        res.status(500).json({err:"internal server error"})
    }
})

//comment added
module.exports=router