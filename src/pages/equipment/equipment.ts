import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams, AlertController } from 'ionic-angular';
import { PouchService } from '../../pouch-service/pouch.service';
import { Equipmentcat } from '../../models/equipmentcat';

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
  filteredEquipmentcats: Array<Equipmentcat> = [];
  public equipmentcats: Array<Equipmentcat> = [];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public db: PouchService, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EquipmentPage');
    this._loadEquipmentcats();
  }

  /**
   * On display page
   */
  ionViewDidEnter() {
    this._loadEquipmentcats();
  }

  private _loadEquipmentcats(): void {
    this.db.getEquipmentcats()
      .then((equipmentcats: Array<Equipmentcat>) => {
        this.filteredEquipmentcats = equipmentcats;
        this.equipmentcats = equipmentcats;
      });
  }

  back() {
    this.navCtrl.pop();
  }

  newEquipmentcat() {
    let modal = this.modalCtrl.create('AddequipmentPage', { type: 'Add' });
    modal.onDidDismiss((data) => {
      if (data) {
        this._loadEquipmentcats();
      }
    });
    modal.present();
  }

  openEquipmentcat(equipment) {
    let modal = this.modalCtrl.create('AddequipmentPage', { type: 'Edit', equipment: equipment });
    modal.onDidDismiss((data) => {
      this._loadEquipmentcats();
    });
    modal.present();
  }

  filterEquipmentcats($event: any): void {
    const value: string = $event.target.value ? $event.target.value.toLowerCase() : '';
    this.filteredEquipmentcats = [];

    for (let equipmentcat of this.equipmentcats) {
      if (equipmentcat.name.toLowerCase().indexOf(value) !== -1) {
        this.filteredEquipmentcats.push(equipmentcat);
      }
    }
  }

  deleteEquipmentcat(equipmentcat: Equipmentcat) {
    const alert = this.alertCtrl.create({
      title: 'Delete Equipment category',
      message: 'Are you sure you want to delete Equipment category: ' + equipmentcat.name,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Confirm',
          handler: () => {
            this.db.deleteEquipmentcat(equipmentcat)
              .then((success: boolean) => {
                this._loadEquipmentcats();
              });
          }
        }
      ]
    });
    alert.present();
  }
}
