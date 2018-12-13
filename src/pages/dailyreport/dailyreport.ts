import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Slides } from 'ionic-angular';

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
  @ViewChild(Slides) slides: Slides;
  startSlide;
  statuses;
  selectedGas: any;
  departments;
  selectedDepartment;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.selectedGas = "Down";
    this.selectedDepartment = "Mechanical";
    console.log('ionViewDidLoad DailyreportPage');
    this.statuses = ["Running", "Standby", "Faulty"];
    this.departments = ["Process Operations", "HSE", "Instrument", "Mechanical", "Electrical"];
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
    this.navCtrl.setRoot('HomePage');
  }

  /* selectPMs(newVal) {
    this.pmName = newVal;
  } */

}
