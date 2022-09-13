const salleController = require('../Controllers/salle-controller');
const bodyValidation = require('../Middlewares/body-middlewares');
const salleValidateur = require('../Validateur/salle.validateur');

const salleRouter=require('express').Router();




salleRouter.route('/')
    .get(salleController.getAll)
    .post(bodyValidation(salleValidateur),salleController.creat)


salleRouter.route('/:id')
    .get(salleController.gelById)
    .put(bodyValidation(salleValidateur),salleController.update)
    .delete(salleController.delete)

module.exports=salleRouter;