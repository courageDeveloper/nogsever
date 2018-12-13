import { Component } from '@angular/core';
import { IonicPage, NavController, Platform, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddsparepartsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addspareparts',
  templateUrl: 'addspareparts.html',
})
export class AddsparepartsPage {
  public spareParts: any;
  add = false;
  title = 'Edit';
  search = false;
  sparePartsArray;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {
    if (this.navParams.get('type') == 'Add') {
      this.add = true;
      this.title = 'Add';
      this.spareParts = {
        /*  id: Math.round((new Date()).getTime()).toString(),
         rev: '', */
        name: '',
        quantity:0,
        description:''
      }
    }
    else {
      this.spareParts = this.navParams.get('sparepart');
    }
  }

  ionViewDidLoad() {
    this.sparePartsArray = [];
    console.log('ionViewDidLoad AddsparepartsPage');
    this.spareParts = [{ name: "Valves"},
    {  name: "Pipes"}, {  name: "Cables"},
    {  name: "Drills"}
    ]

    this.spareParts.map(res => {
     this.sparePartsArray.push(res.name);
    })
  }

   selectSpareparts(newVal){
    this.spareParts.name = newVal;
  }

}
