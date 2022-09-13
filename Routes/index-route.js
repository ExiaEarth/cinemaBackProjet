const filmRouter = require('./film-route');
const identifianRouter = require('./identification-route');
const salleRouter = require('./salle-route');
const userRouter=require('./user-route');


const router=require('express').Router();


router.use('/auth',identifianRouter);
router.use('/user',userRouter);
router.use('/salle',salleRouter);
router.use('/film',filmRouter);

module.exports=router;