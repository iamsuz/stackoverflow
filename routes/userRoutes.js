const express = require('express');
const User = require('../models/User');
const auth = require('../middleware/auth');
const router = express.Router()



router.get('/',auth,async (req,res,next)=>{
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
 		const {email,password} = req.body;
 		console.log(email,password);
 		const user = await User.findByCredentials(email,password);
 		console.log(user);
 		if(!user){
 			return res.status(401).send({error: 'Login failed! Check authentication credentials'})
 		}
 		const token = await user.generateAuthToken()
 		res.redirect('/users');
 	}catch(err){
 		console.log(err);
 		res.status(400).send(err);
 	}
 })
router.get('/register',async(req,res,next)=>{
	try{
		res.render('pages/register');
	}catch(err){
		res.status(400).send(error);
	}
})
 router.post('/register',async(req,res,next)=>{
 	try{
 		const user = new User(req.body);
 		await user.save();
 		const token = await user.generateAuthToken();
 		res.status(201).send({user,token})
 	}catch(err){
 		res.status(400).send(err);
 	}
 })

module.exports = router
