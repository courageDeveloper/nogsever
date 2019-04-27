import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Workpermit } from '../../models/workpermit';
import { PouchService } from '../../pouch-service/pouch.service';

/**
 * Generated class for the SupervisorhomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-supervisorhome',
  templateUrl: 'supervisorhome.html',
})
export class SupervisorhomePage {

  show: any = false;
  showWork: any = false;
  localStorageItem;
  position;
  name;
  positions;
  public user: any;
  filteredWorkpermitLength: any;
  filteredWorkpermit: Array<Workpermit> = [];
  public workpermits: Array<Workpermit> = [];

  constructor(public navCtrl: NavController, public db: PouchService, public navParams: NavParams) {
    this.localStorageItem = JSON.parse(localStorage.getItem('user'));
    this.db.getSupervisor(this.localStorageItem).then(item => {
      this.user = item;
      this.name = item.name;
      this.positions = item.position;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SupervisorhomePage');
    this.localStorageItem = JSON.parse(localStorage.getItem('user'));
    console.log('ionViewDidLoad ViewworkpermitPage');
    this.db.getSupervisor(this.localStorageItem).then(item => {
      this.user = item;
    });

    this._loadWorkpermits();
  }

  ionViewDidEnter() {
    this.localStorageItem = JSON.parse(localStorage.getItem('user'));
    console.log('ionViewDidLoad ViewworkpermitPage');
    this.db.getSupervisor(this.localStorageItem).then(item => {
      this.user = item;
    });
    this._loadWorkpermits();
  }

  private _loadWorkpermits(): void {
    this.db.getWorkpermits()
      .then((workpermits: Array<Workpermit>) => {
        console.log(this.user)
        if (this.user.departments != 'HSE') {
          this.filteredWorkpermit = workpermits.filter(data => data.department == this.user.departments && data.sstatus == true);
          this.filteredWorkpermitLength = this.filteredWorkpermit.length;
        }
        else {
          this.filteredWorkpermit = workpermits.filter(data => data.hstatus == true);
          this.filteredWorkpermitLength = this.filteredWorkpermit.length;
          console.log(this.filteredWorkpermit);
        }
      });

  }

  toggleSelection(index) {
    this.show = !this.show;
    this.showWork = false;
    console.log(this.show);
  }

  toggleSelection2(index) {
    this.showWork = !this.showWork;
    this.show = false;
    console.log(this.show);
  }

  openOperator() {
    this.navCtrl.push('OperatorsPage');
  }

  openRegistry() {
    this.navCtrl.push('FaultregistryPage');
  }

  openWorkPermit() {
    this.navCtrl.push('ViewworkpermitPage');
    if (this.user.departments != 'HSE') {
    this.db.getWorkpermits()
      .then((workpermits: Array<Workpermit>) => {
        this.filteredWorkpermit = workpermits.filter(data => data.department == this.user.departments && data.sstatus == true);
        this.filteredWorkpermit.forEach(item => {
          item.sstatus = false;
          this.db.updateWorkpermit(item).then(res => {
            this._loadWorkpermits();
          });
        })
      })
    }
    else {
      this.db.getWorkpermits()
      .then((workpermits: Array<Workpermit>) => {
        this.filteredWorkpermit = workpermits.filter(data => data.hstatus == true);
        this.filteredWorkpermit.forEach(item => {
          item.hstatus = false;
          this.db.updateWorkpermit(item).then(res => {
            this._loadWorkpermits();
          });
        })
      })
    }
  }

  openPm() {
    this.navCtrl.push('PreventivemaintenancePage');
  }

  openWorkorder() {
    this.navCtrl.push('WorkorderPage');
  }

  openSpareparts() {
    this.navCtrl.push('SparepartsPage');
  }

  openEquipments() {
    this.navCtrl.push('EquipmentPage');
  }

  openWorkerschedules() {
    this.navCtrl.push('WorkerschedulePage');
  }

  logOut() {
    localStorage.removeItem('user');
    this.navCtrl.push('LoginPage');
  }

}
