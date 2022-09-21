const { Schema, model } = require("mongoose");

const schemaDefaut=new Schema({
    nom:{type:String,},
    place:{type:Number,reuired:true},
    image:{type:String},
    information:{type:String,required:true,trim:true}
},{
    collection:'Salle',
    timestamps:true
});
const Salle=model('Salla',schemaDefaut);
module.exports=Salle;