webpackJsonp([21],{

/***/ 771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewdailyreportPageModule", function() { return ViewdailyreportPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewdailyreport__ = __webpack_require__(852);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ViewdailyreportPageModule = /** @class */ (function () {
    function ViewdailyreportPageModule() {
    }
    ViewdailyreportPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__viewdailyreport__["a" /* ViewdailyreportPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__viewdailyreport__["a" /* ViewdailyreportPage */]),
            ],
        })
    ], ViewdailyreportPageModule);
    return ViewdailyreportPageModule;
}());

//# sourceMappingURL=viewdailyreport.module.js.map

/***/ }),

/***/ 852:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewdailyreportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pouch_service_pouch_service__ = __webpack_require__(92);
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
 * Generated class for the WorkorderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewdailyreportPage = /** @class */ (function () {
    function ViewdailyreportPage(navCtrl, alertCtrl, db, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.db = db;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.filteredDailyreport = [];
        this.filteredDailyreportGen = [];
        this.dailyReports = [];
        this.show = false;
        this.disable = true;
        this.arraySelectedReports = [];
        this.trackByName = function (index, item) {
            return item.id;
        };
    }
    ViewdailyreportPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.arraySelectedReports = [];
        this.localStorageItem = JSON.parse(localStorage.getItem('user'));
        console.log('ionViewDidLoad ViewworkpermitPage');
        this.db.getSupervisor(this.localStorageItem).then(function (item) {
            _this.user = item;
            _this.position = item.post;
            if (_this.position == 'Operator' || _this.position == 'Supervisor') {
                _this.show = true;
            }
        });
        this._loadDailyreports();
    };
    ViewdailyreportPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.arraySelectedReports = [];
        this.disable = true;
        this.localStorageItem = JSON.parse(localStorage.getItem('user'));
        this.db.getSupervisor(this.localStorageItem).then(function (item) {
            _this.user = item;
            _this.position = item.post;
            if (_this.position == 'Operator' || _this.position == 'Supervisor') {
                _this.show = true;
            }
        });
        this._loadDailyreports();
    };
    ViewdailyreportPage.prototype._loadDailyreports = function () {
        var _this = this;
        this.db.getdailyreports()
            .then(function (dailyreports) {
            _this.filteredDailyreport = dailyreports.filter(function (data) { return data.department == _this.user.departments || _this.user.post == 'Manager' || _this.user.post == 'Admin' || _this.user.departments == 'HSE'; });
            _this.dailyReports = dailyreports.filter(function (data) { return data.department == _this.user.departments || _this.user.post == 'Manager' || _this.user.post == 'Admin' || _this.user.departments == 'HSE'; });
        });
    };
    ViewdailyreportPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    ViewdailyreportPage.prototype.newWorkorder = function () {
        this.navCtrl.push('DailyreportPage', { type: 'Add' });
    };
    ViewdailyreportPage.prototype.openWorkorder = function (dailyreport) {
        this.navCtrl.push('DailyreportPage', { type: 'Edit', dailyreport: dailyreport });
    };
    ViewdailyreportPage.prototype.filterDailyreports = function ($event) {
        var value = $event.target.value ? $event.target.value.toLowerCase() : '';
        this.filteredDailyreport = [];
        for (var _i = 0, _a = this.dailyReports; _i < _a.length; _i++) {
            var dailyreport = _a[_i];
            if (dailyreport.datecreated.toLowerCase().indexOf(value) !== -1) {
                this.filteredDailyreport.push(dailyreport);
            }
        }
    };
    ViewdailyreportPage.prototype.deleteDailyreport = function (dailyreport) {
        var _this = this;
        if (this.show) {
            var alert_1 = this.alertCtrl.create({
                title: 'Delete Daily Report',
                message: 'Are you sure you want to delete Daily Report for: ' + dailyreport.datecreated,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    },
                    {
                        text: 'Confirm',
                        handler: function () {
                            _this.db.deletedailyreport(dailyreport)
                                .then(function (success) {
                                _this._loadDailyreports();
                            });
                        }
                    }
                ]
            });
            alert_1.present();
        }
    };
    ViewdailyreportPage.prototype.print = function (dailyreport) {
        this.arraySelectedReports = [];
        this.arraySelectedReports.push(dailyreport);
        this.navCtrl.push('PrintdailyreportPage', { type: 'Edit', dailyreport: this.arraySelectedReports });
    };
    ViewdailyreportPage.prototype.checkboxClicked = function (dailyreport) {
        this.selectedDailyreport = dailyreport;
        this.disable = false;
        this.arraySelectedReports.push(this.selectedDailyreport);
    };
    ViewdailyreportPage.prototype.printSelected = function () {
        this.navCtrl.push('PrintdailyreportPage', { type: 'Edit', dailyreport: this.arraySelectedReports });
        this.arraySelectedReports = [];
    };
    ViewdailyreportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-workorder',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\viewdailyreport\viewdailyreport.html"*/'<ion-header>\n\n  <ion-toolbar color="primary">\n\n    <ion-title>Daily Report</ion-title>\n\n\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-primary50">\n\n\n\n  <ion-toolbar color="primary">\n\n    <ion-searchbar (ionInput)="filterDailyreports($event)"></ion-searchbar>\n\n  </ion-toolbar>\n\n\n\n  <ion-fab top right *ngIf="show">\n\n    <button ion-fab mini (click)="newWorkorder()" color="secondary"><ion-icon name="ios-copy"></ion-icon></button>\n\n  </ion-fab>\n\n\n\n  <button ion-button mini (click)="printSelected()" color="danger" [disabled]="disable"><div>Print Selected</div> <ion-icon class="text-space" name="print"></ion-icon></button>\n\n\n\n  <ion-list style="width: 100%" [virtualScroll]="filteredDailyreport" [virtualTrackBy]="trackByName" [approxItemHeight]="\'200px\'">\n\n  <ion-card *virtualItem="let workorder" style="margin-top: 35px; margin-bottom: 60px;">\n\n    <ion-card-content (press)="deleteDailyreport(workorder, i)">\n\n      <ion-row>\n\n        <ion-checkbox color="primary" (click)="checkboxClicked(workorder)"></ion-checkbox>\n\n        <ion-item>\n\n          <button class="list-price" color="primary" title="Print Daily Report" ion-fab item-right mini (click)="print(workorder)"><ion-icon\n\n              name="print"></ion-icon></button>\n\n        </ion-item>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-item>\n\n          <ion-icon color="secondary" item-right small name="md-create" (click)="openWorkorder(workorder)"></ion-icon>\n\n          <ion-icon color="danger" item-right small name="ios-trash" (click)="deleteDailyreport(workorder, i)"></ion-icon>\n\n\n\n        </ion-item>\n\n      </ion-row>\n\n      <ion-row (click)="openWorkorder(workorder)">\n\n        <ion-col>\n\n          <h2 text-bold><strong>Date Created: </strong> {{ workorder.datecreated }}</h2>\n\n        </ion-col>\n\n        <ion-col>\n\n          <h2 ion-text class="list-price"><strong>Department: </strong> {{ workorder.department }}</h2>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row (click)="openWorkorder(workorder)">\n\n        <ion-col>\n\n          <h2 text-bold><strong>Oil produced from oil stabilization train 1: </strong> {{ workorder.optrain1 }}</h2>\n\n        </ion-col>\n\n        <ion-col>\n\n          <h2 ion-text class="list-price"><strong>Oil produced from oil stabilization train 2: </strong> {{ workorder.optrain2 }}</h2>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row (click)="openWorkorder(workorder)">\n\n        <ion-col>\n\n          <h2 text-bold><strong>Oil produced to surge vessel: </strong> {{ workorder.opsurgevessel }}</h2>\n\n        </ion-col>\n\n        <ion-col>\n\n          <h2 ion-text class="list-price"><strong>Oil transferred to NPDC storage tank: </strong> {{ workorder.otnpdc }}</h2>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row (click)="openWorkorder(workorder)">\n\n        <ion-col>\n\n          <h2 text-bold><strong>Total gas exported to NGC: </strong> {{ workorder.tgngc }}</h2>\n\n        </ion-col>\n\n        <ion-col>\n\n          <h2 ion-text class="list-price"><strong>Total gas fled from HP: </strong> {{ workorder.tghp }}</h2>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-list>\n\n  <ion-fab bottom left>\n\n    <button ion-fab mini (click)="back()">\n\n      <ion-icon name="arrow-back"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\viewdailyreport\viewdailyreport.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__pouch_service_pouch_service__["a" /* PouchService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */]])
    ], ViewdailyreportPage);
    return ViewdailyreportPage;
}());

//# sourceMappingURL=viewdailyreport.js.map

/***/ })

});
//# sourceMappingURL=21.js.map