const salleController = require('../Controllers/salle-controller');
const bodyValidation = require('../Middlewares/body-middlewares');
const idValidateur = require('../Middlewares/id-middlewares');
const salleValidateur = require('../Validateur/salle.validateur');

const salleRouter=require('express').Router();




salleRouter.route('/')
    .get(salleController.getAll)
    .post(bodyValidation(salleValidateur),salleController.creat)


salleRouter.route('/:id')
    .get(idValidateur(),salleController.getById)
    .put(idValidateur(),bodyValidation(salleValidateur),salleController.update)
    .delete(idValidateur(),salleController.delete)

module.exports=salleRouter;