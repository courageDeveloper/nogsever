import { Component } from '@angular/core';
import { IonicPage, ModalController, Platform, ViewController, NavController, NavParams, AlertController } from 'ionic-angular';
import { PouchService } from '../../pouch-service/pouch.service';
import { Workpermit } from '../../models/workpermit';
import { HttpserviceProvider } from '../../providers/httpservice';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the ViewworkpermitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewworkpermit',
  templateUrl: 'viewworkpermit.html',
})
export class ViewworkpermitPage {
  filteredWorkpermit: Array<Workpermit> = [];
  filteredWorkpermitGen: Array<Workpermit> = [];
  public workpermits: Array<Workpermit> = [];
  localStorageItem;
  position;
  public user: any;
  show = false;
  status;
  selectedWorkpermit;
  disabled = false;
  disabled2 = false;
  disable = true;
  arraySelectedPermits = [];

  constructor(public _DomSanitizer: DomSanitizer, public navCtrl: NavController, private platform: Platform, public modalCtrl: ModalController, public viewCtrl: ViewController, public httpService: HttpserviceProvider, public alertCtrl: AlertController, public db: PouchService, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.arraySelectedPermits = [];
    this.localStorageItem = JSON.parse(localStorage.getItem('user'));
    console.log('ionViewDidLoad ViewworkpermitPage');
    this.db.getSupervisor(this.localStorageItem).then(item => {
      this.user = item;
      this.position = item.post;
      if (this.position == 'Operator' || this.position == 'Admin') {
        this.show = true
      }
    });

    this._loadWorkpermits();
  }

  ionViewDidEnter() {
    this.arraySelectedPermits = [];
    this.disable = true;
    this.localStorageItem = JSON.parse(localStorage.getItem('user'));
    this.db.getSupervisor(this.localStorageItem).then(item => {
      this.user = item;
      this.position = item.post;
      if (this.position == 'Operator' || this.position == 'Admin') {
        this.show = true
      }
    });
    this._loadWorkpermits();
  }

  private _loadWorkpermits(): void {
    this.db.getWorkpermits()
      .then((workpermits: Array<Workpermit>) => {
        this.filteredWorkpermit = workpermits.filter(data => data.department == this.user.departments || this.user.post == 'Manager' || this.user.post == 'Admin' || this.user.departments == 'HSE');
        this.workpermits = workpermits.filter(data => data.department == this.user.departments || this.user.post == 'Manager' || this.user.post == 'Admin' || this.user.departments == 'HSE');

        this.filteredWorkpermit.forEach(item => {

          if (item.areasupervisorid != '' && item.areasupervisordisapprove == false || item.areasupervisordisapprove == true) {
            this.db.getSupervisor(item.areasupervisorid).then(res => {

              item['sname'] = res.name;
            })
          }
          if (item.managerid != '' && item.managerdisapprove == false || item.managerdisapprove == true) {
            this.db.getSupervisor(item.managerid).then(res => {

              item['mname'] = res.name;
            })
          }
          if (item.hseid != '' && item.hsedisapprove == false || item.hsedisapprove == true) {
            this.db.getSupervisor(item.hseid).then(res => {
              item['hname'] = res.name;
            })
          }

          if (item.areasupervisorid == "" || item.hseid == "" || item.managerid == "" || item.areasupervisordisapprove == true || item.managerdisapprove == true || item.hsedisapprove == true) {
            item['wostatus'] = "Pending";

          }
          else {
            item['wostatus'] = "Approved";
            if (item['gstatus'] != undefined) {
              item['gstatus'] = true;
            }
            this.db.updateWorkpermit(item).then(data => {

            })

          }
          if (this.user.post == 'Supervisor' && this.user.departments != 'HSE') {
            if (this.user.id == item.areasupervisorid && item.areasupervisordisapprove == false) {
              item['disabled'] = true;
              item['disabled2'] = false;
            }
            else if (this.user.id == item.areasupervisorid && item.areasupervisordisapprove == true) {
              item['disabled'] = false;
              item['disabled2'] = true;
            }
            else {
              item['disabled'] = false;
              item['disabled2'] = false;
            }
          }
          else if (this.user.post == 'Manager') {
            if (this.user.id == item.managerid && item.managerdisapprove == false) {
              item['disabled'] = true;
              item['disabled2'] = false;
            }
            else if (this.user.id == item.managerid && item.managerdisapprove == true) {
              item['disabled'] = false;
              item['disabled2'] = true;
            }
            else {
              item['disabled'] = false;
              item['disabled2'] = false;
            }
          }
          else if (this.user.post == 'Supervisor' && this.user.departments == 'HSE') {
            if (this.user.id == item.hseid && item.hsedisapprove == false) {
              item['disabled'] = true;
              item['disabled2'] = false;
            }
            else if (this.user.id == item.hseid && item.hsedisapprove == true) {
              item['disabled'] = false;
              item['disabled2'] = true;
            }
            else {
              item['disabled'] = false;
              item['disabled2'] = false;
            }
          }
        })
      });
  }

