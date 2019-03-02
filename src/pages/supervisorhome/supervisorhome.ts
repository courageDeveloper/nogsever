import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Workpermit } from '../../models/workpermit';
import { PouchService } from '../../pouch-service/pouch.service';
import { Faultregistry } from '../../models/faultregistry';
import { Material } from '../../models/material';

/**
 * Generated class for the SupervisorhomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-supervisorhome',
  templateUrl: 'supervisorhome.html',
})
export class SupervisorhomePage {

  show: any = false;
  showWork: any = false;
  localStorageItem;
  position;
  name;
  positions;
  public user: any;
  filteredWorkpermitLength: any;
  filteredWorkorderLength: any;
  filteredWorkpermit: Array<Workpermit> = [];
  public workpermits: Array<Workpermit> = [];
  filteredFaultregistry: Array<Faultregistry> = [];
  public faultregistrys: Array<Faultregistry> = [];
  filteredFaultreistryLength: any;
  dailyWo: any;
  dailyWolength: any;
  currentDate;
  deptWorkpermits: any;
  deptWorkpermitslength: any;
  equipmentLength: any;
  faultRegistrylength: any;
  totalWolength: any;
  materialList: any;

  constructor(public navCtrl: NavController, public db: PouchService, public navParams: NavParams) {
    this.localStorageItem = JSON.parse(localStorage.getItem('user'));
    this.db.getSupervisor(this.localStorageItem).then(item => {
      this.user = item;
      this.name = item.name;
      this.positions = item.position;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SupervisorhomePage');
    this.localStorageItem = JSON.parse(localStorage.getItem('user'));
    console.log('ionViewDidLoad ViewworkpermitPage');
    this.db.getSupervisor(this.localStorageItem).then(item => {
      this.user = item;
    });

    this._loadWorkpermits();
    this._loadWorkorder();
    this._loadFaultregistry();
    this.dailyWorkorder();
    this.allWorkpermit();
    this.allEquipments();
    this.allFaultregistrys();
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
    this.allWorkpermit();
    this.allEquipments();
    this.allFaultregistrys();
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
        this.filteredFaultregistry = faultregistrys.filter(data => data.supervisorstatus == true);
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
        console.log(this.user)
        if (this.user.departments != 'HSE') {
          this.filteredWorkpermit = workpermits.filter(data => data.department == this.user.departments && data.sstatus == true);
          this.filteredWorkpermitLength = this.filteredWorkpermit.length;
        }
        else {
          this.filteredWorkpermit = workpermits.filter(data => data.hstatus == true);
          this.filteredWorkpermitLength = this.filteredWorkpermit.length;
          console.log(this.filteredWorkpermit);
        }
      });

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
      console.log(this.user.departments);
      if(this.user.departments != 'HSE'){
      this.deptWorkpermits = res.filter(data => data.department == this.user.departments);
      this.deptWorkpermitslength = this.deptWorkpermits.length;
      }
      else{
        this.deptWorkpermitslength = res.length;
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

  toggleSelection(index) {
    this.show = !this.show;
    this.showWork = false;
  }

  toggleSelection2(index) {
    this.showWork = !this.showWork;
    this.show = false;
  }

  openOperator() {
    this.navCtrl.push('OperatorsPage');
  }

  openRegistry() {
    this.navCtrl.push('FaultregistryPage');
    this.db.getfaultregistrys()
      .then((faultregistrys: Array<Faultregistry>) => {
        this.filteredFaultregistry = faultregistrys.filter(data => data.supervisorstatus == true);
        this.filteredFaultregistry.forEach(item => {
          item.supervisorstatus = false;
          this.db.updatefaultregistry(item).then(res => {
            this._loadFaultregistry();
          })
        })
      });
  }

  openWorkPermit() {
    this.navCtrl.push('ViewworkpermitPage');
    if (this.user.departments != 'HSE') {
      this.db.getWorkpermits()
        .then((workpermits: Array<Workpermit>) => {
          this.filteredWorkpermit = workpermits.filter(data => data.department == this.user.departments && data.sstatus == true);
          this.filteredWorkpermit.forEach(item => {
            item.sstatus = false;
            this.db.updateWorkpermit(item).then(res => {
              this._loadWorkpermits();
            });
          })
        })
    }
    else {
      this.db.getWorkpermits()
        .then((workpermits: Array<Workpermit>) => {
          this.filteredWorkpermit = workpermits.filter(data => data.hstatus == true);
          this.filteredWorkpermit.forEach(item => {
            item.hstatus = false;
            this.db.updateWorkpermit(item).then(res => {
              this._loadWorkpermits();
            });
          })
        })
    }
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

  openMaterial(){
    this.navCtrl.push('MaterialPage');
  }

  /* openPmdaily() {
    this.navCtrl.push('PreventivemaintenancePage', {type: 'daily'});
    this.db.getSupervisor(this.localStorageItem).then(data => {
      data.woalert = [];
      this.db.updateSupervisor(data).then(res => {
        this._loadWorkorder();
      })
    });
  } */

  openWorkorder() {
    this.navCtrl.push('WorkorderPage');
  }

  openDailyreport() {
    this.navCtrl.push('ViewdailyreportPage');
  }

  openSpareparts() {
    this.navCtrl.push('SparepartsPage');
  }

  openEquipments() {
    this.navCtrl.push('EquipmentPage');
  }

  openAddequipments() {
    this.navCtrl.push('EquipmentsaddPage');
  }

  openWorkerschedules() {
    this.navCtrl.push('WorkerschedulePage');
  }

  logOut() {
    localStorage.removeItem('user');
    this.navCtrl.push('LoginPage');
  }


}
