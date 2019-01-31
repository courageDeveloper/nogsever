import { Component } from '@angular/core';
import { IonicPage, ViewController, NavController, Platform, NavParams } from 'ionic-angular';
import { Supervisor } from '../../models/supervisor';
import { PouchService } from '../../pouch-service/pouch.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
/**
 * Generated class for the AddmanagerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addmanager',
  templateUrl: 'addmanager.html',
})
export class AddmanagerPage {
  public manager: Supervisor;
  add = false;
  title = 'Edit';
  search = false;
  departments;
  disabled = false;
  errorMessageUser;
  errorMessage;
  emailValidate = "[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})";
  managerForm = new FormGroup({
    id: new FormControl(),
    rev: new FormControl(),
    name: new FormControl(),
    mobile: new FormControl(),
    address: new FormControl(),
    email: new FormControl(),
    sex: new FormControl(),
    position: new FormControl(),
    departments: new FormControl(),
    username: new FormControl(),
    password: new FormControl()
  })

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, public viewCtrl: ViewController, public navParams: NavParams, public db: PouchService, public platform: Platform) {

    this.departments = ["Process Operations", "HSE", "Instrument", "Mechanical", "Electrical"];

    if (this.navParams.get('type') == 'Add') {
      this.add = true;
      this.title = 'Add';
      this.manager = {
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
        password: '',
        post: 'Manager',
        workpermits: [],
        workorders: []
      }
    }
    else {
      this.manager = this.navParams.get('manager');
    }
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddmanagerPage');
    this.managerForm = this.formBuilder.group({
      id: [this.manager.id],
      rev: [this.manager.rev],
      name: [this.manager.name],
      mobile: [this.manager.mobile],
      address: [this.manager.address],
      email: [this.manager.email, Validators.compose([Validators.required, Validators.pattern(this.emailValidate)])],
      sex: [this.manager.sex],
      position: [this.manager.position],
      departments: [this.manager.departments],
      username: [this.manager.username],
      password: [this.manager.password],
      post: [this.manager.post]
    })
  }

  ionViewDidEnter() {
    this.managerForm = this.formBuilder.group({
      id: [this.manager.id],
      rev: [this.manager.rev],
      name: [this.manager.name],
      mobile: [this.manager.mobile],
      address: [this.manager.address],
      email: [this.manager.email, Validators.compose([Validators.required, Validators.pattern(this.emailValidate)])],
      sex: [this.manager.sex],
      position: [this.manager.position],
      departments: [this.manager.departments],
      username: [this.manager.username],
      password: [this.manager.password],
      post: [this.manager.post]
    })
  }

  submit() {
    if (this.add) {
      this.db.saveSupervisor(this.manager).then(res => {
        this.viewCtrl.dismiss(res);
      });
    }
    else {
      this.manager.workorders = [];
      this.db.updateSupervisor(this.manager).then(result => {
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
          if (this.manager.username == item.username) {
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
          if (this.manager.email == item.email) {
            this.errorMessageUser = "This email already exists";
            this.disabled = true;
          }
        })
      })
    }
  }

}
