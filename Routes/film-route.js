const filmControlleur = require('../Controllers/film-controlle');
const bodyValidation = require('../Middlewares/body-middlewares');
const filmValidateur = require('../Validateur/film-validateur');

const filmRouter=require('express').Router();

filmRouter.route('/')
    .get(filmControlleur.getAll)
    .post(bodyValidation(filmValidateur),filmControlleur.create)
filmRouter.route('/:id')
    .get(filmControlleur.getById)
    .put(bodyValidation(filmValidateur),filmControlleur.update)
    .delete(filmControlleur.delete);

module.exports=filmRouter;