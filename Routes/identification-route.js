const identificationController=require('../Controllers/identification-controller');

const bodyValidation=require('../Middlewares/body-middlewares');

const {registerValid,logValidator}=require('../Validateur/identifiaction-validateur');

const identifianRouter=require('express').Router();

identifianRouter.route('/register').post(bodyValidation(registerValid),identificationController.register)

identifianRouter.route('/login').post(bodyValidation(logValidator),identificationController.login)

module.exports=identifianRouter;