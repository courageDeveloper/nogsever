import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams, AlertController } from 'ionic-angular';
import { PouchService } from '../../pouch-service/pouch.service';
import { Equipmentcat } from '../../models/equipmentcat';
import * as XLSX from 'xlsx';
import * as _ from 'lodash'; // to help loop over files more succinctly
import * as papa from 'papaparse';
import { Http } from '@angular/http';

/**
 * Generated class for the EquipmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-equipment',
  templateUrl: 'equipment.html',
})
export class EquipmentPage {
  filteredEquipmentcats: Array<Equipmentcat> = [];
  public equipmentcats: Array<Equipmentcat> = [];
  files: FileList;
  convertFiles;
  show = false;
  showButton = false;
  localStorageItem;
  position;
  public user: any;
  alert = false;

  constructor(public navCtrl: NavController, private http: Http, public alertCtrl: AlertController, public db: PouchService, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.localStorageItem = JSON.parse(localStorage.getItem('user'));
    console.log('ionViewDidLoad EquipmentPage');
    this.db.getSupervisor(this.localStorageItem).then(item => {
      this.user = item;
      this.position = item.post;
      if (this.position == 'Manager' || this.position == 'Supervisor' || this.position == 'Admin') {
        this.showButton = true;
      }
    });
    this._loadEquipmentcats();
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
    this._loadEquipmentcats();
  }

  private _loadEquipmentcats(): void {
    this.db.getEquipmentcats()
      .then((equipmentcats: Array<Equipmentcat>) => {
        this.filteredEquipmentcats = equipmentcats;
        this.equipmentcats = equipmentcats;
      });
  }

  back() {
    this.navCtrl.pop();
  }

  newEquipmentcat() {
    let modal = this.modalCtrl.create('AddequipmentPage', { type: 'Add' });
    modal.onDidDismiss((data) => {
      if (data) {
        this._loadEquipmentcats();
      }
    });
    modal.present();
  }

  openEquipmentcat(equipment) {
    let modal = this.modalCtrl.create('AddequipmentPage', { type: 'Edit', equipment: equipment });
    modal.onDidDismiss((data) => {
      this._loadEquipmentcats();
    });
    modal.present();
  }

  filterEquipmentcats($event: any): void {
    const value: string = $event.target.value ? $event.target.value.toLowerCase() : '';
    this.filteredEquipmentcats = [];

    for (let equipmentcat of this.equipmentcats) {
      if (equipmentcat.name.toLowerCase().indexOf(value) !== -1 || equipmentcat.tag.toLowerCase().indexOf(value) !== -1 || equipmentcat.size.toLowerCase().indexOf(value) !== -1) {
        this.filteredEquipmentcats.push(equipmentcat);
      }
    }
  }

  deleteEquipmentcat(equipmentcat: Equipmentcat) {
    console.log(this.showButton);
    if (this.showButton == true) {
      const alert = this.alertCtrl.create({
        title: 'Delete Equipment category',
        message: 'Are you sure you want to delete Equipment category: ' + equipmentcat.name,
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel'
          },
          {
            text: 'Confirm',
            handler: () => {
              this.db.deleteEquipmentcat(equipmentcat)
                .then((success: boolean) => {
                  this._loadEquipmentcats();
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
    console.log(event);
    this.files = event.target.files;
    console.log(this.files);

    var reader: FileReader = new FileReader();
    reader.readAsDataURL(this.files[0]);
    console.log(reader);

    reader.onload = (e) => {
      this.convertFiles = reader.result;
      console.log(this.convertFiles);
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
              var arrayCheck = ['NAME', 'TAG', 'SIZE', 'SPEC', 'DESIGN CONDITION', 'MATERIAL', 'P&ID', 'DESIGN TEMPERATURE', 'CORROSION ALLOWANCE'];
              for (var i = 0; i < arrayCheck.length; i++) {
                console.log(item[arrayCheck[i]]);
                if (item[arrayCheck[i]] == undefined) {
                  item[arrayCheck[i]] = 'N/A';
                }
              }
              var equipmet = {
                id: Math.round((new Date()).getTime()).toString(),
                rev: '',
                name: item['NAME'],
                tag: item['TAG'],
                size: item['SIZE'],
                designcondition: item['DESIGN CONDITION'],
                designtemperature: item['DESIGN TEMPERATURE'],
                additionalinfo: 'MATERIAL: ' + item['MATERIAL'] + ' P&ID: ' + item['P&ID'] + ' CORROSION ALLOWANCE: ' + item['CORROSION ALLOWANCE'],
                equipmentparts: []
              }
              this.db.saveEquipmentcat(equipmet).then(res => {
                this._loadEquipmentcats();
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

  faultreg(equipment) {
    var faultregistry = {
      id: Math.round((new Date()).getTime()).toString(),
      rev: '',
      datecreated: new Date(),
      location: '',
      faultid: 0,
      equipmentpartname: '',
      description: '',
      equipmentpartid: '',
      equipmentcatid: equipment.id,
      equipmentcatname: equipment.name,
      color: 'faulty',
      faculty: 'OGPOOC',
      tagname: '',
      tagid: '',
      status: true,
      department: '',
      datefixed: '',
      equipmenttag: equipment.tag,
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

          if (item.equipmentcatid == faultregistry.equipmentcatid) {
            this.alert = true;

          }
        });
      }
      if (this.alert == false) {
        let modal = this.modalCtrl.create('AddfaultregistryPage', { type: 'Equipment', faultregistry: faultregistry });
        modal.onDidDismiss((data) => {
          this._loadEquipmentcats();
        });
        modal.present();
      }
      else {
        const alert = this.alertCtrl.create({
          title: 'Fault Registry already exists for Equipment',
          message: 'A Fault Registry already exists for this equipment: ' + faultregistry.equipmentcatname + ' with tag ' + faultregistry.equipmenttag,
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

  pm(equipment) {
    var workorder = {
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
      equipmentcatid: equipment.id,
      equipmentcatname: equipment.name,
      equipmenttag: equipment.tag
    }
    this.db.getWorkorders().then(res => {
      this.alert = false;
      if (res.length != 0) {
        res.forEach(item => {

          if (item.equipmentcatid == workorder.equipmentcatid && item.worktypes == 'Preventive Maintenance' || item.equipmentcatid == workorder.equipmentcatid && item.worktypes == 'Work Order' && new Date(item.datewo).getTime() > new Date().getTime()) {
            this.alert = true;

          }
        });
      }
      if (this.alert == false) {
        let modal = this.modalCtrl.create('AddpreventivemaintenancePage', { type: 'Equipment', workorder: workorder });
        modal.onDidDismiss((data) => {
          this._loadEquipmentcats();
        });
        modal.present();
      }
      else {
        const alert = this.alertCtrl.create({
          title: 'Work Permit already exists for Equipment',
          message: 'A Work Permit already exists for this equipment: ' + workorder.equipmentcatname + ' with tag ' + workorder.equipmenttag,
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

}
