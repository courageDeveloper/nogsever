import { Component } from '@angular/core';
import { IonicPage, NavController, Platform, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddpreventivemaintenancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addpreventivemaintenance',
  templateUrl: 'addpreventivemaintenance.html',
})
export class AddpreventivemaintenancePage {
  public pm: any;
  add = false;
  title = 'Edit';
  search = false;
  worktypes;
  priorities;
  selectedWorktype: any;
  selectedPriority: any;
  selectedResponsibility: any;
  responsibilities;
  show = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {

    this.show = false;

    if (this.navParams.get('type') == 'Add') {
      this.add = true;
      this.title = 'Add';
      this.pm = {
        /*  id: Math.round((new Date()).getTime()).toString(),
         rev: '', */
        name: '',
        date: new Date('yyyy-mm-dd').toString(),
        location: '',
        workorder: Math.ceil(Math.random() * 10000) + "NOG",
        equipment: '',
        description: '',
        frequency: '3'
      }
    }
    else {
      this.pm = this.navParams.get('pm');
    }
  }

  ionViewDidLoad() {
    this.selectedPriority = "High";
    this.selectedWorktype = "Preventive Maintenance";
    this.selectedResponsibility = "Operator";
    this.responsibilities = ["Contractor", "Vendor", "Operator"];
    this.worktypes = ["Preventive Maintenance", "Work Order"];
    this.priorities = ["High", "Medium", "Low"];
    console.log('ionViewDidLoad AddpreventivemaintenancePage');
  }

  getWorktype(worktype) {
    console.log(worktype);
    if (worktype == "Work Order") {
      this.show = true;
    }
    else if(worktype == "Preventive Maintenance"){
      this.show = false;
    }

  }

}
