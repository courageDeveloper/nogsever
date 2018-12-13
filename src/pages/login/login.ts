import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user: any;
  username;
  users: {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.user = [{ name: "Godspower Idhude", username: "idhude", sex: "Male", email: "lawal@gmail.com", address: "No 8, east circular road, benin city", position: "Operations Surpevisor", mobile: "08023467585", department: "Operations" }, { name: "Amaka", username: "amaka", sex: "Female", email: "amaka@gmail.com", address: "No 8, east circular road, benin city", position: "Operator", mobile: "08023467585", department: "Operations" },
    { name: "Siloko Akpobor", username: "siloko", email: "kate@gmail.com", sex: "Male", address: "No 18, siluko road, benin city", position: "Instrument Surpevisor", mobile: "08023467566", department: "Instruments" }, { name: "Bright Okunbor", username: "bright", email: "bright@gmail.com", sex: "Male", address: "No 7, Ihama road, benin city", position: "Electrical Surpevisor", mobile: "08023467455", department: "Electrical" },
    { name: "Osazee Emumwen", username: "da", email: "da@gmail.com", address: "No 7, sapele road, benin city", position: "Manager", mobile: "08023467545", department: "HSE" }
    ]
  }

  login() {
    for (var i = 0; i < this.user.length; i++) {
      if (this.user[i].username == this.username && this.user[i].position == "Manager") {
        this.navCtrl.setRoot('HomePage');
        localStorage.setItem('user',JSON.stringify(this.user[i]));
      }
      else if (this.user[i].username == this.username && this.user[i].position == "Operations Surpevisor") {
        this.navCtrl.setRoot('SupervisorhomePage');
        localStorage.setItem('user',JSON.stringify(this.user[i]));
      }
      else if (this.user[i].username == this.username && this.user[i].position == "Operator") {
        this.navCtrl.setRoot('OperatorhomePage');
        localStorage.setItem('user',JSON.stringify(this.user[i]));
      }
    }
  }

}
