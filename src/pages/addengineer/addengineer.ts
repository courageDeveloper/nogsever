import { Component } from '@angular/core';
import { IonicPage, ViewController, NavController, Platform, NavParams } from 'ionic-angular';
import { Supervisor } from '../../models/supervisor';
import { PouchService } from '../../pouch-service/pouch.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
/**
 * Generated class for the AddengineerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addengineer',
  templateUrl: 'addengineer.html',
})
export class AddengineerPage {
  public supervisor: Supervisor;
  add = false;
  title = 'Edit';
  search = false;
  departments;
  disabled = false;
  errorMessageUser;
  errorMessage;
  emailValidate = "[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})";
  supervisorForm = new FormGroup({
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
      this.supervisor = {
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
        post: 'Supervisor',
        workpermits: [],
        workorders: []
      }
    }
    else {
      this.supervisor = this.navParams.get('engineer');
      console.log(this.supervisor);
    }
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddengineerPage');
    this.supervisorForm = this.formBuilder.group({
      id: [this.supervisor.id],
      rev: [this.supervisor.rev],
      name: [this.supervisor.name],
      mobile: [this.supervisor.mobile],
      address: [this.supervisor.address],
      email: [this.supervisor.email, Validators.compose([Validators.required, Validators.pattern(this.emailValidate)])],
      sex: [this.supervisor.sex],
      position: [this.supervisor.position],
      departments: [this.supervisor.departments],
      username: [this.supervisor.username],
      password: [this.supervisor.password],
      post: [this.supervisor.post]
    })
  }

  ionViewDidEnter() {
    this.supervisorForm = this.formBuilder.group({
      id: [this.supervisor.id],
      rev: [this.supervisor.rev],
      name: [this.supervisor.name],
      mobile: [this.supervisor.mobile],
      address: [this.supervisor.address],
      email: [this.supervisor.email, Validators.compose([Validators.required, Validators.pattern(this.emailValidate)])],
      sex: [this.supervisor.sex],
      position: [this.supervisor.position],
      departments: [this.supervisor.departments],
      username: [this.supervisor.username],
      password: [this.supervisor.password],
      post: [this.supervisor.post]
    })
  }

  submit() {
    if (this.add) {
      this.db.saveSupervisor(this.supervisor).then(res => {
        this.viewCtrl.dismiss(res);
      });
    }
    else {
      this.supervisor.workorders = [];
      this.db.updateSupervisor(this.supervisor).then(result => {
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
          if (this.supervisor.username == item.username) {
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
          if (this.supervisor.email == item.email) {
            this.errorMessageUser = "This email already exists";
            this.disabled = true;
          }
        })
      })
    }
  }

}
