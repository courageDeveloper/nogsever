import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EquipmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-equipment',
  templateUrl: 'equipment.html',
})
export class EquipmentPage {
  filterEquipments;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EquipmentPage');
    this.filterEquipments = [{ name: "Valves" },
    { name: "Pipes" }, { name: "Cables" },
    { name: "Drills" }
    ]
  }

  back() {
    this.navCtrl.pop();
  }

  newEquipment() {
    let modal = this.modalCtrl.create('AddequipmentPage', { type: 'Add' });
    modal.onDidDismiss((data) => {
      if (data) {
        //this._loadCustomers();
      }
    });
    modal.present();
  }

  openEquipment(equipment) {
    let modal = this.modalCtrl.create('AddequipmentPage', { type: 'Edit', equipment: equipment});
    modal.onDidDismiss((data) => {
      //this._loadCustomers();
    });
    modal.present();
  }

}
