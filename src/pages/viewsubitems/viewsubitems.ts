import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, Platform, NavParams } from 'ionic-angular';
import { PouchService } from '../../pouch-service/pouch.service';
import { HttpserviceProvider } from '../../providers/httpservice';
import { Workorder } from '../../models/workorder';

/**
 * Generated class for the ViewsubitemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewsubitems',
  templateUrl: 'viewsubitems.html',
})
export class ViewsubitemsPage {
  public workorder: Workorder;
  localStorageItem;
  title;
  equipment: any;


  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public httpService: HttpserviceProvider, public navParams: NavParams, public platform: Platform, public db: PouchService) {

    this.title = "View"
    if (this.navParams.get('type') == 'View') {

      this.workorder = this.navParams.get('workorder');

    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad viewsubitemsPage');
    this.db.getEquipmentcat(this.workorder.equipmentcatid).then(data => {
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
