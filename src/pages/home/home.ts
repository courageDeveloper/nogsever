import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Workpermit } from '../../models/workpermit';
import { PouchService } from '../../pouch-service/pouch.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  show: any = false;
  showWork: any = false;
  localStorageItem;
  public user: any;
  name;
  position;
  filteredWorkpermitLength: any;
  filteredWorkpermit: Array<Workpermit> = [];
  public workpermits: Array<Workpermit> = [];

  constructor(public navCtrl: NavController, public db: PouchService) {
    this.localStorageItem = JSON.parse(localStorage.getItem('user'));
    this.db.getSupervisor(this.localStorageItem).then(item => {
      this.user = item;
      this.name = item.name;
      this.position = item.position;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SupervisorhomePage');
    this.localStorageItem = JSON.parse(localStorage.getItem('user'));
    this.db.getSupervisor(this.localStorageItem).then(item => {
      this.user = item;
      this.name = item.name;
      this.position = item.position;
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
        this.filteredWorkpermit = workpermits.filter(data => data.mstatus == true);
        this.filteredWorkpermitLength = this.filteredWorkpermit.length;
      })
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

  openEngineer() {
    this.navCtrl.push('EngineersPage');
  }

  openRegistry() {
    this.navCtrl.push('FaultregistryPage');
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

  openWorkPermit() {
    this.navCtrl.push('ViewworkpermitPage');
    this.db.getWorkpermits()
      .then((workpermits: Array<Workpermit>) => {
        this.filteredWorkpermit = workpermits.filter(data => data.mstatus == true);
        console.log(this.filteredWorkpermit);
        this.filteredWorkpermit.forEach(item => {
          item.mstatus = false;
          this.db.updateWorkpermit(item).then(res => {
            this._loadWorkpermits();
          });
        })
      })
  }

  dailyWorkPermit() {
    this.navCtrl.push('ViewworkpermitPage');
  }

  dailyWO() {
    this.navCtrl.push('DailyworkorderPage');
  }

  dailyReport() {
    this.navCtrl.push('DailyreportPage');
  }

  logOut() {
    localStorage.removeItem('user');
    this.navCtrl.push('LoginPage');
  }

}
