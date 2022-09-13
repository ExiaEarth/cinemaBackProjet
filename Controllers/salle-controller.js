
const Salle=require('../Models/salle-model');

const salleController={
    getAll:async(req,res)=>{
        const mininum=req.query.mininum?req.query.mininum:0;
        const maximal=req.query.maximal?req.query.maximal:10;

        const salle=await Salle.find().limit(maximal).skip(mininum);

        const data={'Salle':salle}

        res.status(200).json(data)
    },
    gelById:async(req,res)=>{
        const id=req.params.id;

        const salle=await Salle.findById(id);

        if (salle) {
            res.status(200).json(salle)
        } else {
            return res.sendStatus(404)
        }
    },
    creat:async(req,res)=>{
        const salleAdd=Salle(req.body);
        await salleAdd.save();
        res.status(200).json(salleAdd);
    },
    update:async(req,res)=>{
        const id=req.params.id;
        const{nom,place}=req.body;
        const salle=await Salle.findByIdAndUpdate(id, {nom,place},{returnDocument:'after'});
        if (salle) {
            res.status(200).json(salle);
        } else {
            return res.sendStatus(404);
        }
    },
    delete:async(req,res)=>{
        const id=req.params.id;
        const salleDelete=await Salle.findByIdAndDelete(id);
        if (salleDelete) {
            res.sendStatus(204)
        } else {
            res.sendStatus(404);
        }
    }
}

module.exports=salleController;