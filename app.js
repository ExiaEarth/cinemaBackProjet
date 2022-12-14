require('dotenv-flow').config();
const express=require('express');
const cors=require('cors');
const{DB_CONNECTION,PORT}=process.env;

require('express-async-errors');
const mongoose=require('mongoose');
const app=express();
app.use(express.json())
app.use(cors());
app.use(express.static('public'));
const router=require('./Routes/index-route');

app.use(async(req,res,next)=>{await mongoose.connect(DB_CONNECTION)
    console.log('connection réussie !!!!!!')
    next();
});
app.use('/api',router);
app.listen(PORT,()=>{console.log(`Le serveur est sur le port: ${PORT}`);}
    );