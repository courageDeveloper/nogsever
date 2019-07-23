import { Component } from '@angular/core';
import { IonicPage, ViewController, NavController, NavParams, ActionSheetController, Platform } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import * as _ from 'lodash'; // to help loop over files more succinctly
import { WebCamComponent } from 'ack-angular-webcam';
import { PouchService } from '../../pouch-service/pouch.service';
import { HttpserviceProvider } from '../../providers/httpservice';

/**
 * Generated class for the FixedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fixed',
  templateUrl: 'fixed.html',
})
export class FixedPage {
  oncam = false;
  webcam: WebCamComponent;
  workpermit: any;
  showfileinput = false;
  files: FileList;
  public user: any;
  localStorageItem;
  position;
  filterManager;
  filterHse;
  filterAreaSupervisor;
  supervisorArray;
  type;
  filterOperator;

  constructor(public httpService: HttpserviceProvider, public viewCtrl: ViewController, private platform: Platform, public navCtrl: NavController, public actionSheetCtrl: ActionSheetController, public navParams: NavParams, public _DomSanitizer: DomSanitizer, public db: PouchService) {
    this.type = this.navParams.get('type');

    if (this.type == 'workpermit') {
      this.workpermit = this.navParams.get('workpermit');
    }
    else if (this.type == 'faultregistry') {
      this.workpermit = this.navParams.get('registry');
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FixedPage');
    this.localStorageItem = JSON.parse(localStorage.getItem('user'));
    this.db.getSupervisor(this.localStorageItem).then(item => {
      this.user = item;
      this.position = item.post;
    });
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
        this.workpermit.picture = image.toString();
      }).catch((err) => {
        console.log(err);
      })
    }
    else {
      if (this.oncam) {
        this.webcam.getBase64().then(base => {
          this.workpermit.picture = base;
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
      this.workpermit.picture = image.toString();
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
      myThis.workpermit.picture = reader.result.toString();
    }
    reader.onerror = function (error) {
      console.log("Error: ", error);
    }
  }


  submit(workpermit) {
    if (this.type == 'workpermit') {
      workpermit.fixed = true;
      this.db.updateWorkpermit(workpermit).then(res => {
        this.viewCtrl.dismiss();
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
            picture: workpermit.picture,
            ptwno: res.ptwno,
            description: res.description,
            location: res.exactlocation,
            facility: res.faculty,
            type: 'fixedworkpemit'
          }

          this.httpService.sendEmailFixed(emailInfo).subscribe(res => {

          });

          //if (this.platform.is('cordova')) {
            this.httpService.workpermitNotification(emailInfo).subscribe(res => {
            })
          //}
        });
      });
    }
    else if (this.type == 'faultregistry') {
      workpermit.fixed = true;
      workpermit.color = "";
      workpermit.status = false;
      workpermit.fixedstatus = true;
      workpermit.animateswitch = false;
      workpermit.managerstatus = true;
      workpermit.supervisorstatus = true;
      this.db.updatefaultregistry(workpermit).then(res => {
        this.viewCtrl.dismiss();
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
            faultid: workpermit.faultid,
            description: workpermit.description,
            location: workpermit.location,
            facility: workpermit.faculty,
            type: 'fixed',
            datecreated: workpermit.datecreated,
            equipmentcatname: workpermit.equipmentcatname,
            equipmenttag: workpermit.equipmenttag,
            equipmentpartname: workpermit.equipmentpartname,
            tagname: workpermit.tagname,
            picture: workpermit.picture
          }

          this.httpService.sendEmailfaultregistry(emailInfo).subscribe(res => {
          });

          //if (this.platform.is('cordova')) {
            this.httpService.faultNotification(emailInfo).subscribe(res => {
            })
          //}
        })
      });
    }
  }



}
