import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, Platform, NavParams, AlertController } from 'ionic-angular';
import { PouchService } from '../../pouch-service/pouch.service';
import { PreventiveMaintenance } from '../../models/preventivemaintenance';
import { HttpserviceProvider } from '../../providers/httpservice';
import { trigger, style, transition, animate, state, keyframes, query, stagger } from '@angular/animations';
import { Observable } from 'rxjs/Rx';
import { map } from 'rxjs/operators';
import * as XLSX from 'xlsx';
import * as _ from 'lodash'; // to help loop over files more succinctly

/**
 * Generated class for the NewpreventivemaintenancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newpreventivemaintenance',
  templateUrl: 'newpreventivemaintenance.html',
  animations: [
    trigger('elementState', [
      state('false', style({
        opacity: 1
      })),
      state('true', style({
        opacity: 0
      })),
      transition('false => true', animate('500ms ease-in')),
      transition('true => false', animate('500ms ease-out'))
    ])
  ]
})
export class NewpreventivemaintenancePage {
  filteredPreventivemaintenance: Array<PreventiveMaintenance> = [];
  public preventivemaintenances: Array<PreventiveMaintenance> = [];
  localStorageItem;
  position;
  files: FileList;
  public user: any;
  show = false;
  myClasses;
  High
  medium;
  showButton = false;
  newArray;
  low;
  convertFiles;
  state;
  filterManager;
  filterHse;
  filterAreaSupervisor;
  filterOperator;
  supervisorArray;
  pmno

  constructor(public navCtrl: NavController, private platform: Platform, public httpService: HttpserviceProvider, public alertCtrl: AlertController, public db: PouchService, public navParams: NavParams, public modalCtrl: ModalController) {

  }

  ionViewDidLoad() {
    this.localStorageItem = JSON.parse(localStorage.getItem('user'));
    console.log('ionViewDidLoad NewpreventivemaintenancePage');
    this.db.getSupervisor(this.localStorageItem).then(item => {
      this.user = item;
      this.position = item.post;
      if (this.position == 'Operator' || this.position == 'Admin') {
        this.show = true
      }
    });

    //this._loadPreventivemaintenances();
    /*  this.loadAlarm();
     this.loadAlarmWO(); */
  }

  ionViewDidEnter() {
    this.localStorageItem = JSON.parse(localStorage.getItem('user'));
    this.db.getSupervisor(this.localStorageItem).then(item => {
      this.user = item;
      this.position = item.post;
      if (this.position == 'Operator' || this.position == 'Admin') {
        this.show = true
      }
    });

    this._loadPreventivemaintenances();
    this.loadAlarm();
    this.loadAlarmWO();

  }

  private _loadPreventivemaintenances(): void {

    /* console.log(this.db.getBanners());
    this.db.getBanners().subscribe(banners => {
      console.log(banners)
    }); */

    this.db.getPreventivemaintenances()
      .then((preventivemaintenances: Array<PreventiveMaintenance>) => {
        /*  if (preventivemaintenances.length != 0) {
           this.pmno = preventivemaintenances[0].pmno + 1;
         }
         else {
           this.pmno = 1;
         }
         console.log(this.pmno) */
        this.filteredPreventivemaintenance = preventivemaintenances.filter(data => data.department == this.user.departments || this.user.post == 'Manager' || this.user.post == 'Admin' || this.user.departments == 'HSE');
        this.preventivemaintenances = preventivemaintenances.filter(data => data.department == this.user.departments || this.user.post == 'Manager' || this.user.post == 'Admin' || this.user.departments == 'HSE');
        this.filteredPreventivemaintenance.forEach(preventivemaintenance => {
          if (preventivemaintenance.beepstatus == true) {
            setInterval(() => {
              preventivemaintenance.animateswitch = "false";
            }, 500)
            setInterval(() => {
              preventivemaintenance.animateswitch = "true";
            }, 1000)
          }
        })
      })

    /*  this.db.getPreventivemaintenances().then(data => {
       
     }); */
  }

  loadAlarm() {
    this.db.getPreventivemaintenances().then(items => {
      items = items.filter(data => data.frequencyspandate != "");

      items.forEach(preventivemaintenance => {
        var spanDate = new Date(preventivemaintenance.frequencyspandate);
        spanDate.setSeconds(0, 0);
        var currentDate = new Date();
        currentDate.setSeconds(0, 0);
        //currentDate = currentDate.split(' ').slice(0, 4).join(' ');

        if (spanDate.toUTCString() == currentDate.toUTCString()) {
          preventivemaintenance.beepstatus = true;
          preventivemaintenance.animateswitch = 'true';
          preventivemaintenance.status = false;
          preventivemaintenance.dstatus = false;
          preventivemaintenance.gstatus = false;
          preventivemaintenance.frequencydate = new Date();
          var someDate = new Date();
          var numberOfHoursToAdd = preventivemaintenance.frequency;
          var addedDate = someDate.getHours() + Number(numberOfHoursToAdd);
          preventivemaintenance.frequencyspandate = someDate.setHours(addedDate);
          this._loadPreventivemaintenances();
          this.db.updatePreventivemaintenance(preventivemaintenance).then(data => {

            //Send email when date is due.
            this.db.getSupervisors().then(supervisors => {
              this.filterManager = supervisors.filter(data => data.post == 'Manager');
              this.filterHse = supervisors.filter(data => data.departments == 'HSE');
              this.filterAreaSupervisor = supervisors.filter(data => data.post == 'Supervisor' && data.departments == preventivemaintenance.department);
              if (preventivemaintenance.responsibility == 'Operator') {
                this.filterOperator = supervisors.filter(data => data.post == 'Operator' && data.departments == preventivemaintenance.department);
              }

              this.supervisorArray = [];
              this.filterManager.forEach(item => {
                this.supervisorArray.push(item.email);
              });
              this.filterHse.forEach(item => {
                this.supervisorArray.push(item.email);
              });
              this.filterAreaSupervisor.forEach(item => {
                this.supervisorArray.push(item.email);
              });
              if (preventivemaintenance.responsibility == 'Operator') {
                this.filterOperator.forEach(item => {
                  this.supervisorArray.push(item.email);
                });
              }

              var emailInfo = {
                name: preventivemaintenance.staff,
                department: preventivemaintenance.department,
                email: this.supervisorArray,
                phoneNumber: this.user.mobile,
                position: preventivemaintenance.post,
                pmno: preventivemaintenance.pmno,
                maintenanceitem: preventivemaintenance.maintenanceitem,
                description: preventivemaintenance.description,
                location: preventivemaintenance.exactlocation,
                facility: preventivemaintenance.faculty,
                priority: preventivemaintenance.priority,
                type: 'pmalarm',
                datecreated: preventivemaintenance.datecreated,
                frequencydate: preventivemaintenance.frequencydate,
                datewo: preventivemaintenance.datewo,
                responsibility: preventivemaintenance.responsibility
              }

              this.httpService.sendEmailworkorder(emailInfo).subscribe(res => {

              });

              //if (this.platform.is('cordova')) {
              this.httpService.workpermitNotification(emailInfo).subscribe(res => {
              })
              //}

            });

          });

        }
      });
    });
    this.db.getWorkpermits().then(items => {
      items.forEach(workpermit => {
        if (workpermit['wostatus'] != undefined) {
          if (workpermit['wostatus'] == 'Approved' && workpermit['gstatus'] == true) {

            this.db.getPreventivemaintenance(workpermit['woid']).then(preventivemaintenance => {
              if (preventivemaintenance != undefined) {
                preventivemaintenance.status = false;
                preventivemaintenance.dstatus = false;
                preventivemaintenance.beepstatus = false;
                preventivemaintenance.animateswitch = "false";
                this.db.updatePreventivemaintenance(preventivemaintenance).then(res => {
                  this.db.getWorkpermits().then(items => {
                    items = items.filter(item => item['gstatus'] == true && item['wostatus'] == 'Approved');

                    items.forEach(item => {
                      item['gstatus'] = false;
                      this.db.updateWorkpermit(item);
                    })
                  })
                });
              }
            })
          }
          else {
            console.log('Not yet active');
          }
        }
      })
    });
  }

  loadAlarmWO() {
    this.db.getPreventivemaintenances().then(items => {
      items = items.filter(data => data.frequencyspandate == "");

      items.forEach(preventivemaintenance => {
        var woDate = new Date(preventivemaintenance.datewo).toUTCString();
        woDate = woDate.split(' ').slice(0, 4).join(' ');
        var currentDate = new Date().toUTCString();
        currentDate = currentDate.split(' ').slice(0, 4).join(' ');

        if (woDate == currentDate) {
          preventivemaintenance.beepstatus = true;
          preventivemaintenance.animateswitch = 'true';
          preventivemaintenance.status = false;
          preventivemaintenance.dstatus = false;
          preventivemaintenance.gstatus = false;
          preventivemaintenance.datewo = '';
          this._loadPreventivemaintenances();
          this.db.updatePreventivemaintenance(preventivemaintenance).then(data => {

            //Send email when date is due.
            this.db.getSupervisors().then(supervisors => {
              this.filterManager = supervisors.filter(data => data.post == 'Manager');
              this.filterHse = supervisors.filter(data => data.departments == 'HSE');
              this.filterAreaSupervisor = supervisors.filter(data => data.post == 'Supervisor' && data.departments == preventivemaintenance.department);
              if (preventivemaintenance.responsibility == 'Operator') {
                this.filterOperator = supervisors.filter(data => data.post == 'Operator' && data.departments == preventivemaintenance.department);
              }

              this.supervisorArray = [];
              this.filterManager.forEach(item => {
                this.supervisorArray.push(item.email);
              });
              this.filterHse.forEach(item => {
                this.supervisorArray.push(item.email);
              });
              this.filterAreaSupervisor.forEach(item => {
                this.supervisorArray.push(item.email);
              });
              if (preventivemaintenance.responsibility == 'Operator') {
                this.filterOperator.forEach(item => {
                  this.supervisorArray.push(item.email);
                });
              }

              var emailInfo = {
                name: preventivemaintenance.staff,
                department: preventivemaintenance.department,
                email: this.supervisorArray,
                phoneNumber: this.user.mobile,
                position: preventivemaintenance.post,
                pmno: preventivemaintenance.pmno,
                description: preventivemaintenance.description,
                location: preventivemaintenance.exactlocation,
                facility: preventivemaintenance.faculty,
                priority: preventivemaintenance.priority,
                type: 'alarmwo',
                datecreated: preventivemaintenance.datecreated,
                frequencydate: preventivemaintenance.frequencydate,
                datewo: preventivemaintenance.datewo,
                responsibility: preventivemaintenance.responsibility
              }

              this.httpService.sendEmailworkorder(emailInfo).subscribe(res => {

              });

              //if (this.platform.is('cordova')) {
              this.httpService.workpermitNotification(emailInfo).subscribe(res => {
              })
              //}

            });
          })
        }
      })
    })
    this.db.getWorkpermits().then(items => {
      items.forEach(workpermit => {
        if (workpermit['wostatus'] != undefined) {
          if (workpermit['wostatus'] == 'Approved' && workpermit['gstatus'] == true) {

            this.db.getPreventivemaintenance(workpermit['woid']).then(preventivemaintenance => {
              if (preventivemaintenance != undefined) {
                preventivemaintenance.status = false;
                preventivemaintenance.dstatus = false;
                preventivemaintenance.beepstatus = false;
                preventivemaintenance.animateswitch = "false";
                this.db.updatePreventivemaintenance(preventivemaintenance).then(res => {
                  this.db.getWorkpermits().then(items => {
                    items = items.filter(item => item['gstatus'] == true && item['wostatus'] == 'Approved');

                    items.forEach(item => {
                      item['gstatus'] = false;
                      this.db.updateWorkpermit(item);
                    })
                  })
                });
              }
            })
          }
          else {
            console.log('Not yet active');
          }
        }
      })
    });
  }

  back() {
    this.navCtrl.pop();
  }

  filterWorkorders($event: any): void {
    const value: string = $event.target.value ? $event.target.value.toLowerCase() : '';
    this.filteredPreventivemaintenance = [];

    for (let preventivemaintenance of this.preventivemaintenances) {
      if (preventivemaintenance.name.toLowerCase().indexOf(value) !== -1) {
        this.filteredPreventivemaintenance.push(preventivemaintenance);
      }
    }
  }

  newWorkorder() {
    let modal = this.modalCtrl.create('AddnewpreventivemaintenancePage', { type: 'Add' });
    modal.onDidDismiss((data) => {
      if (data) {
        this._loadPreventivemaintenances();
      }
    });
    modal.present();
  }

  openWorkorder(preventivemaintenance) {
    let modal = this.modalCtrl.create('AddnewpreventivemaintenancePage', { type: 'Edit', preventivemaintenance: preventivemaintenance });
    modal.onDidDismiss((data) => {
      this._loadPreventivemaintenances();
    });
    modal.present();
  }

  ackWo(preventivemaintenance) {
    preventivemaintenance.status = true;
    preventivemaintenance.dstatus = false;
    this.db.updatePreventivemaintenance(preventivemaintenance).then(res => {

    })
  }

  disackWo(preventivemaintenance) {
    preventivemaintenance.dstatus = true;
    preventivemaintenance.status = false;
    this.db.updatePreventivemaintenance(preventivemaintenance).then(res => {

    })
  }

  navPtw(preventivemaintenance) {

    preventivemaintenance.woid = preventivemaintenance.id;
    preventivemaintenance.dstatus = true;
    this.db.updatePreventivemaintenance(preventivemaintenance).then(res => {
      preventivemaintenance.id = Math.round((new Date()).getTime()).toString();
      preventivemaintenance.rev = "";
      this.navCtrl.push('WorkpermitPage', { type: 'Workorder', workorder: preventivemaintenance })
    })
  }

  deleteWorkorder(workorder: PreventiveMaintenance) {
    if (this.position == 'Supervisor') {
      const alert = this.alertCtrl.create({
        title: 'Delete Preventive Maintenance',
        message: 'Are you sure you want to delete Preventive Maintenance: ' + workorder.pmno,
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel'
          },
          {
            text: 'Confirm',
            handler: () => {
              this.db.deletePreventivemaintenance(workorder)
                .then((success: boolean) => {
                  this._loadPreventivemaintenances();
                });
            }
          }
        ]
      });
      alert.present();
    }
  }

  trackByName = (index, item) => {
    return item.id;
  }

  activate() {
    this.showButton = true;
  }

  handleFiles(event) {
    this.files = event.target.files;

    var reader: FileReader = new FileReader();
    reader.readAsDataURL(this.files[0]);

    reader.onload = (e) => {
      this.convertFiles = reader.result;

      return new Promise((resolve, reject) => {
        var url = this.convertFiles;
        var oReq = new XMLHttpRequest();
        var workbook: any;
        oReq.open("GET", url, true);
        oReq.responseType = "arraybuffer";
        oReq.onload = (e) => {
          if (oReq.status >= 200 && oReq.status < 300) {
            var arraybuffer = oReq.response;
            var data = new Uint8Array(arraybuffer);
            var arr = new Array();
            for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
            var bstr = arr.join("");
            workbook = XLSX.read(bstr, { type: "binary" });
            var worksheetname = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[worksheetname];
            var json = XLSX.utils.sheet_to_json(worksheet, { raw: true });

            json.forEach(item => {
              var arrayCheck = ['FREQUENCY', 'MAINTENANCE ITEMS', 'STEPS', 'EQUIPMENTS', 'PMNO'];
              for (var i = 0; i < arrayCheck.length; i++) {

                if (item[arrayCheck[i]] == undefined) {
                  item[arrayCheck[i]] = 'N/A';
                }
              }

              setTimeout(() => {
                var preventiveMaintenance = {
                  id: '',
                  rev: '',
                  pmno: item['PMNO'],
                  frequency: item['FREQUENCY'],
                  maintenanceitem: item['MAINTENANCE ITEMS'],
                  steps: item['STEPS'],
                  equipmentcatname: item['EQUIPMENTS'],
                  staffid: this.localStorageItem,
                  staff: this.user.name,
                  department: this.user.departments,
                  post: this.user.post,
                  datecreated: new Date(),
                  datewo: new Date().toJSON().slice(0, 10).replace(/-/g, '-'),
                  tagname: '',
                  tagid: '',
                  equipmentpartname: '',
                  equipmentpartid: '',
                  equipmentcatid: '',
                  equipmenttag: '',
                  faculty: 'OGPOOC',
                  exactlocation: '',
                  performedby: '',
                  precautions: '',
                  priority: 'High',
                  responsibility: 'Operator',
                  status: false,
                  gstatus: false,
                  dstatus: false,
                  ipaddress: '169.159.98.187',
                  description: '',
                  beepstatus: false,
                  frequencydate: new Date(),
                  frequencyspandate: null,
                  animateswitch: 'false',
                  woid: ''
                }

                if (preventiveMaintenance.frequency == "Daily") {
                  preventiveMaintenance.frequency = 24;
                  var someDate = new Date();
                  var numberOfHoursToAdd = preventiveMaintenance.frequency;
                  var addedDate = someDate.getHours() + Number(numberOfHoursToAdd);
                  preventiveMaintenance.frequencyspandate = someDate.setHours(addedDate);
                }
                else if (preventiveMaintenance.frequency == "Weekly") {
                  preventiveMaintenance.frequency = 7 * 24;
                  var someDate = new Date();
                  var numberOfHoursToAdd = preventiveMaintenance.frequency;
                  var addedDate = someDate.getHours() + Number(numberOfHoursToAdd);
                  preventiveMaintenance.frequencyspandate = someDate.setHours(addedDate);
                }
                else if (preventiveMaintenance.frequency == "Monthly") {
                  preventiveMaintenance.frequency = 30 * 24;
                  var someDate = new Date();
                  var numberOfHoursToAdd = preventiveMaintenance.frequency;
                  var addedDate = someDate.getHours() + Number(numberOfHoursToAdd);
                  preventiveMaintenance.frequencyspandate = someDate.setHours(addedDate);
                }
                else {
                  var someDate = new Date();
                  var numberOfHoursToAdd = preventiveMaintenance.frequency;
                  var addedDate = someDate.getHours() + Number(numberOfHoursToAdd);
                  preventiveMaintenance.frequencyspandate = someDate.setHours(addedDate);
                }

                this.newArray = [];
                this.newArray.push(preventiveMaintenance);


                this.newArray.forEach(arrayPm => {
                  this.db.savePreventivemaintenance(arrayPm).then(res => {
                    this._loadPreventivemaintenances();
                  });
                });

                //});
              }, 3000);
            });
            resolve('Finished generating JSON');
          } else {
            reject(console.log('XMLHttpRequest failed; error code:' + oReq.statusText));
          }
        }
        oReq.send();
      });
    }

  }

  viewSubItems(preventivemaintenance){
    let modal = this.modalCtrl.create('ViewsubitemspmPage', { type: 'View', preventivemaintenance: preventivemaintenance });
    modal.onDidDismiss((data) => {
      this._loadPreventivemaintenances();
    });
    modal.present();
  }

}
