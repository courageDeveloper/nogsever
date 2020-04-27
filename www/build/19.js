webpackJsonp([19],{

/***/ 792:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewworkpermitPageModule", function() { return ViewworkpermitPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewworkpermit__ = __webpack_require__(873);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__ = __webpack_require__(380);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ViewworkpermitPageModule = /** @class */ (function () {
    function ViewworkpermitPageModule() {
    }
    ViewworkpermitPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__viewworkpermit__["a" /* ViewworkpermitPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__viewworkpermit__["a" /* ViewworkpermitPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__["a" /* IonicImageViewerModule */]
            ],
        })
    ], ViewworkpermitPageModule);
    return ViewworkpermitPageModule;
}());

//# sourceMappingURL=viewworkpermit.module.js.map

/***/ }),

/***/ 873:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewworkpermitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pouch_service_pouch_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_httpservice__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ViewworkpermitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewworkpermitPage = /** @class */ (function () {
    function ViewworkpermitPage(_DomSanitizer, navCtrl, platform, modalCtrl, viewCtrl, httpService, alertCtrl, db, navParams) {
        this._DomSanitizer = _DomSanitizer;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.httpService = httpService;
        this.alertCtrl = alertCtrl;
        this.db = db;
        this.navParams = navParams;
        this.filteredWorkpermit = [];
        this.filteredWorkpermitGen = [];
        this.workpermits = [];
        this.show = false;
        this.disabled = false;
        this.disabled2 = false;
        this.disable = true;
        this.arraySelectedPermits = [];
        this.trackByName = function (index, item) {
            return item.id;
        };
    }
    ViewworkpermitPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.arraySelectedPermits = [];
        this.localStorageItem = JSON.parse(localStorage.getItem('user'));
        console.log('ionViewDidLoad ViewworkpermitPage');
        this.db.getSupervisor(this.localStorageItem).then(function (item) {
            _this.user = item;
            _this.position = item.post;
            if (_this.position == 'Operator' || _this.position == 'Admin') {
                _this.show = true;
            }
        });
        this._loadWorkpermits();
    };
    ViewworkpermitPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.arraySelectedPermits = [];
        this.disable = true;
        this.localStorageItem = JSON.parse(localStorage.getItem('user'));
        this.db.getSupervisor(this.localStorageItem).then(function (item) {
            _this.user = item;
            _this.position = item.post;
            if (_this.position == 'Operator' || _this.position == 'Admin') {
                _this.show = true;
            }
        });
        this._loadWorkpermits();
    };
    ViewworkpermitPage.prototype._loadWorkpermits = function () {
        var _this = this;
        this.db.getWorkpermits()
            .then(function (workpermits) {
            _this.filteredWorkpermit = workpermits.filter(function (data) { return data.department == _this.user.departments || _this.user.post == 'Manager' || _this.user.post == 'Admin' || _this.user.departments == 'HSE'; });
            _this.workpermits = workpermits.filter(function (data) { return data.department == _this.user.departments || _this.user.post == 'Manager' || _this.user.post == 'Admin' || _this.user.departments == 'HSE'; });
            _this.filteredWorkpermit.forEach(function (item) {
                if (item.areasupervisorid != '' && item.areasupervisordisapprove == false || item.areasupervisordisapprove == true) {
                    _this.db.getSupervisor(item.areasupervisorid).then(function (res) {
                        item['sname'] = res.name;
                    });
                }
                if (item.managerid != '' && item.managerdisapprove == false || item.managerdisapprove == true) {
                    _this.db.getSupervisor(item.managerid).then(function (res) {
                        item['mname'] = res.name;
                    });
                }
                if (item.hseid != '' && item.hsedisapprove == false || item.hsedisapprove == true) {
                    _this.db.getSupervisor(item.hseid).then(function (res) {
                        item['hname'] = res.name;
                    });
                }
                if (item.areasupervisorid == "" || item.hseid == "" || item.managerid == "" || item.areasupervisordisapprove == true || item.managerdisapprove == true || item.hsedisapprove == true) {
                    item['wostatus'] = "Pending";
                }
                else {
                    item['wostatus'] = "Approved";
                    if (item['gstatus'] != undefined) {
                        item['gstatus'] = true;
                    }
                    _this.db.updateWorkpermit(item).then(function (data) {
                    });
                }
                if (_this.user.post == 'Supervisor' && _this.user.departments != 'HSE') {
                    if (_this.user.id == item.areasupervisorid && item.areasupervisordisapprove == false) {
                        item['disabled'] = true;
                        item['disabled2'] = false;
                    }
                    else if (_this.user.id == item.areasupervisorid && item.areasupervisordisapprove == true) {
                        item['disabled'] = false;
                        item['disabled2'] = true;
                    }
                    else {
                        item['disabled'] = false;
                        item['disabled2'] = false;
                    }
                }
                else if (_this.user.post == 'Manager') {
                    if (_this.user.id == item.managerid && item.managerdisapprove == false) {
                        item['disabled'] = true;
                        item['disabled2'] = false;
                    }
                    else if (_this.user.id == item.managerid && item.managerdisapprove == true) {
                        item['disabled'] = false;
                        item['disabled2'] = true;
                    }
                    else {
                        item['disabled'] = false;
                        item['disabled2'] = false;
                    }
                }
                else if (_this.user.post == 'Supervisor' && _this.user.departments == 'HSE') {
                    if (_this.user.id == item.hseid && item.hsedisapprove == false) {
                        item['disabled'] = true;
                        item['disabled2'] = false;
                    }
                    else if (_this.user.id == item.hseid && item.hsedisapprove == true) {
                        item['disabled'] = false;
                        item['disabled2'] = true;
                    }
                    else {
                        item['disabled'] = false;
                        item['disabled2'] = false;
                    }
                }
            });
        });
    };
    ViewworkpermitPage.prototype.loadWorkPermitGen = function () {
        /* this.db.getWorkpermits()
          .then((workpermits: Array<Workpermit>) => {
            this.filteredWorkpermitGen = workpermits.filter(data => data.)
          }) */
    };
    ViewworkpermitPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    ViewworkpermitPage.prototype.newWorkPermit = function () {
        this.navCtrl.push('WorkpermitPage', { type: 'Add' });
    };
    ViewworkpermitPage.prototype.openWorkpermit = function (workpermit) {
        this.navCtrl.push('WorkpermitPage', { type: 'Edit', workpermit: workpermit });
    };
    ViewworkpermitPage.prototype.filterWorkpermits = function ($event) {
        var value = $event.target.value ? $event.target.value.toLowerCase() : '';
        this.filteredWorkpermit = [];
        for (var _i = 0, _a = this.workpermits; _i < _a.length; _i++) {
            var workpermit = _a[_i];
            if (workpermit.datecreated.toLowerCase().indexOf(value) !== -1 || workpermit.department.toLowerCase().indexOf(value) !== -1 || workpermit.equipmenttag.toLowerCase().indexOf(value) !== -1 || workpermit.tagname.toLowerCase().indexOf(value) !== -1) {
                this.filteredWorkpermit.push(workpermit);
            }
        }
    };
    ViewworkpermitPage.prototype.deleteWorkpermit = function (workpermit) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Delete Workpermit',
            message: 'Are you sure you want to delete workpermit: ' + workpermit.ptwno,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Confirm',
                    handler: function () {
                        _this.db.deleteWorkpermit(workpermit)
                            .then(function (success) {
                            _this._loadWorkpermits();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    ViewworkpermitPage.prototype.approve = function (workpermit) {
        var _this = this;
        /* workpermit.hseid = this.user.id;
        workpermit.areasupervisorid = this.user.id;
        workpermit.managerid = this.user.id; */
        if (this.user.post == 'Supervisor' && this.user.departments != 'HSE') {
            workpermit.areasupervisorid = this.user.id;
            workpermit.areasupervisordisapprove = false;
            workpermit.sastatus = true;
            workpermit.areasupervisordate = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
            this.db.updateWorkpermit(workpermit).then(function (item) {
                if (_this.user.id == item.areasupervisorid) {
                    item['disabled'] = true;
                    item['disabled2'] = false;
                }
                _this._loadWorkpermits();
                _this.db.getSupervisor(item.permitholderid).then(function (res) {
                    var emailInfo = {
                        name: _this.user.name,
                        department: _this.user.departments,
                        email: res.email,
                        phoneNumber: _this.user.mobile,
                        position: _this.user.position,
                        ptwno: item.ptwno,
                        description: item.description,
                        location: item.exactlocation,
                        facility: item.faculty,
                        type: 'approve'
                    };
                    _this.httpService.sendEmail(emailInfo).subscribe(function (res) {
                    });
                    //if (this.platform.is('cordova')) {
                    _this.httpService.workpermitNotification(emailInfo).subscribe(function (res) {
                    });
                    //}
                });
            });
            //this._loadWorkpermits();
        }
        else if (this.user.post == 'Manager') {
            workpermit.managerid = this.user.id;
            workpermit.managerdisapprove = false;
            workpermit.mastatus = true;
            workpermit.managerdate = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
            this.db.updateWorkpermit(workpermit).then(function (item) {
                if (_this.user.id == item.managerid) {
                    item['disabled'] = true;
                    item['disabled2'] = false;
                }
                _this._loadWorkpermits();
                _this.db.getSupervisor(item.permitholderid).then(function (res) {
                    var emailInfo = {
                        name: _this.user.name,
                        department: _this.user.departments,
                        email: res.email,
                        phoneNumber: _this.user.mobile,
                        position: _this.user.position,
                        ptwno: item.ptwno,
                        description: item.description,
                        location: item.exactlocation,
                        facility: item.faculty,
                        type: 'approve'
                    };
                    _this.httpService.sendEmail(emailInfo).subscribe(function (res) {
                    });
                    //if (this.platform.is('cordova')) {
                    _this.httpService.workpermitNotification(emailInfo).subscribe(function (res) {
                    });
                    //}
                });
            });
            //this._loadWorkpermits();
        }
        else if (this.user.post == 'Supervisor' && this.user.departments == 'HSE') {
            workpermit.hseid = this.user.id;
            workpermit.hsedisapprove = false;
            workpermit.hastatus = true;
            workpermit.hsedate = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
            this.db.updateWorkpermit(workpermit).then(function (item) {
                if (_this.user.id == item.hseid) {
                    item['disabled'] = true;
                    item['disabled2'] = false;
                }
                _this._loadWorkpermits();
                _this.db.getSupervisor(item.permitholderid).then(function (res) {
                    var emailInfo = {
                        name: _this.user.name,
                        department: _this.user.departments,
                        email: res.email,
                        phoneNumber: _this.user.mobile,
                        position: _this.user.position,
                        ptwno: item.ptwno,
                        description: item.description,
                        location: item.exactlocation,
                        facility: item.faculty,
                        type: 'approve'
                    };
                    _this.httpService.sendEmail(emailInfo).subscribe(function (res) {
                    });
                    //if (this.platform.is('cordova')) {
                    _this.httpService.workpermitNotification(emailInfo).subscribe(function (res) {
                    });
                    //}
                });
            });
            //this._loadWorkpermits();
        }
    };
    ViewworkpermitPage.prototype.disapprove = function (workpermit) {
        var _this = this;
        /*  workpermit.areasupervisorid = this.user.id;
         workpermit.managerid = this.user.id;
         workpermit.hseid = this.user.id;
      */
        if (this.user.post == 'Supervisor' && this.user.departments != 'HSE') {
            workpermit.areasupervisorid = this.user.id;
            workpermit.areasupervisordisapprove = true;
            workpermit.sastatus = true;
            workpermit.areasupervisordate = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
            var alert_1 = this.alertCtrl.create({
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
                        handler: function (data) {
                            workpermit.messageareasupervisor = data.message;
                            _this.db.updateWorkpermit(workpermit);
                        }
                    }
                ]
            });
            alert_1.present();
            this.db.updateWorkpermit(workpermit).then(function (item) {
                if (_this.user.id == item.areasupervisorid) {
                    item['disabled'] = false;
                    item['disabled2'] = true;
                }
                _this._loadWorkpermits();
                _this.db.getSupervisor(item.permitholderid).then(function (res) {
                    var emailInfo = {
                        name: _this.user.name,
                        department: _this.user.departments,
                        email: res.email,
                        phoneNumber: _this.user.mobile,
                        position: _this.user.position,
                        ptwno: item.ptwno,
                        description: item.description,
                        location: item.exactlocation,
                        facility: item.faculty,
                        type: 'disapprove'
                    };
                    _this.httpService.sendEmail(emailInfo).subscribe(function (res) {
                    });
                    //if (this.platform.is('cordova')) {
                    _this.httpService.workpermitNotification(emailInfo).subscribe(function (res) {
                    });
                    //}
                });
            });
            //this._loadWorkpermits();
        }
        else if (this.user.post == 'Manager') {
            workpermit.managerid = this.user.id;
            workpermit.managerdisapprove = true;
            workpermit.mastatus = true;
            workpermit.managerdate = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
            var alert_2 = this.alertCtrl.create({
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
                        handler: function (data) {
                            workpermit.messagemanager = data.message;
                            _this.db.updateWorkpermit(workpermit);
                        }
                    }
                ]
            });
            alert_2.present();
            this.db.updateWorkpermit(workpermit).then(function (item) {
                if (_this.user.id == item.managerid) {
                    item['disabled'] = false;
                    item['disabled2'] = true;
                }
                _this._loadWorkpermits();
                _this.db.getSupervisor(item.permitholderid).then(function (res) {
                    var emailInfo = {
                        name: _this.user.name,
                        department: _this.user.departments,
                        email: res.email,
                        phoneNumber: _this.user.mobile,
                        position: _this.user.position,
                        ptwno: item.ptwno,
                        description: item.description,
                        location: item.exactlocation,
                        facility: item.faculty,
                        type: 'disapprove'
                    };
                    _this.httpService.sendEmail(emailInfo).subscribe(function (res) {
                    });
                    //if (this.platform.is('cordova')) {
                    _this.httpService.workpermitNotification(emailInfo).subscribe(function (res) {
                    });
                    //}
                });
            });
            //this._loadWorkpermits();
        }
        else if (this.user.post == 'Supervisor' && this.user.departments == 'HSE') {
            workpermit.hseid = this.user.id;
            workpermit.hsedisapprove = true;
            workpermit.hastatus = true;
            workpermit.hsedate = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
            var alert_3 = this.alertCtrl.create({
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
                        handler: function (data) {
                            workpermit.messagehse = data.message;
                            _this.db.updateWorkpermit(workpermit);
                        }
                    }
                ]
            });
            alert_3.present();
            this.db.updateWorkpermit(workpermit).then(function (item) {
                if (_this.user.id == item.hseid) {
                    item['disabled'] = false;
                    item['disabled2'] = true;
                }
                _this._loadWorkpermits();
                _this.db.getSupervisor(item.permitholderid).then(function (res) {
                    var emailInfo = {
                        name: _this.user.name,
                        department: _this.user.departments,
                        email: res.email,
                        phoneNumber: _this.user.mobile,
                        position: _this.user.position,
                        ptwno: item.ptwno,
                        description: item.description,
                        location: item.exactlocation,
                        facility: item.faculty,
                        type: 'disapprove'
                    };
                    _this.httpService.sendEmail(emailInfo).subscribe(function (res) {
                    });
                    //if (this.platform.is('cordova')) {
                    _this.httpService.workpermitNotification(emailInfo).subscribe(function (res) {
                    });
                    //}
                });
            });
            //this._loadWorkpermits();
        }
    };
    ViewworkpermitPage.prototype.print = function (workpermit) {
        this.arraySelectedPermits = [];
        this.arraySelectedPermits.push(workpermit);
        this.navCtrl.push('PrintworkpermitPage', { type: 'Edit', workpermit: this.arraySelectedPermits });
    };
    ViewworkpermitPage.prototype.checkboxClicked = function (workpermit) {
        this.selectedWorkpermit = workpermit;
        this.disable = false;
        this.arraySelectedPermits.push(this.selectedWorkpermit);
    };
    ViewworkpermitPage.prototype.printSelected = function () {
        this.navCtrl.push('PrintworkpermitPage', { type: 'Edit', workpermit: this.arraySelectedPermits });
        this.arraySelectedPermits = [];
    };
    ViewworkpermitPage.prototype.fixed = function (workpermit) {
        var _this = this;
        var modal = this.modalCtrl.create('FixedPage', { workpermit: workpermit, type: 'workpermit' });
        modal.onDidDismiss(function (data) {
            if (data) {
                _this._loadWorkpermits();
            }
        });
        modal.present();
    };
    ViewworkpermitPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-viewworkpermit',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\viewworkpermit\viewworkpermit.html"*/'<ion-header>\n\n  <ion-toolbar color="primary">\n\n    <ion-title>Work Permit</ion-title>\n\n\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-primary50">\n\n\n\n  <ion-toolbar color="primary">\n\n    <ion-searchbar (ionInput)="filterWorkpermits($event)"></ion-searchbar>\n\n  </ion-toolbar>\n\n\n\n  <ion-fab top right *ngIf="position==\'Operator\'">\n\n    <button ion-fab mini (click)="newWorkPermit()" color="secondary"><ion-icon name="ios-copy"></ion-icon></button>\n\n  </ion-fab>\n\n\n\n  <button ion-button mini (click)="printSelected()" color="danger" [disabled]="disable"><div>Print Selected</div> <ion-icon class="text-space" name="print"></ion-icon></button>\n\n\n\n  <ion-list style="width: 100%" [virtualScroll]="filteredWorkpermit" [virtualTrackBy]="trackByName" [approxItemHeight]="\'200px\'">\n\n  <ion-card *virtualItem="let workpermit" style="margin-top: 15px; margin-bottom: 20px;">\n\n    <ion-card-content (press)="deleteWorkpermit(workpermit, i)">\n\n      <ion-row>\n\n          <ion-checkbox color="primary" (click)="checkboxClicked(workpermit)"></ion-checkbox>\n\n        <ion-item>\n\n          <img class="equip-image" *ngIf="workpermit.picture != \'\'" [src]="_DomSanitizer.bypassSecurityTrustUrl(workpermit.picture)" alt="equipment" imageViewer/>\n\n          <img class="equip-image" *ngIf="workpermit.picture == \'\'"  src="assets/images/no-image.png" alt="equipment" imageViewer/> \n\n          <button *ngIf="position==\'Operator\'" class="list-price" color="secondary" title="Fixed It?" ion-button item-right mini (click)="fixed(workpermit)" [disabled]="workpermit.wostatus==\'Pending\'">Fixed It?</button>\n\n          <button class="list-price" color="primary" title="Print Workpermit" ion-fab item-right mini (click)="print(workpermit)"><ion-icon\n\n              name="print"></ion-icon></button>\n\n        </ion-item>\n\n      </ion-row>\n\n      \n\n      <ion-row (click)="openWorkpermit(workpermit)">\n\n        <span><strong>PTWNO: 00{{ workpermit.ptwno}}</strong></span>\n\n      </ion-row>\n\n      <ion-row (click)="openWorkpermit(workpermit)">\n\n        <p ion-text class="align-details"><strong>PERMIT HOLDER:</strong> {{ workpermit.permitholdername }}</p>\n\n      </ion-row>\n\n      <ion-row (click)="openWorkpermit(workpermit)">\n\n        <p ion-text class="align-details"><strong>DEPARTMENT:</strong> {{ workpermit.department}}</p>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-item>\n\n          <ion-icon color="secondary" item-right small name="md-create" (click)="openWorkpermit(workpermit)"></ion-icon>\n\n          <ion-icon color="danger" item-right small name="ios-trash" (click)="deleteWorkpermit(workpermit, i)"></ion-icon>\n\n\n\n        </ion-item>\n\n      </ion-row>\n\n      <ion-row (click)="openWorkpermit(workpermit)">\n\n        <h2 text-bold><strong>{{ workpermit.datecreated }}</strong></h2>\n\n        <p ion-text class="list-price">{{ workpermit.faculty }}</p>\n\n      </ion-row>\n\n      <ion-row (click)="openWorkpermit(workpermit)">\n\n        <p text-bold>{{ workpermit.description }}</p>\n\n        <p ion-text class="list-price">{{ workpermit.enddate}}</p>\n\n      </ion-row>\n\n      <ion-row *ngIf="!show">\n\n        <button ion-button small color="attrgreen" class="list-price" (click)="approve(workpermit)" [disabled]=\'workpermit.disabled\'>Approve</button>\n\n        <button ion-button small color="danger" class="list-price" (click)="disapprove(workpermit)" [disabled]=\'workpermit.disabled2\'>Disapprove</button>\n\n      </ion-row>\n\n      <ion-row *ngIf="show">\n\n        <p *ngIf="!workpermit.areasupervisordisapprove || !workpermit.managerdisapprove || !workpermit.hsedisapprove" class="attrgreen">Approved\n\n          by: <span *ngIf="!workpermit.areasupervisordisapprove">{{workpermit.sname}}</span> <span *ngIf="!workpermit.managerdisapprove">{{workpermit.mname}}</span>\n\n          <span *ngIf="!workpermit.hsedisapprove">{{workpermit.hname}}</span> </p>\n\n        <div *ngIf="workpermit.wostatus==\'Approved\'" class="list-price attrgreen">{{workpermit.wostatus}}\n\n          <ion-icon color="attrgreen" item-right small name="md-done-all"></ion-icon>\n\n        </div>\n\n        <div *ngIf="workpermit.wostatus==\'Pending\'" class="list-price attrpend">{{workpermit.wostatus}}\n\n          <ion-icon color="danger" item-right small name="md-information-circle"></ion-icon>\n\n        </div>\n\n      </ion-row>\n\n      <ion-row *ngIf="show">\n\n        <p *ngIf="workpermit.areasupervisordisapprove || workpermit.managerdisapprove || workpermit.hsedisapprove" class="danger">Disapproved\n\n          by:\n\n          <span *ngIf="workpermit.areasupervisordisapprove">{{workpermit.sname}}</span>\n\n          <span *ngIf="workpermit.managerdisapprove">{{workpermit.mname}}</span>\n\n          <span *ngIf="workpermit.hsedisapprove">{{workpermit.hname}}</span> </p>\n\n      </ion-row>\n\n      <ion-row *ngIf="show">\n\n        <p *ngIf="workpermit.areasupervisordisapprove || workpermit.managerdisapprove || workpermit.hsedisapprove" class="danger">\n\n         <u> REASONS FOR DISAPPROVAL </u>\n\n        </p>\n\n      </ion-row>\n\n      <ion-row *ngIf="show">\n\n        <ion-col *ngIf="workpermit.areasupervisordisapprove"> {{workpermit.sname}} </ion-col>\n\n        <ion-col *ngIf="workpermit.areasupervisordisapprove">\n\n        {{workpermit.messageareasupervisor}} </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="show">\n\n        <ion-col *ngIf="workpermit.managerdisapprove"> {{workpermit.mname}}</ion-col>\n\n        <ion-col *ngIf="workpermit.managerdisapprove">\n\n        {{workpermit.messagemanager}} </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="show">\n\n          <ion-col *ngIf="workpermit.hsedisapprove">{{workpermit.hname}}</ion-col>\n\n          <ion-col *ngIf="workpermit.hsedisapprove">\n\n          {{workpermit.messagehse}} </ion-col>\n\n        </ion-row>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-list>\n\n  <ion-fab bottom left>\n\n    <button ion-fab mini (click)="back()">\n\n      <ion-icon name="arrow-back"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\viewworkpermit\viewworkpermit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["DomSanitizer"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_httpservice__["a" /* HttpserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__pouch_service_pouch_service__["a" /* PouchService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */]])
    ], ViewworkpermitPage);
    return ViewworkpermitPage;
}());

//# sourceMappingURL=viewworkpermit.js.map

/***/ })

});
//# sourceMappingURL=19.js.map