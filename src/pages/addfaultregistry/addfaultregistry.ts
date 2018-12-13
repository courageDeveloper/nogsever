import { Component } from '@angular/core';
import { IonicPage, NavController, Platform, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddfaultregistryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addfaultregistry',
  templateUrl: 'addfaultregistry.html',
})
export class AddfaultregistryPage {
  public faultregister: any;
  add = false;
  title = 'Edit';
  search = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {
    if (this.navParams.get('type') == 'Add') {
      this.add = true;
      this.title = 'Add';
      this.faultregister = {
        /*  id: Math.round((new Date()).getTime()).toString(),
         rev: '', */
        date: new Date('yyyy-mm-dd').toString(),
        location: '',
        faultid: Math.ceil(Math.random() * 10000) + "NOG",
        equipment: '',
        description: ''
      }
    }
    else {
      this.faultregister = this.navParams.get('faultregister');
      console.log(this.faultregister);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddfaultregistryPage');
  }

}
