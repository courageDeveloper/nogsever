import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PouchService } from '../../pouch-service/pouch.service';
import { HttpserviceProvider } from '../../providers/httpservice';

/**
 * Generated class for the otpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-otp',
  templateUrl: 'otp.html',
})
export class otpPage {
  emailValidate = "[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})";
  otp;
  supervisor;
  errorMessageUser = "";
  disabled = true;
  otpForm = new FormGroup({
    otp: new FormControl()
  })


  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public db: PouchService, public httpService: HttpserviceProvider, private formBuilder: FormBuilder, public navParams: NavParams) {
    this.otp = {
      otp: ''
    }
  }

  ionViewDidEnter() {
    this.errorMessageUser = "";
    this.otpForm = this.formBuilder.group({
      otp: [this.otp.otp]
    })
  }

  ionViewDidLoad() {
    this.errorMessageUser = "";
    console.log('ionViewDidLoad otpPage');
    this.otpForm = this.formBuilder.group({
      otp: [this.otp.otp]
    })
  }


  sendEmail() {
    var randNumber = Math.floor((Math.random() * 10000000) + 1);
    this.supervisor.otp = randNumber;
    this.db.updateSupervisor(this.supervisor).then(res => {
      this.httpService.forgotPassword(res).subscribe(res => {

      })
    })
  }

  checkOtp() {
    this.errorMessageUser = "";
    this.disabled = true;
    this.db.getSupervisors().then(data => {
      data = data.filter(data => data.otp != "" && data.otp == this.otp.otp);
      if (data.length > 0) {
        if (data[0].otp == this.otp.otp) {
          this.disabled = false;
          /* this.supervisor = data[0]; */
          this.errorMessageUser = "";
          let modal = this.modalCtrl.create('AddchangepasswordPage', { engineer: data[0] });
          modal.onDidDismiss((data) => {
            if (data) {
            console.log("data");
            }
          });
          modal.present();
        }
        else {
          console.log("No item yet")
        }
      }
      else {
        this.errorMessageUser = "Wrong OTP code, pls check email or try processing again"
      }
    })
  }

  back() {
    this.navCtrl.pop();
  }

}
