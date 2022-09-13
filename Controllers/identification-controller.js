const User=require('../Models/user.model');
//ici placer token
const argon2=require('argon2');

const identificationController={
    login: async(req,res) => {
    //Pour se loger un identifiant et un mdp 

    const {identifiant,password}=req.body
    //req.body va contenir un objet qui ressemble à ceci :
        // {
        //  "identifiant" : "monIdentifiant"; 
        //  "password" : "monPassword"
        // }
        const identifiantFilter={$or :[{email:identifiant},{pseudo:identifiant}]}

        const user = await User.findOne(identifiantFilter);//vérifie si on a récupérer un utilisateur

        if (!user) {return res.status(401).json({error:'bad credential'}) //401 -> Unauthorized -> Pas les bonnes infos de login
        }
        const verifierPassword=await argon2.verify(user.password,password)

        if (!verifierPassword){return res.status(401).json({error:'non autorisée'}) //401 -> Unauthorized -> Pas les bonnes infos de login
        }

        // const token=await tokenUtils.generate(user);
        // return res.status(200).json({token});
        res.status(200).json(user)

    },
    register:async(req,res)=>{ 
        
        const {pseudo,prenom, nom,email,password,}=req.body;
        
        const hashPasword=await argon2.hash(password);
        // un nouvel utilisateur à partir des infos sur req.body

        const insertUser=User({pseudo, prenom,nom,email,password:hashPasword,});
        await insertUser.save();
        
        // const token=await tokenUtils.generate(insertUser);
        // res.status(200).json({token});
        res.status(200).json(User)


    }
};

module.exports=identificationController;