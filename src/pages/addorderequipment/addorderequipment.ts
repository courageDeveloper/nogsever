import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, Platform, NavParams } from 'ionic-angular';
import { PouchService } from '../../pouch-service/pouch.service';
import { HttpserviceProvider } from '../../providers/httpservice';
import { Workorder } from '../../models/workorder';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the AddequipmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addorderequipment',
  templateUrl: 'addorderequipment.html',
})
export class AddorderequipmentPage {
  public workorder: Workorder;
  public equipment;
  add = false;
  title = 'Edit';
  search = false;
  showButton = false;
  localStorageItem;
  position;
  public user: any;
  addFromequip = false;
  worktypes;
  priorities;
  selectedWorktype: any;
  selectedPriority: any;
  selectedResponsibility: any;
  responsibilities;
  show = false;
  error;
  partTrue = false;
  catTrue = false;
  disabled = false;
  tagTrue = false;
  filterManager;
  filterHse;
  filterAreaSupervisor;
  filterOperator;
  supervisorArray;
  radioOther = false;
  controlArray: any;
  equipmentsCatArray;
  equipmentCatObject;
  equipmentsPartArray;
  equipmentPartObject;
  equipmentsPartTagArray;
  equipmentPartTagObject;
  equipmentsTagArray;
  equipmentTagObject;
  workOrderForm = new FormGroup({
    id: new FormControl(),
    rev: new FormControl(),
    name: new FormControl(),
    workorderno: new FormControl(),
    datecreated: new FormControl(),
    datewo: new FormControl(),
    tagname: new FormControl(),
    tagid: new FormControl(),
    equipmentpartname: new FormControl(),
    steps: new FormControl(),
    equipmentpartid: new FormControl(),
    equipmentcatid: new FormControl(),
    equipmentcatname: new FormControl(),
    equipmenttag: new FormControl(),
    faculty: new FormControl(),
    exactlocation: new FormControl(),
    maintenanceitem: new FormControl(),
    performedby: new FormControl(),
    precautions: new FormControl(),
    priority: new FormControl(),
    responsibility: new FormControl(),
    status: new FormControl(),
    workprocedure: new FormControl(),
    gstatus: new FormControl(),
    dstatus: new FormControl(),
    ipaddress: new FormControl(),
    department: new FormControl(),
    description: new FormControl(),
    itemarray: new FormControl(),
    beepstatus: new FormControl(),
    frequencydate: new FormControl(),
    frequency: new FormControl(),
    post: new FormControl(),
    frequencyspandate: new FormControl(),
    staff: new FormControl(),
    staffid: new FormControl(),
    animateswitch: new FormControl(),
    woid: new FormControl(),
    woId: new FormControl(),
    itemArray: new FormControl()
  })

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, public viewCtrl: ViewController, public httpService: HttpserviceProvider, public db: PouchService, public navParams: NavParams, public platform: Platform) {
    if (this.navParams.get('type') == 'Add') {

      this.add = true;
      this.title = 'Add';
      this.workorder = {
        id: Math.round((new Date()).getTime()).toString(),
        rev: '',
        name: '',
        workorderno: 0,
        worktypes: 'Work Order',
        datecreated: new Date(),
        datewo: new Date().toJSON().slice(0, 10).replace(/-/g, '-'),
        tagname: '',
        tagid: '',
        equipmentpartname: '',
        steps: '',
        equipmentpartid: '',
        equipmentcatid: '',
        equipmentcatname: '',
        equipmenttag: '',
        faculty: 'OGPOOC',
        exactlocation: '',
        maintenanceitem: '',
        performedby: '',
        precautions: '',
        priority: 'High',
        responsibility: 'Operator',
        workprocedure: '',
        status: false,
        gstatus: false,
        dstatus: false,
        ipaddress: '169.159.98.187',
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
        woId: ''
      }
      this.db.getWorkorders().then(data => {
        if (data.length != 0) {
          this.workorder.workorderno = data[0].workorderno + 1;
        }
        else {
          this.workorder.workorderno = 1;
        }
      });

      this.equipment = this.navParams.get('equipment');
    }
  }

  ionViewDidLoad() {
    this.workOrderForm = this.formBuilder.group({
      id: [this.workorder.id],
      rev: [this.workorder.rev],
      name: [this.workorder.name],
      workorderno: [this.workorder.workorderno],
      datecreated: [this.workorder.datecreated],
      datewo: [this.workorder.datewo],
      tagname: [this.workorder.tagname],
      tagid: [this.workorder.tagid],
      equipmentpartname: [this.workorder.equipmentpartname],
      steps: [this.workorder.steps],
      equipmentpartid: [this.workorder.equipmentpartid],
      equipmentcatid: [this.workorder.equipmentcatid],
      equipmentcatname: [this.workorder.equipmentcatname],
      equipmenttag: [this.workorder.equipmenttag],
      faculty: [this.workorder.faculty],
      exactlocation: [this.workorder.exactlocation],
      maintenanceitem: [this.workorder.maintenanceitem],
      performedby: [this.workorder.performedby],
      precautions: [this.workorder.precautions],
      priority: [this.workorder.priority],
      responsibility: [this.workorder.responsibility],
      status: [this.workorder.status],
      gstatus: [this.workorder.gstatus],
      dstatus: [this.workorder.dstatus],
      ipaddress: [this.workorder.ipaddress],
      department: [this.workorder.department],
      description: [this.workorder.description],
      itemarray: [this.workorder.itemarray],
      beepstatus: [this.workorder.beepstatus],
      frequencydate: [this.workorder.frequencydate],
      frequency: [this.workorder.frequency],
      post: [this.workorder.post],
      frequencyspandate: [this.workorder.frequencyspandate],
      staff: [this.workorder.staff],
      staffid: [this.workorder.staffid],
      animateswitch: [this.workorder.animateswitch],
      woid: [this.workorder.woid],
      woId: [this.workorder.woId],
      itemArray: this.formBuilder.array([
        this.initItemArray(),
      ])
    });

    this.httpService.getIpAddress().subscribe(data => {
      this.workorder.ipaddress = data['ip'];
    });

    this.selectedPriority = this.workorder.priority;
    this.selectedResponsibility = this.workorder.responsibility;
    this.responsibilities = ["Contractor", "Vendor", "Operator"];
    this.priorities = ["High", "Medium", "Low"];

    this.localStorageItem = JSON.parse(localStorage.getItem('user'));
    this.db.getSupervisor(this.localStorageItem).then(item => {
      this.user = item;
      this.position = item.post;
      if (this.position != 'Supervisor') {
        this.disabled = true;
      }
    });

    this.db.getWorkorder(this.equipment.woId).then(res => { 
      if(res == undefined){
        this.equipment.woId = '';
        this.db.updateEquipmentcat(this.equipment).then(res => {

        });
      }
    })
  }

  ionViewDidEnter() {
    this.localStorageItem = JSON.parse(localStorage.getItem('user'));
    this.db.getSupervisor(this.localStorageItem).then(item => {
      this.user = item;
      this.position = item.post;
    });

  }

  initItemArray() {
    return this.formBuilder.group({
      maintenanceitem: [this.workorder.maintenanceitem],
      responsibility: [this.workorder.responsibility],
      priority: [this.workorder.priority],
      itemarray: [this.workorder.priority],
      steps: [this.workorder.steps]
    })
  }

  addItemArray() {
    const control = <FormArray>this.workOrderForm.controls['itemArray']
    control.push(this.initItemArray());
    this.controlArray = control;
    /* var arrayIndex = control.value.length - 2;
    this.preventivemaintenance.maintenanceitem = control.value[arrayIndex].maintenanceitem
    //console.log(arrayIndex);

    var itemObject = {
      id: Math.round((new Date()).getTime()).toString(),
      maintenanceItem: this.preventivemaintenance.maintenanceitem,
      steps: this.preventivemaintenance.steps,
      status: true
    }

    this.preventivemaintenance.itemarray.push(itemObject); */
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


  submit() {
    if (this.add || this.addFromequip) {

      const control = <FormArray>this.workOrderForm.controls['itemArray'];
      //control.push(this.initItemArray());
      /*  var arrayIndex = control.value.length - 1;
       this.preventivemaintenance.maintenanceitem = control.value[arrayIndex].maintenanceitem; */
      for (var i = 0; i < control.value.length; i++) {
        var itemObject = {
          id: Math.round((new Date()).getTime()).toString(),
          maintenanceItem: control.value[i].maintenanceitem,
          steps: control.value[i].steps,
          status: true,
          priority: control.value[i].priority,
          responsibility: control.value[i].responsibility
        }

        this.workorder.itemarray.push(itemObject);
      }

      this.workorder.department = this.user.departments;
      this.workorder.post = this.user.post;
      //if (typeof this.equipmentCatObject == 'object') {
      this.workorder.equipmentcatid = this.equipment.id;
      this.workorder.equipmentcatname = this.equipment.name;
      this.workorder.equipmenttag = this.equipment.tag;
      //}
      /* if (typeof this.equipmentPartObject == 'object') {
        this.preventivemaintenance.equipmentpartid = this.equipmentPartObject.id;
      } */
      this.workorder.staff = this.user.name;
      this.workorder.staffid = this.localStorageItem;
      //if (this.workorder.worktypes == "Work Order") {
      this.workorder.frequency = null;
      //}
      //else {
/*       this.preventivemaintenance.datewo = "";
      var someDate = new Date();
      var numberOfHoursToAdd = this.preventivemaintenance.frequency;
      var addedDate = someDate.getHours() + Number(numberOfHoursToAdd);
      this.preventivemaintenance.frequencyspandate = someDate.setHours(addedDate); */
      //} 
      this.db.saveWorkorder(this.workorder).then(res => {
        this.viewCtrl.dismiss(res);

        this.equipment['woId'] = res.id;
        this.db.updateEquipmentcat(this.equipment).then(res => {

        });
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
            maintenanceitem: res.equipmentcatname,
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
      /* this.db.getWorkorder(this.equipment.woId).then(res => {
        this.workorder = res;
        const control = <FormArray>this.workOrderForm.controls['itemArray'];
        //control.push(this.initItemArray());
         //var arrayIndex = control.value.length - 1;
         //this.preventivemaintenance.maintenanceitem = control.value[arrayIndex].maintenanceitem;
        for (var i = 0; i < control.value.length; i++) {
          var itemObject = {
            id: Math.round((new Date()).getTime()).toString(),
            maintenanceItem: control.value[i].maintenanceitem,
            steps: control.value[i].steps,
            status: true,
            priority: control.value[i].priority,
            responsibility: control.value[i].responsibility
          }

          this.workorder.itemarray.push(itemObject);
        } */

        /* if (typeof this.equipmentCatObject == 'object') {
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
       } */
        /* if (this.preventivemaintenance.frequencyspandate != "") {

          var someDate = new Date(this.preventivemaintenance.frequencydate);
          var numberOfHoursToAdd = this.preventivemaintenance.frequency;
          var addedDate = someDate.getHours() + Number(numberOfHoursToAdd);
          this.preventivemaintenance.frequencyspandate = someDate.setHours(addedDate);
        } */
        /* this.db.updateWorkorder(this.workorder).then(order => {
          this.viewCtrl.dismiss(order);
        })
      }) */
    }
  }


  cancel() {
    this.viewCtrl.dismiss();
  }

  radioClick(event) {
    this.radioOther = true;
  }

  radioClickMnth() {
    var monthHours = 30 * 24;
    this.workorder.frequency = monthHours;
    this.radioOther = false;
  }

  radioClickwek() {
    var weekHours = 7 * 24;
    this.workorder.frequency = weekHours;
    this.radioOther = false;
  }

  radioClickday() {
    var dailyHours = 24;
    this.workorder.frequency = dailyHours;
    this.radioOther = false;
  }

  deleteItem(i) {
    const control = <FormArray>this.workOrderForm.controls['itemArray'];
    control.removeAt(i);
  }
}
