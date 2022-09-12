const identifianRouter = require('./identification-route');


const router=require('express').Router();


router.use('auth',identifianRouter)


module.exports=router;