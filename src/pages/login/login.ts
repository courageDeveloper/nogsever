import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
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
  pullState: any;
  finishSync: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: PouchService, public load: LoadingController) {
    this.user = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');

  }

  ionViewDidEnter() {
    //this.db.checkRemoteSync();
  }

  login() {

    this.error = "";
    this.db.getEquipmentcats().then(equipments => {

    })
    //Get Staffs
    this.db.getSupervisors().then(user => {

      var found = false;

      for (var i = 0; i < user.length; i++) {

        if (user[i].username == this.username && user[i].password == this.password && user[i].post == "Manager") {
          found = true;
          localStorage.setItem('user', JSON.stringify(user[i].id));
          this.navCtrl.setRoot('HomePage');
        }
        else if (user[i].username == this.username && user[i].password == this.password && user[i].post == "Supervisor") {
          found = true;
          localStorage.setItem('user', JSON.stringify(user[i].id));
          this.navCtrl.setRoot('SupervisorhomePage');
        }
        else if (user[i].username == this.username && user[i].password == this.password && user[i].post == "Operator") {
          found = true;
          localStorage.setItem('user', JSON.stringify(user[i].id));
          this.navCtrl.setRoot('OperatorhomePage');
        }
        else if (user[i].username == this.username && user[i].password == this.password && user[i].post == "Admin") {
          found = true;
          localStorage.setItem('user', JSON.stringify(user[i].id));
          this.navCtrl.setRoot('AdminHomePage');
        }
      }
      if (found == false) {
        this.error = "Username or Password is not correct, click forgot password for account recovery";
      }
    });
  }

  navFpassword() {
    this.navCtrl.push("ForgotpasswordPage");
  }

  sync() {
    this.db.initDB();
  }

}
