const userController = require("../Controllers/user-controller");
const bodyValidation = require("../Middlewares/body-middlewares");
const idValidateur = require("../Middlewares/id-middlewares");
const userValidateur=require('../Validateur/user-validateur');

const userRouter=require('express').Router();


userRouter.route('/')
    .get(userController.getAll)
userRouter.route('/:id')
    .get(idValidateur(),userController.getById)
    .put(idValidateur(),bodyValidation(userValidateur),userController.update)
    .delete(idValidateur(),userController.delete)

module.exports=userRouter;