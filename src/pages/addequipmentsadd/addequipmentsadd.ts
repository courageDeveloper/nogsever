import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, Platform, NavParams } from 'ionic-angular';
import { Equipmentsadd } from '../../models/equipmentsadd';
import { PouchService } from '../../pouch-service/pouch.service';


/**
 * Generated class for the AddsparepartsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addequipmentsadd',
  templateUrl: 'addequipmentsadd.html',
})
export class AddequipmentsaddPage {
  public equipmentsadds: Equipmentsadd;
  add = false;
  title = 'Edit';
  search = false;
  equipmentsCatArray;
  equipmentCatObject;
  equipmentsPartArray;
  equipmentPartObject;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public db: PouchService, public navParams: NavParams, public platform: Platform) {
    if (this.navParams.get('type') == 'Add') {
      this.add = true;
      this.title = 'Add';
      this.equipmentsadds = {
        id: Math.round((new Date()).getTime()).toString(),
        rev: '',
        tagname: '',
        equipmentcatname: '',
        equipmentcatid: '',
        equipmentpartid: '',
        equipmentpartname: ''
      }
    }
    else {
      this.equipmentsadds = this.navParams.get('equipmentsadd');
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddsparepartsPage');
    this.db.getEquipmentcats().then(res => {
      this.equipmentsCatArray = [];
      this.equipmentsCatArray = res;
    })
    this.db.getEquipmentparts().then(res => {
      this.equipmentsPartArray = [];
      this.equipmentsPartArray = res;
    });
  }

  selectEquipmentsCats(newVal) {
    this.equipmentCatObject = newVal;
    /* if(this.add){
    this.equipmentCatObject.equipmentparts.forEach(item => {
      this.db.getEquipmentpart(item).then(res => {
        this.equipmentsPartArray.push(res);
      })
    })
  } */
    if (this.add) {
      this.equipmentsadds.equipmentcatname = newVal.name;
    }
    else {
      this.equipmentsadds.equipmentcatname = newVal;
    }
  }

  selectEquipmentsParts(newVal) {
    this.equipmentPartObject = newVal;
    if (this.add) {
      this.equipmentsadds.equipmentpartname = newVal.name;
    }
    else {
      this.equipmentsadds.equipmentpartname = newVal;
    }
  }

  submit() {
    if (this.add) {
      this.equipmentsadds.equipmentcatid = this.equipmentCatObject.id
      this.equipmentsadds.equipmentpartid = this.equipmentPartObject.id
      this.db.saveEquipmentsadd(this.equipmentsadds).then(res => {
        this.viewCtrl.dismiss(res);
        this.equipmentPartObject.equipmenttags.push(res.id);
        this.db.updateEquipmentpart(this.equipmentPartObject).then(res => {

        });
      });
    }
    else {
      if(typeof this.equipmentCatObject == 'object'){
      this.equipmentsadds.equipmentcatid = this.equipmentCatObject.id
      this.equipmentsadds.equipmentcatname = this.equipmentCatObject.name;
    }
    else{
       this.equipmentsadds.equipmentcatid = this.equipmentsadds.equipmentcatid;
       this.equipmentsadds.equipmentcatname = this.equipmentsadds.equipmentcatname;
    }
    if(typeof this.equipmentPartObject == 'object'){
      this.equipmentsadds.equipmentpartid = this.equipmentPartObject.id
      this.equipmentsadds.equipmentpartname = this.equipmentPartObject.name;
    }
    else{
      this.equipmentsadds.equipmentpartid = this.equipmentsadds.equipmentpartid;
      this.equipmentsadds.equipmentpartname = this.equipmentsadds.equipmentpartname;
    }
      this.db.updateEquipmentsadd(this.equipmentsadds).then(result => {
        this.viewCtrl.dismiss();
      });
    }
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

}
