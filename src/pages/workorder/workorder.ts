import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WorkorderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-workorder',
  templateUrl: 'workorder.html',
})
export class WorkorderPage {
  filterWorkorder;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    var currentDate = this.navParams.get('currentDate');
    console.log(currentDate);
    console.log('ionViewDidLoad WorkorderPage');
    this.filterWorkorder = [{ name: "Loose Valves", employee: "Gabriel Nehikhare", department: "Process Unit", date: "2018-11-22", location: "Wing 4", workorder: "1128", equipment: "Valves", description: "Wing 4 valves are slightly loose" },
    { name: "Electric Failure", employee: "Biodun Lawal", department: "Electrical", date: "2018-11-22", location: "Wing 2", workorder: "1228", equipment: "Cables", description: "Wing 2 Cables are malfunctioning" }, { name: "Worn Parts", employee: "Esosa Igho", department: "Instrument", date: "2018-11-22", location: "Wing 8", workorder: "1428", equipment: "Bearings", description: "Wing 8 bearings are worn out" },
    { name: "Reduced Coolant", employee: "Kate Okoro", department: "Mechanical", date: "2018-11-22", location: "Wing 10", workorder: "1528", equipment: "Cooling tank", description: "Wing 10 cooling tanks are lower than normal" }
    ]
  }

  back() {
    this.navCtrl.pop();
  }

  newWorkorder() {
    let modal = this.modalCtrl.create('AddworkorderPage', { type: 'Add' });
    modal.onDidDismiss((data) => {
      if (data) {
        //this._loadCustomers();
      }
    });
    modal.present();
  }

  openWorkorder(workorder) {
    let modal = this.modalCtrl.create('AddworkorderPage', { type: 'Edit', workorder: workorder });
    modal.onDidDismiss((data) => {
      //this._loadCustomers();
    });
    modal.present();
  }


}
