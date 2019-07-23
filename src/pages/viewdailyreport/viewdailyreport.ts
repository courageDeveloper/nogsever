import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams, AlertController } from 'ionic-angular';
import { PouchService } from '../../pouch-service/pouch.service';
import { Dailyreport } from '../../models/dailyreport';
/**
 * Generated class for the WorkorderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-workorder',
  templateUrl: 'viewdailyreport.html',
})
export class ViewdailyreportPage {
  filterWorkorder;
  filteredDailyreport: Array<Dailyreport> = [];
  filteredDailyreportGen: Array<Dailyreport> = [];
  public dailyReports: Array<Dailyreport> = [];
  localStorageItem;
  position;
  public user: any;
  show = false;
  selectedDailyreport;
  disable = true;
  arraySelectedReports = [];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public db: PouchService, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.arraySelectedReports = [];
    this.localStorageItem = JSON.parse(localStorage.getItem('user'));
    console.log('ionViewDidLoad ViewworkpermitPage');
    this.db.getSupervisor(this.localStorageItem).then(item => {
      this.user = item;
      this.position = item.post;
      if (this.position == 'Operator' || this.position == 'Supervisor') {
        this.show = true
      }
    });
    this._loadDailyreports();
  }

  ionViewDidEnter() {
    this.arraySelectedReports = [];
    this.disable = true;
    this.localStorageItem = JSON.parse(localStorage.getItem('user'));
    this.db.getSupervisor(this.localStorageItem).then(item => {
      this.user = item;
      this.position = item.post;
      if (this.position == 'Operator' || this.position == 'Supervisor') {
        this.show = true
      }
    });
    this._loadDailyreports();
  }

  private _loadDailyreports(): void {
    this.db.getdailyreports()
      .then((dailyreports: Array<Dailyreport>) => {
        this.filteredDailyreport = dailyreports.filter(data => data.department == this.user.departments || this.user.post == 'Manager' || this.user.post == 'Admin' || this.user.departments == 'HSE');
        this.dailyReports = dailyreports.filter(data => data.department == this.user.departments || this.user.post == 'Manager' || this.user.post == 'Admin' || this.user.departments == 'HSE');
      })
  }

  back() {
    this.navCtrl.pop();
  }

  newWorkorder() {
    this.navCtrl.push('DailyreportPage', { type: 'Add' });
  }

  openWorkorder(dailyreport) {
    this.navCtrl.push('DailyreportPage', { type: 'Edit', dailyreport: dailyreport });
  }

  filterDailyreports($event: any): void {
    const value: string = $event.target.value ? $event.target.value.toLowerCase() : '';
    this.filteredDailyreport = [];

    for (let dailyreport of this.dailyReports) {
      if (dailyreport.datecreated.toLowerCase().indexOf(value) !== -1) {
        this.filteredDailyreport.push(dailyreport);
      }
    }
  }

  deleteDailyreport(dailyreport: Dailyreport) {
    if (this.show) {
      const alert = this.alertCtrl.create({
        title: 'Delete Daily Report',
        message: 'Are you sure you want to delete Daily Report for: ' + dailyreport.datecreated,
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel'
          },
          {
            text: 'Confirm',
            handler: () => {
              this.db.deletedailyreport(dailyreport)
                .then((success: boolean) => {
                  this._loadDailyreports();
                });
            }
          }
        ]
      });
      alert.present();
    }
  }

  print(dailyreport) {
    this.arraySelectedReports = [];
    this.arraySelectedReports.push(dailyreport);
    this.navCtrl.push('PrintdailyreportPage', { type: 'Edit', dailyreport: this.arraySelectedReports });
  }

  checkboxClicked(dailyreport) {
    this.selectedDailyreport = dailyreport;
    this.disable = false;
    this.arraySelectedReports.push(this.selectedDailyreport);
  }

  printSelected() {
    this.navCtrl.push('PrintdailyreportPage', { type: 'Edit', dailyreport: this.arraySelectedReports});
    this.arraySelectedReports = [];
  }

  trackByName = (index, item) => {
    return item.id;
  }

}
