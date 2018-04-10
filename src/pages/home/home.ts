import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from "../../services/user";
import { WelcomePage } from '../welcome/welcome';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public user:any ={
    username:'',
    password:'',
    name:'',
    email:''
  }

  constructor(public navCtrl: NavController, public userSrv:UserService) {
    this.userSrv.name="";
    this.userSrv.email="";

  }
  saveUser():void{
    if (this.user.username==='admin' && this.user.password==='admin') {
      console.log("todo bien");
      this.userSrv.email=this.user.email;
      this.userSrv.name=this.user.name;
      this.navCtrl.push(WelcomePage);
    }
    else{
      console.log("Algo va mal");
    }
  }

}
