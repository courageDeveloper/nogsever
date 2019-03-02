import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { Dailyreport } from '../../models/dailyreport';
import { PouchService } from '../../pouch-service/pouch.service';
/**
 * Generated class for the DailyreportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dailyreport',
  templateUrl: 'dailyreport.html',
})
export class DailyreportPage {
  public dailyreport: Dailyreport;
  @ViewChild(Slides) slides: Slides;
  startSlide;
  statuses;
  selectedGas: any;
  departments;
  selectedDepartment;
  add = false;
  title = 'Edit';
  search = false;
  disabled = false;
  localStorageItem;
  public user: any;
  position;

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: PouchService, public viewCtrl: ViewController) {
    this.localStorageItem = JSON.parse(localStorage.getItem('user'));

    if (this.navParams.get('type') == 'Add') {
      this.add = true;
      this.title = 'Add';

      this.dailyreport = {
        id: Math.round((new Date()).getTime()).toString(),
        rev: '',
        datecreated: new Date().toJSON().slice(0, 10).replace(/-/g, '-'),
        staffid: '',
        staffname: '',
        department: 'Mechanical',
        optrain1: '',
        optrain2: '',
        opsurgevessel: '',
        otnpdc: '',
        tgngc: '',
        tghp: '',
        tglp: '',
        tvfuelgas: '',
        gascompressor1: 'Running',
        gascompressor2: 'Standby',
        pt1: 'Standby',
        pt2: 'Standby',
        iaircompressora: 'Standby',
        iaircompressorb: 'Standby',
        gasgen1: 'Running',
        gasgen3: 'Running',
        gasgen4: 'Faulty',
        gasgen5: 'Faulty',
        dieselgenset: 'Running',
        dailyactivities: ''
      }
      
    }
    else {
      this.dailyreport = this.navParams.get('dailyreport');
    }
  }

  ionViewDidLoad() {
    this.db.getSupervisor(this.localStorageItem).then(item => {
      this.user = item;
      this.position = item.post;
      console.log(this.user);
      this.selectedDepartment = "Mechanical";
      if (this.position == 'Manager' || this.position == 'Admin') {
        this.disabled = true
      }
    });

    this.selectedGas = "Down";
    console.log('ionViewDidLoad DailyreportPage');
    this.statuses = ["Running", "Standby", "Faulty"];
    this.departments = ["Process Operations", "HSE", "Instrument", "Mechanical", "Electrical"];
  }

  ionViewDidEnter() {
    this.localStorageItem = JSON.parse(localStorage.getItem('user'));
    this.db.getSupervisor(this.localStorageItem).then(item => {
      this.user = item;
      this.position = item.post;
      if (this.position == 'Manager' || this.position == 'Admin') {
        this.disabled = true
      }
    });
  }


  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    this.slides.lockSwipes(true);
    this.startSlide = this.slides.isBeginning();
  }

  next() {
    this.slides.lockSwipes(false);
    this.slides.slideNext(500, true);
  }

  prev() {
    this.slides.lockSwipes(false);
    this.slides.slidePrev(500, true);
  }

  home() {
    if(this.position == 'Manager'){
    this.navCtrl.setRoot('HomePage');
    }
    else if(this.position == 'Supervisor'){
      this.navCtrl.setRoot('SupervisorhomePage');
    }
    else if(this.position == 'Admin'){
      this.navCtrl.setRoot('AdminHomePage');
    }
    else{
      this.navCtrl.setRoot('OperatorhomePage');
    }
  }

  submit() {
    console.log(this.user);
    if (this.add) {
      this.dailyreport.staffid = this.user.id;
      this.dailyreport.staffname = this.user.name;
      this.db.savedailyreport(this.dailyreport).then(res => {
        this.viewCtrl.dismiss();
      });
    }
    else {
      this.db.updatedailyreport(this.dailyreport).then(res => {
        this.viewCtrl.dismiss();
      });
    }
  }

  /* selectPMs(newVal) {
    this.pmName = newVal;
  } */

}
