const express = require('express');
const router =  express.Router();
const User  = require("../models/User")
const {body, validationResult} = require('express-validator');

router.post("/creatuser",
[
  body('email').isEmail(),
  body('name').isLength({min:5}),
  body('password','Not valid password').isLength({min:5})
]
,async (req,res)=>{

  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({errors : errors.array() }); 
  }

  try {
   await User.create({
        name:req.body.name,
        password:req.body.password,
        email:req.body.email,
        location:req.body.location
    })
    res.json({success:true});
  } catch (error) {
    console.log(error);
    res.json({success:false});

  }
})

router.post('/loginuser',
[
  body('email').isEmail(),
  body('password','Not valid password').isLength({min:5})
]
,async (req,res)=>{

  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({errors : errors.array() }); 
  }

 let email = req.body.email;
  try {
    let userData = await User.findOne({email});
    if(!userData){
      return res.status(400).json({errors:"Try logging with right credentials"});
    }
 
    if(req.body.password !== userData.password){
      // console.log(req.body.password +" "+userData.password);
      return res.status(400).json({errors:"Try logging1 with right credentials"});
    }
  
    return res.json({success:true});

  } catch (error) {
    console.log(error);
    res.json({success:false});
  }
})

module.exports = router;