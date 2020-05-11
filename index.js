const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

console.log(process.env.DB_PASS);
app.use(express.json());

mongoose.connect('mongodb+srv://dbBattleship:'+process.env.DB_PASS+'@battle-tiucm.mongodb.net/test?retryWrites=true&w=majority',{
	useNewUrlParser:true,
	useUnifiedTopology: true,
	useCreateIndex:true
})
app.use('/users',userRoutes);

app.listen(3000,()=> console.log('Server up and running'));
