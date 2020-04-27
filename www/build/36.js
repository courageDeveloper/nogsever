webpackJsonp([36],{

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHomePageModule", function() { return AdminHomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adminhome__ = __webpack_require__(836);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdminHomePageModule = /** @class */ (function () {
    function AdminHomePageModule() {
    }
    AdminHomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__adminhome__["a" /* AdminHomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__adminhome__["a" /* AdminHomePage */]),
            ],
        })
    ], AdminHomePageModule);
    return AdminHomePageModule;
}());

//# sourceMappingURL=adminhome.module.js.map

/***/ }),

/***/ 836:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pouch_service_pouch_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pouch_service_popup__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminHomePage = /** @class */ (function () {
    function AdminHomePage(navCtrl, db, popUp) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.popUp = popUp;
        this.show = false;
        this.showWork = false;
        this.filteredWorkpermit = [];
        this.workpermits = [];
    }
    AdminHomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad AdminhomePage');
        this.localStorageItem = JSON.parse(localStorage.getItem('user'));
        this.db.getSupervisor(this.localStorageItem).then(function (item) {
            _this.user = item;
        });
        this._loadWorkpermits();
        this.dailyWorkorder();
        this.allWorkpermit();
        this.allEquipments();
        this.allFaultregistrys();
        this.allReport();
        this._loadMateriallist();
    };
    AdminHomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.popUp.displayPopUp();
        this.localStorageItem = JSON.parse(localStorage.getItem('user'));
        console.log('ionViewDidLoad ViewworkpermitPage');
        this.db.getSupervisor(this.localStorageItem).then(function (item) {
            _this.user = item;
        });
        this._loadWorkpermits();
        this.dailyWorkorder();
        this.allWorkpermit();
        this.allEquipments();
        this.allFaultregistrys();
        this.allReport();
        this._loadMateriallist();
    };
    AdminHomePage.prototype._loadWorkpermits = function () {
        var _this = this;
        this.db.getWorkpermits()
            .then(function (workpermits) {
            _this.filteredWorkpermit = workpermits.filter(function (data) { return data.astatus == true || data.fixed == true; });
            _this.filteredWorkpermitLength = _this.filteredWorkpermit.length;
        });
    };
    AdminHomePage.prototype.dailyWorkorder = function () {
        var _this = this;
        this.db.getWorkorders().then(function (res) {
            _this.totalWolength = res.length;
            if (_this.currentDate == undefined) {
                _this.dailyWo = res.filter(function (data) { return new Date(data.datecreated).toJSON().slice(0, 10).replace(/-/g, '-') == new Date().toJSON().slice(0, 10).replace(/-/g, '-'); });
                _this.dailyWolength = _this.dailyWo.length;
            }
            else {
                _this.dailyWo = res.filter(function (data) { return new Date(data.datecreated).toJSON().slice(0, 10).replace(/-/g, '-') == _this.currentDate; });
                _this.dailyWolength = _this.dailyWo.length;
            }
        });
    };
    AdminHomePage.prototype.allWorkpermit = function () {
        var _this = this;
        this.db.getWorkpermits().then(function (res) {
            _this.deptWorkpermitslength = res.length;
        });
    };
    AdminHomePage.prototype.allEquipments = function () {
        var _this = this;
        this.db.getEquipmentcats().then(function (res) {
            _this.equipmentLength = res.length;
        });
    };
    AdminHomePage.prototype.allFaultregistrys = function () {
        var _this = this;
        this.db.getfaultregistrys().then(function (res) {
            _this.faultRegistrylength = res.length;
        });
    };
    AdminHomePage.prototype._loadMateriallist = function () {
        var _this = this;
        this.db.getmaterials()
            .then(function (materialList) {
            _this.materialList = materialList.length;
        });
    };
    AdminHomePage.prototype.allReport = function () {
        var _this = this;
        this.db.getdailyreports().then(function (res) {
            _this.dailyallReport = res.filter(function (data) { return data.datecreated == new Date().toJSON().slice(0, 10).replace(/-/g, '-'); });
            _this.dailyallReportlength = _this.dailyallReport.length;
        });
    };
    AdminHomePage.prototype.toggleSelection = function (index) {
        this.show = !this.show;
        this.showWork = false;
    };
    AdminHomePage.prototype.toggleSelection2 = function (index) {
        this.showWork = !this.showWork;
        this.show = false;
    };
    AdminHomePage.prototype.openManager = function () {
        this.navCtrl.push('ManagersPage');
    };
    AdminHomePage.prototype.openSupervisor = function () {
        this.navCtrl.push('EngineersPage');
    };
    AdminHomePage.prototype.openOperator = function () {
        this.navCtrl.push('OperatorsPage');
    };
    AdminHomePage.prototype.openDailyreport = function () {
        this.navCtrl.push('ViewdailyreportPage');
    };
    AdminHomePage.prototype.openEngineer = function () {
        this.navCtrl.push('EngineersPage');
    };
    AdminHomePage.prototype.openMaterial = function () {
        this.navCtrl.push('MaterialPage');
    };
    AdminHomePage.prototype.openRegistry = function () {
        this.navCtrl.push('FaultregistryPage');
    };
    AdminHomePage.prototype.openPm = function () {
        this.navCtrl.push('PreventivemaintenancePage');
    };
    AdminHomePage.prototype.openWorkorder = function () {
        this.navCtrl.push('WorkorderPage');
    };
    AdminHomePage.prototype.openSpareparts = function () {
        this.navCtrl.push('SparepartsPage');
    };
    AdminHomePage.prototype.openEquipments = function () {
        this.navCtrl.push('EquipmentPage');
    };
    AdminHomePage.prototype.openWorkerschedules = function () {
        this.navCtrl.push('WorkerschedulePage');
    };
    AdminHomePage.prototype.openWorkPermit = function () {
        var _this = this;
        this.navCtrl.push('ViewworkpermitPage');
        this.db.getWorkpermits()
            .then(function (workpermits) {
            _this.filteredWorkpermit = workpermits.filter(function (data) { return data.astatus == true; });
            _this.filteredWorkpermit.forEach(function (item) {
                item.astatus = false;
                item.fixed = false;
                _this.db.updateWorkpermit(item).then(function (res) {
                    _this._loadWorkpermits();
                });
            });
        });
    };
    AdminHomePage.prototype.dailyWorkPermit = function () {
        this.navCtrl.push('ViewworkpermitPage');
    };
    AdminHomePage.prototype.dailyWO = function () {
        this.navCtrl.push('DailyworkorderPage');
    };
    AdminHomePage.prototype.dailyReport = function () {
        this.navCtrl.push('DailyreportPage');
    };
    AdminHomePage.prototype.logOut = function () {
        localStorage.removeItem('user');
        this.navCtrl.push('LoginPage');
    };
    AdminHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-adminhome',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\adminhome\adminhome.html"*/'<ion-split-pane id=\'home\'>\n\n  <ion-menu type="overlay" [content]="mycontent" class="bg-primary50">\n\n    <ion-content class="bg-primary50 margin-top">\n\n      <ion-list>\n\n        <button color="dark" ion-item detail-push (click)="toggleSelection(index)"><span class="icon-color"><ion-icon name="ios-people" padding-right padding-left></ion-icon>Staff</span><ion-icon *ngIf="!show" class="icon-color2" item-right name="ios-arrow-forward"></ion-icon><ion-icon *ngIf="show" item-right class="icon-color2" name="ios-arrow-down"></ion-icon></button>\n\n        <button *ngIf="show" color="light" ion-item detail-push (click)="openManager()"><span><ion-icon name="md-contact" padding-right padding-left ></ion-icon>Managers</span><ion-icon item-right class="icon-color2" name="ios-arrow-forward"></ion-icon></button>\n\n        <button *ngIf="show" color="light" ion-item detail-push (click)="openSupervisor()"><span><ion-icon name="person-add" padding-right padding-left ></ion-icon>Supervisors</span><ion-icon item-right class="icon-color2" name="ios-arrow-forward"></ion-icon></button>\n\n        <button *ngIf="show" color="light" ion-item detail-push (click)="openOperator()"><span><ion-icon name="md-person" padding-right padding-left ></ion-icon>Operators</span><ion-icon item-right class="icon-color2" name="ios-arrow-forward"></ion-icon></button>\n\n        <button color="dark" ion-item detail-push (click)="openRegistry()"><span class="icon-color"><ion-icon name="ios-clipboard" padding-right padding-left ></ion-icon>Fault Registry</span><ion-icon item-right class="icon-color2" name="ios-arrow-forward"></ion-icon></button>\n\n        <button color="dark" ion-item detail-push (click)="openPm()"><span class="icon-color"><ion-icon name="ios-construct" padding-right padding-left ></ion-icon>PM/Work Order</span><ion-icon item-right class="icon-color2" name="ios-arrow-forward"></ion-icon></button>\n\n        <button color="dark" ion-item detail-push (click)="openDailyreport()"><span class="icon-color"><ion-icon name="ios-copy" padding-right padding-left ></ion-icon>Total Daily Reports</span><ion-icon item-right class="icon-color2" name="ios-arrow-forward"></ion-icon></button>\n\n        <!-- <button color="dark" ion-item detail-push (click)="openDailyreport()"><span class="icon-color"><ion-icon name="ios-copy" padding-right padding-left ></ion-icon>Daily Reports</span><ion-icon item-right class="icon-color2" name="ios-arrow-forward"></ion-icon></button> -->\n\n        <button color="dark" ion-item detail-push (click)="openWorkPermit()"><span class="icon-color"><ion-icon name="ios-clipboard" padding-right padding-left></ion-icon>Work Permit</span><ion-icon class="icon-color2" item-right name="ios-arrow-forward"></ion-icon> <ion-badge *ngIf="filteredWorkpermitLength!=0" id="notifications-badge" color="danger">{{filteredWorkpermitLength}}</ion-badge></button>\n\n        <!-- <button color="dark" ion-item detail-push><span class="icon-color"><ion-icon name="md-contacts" padding-right padding-left ></ion-icon>Workers Schedule</span><ion-icon item-right class="icon-color2" name="ios-arrow-forward"></ion-icon></button> -->\n\n        <button color="dark" ion-item detail-push (click)="openMaterial()"><span class="icon-color"><ion-icon name="ios-clipboard" padding-right padding-left></ion-icon>Material List</span><ion-icon class="icon-color2" item-right name="ios-arrow-forward"></ion-icon></button>\n\n        <button color="dark" ion-item detail-push (click)="toggleSelection2(index)"><span class="icon-color"><ion-icon name="hammer" padding-right padding-left ></ion-icon>Equipment List</span><ion-icon *ngIf="!showWork" item-right class="icon-color2" name="ios-arrow-forward"></ion-icon><ion-icon *ngIf="showWork" item-right class="icon-color2" name="ios-arrow-down"></ion-icon></button>\n\n        <button *ngIf="showWork" color="light" ion-item detail-push (click)="openEquipments()"><span><ion-icon name="md-construct" padding-right padding-left ></ion-icon>Equipment</span><ion-icon item-right class="icon-color2" name="ios-arrow-forward"></ion-icon></button>\n\n        <button *ngIf="showWork" color="light" ion-item detail-push (click)="openSpareparts()"><span><ion-icon name="md-cog" padding-right padding-left ></ion-icon>Equipment Parts</span><ion-icon item-right class="icon-color2" name="ios-arrow-forward"></ion-icon></button>\n\n        <!-- <button *ngIf="showWork" color="light" ion-item detail-push (click)="openSpareparts()"><span><ion-icon name="ios-bookmark" padding-right padding-left ></ion-icon>Equipment Tag Name</span><ion-icon item-right class="icon-color2" name="ios-arrow-forward"></ion-icon></button> -->\n\n        <!-- <button color="dark" ion-item detail-push (click)="openEngineer()"><span class="icon-color"><ion-icon name="ios-clipboard" padding-right padding-left></ion-icon>Operation Manual</span><ion-icon class="icon-color2" item-right name="ios-arrow-forward"></ion-icon></button> -->\n\n      </ion-list>\n\n    </ion-content>\n\n  </ion-menu>\n\n  <ion-nav #mycontent main swipeBackEnabled="false"></ion-nav>\n\n\n\n  <ion-header>\n\n    <ion-navbar hideBackButton color="primary">\n\n      <ion-title>  \n\n        NO&G PM\n\n      </ion-title>\n\n      <div class="align-user"> <strong>ADMIN</strong><br> (ADMIN)</div>\n\n      <ion-buttons end>\n\n        <button (click)="logOut()" ion-button icon-only>\n\n                    <ion-icon name="ios-exit-outline"></ion-icon>\n\n                </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n  <ion-content class="background-image">\n\n    <div class="bg-color bg-size">\n\n      <div>\n\n        <ion-row class="wlm-msg" align-items-start>\n\n          <ion-col align-self-baseline col-12>\n\n            <ion-list text-center>\n\n              <img src="assets/images/NOG-LOGO.jpg" width="200px" />\n\n              <h3 class="title">OGPOOC (CMMS)</h3>\n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>\n\n            <ion-card>\n\n              <form>\n\n                <ion-item>\n\n                  <ion-icon item-right name="md-calendar"></ion-icon>\n\n                  <ion-input [(ngModel)]="currentDate" (ngModelChange)="dailyWorkorder()" placeholder="Date" type="date" name="date"></ion-input>\n\n                </ion-item>\n\n              </form>\n\n              <ion-item>\n\n                <ion-icon item-left name="document"></ion-icon>\n\n                <strong color="dark">Daily Work Order/PM actions</strong>\n\n              </ion-item>\n\n              <ion-item class="txt-size">{{dailyWolength}}</ion-item>\n\n              <ion-item><button ion-button item-right (click)="openPm()" small>View Work Orders</button></ion-item>\n\n            </ion-card>\n\n          </ion-col>\n\n           <ion-col>\n\n            <ion-card>\n\n              <form>\n\n                <ion-item>\n\n                </ion-item>\n\n              </form>\n\n              <ion-item>\n\n                <ion-icon item-left name="ios-clipboard"></ion-icon>\n\n                <strong color="dark">Daily Reports</strong>\n\n              </ion-item>\n\n              <ion-item class="txt-size">{{dailyallReportlength}}</ion-item>\n\n              <ion-item><button ion-button item-right (click)="openDailyreport()" small>View Work Daily Reports</button></ion-item>\n\n            </ion-card>\n\n          </ion-col>\n\n          <ion-col>\n\n            <ion-card>\n\n              <ion-item>\n\n              </ion-item>\n\n              <ion-item>\n\n                <ion-icon item-left name="document"></ion-icon>\n\n                <strong color="dark">Work Permit</strong>\n\n              </ion-item>\n\n              <ion-item class="txt-size">{{deptWorkpermitslength}}</ion-item>\n\n              <ion-item><button ion-button item-right small (click)="openWorkPermit()">View Work Permit List</button></ion-item>\n\n            </ion-card>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-span="3">\n\n            <ion-card class="card-point">\n\n              <ion-item>\n\n                <ion-icon item-left name="ios-clipboard"></ion-icon>\n\n                <strong color="dark">Available Material</strong>\n\n              </ion-item>\n\n              <ion-item class="txt-size">{{materialList}}</ion-item>\n\n              <ion-item><button ion-button item-right small (click)="openMaterial()">View Material List</button></ion-item>\n\n            </ion-card>\n\n          </ion-col>\n\n          <ion-col col-span="3">\n\n            <ion-card>\n\n              <ion-item>\n\n                <ion-icon item-left name="ios-construct"></ion-icon>\n\n                <strong color="dark">Equipmets</strong>\n\n              </ion-item>\n\n              <ion-item class="txt-size">{{equipmentLength}}</ion-item>\n\n              <ion-item><button ion-button item-right small (click)="openEquipments()">View Equipments</button></ion-item>\n\n            </ion-card>\n\n          </ion-col>\n\n          <ion-col col-span="3">\n\n            <ion-card>\n\n              <ion-item>\n\n                <ion-icon item-left name="ios-cog"></ion-icon>\n\n                <strong color="dark">No of Fault Registry</strong>\n\n              </ion-item>\n\n              <ion-item class="txt-size">{{faultRegistrylength}}</ion-item>\n\n              <ion-item><button ion-button item-right small (click)="openRegistry()">View Fault Registry</button></ion-item>\n\n            </ion-card>\n\n          </ion-col>\n\n          <ion-col col-span="3">\n\n            <ion-card class="card-point">\n\n              <ion-item>\n\n                <ion-icon item-left name="ios-folder-open"></ion-icon>\n\n                <strong color="dark">Total No of PM/Work Order History</strong>\n\n              </ion-item>\n\n              <ion-item class="txt-size">{{totalWolength}}</ion-item>\n\n              <ion-item><button ion-button item-right small (click)="openPm()">View PM</button></ion-item>\n\n            </ion-card>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n      </div>\n\n      <ion-fab class="align-bottom" bottom left menuToggle>\n\n        <button ion-fab mini>\n\n              <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n      </ion-fab>\n\n    </div>\n\n  </ion-content>\n\n</ion-split-pane>'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\adminhome\adminhome.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__pouch_service_pouch_service__["a" /* PouchService */], __WEBPACK_IMPORTED_MODULE_3__pouch_service_popup__["a" /* PopupProvider */]])
    ], AdminHomePage);
    return AdminHomePage;
}());

//# sourceMappingURL=adminhome.js.map

/***/ })

});
//# sourceMappingURL=36.js.map