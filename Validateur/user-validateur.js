const yup=require('yup');
const userValidateur=yup.object({
    pseudo : yup.string().trim().required().min(3).max(50),
    prenom:yup.string().trim().required().min(2).max(110),
    nom:yup.string().trim().required().min(2).max(100),
    email:yup.string().trim().required().max(255),

});

module.exports=userValidateur;