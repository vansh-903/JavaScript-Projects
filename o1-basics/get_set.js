class User{
    constructor(email,password){
        this.email = email;
        this.password = password
    }

    get password(){
        return this.password.toUpperCase();
    }

    set password(value){
        this.password = value;
    }
}

const user1 = new User('user1@gmail.com','aos')
console.log(user1);
