import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, ModalController, Platform, NavParams } from 'ionic-angular';
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
  selector: 'page-addorder',
  templateUrl: 'addorder.html',
})
export class AddorderPage {
  public equipment;
  add = false;
  title = 'Edit';
  search = false;
  showButton = false;
  localStorageItem;
  position;
  public user: any;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public modalCtrl: ModalController, public db: PouchService, public navParams: NavParams, public platform: Platform) {
    if (this.navParams.get('type') == 'Equipment') {
      this.add = true;
      this.title = 'Add';
      this.equipment = this.navParams.get('equipment');
    }
  }

  ionViewDidLoad() {
    this.localStorageItem = JSON.parse(localStorage.getItem('user'));
    console.log('ionViewDidLoad AddorderPage');
    this.db.getSupervisor(this.localStorageItem).then(item => {
      this.user = item;
      this.position = item.post;
      if (this.position == 'Operator') {
        this.showButton = true;
      }
    });
  }

  

  cancel() {
    this.viewCtrl.dismiss();
  }

  Addorder(equipment){
    let modal = this.modalCtrl.create('AddorderequipmentPage', { type: 'Add', equipment: equipment});
    modal.onDidDismiss((data) => {
    });
    modal.present();
    this.viewCtrl.dismiss();
  }

  Vieworder(equipment){
    this.db.getWorkorder(this.equipment.woId).then(res => {
      var workorder = res;

      let modal = this.modalCtrl.create('ViewpreventivemaintenancePage', { type: 'View', equipment: equipment, workorder: workorder});
      modal.onDidDismiss((data) => {
      });
      modal.present();
      this.viewCtrl.dismiss();
    });
   
  }

}
