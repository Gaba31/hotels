const express = require('express');
const router = express.Router();
const Person = require('./../models/Person');

router.post('/', async(req,res)=>{
    try{
     const data = req.body;
     
     const newPerson = new Person(data);
     
      const response =  await newPerson.save();
       console.log('data saved');
       res.status(200).json(response);
    }
    catch(err){
         console.log(err);
         res.status(500).json({error:'Internal Sever error'});
         
    }
})

router.get('/',async(req,res)=>{
  try{
    const data = await Person.find();
    console.log('Data received');
    res.status(200).json(data);
    
  }
  catch(err){
    console.log('Error occured',err);
    res.status(500).json({error:'Internal server error'});
  }
})

router.get('/:workType', async (req, res) => {  // Added '/' before ':workType'
    try {
        const work = req.params.workType;
        if (work === 'chef' || work === 'waiter' || work === 'manager') {
            const data = await Person.find({ work: work });  // Corrected 'finc' to 'find'
            console.log('Data received');
            res.status(200).json(data);
        } else {
            console.log("Not Found");
            res.status(404).json({ error: "404 Not Found" });
        }
    } catch (err) {
        console.log('Error occurred', err);
        res.status(500).json({ error: 'Internal server error' });  // Changed to status 500 for server errors
    }
  });


router.put('/:id',async(req,res)=>{
    try{
        const personId = req.params.id;
        const updatedPersonData = req.body;

        const response = await Person.findByIdAndUpdate(personId,updatedPersonData,{
            new : true,
            runValidators:true,
        })
        if(!response){
            res.status(404).json({error:"404 Not Found"});
        }
        console.log('Data Updated');
        res.status(200).json(response); 
    }   
    catch(err){
        console.log(err);
        res.status(500).json({error:'Error occured'});
    }
})  

router.delete('/:id',async(req,res)=>{
    try{
        const personId = req.params.id;

        const response = await Person.findByIdAndDelete(personId);
        if(!response){
            res.status(404).json({error:"404 Not Found"});
        }
        console.log('Data Deleted');
            res.status(200).json(response); 
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Error occured'});
    }
})

module.exports = router;