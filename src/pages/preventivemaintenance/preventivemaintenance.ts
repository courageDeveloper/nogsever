import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams, AlertController } from 'ionic-angular';
import { PouchService } from '../../pouch-service/pouch.service';
import { Workorder } from '../../models/workorder';
import { HttpserviceProvider } from '../../providers/httpservice';
import { trigger,style,transition,animate,state,keyframes,query,stagger } from '@angular/animations';


/**
 * Generated class for the PreventivemaintenancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-preventivemaintenance',
  templateUrl: 'preventivemaintenance.html',
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
export class PreventivemaintenancePage {
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

  constructor(public navCtrl: NavController, public httpService: HttpserviceProvider, public alertCtrl: AlertController, public db: PouchService, public navParams: NavParams, public modalCtrl: ModalController) {
  
  }

  ionViewDidLoad() {
    this.localStorageItem = JSON.parse(localStorage.getItem('user'));
    console.log('ionViewDidLoad PreventivemaintenancePage');
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
    this.db.getWorkorders()
      .then((workorders: Array<Workorder>) => {
        this.filteredWorkorder = workorders.filter(data => data.department == this.user.departments || this.user.post == 'Manager' || this.user.post == 'Admin' || this.user.departments == 'HSE');
        this.workorders = workorders.filter(data => data.department == this.user.departments || this.user.post == 'Manager' || this.user.post == 'Admin' || this.user.departments == 'HSE');
        this.filteredWorkorder.forEach(workorder => {
          if(workorder.beepstatus == true){
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
          this.db.updateWorkorder(workorder).then(data => {
            if (data.beepstatus == true) {
              //alert("Beeping");
             
            }
          })
        }
      })
    })
  }

  loadAlarmWO() {
    this.db.getWorkorders().then(items => {
      items = items.filter(data => data.frequencyspandate == "");
      console.log(items)
      items.forEach(workorder => {
        var woDate = new Date(workorder.datewo).toUTCString();
        woDate = woDate.split(' ').slice(0, 4).join(' ');
        var currentDate = new Date().toUTCString();
        currentDate = currentDate.split(' ').slice(0, 4).join(' ');
        console.log(currentDate);
        console.log(woDate);
        if (woDate == currentDate) {
          workorder.beepstatus = true;
          workorder.animateswitch = 'true';
          workorder.status = false;
          workorder.dstatus = false;
          workorder.gstatus = false;
          this.db.updateWorkorder(workorder).then(data => {
            if (data.beepstatus == true) {
              //alert("Beeping");
            }
          })
        }
      })
    })
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

  newWorkorder() {
    let modal = this.modalCtrl.create('AddpreventivemaintenancePage', { type: 'Add' });
    modal.onDidDismiss((data) => {
      if (data) {
        this._loadWorkorders();
      }
    });
    modal.present();
  }

  openWorkorder(workorder) {
    console.log(workorder);
    let modal = this.modalCtrl.create('AddpreventivemaintenancePage', { type: 'Edit', workorder: workorder });
    modal.onDidDismiss((data) => {
      this._loadWorkorders();
    });
    modal.present();
  }

  ackWo(workorder){
    console.log(workorder)
    workorder.status = true;
    workorder.dstatus = false;
     this.db.updateWorkorder(workorder).then(res => {

     })
  }

  disackWo(workorder){
    workorder.dstatus = true;
    workorder.status = false;
    this.db.updateWorkorder(workorder).then(res => {

    })
  }

  navPtw(workorder){
    console.log(workorder);
    workorder.woid = workorder.id;
    workorder.dstatus = true;
    workorder.id = Math.round((new Date()).getTime()).toString();
    workorder.rev = "";
    this.navCtrl.push('WorkpermitPage', { type: 'Workorder', workorder: workorder })
  }

  deleteWorkorder(workorder: Workorder) {
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
