import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, Platform, NavParams } from 'ionic-angular';
import { Equipmentcat } from '../../models/equipmentcat';
import { PouchService } from '../../pouch-service/pouch.service';

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
  public equipmentcats: Equipmentcat;
  add = false;
  title = 'Edit';
  search = false;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public db: PouchService, public navParams: NavParams, public platform: Platform) {
    if (this.navParams.get('type') == 'Add') {
      this.add = true;
      this.title = 'Add';
      this.equipmentcats = {
        id: Math.round((new Date()).getTime()).toString(),
        rev: '',
        name: '',
        equipmentparts: []
      }
    }
    else {
      this.equipmentcats = this.navParams.get('equipment');
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddequipmentPage');
  }

  submit() {
    if (this.add) {
      this.db.saveEquipmentcat(this.equipmentcats).then(res => {
        this.viewCtrl.dismiss(res);
      });
    }
    else {
      this.db.updateEquipmentcat(this.equipmentcats).then(result => {
        this.viewCtrl.dismiss();
      });
    }
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

}
