const yup=require('yup');
const salleValidateur=yup.object( {
    nom:yup.string().trim().required().min(1).max(50),
    place:yup.number().required().positive(),
    image:yup.string().trim(),
    information:yup.string().trim().required().min(10).max(250)

});

module.exports=salleValidateur;