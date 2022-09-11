const { Schema, model } = require("mongoose");

const schemaDefaut=new Schema({
    nom:{type:String,required:true,trim:true},
    image:{type:String},
    information:{type:String,required:true,trim:true},
},{
    collection:'Film',
    timestamps:true
});
const Film=model('Film',schemaDefaut);
module.exports=Film;