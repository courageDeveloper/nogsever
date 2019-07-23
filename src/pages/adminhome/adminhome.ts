import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Workpermit } from '../../models/workpermit';
import { PouchService } from '../../pouch-service/pouch.service';
import { Material } from '../../models/material';
import { PopupProvider } from '../../pouch-service/popup';

@IonicPage()
@Component({
  selector: 'page-adminhome',
  templateUrl: 'adminhome.html'
})
export class AdminHomePage {
  show: any = false;
  showWork: any = false;
  localStorageItem;
  public user: any;
  filteredWorkpermitLength: any;
  filteredWorkpermit: Array<Workpermit> = [];
  public workpermits: Array<Workpermit> = [];
  dailyWo: any;
  dailyWolength: any;
  totalWolength: any;
  currentDate;
  faultRegistrylength: any;
  deptWorkpermits: any;
  equipmentLength: any;
  deptWorkpermitslength: any;
  dailyallReportlength: any;
  dailyallReport: any;
  materialList: any;

  constructor(public navCtrl: NavController, public db: PouchService, public popUp: PopupProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminhomePage');
    this.localStorageItem = JSON.parse(localStorage.getItem('user'));

    this.db.getSupervisor(this.localStorageItem).then(item => {
      this.user = item;
    });

    this._loadWorkpermits();
    this.dailyWorkorder();
    this.allWorkpermit();
    this.allEquipments();
    this.allFaultregistrys();
    this.allReport();
    this._loadMateriallist();
  }

  ionViewDidEnter() {
    this.popUp.displayPopUp();
    this.localStorageItem = JSON.parse(localStorage.getItem('user'));
    console.log('ionViewDidLoad ViewworkpermitPage');
    this.db.getSupervisor(this.localStorageItem).then(item => {
      this.user = item;
    });

    this._loadWorkpermits();
    this.dailyWorkorder();
    this.allWorkpermit();
    this.allEquipments();
    this.allFaultregistrys();
    this.allReport();
    this._loadMateriallist();
  }

  private _loadWorkpermits(): void {
    this.db.getWorkpermits()
      .then((workpermits: Array<Workpermit>) => {
        this.filteredWorkpermit = workpermits.filter(data => data.astatus == true || data.fixed == true);
        this.filteredWorkpermitLength = this.filteredWorkpermit.length;
      })
  }


  private dailyWorkorder(): void {
    this.db.getWorkorders().then((res: any) => {
      this.totalWolength = res.length;
      if (this.currentDate == undefined) {
        this.dailyWo = res.filter(data => new Date(data.datecreated).toJSON().slice(0, 10).replace(/-/g, '-') == new Date().toJSON().slice(0, 10).replace(/-/g, '-'));
        this.dailyWolength = this.dailyWo.length;
      }
      else {
        this.dailyWo = res.filter(data => new Date(data.datecreated).toJSON().slice(0, 10).replace(/-/g, '-') == this.currentDate);
        this.dailyWolength = this.dailyWo.length;
      }
    })
  }

  private allWorkpermit(): void {
    this.db.getWorkpermits().then(res => {
        this.deptWorkpermitslength = res.length;
    })
  }

  private allEquipments(): void {
    this.db.getEquipmentcats().then(res => {
      this.equipmentLength = res.length;
    })
  }

  private allFaultregistrys(): void {
    this.db.getfaultregistrys().then(res => {
      this.faultRegistrylength = res.length;
    })
  }

  private _loadMateriallist() {
    this.db.getmaterials()
      .then((materialList: Array<Material>) => {
        this.materialList = materialList.length;
      })
  }

  private allReport(): void {
    this.db.getdailyreports().then(res => {
       this.dailyallReport = res.filter(data => data.datecreated == new Date().toJSON().slice(0, 10).replace(/-/g, '-'));
       this.dailyallReportlength = this.dailyallReport.length;
     })
   }

  toggleSelection(index) {
    this.show = !this.show;
    this.showWork = false;
  }

  toggleSelection2(index) {
    this.showWork = !this.showWork;
    this.show = false;
  }

  openManager() {
    this.navCtrl.push('ManagersPage');
  }

  openSupervisor() {
    this.navCtrl.push('EngineersPage')
  }

  openOperator() {
    this.navCtrl.push('OperatorsPage')
  }

  openDailyreport() {
    this.navCtrl.push('ViewdailyreportPage');
  }

  openEngineer() {
    this.navCtrl.push('EngineersPage');
  }

  openMaterial(){
    this.navCtrl.push('MaterialPage');
  }

  openRegistry() {
    this.navCtrl.push('FaultregistryPage');
  }

  openPm() {
    this.navCtrl.push('PreventivemaintenancePage');
  }

  openWorkorder() {
    this.navCtrl.push('WorkorderPage');
  }

  openSpareparts() {
    this.navCtrl.push('SparepartsPage');
  }

  openEquipments() {
    this.navCtrl.push('EquipmentPage');
  }

  openWorkerschedules() {
    this.navCtrl.push('WorkerschedulePage');
  }

  openWorkPermit() {
    this.navCtrl.push('ViewworkpermitPage');
    this.db.getWorkpermits()
      .then((workpermits: Array<Workpermit>) => {
        this.filteredWorkpermit = workpermits.filter(data => data.astatus == true);
        this.filteredWorkpermit.forEach(item => {
          item.astatus = false;
          item.fixed = false;
          this.db.updateWorkpermit(item).then(res => {
            this._loadWorkpermits();
          });
        })
      })
  }

  dailyWorkPermit() {
    this.navCtrl.push('ViewworkpermitPage');
  }

  dailyWO() {
    this.navCtrl.push('DailyworkorderPage');
  }

  dailyReport() {
    this.navCtrl.push('DailyreportPage');
  }

  logOut() {
    localStorage.removeItem('user');
    this.navCtrl.push('LoginPage');
  }

}
