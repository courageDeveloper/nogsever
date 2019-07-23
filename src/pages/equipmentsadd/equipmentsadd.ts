import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams, AlertController } from 'ionic-angular';
import { PouchService } from '../../pouch-service/pouch.service';
import { Equipmentsadd } from '../../models/equipmentsadd';

/**
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-equipmentsadd',
  templateUrl: 'equipmentsadd.html',
})
export class EquipmentsaddPage {
  filteredEquipmentsadd: Array<Equipmentsadd> = [];
  public equipmentsadd: Array<Equipmentsadd> = [];

  constructor(public navCtrl: NavController, public db: PouchService, public alertCtrl: AlertController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SparepartsPage');
    this._loadEquipmentsadd();
  }

  /**
  * On display page
  */
  ionViewDidEnter() {
    this._loadEquipmentsadd();
  }

  private _loadEquipmentsadd(): void {
    this.db.getEquipmentsadds()
      .then((equipmentsadd: Array<Equipmentsadd>) => {
        this.filteredEquipmentsadd = equipmentsadd;
        this.equipmentsadd = equipmentsadd;
      });
  }

  back() {
    this.navCtrl.pop();
  }

  newEquipmentsadd() {
    let modal = this.modalCtrl.create('AddequipmentsaddPage', { type: 'Add' });
    modal.onDidDismiss((data) => {
      if (data) {
        this._loadEquipmentsadd();
      }
    });
    modal.present();
  }

  openEquipmentsadd(equipmentsadd) {
    let modal = this.modalCtrl.create('AddequipmentsaddPage', { type: 'Edit', equipmentsadd: equipmentsadd });
    modal.onDidDismiss((data) => {
      this._loadEquipmentsadd();
    });
    modal.present();
  }

  filterEquipmentsadd($event: any): void {
    const value: string = $event.target.value ? $event.target.value.toLowerCase() : '';
    this.filteredEquipmentsadd = [];

    for (let equipmentadd of this.equipmentsadd) {
      if (equipmentadd.tagname.toLowerCase().indexOf(value) !== -1) {
        this.filteredEquipmentsadd.push(equipmentadd);
      }
    }
  }

  deleteEquipmentsadd(equipmentsadd: Equipmentsadd) {
    const alert = this.alertCtrl.create({
      title: 'Delete Equipment',
      message: 'Are you sure you want to delete Equipment: ' + equipmentsadd.tagname,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Confirm',
          handler: () => {
            this.db.deleteEquipmentsadd(equipmentsadd)
              .then((success: boolean) => {
                this._loadEquipmentsadd();
              });
          }
        }
      ]
    });
    alert.present();
  }

  trackByName = (index, item) => {
    return item.id;
  }

}
