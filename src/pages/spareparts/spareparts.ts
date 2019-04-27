import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams, AlertController } from 'ionic-angular';
import { PouchService } from '../../pouch-service/pouch.service';
import { Equipmentpart } from '../../models/equipmentpart';

/**
 * Generated class for the SparepartsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-spareparts',
  templateUrl: 'spareparts.html',
})
export class SparepartsPage {
  filteredEquipmentparts: Array<Equipmentpart> = [];
  public equipmentparts: Array<Equipmentpart> = [];

  constructor(public navCtrl: NavController, public db: PouchService, public alertCtrl: AlertController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SparepartsPage');
    this._loadEquipmentparts();
  }

  /**
  * On display page
  */
  ionViewDidEnter() {
    this._loadEquipmentparts();
  }

  private _loadEquipmentparts(): void {
    this.db.getEquipmentparts()
      .then((equipmentparts: Array<Equipmentpart>) => {
        this.filteredEquipmentparts = equipmentparts;
        this.equipmentparts = equipmentparts;
      });
  }

  back() {
    this.navCtrl.pop();
  }

  newSparepart() {
    let modal = this.modalCtrl.create('AddsparepartsPage', { type: 'Add' });
    modal.onDidDismiss((data) => {
      if (data) {
        this._loadEquipmentparts();
      }
    });
    modal.present();
  }

  openSparepart(sparepart) {
    console.log(sparepart)
    let modal = this.modalCtrl.create('AddsparepartsPage', { type: 'Edit', sparepart: sparepart });
    modal.onDidDismiss((data) => {
      this._loadEquipmentparts();
    });
    modal.present();
  }

  filterEquipmentparts($event: any): void {
    const value: string = $event.target.value ? $event.target.value.toLowerCase() : '';
    this.filteredEquipmentparts = [];

    for (let equipmentpart of this.equipmentparts) {
      if (equipmentpart.name.toLowerCase().indexOf(value) !== -1) {
        this.filteredEquipmentparts.push(equipmentpart);
      }
    }
  }

  deleteEquipmentpart(equipmentpart: Equipmentpart) {
    const alert = this.alertCtrl.create({
      title: 'Delete Equipment part',
      message: 'Are you sure you want to delete Equipment part: ' + equipmentpart.name,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Confirm',
          handler: () => {
            this.db.deleteEquipmentpart(equipmentpart)
              .then((success: boolean) => {
                this._loadEquipmentparts();
              });
          }
        }
      ]
    });
    alert.present();
  }

}
