const identificationController=require('../Controllers/identification-controller');

const bodyValidation=require('../Middlewares/body-middlewares');

const {registerValid,logValidator}=require('../Validateur/identifiaction-validateur');

const identifianRouter=require('express').Router();
const multer=require('multer');
const uuid=require('uuid');


const storage=multer.diskStorage({
    destination:(req,file,cb)=>{cb(null,'public/Avatars')},

    filename:(req,file,cb)=>{
        const name=uuid.v4();
        const extension=file.originalname.split('.').at(-1);
        cb(null, name +'.'+extension)
    }
});
const upload=multer({storage});


identifianRouter.route('/register')
    .post(/*upload.single('avatar'),*/bodyValidation(registerValid),identificationController.register)


identifianRouter.route('/login')
    .post(bodyValidation(logValidator),identificationController.login)

module.exports=identifianRouter;