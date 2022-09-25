const Film=require('../Models/film-model')

const filmControlleur={
    // Vas rechercher tout les films de la Bd
    getAll:async(req,res)=>{
        const films=await Film.find();
        res.status(200).json(films)
    },
    // Vas rechercher tout un films de la Bd par sont Id
    getById:async(req,res)=>{
        const id=req.params.id;
        const film=await Film.findById(id);
        if (film) {
            res.status(200).json(film);
        } else {
            return res.sendStatus(404);
        }
    },
    // Vas crée un films de la Bd
    creat:async(req,res)=>{
        const filmAdd=Film(req.body);
        await filmAdd.save();
        res.status(200).json(filmAdd);
    },
    // Vas mettre a jour un film de la Bd par son Id
    update:async(req,res)=>{
        const id=req.params.id;
        const {nom,images,information}=req.body;
        const film=await Film.findByIdAndUpdate(id,{nom,images,information},{returnDocument:'after'});
        if (film) {
            res.status(200).json(film)
        } else {
            return res.sendStatus(404);
        }
    },
    // Vas supprimée un films de la Bd par son Id
    delete:async(req,res)=>{
        const id=req.query.id;
        const filmDelete=await Film.findByIdAndDelete(id);
        if (filmDelete) {
            res.sendStatus(204)
        } else {
            return res.sendStatus(404)
        }
    },
}
module.exports=filmControlleur;