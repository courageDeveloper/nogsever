import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Workpermit } from '../../models/workpermit';
import { Faultregistry } from '../../models/faultregistry';
import { Supervisor } from '../../models/supervisor';
import { PouchService } from '../../pouch-service/pouch.service';
import { Material } from '../../models/material';

/**
 * Generated class for the OperatorhomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-operatorhome',
  templateUrl: 'operatorhome.html',
})
export class OperatorhomePage {
  show: any = false;
  showWork: any = false;
  localStorageItem;
  public user: any;
  name;
  position;
  filteredWorkpermitLength: any;
  filteredWorkorderLength: any;
  filteredWorkpermit: Array<Workpermit> = [];
  public workpermits: Array<Workpermit> = [];
  filteredFaultregistry: Array<Faultregistry> = [];
  public faultregistrys: Array<Faultregistry> = [];
  filteredFaultreistryLength: any;
  totalWolength: any;
  dailyWo: any;
  deptWorkpermits: any;
  dailyWolength: any;
  currentDate;
  deptWorkpermitslength: any;
  equipmentLength: any;
  faultRegistrylength: any;
  materialList: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: PouchService) {
    this.localStorageItem = JSON.parse(localStorage.getItem('user'));
    this.db.getSupervisor(this.localStorageItem).then(item => {
      console.log(item);
      this.user = item;
      this.name = item.name;
      this.position = item.position;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OperatorhomePage');
    this.localStorageItem = JSON.parse(localStorage.getItem('user'));
    console.log('ionViewDidLoad ViewworkpermitPage');
    this.db.getSupervisor(this.localStorageItem).then(item => {
      this.user = item;
    });

    this._loadWorkpermits();
    this._loadWorkorder();
    this._loadFaultregistry();
    this.dailyWorkorder();
    this.allEquipments();
    this.allFaultregistrys();
    this.allWorkpermit();
    this._loadMateriallist();
  }

  ionViewDidEnter() {
    this.localStorageItem = JSON.parse(localStorage.getItem('user'));
    console.log('ionViewDidLoad ViewworkpermitPage');
    this.db.getSupervisor(this.localStorageItem).then(item => {
      this.user = item;
    });

    this._loadWorkpermits();
    this._loadWorkorder();
    this._loadFaultregistry();
    this.dailyWorkorder();
    this.allEquipments();
    this.allFaultregistrys();
    this.allWorkpermit();
    this._loadMateriallist();
  }

  private _loadWorkorder(): void {
    this.localStorageItem = JSON.parse(localStorage.getItem('user'));
    this.db.getSupervisor(this.localStorageItem).then(item => {
      this.filteredWorkorderLength = item.woalert.length;
    });
  }

  private _loadFaultregistry() {
    this.db.getfaultregistrys()
      .then((faultregistrys: Array<Faultregistry>) => {
        this.filteredFaultregistry = faultregistrys.filter(data => data.operatorstatus == true);
        this.filteredFaultreistryLength = this.filteredFaultregistry.length;
      })
  }

  private _loadMateriallist() {
    this.db.getmaterials()
      .then((materialList: Array<Material>) => {
        this.materialList = materialList.length;
      })
  }

  private _loadWorkpermits(): void {
    this.db.getWorkpermits()
      .then((workpermits: Array<Workpermit>) => {
        this.filteredWorkpermit = workpermits.filter(data => data.permitholderid == this.user.id && data.sastatus == true || data.mastatus == true || data.hastatus == true);
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

  private allWorkpermit(): void {
    this.db.getWorkpermits().then(res => {
      this.deptWorkpermits = res.filter(data => data.department == this.user.departments);
      this.deptWorkpermitslength = this.deptWorkpermits.length;
    })
  }


  toggleSelection(index) {
    this.show = !this.show;
    this.showWork = false;
    console.log(this.show);
  }

  toggleSelection2(index) {
    this.showWork = !this.showWork;
    this.show = false;
    console.log(this.show);
  }

  openEngineer() {
    this.navCtrl.push('EngineersPage');
  }

  openRegistry() {
    this.navCtrl.push('FaultregistryPage');
    this.db.getfaultregistrys()
      .then((faultregistrys: Array<Faultregistry>) => {
        this.filteredFaultregistry = faultregistrys.filter(data => data.operatorstatus == true);
        this.filteredFaultregistry.forEach(item => {
          item.operatorstatus = false;
          this.db.updatefaultregistry(item).then(res => {
            this._loadFaultregistry();
          })
        })
      });
  }

  openPm() {
    this.navCtrl.push('PreventivemaintenancePage');
    this.db.getSupervisor(this.localStorageItem).then(data => {
      data.woalert = [];
      this.db.updateSupervisor(data).then(res => {
        this._loadWorkorder();
      })
    });
  }

  openWorkorder() {
    this.navCtrl.push('WorkorderPage');
  }

  openMaterial(){
    this.navCtrl.push('MaterialPage');
  }

  openSpareparts() {
    this.navCtrl.push('SparepartsPage');
  }

  openAddequipments() {
    this.navCtrl.push('EquipmentsaddPage');
  }

  openEquipments() {
    this.navCtrl.push('EquipmentPage');
  }

  openWorkerschedules() {
    this.navCtrl.push('WorkerschedulePage');
  }

  openDailyreport() {
    this.navCtrl.push('ViewdailyreportPage');
  }

  openWorkPermit() {
    this.navCtrl.push('ViewworkpermitPage');
    this.db.getWorkpermits()
      .then((workpermits: Array<Workpermit>) => {
        this.filteredWorkpermit = workpermits.filter(data => data.permitholderid == this.user.id && data.sastatus == true || data.mastatus == true || data.hastatus == true);

        this.filteredWorkpermit.forEach(item => {
          item.sastatus = false;
          item.mastatus = false;
          item.hastatus = false;
          this.db.updateWorkpermit(item).then(res => {
            this._loadWorkpermits();
          });
        })
      })
  }

  dailyWorkPermit() {
    this.navCtrl.push('ViewworkpermitPage');
  }

  logOut() {
    localStorage.removeItem('user');
    this.navCtrl.push('LoginPage');
  }

}
