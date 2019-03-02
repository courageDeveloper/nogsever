import { Component } from '@angular/core';
import { IonicPage, ViewController, NavController, Platform, NavParams } from 'ionic-angular';
import { Supervisor } from '../../models/supervisor';
import { PouchService } from '../../pouch-service/pouch.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
/**
 * Generated class for the AddoperatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addoperator',
  templateUrl: 'addoperator.html',
})
export class AddoperatorPage {
  public operator: Supervisor;
  add = false;
  title = 'Edit';
  search = false;
  departments;
  disabled = false;
  errorMessageUser;
  errorMessage;
  emailValidate = "[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})";
  operatorForm = new FormGroup({
    id: new FormControl(),
    rev: new FormControl(),
    name: new FormControl(),
    mobile: new FormControl(),
    address: new FormControl(),
    email: new FormControl(),
    sex: new FormControl(),
    otp: new FormControl(),
    position: new FormControl(),
    departments: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    post: new FormControl()
  })

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, public viewCtrl: ViewController, public navParams: NavParams, public db: PouchService, public platform: Platform) {

    this.departments = ["Process Operations", "HSE", "Instrument", "Mechanical", "Electrical"];

    if (this.navParams.get('type') == 'Add') {
      this.add = true;
      this.title = 'Add';
      this.operator = {
        id: Math.round((new Date()).getTime()).toString(),
        rev: '',
        name: '',
        mobile: '',
        address: '',
        email: '',
        sex: 'Male',
        position: '',
        departments: 'Process Operations',
        username: '',
        otp: '',
        password: '',
        post: 'Operator',
        workpermits: [],
        workorders: [],
        woalert: [],
        faultregistrys: [],
        dailyreports: []
      }
    }
    else {
      this.operator = this.navParams.get('operator');
      console.log(this.operator);
    }
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddoperatorPage');
    this.operatorForm = this.formBuilder.group({
      id: [this.operator.id],
      rev: [this.operator.rev],
      name: [this.operator.name],
      mobile: [this.operator.mobile],
      address: [this.operator.address],
      email: [this.operator.email, Validators.compose([Validators.required, Validators.pattern(this.emailValidate)])],
      sex: [this.operator.sex],
      otp: [this.operator.otp],
      position: [this.operator.position],
      departments: [this.operator.departments],
      username: [this.operator.username],
      password: [this.operator.password],
      post: [this.operator.post],
      woalert: [this.operator.woalert]
    })
  }

  ionViewDidEnter() {
    this.operatorForm = this.formBuilder.group({
      id: [this.operator.id],
      rev: [this.operator.rev],
      name: [this.operator.name],
      mobile: [this.operator.mobile],
      otp: [this.operator.otp],
      address: [this.operator.address],
      email: [this.operator.email, Validators.compose([Validators.required, Validators.pattern(this.emailValidate)])],
      sex: [this.operator.sex],
      position: [this.operator.position],
      departments: [this.operator.departments],
      username: [this.operator.username],
      password: [this.operator.password],
      post: [this.operator.post],
      woalert: [this.operator.woalert]
    })
  }

  submit() {
    if (this.add) {
      this.db.saveSupervisor(this.operator).then(res => {
        this.viewCtrl.dismiss(res);
      });
    }
    else {
      //this.operator.workorders = [];
      //this.operator.woalert = [];
      this.db.updateSupervisor(this.operator).then(result => {
        this.viewCtrl.dismiss();
      });
    }
  }

  checkUser() {
    if (this.add) {
      this.disabled = false;
      this.errorMessage = "";
      this.db.getSupervisors().then(data => {
        data.forEach(item => {
          if (this.operator.username == item.username) {
            this.errorMessage = "This User already exists";
            this.disabled = true;
          }
        })
      })
    }
  }

  checkEmail() {
    if (this.add) {
      this.disabled = false;
      this.errorMessageUser = "";
      this.db.getSupervisors().then(data => {
        data.forEach(item => {
          if (this.operator.email == item.email) {
            this.errorMessageUser = "This email already exists";
            this.disabled = true;
          }
        })
      })
    }
  }

}
