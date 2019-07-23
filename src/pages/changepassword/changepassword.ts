import { Component } from '@angular/core';
import { IonicPage, ViewController, NavController, Platform, NavParams } from 'ionic-angular';
import { Supervisor } from '../../models/supervisor';
import { PouchService } from '../../pouch-service/pouch.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
/**
 * Generated class for the AddchangepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-changepassword',
  templateUrl: 'changepassword.html',
})
export class AddchangepasswordPage {
  public supervisor: Supervisor;
  add = false;
  title = 'Edit';
  search = false;
  departments;
  changePassword;
  disabled = false;
  errorMessageUser;
  errorMessage;
  newpassword;
  emailValidate = "[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})";
  changePasswordForm = new FormGroup({
    newpassword: new FormControl(),
    password: new FormControl()
  })

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, public viewCtrl: ViewController, public navParams: NavParams, public db: PouchService, public platform: Platform) {

    this.supervisor = this.navParams.get('engineer');

    this.changePassword = {
      newpassword: '',
      password: ''
    }
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddchangepasswordPage');
    this.changePasswordForm = this.formBuilder.group({
      newpassword: [this.changePassword.newpassword],
      password: [this.changePassword.password],
    })
  }

  ionViewDidEnter() {
    this.changePasswordForm = this.formBuilder.group({
      newpassword: [this.changePassword.newpassword],
      password: [this.changePassword.password],
    })
  }

  submit() {
    if (this.changePassword.newpassword != this.changePassword.password) {
       this.errorMessage = "Confirm password does not match New password."
    }
    else {
      this.supervisor.password = this.changePassword.password;
      this.db.updateSupervisor(this.supervisor).then(result => {
        this.viewCtrl.dismiss();
      });
    }
  }


}
