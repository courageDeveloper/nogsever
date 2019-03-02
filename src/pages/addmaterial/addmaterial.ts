import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, Platform, NavParams } from 'ionic-angular';
import { Material } from '../../models/material';
import { PouchService } from '../../pouch-service/pouch.service';

/**
 * Generated class for the AddmaterialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addmaterial',
  templateUrl: 'addmaterial.html',
})
export class AddmaterialPage {
  public material: Material;
  add = false;
  title = 'Edit';
  search = false;
  showButton = false;
  localStorageItem;
  position;
  public user: any;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public db: PouchService, public navParams: NavParams, public platform: Platform) {
    if (this.navParams.get('type') == 'Add') {
      this.add = true;
      this.title = 'Add';
      this.material = {
        id: Math.round((new Date()).getTime()).toString(),
        rev: '',
        name: '',
        quantity: 0,
        date: new Date().toJSON().slice(0,10).replace(/-/g, '-')
      }
    }
    else {
      this.material = this.navParams.get('material');
    }
  }

  ionViewDidLoad() {
    this.localStorageItem = JSON.parse(localStorage.getItem('user'));
    console.log('ionViewDidLoad AddmaterialPage');
    this.db.getSupervisor(this.localStorageItem).then(item => {
      this.user = item;
      this.position = item.post;
      if (this.position == 'Operator') {
        this.showButton = true;
      }
    });
  }

  submit() {
    if (this.add) {
     
      this.db.savematerial(this.material).then(res => {
        this.viewCtrl.dismiss(res);
      });
    }
    else {
      this.db.updatematerial(this.material).then(result => {
        this.viewCtrl.dismiss();
      });
    }
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

}
