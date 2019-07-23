import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController } from 'ionic-angular';
import { Workpermit } from '../../models/workpermit';
import { PouchService } from '../../pouch-service/pouch.service';
import { Faultregistry } from '../../models/faultregistry';
import { Material } from '../../models/material';
import { LocalNotifications, ELocalNotificationTriggerUnit } from '@ionic-native/local-notifications'
import { PopupProvider } from '../../pouch-service/popup';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  show: any = false;
  showWork: any = false;
  localStorageItem;
  public user: any;
  name;
  position;
  filteredWorkpermitLength: any;
  filteredWorkpermit: Array<Workpermit> = [];
  public workpermits: Array<Workpermit> = [];
  filteredWorkorderLength: any;
  dailyWo: any;
  dailyWolength: any;
  currentDate;
  dailyallReport: any;
  deptWorkpermits: any;
  deptWorkpermitslength: any;
  dailyallReportlength: any;
  totalWolength: any;
  equipmentLength: any;
  faultRegistrylength: any;
  filteredFaultregistry: Array<Faultregistry> = [];
  public faultregistrys: Array<Faultregistry> = [];
  filteredFaultreistryLength: any;
  materialList: any;

  constructor(public navCtrl: NavController, private alertctrl: AlertController, private plt: Platform, public db: PouchService, private localNotification: LocalNotifications, public popUp: PopupProvider) {
    this.localStorageItem = JSON.parse(localStorage.getItem('user'));
    this.db.getSupervisor(this.localStorageItem).then(item => {
      this.user = item;
      this.name = item.name;
      this.position = item.position;
    });

    if (this.plt.is('cordova')) {
      this.plt.ready().then((res) => {
        this.localNotification.on('click').subscribe(notification => {
          let json = JSON.parse(notification.mydata);

          let alert = this.alertctrl.create({
            title: notification.title,
            subTitle: json.mydata
          });
          alert.present();
        })
      })
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SupervisorhomePage');
    this.localStorageItem = JSON.parse(localStorage.getItem('user'));
    this.db.getSupervisor(this.localStorageItem).then(item => {
      this.user = item;
      this.name = item.name;
      this.position = item.position;
    });

    this._loadWorkpermits();
    this._loadWorkorder();
    this._loadFaultregistry();
    this.dailyWorkorder();
    this.allReport();
    this.allWorkpermit();
    this.allEquipments();
    this.allFaultregistrys();
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
    this._loadWorkorder();
    this._loadFaultregistry();
    this.dailyWorkorder();
    this.allReport();
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
        this.filteredFaultregistry = faultregistrys.filter(data => data.managerstatus == true);
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
        this.filteredWorkpermit = workpermits.filter(data => data.mstatus == true || data.fixed == true);
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

  private allReport(): void {
    this.db.getdailyreports().then(res => {
      this.dailyallReport = res.filter(data => data.datecreated == new Date().toJSON().slice(0, 10).replace(/-/g, '-'));
      this.dailyallReportlength = this.dailyallReport.length;
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

  toggleSelection(index) {
    this.show = !this.show;
    this.showWork = false;
  }

  toggleSelection2(index) {
    this.showWork = !this.showWork;
    this.show = false;
  }

  openEngineer() {
    this.navCtrl.push('EngineersPage');
  }

  openRegistry() {
    this.navCtrl.push('FaultregistryPage');
    this.db.getfaultregistrys()
      .then((faultregistrys: Array<Faultregistry>) => {
        this.filteredFaultregistry = faultregistrys.filter(data => data.managerstatus == true);
        this.filteredFaultregistry.forEach(item => {
          item.managerstatus = false;
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

  openSpareparts() {
    this.navCtrl.push('SparepartsPage');
  }

  openMaterial() {
    this.navCtrl.push('MaterialPage');
  }

  openEquipments() {
    this.navCtrl.push('EquipmentPage');
  }

  openDailyreport() {
    this.navCtrl.push('ViewdailyreportPage');
  }

  openWorkerschedules() {
    this.navCtrl.push('WorkerschedulePage');
  }

  openWorkPermit() {
    this.navCtrl.push('ViewworkpermitPage');
    this.db.getWorkpermits()
      .then((workpermits: Array<Workpermit>) => {
        this.filteredWorkpermit = workpermits.filter(data => data.mstatus == true);
        this.filteredWorkpermit.forEach(item => {
          item.mstatus = false;
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

  genNotify() {
    alert("This Works");
    if (this.plt.is('cordova')) {
      this.localNotification.schedule({
        id: 1,
        title: 'Attention',
        text: 'Courage Notification',
        data: { mydata: 'My hidden message' },
        trigger: { in: 5, unit: ELocalNotificationTriggerUnit.SECOND },
        led: 'FF0000',
        sound: null
      });
    }
  }

}
