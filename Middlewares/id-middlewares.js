const mongoose=require('mongoose');

const idValidateur=()=>{
    return(req,res,next)=>{
        const id=req.params.id;

        if (!mongoose.isValidObjectId(id)) {
            res.sendStatus(400)
            console.log('L Id na pas pu étre trouvée vérifier le coordonée rentrée')
            return;
        }
        next()
    }
}

module.exports=idValidateur;