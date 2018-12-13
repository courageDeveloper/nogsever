import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ViewworkpermitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewworkpermit',
  templateUrl: 'viewworkpermit.html',
})
export class ViewworkpermitPage {
  filterWorkpermit;
  localStorageItem;
  position;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.filterWorkpermit = [{ date: "2018-11-21", faciltity: "OGPOOC", description: "Calibration of test seperate PSV", enddate: "2018-11-21" }, { date: "2018-11-21", faciltity: "OGPOOC", description: "Calibration of sand seperate pressure indicator transmitter", enddate: "2018-11-22" }]
  }

  ionViewDidLoad() {
    this.localStorageItem = JSON.parse(localStorage.getItem('user'));
    this.position = this.localStorageItem.position;
    console.log(this.localStorageItem);
    console.log(this.position);
    console.log('ionViewDidLoad ViewworkpermitPage');
  }

  ionViewDidEnter() {
    this.localStorageItem = JSON.parse(localStorage.getItem('user'));
    this.position = this.localStorageItem.position;
    console.log(this.localStorageItem);
    console.log(this.position);
  }

  back() {
    this.navCtrl.pop();
  }

  newWorkPermit(){
    this.navCtrl.push('WorkpermitPage');
  }

}
