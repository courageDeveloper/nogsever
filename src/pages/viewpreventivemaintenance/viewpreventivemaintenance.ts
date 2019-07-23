import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, Platform, NavParams, AlertController } from 'ionic-angular';
import { PouchService } from '../../pouch-service/pouch.service';
import { Workorder } from '../../models/workorder';
import { HttpserviceProvider } from '../../providers/httpservice';
import { trigger, style, transition, animate, state, keyframes, query, stagger } from '@angular/animations';
import { Observable } from 'rxjs/Rx';
import { map } from 'rxjs/operators';

/**
 * Generated class for the ViewpreventivemaintenancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewpreventivemaintenance',
  templateUrl: 'viewpreventivemaintenance.html',
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
export class ViewpreventivemaintenancePage {
  filteredWorkorder: Array<Workorder> = [];
  public workorders: Array<Workorder> = [];
  localStorageItem;
  position;
  public user: any;
  show = false;
  myClasses;
  High
  medium;
  low;
  state;
  filterManager;
  filterHse;
  filterAreaSupervisor;
  filterOperator;
  supervisorArray;
  equipment;

  constructor(public navCtrl: NavController, private platform: Platform, public httpService: HttpserviceProvider, public alertCtrl: AlertController, public db: PouchService, public navParams: NavParams, public modalCtrl: ModalController) {
    this.loadAlarm();
    this.loadAlarmWO();

    this.equipment = this.navParams.get('equipment');
  }

  ionViewDidLoad() {
    this.localStorageItem = JSON.parse(localStorage.getItem('user'));
    console.log('ionViewDidLoad ViewpreventivemaintenancePage');
    this.db.getSupervisor(this.localStorageItem).then(item => {
      this.user = item;
      this.position = item.post;
      if (this.position == 'Operator' || this.position == 'Admin') {
        this.show = true
      }
    });

    this._loadWorkorders();
    this.loadAlarm();
    this.loadAlarmWO();
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

    this._loadWorkorders();
    this.loadAlarm();
    this.loadAlarmWO();

  }

  private _loadWorkorders(): void {

    /* console.log(this.db.getBanners());
    this.db.getBanners().subscribe(banners => {
      console.log(banners)
    }); */

    this.db.getWorkorders()
      .then((workorders: Array<Workorder>) => {
        this.filteredWorkorder = workorders.filter(data => data.department == this.user.departments || this.user.post == 'Manager' || this.user.post == 'Admin' || this.user.departments == 'HSE');
        this.workorders = workorders.filter(data => data.department == this.user.departments || this.user.post == 'Manager' || this.user.post == 'Admin' || this.user.departments == 'HSE');
        this.filteredWorkorder.forEach(workorder => {
          if (workorder.beepstatus == true) {
            setInterval(() => {
              workorder.animateswitch = "false";
            }, 500)
            setInterval(() => {
              workorder.animateswitch = "true";
            }, 1000)
          }
        })
      })
  }

  loadAlarm() {
    this.db.getWorkorders().then(items => {
      items = items.filter(data => data.frequencyspandate != "");

      items.forEach(workorder => {
        var spanDate = new Date(workorder.frequencyspandate).toUTCString();
        spanDate = spanDate.split(' ').slice(0, 4).join(' ');
        var currentDate = new Date().toUTCString();
        currentDate = currentDate.split(' ').slice(0, 4).join(' ');

        if (spanDate == currentDate) {
          workorder.beepstatus = true;
          workorder.animateswitch = 'true';
          workorder.status = false;
          workorder.dstatus = false;
          workorder.gstatus = false;
          workorder.frequencydate = new Date();
          var someDate = new Date();
          var numberOfDaysToAdd = workorder.frequency;
          var addedDate = someDate.getDate() + Number(numberOfDaysToAdd);
          workorder.frequencyspandate = someDate.setDate(addedDate);
          this._loadWorkorders();
          this.db.updateWorkorder(workorder).then(data => {

            //Send email when date is due.
            this.db.getSupervisors().then(supervisors => {
              this.filterManager = supervisors.filter(data => data.post == 'Manager');
              this.filterHse = supervisors.filter(data => data.departments == 'HSE');
              this.filterAreaSupervisor = supervisors.filter(data => data.post == 'Supervisor' && data.departments == workorder.department);
              if (workorder.responsibility == 'Operator') {
                this.filterOperator = supervisors.filter(data => data.post == 'Operator' && data.departments == workorder.department);
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
              if (workorder.responsibility == 'Operator') {
                this.filterOperator.forEach(item => {
                  this.supervisorArray.push(item.email);
                });
              }

              var emailInfo = {
                name: workorder.staff,
                department: workorder.department,
                email: this.supervisorArray,
                phoneNumber: this.user.mobile,
                position: workorder.post,
                wono: workorder.workorderno,
                description: workorder.description,
                location: workorder.exactlocation,
                facility: workorder.faculty,
                priority: workorder.priority,
                type: 'alarm',
                jobtype: workorder.worktypes,
                datecreated: workorder.datecreated,
                frequencydate: workorder.frequencydate,
                datewo: workorder.datewo,
                responsibility: workorder.responsibility
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

            this.db.getWorkorder(workpermit['woid']).then(workorder => {
              if (workorder != undefined) {
                workorder.status = false;
                workorder.dstatus = false;
                workorder.beepstatus = false;
                workorder.animateswitch = "false";
                this.db.updateWorkorder(workorder).then(res => {
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
    this.db.getWorkorders().then(items => {
      items = items.filter(data => data.frequencyspandate == "");

      items.forEach(workorder => {
        var woDate = new Date(workorder.datewo).toUTCString();
        woDate = woDate.split(' ').slice(0, 4).join(' ');
        var currentDate = new Date().toUTCString();
        currentDate = currentDate.split(' ').slice(0, 4).join(' ');

        if (woDate == currentDate) {
          workorder.beepstatus = true;
          workorder.animateswitch = 'true';
          workorder.status = false;
          workorder.dstatus = false;
          workorder.gstatus = false;
          workorder.datewo = '';
          this._loadWorkorders();
          this.db.updateWorkorder(workorder).then(data => {

            //Send email when date is due.
            this.db.getSupervisors().then(supervisors => {
              this.filterManager = supervisors.filter(data => data.post == 'Manager');
              this.filterHse = supervisors.filter(data => data.departments == 'HSE');
              this.filterAreaSupervisor = supervisors.filter(data => data.post == 'Supervisor' && data.departments == workorder.department);
              if (workorder.responsibility == 'Operator') {
                this.filterOperator = supervisors.filter(data => data.post == 'Operator' && data.departments == workorder.department);
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
              if (workorder.responsibility == 'Operator') {
                this.filterOperator.forEach(item => {
                  this.supervisorArray.push(item.email);
                });
              }

              var emailInfo = {
                name: workorder.staff,
                department: workorder.department,
                email: this.supervisorArray,
                phoneNumber: this.user.mobile,
                position: workorder.post,
                wono: workorder.workorderno,
                description: workorder.description,
                location: workorder.exactlocation,
                facility: workorder.faculty,
                priority: workorder.priority,
                type: 'alarmwo',
                jobtype: workorder.worktypes,
                datecreated: workorder.datecreated,
                frequencydate: workorder.frequencydate,
                datewo: workorder.datewo,
                responsibility: workorder.responsibility
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

            this.db.getWorkorder(workpermit['woid']).then(workorder => {
              if (workorder != undefined) {
                workorder.status = false;
                workorder.dstatus = false;
                workorder.beepstatus = false;
                workorder.animateswitch = "false";
                this.db.updateWorkorder(workorder).then(res => {
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
    this.filteredWorkorder = [];

    for (let workorder of this.workorders) {
      if (workorder.name.toLowerCase().indexOf(value) !== -1) {
        this.filteredWorkorder.push(workorder);
      }
    }
  }

  openWorkorder(workorder) {

    let modal = this.modalCtrl.create('VieworderequipmentPage', { type: 'View', equipment: this.equipment, workorder: workorder });
    modal.onDidDismiss((data) => {
      this._loadWorkorders();
    });
    modal.present();
  }

  ackWo(workorder) {

    workorder.status = true;
    workorder.dstatus = false;
    this.db.updateWorkorder(workorder).then(res => {
    })
  }

  disackWo(workorder) {
    workorder.dstatus = true;
    workorder.status = false;
    this.db.updateWorkorder(workorder).then(res => {

    })
  }

  navPtw(workorder) {

    workorder.woid = workorder.id;
    workorder.dstatus = true;
    this.db.updateWorkorder(workorder).then(res => {
      workorder.id = Math.round((new Date()).getTime()).toString();
      workorder.rev = "";
      this.navCtrl.push('WorkpermitPage', { type: 'Workorder', workorder: workorder })
    })
  }

  deleteWorkorder(workorder: Workorder) {
    if (this.position == 'Supervisor') {
      const alert = this.alertCtrl.create({
        title: 'Delete Workorder',
        message: 'Are you sure you want to delete workorder: ' + workorder.workorderno,
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel'
          },
          {
            text: 'Confirm',
            handler: () => {
              this.db.deleteWorkorder(workorder)
                .then((success: boolean) => {
                  this._loadWorkorders();
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

}
