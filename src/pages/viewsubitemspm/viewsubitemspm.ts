import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, Platform, NavParams } from 'ionic-angular';
import { PouchService } from '../../pouch-service/pouch.service';
import { HttpserviceProvider } from '../../providers/httpservice';
import { PreventiveMaintenance } from '../../models/preventivemaintenance';

/**
 * Generated class for the ViewsubitemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewsubitemspm',
  templateUrl: 'viewsubitemspm.html',
})
export class ViewsubitemspmPage {
  public preventivemaintenance: PreventiveMaintenance;
  localStorageItem;
  title;
  equipment: any;


  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public httpService: HttpserviceProvider, public navParams: NavParams, public platform: Platform, public db: PouchService) {

    this.title = "View"
    if (this.navParams.get('type') == 'View') {

      this.preventivemaintenance = this.navParams.get('preventivemaintenance');
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad viewsubitemspmPage');
    this.db.getEquipmentcat(this.preventivemaintenance.equipmentcatid).then(data => {
      this.equipment = data.name;
    });
  }

  ionViewDidEnter() {
    this.localStorageItem = JSON.parse(localStorage.getItem('user'));
  }


  cancel() {
    this.viewCtrl.dismiss();
  }

  trackByName = (index, item) => {
    return item.id;
  }

}
