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
  selector: 'page-addfrequency',
  templateUrl: 'addfrequency.html',
})
export class AddfrequencyPage {
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
    console.log('ionViewDidLoad AddfrequencyPage');
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

  Addfrequency(equipment){
    let modal = this.modalCtrl.create('AddfrequencyequipmentPage', { type: 'Add', equipment: equipment});
    modal.onDidDismiss((data) => {
    });
    modal.present();
    this.viewCtrl.dismiss();
  }

  Viewfrequency(equipment){
    this.db.getPreventivemaintenance(this.equipment.pmId).then(res => {
      var preventivemaintenance = res;

      let modal = this.modalCtrl.create('ViewnewpreventivemaintenancePage', { type: 'Edit', equipment: equipment, preventivemaintenance: preventivemaintenance});
      modal.onDidDismiss((data) => {
      });
      modal.present();
      this.viewCtrl.dismiss();
    });
   
  }

}
