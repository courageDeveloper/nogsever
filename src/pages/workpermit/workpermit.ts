import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Slides } from 'ionic-angular';

/**
 * Generated class for the WorkpermitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-workpermit',
  templateUrl: 'workpermit.html',
})
export class WorkpermitPage {
  @ViewChild(Slides) slides: Slides;
  startSlide;
  filterPmNumber;
  pmArray;
  pmName: any;
  safetyPrecautions;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.slides.lockSwipes(true);
    this.pmArray = ["WONO-001", "PMNO-001", "WONO-002", "PMNO-002", "WONO-003", "PMNO-003"];
    this.filterPmNumber = ["WONO-001", "PMNO-001", "WONO-002", "PMNO-002", "WONO-003", "PMNO-003"];
    console.log('ionViewDidLoad WorkpermitPage');

    this.safetyPrecautions = "Safety Helmet,\n Safety Shoes,\n Safety Googles,\n Nose Mask,\n Gas Tests,\n Warning Signs,\n Additional Lighting,\n Work Platform Ladder,\n";
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

  selectPMs(newVal) {
    this.pmName = newVal;
  }

  prev() {
    this.slides.lockSwipes(false);
    this.slides.slidePrev(500, true);
  }

  home(){
    this.navCtrl.setRoot('OperatorhomePage');
  }

}
