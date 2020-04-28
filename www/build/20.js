webpackJsonp([20],{

/***/ 784:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewpreventivemaintenancePageModule", function() { return ViewpreventivemaintenancePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewpreventivemaintenance__ = __webpack_require__(865);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ViewpreventivemaintenancePageModule = /** @class */ (function () {
    function ViewpreventivemaintenancePageModule() {
    }
    ViewpreventivemaintenancePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__viewpreventivemaintenance__["a" /* ViewpreventivemaintenancePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__viewpreventivemaintenance__["a" /* ViewpreventivemaintenancePage */]),
            ],
        })
    ], ViewpreventivemaintenancePageModule);
    return ViewpreventivemaintenancePageModule;
}());

//# sourceMappingURL=viewpreventivemaintenance.module.js.map

/***/ }),

/***/ 865:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewpreventivemaintenancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pouch_service_pouch_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_httpservice__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_animations__ = __webpack_require__(170);
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
 * Generated class for the ViewpreventivemaintenancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewpreventivemaintenancePage = /** @class */ (function () {
    function ViewpreventivemaintenancePage(navCtrl, platform, httpService, alertCtrl, db, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.httpService = httpService;
        this.alertCtrl = alertCtrl;
        this.db = db;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.filteredWorkorder = [];
        this.workorders = [];
        this.show = false;
        this.trackByName = function (index, item) {
            return item.id;
        };
        this.loadAlarm();
        this.loadAlarmWO();
        this.equipment = this.navParams.get('equipment');
    }
    ViewpreventivemaintenancePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.localStorageItem = JSON.parse(localStorage.getItem('user'));
        console.log('ionViewDidLoad ViewpreventivemaintenancePage');
        this.db.getSupervisor(this.localStorageItem).then(function (item) {
            _this.user = item;
            _this.position = item.post;
            if (_this.position == 'Operator' || _this.position == 'Admin') {
                _this.show = true;
            }
        });
        this._loadWorkorders();
        this.loadAlarm();
        this.loadAlarmWO();
    };
    ViewpreventivemaintenancePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.localStorageItem = JSON.parse(localStorage.getItem('user'));
        this.db.getSupervisor(this.localStorageItem).then(function (item) {
            _this.user = item;
            _this.position = item.post;
            if (_this.position == 'Operator' || _this.position == 'Admin') {
                _this.show = true;
            }
        });
        this._loadWorkorders();
        this.loadAlarm();
        this.loadAlarmWO();
    };
    ViewpreventivemaintenancePage.prototype._loadWorkorders = function () {
        /* console.log(this.db.getBanners());
        this.db.getBanners().subscribe(banners => {
          console.log(banners)
        }); */
        var _this = this;
        this.db.getWorkorders()
            .then(function (workorders) {
            _this.filteredWorkorder = workorders.filter(function (data) { return data.department == _this.user.departments || _this.user.post == 'Manager' || _this.user.post == 'Admin' || _this.user.departments == 'HSE'; });
            _this.workorders = workorders.filter(function (data) { return data.department == _this.user.departments || _this.user.post == 'Manager' || _this.user.post == 'Admin' || _this.user.departments == 'HSE'; });
            _this.filteredWorkorder.forEach(function (workorder) {
                if (workorder.beepstatus == true) {
                    setInterval(function () {
                        workorder.animateswitch = "false";
                    }, 500);
                    setInterval(function () {
                        workorder.animateswitch = "true";
                    }, 1000);
                }
            });
        });
    };
    ViewpreventivemaintenancePage.prototype.loadAlarm = function () {
        var _this = this;
        this.db.getWorkorders().then(function (items) {
            items = items.filter(function (data) { return data.frequencyspandate != ""; });
            items.forEach(function (workorder) {
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
                    _this._loadWorkorders();
                    _this.db.updateWorkorder(workorder).then(function (data) {
                        //Send email when date is due.
                        _this.db.getSupervisors().then(function (supervisors) {
                            _this.filterManager = supervisors.filter(function (data) { return data.post == 'Manager'; });
                            _this.filterHse = supervisors.filter(function (data) { return data.departments == 'HSE'; });
                            _this.filterAreaSupervisor = supervisors.filter(function (data) { return data.post == 'Supervisor' && data.departments == workorder.department; });
                            if (workorder.responsibility == 'Operator') {
                                _this.filterOperator = supervisors.filter(function (data) { return data.post == 'Operator' && data.departments == workorder.department; });
                            }
                            _this.supervisorArray = [];
                            _this.filterManager.forEach(function (item) {
                                _this.supervisorArray.push(item.email);
                            });
                            _this.filterHse.forEach(function (item) {
                                _this.supervisorArray.push(item.email);
                            });
                            _this.filterAreaSupervisor.forEach(function (item) {
                                _this.supervisorArray.push(item.email);
                            });
                            if (workorder.responsibility == 'Operator') {
                                _this.filterOperator.forEach(function (item) {
                                    _this.supervisorArray.push(item.email);
                                });
                            }
                            var emailInfo = {
                                name: workorder.staff,
                                department: workorder.department,
                                email: _this.supervisorArray,
                                phoneNumber: _this.user.mobile,
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
                            };
                            _this.httpService.sendEmailworkorder(emailInfo).subscribe(function (res) {
                            });
                            //if (this.platform.is('cordova')) {
                            _this.httpService.workpermitNotification(emailInfo).subscribe(function (res) {
                            });
                            //}
                        });
                    });
                }
            });
        });
        this.db.getWorkpermits().then(function (items) {
            items.forEach(function (workpermit) {
                if (workpermit['wostatus'] != undefined) {
                    if (workpermit['wostatus'] == 'Approved' && workpermit['gstatus'] == true) {
                        _this.db.getWorkorder(workpermit['woid']).then(function (workorder) {
                            if (workorder != undefined) {
                                workorder.status = false;
                                workorder.dstatus = false;
                                workorder.beepstatus = false;
                                workorder.animateswitch = "false";
                                _this.db.updateWorkorder(workorder).then(function (res) {
                                    _this.db.getWorkpermits().then(function (items) {
                                        items = items.filter(function (item) { return item['gstatus'] == true && item['wostatus'] == 'Approved'; });
                                        items.forEach(function (item) {
                                            item['gstatus'] = false;
                                            _this.db.updateWorkpermit(item);
                                        });
                                    });
                                });
                            }
                        });
                    }
                    else {
                        console.log('Not yet active');
                    }
                }
            });
        });
    };
    ViewpreventivemaintenancePage.prototype.loadAlarmWO = function () {
        var _this = this;
        this.db.getWorkorders().then(function (items) {
            items = items.filter(function (data) { return data.frequencyspandate == ""; });
            items.forEach(function (workorder) {
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
                    _this._loadWorkorders();
                    _this.db.updateWorkorder(workorder).then(function (data) {
                        //Send email when date is due.
                        _this.db.getSupervisors().then(function (supervisors) {
                            _this.filterManager = supervisors.filter(function (data) { return data.post == 'Manager'; });
                            _this.filterHse = supervisors.filter(function (data) { return data.departments == 'HSE'; });
                            _this.filterAreaSupervisor = supervisors.filter(function (data) { return data.post == 'Supervisor' && data.departments == workorder.department; });
                            if (workorder.responsibility == 'Operator') {
                                _this.filterOperator = supervisors.filter(function (data) { return data.post == 'Operator' && data.departments == workorder.department; });
                            }
                            _this.supervisorArray = [];
                            _this.filterManager.forEach(function (item) {
                                _this.supervisorArray.push(item.email);
                            });
                            _this.filterHse.forEach(function (item) {
                                _this.supervisorArray.push(item.email);
                            });
                            _this.filterAreaSupervisor.forEach(function (item) {
                                _this.supervisorArray.push(item.email);
                            });
                            if (workorder.responsibility == 'Operator') {
                                _this.filterOperator.forEach(function (item) {
                                    _this.supervisorArray.push(item.email);
                                });
                            }
                            var emailInfo = {
                                name: workorder.staff,
                                department: workorder.department,
                                email: _this.supervisorArray,
                                phoneNumber: _this.user.mobile,
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
                            };
                            _this.httpService.sendEmailworkorder(emailInfo).subscribe(function (res) {
                            });
                            //if (this.platform.is('cordova')) {
                            _this.httpService.workpermitNotification(emailInfo).subscribe(function (res) {
                            });
                            //}
                        });
                    });
                }
            });
        });
        this.db.getWorkpermits().then(function (items) {
            items.forEach(function (workpermit) {
                if (workpermit['wostatus'] != undefined) {
                    if (workpermit['wostatus'] == 'Approved' && workpermit['gstatus'] == true) {
                        _this.db.getWorkorder(workpermit['woid']).then(function (workorder) {
                            if (workorder != undefined) {
                                workorder.status = false;
                                workorder.dstatus = false;
                                workorder.beepstatus = false;
                                workorder.animateswitch = "false";
                                _this.db.updateWorkorder(workorder).then(function (res) {
                                    _this.db.getWorkpermits().then(function (items) {
                                        items = items.filter(function (item) { return item['gstatus'] == true && item['wostatus'] == 'Approved'; });
                                        items.forEach(function (item) {
                                            item['gstatus'] = false;
                                            _this.db.updateWorkpermit(item);
                                        });
                                    });
                                });
                            }
                        });
                    }
                    else {
                        console.log('Not yet active');
                    }
                }
            });
        });
    };
    ViewpreventivemaintenancePage.prototype.back = function () {
        this.navCtrl.pop();
    };
    ViewpreventivemaintenancePage.prototype.filterWorkorders = function ($event) {
        var value = $event.target.value ? $event.target.value.toLowerCase() : '';
        this.filteredWorkorder = [];
        for (var _i = 0, _a = this.workorders; _i < _a.length; _i++) {
            var workorder = _a[_i];
            if (workorder.name.toLowerCase().indexOf(value) !== -1) {
                this.filteredWorkorder.push(workorder);
            }
        }
    };
    ViewpreventivemaintenancePage.prototype.openWorkorder = function (workorder) {
        var _this = this;
        var modal = this.modalCtrl.create('VieworderequipmentPage', { type: 'View', equipment: this.equipment, workorder: workorder });
        modal.onDidDismiss(function (data) {
            _this._loadWorkorders();
        });
        modal.present();
    };
    ViewpreventivemaintenancePage.prototype.ackWo = function (workorder) {
        workorder.status = true;
        workorder.dstatus = false;
        this.db.updateWorkorder(workorder).then(function (res) {
        });
    };
    ViewpreventivemaintenancePage.prototype.disackWo = function (workorder) {
        workorder.dstatus = true;
        workorder.status = false;
        this.db.updateWorkorder(workorder).then(function (res) {
        });
    };
    ViewpreventivemaintenancePage.prototype.navPtw = function (workorder) {
        var _this = this;
        workorder.woid = workorder.id;
        workorder.dstatus = true;
        this.db.updateWorkorder(workorder).then(function (res) {
            workorder.id = Math.round((new Date()).getTime()).toString();
            workorder.rev = "";
            _this.navCtrl.push('WorkpermitPage', { type: 'Workorder', workorder: workorder });
        });
    };
    ViewpreventivemaintenancePage.prototype.deleteWorkorder = function (workorder) {
        var _this = this;
        if (this.position == 'Supervisor') {
            var alert_1 = this.alertCtrl.create({
                title: 'Delete Workorder',
                message: 'Are you sure you want to delete workorder: ' + workorder.workorderno,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    },
                    {
                        text: 'Confirm',
                        handler: function () {
                            _this.db.deleteWorkorder(workorder)
                                .then(function (success) {
                                _this._loadWorkorders();
                            });
                        }
                    }
                ]
            });
            alert_1.present();
        }
    };
    ViewpreventivemaintenancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-viewpreventivemaintenance',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\viewpreventivemaintenance\viewpreventivemaintenance.html"*/'<ion-header>\n\n  <ion-toolbar color="primary">\n\n    <ion-title>Work Order</ion-title>\n\n\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-primary50">\n\n\n\n  <ion-toolbar color="primary">\n\n    <ion-searchbar (ionInput)="filterWorkorders($event)"></ion-searchbar>\n\n  </ion-toolbar>\n\n\n\n  <ion-list style="width: 100%" [virtualScroll]="filteredWorkorder" [virtualTrackBy]="trackByName" [approxItemHeight]="\'200px\'">\n\n  <ion-card *virtualItem="let workorder" style="margin-top: 5px; margin-bottom: 10px;" [ngClass]="{\'high\':workorder.beepstatus==true && workorder.priority==\'High\',\n\n        \'medium\':workorder.beepstatus==true && workorder.priority==\'Medium\', \'low\':workorder.beepstatus==true && workorder.priority==\'Low\'}" [@elementState]="workorder.animateswitch">\n\n    <ion-card-content (press)="deleteWorkorder(workorder, i)">\n\n        <ion-row>\n\n            <h2 text-bold text-uppercase><strong>WONO: 00{{ workorder.workorderno}}</strong></h2>\n\n          </ion-row>\n\n          <ion-row>\n\n              <h2 text-bold text-uppercase>Worktype: {{ workorder.worktypes}}</h2>\n\n            </ion-row>\n\n      <ion-row>\n\n        <ion-item>\n\n          <ion-icon color="secondary" item-right small name="md-create" (click)="openWorkorder(workorder)"></ion-icon>\n\n          <ion-icon color="danger" item-right small name="ios-trash" (click)="deleteWorkorder(workorder, i)"></ion-icon>\n\n\n\n        </ion-item>\n\n      </ion-row>\n\n     \n\n      <ion-row (click)="openWorkorder(workorder)">\n\n        <h2 text-bold text-uppercase><strong>{{ workorder.datecreated}}</strong></h2>\n\n        <p ion-text class="list-price">{{ workorder.facility }}</p>\n\n      </ion-row>\n\n      <ion-row (click)="openWorkorder(workorder)">\n\n        <p class="shop">{{ workorder.name }}</p>\n\n        <p  class="list-price">{{ workorder.description}}</p>\n\n      </ion-row>\n\n      <ion-row (click)="openWorkorder(workorder)">\n\n        <p class="shop eng-color">{{ workorder.equipmentcatname }}</p>\n\n        <p class="list-price eng-color">{{ workorder.Operator }}</p>\n\n      </ion-row>\n\n      <div (click)="openWorkorder(workorder)" *ngIf="workorder.dstatus && !workorder.status">\n\n        <p class="shop txt-size">Work order was dismissed</p>\n\n      </div>\n\n      <ion-row>\n\n        <button ion-button small color="attrgreen" class="list-price" (click)="openWorkorder(workorder)">Proceed</button>\n\n      </ion-row>\n\n    </ion-card-content>\n\n    </ion-card>\n\n  </ion-list>\n\n  <ion-fab bottom left>\n\n    <button ion-fab mini (click)="back()">\n\n            <ion-icon name="arrow-back"></ion-icon>\n\n        </button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\viewpreventivemaintenance\viewpreventivemaintenance.html"*/,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["j" /* trigger */])('elementState', [
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["g" /* state */])('false', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["h" /* style */])({
                        opacity: 1
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["g" /* state */])('true', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["h" /* style */])({
                        opacity: 0
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* transition */])('false => true', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["e" /* animate */])('500ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* transition */])('true => false', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["e" /* animate */])('500ms ease-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__providers_httpservice__["a" /* HttpserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__pouch_service_pouch_service__["a" /* PouchService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */]])
    ], ViewpreventivemaintenancePage);
    return ViewpreventivemaintenancePage;
}());

//# sourceMappingURL=viewpreventivemaintenance.js.map

/***/ })

});
//# sourceMappingURL=20.js.map