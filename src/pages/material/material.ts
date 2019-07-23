import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams, AlertController } from 'ionic-angular';
import { PouchService } from '../../pouch-service/pouch.service';
import { Material } from '../../models/material';
import * as XLSX from 'xlsx';
import * as _ from 'lodash'; // to help loop over files more succinctly
import * as papa from 'papaparse';
import { Http } from '@angular/http';

/**
 * Generated class for the materialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-material',
  templateUrl: 'material.html',
})
export class MaterialPage {
  filteredmaterial: Array<Material> = [];
  public material: Array<Material> = [];
  files: FileList;
  convertFiles;
  show = false;
  showButton = false;
  localStorageItem;
  position;
  public user: any;
  alert = false;
  newMaterials;
  tableCheck = false;

  constructor(public navCtrl: NavController, private http: Http, public alertCtrl: AlertController, public db: PouchService, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.localStorageItem = JSON.parse(localStorage.getItem('user'));
    console.log('ionViewDidLoad materialPage');
    this.db.getSupervisor(this.localStorageItem).then(item => {
      this.user = item;
      this.position = item.post;
      if (this.position == 'Manager' || this.position == 'Supervisor' || this.position == 'Admin') {
        this.showButton = true;
      }
    });
    this._loadmaterialcats();
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
    this._loadmaterialcats();
  }

  private _loadmaterialcats(): void {
    this.db.getmaterials()
      .then((material: Array<Material>) => {
        this.filteredmaterial = material;
        this.material = material;
      });
  }

  back() {
    this.navCtrl.pop();
  }

  newmaterialcat() {
    let modal = this.modalCtrl.create('AddmaterialPage', { type: 'Add' });
    modal.onDidDismiss((data) => {
      if (data) {
        this._loadmaterialcats();
      }
    });
    modal.present();
  }

  openmaterialcat(material) {
    let modal = this.modalCtrl.create('AddmaterialPage', { type: 'Edit', material: material });
    modal.onDidDismiss((data) => {
      this._loadmaterialcats();
    });
    modal.present();
  }

  filtermaterialcats($event: any): void {
    const value: string = $event.target.value ? $event.target.value.toLowerCase() : '';
    this.filteredmaterial = [];

    for (let material of this.material) {
      if (material.name.toLowerCase().indexOf(value) !== -1) {
        this.filteredmaterial.push(material);
      }
    }
  }

  deletematerialcat(material: Material) {
    
      const alert = this.alertCtrl.create({
        title: 'Delete material category',
        message: 'Are you sure you want to delete material category: ' + material.name,
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel'
          },
          {
            text: 'Confirm',
            handler: () => {
              this.db.deletematerial(material)
                .then((success: boolean) => {
                  this._loadmaterialcats();
                  this.tableCheck = false;
                });
            }
          }
        ]
      });
      alert.present();
    
  }

  activate() {
    this.show = true;
  }

  /* handleFiles(event) {
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
                materialparts: []
              }
              this.db.savematerialcat(equipmet).then(res => {
                this._loadmaterialcats();
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

  } */

  trackByName = (index, item) => {
    return item.id;
  }

  checkboxClicked(material, event) {
    if (event._value) {
      material['selected'] = true;
    }
    else {
      material['selected'] = false;
    }
    this.newMaterials = this.material.filter(data => data['selected'] == true)

    if (this.newMaterials.length > 0) {
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
        title: 'Delete Material',
        message: 'Are you sure you want to delete Selected Materials ',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel'
          },
          {
            text: 'Confirm',
            handler: () => {
              this.newMaterials.forEach(material => {
                this.db.deletematerial(material)
                  .then((success: boolean) => {
                    this._loadmaterialcats();
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
