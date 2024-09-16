const express = require('express');
const router = express.Router();
const Menu = require('./../models/Menu');

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        
        const newMenu = new Menu(data);  // <-- Corrected to use Menu model
        
        const response = await newMenu.save();
        console.log('data saved');
        res.status(200).json(response);
    } catch (err) {
        console.log('Error occurred', err);
        res.status(500).json({ error: 'Internal server error' });  // Changed to status 500 for server errors
    }
  });
  
  router.get('/',async(req,res)=>{
    try{
        const data = await Menu.find();
        console.log('Data received');
        res.status(200).json(data);
        
    }
    catch(err){
      console.log('Error occured',err);
        res.status(500).json({error:'Internal server error'});
    }
  })
  

router.get('/:taste',async(req,res)=>{
   try{
    const taste = req.params.taste;
    if(taste === 'spicy' || taste ==='sweet' || taste==='sour'){
        const data = await Menu.find({taste:taste});
        console.log('Data fetched');
        res.status(200).json(data);
    }
    else{
        console.log('Not Found');
        res.status(404).json({error:'404 Not Found'});
    }
   }
   catch(err){
        console.log('error Occured',error);
        res.status(500).json({error:'Internal Server Error'});
   }
})

  module.exports = router;