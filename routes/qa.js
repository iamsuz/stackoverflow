const express = require('express');
const User = require('../models/User');
const router = express.Router()

router.get('/login',async (req,res,next)=>{
	try{
		res.render('pages/login');
	}catch(err){
		res.status(400).send(error);
	}
})



module.exports = router;
