import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SupervisorhomePage');
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

   logOut(){
    localStorage.removeItem('user');
    this.navCtrl.push('LoginPage');
  }

}
