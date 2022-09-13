const filmControlleur = require('../Controllers/film-controlle');
const bodyValidation = require('../Middlewares/body-middlewares');
const idValidateur = require('../Middlewares/id-middlewares');
const filmValidateur = require('../Validateur/film-validateur');

const filmRouter=require('express').Router();



filmRouter.route('/')
    .get(filmControlleur.getAll)
    .post(bodyValidation(filmValidateur),filmControlleur.creat)
filmRouter.route('/:id')
    .get(idValidateur(),filmControlleur.getById)
    .put(idValidateur(),bodyValidation(filmValidateur),filmControlleur.update)
    .delete(idValidateur(),filmControlleur.delete);

module.exports=filmRouter;