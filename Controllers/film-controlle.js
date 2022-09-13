const Film=require('../Models/film-model')

const filmControlleur={
    getAll:async(req,res)=>{
        // let filmFiltre;
        // const film=req.query.film;
        // if (film) {
        //     filmFiltre={'film':film}
        // } else {
        //     film={};
        // }

        // const minimun=req.query.minimun?req.query.minimun:0;
        // const maximal=req.query.maximal?req.query.maximal:10;
        // const films=await Film.find(filmFiltre).limit(maximal).skip(minimun)
        // const data={'film':films}
        // res.status(200).json(data);

        const films=await Film.find();
        res.status(200).json(films)
    },
    getById:async(req,res)=>{
        const id=req.params.id;
        const film=await Film.findById(id);
        if (film) {
            res.status(200).json(film);
        } else {
            return res.sendStatus(404);
        }
    },
    creat:async(req,res)=>{
        const filmAdd=Film(req.body);
        await filmAdd.save();
        res.status(200).json(filmAdd);
    },
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