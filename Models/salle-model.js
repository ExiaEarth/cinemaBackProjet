const { Schema, model } = require("mongoose");

const schemaDefaut=new Schema({
    nom:{type:String,},
    place:{type:Number,reuired:true}
},{
    collection:'Salle',
    timestamps:true
});
const Salle=model('Salla',schemaDefaut);
module.exports=Salle;