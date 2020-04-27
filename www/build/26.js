webpackJsonp([26],{

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorhomePageModule", function() { return OperatorhomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__operatorhome__ = __webpack_require__(847);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OperatorhomePageModule = /** @class */ (function () {
    function OperatorhomePageModule() {
    }
    OperatorhomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__operatorhome__["a" /* OperatorhomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__operatorhome__["a" /* OperatorhomePage */]),
            ],
        })
    ], OperatorhomePageModule);
    return OperatorhomePageModule;
}());

//# sourceMappingURL=operatorhome.module.js.map

/***/ }),

/***/ 847:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperatorhomePage; });
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




/**
 * Generated class for the OperatorhomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OperatorhomePage = /** @class */ (function () {
    function OperatorhomePage(navCtrl, navParams, db, popUp) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.popUp = popUp;
        this.show = false;
        this.showWork = false;
        this.filteredWorkpermit = [];
        this.workpermits = [];
        this.filteredFaultregistry = [];
        this.faultregistrys = [];
        this.localStorageItem = JSON.parse(localStorage.getItem('user'));
        this.db.getSupervisor(this.localStorageItem).then(function (item) {
            _this.user = item;
            _this.name = item.name;
            _this.position = item.position;
        });
    }
    OperatorhomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        /* this.popUp.displayPopUp();
        this.popUp.displayPopUpPM(); */
        console.log('ionViewDidLoad OperatorhomePage');
        this.localStorageItem = JSON.parse(localStorage.getItem('user'));
        this.db.getSupervisor(this.localStorageItem).then(function (item) {
            _this.user = item;
        });
        this._loadWorkpermits();
        this._loadWorkorder();
        this._loadFaultregistry();
        this.dailyWorkorder();
        this.allEquipments();
        this.allFaultregistrys();
        this.allWorkpermit();
        this._loadMateriallist();
    };
    OperatorhomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.popUp.displayPopUp();
        this.popUp.displayPopUpPM();
        this.localStorageItem = JSON.parse(localStorage.getItem('user'));
        console.log('ionViewDidEnter OperatorhomePage');
        this.db.getSupervisor(this.localStorageItem).then(function (item) {
            _this.user = item;
        });
        this._loadWorkpermits();
        this._loadWorkorder();
        this._loadFaultregistry();
        this.dailyWorkorder();
        this.allEquipments();
        this.allFaultregistrys();
        this.allWorkpermit();
        this._loadMateriallist();
    };
    OperatorhomePage.prototype._loadWorkorder = function () {
        var _this = this;
        this.localStorageItem = JSON.parse(localStorage.getItem('user'));
        this.db.getSupervisor(this.localStorageItem).then(function (item) {
            _this.filteredWorkorderLength = item.woalert.length;
        });
    };
    OperatorhomePage.prototype._loadFaultregistry = function () {
        var _this = this;
        this.db.getfaultregistrys()
            .then(function (faultregistrys) {
            _this.filteredFaultregistry = faultregistrys.filter(function (data) { return data.operatorstatus == true; });
            _this.filteredFaultreistryLength = _this.filteredFaultregistry.length;
        });
    };
    OperatorhomePage.prototype._loadMateriallist = function () {
        var _this = this;
        this.db.getmaterials()
            .then(function (materialList) {
            _this.materialList = materialList.length;
        });
    };
    OperatorhomePage.prototype._loadWorkpermits = function () {
        var _this = this;
        this.db.getWorkpermits()
            .then(function (workpermits) {
            _this.filteredWorkpermit = workpermits.filter(function (data) { return data.permitholderid == _this.user.id && data.sastatus == true || data.mastatus == true || data.hastatus == true; });
            _this.filteredWorkpermitLength = _this.filteredWorkpermit.length;
        });
    };
    OperatorhomePage.prototype.dailyWorkorder = function () {
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
    OperatorhomePage.prototype.allEquipments = function () {
        var _this = this;
        this.db.getEquipmentcats().then(function (res) {
            _this.equipmentLength = res.length;
        });
    };
    OperatorhomePage.prototype.allFaultregistrys = function () {
        var _this = this;
        this.db.getfaultregistrys().then(function (res) {
            _this.faultRegistrylength = res.length;
        });
    };
    OperatorhomePage.prototype.allWorkpermit = function () {
        var _this = this;
        this.db.getWorkpermits().then(function (res) {
            _this.deptWorkpermits = res.filter(function (data) { return data.department == _this.user.departments; });
            _this.deptWorkpermitslength = _this.deptWorkpermits.length;
        });
    };
    OperatorhomePage.prototype.toggleSelection = function (index) {
        this.show = !this.show;
        this.showWork = false;
    };
    OperatorhomePage.prototype.toggleSelection2 = function (index) {
        this.showWork = !this.showWork;
        this.show = false;
    };
    OperatorhomePage.prototype.openEngineer = function () {
        this.navCtrl.push('EngineersPage');
    };
    OperatorhomePage.prototype.openRegistry = function () {
        var _this = this;
        this.navCtrl.push('FaultregistryPage');
        this.db.getfaultregistrys()
            .then(function (faultregistrys) {
            _this.filteredFaultregistry = faultregistrys.filter(function (data) { return data.operatorstatus == true; });
            _this.filteredFaultregistry.forEach(function (item) {
                item.operatorstatus = false;
                _this.db.updatefaultregistry(item).then(function (res) {
                    _this._loadFaultregistry();
                });
            });
        });
    };
    OperatorhomePage.prototype.openPm = function () {
        var _this = this;
        this.navCtrl.push('PreventivemaintenancePage');
        this.db.getSupervisor(this.localStorageItem).then(function (data) {
            data.woalert = [];
            _this.db.updateSupervisor(data).then(function (res) {
                _this._loadWorkorder();
            });
        });
    };
    OperatorhomePage.prototype.openNewpm = function () {
        var _this = this;
        this.navCtrl.push('NewpreventivemaintenancePage');
        this.db.getSupervisor(this.localStorageItem).then(function (data) {
            data.woalert = [];
            _this.db.updateSupervisor(data).then(function (res) {
                _this._loadWorkorder();
            });
        });
    };
    OperatorhomePage.prototype.openWorkorder = function () {
        this.navCtrl.push('WorkorderPage');
    };
    OperatorhomePage.prototype.openMaterial = function () {
        this.navCtrl.push('MaterialPage');
    };
    OperatorhomePage.prototype.openSpareparts = function () {
        this.navCtrl.push('SparepartsPage');
    };
    OperatorhomePage.prototype.openAddequipments = function () {
        this.navCtrl.push('EquipmentsaddPage');
    };
    OperatorhomePage.prototype.openEquipments = function () {
        this.navCtrl.push('EquipmentPage');
    };
    OperatorhomePage.prototype.openWorkerschedules = function () {
        this.navCtrl.push('WorkerschedulePage');
    };
    OperatorhomePage.prototype.openDailyreport = function () {
        this.navCtrl.push('ViewdailyreportPage');
    };
    OperatorhomePage.prototype.openWorkPermit = function () {
        var _this = this;
        this.navCtrl.push('ViewworkpermitPage');
        this.db.getWorkpermits()
            .then(function (workpermits) {
            _this.filteredWorkpermit = workpermits.filter(function (data) { return data.permitholderid == _this.user.id && data.sastatus == true || data.mastatus == true || data.hastatus == true; });
            _this.filteredWorkpermit.forEach(function (item) {
                item.sastatus = false;
                item.mastatus = false;
                item.hastatus = false;
                _this.db.updateWorkpermit(item).then(function (res) {
                    _this._loadWorkpermits();
                });
            });
        });
    };
    OperatorhomePage.prototype.dailyWorkPermit = function () {
        this.navCtrl.push('ViewworkpermitPage');
    };
    OperatorhomePage.prototype.logOut = function () {
        localStorage.removeItem('user');
        this.navCtrl.push('LoginPage');
    };
    OperatorhomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-operatorhome',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\operatorhome\operatorhome.html"*/'<ion-split-pane id=\'home\'>\n\n  <ion-menu type="overlay" [content]="mycontent" class="bg-primary50">\n\n    <ion-content class="bg-primary50 margin-top">\n\n      <ion-list>\n\n        <button color="dark" ion-item detail-push (click)="openWorkPermit()"><span class="icon-color"><ion-icon name="ios-clipboard" padding-right padding-left ></ion-icon>Work Permit</span><ion-icon item-right class="icon-color2" name="ios-arrow-forward"></ion-icon> <ion-badge *ngIf="filteredWorkpermitLength!=0" id="notifications-badge" color="danger">{{filteredWorkpermitLength}}</ion-badge></button>\n\n        <button color="dark" ion-item detail-push (click)="openDailyreport()"><span class="icon-color"><ion-icon name="ios-construct" padding-right padding-left ></ion-icon>Daily Reports</span><ion-icon item-right class="icon-color2" name="ios-arrow-forward"></ion-icon></button>\n\n        <button color="dark" ion-item detail-push (click)="openRegistry()"><span class="icon-color"><ion-icon name="ios-copy" padding-right padding-left ></ion-icon>Fault Registry</span><ion-icon item-right class="icon-color2" name="ios-arrow-forward"></ion-icon> <ion-badge *ngIf="filteredFaultreistryLength!=0" id="notifications-badge" color="danger">{{filteredFaultreistryLength}}</ion-badge></button>\n\n        <button color="dark" ion-item detail-push (click)="toggleSelection(index)"><span class="icon-color"><ion-icon name="hammer" padding-right padding-left ></ion-icon>Equipments</span><ion-icon *ngIf="!show" item-right class="icon-color2" name="ios-arrow-forward"></ion-icon><ion-icon *ngIf="show" item-right class="icon-color2" name="ios-arrow-down"></ion-icon></button>\n\n        <button *ngIf="show" color="light" ion-item detail-push (click)="openEquipments()"><span><ion-icon name="ios-add" padding-right padding-left ></ion-icon>Equipment Category</span><ion-icon item-right class="icon-color2" name="ios-arrow-forward"></ion-icon></button>\n\n        <button *ngIf="show" color="light" ion-item detail-push (click)="openSpareparts()"><span><ion-icon name="ios-build" padding-right padding-left ></ion-icon>Equipment Parts</span><ion-icon item-right class="icon-color2" name="ios-arrow-forward"></ion-icon></button>\n\n        <!-- <button *ngIf="show" color="light" ion-item detail-push (click)="openAddequipments()"><span><ion-icon name="md-backspace" padding-right padding-left ></ion-icon>Add Equipments</span><ion-icon item-right class="icon-color2" name="ios-arrow-forward"></ion-icon></button>   -->\n\n        <button color="dark" ion-item detail-push (click)="toggleSelection2(index)" ><span class="icon-color"><ion-icon name="ios-clipboard" padding-right padding-left ></ion-icon><ion-badge *ngIf="filteredWorkorderLength!=0" id="notifications-badge" color="danger">{{filteredWorkorderLength}}</ion-badge> Maintain Equipments</span><ion-icon *ngIf="!showWork" item-right class="icon-color2" name="ios-arrow-forward"></ion-icon><ion-icon *ngIf="showWork" item-right class="icon-color2" name="ios-arrow-down"></ion-icon></button>\n\n        <button *ngIf="showWork" color="light" ion-item detail-push (click)="openPm()"><span><ion-icon name="ios-cog" padding-right padding-left ></ion-icon>Work Order</span><ion-icon item-right class="icon-color2" name="ios-arrow-forward"></ion-icon></button>\n\n        <button *ngIf="showWork" color="light" ion-item detail-push (click)="openNewpm()"><span><ion-icon name="ios-build" padding-right padding-left ></ion-icon>Preventive Maintenance</span><ion-icon item-right class="icon-color2" name="ios-arrow-forward"></ion-icon></button>\n\n        <button color="dark" ion-item detail-push (click)="openMaterial()"><span class="icon-color"><ion-icon name="ios-clipboard" padding-right padding-left></ion-icon>Material List</span><ion-icon class="icon-color2" item-right name="ios-arrow-forward"></ion-icon></button>\n\n      <!--  <button color="dark" ion-item detail-push (click)="openEngineer()"><span class="icon-color"><ion-icon name="ios-clipboard" padding-right padding-left></ion-icon>Operation Manual</span><ion-icon class="icon-color2" item-right name="ios-arrow-forward"></ion-icon></button> \n\n       <button color="dark" ion-item detail-push (click)="openEngineer()"><span class="icon-color"><ion-icon name="ios-clipboard" padding-right padding-left></ion-icon>Operators Schedule</span><ion-icon class="icon-color2" item-right name="ios-arrow-forward"></ion-icon></button> -->\n\n      </ion-list>\n\n    </ion-content>\n\n  </ion-menu>\n\n  <ion-nav #mycontent main swipeBackEnabled="false"></ion-nav>\n\n\n\n  <ion-header>\n\n    <ion-navbar hideBackButton color="primary">\n\n      <ion-title>\n\n        NO&G PM\n\n      </ion-title>\n\n      <div class="align-user"> <strong>{{name}}</strong><br> ({{position}})</div>\n\n      <ion-buttons end>\n\n        <button (click)="logOut()" ion-button icon-only>\n\n                    <ion-icon name="ios-exit-outline"></ion-icon>\n\n                </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n  <ion-content class="background-image">\n\n    <div class="bg-color bg-size">\n\n      <div>\n\n        <ion-row class="wlm-msg" align-items-start>\n\n          <ion-col align-self-baseline col-12>\n\n            <ion-list text-center>\n\n              <img src="assets/images/NOG-LOGO.jpg" width="200px" />\n\n              <h3 class="title">OGPOOC (CMMS)</h3>\n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>\n\n            <ion-card>\n\n              <form>\n\n                <ion-item>\n\n                  <ion-icon item-right name="md-calendar"></ion-icon>\n\n                  <ion-input [(ngModel)]="currentDate" (ngModelChange)="dailyWorkorder()" placeholder="Date" type="date" name="date"></ion-input>\n\n                </ion-item>\n\n              </form>\n\n              <ion-item>\n\n                <ion-icon item-left name="document"></ion-icon>\n\n                <strong color="dark">Daily Work Order/PM actions</strong>\n\n              </ion-item>\n\n              <ion-item class="txt-size">{{dailyWolength}}</ion-item>\n\n              <ion-item><button ion-button item-right small (click)="openPm()">View Work Orders</button></ion-item>\n\n            </ion-card>\n\n          </ion-col>\n\n          <ion-col>\n\n            <ion-card>\n\n              <ion-item>\n\n              </ion-item>\n\n              <ion-item>\n\n                <ion-icon item-left name="ios-construct"></ion-icon>\n\n                <strong color="dark">Equipmets</strong>\n\n              </ion-item>\n\n              <ion-item class="txt-size">{{equipmentLength}}</ion-item>\n\n              <ion-item><button ion-button item-right small (click)="openEquipments()">View Equipments</button></ion-item>\n\n            </ion-card>\n\n          </ion-col>\n\n          <ion-col>\n\n            <ion-card>\n\n              <ion-item>\n\n              </ion-item>\n\n              <ion-item>\n\n                <ion-icon item-left name="ios-cog"></ion-icon>\n\n                <strong color="dark">No of Fault Registry</strong>\n\n              </ion-item>\n\n              <ion-item class="txt-size">{{faultRegistrylength}}</ion-item>\n\n              <ion-item><button ion-button item-right small (click)="openRegistry()">View Fault Registry</button></ion-item>\n\n            </ion-card>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>\n\n            <ion-card class="card-point">\n\n              <ion-item>\n\n                <ion-icon item-left name="ios-clipboard"></ion-icon>\n\n                <strong color="dark">Available Material</strong>\n\n              </ion-item>\n\n              <ion-item class="txt-size">{{materialList}}</ion-item>\n\n              <ion-item><button ion-button item-right small (click)="openMaterial()">View Material List</button></ion-item>\n\n            </ion-card>\n\n          </ion-col>\n\n          <ion-col>\n\n            <ion-card class="card-point">\n\n              <ion-item>\n\n                <ion-icon item-left name="document"></ion-icon>\n\n                <strong color="dark">Work Permit</strong>\n\n              </ion-item>\n\n              <ion-item class="txt-size">{{deptWorkpermitslength}}</ion-item>\n\n              <ion-item><button ion-button item-right small (click)="openWorkPermit()">View Work Permit List</button></ion-item>\n\n            </ion-card>\n\n          </ion-col>\n\n          <ion-col>\n\n            <ion-card class="card-point">\n\n              <ion-item>\n\n                <ion-icon item-left name="ios-folder-open"></ion-icon>\n\n                <strong color="dark">Total No of PM/Work Order History</strong>\n\n              </ion-item>\n\n              <ion-item class="txt-size">{{totalWolength}}</ion-item>\n\n              <ion-item><button ion-button item-right small (click)="openPm()">View PM</button></ion-item>\n\n            </ion-card>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n      </div>\n\n      <ion-fab class="align-bottom" bottom left menuToggle>\n\n        <button ion-fab mini>\n\n              <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n      </ion-fab>\n\n    </div>\n\n  </ion-content>\n\n</ion-split-pane>'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\operatorhome\operatorhome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__pouch_service_pouch_service__["a" /* PouchService */], __WEBPACK_IMPORTED_MODULE_3__pouch_service_popup__["a" /* PopupProvider */]])
    ], OperatorhomePage);
    return OperatorhomePage;
}());

//# sourceMappingURL=operatorhome.js.map

/***/ })

});
//# sourceMappingURL=26.js.map