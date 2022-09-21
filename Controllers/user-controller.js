const UserDTO = require("../Dto/user-dto");
const User = require("../Models/user.model");



const userMapper=user=> new UserDTO(user.id,user.pseudo,user.prenom,user.nom,user.mail,user.password,user.avatar);

const userController={
    getAll:async(req,res)=>{

        const users=await User.find();
        
        const userDTO =users.map(userMapper)
        
        res.status(200).json(userDTO);
    },
    getById:async(req,res)=>{

        const id=req.params.id;

        const user=await User.findById(id);
          
        if (!user) {
            return res.sendStatus(404) // <------ élément pas trouvée lors de la demande
        }

        const userDTO=userMapper(user);

        res.status(200).json(userDTO);
    },
    update:async(req,res)=>{
        const id=req.params.id;

        const {pseudo,prenom,nom,email,}=req.body
        //la fonction qui permet de trouver l'élément via son id et de le modifier
        const userUpdated=await User.findByIdAndUpdate(id,{pseudo,prenom,nom,email},{returnDocument:'after'});

        if (!userUpdated) {
            return res.sendStatus(404) // <------ élément pas trouvée lors de la demande
        }
       // notre userUpdated qui contient password + role 
       // notre  userDTO qui ne les contient pas
        const userDTO=userMapper(userUpdated);

        res.status(200).json(userDTO);
    },
    delete:async(req,res)=>{
        const id = req.params.id;
        const userToDelete=await User.findByIdAndDelete(id);
        if (!userToDelete) {
            return res.sendStatus(404)// <------ élément pas trouvée lors de la demande
        }
        res.sendStatus(204)// tout a fonctionnée
    },
    
}
module.exports=userController;