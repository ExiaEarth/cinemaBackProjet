const yup=require('yup');

const filmValidateur=yup.object({
    nom:yup.string().trim().required().min(1).max(100),
    image:yup.string().trim(),
    information:yup.string().trim().required().min(10).max(250)
});

module.exports =filmValidateur