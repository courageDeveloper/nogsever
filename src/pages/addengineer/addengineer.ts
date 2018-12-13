import { Component } from '@angular/core';
import { IonicPage, NavController, Platform, NavParams } from 'ionic-angular';

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
  public engineer: any;
  add = false;
  title = 'Edit';
  search = false;
  departments;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {

    this.departments = ["Process Operations","HSE", "Instrument", "Mechanical", "Electrical"];

    if (this.navParams.get('type') == 'Add') {
      this.add = true;
      this.title = 'Add';
      this.engineer = {
        /*  id: Math.round((new Date()).getTime()).toString(),
         rev: '', */
        name: '',
        mobile: '',
        address: '',
        email: '',
        sex: 'Male',
        position: '',
        department: 'Process Operations',
        username: '',
        password: ''
      }
    }
    else {
      this.engineer = this.navParams.get('engineer');
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddengineerPage');
  }

}
