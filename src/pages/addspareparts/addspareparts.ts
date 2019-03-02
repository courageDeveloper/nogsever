import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, Platform, NavParams } from 'ionic-angular';
import { Equipmentpart } from '../../models/equipmentpart';
import { PouchService } from '../../pouch-service/pouch.service';


/**
 * Generated class for the AddsparepartsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addspareparts',
  templateUrl: 'addspareparts.html',
})
export class AddsparepartsPage {
  public equipmentparts: Equipmentpart;
  add = false;
  title = 'Edit';
  search = false;
  sparePartsArray;
  sparePartsId;
  equipmentCatObject;
  names = [];
  activeCValve = false;
  activeMValve = false;
  activePValve = false;
  activeGuage = false;
  activeTransmitter = false;
  activeOther = false;
  showButton = false;
  localStorageItem;
  position;
  public user: any;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public db: PouchService, public navParams: NavParams, public platform: Platform) {
    if (this.navParams.get('type') == 'Add') {
      this.add = true;
      this.title = 'Add';
      this.equipmentparts = {
        id: Math.round((new Date()).getTime()).toString(),
        rev: '',
        name: '',
        size: '',
        spec: '',
        rating: '',
        tag: '',
        setpoint: '',
        othername: '',
        calibratedno: 0,
        type: '',
        additionalinfo: '',
        equipmentcatname: '',
        equipmentcatid: '',
        rangef: '',
        rangep: '',
        area: '',
        instrumentidentification: '',
        linelocation: '',
        equipmenttags: []
      }
    }
    else {
      this.equipmentparts = this.navParams.get('sparepart');
      if (this.equipmentparts.name == 'Control Valve') {
        this.activeCValve = true;
        this.activePValve = false;
        this.activeOther = false;
        this.activeGuage = false;
        this.activeTransmitter = false;
      }
      else if (this.equipmentparts.name == 'Presssure Safety Valve') {
        this.activePValve = true;
        this.activeCValve = false;
        this.activeMValve = false;
        this.activeOther = false;
        this.activeGuage = false;
        this.activeTransmitter = false;
      }
      else if (this.equipmentparts.name == 'Manual Valve') {
        this.activeMValve = true;
        this.activePValve = false;
        this.activeOther = false;
        this.activeGuage = false;
        this.activeTransmitter = false;
      }
      else if (this.equipmentparts.name == 'Manual Gauge') {
        this.activeGuage = true;
        this.activeMValve = false;
        this.activePValve = false;
        this.activeOther = false;
        this.activeCValve = false;
        this.activeTransmitter = false;
      }
      else if (this.equipmentparts.name == 'Transmitter') {
        this.activeTransmitter = true;
        this.activeGuage = false;
        this.activeMValve = false;
        this.activePValve = false;
        this.activeOther = false;
        this.activeCValve = false;
      }
      else {
        this.activeOther = true;
        this.activeCValve = false;
        this.activeMValve = false;
        this.activePValve = false;
        this.activeGuage = false;
        this.activeTransmitter = false;
      }
    }

    this.names = ['Control Valve', 'Presssure Safety Valve', 'Manual Valve', 'Manual Gauge', 'Transmitter', 'Other'];
  }

  ionViewDidLoad() {
    this.localStorageItem = JSON.parse(localStorage.getItem('user'));
    console.log('ionViewDidLoad AddsparepartsPage');
    this.db.getSupervisor(this.localStorageItem).then(item => {
      this.user = item;
      this.position = item.post;
      if (this.position == 'Operator') {
        this.showButton = true;
      }
    });
    this.db.getEquipmentcats().then(res => {
      this.sparePartsArray = [];
      this.sparePartsArray = res;
    })
  }

  selectSpareparts(newVal) {
    this.equipmentCatObject = newVal;
    if (this.add) {
      this.equipmentparts.equipmentcatname = newVal.name;
    }
    else {
      this.equipmentparts.equipmentcatname = newVal;
    }
  }

  submit() {
    if (this.add) {

      var arrayCheck = ['name', 'tag', 'size', 'spec', 'rating', 'setpoint', 'area', 'linelocation', 'rangep',
         'rangef','equipmentcatname', 'additionalinfo', 'calibratedno', 'type', 'instrumentidentification'];

      for (var i = 0; i < arrayCheck.length; i++) {
        console.log(this.equipmentparts[arrayCheck[i]]);
        if (this.equipmentparts[arrayCheck[i]] == '') {
          this.equipmentparts[arrayCheck[i]] = 'N/A';
        }
      }

      if (this.equipmentCatObject != undefined) {
        this.equipmentparts.equipmentcatid = this.equipmentCatObject.id;
      }
      if (this.equipmentparts.name == 'Other') {
        this.equipmentparts.name = this.equipmentparts.othername;
      }
      this.db.saveEquipmentpart(this.equipmentparts).then(res => {
        this.viewCtrl.dismiss(res);
        if (this.equipmentCatObject != undefined) {
          this.equipmentCatObject.equipmentparts.push(res.id);
        }
        this.db.updateEquipmentcat(this.equipmentCatObject).then(res => {

        });
      });

    }
    else {
      if (typeof this.equipmentCatObject == 'object') {
        if (this.equipmentCatObject != undefined) {
          this.equipmentparts.equipmentcatid = this.equipmentCatObject.id;
          this.equipmentparts.equipmentcatname = this.equipmentCatObject.name;
        }
        if (this.equipmentparts.name == 'Other') {
          this.equipmentparts.name = this.equipmentparts.othername;
        }
        this.db.updateEquipmentpart(this.equipmentparts).then(result => {
          this.viewCtrl.dismiss();
        });
      }
      else {
        this.db.updateEquipmentpart(this.equipmentparts).then(result => {
          this.viewCtrl.dismiss();
        });
      }

    }
  }

  getName(nam) {

    if (this.equipmentparts.name == 'Control Valve') {
      this.activeCValve = true;
      this.activePValve = false;
      this.activeOther = false;
      this.activeGuage = false;
      this.activeTransmitter = false;
    }
    else if (this.equipmentparts.name == 'Presssure Safety Valve') {
      this.activePValve = true;
      this.activeCValve = false;
      this.activeMValve = false;
      this.activeOther = false;
      this.activeGuage = false;
      this.activeTransmitter = false;
    }
    else if (this.equipmentparts.name == 'Manual Valve') {
      this.activeMValve = true;
      this.activePValve = false;
      this.activeOther = false;
      this.activeGuage = false;
      this.activeTransmitter = false;
    }
    else if (this.equipmentparts.name == 'Manual Gauge') {
      this.activeGuage = true;
      this.activeMValve = false;
      this.activePValve = false;
      this.activeOther = false;
      this.activeCValve = false;
      this.activeTransmitter = false;
    }
    else if (this.equipmentparts.name == 'Transmitter') {
      this.activeTransmitter = true;
      this.activeGuage = false;
      this.activeMValve = false;
      this.activePValve = false;
      this.activeOther = false;
      this.activeCValve = false;
    }
    else {
      this.activeOther = true;
      this.activeCValve = false;
      this.activeMValve = false;
      this.activePValve = false;
      this.activeGuage = false;
      this.activeTransmitter = false;
    }
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

}
