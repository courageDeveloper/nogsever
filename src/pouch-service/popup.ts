import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PouchService } from './pouch.service';
import {AlertController, NavController, App} from 'ionic-angular';
/* import { 
  setInterval,
  clearInterval
} from 'timers'; */

/*
  Generated class for the PopupProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PopupProvider {
  localStorageItem;
  setMyInterval

  constructor(public http: HttpClient, public db: PouchService, public altctrl: AlertController, public nav: App) {
    
  }

  displayPopUp() {
    this.localStorageItem = JSON.parse(localStorage.getItem('user'));
    this.db.getSupervisor(this.localStorageItem).then(item => {
      this.db.getWorkorders().then(workorders => {
        workorders = workorders.filter(data => data.department == item.departments && data.responsibility == item.post && data.beepstatus == true && data.dstatus == false);
        if(workorders.length != 0){     
          if (workorders[0].beepstatus == true && workorders[0].dstatus == false && workorders[0].department == item.departments) {
            var setMyInterval = setInterval(() => {
              console.log('OK');
              var alert = this.altctrl.create({
                 title: 'Pending Workorder',
                 message: 'You still have pending work order/orders to attend',
                 buttons: [{
                   text: 'Cancel',
                   role: 'cancel'
                 },
                 {
                  text: 'Ok',
                  handler: () => {
                    this.localStorageItem = JSON.parse(localStorage.getItem('user'));
                    this.db.getSupervisor(this.localStorageItem).then(item => {
                    this.db.getWorkorders().then(workorders => {
                    workorders = workorders.filter(data => data.department == item.departments && data.responsibility == item.post && data.beepstatus == true && data.dstatus == false);
                    
                    if(workorders.length == 0){
                      clearInterval(setMyInterval);
                    }
                    else {
                      console.log('Continue');
                    }
                    //this.nav.getRootNav().push('PreventivemaintenancePage');
                  });
                });
                    //this.displayPopUp();
                    //this.nav.push('OperatorhomePage');
                  }
                 }
                 ]
              });
              alert.present();
            }, 60000);
          }
          else {
            console.log('Stopped');
            clearInterval(setMyInterval);
          }
        }
        else{
          console.log("Nothing is Pending");
          clearInterval(setMyInterval);
        }
        
      });
    });
  }

  //PM
  displayPopUpPM() {
    this.localStorageItem = JSON.parse(localStorage.getItem('user'));
    this.db.getSupervisor(this.localStorageItem).then(item => {
      this.db.getPreventivemaintenances().then(preventivemaintenances => {
        preventivemaintenances = preventivemaintenances.filter(data => data.department == item.departments && data.responsibility == item.post && data.beepstatus == true && data.dstatus == false); 
        if(preventivemaintenances.length != 0){     
          if (preventivemaintenances[0].beepstatus == true && preventivemaintenances[0].dstatus == false && preventivemaintenances[0].department == item.departments) {
            var setMyInterval = setInterval(() => {
              console.log('OK');
              var alert = this.altctrl.create({
                 title: 'Pending Preventive maintenance',
                 message: 'You still have pending preventive maintenance/preventive maintenances to attend',
                 buttons: [{
                   text: 'Cancel',
                   role: 'cancel'
                 },
                 {
                  text: 'Ok',
                  handler: () => {
                    this.localStorageItem = JSON.parse(localStorage.getItem('user'));
                    this.db.getSupervisor(this.localStorageItem).then(item => {
                    this.db.getPreventivemaintenances().then(preventivemaintenances => {
                      preventivemaintenances = preventivemaintenances.filter(data => data.department == item.departments && data.responsibility == item.post && data.beepstatus == true && data.dstatus == false);
                    if(preventivemaintenances.length == 0){
                      clearInterval(setMyInterval);
                    }
                    else {
                      console.log('Continue');
                    }
                    //this.nav.getRootNav().push('NewpreventivemaintenancePage');
                  });
                });
                    //this.displayPopUp();
                    //this.nav.push('OperatorhomePage');
                  }
                 }
                 ]
              });
              alert.present();
            }, 60000);
          }
          else {
            console.log('Stopped');
            clearInterval(setMyInterval);
          }
        }
        else{
          console.log("Nothing is Pending");
          clearInterval(setMyInterval);
        }
        
      });
    });
  }

}
