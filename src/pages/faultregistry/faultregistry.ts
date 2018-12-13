import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FaultregistryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-faultregistry',
  templateUrl: 'faultregistry.html',
})
export class FaultregistryPage {
  filterRegistries;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FaultregistryPage');
    this.filterRegistries = [{date: "2018-11-22", location: "OGPOOC", faultid: "1128", equipment: "Test Seperator", description: "Test seperator pressure control valve stuck open"},
    {date: "2018-11-22", location: "OGPOOC", faultid: "1228", equipment: "Gas Generator 4", description: "Gas generator filter is blocked"}, {date: "2018-12-22", location: "OGPOOC", faultid: "1428", equipment: "Battery Limit", description: "Pressure transmitter 0200A is giving out negative value" },
    {date: "2018-12-22", location: "OGPOOC", faultid: "1528", equipment: "Condensate Reboiler", description: "Condensate Reboiler 1 burner is not functional"}
    ]
  }

  back(){
    this.navCtrl.pop();
  }

  newRegistry(){
    let modal = this.modalCtrl.create('AddfaultregistryPage',{type:'Add'});
        modal.onDidDismiss((data) => {
            if(data){
                //this._loadCustomers();
            }
        });
        modal.present();
  }

  openRegistry(faultregister?: any): void {
        let modal = this.modalCtrl.create('AddfaultregistryPage',{type:'Edit', faultregister:faultregister});
        modal.onDidDismiss((data) => {
            //this._loadCustomers();
        });
        modal.present();
    }

}
