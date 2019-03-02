import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, Platform, NavParams, AlertController } from 'ionic-angular';
import { PouchService } from '../../pouch-service/pouch.service';
import { Supervisor } from '../../models/supervisor';


/**
 * Generated class for the OperatorsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-operators',
  templateUrl: 'operators.html',
})
export class OperatorsPage {
  public filteredSupervisors: Array<Supervisor> = [];;
  public supervisors: Array<Supervisor> = [];
  localStorageItem: any;
  user: any;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public platform: Platform, public modalCtrl: ModalController, public db: PouchService, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OperatorsPage');
    this.platform.ready()
      .then(() => {
        this._loadSupervisors();
      });

    this.localStorageItem = JSON.parse(localStorage.getItem('user'));

    this.db.getSupervisor(this.localStorageItem).then(item => {
      this.user = item;
    })
  }

  ionViewDidEnter() {
    this._loadSupervisors();
  }

  private _loadSupervisors(): void {
    this.db.getSupervisors()
      .then((supervisors: Array<Supervisor>) => {
        console.log(this.user);
        this.filteredSupervisors = supervisors.filter(data => data.departments == this.user.departments && data.post == 'Operator');
        this.supervisors = supervisors.filter(data => data.departments == this.user.departments && data.post == 'Operator');
        if (this.user.departments == 'HSE' || this.user.departments == 'Admin') {
          this.filteredSupervisors = supervisors.filter(data => data.post == "Operator");
          this.supervisors = supervisors.filter(data => data.post == "Operator");
        }
      });
  }

  back() {
    this.navCtrl.pop();
  }

  newOperator(): void {
    let modal = this.modalCtrl.create('AddoperatorPage', { type: 'Add' });
    modal.onDidDismiss((data) => {
      if (data) {
        this._loadSupervisors();
      }
    });
    modal.present();
  }

  openOperator(operator?: any): void {
    console.log(operator);
    let modal = this.modalCtrl.create('AddoperatorPage', { type: 'Edit', operator: operator });
    modal.onDidDismiss((data) => {
      this._loadSupervisors();
    });
    modal.present();
  }

  filterSupervisors($event: any): void {
    const value: string = $event.target.value ? $event.target.value.toLowerCase() : '';
    this.filteredSupervisors = [];

    for (let supervisor of this.supervisors) {
      if (supervisor.name.toLowerCase().indexOf(value) !== -1) {
        this.filteredSupervisors.push(supervisor);
      }
    }
  }

  deleteOperator(operator: Supervisor) {
    const alert = this.alertCtrl.create({
      title: 'Delete operator',
      message: 'Are you sure you want to delete operator: ' + operator.name,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Confirm',
          handler: () => {
            this.db.deleteSupervisor(operator)
              .then((success: boolean) => {
                this._loadSupervisors();
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
