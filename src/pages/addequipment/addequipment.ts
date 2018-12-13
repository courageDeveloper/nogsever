import { Component } from '@angular/core';
import { IonicPage, NavController, Platform, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddequipmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addequipment',
  templateUrl: 'addequipment.html',
})
export class AddequipmentPage {
  public equipments: any;
  add = false;
  title = 'Edit';
  search = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {
    if (this.navParams.get('type') == 'Add') {
      this.add = true;
      this.title = 'Add';
      this.equipments = {
        /*  id: Math.round((new Date()).getTime()).toString(),
         rev: '', */
        name: ''
      }
    }
    else {
      this.equipments = this.navParams.get('equipment');
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddequipmentPage');
  }

}
