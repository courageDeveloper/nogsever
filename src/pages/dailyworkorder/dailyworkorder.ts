import { Component } from '@angular/core';
import { IonicPage, NavController,ModalController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DailyworkorderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dailyworkorder',
  templateUrl: 'dailyworkorder.html',
})
export class DailyworkorderPage {
filterWorkorder;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

 ionViewDidLoad() {
    var currentDate = this.navParams.get('currentDate');
    console.log(currentDate);
    console.log('ionViewDidLoad WorkorderPage');
    this.filterWorkorder = [{ worktype: "Preventive maintenance(PM)", responsibility: "Operator", department:"Instrument and Process", frequency: "45 days", location: "OGPOOC", worktypeno: "PM-001", equipment: "XHP seperator", description: "Calibration of PIT-0900 on XHP seperator" },
    { worktype: "Work Order(WO)", responsibility: "Operator", department:"Mechanical and Process", frequency: "2018-11-21", location: "OGPOOC", worktypeno: "WO-001", equipment: "Compressor 1 K-3600", description: "Service compressor 1 piston cylinder"}
    ]
  }

  back() {
    this.navCtrl.pop();
  }

  trackByName = (index, item) => {
    return item.responsibility;
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
