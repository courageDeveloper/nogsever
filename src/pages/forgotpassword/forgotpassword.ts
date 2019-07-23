import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PouchService } from '../../pouch-service/pouch.service';
import { HttpserviceProvider } from '../../providers/httpservice';

/**
 * Generated class for the ForgotpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgotpassword',
  templateUrl: 'forgotpassword.html',
})
export class ForgotpasswordPage {
  emailValidate = "[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})";
  email;
  supervisor;
  disabled = true;
  emailForm = new FormGroup({
    email: new FormControl()
  })


  constructor(public navCtrl: NavController, public db: PouchService, public httpService: HttpserviceProvider, private formBuilder: FormBuilder, public navParams: NavParams) {
    this.email = {
      email: ''
    }
  }

  ionViewDidEnter() {
    this.emailForm = this.formBuilder.group({
      email: [this.email.email, Validators.compose([Validators.required, Validators.pattern(this.emailValidate)])]
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotpasswordPage');
    this.emailForm = this.formBuilder.group({
      email: [this.email.email, Validators.compose([Validators.required, Validators.pattern(this.emailValidate)])]
    })
  }


  sendEmail(supervisor) {
    var randNumber = Math.floor((Math.random() * 10000000) + 1);
    this.supervisor.otp = randNumber;
    this.db.updateSupervisor(this.supervisor).then(res => {
      this.httpService.forgotPassword(res).subscribe(res => {
      })
      this.navCtrl.push('otpPage');
    })
  }

  checkEmail() {
    this.disabled = true;
    this.db.getSupervisors().then(data => {
      data = data.filter(data => data.email == this.email.email);
      if (data.length > 0) {
        if (data[0].email == this.email.email) {
          this.disabled = false;
          this.supervisor = data[0];
        }
        else {
          this.disabled = true;
        }
      }
    })
  }

  back() {
    this.navCtrl.pop();
  }

}
