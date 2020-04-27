webpackJsonp([31],{

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaultregistryPageModule", function() { return FaultregistryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__faultregistry__ = __webpack_require__(859);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__ = __webpack_require__(380);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FaultregistryPageModule = /** @class */ (function () {
    function FaultregistryPageModule() {
    }
    FaultregistryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__faultregistry__["a" /* FaultregistryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__faultregistry__["a" /* FaultregistryPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__["a" /* IonicImageViewerModule */]
            ],
        })
    ], FaultregistryPageModule);
    return FaultregistryPageModule;
}());

//# sourceMappingURL=faultregistry.module.js.map

/***/ }),

/***/ 859:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaultregistryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pouch_service_pouch_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_httpservice__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_animations__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(31);
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
 * Generated class for the FaultregistryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FaultregistryPage = /** @class */ (function () {
    function FaultregistryPage(_DomSanitizer, navCtrl, platform, navParams, modalCtrl, httpService, alertCtrl, db) {
        this._DomSanitizer = _DomSanitizer;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.httpService = httpService;
        this.alertCtrl = alertCtrl;
        this.db = db;
        this.filteredFaultregistry = [];
        this.faultregistrys = [];
        this.show = false;
        this.disabled = false;
        this.disabled2 = false;
        this.trackByName = function (index, item) {
            return item.id;
        };
    }
    FaultregistryPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad FaultregistryPage');
        this.localStorageItem = JSON.parse(localStorage.getItem('user'));
        this.db.getSupervisor(this.localStorageItem).then(function (item) {
            _this.user = item;
            _this.position = item.post;
            if (_this.position == 'Operator' || _this.position == 'Admin') {
                _this.show = true;
            }
        });
        this._loadFaultregistrys();
    };
    FaultregistryPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.localStorageItem = JSON.parse(localStorage.getItem('user'));
        this.db.getSupervisor(this.localStorageItem).then(function (item) {
            _this.user = item;
            _this.position = item.post;
            if (_this.position == 'Operator' || _this.position == 'Admin') {
                _this.show = true;
            }
        });
        this._loadFaultregistrys();
    };
    FaultregistryPage.prototype._loadFaultregistrys = function () {
        var _this = this;
        this.db.getfaultregistrys()
            .then(function (faultregistrys) {
            _this.filteredFaultregistry = faultregistrys.filter(function (data) { return data.department == _this.user.departments || _this.user.post == 'Manager' || _this.user.post == 'Admin' || _this.user.departments == 'HSE'; });
            _this.faultregistrys = faultregistrys.filter(function (data) { return data.department == _this.user.departments || _this.user.post == 'Manager' || _this.user.post == 'Admin' || _this.user.departments == 'HSE'; });
            _this.filteredFaultregistry.forEach(function (faultregistry) {
                if (faultregistry.status == true) {
                    setInterval(function () {
                        faultregistry.animateswitch = false;
                    }, 500);
                    setInterval(function () {
                        faultregistry.animateswitch = true;
                    }, 1000);
                }
            });
        });
    };
    FaultregistryPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    FaultregistryPage.prototype.filterFaultregistrys = function ($event) {
        var value = $event.target.value ? $event.target.value.toLowerCase() : '';
        this.filteredFaultregistry = [];
        for (var _i = 0, _a = this.faultregistrys; _i < _a.length; _i++) {
            var faultregistry = _a[_i];
            if (faultregistry.name.toLowerCase().indexOf(value) !== -1) {
                this.filteredFaultregistry.push(faultregistry);
            }
        }
    };
    FaultregistryPage.prototype.newRegistry = function () {
        var _this = this;
        var modal = this.modalCtrl.create('AddfaultregistryPage', { type: 'Add' });
        modal.onDidDismiss(function (data) {
            if (data) {
                _this._loadFaultregistrys();
            }
        });
        modal.present();
    };
    FaultregistryPage.prototype.openRegistry = function (faultregistry) {
        var _this = this;
        var modal = this.modalCtrl.create('AddfaultregistryPage', { type: 'Edit', faultregistry: faultregistry });
        modal.onDidDismiss(function (data) {
            _this._loadFaultregistrys();
        });
        modal.present();
    };
    FaultregistryPage.prototype.deleteRegistry = function (faultregistry) {
        var _this = this;
        if (this.position == 'Supervisor' || this.position == 'Manager') {
            var alert_1 = this.alertCtrl.create({
                title: 'Delete Fault Registry',
                message: 'Are you sure you want to delete fault registry: flt-00' + faultregistry.faultid,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    },
                    {
                        text: 'Confirm',
                        handler: function () {
                            _this.db.deletefaultregistry(faultregistry)
                                .then(function (success) {
                                _this._loadFaultregistrys();
                            });
                        }
                    }
                ]
            });
            alert_1.present();
        }
    };
    FaultregistryPage.prototype.fixed = function (registry) {
        var _this = this;
        var modal = this.modalCtrl.create('FixedPage', { registry: registry, type: 'faultregistry' });
        modal.onDidDismiss(function (data) {
            if (data) {
                _this._loadFaultregistrys();
            }
        });
        modal.present();
    };
    FaultregistryPage.prototype.approve = function (registry) {
        var _this = this;
        registry.color = "";
        registry.status = false;
        registry.fixedstatus = true;
        registry.animateswitch = false;
        this.db.updatefaultregistry(registry).then(function (res) {
            _this._loadFaultregistrys();
            _this.db.getSupervisors().then(function (supervisors) {
                _this.filterManager = supervisors.filter(function (data) { return data.post == 'Manager'; });
                _this.filterHse = supervisors.filter(function (data) { return data.departments == 'HSE'; });
                _this.filterAreaSupervisor = supervisors.filter(function (data) { return data.post == 'Supervisor' && data.departments == _this.user.departments; });
                _this.filterOperator = supervisors.filter(function (data) { return data.post == 'Operator' && data.departments == _this.user.departments; });
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
                _this.filterOperator.forEach(function (item) {
                    _this.supervisorArray.push(item.email);
                });
                var emailInfo = {
                    name: _this.user.name,
                    department: _this.user.departments,
                    email: _this.supervisorArray,
                    phoneNumber: _this.user.mobile,
                    position: _this.user.position,
                    faultid: registry.faultid,
                    description: registry.description,
                    location: registry.location,
                    facility: registry.faculty,
                    type: 'approve',
                    datecreated: registry.datecreated,
                    equipmentcatname: registry.equipmentcatname,
                    equipmenttag: registry.equipmenttag,
                    equipmentpartname: registry.equipmentpartname,
                    tagname: registry.tagname
                };
                _this.httpService.sendEmailfaultregistry(emailInfo).subscribe(function (res) {
                });
                //if (this.platform.is('cordova')) {
                _this.httpService.faultNotification(emailInfo).subscribe(function (res) {
                });
                //}
                _this.db.deletefaultregistry(registry).then(function (res) {
                    _this._loadFaultregistrys();
                });
            });
        });
    };
    FaultregistryPage.prototype.disapprove = function (registry) {
        var _this = this;
        registry.color = "faulty";
        registry.status = true;
        registry.fixedstatus = false;
        registry.animateswitch = true;
        registry.operatorstatus = true;
        this.db.updatefaultregistry(registry).then(function (res) {
            _this._loadFaultregistrys();
            _this.db.getSupervisors().then(function (supervisors) {
                _this.filterManager = supervisors.filter(function (data) { return data.post == 'Manager'; });
                _this.filterHse = supervisors.filter(function (data) { return data.departments == 'HSE'; });
                _this.filterAreaSupervisor = supervisors.filter(function (data) { return data.post == 'Supervisor' && data.departments == _this.user.departments; });
                _this.filterOperator = supervisors.filter(function (data) { return data.post == 'Operator' && data.departments == _this.user.departments; });
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
                _this.filterOperator.forEach(function (item) {
                    _this.supervisorArray.push(item.email);
                });
                var emailInfo = {
                    name: _this.user.name,
                    department: _this.user.departments,
                    email: _this.supervisorArray,
                    phoneNumber: _this.user.mobile,
                    position: _this.user.position,
                    faultid: registry.faultid,
                    description: registry.description,
                    location: registry.location,
                    facility: registry.faculty,
                    type: 'disapprove',
                    datecreated: registry.datecreated,
                    equipmentcatname: registry.equipmentcatname,
                    equipmenttag: registry.equipmenttag,
                    equipmentpartname: registry.equipmentpartname,
                    tagname: registry.tagname
                };
                _this.httpService.sendEmailfaultregistry(emailInfo).subscribe(function (res) {
                });
                //if (this.platform.is('cordova')) {
                _this.httpService.faultNotification(emailInfo).subscribe(function (res) {
                });
                //}
            });
        });
    };
    FaultregistryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-faultregistry',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\faultregistry\faultregistry.html"*/'<ion-header>\n\n  <ion-toolbar color="primary">\n\n    <ion-title>Fault Registry</ion-title>\n\n\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-primary50">\n\n\n\n  <ion-toolbar color="primary">\n\n    <ion-searchbar (ionInput)="filterFaultregistrys($event)"></ion-searchbar>\n\n  </ion-toolbar>\n\n\n\n  <ion-fab top right *ngIf="position==\'Supervisor\'">\n\n    <button ion-fab mini (click)="newRegistry()" color="secondary"><ion-icon name="ios-clipboard"></ion-icon></button>\n\n  </ion-fab>\n\n\n\n  <ion-list style="width: 100%" [virtualScroll]="filteredFaultregistry" [virtualTrackBy]="trackByName" [approxItemHeight]="\'200px\'">\n\n  <ion-card *virtualItem="let registry" style="margin-top: 25px; margin-bottom: 40px;" [ngClass]="{\'faulty\':registry.color==\'faulty\' && registry.status==true}"\n\n    [@elementState]="registry.animateswitch">\n\n    <ion-card-content (press)="deleteRegistry(registry, i)">\n\n      <ion-row>\n\n        <ion-item>\n\n            <img class="equip-image" *ngIf="registry.picture != \'\'" [src]="_DomSanitizer.bypassSecurityTrustUrl(registry.picture)" alt="equipment" imageViewer/>\n\n            <img class="equip-image" *ngIf="registry.picture == \'\'"  src="assets/images/no-image.png" alt="equipment" imageViewer/> \n\n          <ion-icon color="secondary" item-right small name="md-create" (click)="openRegistry(registry)"></ion-icon>\n\n          <ion-icon color="danger" item-right small name="ios-trash" (click)="deleteRegistry(registry, i)"></ion-icon>\n\n\n\n        </ion-item>\n\n      </ion-row>\n\n      <ion-row (click)="openRegistry(registry)">\n\n        <h2 text-bold><strong>Name: </strong> {{registry.name }}</h2>\n\n        <h2 ion-text class="list-price"><strong>Date Created: </strong>{{registry.datecreated}}</h2>\n\n      </ion-row>\n\n      <ion-row (click)="openRegistry(registry)">\n\n        <h2 text-bold><strong>Facility: </strong> {{registry.faculty }}</h2>\n\n        <h2 class="list-price"><strong>Location: </strong>{{ registry.location }}</h2>\n\n      </ion-row>\n\n      <ion-row (click)="openRegistry(registry)">\n\n        <h2 text-bold><strong>Equipment: </strong> {{registry.equipmentcatname }}</h2>\n\n        <h2 class="list-price eng-color"><strong>Equipment Tag: </strong>{{ registry.equipmenttag }}</h2>\n\n      </ion-row>\n\n      <ion-row (click)="openRegistry(registry)">\n\n        <h2 text-bold><strong>Sub Equipment: </strong> {{registry.equipmentpartname }}</h2>\n\n        <h2 class="list-price eng-color"><strong>Sub Equipment Tag: </strong>{{ registry.tagname }}</h2>\n\n      </ion-row>\n\n      <ion-row (click)="openRegistry(registry)">\n\n        <h2 text-bold><strong>Description: </strong> {{registry.description }}</h2>\n\n      </ion-row>\n\n      <ion-row *ngIf="position==\'Operator\'">\n\n        <button ion-button small color="attrgreen" class="list-price" (click)="fixed(registry)">Fixed?</button>\n\n      </ion-row>\n\n      <ion-row *ngIf="position==\'Supervisor\' || position==\'Manager\'">\n\n          <button ion-button small color="attrgreen" class="list-price" (click)="approve(registry)" [disabled]="!registry.fixedstatus">Approve</button>\n\n        <button ion-button small color="danger" class="list-price" (click)="disapprove(registry)" [disabled]="!registry.fixedstatus">Disapprove</button>\n\n      </ion-row>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  </ion-list>\n\n  <ion-fab bottom left>\n\n    <button ion-fab mini (click)="back()">\n\n      <ion-icon name="arrow-back"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\faultregistry\faultregistry.html"*/,
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["DomSanitizer"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__providers_httpservice__["a" /* HttpserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__pouch_service_pouch_service__["a" /* PouchService */]])
    ], FaultregistryPage);
    return FaultregistryPage;
}());

//# sourceMappingURL=faultregistry.js.map

/***/ })

});
//# sourceMappingURL=31.js.map