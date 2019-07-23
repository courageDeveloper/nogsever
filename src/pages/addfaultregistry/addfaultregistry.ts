import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, Platform, NavParams, ActionSheetController } from 'ionic-angular';
import { PouchService } from '../../pouch-service/pouch.service';
import { HttpserviceProvider } from '../../providers/httpservice';
import { Faultregistry } from '../../models/faultregistry';
import { WebCamComponent } from 'ack-angular-webcam';
import { DomSanitizer } from '@angular/platform-browser';
import * as _ from 'lodash'; // to help loop over files more succinctly
import { ContentType } from '@angular/http/src/enums';


/**
 * Generated class for the AddfaultregistryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addfaultregistry',
  templateUrl: 'addfaultregistry.html',
})
export class AddfaultregistryPage {
  public faultregistry: Faultregistry;
  add = false;
  title = 'Edit';
  search = false;
  localStorageItem;
  equipmentsCatArray;
  equipmentCatObject;
  equipmentsPartArray;
  equipmentPartObject;
  equipmentsPartTagArray;
  equipmentPartTagObject;
  equipmentsTagArray;
  equipmentTagObject;
  disabled = false;
  partTrue = false;
  catTrue = false;
  tagTrue = false;
  position;
  public user: any;
  filterManager;
  filterHse;
  filterAreaSupervisor;
  filterOperator;
  supervisorArray;
  addFromequip = false;
  oncam = false;
  webcam: WebCamComponent;
  showfileinput = false;
  files: FileList;


  constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public _DomSanitizer: DomSanitizer, public httpService: HttpserviceProvider, public viewCtrl: ViewController, public navParams: NavParams, public platform: Platform, public db: PouchService) {
    if (this.navParams.get('type') == 'Add') {
      this.add = true;
      this.title = 'Add';
      this.faultregistry = {
        id: Math.round((new Date()).getTime()).toString(),
        rev: '',
        datecreated: new Date(),
        location: '',
        faultid: 0,
        equipmentpartname: '',
        description: '',
        equipmentpartid: '',
        equipmentcatid: '',
        equipmentcatname: '',
        color: 'faulty',
        faculty: 'OGPOOC',
        tagname: '',
        tagid: '',
        status: true,
        department: '',
        datefixed: '',
        equipmenttag: '',
        staff: '',
        post: '',
        staffid: '',
        beepstatus: false,
        animateswitch: true,
        fixedstatus: false,
        name: '',
        operatorstatus: true,
        managerstatus: false,
        supervisorstatus: false,
        picture: '',
        fixed: false
      }
      this.db.getfaultregistrys().then(data => {
        if (data.length != 0) {
          this.faultregistry.faultid = data[0].faultid + 1;
        }
        else {
          this.faultregistry.faultid = 1;
        }
      });
    }
    else if (this.navParams.get('type') == 'Equipment') {
      this.title = 'Add';
      this.addFromequip = true;
      this.faultregistry = this.navParams.get('faultregistry');
      this.db.getfaultregistrys().then(data => {
        if (data.length != 0) {
          this.faultregistry.faultid = data[0].faultid + 1;
        }
        else {
          this.faultregistry.faultid = 1;
        }
      });
    }
    else {
      this.faultregistry = this.navParams.get('faultregistry');
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddfaultregistryPage');
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

    this.localStorageItem = JSON.parse(localStorage.getItem('user'));
    this.db.getSupervisor(this.localStorageItem).then(item => {
      this.user = item;
      this.position = item.post;
      if (this.position != 'Supervisor') {
        this.disabled = true;
      }
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
    this.equipmentCatObject = newVal;
    if (this.add) {
      this.faultregistry.equipmentcatname = newVal.name;
      this.faultregistry.equipmenttag = newVal.tag;
      this.catTrue = true;
    }
    else {
      this.faultregistry.equipmentcatname = newVal;
      this.catTrue = true;
    }
  }

  selectEquipmentsTags(newVal) {
    this.equipmentTagObject = newVal;
    if (this.add) {
      this.faultregistry.equipmenttag = newVal.tag;
      this.tagTrue = true;
    }
    else {
      this.faultregistry.equipmenttag = newVal;
      this.tagTrue = true;
    }
  }


  selectEquipmentsParts(newVal) {
    this.equipmentPartObject = newVal;
    if (this.add) {
      this.faultregistry.equipmentpartname = newVal.name;
      this.faultregistry.tagname = newVal.tag
      this.partTrue = true;
    }
    else {
      this.faultregistry.equipmentpartname = newVal;
      this.partTrue = true;
    }
  }

  selectEquipmentsPartsTags(newVal) {
    this.equipmentPartTagObject = newVal;
    if (this.add) {
      this.faultregistry.tagname = newVal.tag;
      this.partTrue = true;
    }
    else {
      this.faultregistry.tagname = newVal;
      this.partTrue = true;
    }
  }

  picture() {
    let actionSheet = this.actionSheetCtrl.create({
      title: "Select Picture to fix",
      buttons: [
        {
          text: "From Camera",
          handler: () => {
            this.camera();
          }
        },
        {
          text: "Select From Gallery",
          handler: () => {
            if (this.platform.is('cordova')) {
              this.gallery();
            }
            else {
              this.showfileinput = true;
            }
          }
        },
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            console.log("Canceled");
          }
        }
      ]
    });
    actionSheet.present();
  }

  camera() {
    if (this.platform.is('cordova')) {
      this.db.takePhoto().then((image) => {
        this.faultregistry.picture = image.toString();
      }).catch((err) => {
        console.log(err);
      })
    }
    else {
      if (this.oncam) {
        this.webcam.getBase64().then(base => {
          this.faultregistry.picture = base;
          this.oncam = false;
        }).catch(e => console.log(e));
      }
      else {
        this.oncam = true;
      }
    }
  }

  gallery() {
    this.db.selectPhotograph().then((image) => {
      this.faultregistry.picture = image.toString();
    }).catch((err) => {
      console.log(err);
    })
  }

  onCamError(err) { }

  onCamSuccess() { }

  handleFiles(event) {
    var myThis = this;
    this.files = event.target.files;
    const fileIndex = _.range(this.files.length);
    var reader = new FileReader();
    reader.readAsDataURL(this.files[0]);
    reader.onloadend = function () {
      myThis.faultregistry.picture = reader.result.toString();
    }
    reader.onerror = function (error) {
      console.log("Error: ", error);
    }
  }

  submit() {
    if (this.add || this.addFromequip) {
      this.faultregistry.department = this.user.departments;
      this.faultregistry.post = this.user.post;
      if (typeof this.equipmentCatObject == 'object') {
        this.faultregistry.equipmentcatid = this.equipmentCatObject.id;
      }
      if (typeof this.equipmentPartObject == 'object') {
        this.faultregistry.equipmentpartid = this.equipmentPartObject.id;
      }

      this.faultregistry.staff = this.user.name;
      this.faultregistry.staffid = this.localStorageItem;

      this.db.savefaultregistry(this.faultregistry).then(res => {
        this.viewCtrl.dismiss(res);

        this.db.getSupervisors().then(supervisors => {
          this.filterManager = supervisors.filter(data => data.post == 'Manager');
          this.filterHse = supervisors.filter(data => data.departments == 'HSE');
          this.filterAreaSupervisor = supervisors.filter(data => data.post == 'Supervisor' && data.departments == this.user.departments);
          this.filterOperator = supervisors.filter(data => data.post == 'Operator' && data.departments == this.user.departments);


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

          this.filterOperator.forEach(item => {
            this.supervisorArray.push(item.email);
          });

          var emailInfo = {
            name: this.user.name,
            department: this.user.departments,
            email: this.supervisorArray,
            phoneNumber: this.user.mobile,
            position: this.user.position,
            faultid: res.faultid,
            description: res.description,
            location: res.location,
            facility: res.faculty,
            type: 'faultregistry',
            datecreated: res.datecreated,
            equipmentcatname: res.equipmentcatname,
            equipmenttag: res.equipmenttag,
            equipmentpartname: res.equipmentpartname,
            tagname: res.tagname
          }

          this.httpService.sendEmailfaultregistry(emailInfo).subscribe(res => {

          });

          //if (this.platform.is('cordova')) {
            this.httpService.faultNotification(emailInfo).subscribe(res => {
            })
          //}


        });


        this.user.workorders.push(res.id);
        this.db.updateSupervisor(this.user).then(data => {

        });
      });
    }
    else {
      if (typeof this.equipmentCatObject == 'object') {
        this.faultregistry.equipmentcatid = this.equipmentCatObject.id;
        this.faultregistry.equipmentcatname = this.equipmentCatObject.name;
      }
      else {
        this.faultregistry.equipmentcatid = this.faultregistry.equipmentcatid;
        this.faultregistry.equipmentcatname = this.faultregistry.equipmentcatname;
      }
      if (typeof this.equipmentTagObject == 'object') {
        this.faultregistry.equipmentcatid = this.equipmentCatObject.id;
        this.faultregistry.equipmenttag = this.equipmentCatObject.tag;
      }
      else {
        this.faultregistry.equipmentcatid = this.faultregistry.equipmentcatid;
        this.faultregistry.equipmenttag = this.faultregistry.equipmenttag;
      }
      if (typeof this.equipmentPartObject == 'object') {
        this.faultregistry.equipmentpartid = this.equipmentPartObject.id;
        this.faultregistry.equipmentpartname = this.equipmentPartObject.name;
      }
      else {
        this.faultregistry.equipmentpartid = this.faultregistry.equipmentpartid;
        this.faultregistry.equipmentpartname = this.faultregistry.equipmentpartname;
      }
      if (typeof this.equipmentPartTagObject == 'object') {
        this.faultregistry.equipmentpartid = this.equipmentPartObject.id;
        this.faultregistry.tagname = this.equipmentPartTagObject.tag;
      }
      else {
        this.faultregistry.equipmentpartid = this.equipmentPartObject.id;
        this.faultregistry.tagname = this.faultregistry.tagname;
      }
      this.db.updatefaultregistry(this.faultregistry).then(order => {
        this.viewCtrl.dismiss(order);
      })
    }
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

}
