class UserDTO{
    constructor(id,pseudo,prenom,nom,email,password,avatar){
        this.id=id;
        this.pseudo=pseudo;
        this.prenom=prenom;
        this.nom=nom;
        this.email=email;
        this.password=password;
        this.avatar=avatar;
    }
}

module.exports=UserDTO