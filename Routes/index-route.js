const identifianRouter = require('./identification-route');
const salleRouter = require('./salle-route');
const userRouter=require('./user-route');


const router=require('express').Router();


router.use('/auth',identifianRouter)
router.use('/user',userRouter)
router.use('/salle',salleRouter)

module.exports=router;