const express = require('express');
const User = require('../models/User');
const router = express.Router()

router.get('/',async (req,res,next)=>{
	try{
		console.log('Inside');
		console.log(new User);
		res.json(new User);
	}catch(err){
		console.log(res);
	}
})


module.exports = router
