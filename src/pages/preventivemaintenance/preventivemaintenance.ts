import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PreventivemaintenancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-preventivemaintenance',
  templateUrl: 'preventivemaintenance.html',
})
export class PreventivemaintenancePage {
filterPms;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreventivemaintenancePage');
    this.filterPms = [{ name: "Loose Valves", frequency:"3", date: "2018-11-22", location: "Wing 4", workorder: "1128", equipment: "Valves", description: "Wing 4 valves are slightly loose"},
    { name: "Electric Failure", frequency:"3", date: "2018-11-22", location: "Wing 2", workorder: "1228", equipment: "Cables", description: "Wing 2 Cables are malfunctioning"}, { name: "Worn Parts", frequency:"3", date: "2018-11-22", location: "Wing 8", workorder: "1428", equipment: "Bearings", description: "Wing 8 bearings are worn out" },
    { name: "Reduced Coolant", frequency:"3", date: "2018-11-22", location: "Wing 10", workorder: "1528", equipment: "Cooling tank", description: "Wing 10 cooling tanks are lower than normal"}
    ]
  }

  back(){
    this.navCtrl.pop();
  }

  newPm(){
    let modal = this.modalCtrl.create('AddpreventivemaintenancePage',{type:'Add'});
        modal.onDidDismiss((data) => {
            if(data){
                //this._loadCustomers();
            }
        });
        modal.present();
  }

  openPm(pm){
 let modal = this.modalCtrl.create('AddpreventivemaintenancePage',{type:'Edit', pm:pm});
        modal.onDidDismiss((data) => {
            //this._loadCustomers();
        });
        modal.present();
  }

}
