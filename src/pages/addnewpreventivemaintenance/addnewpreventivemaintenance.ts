import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, Platform, NavParams } from 'ionic-angular';
import { PouchService } from '../../pouch-service/pouch.service';
import { HttpserviceProvider } from '../../providers/httpservice';
import { PreventiveMaintenance } from '../../models/preventivemaintenance';

/**
 * Generated class for the AddnewpreventivemaintenancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addnewpreventivemaintenance',
  templateUrl: 'addnewpreventivemaintenance.html',
})
export class AddnewpreventivemaintenancePage {
  public preventivemaintenance: PreventiveMaintenance;
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
  radioOther = false;


  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams,public platform: Platform,public httpService: HttpserviceProvider,public db: PouchService ) {
    
    this.show = false;

    if (this.navParams.get('type') == 'Add') {
      
      this.add = true;
      this.title = 'Add';
      this.preventivemaintenance = {
        id: Math.round((new Date()).getTime()).toString(),
        rev: '',
        name: '',
        pmno:'',
        datecreated: new Date(),
        datewo: new Date().toJSON().slice(0, 10).replace(/-/g, '-'),
        tagname: '',
        tagid: '',
        equipmentpartname: '',
        steps:'',
        equipmentpartid: '',
        equipmentcatid: '',
        equipmentcatname: '',
        equipmenttag: '',
        faculty: 'OGPOOC',
        exactlocation: '',
        maintenanceitem: '',
        performedby:'',
        precautions: '',
        priority: 'High',
        responsibility: 'Operator',
        status: false,
        gstatus: false,
        dstatus: false,
        ipaddress:'169.159.98.187',
        department: '',
        description: '',
        itemarray: [],
        beepstatus: false,
        frequencydate: new Date(),
        frequency: 3,
        post: '',
        frequencyspandate: '',
        staff: '',
        staffid: '',
        animateswitch: 'false',
        woid: '',
        pmId: ''
      }
      this.db.getPreventivemaintenances().then(data => {
        if (data.length != 0) {
          this.preventivemaintenance.pmno = data[0].pmno + 1;
        }
        else {
          this.preventivemaintenance.pmno = 1;
        }
      });
    }  
    else if(this.navParams.get('type') == 'Equipment'){
      this.title = 'Add';
      this.addFromequip = true;
      this.radioOther = true;
      this.preventivemaintenance = this.navParams.get('preventivemaintenance');
      this.db.getPreventivemaintenances().then(data => {
        if (data.length != 0) {
          this.preventivemaintenance.pmno = data[0].pmno + 1;
        }
        else {
          this.preventivemaintenance.pmno = 1;
        }
      });
    }
    else {
      this.preventivemaintenance = this.navParams.get('preventivemaintenance');
    
      this.radioOther = true;
      var dateString = new Date(this.preventivemaintenance.datewo).toUTCString();
      dateString = dateString.split(' ').slice(0, 4).join(' ');
      var currentDate = new Date().toUTCString();
      currentDate = currentDate.split(' ').slice(0, 4).join(' ');
    }
  }

  ionViewDidLoad() {
    this.httpService.getIpAddress().subscribe(data => {
      this.preventivemaintenance.ipaddress = data['ip'];
    });

    this.selectedPriority = this.preventivemaintenance.priority;
    this.selectedResponsibility = this.preventivemaintenance.responsibility;
    this.responsibilities = ["Contractor", "Vendor", "Operator"];
    this.worktypes = ["Preventive Maintenance", "Work Order"];
    this.priorities = ["High", "Medium", "Low"];
    console.log('ionViewDidLoad AddnewpreventivemaintenancePage');

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
      this.preventivemaintenance.equipmentcatname = newVal.name;
      this.preventivemaintenance.equipmenttag = newVal.tag;
      this.catTrue = true;
    }
    else {
      this.preventivemaintenance.equipmentcatname = newVal;
      this.catTrue = true;
    }
  }

  selectEquipmentsTags(newVal) {
    this.equipmentTagObject = newVal;
    if (this.add) {
      this.preventivemaintenance.equipmenttag = newVal.tag;
      this.tagTrue = true;
    }
    else {
      this.preventivemaintenance.equipmenttag = newVal;
      this.tagTrue = true;
    }
  }

  selectEquipmentsParts(newVal) {
    this.equipmentPartObject = newVal;
    if (this.add) {
      this.preventivemaintenance.equipmentpartname = newVal.name;
      this.preventivemaintenance.tagname = newVal.tag
      this.partTrue = true;
    }
    else {
      this.preventivemaintenance.equipmentpartname = newVal;
      this.partTrue = true;
    }
  }

  selectEquipmentsPartsTags(newVal) {
    this.equipmentPartTagObject = newVal;
    if (this.add) {
      this.preventivemaintenance.tagname = newVal.tag;
      this.partTrue = true;
    }
    else {
      this.preventivemaintenance.tagname = newVal;
      this.partTrue = true;
    }
  }

  submit() {
    if (this.add || this.addFromequip) {
      this.preventivemaintenance.department = this.user.departments;
      this.preventivemaintenance.post = this.user.post;
      if (typeof this.equipmentCatObject == 'object') {
        this.preventivemaintenance.equipmentcatid = this.equipmentCatObject.id;
      }
      if (typeof this.equipmentPartObject == 'object') {
        this.preventivemaintenance.equipmentpartid = this.equipmentPartObject.id;
      }
      this.preventivemaintenance.staff = this.user.name;
      this.preventivemaintenance.staffid = this.localStorageItem;
      /* if (this.workorder.worktypes == "Work Order") {
        this.workorder.frequency = null;
      }
      else {*/
        this.preventivemaintenance.datewo = "";
        var someDate = new Date();
        var numberOfHoursToAdd = this.preventivemaintenance.frequency;
        var addedDate = someDate.getHours() + Number(numberOfHoursToAdd);
        this.preventivemaintenance.frequencyspandate = someDate.setHours(addedDate);
      //} 
      this.db.savePreventivemaintenance(this.preventivemaintenance).then(res => {
        this.viewCtrl.dismiss(res);
        //Save Alert in Supervisor

        this.db.getSupervisors().then(supervisors => {
          this.filterManager = supervisors.filter(data => data.post == 'Manager');
          this.filterHse = supervisors.filter(data => data.departments == 'HSE');
          this.filterAreaSupervisor = supervisors.filter(data => data.post == 'Supervisor' && data.departments == this.user.departments);
          if (this.preventivemaintenance.responsibility == 'Operator') {
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
         if (this.preventivemaintenance.responsibility == 'Operator') {
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
            pmno: res.pmno,
            description: res.description,
            location: res.exactlocation,
            facility: res.faculty,
            type: 'preventivemaintenance',
            maintenanceitem: res.maintenanceitem,
            datecreated: res.datecreated,
            frequencydate: res.frequencydate,
            datewo: res.datewo,
            responsibility: res.responsibility
          }

          this.httpService.sendEmailworkorder(emailInfo).subscribe(res => {

          });

          //if (this.platform.is('cordova')) {
            this.httpService.workpermitNotification(emailInfo).subscribe(res => {
            })
          //}

        });

        this.user.workorders.push(res.id);
        this.db.updateSupervisor(this.user).then(data => {

        });
      });
    }
    else {
      if (typeof this.equipmentCatObject == 'object') {
        this.preventivemaintenance.equipmentcatid = this.equipmentCatObject.id;
        this.preventivemaintenance.equipmentcatname = this.equipmentCatObject.name;
      }
      else {
        this.preventivemaintenance.equipmentcatid = this.preventivemaintenance.equipmentcatid;
        this.preventivemaintenance.equipmentcatname = this.preventivemaintenance.equipmentcatname;
      }
      if (typeof this.equipmentTagObject == 'object') {
        this.preventivemaintenance.equipmentcatid = this.equipmentCatObject.id;
        this.preventivemaintenance.equipmenttag = this.equipmentTagObject.tag;
      }
      else {
        this.preventivemaintenance.equipmentcatid = this.preventivemaintenance.equipmentcatid;
        this.preventivemaintenance.equipmenttag = this.preventivemaintenance.equipmenttag;
      }
      if (typeof this.equipmentPartObject == 'object') {
        this.preventivemaintenance.equipmentpartid = this.equipmentPartObject.id;
        this.preventivemaintenance.equipmentpartname = this.equipmentPartObject.name;
      }
      else {
        this.preventivemaintenance.equipmentpartid = this.preventivemaintenance.equipmentpartid;
        this.preventivemaintenance.equipmentpartname = this.preventivemaintenance.equipmentpartname;
      }
      if (typeof this.equipmentPartTagObject == 'object') {
        this.preventivemaintenance.equipmentpartid = this.equipmentPartTagObject.id;
        this.preventivemaintenance.tagname = this.equipmentPartTagObject.tag;
      }
      else {
        this.preventivemaintenance.equipmentpartid = this.preventivemaintenance.equipmentpartid;
        this.preventivemaintenance.tagname = this.preventivemaintenance.tagname;
      }
      if (this.preventivemaintenance.frequencyspandate != "") {

        var someDate = new Date(this.preventivemaintenance.frequencydate);
        var numberOfHoursToAdd = this.preventivemaintenance.frequency;
        var addedDate = someDate.getHours() + Number(numberOfHoursToAdd);
        this.preventivemaintenance.frequencyspandate = someDate.setHours(addedDate);
      }
      this.db.updatePreventivemaintenance(this.preventivemaintenance).then(order => {
        this.viewCtrl.dismiss(order);
      })
    }
  }

  checkPMNO() {
    this.error = "";
    this.db.getPreventivemaintenances().then(data => {
      data.forEach(item => {
        if (this.preventivemaintenance.pmno == item.pmno) {
          this.error = "PMNO already exists. Use another!"
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

  radioClick(event){
  this.radioOther = true;
  }

  radioClickMnth(){
    var monthHours = 30 * 24;
    this.preventivemaintenance.frequency = monthHours;
    this.radioOther = false;
  }

  radioClickwek(){
    var weekHours = 7 * 24;
    this.preventivemaintenance.frequency = weekHours;
    this.radioOther = false;
  }

  radioClickday(){
    var dailyHours = 24;
    this.preventivemaintenance.frequency = dailyHours;
    this.radioOther = false;
  }

}
