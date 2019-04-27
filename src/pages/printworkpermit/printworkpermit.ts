import { Component } from '@angular/core';
import { IonicPage, ViewController, NavController, NavParams, AlertController, Platform } from 'ionic-angular';
import { PouchService } from '../../pouch-service/pouch.service';
import { Workpermit } from '../../models/workpermit';
import { Printer, PrintOptions } from '@ionic-native/printer';
import { HttpserviceProvider } from '../../providers/httpservice';

/**
 * Generated class for the PrintworkpermitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-printworkpermit',
  templateUrl: 'printworkpermit.html',
})
export class PrintworkpermitPage {
  filteredWorkpermit: Array<Workpermit> = [];
  public workpermits: Array<Workpermit> = [];
  localStorageItem;
  public workpermit: Workpermit;
  position;
  public user: any;
  show = false;
  status;
  duration;
  mastatus;
  hseastatus;
  supervisorastatus;
  disabled = false;
  managerName;
  hseName;
  supervisorName;
  disabled2 = false;
  options: PrintOptions = {
    name: 'Work Permit',
    //printerId: 'printer007',
    duplex: true,
    landscape: true,
    grayscale: true
  };

  constructor(private platform: Platform, public navCtrl: NavController, public viewCtrl: ViewController, private printer: Printer, public httpService: HttpserviceProvider, public alertCtrl: AlertController, public db: PouchService, public navParams: NavParams) {
    this.workpermit = this.navParams.get('workpermit');
    var date1 = new Date(this.workpermit.startdate);
    var date2 = new Date(this.workpermit.enddate);
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    this.duration = Math.ceil(timeDiff / (1000 * 3600 * 24));

    //FOR MANAGER
    if(this.workpermit.managerid != ""){
    this.db.getSupervisor(this.workpermit.managerid).then(manager => {
      this.managerName = manager.name;
    })
    if (this.workpermit.managerdisapprove == true) {
      this.mastatus = "Disapproved";
    }
    else {
      this.mastatus = "Approved";
    }
  }
    //END MANAGER

    //FOR HSE
    if(this.workpermit.hseid != ""){
    this.db.getSupervisor(this.workpermit.hseid).then(hse => {
      this.hseName = hse.name;
    })
    if (this.workpermit.hsedisapprove == true) {
      this.hseastatus = "Disapproved";
    }
    else {
      this.hseastatus = "Approved";
    }
  }
    //END HSE

    //FOR SUPERVISOR
    if(this.workpermit.areasupervisorid != ""){
      this.db.getSupervisor(this.workpermit.areasupervisorid).then(supervisor => {
        this.supervisorName = supervisor.name;
      })
      if (this.workpermit.areasupervisordisapprove == true) {
        this.supervisorastatus = "Disapproved";
      }
      else {
        this.supervisorastatus = "Approved";
      }
    }
    //END SUPERVISOR
  }

  ionViewDidLoad() {
    this.localStorageItem = JSON.parse(localStorage.getItem('user'));
    console.log('ionViewDidLoad PrintworkpermitPage');
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
    this.localStorageItem = JSON.parse(localStorage.getItem('user'));
    this.db.getSupervisor(this.localStorageItem).then(item => {
      this.user = item;
      this.position = item.post;
      if (this.position == 'Operator' || this.position == 'Admin') {
        this.show = true
      }
    });
    this._loadWorkpermits();
    if (this.platform.is('cordova')) {
      this.printMobile();
    }
    else {
      this.printPermit();
    }
  }

  private _loadWorkpermits(): void {
    this.workpermit = this.navParams.get('workpermit');
    console.log(this.workpermit);
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
      if (workpermit.ptwno.toLowerCase().indexOf(value) !== -1) {
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
            console.log(res);
          });
        })

      })
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
            console.log(res);
          });
        })
      })
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
            console.log(res);
          });
        })
      })
    }
  }

  disapprove(workpermit) {

    if (this.user.post == 'Supervisor' && this.user.departments != 'HSE') {
      workpermit.areasupervisorid = this.user.id;
      workpermit.areasupervisordisapprove = true;
      workpermit.sastatus = true;
      workpermit.areasupervisordate = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
      this.db.updateWorkpermit(workpermit).then(item => {
        if (this.user.id == item.areasupervisorid) {
          item['disabled'] = false;
          item['disabled2'] = true;
        }

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
            console.log(res);
          });
        })
      })
    }
    else if (this.user.post == 'Manager') {
      workpermit.managerid = this.user.id;
      workpermit.managerdisapprove = true;
      workpermit.mastatus = true;
      workpermit.managerdate = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
      this.db.updateWorkpermit(workpermit).then(item => {
        if (this.user.id == item.managerid) {
          item['disabled'] = false;
          item['disabled2'] = true;
        }

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
            console.log(res);
          });
        })
      })
    }
    else if (this.user.post == 'Supervisor' && this.user.departments == 'HSE') {
      workpermit.hseid = this.user.id;
      workpermit.hsedisapprove = true;
      workpermit.hastatus = true;
      workpermit.hsedate = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
      this.db.updateWorkpermit(workpermit).then(item => {
        if (this.user.id == item.hseid) {
          item['disabled'] = false;
          item['disabled2'] = true;
        }

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
            console.log(res);
          });
        })
      })
    }
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  printPermit() {
    var win: any;
    win = window;
    var printContent = document.getElementById('printArea').innerHTML;
    var printWindow = win.open('', '_blank', 'top=0,left=0,height=auto,width=auto');
    printWindow.document.open();
    printWindow.document.write(`<html><head><title>Work Permit `, `</title><style>
       
    table {
      border-collapse: collapse;
    }
    
    table, td, th {
      border: 1px solid black;
    }

    .print-margin{
       margin-top: 5px;
    }

    .txt-align{
      text-align: center;
      max-width: 60%;
  }
    .print-td{
      width: 40%;
    }

    .print-orient{
      font-size: 0.5rem;
     
    }
    .logo-print{
      width:291px;
      height:109px;
      display: list-item;
      list-style-image: url(../assets/images/NOG-LOGO.jpg);
      list-style-position: inside;
    }

           </style></head><body><img src="assets/images/NOG-LOGO.jpg" width="250px" /></body></html>`);
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.print();
  }

  printMobile() {
    this.printer.isAvailable().then((success) => {
      this.printer.print(document.getElementById('printArea').innerHTML, this.options).then();
    }, (error) => {
      console.log('printer not available');
    });
  }

}
