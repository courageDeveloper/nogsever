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

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public db: PouchService, public navParams: NavParams, public platform: Platform) {
    if (this.navParams.get('type') == 'Add') {
      this.add = true;
      this.title = 'Add';
      this.equipmentparts = {
        id: Math.round((new Date()).getTime()).toString(),
        rev: '',
        name: '',
        equipmentcatname: '',
        equipmentcatid: '',
        equipmenttags: []
      }
    }
    else {
      this.equipmentparts = this.navParams.get('sparepart');
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddsparepartsPage');
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
    else{
      this.equipmentparts.equipmentcatname = newVal;
    }
  }

  submit() {
    if (this.add) {
      this.equipmentparts.equipmentcatid = this.equipmentCatObject.id
      this.db.saveEquipmentpart(this.equipmentparts).then(res => {
        this.viewCtrl.dismiss(res);
        this.equipmentCatObject.equipmentparts.push(res.id);
        this.db.updateEquipmentcat(this.equipmentCatObject).then(res => {

        });
      });
    }
    else {
      if(typeof this.equipmentCatObject == 'object'){
      this.equipmentparts.equipmentcatid = this.equipmentCatObject.id;
      this.equipmentparts.equipmentcatname = this.equipmentCatObject.name;
      this.db.updateEquipmentpart(this.equipmentparts).then(result => {
        this.viewCtrl.dismiss();
      });
      }
      else{
        this.db.updateEquipmentpart(this.equipmentparts).then(result => {
          this.viewCtrl.dismiss();
        });
      }
     
    }
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

}