  loadWorkPermitGen() {
    /* this.db.getWorkpermits()
      .then((workpermits: Array<Workpermit>) => {
        this.filteredWorkpermitGen = workpermits.filter(data => data.)
      }) */
  }

  back() {
    this.navCtrl.pop();
  }

  newWorkPermit() {
    this.navCtrl.push('WorkpermitPage', { type: 'Add' });
  }

  openWorkpermit(workpermit) {
    this.navCtrl.push('WorkpermitPage', { type: 'Edit', workpermit: workpermit });
  }

  filterWorkpermits($event: any): void {
    const value: string = $event.target.value ? $event.target.value.toLowerCase() : '';
    this.filteredWorkpermit = [];

    for (let workpermit of this.workpermits) {
      if (workpermit.datecreated.toLowerCase().indexOf(value) !== -1 || workpermit.department.toLowerCase().indexOf(value) !== -1 || workpermit.equipmenttag.toLowerCase().indexOf(value) !== -1 || workpermit.tagname.toLowerCase().indexOf(value) !== -1) {
        this.filteredWorkpermit.push(workpermit);
      }
    }
  }

  deleteWorkpermit(workpermit: Workpermit) {
    const alert = this.alertCtrl.create({
      title: 'Delete Workpermit',
      message: 'Are you sure you want to delete workpermit: ' + workpermit.ptwno,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Confirm',
          handler: () => {
            this.db.deleteWorkpermit(workpermit)
              .then((success: boolean) => {
                this._loadWorkpermits();
              });
          }
        }
      ]
    });
    alert.present();
  }

  approve(workpermit) {
    /* workpermit.hseid = this.user.id;
    workpermit.areasupervisorid = this.user.id;
    workpermit.managerid = this.user.id; */
    if (this.user.post == 'Supervisor' && this.user.departments != 'HSE') {
      workpermit.areasupervisorid = this.user.id;
      workpermit.areasupervisordisapprove = false;
      workpermit.sastatus = true;
      workpermit.areasupervisordate = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
      this.db.updateWorkpermit(workpermit).then(item => {
        if (this.user.id == item.areasupervisorid) {
          item['disabled'] = true;
          item['disabled2'] = false;
        }
        this._loadWorkpermits();
        this.db.getSupervisor(item.permitholderid).then(res => {
          var emailInfo = {
            name: this.user.name,
            department: this.user.departments,
            email: res.email,
            phoneNumber: this.user.mobile,
            position: this.user.position,
            ptwno: item.ptwno,
            description: item.description,
            location: item.exactlocation,
            facility: item.faculty,
            type: 'approve'
          }
          this.httpService.sendEmail(emailInfo).subscribe(res => {
            
          });

          //if (this.platform.is('cordova')) {
            this.httpService.workpermitNotification(emailInfo).subscribe(res => {
            })
          //}
        })

      })
      //this._loadWorkpermits();
    }
    else if (this.user.post == 'Manager') {
      workpermit.managerid = this.user.id;
      workpermit.managerdisapprove = false;
      workpermit.mastatus = true;
      workpermit.managerdate = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
      this.db.updateWorkpermit(workpermit).then(item => {
        if (this.user.id == item.managerid) {
          item['disabled'] = true;
          item['disabled2'] = false;
        }
        this._loadWorkpermits();

        this.db.getSupervisor(item.permitholderid).then(res => {
          var emailInfo = {
            name: this.user.name,
            department: this.user.departments,
            email: res.email,
            phoneNumber: this.user.mobile,
            position: this.user.position,
            ptwno: item.ptwno,
            description: item.description,
            location: item.exactlocation,
            facility: item.faculty,
            type: 'approve'
          }
          this.httpService.sendEmail(emailInfo).subscribe(res => {
            
          });

          //if (this.platform.is('cordova')) {
            this.httpService.workpermitNotification(emailInfo).subscribe(res => {
            })
          //}
        })
      })
      //this._loadWorkpermits();
    }
    else if (this.user.post == 'Supervisor' && this.user.departments == 'HSE') {
      workpermit.hseid = this.user.id;
      workpermit.hsedisapprove = false;
      workpermit.hastatus = true;
      workpermit.hsedate = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
      this.db.updateWorkpermit(workpermit).then(item => {
        
        if (this.user.id == item.hseid) {
          item['disabled'] = true;
          item['disabled2'] = false;
        }
        this._loadWorkpermits();
        this.db.getSupervisor(item.permitholderid).then(res => {
          var emailInfo = {
            name: this.user.name,
            department: this.user.departments,
            email: res.email,
            phoneNumber: this.user.mobile,
            position: this.user.position,
            ptwno: item.ptwno,
            description: item.description,
            location: item.exactlocation,
            facility: item.faculty,
            type: 'approve'
          }
          this.httpService.sendEmail(emailInfo).subscribe(res => {
            
          });

          //if (this.platform.is('cordova')) {
            this.httpService.workpermitNotification(emailInfo).subscribe(res => {
            })
          //}
        })
      })
      //this._loadWorkpermits();
    }
  }

  disapprove(workpermit) {
    /*  workpermit.areasupervisorid = this.user.id;
     workpermit.managerid = this.user.id;
     workpermit.hseid = this.user.id;
  */
    if (this.user.post == 'Supervisor' && this.user.departments != 'HSE') {
      workpermit.areasupervisorid = this.user.id;
      workpermit.areasupervisordisapprove = true;
      workpermit.sastatus = true;
      workpermit.areasupervisordate = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
      const alert = this.alertCtrl.create({
        title: 'Reason for disapproval',
        inputs: [
          {
            name: 'message',
            type: 'text',
            placeholder: 'Enter your reasons for disapproving'
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel'
          },
          {
            text: 'Confirm',
            handler: data => {
              workpermit.messageareasupervisor = data.message;
              this.db.updateWorkpermit(workpermit);
            }
          }
        ]
      });
      alert.present();
      this.db.updateWorkpermit(workpermit).then(item => {
        if (this.user.id == item.areasupervisorid) {
          item['disabled'] = false;
          item['disabled2'] = true;
        }
        this._loadWorkpermits();
        this.db.getSupervisor(item.permitholderid).then(res => {
          var emailInfo = {
            name: this.user.name,
            department: this.user.departments,
            email: res.email,
            phoneNumber: this.user.mobile,
            position: this.user.position,
            ptwno: item.ptwno,
            description: item.description,
            location: item.exactlocation,
            facility: item.faculty,
            type: 'disapprove'
          }
          this.httpService.sendEmail(emailInfo).subscribe(res => {
            
          });

          //if (this.platform.is('cordova')) {
            this.httpService.workpermitNotification(emailInfo).subscribe(res => {
            })
          //}
        })
      })
      //this._loadWorkpermits();
    }
    else if (this.user.post == 'Manager') {
      workpermit.managerid = this.user.id;
      workpermit.managerdisapprove = true;
      workpermit.mastatus = true;
      workpermit.managerdate = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
      const alert = this.alertCtrl.create({
        title: 'Reason for disapproval',
        inputs: [
          {
            name: 'message',
            type: 'text',
            placeholder: 'Enter your reasons for disapproving'
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel'
          },
          {
            text: 'Confirm',
            handler: data => {
              workpermit.messagemanager = data.message;
              this.db.updateWorkpermit(workpermit);
            }
          }
        ]
      });
      alert.present();
      this.db.updateWorkpermit(workpermit).then(item => {
        if (this.user.id == item.managerid) {
          item['disabled'] = false;
          item['disabled2'] = true;
        }
        this._loadWorkpermits();
        this.db.getSupervisor(item.permitholderid).then(res => {
          var emailInfo = {
            name: this.user.name,
            department: this.user.departments,
            email: res.email,
            phoneNumber: this.user.mobile,
            position: this.user.position,
            ptwno: item.ptwno,
            description: item.description,
            location: item.exactlocation,
            facility: item.faculty,
            type: 'disapprove'
          }
          this.httpService.sendEmail(emailInfo).subscribe(res => {
            
          });

          //if (this.platform.is('cordova')) {
            this.httpService.workpermitNotification(emailInfo).subscribe(res => {
            })
          //}
        })
      })
      //this._loadWorkpermits();
    }
    else if (this.user.post == 'Supervisor' && this.user.departments == 'HSE') {
      workpermit.hseid = this.user.id;
      workpermit.hsedisapprove = true;
      workpermit.hastatus = true;
      workpermit.hsedate = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
      const alert = this.alertCtrl.create({
        title: 'Reason for disapproval',
        inputs: [
          {
            name: 'message',
            type: 'text',
            placeholder: 'Enter your reasons for disapproving'
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel'
          },
          {
            text: 'Confirm',
            handler: data => {
              workpermit.messagehse = data.message;
              this.db.updateWorkpermit(workpermit);
            }
          }
        ]
      });
      alert.present();
      this.db.updateWorkpermit(workpermit).then(item => {
        if (this.user.id == item.hseid) {
          item['disabled'] = false;
          item['disabled2'] = true;
        }
        this._loadWorkpermits();
        this.db.getSupervisor(item.permitholderid).then(res => {
          var emailInfo = {
            name: this.user.name,
            department: this.user.departments,
            email: res.email,
            phoneNumber: this.user.mobile,
            position: this.user.position,
            ptwno: item.ptwno,
            description: item.description,
            location: item.exactlocation,
            facility: item.faculty,
            type: 'disapprove'
          }
          this.httpService.sendEmail(emailInfo).subscribe(res => {
            
          });

          //if (this.platform.is('cordova')) {
            this.httpService.workpermitNotification(emailInfo).subscribe(res => {
            })
          //}
        })
      })
      //this._loadWorkpermits();
    }
  }

  print(workpermit?: any): void {
    this.arraySelectedPermits = [];
    this.arraySelectedPermits.push(workpermit);
    this.navCtrl.push('PrintworkpermitPage', { type: 'Edit', workpermit: this.arraySelectedPermits });
  }

  checkboxClicked(workpermit) {
    this.selectedWorkpermit = workpermit;
    this.disable = false;
    this.arraySelectedPermits.push(this.selectedWorkpermit);
  }

  printSelected() {
    this.navCtrl.push('PrintworkpermitPage', { type: 'Edit', workpermit: this.arraySelectedPermits });
    this.arraySelectedPermits = [];
  }

  trackByName = (index, item) => {
    return item.id;
  }

  fixed(workpermit){
    let modal = this.modalCtrl.create('FixedPage', { workpermit: workpermit, type: 'workpermit' });
    modal.onDidDismiss((data) => {
      if (data) {
        this._loadWorkpermits();
      }
    });
    modal.present();
  }

}
