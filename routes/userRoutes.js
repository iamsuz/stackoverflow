const express = require('express');
const User = require('../models/User');
const router = express.Router()

router.get('/',async (req,res,next)=>{
	try{
		res.render('pages/index');
	}catch(err){
		console.log(res);
	}
});
 router.get('/login',async(req,res,next)=>{
 	try{
 		res.render('pages/login');
 	}catch(err){
 		res.status(400).send(error);
 	}
 });
 router.post('/login',async(req,res,next)=>{
 	try{
 		console.log(req.body);
 	}catch(err){
 		res.json({err});
 	}
 })


module.exports = router
