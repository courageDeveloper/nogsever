import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, Platform, NavParams } from 'ionic-angular';
import { PouchService } from '../../pouch-service/pouch.service';
import { HttpserviceProvider } from '../../providers/httpservice';
import { PreventiveMaintenance } from '../../models/preventivemaintenance';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the AddequipmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewfrequencyequipment',
  templateUrl: 'viewfrequencyequipment.html',
})
export class ViewfrequencyequipmentPage {
  public preventivemaintenance: PreventiveMaintenance;
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
  originalPmValue;
  equipmentTagObject;
  dailyChecked = false;
  monthlyChecked = false;
  weeklyChecked = false;
  othersChecked = false;
  preventiveMaintenaceForm = new FormGroup({
    id: new FormControl(),
    rev: new FormControl(),
    name: new FormControl(),
    pmno: new FormControl(),
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
    itemArray: new FormControl()
  })

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, public viewCtrl: ViewController, public httpService: HttpserviceProvider, public db: PouchService, public navParams: NavParams, public platform: Platform) {
    if (this.navParams.get('type') == 'View') {

      this.add = true;
      this.title = 'View';
      this.preventivemaintenance = {
        id: Math.round((new Date()).getTime()).toString(),
        rev: '',
        name: '',
        pmno: '',
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

      this.equipment = this.navParams.get('equipment');

      this.preventivemaintenance = this.navParams.get('preventivemaintenance');
    }
  }

  ionViewDidLoad() {

    if (this.preventivemaintenance.frequency == 24) {
      this.dailyChecked = true;
    }
    else if (this.preventivemaintenance.frequency == 168) {
      this.weeklyChecked = true;
    }
    else if (this.preventivemaintenance.frequency == 720) {
      this.monthlyChecked = true;
    }
    else {
      this.othersChecked = true;
      this.radioOther = true;
    }


    this.preventiveMaintenaceForm = this.formBuilder.group({
      id: [this.preventivemaintenance.id],
      rev: [this.preventivemaintenance.rev],
      name: [this.preventivemaintenance.name],
      pmno: [this.preventivemaintenance.pmno],
      datecreated: [this.preventivemaintenance.datecreated],
      datewo: [this.preventivemaintenance.datewo],
      tagname: [this.preventivemaintenance.tagname],
      tagid: [this.preventivemaintenance.tagid],
      equipmentpartname: [this.preventivemaintenance.equipmentpartname],
      steps: [this.preventivemaintenance.steps],
      equipmentpartid: [this.preventivemaintenance.equipmentpartid],
      equipmentcatid: [this.preventivemaintenance.equipmentcatid],
      equipmentcatname: [this.preventivemaintenance.equipmentcatname],
      equipmenttag: [this.preventivemaintenance.equipmenttag],
      faculty: [this.preventivemaintenance.faculty],
      exactlocation: [this.preventivemaintenance.exactlocation],
      maintenanceitem: [this.preventivemaintenance.maintenanceitem],
      performedby: [this.preventivemaintenance.performedby],
      precautions: [this.preventivemaintenance.precautions],
      priority: [this.preventivemaintenance.priority],
      responsibility: [this.preventivemaintenance.responsibility],
      status: [this.preventivemaintenance.status],
      gstatus: [this.preventivemaintenance.gstatus],
      dstatus: [this.preventivemaintenance.dstatus],
      ipaddress: [this.preventivemaintenance.ipaddress],
      department: [this.preventivemaintenance.department],
      description: [this.preventivemaintenance.description],
      itemarray: [this.preventivemaintenance.itemarray],
      beepstatus: [this.preventivemaintenance.beepstatus],
      frequencydate: [this.preventivemaintenance.frequencydate],
      frequency: [this.preventivemaintenance.frequency],
      post: [this.preventivemaintenance.post],
      frequencyspandate: [this.preventivemaintenance.frequencyspandate],
      staff: [this.preventivemaintenance.staff],
      staffid: [this.preventivemaintenance.staffid],
      animateswitch: [this.preventivemaintenance.animateswitch],
      woid: [this.preventivemaintenance.woid],
      itemArray: this.formBuilder.array([
        this.initItemArray(),
      ])
    });



    this.httpService.getIpAddress().subscribe(data => {
      this.preventivemaintenance.ipaddress = data['ip'];
    });

    this.selectedPriority = this.preventivemaintenance.priority;
    this.selectedResponsibility = this.preventivemaintenance.responsibility;
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
      maintenanceitem: [this.preventivemaintenance.maintenanceitem],
      responsibility: [this.preventivemaintenance.responsibility],
      priority: [this.preventivemaintenance.priority],
      itemarray: [this.preventivemaintenance.itemarray],
      steps: [this.preventivemaintenance.steps]
    })
  }

  addItemArray() {
    const control = <FormArray>this.preventiveMaintenaceForm.controls['itemArray']
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

  updateItem(objectItem, i, event) {

    if (event._value) {
      /* console.log(item, i);
      console.log(this.preventivemaintenance.itemarray);
      this.preventivemaintenance.itemarray.splice(i, item);
      console.log(this.preventivemaintenance.itemarray); */
      objectItem['index'] = i;
      this.originalPmValue.push(objectItem);
    }
    else {
      /*  console.log('false');
       //this.originalPmValue = data.itemarray[i];
       console.log(this.originalPmValue.itemarray, i);
       this.originalPmValue.itemarray.splice(i, this.originalPmValue.itemarray[i]);
       console.log(this.originalPmValue.itemarray); */
      this.originalPmValue.splice(i, 1);
    }
  }

  submit(item, i, event) {

    this.preventivemaintenance.itemarray.splice(i, item);

    if (this.preventivemaintenance.frequencyspandate != "") {

      var someDate = new Date(this.preventivemaintenance.frequencydate);
      var numberOfHoursToAdd = this.preventivemaintenance.frequency;
      var addedDate = someDate.getHours() + Number(numberOfHoursToAdd);
      this.preventivemaintenance.frequencyspandate = someDate.setHours(addedDate);
    }

      this.db.updatePreventivemaintenance(this.preventivemaintenance).then(order => {
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
      if (this.equipment.pmId != '') {
  
        const control = <FormArray>this.preventiveMaintenaceForm.controls['itemArray'];
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
  
          this.preventivemaintenance.itemarray.push(itemObject);
        }

        if (this.preventivemaintenance.frequencyspandate != "") {

          var someDate = new Date(this.preventivemaintenance.frequencydate);
          var numberOfHoursToAdd = this.preventivemaintenance.frequency;
          var addedDate = someDate.getHours() + Number(numberOfHoursToAdd);
          this.preventivemaintenance.frequencyspandate = someDate.setHours(addedDate);
        }
        this.db.updatePreventivemaintenance(this.preventivemaintenance).then(order => {
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
      this.preventivemaintenance.frequency = monthHours;
      this.radioOther = false;
    }

    radioClickwek() {
      var weekHours = 7 * 24;
      this.preventivemaintenance.frequency = weekHours;
      this.radioOther = false;
    }

    radioClickday() {
      var dailyHours = 24;
      this.preventivemaintenance.frequency = dailyHours;
      this.radioOther = false;
    }

    deleteItem(item, i) {
      this.preventivemaintenance.itemarray.splice(i, 1);      
      this.db.updatePreventivemaintenance(this.preventivemaintenance).then(order => {
      })
      /* const control = <FormArray>this.preventivemaintenance.itemarray;
      control.removeAt(i); */

    }

    deleteItemAdded(i) {
      const control = <FormArray>this.preventiveMaintenaceForm.controls['itemArray'];
      control.removeAt(i);
    }
  }
