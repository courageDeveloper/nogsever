import { Component } from '@angular/core';
import { IonicPage, NavController, Platform, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddworkerschedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addworkerschedule',
  templateUrl: 'addworkerschedule.html',
})
export class AddworkerschedulePage {
  public workerSchedules: any;
  add = false;
  title = 'Edit';
  search = false;
  departments;
  shifts;
  workerSchedulesArray;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {
    this.shifts = ["Day", "Night"];
    this.departments = ["Process Operations","HSE","Instrument", "Mechanical", "Electrical"];

    if (this.navParams.get('type') == 'Add') {
      this.add = true;
      this.title = 'Add';
      this.workerSchedules = {
        /*  id: Math.round((new Date()).getTime()).toString(),
         rev: '', */
        name: '',
        date: '2018-11-20',
        typeofshift: 'Night',
        department: 'Process Operations'
      }
    }
    else {
      this.workerSchedules = this.navParams.get('workschedule');
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddworkerschedulePage');
    this.workerSchedulesArray = [];
    this.workerSchedules = [{name:"Biodun Lawal", username:"bio101", sex:"Male", email:"lawal@gmail.com", address:"No 8, east circular road, benin city", position:"Supervisor Engineer", mobile:"08023467585",department:"Electrical"},
   {name:"Kate Omotosho", username:"katie", email:"kate@gmail.com", sex:"Female", address:"No 18, siluko road, benin city", position:"Junior Engineer", mobile:"08023467566",department:"Mechanical"},{name:"Gabriel Nehikhare", username:"gaby", email:"gabriel@gmail.com", sex:"Male", address:"No 7, Ihama road, benin city", position:"Supervisor Engineer", mobile:"08023467455",department:"Process Operations"},
   {name:"Esosa Igho", username:"sosa", email:"igho@gmail.com", address:"No 7, sapele road, benin city", position:"Engineer", mobile:"08023467545",department:"Instrument"}
  ];

  this.workerSchedules.map(res => {
      this.workerSchedulesArray.push(res.name);
  })
  }

  selectWorkerSchedules(newVal){
    this.workerSchedules.name = newVal;
  }

}
