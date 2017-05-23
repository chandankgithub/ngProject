export class User{
    constructor(){

    }
    public id:number;
    public name:string;
    public email: string="";
    public phone: string;
    public address=new UserAddress()
}

export class UserAddress{
     constructor(){
        
    }
    street: string;
    suite: string;
    city: string;
    zipcode: string;
}