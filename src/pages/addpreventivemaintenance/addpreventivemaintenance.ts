import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, Platform, NavParams } from 'ionic-angular';
import { PouchService } from '../../pouch-service/pouch.service';
import { HttpserviceProvider } from '../../providers/httpservice';
import { Workorder } from '../../models/workorder';

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
  public workorder: Workorder;
  add = false;
  addFromequip = false;
  title = 'Edit';
  search = false;
  worktypes;
  priorities;
  localStorageItem;
  selectedWorktype: any;
  selectedPriority: any;
  selectedResponsibility: any;
  responsibilities;
  equipmentsCatArray;
  equipmentCatObject;
  equipmentsPartArray;
  equipmentPartObject;
  equipmentsPartTagArray;
  equipmentPartTagObject;
  equipmentsTagArray;
  equipmentTagObject;
  show = false;
  position;
  error;
  partTrue = false;
  catTrue = false;
  disabled = false;
  tagTrue = false;
  public user: any;
  filterManager;
  filterHse;
  filterAreaSupervisor;
  filterOperator;
  supervisorArray;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public httpService: HttpserviceProvider, public navParams: NavParams, public platform: Platform, public db: PouchService) {

    this.show = false;

    if (this.navParams.get('type') == 'Add') {
      
      this.add = true;
      this.title = 'Add';
      this.workorder = {
        id: Math.round((new Date()).getTime()).toString(),
        rev: '',
        name: '',
        datecreated: new Date(),
        datewo: new Date().toJSON().slice(0, 10).replace(/-/g, '-'),
        workorderno: 0,
        tagname: '',
        tagid: '',
        equipmentpartname: '',
        equipmentpartid: '',
        equipmentcatid: '',
        equipmentcatname: '',
        equipmenttag: '',
        faculty: 'OGPOOC',
        exactlocation: '',
        workprocedure: '',
        precautions: '',
        priority: 'High',
        responsibility: 'Operator',
        status: false,
        gstatus: false,
        dstatus: false,
        department: '',
        worktypes: 'Preventive Maintenance',
        description: '',
        beepstatus: false,
        frequencydate: new Date(),
        frequency: 3,
        post: '',
        frequencyspandate: '',
        staff: '',
        staffid: '',
        animateswitch: 'false',
        woid: ''
      }
    
      this.db.getWorkorders().then(data => {
        if (data.length != 0) {
          this.workorder.workorderno = data[0].workorderno + 1;
        }
        else {
          this.workorder.workorderno = 1;
        }
      });
    }
    else if(this.navParams.get('type') == 'Equipment'){
      this.title = 'Add';
      this.addFromequip = true;
      this.workorder = this.navParams.get('workorder');
      this.db.getWorkorders().then(data => {
        if (data.length != 0) {
          this.workorder.workorderno = data[0].workorderno + 1;
        }
        else {
          this.workorder.workorderno = 1;
        }
      });
    }
    else {
      this.workorder = this.navParams.get('workorder');
    
      if (this.workorder.worktypes == 'Work Order') {

        this.show = true;
      }
      else if (this.workorder.worktypes == "Preventive Maintenance") {
        this.show = false;
      }
      var dateString = new Date(this.workorder.datewo).toUTCString();
      console.log(dateString);
      dateString = dateString.split(' ').slice(0, 4).join(' ');
      console.log(dateString);
      console.log(new Date(this.workorder.frequencyspandate));
      console.log(new Date(this.workorder.frequencydate));
      console.log(new Date());
      var currentDate = new Date().toUTCString();
      currentDate = currentDate.split(' ').slice(0, 4).join(' ');
      console.log(currentDate);
    }
  }

  ionViewDidLoad() {
    this.selectedPriority = this.workorder.priority;
    this.selectedWorktype = this.workorder.worktypes;
    this.selectedResponsibility = this.workorder.responsibility;
    this.responsibilities = ["Contractor", "Vendor", "Operator"];
    this.worktypes = ["Preventive Maintenance", "Work Order"];
    this.priorities = ["High", "Medium", "Low"];
    console.log('ionViewDidLoad AddpreventivemaintenancePage');

    this.db.getEquipmentcats().then(res => {
      this.equipmentsCatArray = [];
      this.equipmentsCatArray = res;
      this.equipmentsTagArray = [];
      this.equipmentsTagArray = res;
    })

    this.db.getEquipmentparts().then(res => {
      this.equipmentsPartArray = [];
      this.equipmentsPartArray = res;
      this.equipmentsPartTagArray = [];
      this.equipmentsPartTagArray = res;
    });

    this.localStorageItem = JSON.parse(localStorage.getItem('user'));
    this.db.getSupervisor(this.localStorageItem).then(item => {
      this.user = item;
      this.position = item.post;
      if (this.position != 'Supervisor') {
        this.disabled = true;
      }
    });
  }

  ionViewDidEnter() {
    this.localStorageItem = JSON.parse(localStorage.getItem('user'));
    this.db.getSupervisor(this.localStorageItem).then(item => {
      this.user = item;
      this.position = item.post;
    });

  }


  selectEquipmentsCats(newVal) {
    this.equipmentCatObject = newVal;
    if (this.add) {
      this.workorder.equipmentcatname = newVal.name;
      this.workorder.equipmenttag = newVal.tag;
      this.catTrue = true;
    }
    else {
      this.workorder.equipmentcatname = newVal;
      this.catTrue = true;
    }
  }

  selectEquipmentsTags(newVal) {
    this.equipmentTagObject = newVal;
    if (this.add) {
      this.workorder.equipmenttag = newVal.tag;
      this.tagTrue = true;
    }
    else {
      this.workorder.equipmenttag = newVal;
      this.tagTrue = true;
    }
  }


  selectEquipmentsParts(newVal) {
    this.equipmentPartObject = newVal;
    if (this.add) {
      this.workorder.equipmentpartname = newVal.name;
      this.workorder.tagname = newVal.tag
      this.partTrue = true;
    }
    else {
      this.workorder.equipmentpartname = newVal;
      this.partTrue = true;
    }
  }

  selectEquipmentsPartsTags(newVal) {
    this.equipmentPartTagObject = newVal;
    if (this.add) {
      this.workorder.tagname = newVal.tag;
      this.partTrue = true;
    }
    else {
      this.workorder.tagname = newVal;
      this.partTrue = true;
    }
  }


  getWorktype(worktype) {
    if (this.workorder.worktypes == "Work Order") {
      this.show = true;
    }
    else if (this.workorder.worktypes == "Preventive Maintenance") {
      this.show = false;
    }

  }

  submit() {
    if (this.add || this.addFromequip) {
      this.workorder.department = this.user.departments;
      this.workorder.post = this.user.post;
      if (typeof this.equipmentCatObject == 'object') {
        this.workorder.equipmentcatid = this.equipmentCatObject.id;
      }
      if (typeof this.equipmentPartObject == 'object') {
        this.workorder.equipmentpartid = this.equipmentPartObject.id;
      }

      this.workorder.staff = this.user.name;
      this.workorder.staffid = this.localStorageItem;
      if (this.workorder.worktypes == "Work Order") {
        this.workorder.frequency = null;
      }
      else {
        console.log(this.workorder.frequency);
        this.workorder.datewo = "";
        var someDate = new Date();
        var numberOfDaysToAdd = this.workorder.frequency;
        var addedDate = someDate.getDate() + Number(numberOfDaysToAdd);
        this.workorder.frequencyspandate = someDate.setDate(addedDate);
        console.log(this.workorder.frequencyspandate);
      }
      this.db.saveWorkorder(this.workorder).then(res => {
        this.viewCtrl.dismiss(res);
        //Save Alert in Supervisor

        this.db.getSupervisors().then(supervisors => {
          this.filterManager = supervisors.filter(data => data.post == 'Manager');
          this.filterHse = supervisors.filter(data => data.departments == 'HSE');
          this.filterAreaSupervisor = supervisors.filter(data => data.post == 'Supervisor' && data.departments == this.user.departments);
          if (this.workorder.responsibility == 'Operator') {
            this.filterOperator = supervisors.filter(data => data.post == 'Operator' && data.departments == this.user.departments);
          }

          this.supervisorArray = [];
          this.filterManager.forEach(item => {
            item.woalert.push(true);
            this.db.updateSupervisor(item);
            this.supervisorArray.push(item.email);
          });
          this.filterHse.forEach(item => {
            item.woalert.push(true);
            this.db.updateSupervisor(item);
            this.supervisorArray.push(item.email);
          });
          this.filterAreaSupervisor.forEach(item => {
            item.woalert.push(true);
            this.db.updateSupervisor(item);
            this.supervisorArray.push(item.email);
          });
         if (this.workorder.responsibility == 'Operator') {
            this.filterOperator.forEach(item => {
              item.woalert.push(true);
              this.db.updateSupervisor(item);
              this.supervisorArray.push(item.email);
            });
          } 

          var emailInfo = {
            name: this.user.name,
            department: this.user.departments,
            email: this.supervisorArray,
            phoneNumber: this.user.mobile,
            position: this.user.position,
            wono: res.workorderno,
            description: res.description,
            location: res.exactlocation,
            facility: res.faculty,
            type: 'workorder',
            jobtype: res.worktypes,
            datecreated: res.datecreated,
            frequencydate: res.frequencydate,
            datewo: res.datewo,
            responsibility: res.responsibility
          }

          this.httpService.sendEmailworkorder(emailInfo).subscribe(res => {

          });

          if (this.platform.is('cordova')) {
            this.httpService.workpermitNotification(emailInfo).subscribe(res => {
            })
          }

        });

        this.user.workorders.push(res.id);
        this.db.updateSupervisor(this.user).then(data => {

        });
      });
    }
    else {
      if (typeof this.equipmentCatObject == 'object') {
        this.workorder.equipmentcatid = this.equipmentCatObject.id;
        this.workorder.equipmentcatname = this.equipmentCatObject.name;
      }
      else {
        this.workorder.equipmentcatid = this.workorder.equipmentcatid;
        this.workorder.equipmentcatname = this.workorder.equipmentcatname;
      }
      if (typeof this.equipmentTagObject == 'object') {
        this.workorder.equipmentcatid = this.equipmentCatObject.id;
        this.workorder.equipmenttag = this.equipmentTagObject.tag;
      }
      else {
        this.workorder.equipmentcatid = this.workorder.equipmentcatid;
        this.workorder.equipmenttag = this.workorder.equipmenttag;
      }
      if (typeof this.equipmentPartObject == 'object') {
        this.workorder.equipmentpartid = this.equipmentPartObject.id;
        this.workorder.equipmentpartname = this.equipmentPartObject.name;
      }
      else {
        this.workorder.equipmentpartid = this.workorder.equipmentpartid;
        this.workorder.equipmentpartname = this.workorder.equipmentpartname;
      }
      if (typeof this.equipmentPartTagObject == 'object') {
        console.log(this.equipmentPartTagObject)
        this.workorder.equipmentpartid = this.equipmentPartTagObject.id;
        this.workorder.tagname = this.equipmentPartTagObject.tag;
      }
      else {
        console.log("OK")
        console.log(this.workorder.tagname)
        console.log(this.workorder)
        this.workorder.equipmentpartid = this.workorder.equipmentpartid;
        this.workorder.tagname = this.workorder.tagname;
      }
      if (this.workorder.frequencyspandate != "") {

        var someDate = new Date(this.workorder.frequencydate);
        var numberOfDaysToAdd = this.workorder.frequency;
        var addedDate = someDate.getDate() + Number(numberOfDaysToAdd);
        this.workorder.frequencyspandate = someDate.setDate(addedDate);

      }
      this.db.updateWorkorder(this.workorder).then(order => {
        this.viewCtrl.dismiss(order);
      })
    }
  }

  checkWONO() {
    this.error = "";
    this.db.getWorkorders().then(data => {
      console.log(data)
      data.forEach(item => {
        if (this.workorder.workorderno == item.workorderno) {
          this.error = "WONO already exists.Use another!"
        }
        else {
          this.error = "";
        }
      })
    })
  }

  cancel(){
    this.viewCtrl.dismiss();
  }

}
