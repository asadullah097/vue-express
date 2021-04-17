const express=require('express');
const mongodb=require('mongodb');

const router=express.Router();

//Get post
router.get('/',(req,res)=>{
res.send("Hello")
});
//add post

//delete post
module.exports=router;