const userController = require("../Controllers/user-controller");
const bodyValidation = require("../Middlewares/body-middlewares");
const idValidateur = require("../Middlewares/id-middlewares");
const userValidateur=require('../Validateur/user-validateur');

const userRouter=require('express').Router();
const multer=require('multer');
const uuid=require('uuid');
const identificationController = require("../Controllers/identification-controller");

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{cb(null,'putblic/Avatars')},

    filename:(req,file,cb)=>{
        const name=uuid.v4();
        const extension=file.originalname.split('.').at(-1);
        cb(null,name+'.'+extension)
    }
});
const upload=multer({storage});


userRouter.route('/')
    .get(userController.getAll);
    .post(upload.single('avatar'),identificationController.register)
userRouter.route('/:id')
    .get(idValidateur(),userController.getById)
    .put(idValidateur(),bodyValidation(userValidateur),userController.update)
    .delete(idValidateur(),userController.delete)

module.exports=userRouter;