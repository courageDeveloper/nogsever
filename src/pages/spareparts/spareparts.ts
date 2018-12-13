import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SparepartsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-spareparts',
  templateUrl: 'spareparts.html',
})
export class SparepartsPage {
filterSpareparts;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SparepartsPage');
    this.filterSpareparts = [{ name: "Valves", quantity: "5", description: "5cm valves"},
    {  name: "Pipes", quantity: "50", description: "200 x 150cm pipes"}, {  name: "Cables", quantity: "25",  description: "Electric copper cables" },
    {  name: "Drills", quantity: "2",  description: "Mechanical steel drills"}
    ]
  }

   back(){
    this.navCtrl.pop();
  }

  newSparepart(){
    let modal = this.modalCtrl.create('AddsparepartsPage',{type:'Add'});
        modal.onDidDismiss((data) => {
            if(data){
                //this._loadCustomers();
            }
        });
        modal.present();
  }

  openSparepart(sparepart){
    let modal = this.modalCtrl.create('AddsparepartsPage',{type:'Edit', sparepart:sparepart});
        modal.onDidDismiss((data) => {
            //this._loadCustomers();
        });
        modal.present();
  }

}
