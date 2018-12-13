import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  show: any = false;
  showWork: any = false;

  constructor(public navCtrl: NavController) {

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
  }

  dailyWorkPermit(){
  this.navCtrl.push('ViewworkpermitPage');
  }

  dailyWO(){
    this.navCtrl.push('DailyworkorderPage');
  }

  dailyReport(){
    this.navCtrl.push('DailyreportPage');
  }

  logOut(){
    localStorage.removeItem('user');
    this.navCtrl.push('LoginPage');
  }

}
