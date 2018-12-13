import { Component } from '@angular/core';
import { IonicPage, NavController, Platform, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddworkorderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addworkorder',
  templateUrl: 'addworkorder.html',
})
export class AddworkorderPage {
  public workOrder: any;
  add = false;
  title = 'Edit';
  search = false;
  departments;
  employeeArray;

  constructor(public navCtrl: NavController, public navParams: NavParams,public platform: Platform) {
    
    this.departments = ["Process Operations","HSE","Instrument", "Mechanical", "Electrical"];

     if (this.navParams.get('type') == 'Add') {
      this.add = true;
      this.title = 'Add';
      this.workOrder = {
        /*  id: Math.round((new Date()).getTime()).toString(),
         rev: '', */
        name: '',
        employee: '',
        department:'Process Operations',
        date: new Date('yyyy-mm-dd').toString(),
        location: '',
        workorder: Math.ceil(Math.random() * 10000) + "NOG",
        equipment: '',
        description: ''
      }
    }
    else {
      this.workOrder = this.navParams.get('workorder');
    }
  }

  ionViewDidLoad() {
    this.employeeArray = [];
    console.log('ionViewDidLoad AddworkorderPage');
   this.workOrder = [{ name: "Loose Valves", employee:"Gabriel Nehikhare", department:"Process Unit", date: "2018-11-22", location: "Wing 4", workorder: "1128", equipment: "Valves", description: "Wing 4 valves are slightly loose"},
    { name: "Electric Failure", employee:"Biodun Lawal", department:"Electrical", date: "2018-11-22", location: "Wing 2", workorder: "1228", equipment: "Cables", description: "Wing 2 Cables are malfunctioning"}, { name: "Worn Parts", employee:"Esosa Igho", department:"Instrument", date: "2018-11-22", location: "Wing 8", workorder: "1428", equipment: "Bearings", description: "Wing 8 bearings are worn out" },
    { name: "Reduced Coolant", employee:"Kate Okoro", department:"Mechanical", date: "2018-11-22", location: "Wing 10", workorder: "1528", equipment: "Cooling tank", description: "Wing 10 cooling tanks are lower than normal"}
    ] 

    this.workOrder.map(res => {
     this.employeeArray.push(res.employee);
    })
  }

  selectEmployee(newVal){
    this.workOrder.employee = newVal;
  }

}
