const yup=require('yup');


const salleValidateur=yup.object( {
    nom:yup.string().trim().required().min(1).max(50),
    place:yup.number().required().positive()
});

module.exports=salleValidateur;