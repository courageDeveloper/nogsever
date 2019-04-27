import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Workpermit } from '../../models/workpermit';
import { PouchService } from '../../pouch-service/pouch.service';

/**
 * Generated class for the OperatorhomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-operatorhome',
  templateUrl: 'operatorhome.html',
})
export class OperatorhomePage {
  show: any = false;
  showWork: any = false;
  localStorageItem;
  public user: any;
  name;
  position;
  filteredWorkpermitLength: any;
  filteredWorkpermit: Array<Workpermit> = [];
  public workpermits: Array<Workpermit> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: PouchService) {
    this.localStorageItem = JSON.parse(localStorage.getItem('user'));
    this.db.getSupervisor(this.localStorageItem).then(item => {
      this.user = item;
      this.name = item.name;
      this.position = item.position;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OperatorhomePage');
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
        this.filteredWorkpermit = workpermits.filter(data => data.permitholderid == this.user.id && data.sastatus == true || data.mastatus == true || data.hastatus == true);
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

  openAddequipments(){
    this.navCtrl.push('EquipmentsaddPage');
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
        this.filteredWorkpermit = workpermits.filter(data => data.permitholderid == this.user.id && data.sastatus == true || data.mastatus == true || data.hastatus == true);
        
        this.filteredWorkpermit.forEach(item => {
          item.sastatus = false;
          item.mastatus = false;
          item.hastatus = false;
          this.db.updateWorkpermit(item).then(res => {
            this._loadWorkpermits();
          });
        })
      })
  }

  dailyWorkPermit(){
    this.navCtrl.push('ViewworkpermitPage');
  }

  logOut(){
    localStorage.removeItem('user');
    this.navCtrl.push('LoginPage');
  }

}
