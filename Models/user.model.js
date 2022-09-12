const { Schema } = require("mongoose");


const schemaDefaut=new Schema({
    pseudo:{type:String,required:true,unique:true,trim:true},
    prenom:{type:String,required:true,trim:true},
    nom:{type:String,required:true,trim:true},
    password:{type:String,required:true},
    email:{type:String,required:true,unique:true,trim:true},
    role:{type:String,required:true,default:'User',Enum:['User','Admin']}
},{
    collection:'User',
    timestamps:true
});
const User=model('User',schemaDefaut);
module.exports=User;