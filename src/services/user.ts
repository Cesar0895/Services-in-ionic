import { Injectable } from "@angular/core";

@Injectable()

export class UserService{
    private _email:string;
    private _name:string;

    /**
     *
     */
    constructor() {
               
    }

    
    set name(newVal:string) {
        this._name=newVal;
    }

    get name() : string {
        return this._name;
    }
    
    set email(newVal : string) {
        this._email = newVal;
    }

    get email() : string {
        return this._email;
    }

    
   


    
    


    
}