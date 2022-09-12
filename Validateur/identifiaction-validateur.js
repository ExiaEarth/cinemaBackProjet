const yup=require('yup')

const pwdRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W|_]).+$/;
// contient au moins un chiffre, une lettre minuscule, une lettre majuscule et un caractère spécial

const registerValid=yup.object({
    pseudo : yup.string().trim().required().min(3).max(50),
    prenom:yup.string().trim().required().min(2).max(110),
    nom:yup.string().trim().required().min(2).max(100),
    password:yup.string().trim().required().matches(pwdRegex),
    email:yup.string().trim().required().max(255),
});
const logValidator=yup.object({
    identifian : yup.string().trim().required().max(255),
    password : yup.string().required()
});

module.exports={registerValid,logValidator}