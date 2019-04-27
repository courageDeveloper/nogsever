import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PouchService } from '../../pouch-service/pouch.service';

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
  password: string;
  error = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: PouchService) {
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
    this.error = "";
    //Get Staffs
    this.db.getSupervisors().then(user => {
      var found = false;
      
      for (var i = 0; i < user.length; i++) {
        if (user[i].username == this.username && user[i].password == this.password && user[i].post == "Manager") {
          found = true;
          this.navCtrl.setRoot('HomePage');
          localStorage.setItem('user', JSON.stringify(user[i].id));
        }
        else if (user[i].username == this.username && user[i].password == this.password && user[i].post == "Supervisor") {
          found = true;
          this.navCtrl.setRoot('SupervisorhomePage');
          localStorage.setItem('user', JSON.stringify(user[i].id));
        }
        else if (user[i].username == this.username && user[i].password == this.password && user[i].post == "Operator") {
          found = true;
          this.navCtrl.setRoot('OperatorhomePage');
          localStorage.setItem('user', JSON.stringify(user[i].id));
        }
        else if (user[i].username == this.username && user[i].password == this.password && user[i].post == "Admin") {
          found = true;
          this.navCtrl.setRoot('AdminHomePage');
          localStorage.setItem('user', JSON.stringify(user[i].id));
        }
      }
      if (found == false) {
        this.error = "Username or Password is not correct, click forgot password for account recovery";
      }
    });
  }

}
