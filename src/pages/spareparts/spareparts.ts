import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams, AlertController } from 'ionic-angular';
import { PouchService } from '../../pouch-service/pouch.service';
import { Equipmentpart } from '../../models/equipmentpart';
import * as XLSX from 'xlsx';
import * as _ from 'lodash';

/**
 * Generated class for the SparepartsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-spareparts',
  templateUrl: 'spareparts.html',
})
export class SparepartsPage {
  filteredEquipmentparts: Array<Equipmentpart> = [];
  public equipmentparts: Array<Equipmentpart> = [];
  files: FileList;
  convertFiles;
  show = false;
  showButton = false;
  localStorageItem;
  position;
  alert = false;
  newEquipmentParts;
  public user: any;
  tableCheck = false;

  constructor(public navCtrl: NavController, public db: PouchService, public alertCtrl: AlertController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.localStorageItem = JSON.parse(localStorage.getItem('user'));
    console.log('ionViewDidLoad SparepartsPage');
    this.db.getSupervisor(this.localStorageItem).then(item => {
      this.user = item;
      this.position = item.post;
      if (this.position == 'Manager' || this.position == 'Supervisor' || this.position == 'Admin') {
        this.showButton = true;
      }
    });
    this._loadEquipmentparts();
  }

  /**
  * On display page
  */
  ionViewDidEnter() {
    this.localStorageItem = JSON.parse(localStorage.getItem('user'));
    this.db.getSupervisor(this.localStorageItem).then(item => {
      this.user = item;
      this.position = item.post;
      if (this.position == 'Manager' || this.position == 'Supervisor' || this.position == 'Admin') {
        this.showButton = true;
      }
    });
    this._loadEquipmentparts();
  }

  private _loadEquipmentparts(): void {
    this.db.getEquipmentparts()
      .then((equipmentparts: Array<Equipmentpart>) => {
        this.filteredEquipmentparts = equipmentparts;
        this.equipmentparts = equipmentparts;
      });
  }

  back() {
    this.navCtrl.pop();
  }

  newSparepart() {
    let modal = this.modalCtrl.create('AddsparepartsPage', { type: 'Add' });
    modal.onDidDismiss((data) => {
      if (data) {
        this._loadEquipmentparts();
      }
    });
    modal.present();
  }

  openSparepart(sparepart) {
    let modal = this.modalCtrl.create('AddsparepartsPage', { type: 'Edit', sparepart: sparepart });
    modal.onDidDismiss((data) => {
      this._loadEquipmentparts();
    });
    modal.present();
  }

  filterEquipmentparts($event: any): void {
    const value: string = $event.target.value ? $event.target.value.toLowerCase() : '';
    this.filteredEquipmentparts = [];

    for (let equipmentpart of this.equipmentparts) {
      if (equipmentpart.name.toLowerCase().indexOf(value) !== -1 || equipmentpart.tag.toLowerCase().indexOf(value) !== -1 || equipmentpart.area.toLowerCase().indexOf(value) !== -1 ) {
        this.filteredEquipmentparts.push(equipmentpart);
      }
    }
  }

  deleteEquipmentpart(equipmentpart: Equipmentpart) {
    if (this.showButton == true) {
      const alert = this.alertCtrl.create({
        title: 'Delete Equipment part',
        message: 'Are you sure you want to delete Equipment part: ' + equipmentpart.name,
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel'
          },
          {
            text: 'Confirm',
            handler: () => {
              this.db.deleteEquipmentpart(equipmentpart)
                .then((success: boolean) => {
                  this._loadEquipmentparts();
                });
            }
          }
        ]
      });
      alert.present();
    }
  }

  activate() {
    this.show = true;
  }

  handleFiles(event) {
    this.files = event.target.files;

    var reader: FileReader = new FileReader();
    reader.readAsDataURL(this.files[0]);

    reader.onload = (e) => {
      this.convertFiles = reader.result;
      
      return new Promise((resolve, reject) => {
        var url = this.convertFiles;
        var oReq = new XMLHttpRequest();
        var workbook: any;
        oReq.open("GET", url, true);
        oReq.responseType = "arraybuffer";
        oReq.onload = (e) => {
          if (oReq.status >= 200 && oReq.status < 300) {
            var arraybuffer = oReq.response;
            var data = new Uint8Array(arraybuffer);
            var arr = new Array();
            for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
            var bstr = arr.join("");
            workbook = XLSX.read(bstr, { type: "binary" });
            var worksheetname = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[worksheetname];
            var json = XLSX.utils.sheet_to_json(worksheet, { raw: true });

            json.forEach(item => {

              var arrayCheck = ['NAME', 'TAG', 'SIZE', 'SPEC', 'RATING', 'SET-POINT', 'AREA', 'LINE LOCATION', 'RANGE (Psi)',
                'RANGE(°F)', 'CALIBRATED NUMBER', 'TYPE', 'INSTRUMENT IDENTIFICATION', 'P&ID NUMBER', 'STATUS', 'REMARKS', 'CONDITION'];
              for (var i = 0; i < arrayCheck.length; i++) {
                
                if (item[arrayCheck[i]] == undefined) {
                  item[arrayCheck[i]] = 'N/A';
                }
              }
              var equipmetpart = {
                id: '',
                rev: '',
                name: item['NAME'],
                tag: item['TAG'],
                size: item['SIZE'],
                spec: item['SPEC'],
                rating: item['RATING'],
                setpoint: item['SET-POINT'],
                othername: '',
                area: item['AREA'],
                linelocation: item['LINE LOCATION'],
                rangep: item['RANGE (Psi)'],
                rangef: item['RANGE(°F)'],
                calibratedno: item['CALIBRATED NUMBER'],
                type: item['TYPE'],
                instrumentidentification: item['INSTRUMENT IDENTIFICATION'],
                equipmentcatname: 'N/A',
                equipmentcatid: '',
                additionalinfo: 'P&ID NUMBER: ' + item['P&ID NUMBER'] + ' STATUS: ' + item['STATUS'] + ' REMARKS: ' + item['REMARKS'] + ' CONDITION: ' + item['CONDITION'],
                equipmenttags: []
              }
              this.db.saveEquipmentpart(equipmetpart).then(res => {
                this._loadEquipmentparts();
              });
            })
            resolve('Finished generating JSON');
          } else {
            reject(console.log('XMLHttpRequest failed; error code:' + oReq.statusText));
          }
        }
        oReq.send();
      });
    }

  }

  faultreg(sparepart){
    var faultregistry = {
      id: Math.round((new Date()).getTime()).toString(),
      rev: '',
      datecreated: new Date(),
      location: '',
      faultid: 0,
      equipmentpartname: sparepart.name,
      description: '',
      equipmentpartid: sparepart.id,
      equipmentcatid: '',
      equipmentcatname: '',
      color: 'faulty',
      faculty: 'OGPOOC',
      tagname: sparepart.tag,
      tagid: '',
      status: true,
      department: '',
      datefixed: '',
      equipmenttag: '',
      staff: '',
      post: '',
      staffid: '',
      beepstatus: false,
      animateswitch: true,
      fixedstatus: false,
      name: '',
      operatorstatus: true,
      managerstatus: false,
      supervisorstatus: false
    }
    this.db.getfaultregistrys().then(res => {
      this.alert = false;
      if (res.length != 0) {
        res.forEach(item => {

          if (item.equipmentpartid == faultregistry.equipmentpartid) {
            this.alert = true;

          }
        });
      }
      if (this.alert == false) {
        let modal = this.modalCtrl.create('AddfaultregistryPage', { type: 'Equipment', faultregistry: faultregistry });
        modal.onDidDismiss((data) => {
          this._loadEquipmentparts();
        });
        modal.present();
      }
      else {
        const alert = this.alertCtrl.create({
          title: 'Fault Registry already exists for Sub Equipment',
          message: 'A Fault Registry already exists for this sub equipment: ' + faultregistry.equipmentpartname + ' with tag ' + faultregistry.tagname,
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel'
            },
          ]
        });
        alert.present();
      }
    });
  }

  pm(sparepart){
    var workorder = {
      id: Math.round((new Date()).getTime()).toString(),
      rev: '',
      name: '',
      datecreated: new Date(),
      datewo: new Date().toJSON().slice(0, 10).replace(/-/g, '-'),
      workorderno: 0,
      tagname: sparepart.tag,
      tagid: '',
      equipmentpartname: sparepart.name,
      equipmentpartid: sparepart.id,
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
      woid: '',
      equipmentcatid: '',
      equipmentcatname: '',
      equipmenttag: ''
    }
    this.db.getWorkorders().then(res => {
      this.alert = false;
      if (res.length != 0) {
        res.forEach(item => {

          if (item.equipmentpartid == workorder.equipmentpartid && item.worktypes == 'Preventive Maintenance' || item.equipmentcatid == workorder.equipmentcatid && item.worktypes == 'Work Order' && new Date(item.datewo).getTime() > new Date().getTime()) {
            this.alert = true;

          }
        });
      }
      if (this.alert == false) {
        let modal = this.modalCtrl.create('AddpreventivemaintenancePage', { type: 'Equipment', workorder: workorder });
        modal.onDidDismiss((data) => {
          this._loadEquipmentparts();
        });
        modal.present();
      }
      else {
        const alert = this.alertCtrl.create({
          title: 'Work Permit already exists for Sub Equipment',
          message: 'A Work Permit already exists for this sub equipment: ' + workorder.equipmentpartname + ' with tag ' + workorder.tagname,
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel'
            },
          ]
        });
        alert.present();
      }
    });
  }

  trackByName = (index, item) => {
    return item.id;
  }

  checkboxClicked(equipmentpart, event){
    if (event._value) {
      equipmentpart['selected'] = true;
    }
    else {
      equipmentpart['selected'] = false;
    }
    this.newEquipmentParts = this.equipmentparts.filter(data => data['selected'] == true)

    if (this.newEquipmentParts.length > 0) {
      this.tableCheck = true;
      event._value = true;
    }
    else {
      this.tableCheck = false;
    }
  }

  deleteSelected() {
    if (this.showButton == true) {
      const alert = this.alertCtrl.create({
        title: 'Delete Equipment Parts',
        message: 'Are you sure you want to delete Selected Equipment Parts ',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel'
          },
          {
            text: 'Confirm',
            handler: () => {
              this.newEquipmentParts.forEach(equipmentpart => {
                this.db.deleteEquipmentpart(equipmentpart)
                  .then((success: boolean) => {
                    this._loadEquipmentparts();
                    this.tableCheck = false;
                  });
              })
            }
          }
        ]
      });
      alert.present();
    }
  }


}
