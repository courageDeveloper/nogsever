import { Component, ViewChild } from '@angular/core';
import { IonicPage, ViewController, NavController, AlertController, Platform, NavParams } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { PouchService } from '../../pouch-service/pouch.service';
import { HttpserviceProvider } from '../../providers/httpservice';
import { Workpermit } from '../../models/workpermit';
import { EmailComposer } from '@ionic-native/email-composer';

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
  public workpermit: Workpermit;
  @ViewChild(Slides) slides: Slides;
  startSlide;
  filterPmNumber;
  pmArray;
  pmName: any;
  safetyPrecautions;
  add = false;
  title = 'Edit';
  search = false;
  equipmentsCatArray;
  equipmentCatObject;
  equipmentsPartArray;
  equipmentsPartTagArray;
  equipmentPartObject;
  equipmentPartTagObject;
  equipmentsTagArray;
  equipmentTagObject;
  localStorageItem;
  supervisorArray;
  position;
  filterManager;
  filterHse;
  filterAreaSupervisor;
  disabled = false;
  public user: any;
  workorder = false;
  wono;

  constructor(public navCtrl: NavController, private platform: Platform, public httpService: HttpserviceProvider, public emailcomposer: EmailComposer, public alertCtrl: AlertController, public viewCtrl: ViewController, public navParams: NavParams, public db: PouchService) {
    this.localStorageItem = JSON.parse(localStorage.getItem('user'));

    if (this.navParams.get('type') == 'Add') {
      this.add = true;
      this.title = 'Add';
      this.workpermit = {
        id: Math.round((new Date()).getTime()).toString(),
        rev: '',
        ptwno: 0,
        tagname: '',
        tagid: '',
        equipmentpartname: '',
        equipmentpartid: '',
        equipmentcatid: '',
        equipmentcatname: '',
        datecreated: new Date().toJSON().slice(0, 10).replace(/-/g, '-'),
        faculty: 'OGPOOC',
        exactlocation: '',
        description: '',
        equipmenttag:'',
        equipments: '',
        startdate: new Date().toJSON().slice(0, 10).replace(/-/g, '-'),
        enddate: new Date().toJSON().slice(0, 10).replace(/-/g, '-'),
        noofworkers: 0,
        precautions: '',
        managerid: '',
        hsedisapprove: false,
        managerdisapprove: false,
        areasupervisordisapprove: false,
        managerdate: '',
        hseid: '',
        sstatus: false,
        astatus: false,
        mstatus: false,
        hstatus: false,
        sastatus: false,
        mastatus: false,
        hastatus: false,
        hsedate: '',
        areasupervisorid: '',
        areasupervisordate: '',
        supervisordate: '',
        permitholderid: '',
        permitholdername: '',
        department: '',
        post: '',
        wono: '',
        holderdate: new Date().toJSON().slice(0, 10).replace(/-/g, '-'),
        messagemanager: '',
        messageareasupervisor:'',
        messagehse:''
      }
      this.db.getWorkpermits().then(data => {
        console.log(data);
        if (data.length != 0) {
          this.workpermit.ptwno = data[0].ptwno + 1;
        }
        else {
          this.workpermit.ptwno = 1;
        }
      });
    }
    else if (this.navParams.get('type') == 'Workorder') {
      this.workorder = true;
      this.wono = this.navParams.get('workorder').workorderno;
      this.workpermit = this.navParams.get('workorder'); 
      
      this.db.getWorkpermits().then(data => {
        console.log(data);
        if (data.length != 0) {
          this.workpermit.ptwno = data[0].ptwno + 1;
        }
        else {
          this.workpermit.ptwno = 1;
        }
      });
    }
    else {
      this.workpermit = this.navParams.get('workpermit');
      console.log(this.workpermit);
      if (this.workpermit.permitholderid != this.localStorageItem) {
        this.disabled = true;
      }
    }
  }

  ionViewDidLoad() {
    this.db.getEquipmentcats().then(res => {
      this.equipmentsCatArray = [];
      this.equipmentsCatArray = res;
      this.equipmentsTagArray = [];
      this.equipmentsTagArray = res;
    })

    this.db.getEquipmentparts().then(res => {
      this.equipmentsPartArray = [];
      this.equipmentsPartArray = res;
      this.equipmentsPartTagArray = [];
      this.equipmentsPartTagArray = res;
    });
    
    this.slides.lockSwipes(true);
   
    this.localStorageItem = JSON.parse(localStorage.getItem('user'));
    this.db.getSupervisor(this.localStorageItem).then(item => {
      this.user = item;
      this.position = item.post;
    });
  }

  ionViewDidEnter() {
    this.localStorageItem = JSON.parse(localStorage.getItem('user'));
    this.db.getSupervisor(this.localStorageItem).then(item => {
      this.user = item;
      this.position = item.post;
    });
  }


  selectEquipmentsCats(newVal) {
    console.log(newVal);
    this.equipmentCatObject = newVal;
   
    if (this.add || this.workorder) {
      this.workpermit.equipmentcatname = newVal.name;
      this.workpermit.equipmenttag = newVal.tag;
    }
    else {
      this.workpermit.equipmentcatname = newVal;
    }
  }

   selectEquipmentsTags(newVal) {
    this.equipmentTagObject = newVal;
    if (this.add || this.workorder) {
      this.workpermit.equipmenttag = newVal.tag;
    }
    else {
      this.workpermit.equipmenttag = newVal;
    }
  }
 
  

  selectEquipmentsParts(newVal) {
    this.equipmentPartObject = newVal;
    if (this.add || this.workorder) {
      this.workpermit.equipmentpartname = newVal.name;
      this.workpermit.tagname = newVal.tag;
    }
    else {
      this.workpermit.equipmentpartname = newVal;
    }
  }

  selectEquipmentsPartsTags(newVal) {
    this.equipmentPartTagObject = newVal;
    if(this.add || this.workorder){
      this.workpermit.tagname = newVal.tag;
    }
    else{
        this.workpermit.tagname = newVal;
    }
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

  home() {
    if(this.position == 'Manager'){
      this.navCtrl.setRoot('HomePage');
      }
      else if(this.position == 'Supervisor'){
        this.navCtrl.setRoot('SupervisorhomePage');
      }
      else if(this.position == 'Admin'){
        this.navCtrl.setRoot('AdminHomePage');
      }
      else{
        this.navCtrl.setRoot('OperatorhomePage');
      }
  }

  submit() {
    console.log(this.wono);
    console.log(this.workpermit);
    if (this.add || this.workorder) {
      if (typeof this.equipmentCatObject == 'object') {
        this.workpermit.equipmentcatid = this.equipmentCatObject.id;
      }
      if (typeof this.equipmentPartObject == 'object') {
        this.workpermit.equipmentpartid = this.equipmentPartObject.id;
      }
      this.workpermit.permitholderid = this.localStorageItem;
      this.workpermit.permitholdername = this.user.name;
      this.workpermit.department = this.user.departments;
      this.workpermit.post = this.user.post;
      this.workpermit.wono = this.wono;

      this.workpermit.sstatus = true;
      this.workpermit.astatus = true;
      this.workpermit.mstatus = true;
      this.workpermit.hstatus = true;
      this.workpermit.sastatus = false;
      this.workpermit.mastatus = false;
      this.workpermit.hastatus = false;
      if(this.workorder){
        this.workpermit.managerid = '';
        this.workpermit.managerdisapprove = false;
        this.workpermit.managerdate = '';
        this.workpermit.hseid = '';
        this.workpermit.hsedisapprove = false;
        this.workpermit.hsedate = '';
        this.workpermit.areasupervisorid = '';
        this.workpermit.areasupervisordate = '';
        this.workpermit.areasupervisordisapprove = false;
        this.workpermit.supervisordate = '';
        this.workpermit.holderdate = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
      }
      this.db.saveWorkpermit(this.workpermit).then(res => {
        this.navCtrl.push('ViewworkpermitPage');

        this.db.getSupervisors().then(supervisors => {
          this.filterManager = supervisors.filter(data => data.post == 'Manager');
          this.filterHse = supervisors.filter(data => data.departments == 'HSE');
          this.filterAreaSupervisor = supervisors.filter(data => data.post == 'Supervisor' && data.departments == this.user.departments);

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
        
          var emailInfo = {
            name: this.user.name,
            department: this.user.departments,
            email: this.supervisorArray,
            phoneNumber: this.user.mobile,
            position: this.user.position,
            ptwno: res.ptwno,
            description: res.description,
            location: res.exactlocation,
            facility: res.faculty,
            type: 'workpemit'
          }

          this.httpService.sendEmail(emailInfo).subscribe(res => {
            
          });

          if (this.platform.is('cordova')) {
          this.httpService.workpermitNotification(emailInfo).subscribe(res => {
          })
        }
        

        });


        this.user.workpermits.push(res.id);
        this.db.updateSupervisor(this.user).then(res => {

        });
      });
    }
    else {
      if (typeof this.equipmentCatObject == 'object') {
        this.workpermit.equipmentcatid = this.equipmentCatObject.id;
        this.workpermit.equipmentcatname = this.equipmentCatObject.name;
      }
      else {
        this.workpermit.equipmentcatid = this.workpermit.equipmentcatid;
        this.workpermit.equipmentcatname = this.workpermit.equipmentcatname;
      }
      if (typeof this.equipmentTagObject == 'object') {
        this.workpermit.equipmentcatid = this.equipmentCatObject.id;
        this.workpermit.equipmenttag = this.equipmentTagObject.tag;
      }
      else {
        this.workpermit.equipmentcatid = this.workpermit.equipmentcatid;
        this.workpermit.equipmenttag = this.workpermit.equipmenttag;
      }
      if (typeof this.equipmentPartObject == 'object') {
        this.workpermit.equipmentpartid = this.equipmentPartObject.id;
        this.workpermit.equipmentpartname = this.equipmentPartObject.name;
      }
      else {
        this.workpermit.equipmentpartid = this.workpermit.equipmentpartid;
        this.workpermit.equipmentpartname = this.workpermit.equipmentpartname;
      }
      if (typeof this.equipmentPartTagObject == 'object') {
        this.workpermit.equipmentpartid = this.equipmentPartTagObject.id;
        this.workpermit.tagname = this.equipmentPartTagObject.tag;
      }
      else {
        this.workpermit.equipmentpartid = this.workpermit.equipmentpartid;
        this.workpermit.tagname = this.workpermit.tagname;
      }
     
      this.workpermit.permitholderid = this.localStorageItem;
      this.workpermit.permitholdername = this.user.name;
      this.workpermit.department = this.user.departments;
      this.workpermit.post = this.user.post;
      this.db.updateWorkpermit(this.workpermit).then(result => {
        this.viewCtrl.dismiss();
      });
    }
  }

  openAlert() {
    const alert = this.alertCtrl.create({
      title: 'Safety Precautions to be taken',
      message: `<b>WORK PLACE:</b> Gas Test, Warning Signs, Safety Notices, Temporary Demarcation, Temporary Road Closure,
        Additional Lighting, Work Platform Ladder <br> <p><b>PERSONAL:</b> Safety Helmet, Safety Shoes, 
        Safety Googles, Protective Apron, Nose Mask, Hearing Protection, Breathing Apparatus, Dotted Gloves, 
        Welding Gloves, Electrical Gloves, Safety Harness</p> `,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Confirm',
          handler: () => {

          }
        }
      ]
    });
    alert.present();
  }

}
