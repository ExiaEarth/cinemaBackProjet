class UserDTO{
    constructor(id,pseudo,prenom,nom,email,password,avatar,role){
        this.id=id;
        this.pseudo=pseudo;
        this.prenom=prenom;
        this.nom=nom;
        this.email=email;
        this.password=password;
        this.avatar=avatar;
        this.role=role;
    }
}

module.exports=UserDTO