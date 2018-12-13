import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EngineersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-engineers',
  templateUrl: 'engineers.html',
})
export class EngineersPage {
  filteredEngineers;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EngineersPage');
    this.filteredEngineers = [{name:"Godspower Idhude", username:"idhude", sex:"Male", email:"lawal@gmail.com", address:"No 8, east circular road, benin city", position:"Operations Surpevisor", mobile:"08023467585",department:"Operations"},
   {name:"Siloko Akpobor", username:"siloko", email:"kate@gmail.com", sex:"Male", address:"No 18, siluko road, benin city", position:"Instrument Surpevisor", mobile:"08023467566",department:"Instruments"},{name:"Bright Okunbor", username:"bright", email:"bright@gmail.com", sex:"Male", address:"No 7, Ihama road, benin city", position:"Electrical Surpevisor", mobile:"08023467455",department:"Electrical"},
   {name:"Osazee Emumwen", username:"da", email:"da@gmail.com", address:"No 7, sapele road, benin city", position:"HSE Surpevisor", mobile:"08023467545",department:"HSE"}
  ]
  }

  back(){
    this.navCtrl.pop();
  }

   newEngineer(): void {
        let modal = this.modalCtrl.create('AddengineerPage',{type:'Add'});
        modal.onDidDismiss((data) => {
            if(data){
                //this._loadCustomers();
            }
        });
        modal.present();
    }

     openEngineer(engineer?: any): void {
        let modal = this.modalCtrl.create('AddengineerPage',{type:'Edit', engineer:engineer});
        modal.onDidDismiss((data) => {
            //this._loadCustomers();
        });
        modal.present();
    }

}
