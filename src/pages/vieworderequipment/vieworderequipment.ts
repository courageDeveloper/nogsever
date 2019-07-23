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
  selector: 'page-vieworderequipment',
  templateUrl: 'vieworderequipment.html',
})
export class VieworderequipmentPage {
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
    if (this.navParams.get('type') == 'View') {

      this.add = true;
      this.title = 'View';
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

      this.workorder = this.navParams.get('workorder');
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
      itemarray: [this.workorder.itemarray],
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

  

  submit(item, i, event) {

    this.workorder.itemarray.splice(i, item);

    if (this.workorder.frequencyspandate != "") {

      var someDate = new Date(this.workorder.frequencydate);
      var numberOfHoursToAdd = this.workorder.frequency;
      var addedDate = someDate.getHours() + Number(numberOfHoursToAdd);
      this.workorder.frequencyspandate = someDate.setHours(addedDate);
    }

      this.db.updateWorkorder(this.workorder).then(order => {
        //this.viewCtrl.dismiss(order);
      })

      /*  console.log('Update')
         const control = <FormArray>this.preventiveMaintenaceForm.controls['itemArray'];
         console.log(control);
         
         for (var i = 0; i < control.value.length; i++) {
           var itemObject = {
             id: Math.round((new Date()).getTime()).toString(),
             maintenanceItem: control.value[i].maintenanceitem,
             steps: control.value[i].steps,
             status: true,
             priority: control.value[i].priority,
             responsibility: control.value[i].responsibility
           }
  
           this.preventivemaintenance.itemarray.push(itemObject);
         }
  
         if (this.preventivemaintenance.frequencyspandate != "") {
  
           var someDate = new Date(this.preventivemaintenance.frequencydate);
           var numberOfHoursToAdd = this.preventivemaintenance.frequency;
           var addedDate = someDate.getHours() + Number(numberOfHoursToAdd);
           this.preventivemaintenance.frequencyspandate = someDate.setHours(addedDate);
         }
         this.db.updatePreventivemaintenance(this.preventivemaintenance).then(order => {
           this.viewCtrl.dismiss(order);
         }) */

    }

    submitNew(){
      if (this.equipment.woId != '') {
  
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

        if (this.workorder.frequencyspandate != "") {

          var someDate = new Date(this.workorder.frequencydate);
          var numberOfHoursToAdd = this.workorder.frequency;
          var addedDate = someDate.getHours() + Number(numberOfHoursToAdd);
          this.workorder.frequencyspandate = someDate.setHours(addedDate);
        }
        this.db.updateWorkorder(this.workorder).then(order => {
          //this.viewCtrl.dismiss(order);
        });
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

    deleteItem(item, i) {
      this.workorder.itemarray.splice(i, 1);
      this.db.updateWorkorder(this.workorder).then(order => {
      })
      /* const control = <FormArray>this.preventivemaintenance.itemarray;
      control.removeAt(i); */

    }

    deleteItemAdded(i) {
      const control = <FormArray>this.workOrderForm.controls['itemArray'];
      control.removeAt(i);
    }
  }
