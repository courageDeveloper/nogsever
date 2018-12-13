import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WorkerschedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-workerschedule',
  templateUrl: 'workerschedule.html',
})
export class WorkerschedulePage {
  filteredWorkschedules;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkerschedulePage');
     this.filteredWorkschedules = [{name:"Biodun Lawal", date:"2018-11-05", typeofshift:"Night", department:"Electrical"},
   {name:"Kate Omotosho", date:"2018-11-012", typeofshift:"Day",department:"Mechanical"},{name:"Gabriel Nehikhare", date:"2018-11-15",typeofshift:"Night",department:"Process Operations"},
   {name:"Esosa Igho", date:"2018-11-05", typeofshift:"Night",department:"Instrument"}
  ]
  }

  back(){
    this.navCtrl.pop();
  }

  newWorkschedules(){
     let modal = this.modalCtrl.create('AddworkerschedulePage',{type:'Add'});
        modal.onDidDismiss((data) => {
            if(data){
                //this._loadCustomers();
            }
        });
        modal.present();
  }

  openWorkschedules(workschedule){
     let modal = this.modalCtrl.create('AddworkerschedulePage',{type:'Edit', workschedule:workschedule});
        modal.onDidDismiss((data) => {
            //this._loadCustomers();
        });
        modal.present();
  }

}
