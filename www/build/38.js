webpackJsonp([38],{

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddsparepartsPageModule", function() { return AddsparepartsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addspareparts__ = __webpack_require__(835);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_auto_complete__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_auto_complete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_auto_complete__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AddsparepartsPageModule = /** @class */ (function () {
    function AddsparepartsPageModule() {
    }
    AddsparepartsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__addspareparts__["a" /* AddsparepartsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ng2_auto_complete__["Ng2AutoCompleteModule"],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__addspareparts__["a" /* AddsparepartsPage */]),
            ],
        })
    ], AddsparepartsPageModule);
    return AddsparepartsPageModule;
}());

//# sourceMappingURL=addspareparts.module.js.map

/***/ }),

/***/ 835:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddsparepartsPage; });
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
 * Generated class for the AddsparepartsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddsparepartsPage = /** @class */ (function () {
    function AddsparepartsPage(navCtrl, viewCtrl, db, navParams, platform) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.db = db;
        this.navParams = navParams;
        this.platform = platform;
        this.add = false;
        this.title = 'Edit';
        this.search = false;
        this.names = [];
        this.activeCValve = false;
        this.activeMValve = false;
        this.activePValve = false;
        this.activeGuage = false;
        this.activeTransmitter = false;
        this.activeOther = false;
        this.showButton = false;
        if (this.navParams.get('type') == 'Add') {
            this.add = true;
            this.title = 'Add';
            this.equipmentparts = {
                id: Math.round((new Date()).getTime()).toString(),
                rev: '',
                name: '',
                size: '',
                spec: '',
                rating: '',
                tag: '',
                setpoint: '',
                othername: '',
                calibratedno: 0,
                type: '',
                additionalinfo: '',
                equipmentcatname: '',
                equipmentcatid: '',
                rangef: '',
                rangep: '',
                area: '',
                instrumentidentification: '',
                linelocation: '',
                equipmenttags: []
            };
        }
        else {
            this.equipmentparts = this.navParams.get('sparepart');
            if (this.equipmentparts.name == 'Control Valve') {
                this.activeCValve = true;
                this.activePValve = false;
                this.activeOther = false;
                this.activeGuage = false;
                this.activeTransmitter = false;
            }
            else if (this.equipmentparts.name == 'Presssure Safety Valve') {
                this.activePValve = true;
                this.activeCValve = false;
                this.activeMValve = false;
                this.activeOther = false;
                this.activeGuage = false;
                this.activeTransmitter = false;
            }
            else if (this.equipmentparts.name == 'Manual Valve') {
                this.activeMValve = true;
                this.activePValve = false;
                this.activeOther = false;
                this.activeGuage = false;
                this.activeTransmitter = false;
            }
            else if (this.equipmentparts.name == 'Manual Gauge') {
                this.activeGuage = true;
                this.activeMValve = false;
                this.activePValve = false;
                this.activeOther = false;
                this.activeCValve = false;
                this.activeTransmitter = false;
            }
            else if (this.equipmentparts.name == 'Transmitter') {
                this.activeTransmitter = true;
                this.activeGuage = false;
                this.activeMValve = false;
                this.activePValve = false;
                this.activeOther = false;
                this.activeCValve = false;
            }
            else {
                this.activeOther = true;
                this.activeCValve = false;
                this.activeMValve = false;
                this.activePValve = false;
                this.activeGuage = false;
                this.activeTransmitter = false;
            }
        }
        this.names = ['Control Valve', 'Presssure Safety Valve', 'Manual Valve', 'Manual Gauge', 'Transmitter', 'Other'];
    }
    AddsparepartsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.localStorageItem = JSON.parse(localStorage.getItem('user'));
        console.log('ionViewDidLoad AddsparepartsPage');
        this.db.getSupervisor(this.localStorageItem).then(function (item) {
            _this.user = item;
            _this.position = item.post;
            if (_this.position == 'Operator') {
                _this.showButton = true;
            }
        });
        this.db.getEquipmentcats().then(function (res) {
            _this.sparePartsArray = [];
            _this.sparePartsArray = res;
        });
    };
    AddsparepartsPage.prototype.selectSpareparts = function (newVal) {
        this.equipmentCatObject = newVal;
        if (this.add) {
            this.equipmentparts.equipmentcatname = newVal.name;
        }
        else {
            this.equipmentparts.equipmentcatname = newVal;
        }
    };
    AddsparepartsPage.prototype.submit = function () {
        var _this = this;
        if (this.add) {
            var arrayCheck = ['name', 'tag', 'size', 'spec', 'rating', 'setpoint', 'area', 'linelocation', 'rangep',
                'rangef', 'equipmentcatname', 'additionalinfo', 'calibratedno', 'type', 'instrumentidentification'];
            for (var i = 0; i < arrayCheck.length; i++) {
                if (this.equipmentparts[arrayCheck[i]] == '') {
                    this.equipmentparts[arrayCheck[i]] = 'N/A';
                }
            }
            if (this.equipmentCatObject != undefined) {
                this.equipmentparts.equipmentcatid = this.equipmentCatObject.id;
            }
            if (this.equipmentparts.name == 'Other') {
                this.equipmentparts.name = this.equipmentparts.othername;
            }
            this.db.saveEquipmentpart(this.equipmentparts).then(function (res) {
                _this.viewCtrl.dismiss(res);
                if (_this.equipmentCatObject != undefined) {
                    _this.equipmentCatObject.equipmentparts.push(res.id);
                }
                _this.db.updateEquipmentcat(_this.equipmentCatObject).then(function (res) {
                });
            });
        }
        else {
            if (typeof this.equipmentCatObject == 'object') {
                if (this.equipmentCatObject != undefined) {
                    this.equipmentparts.equipmentcatid = this.equipmentCatObject.id;
                    this.equipmentparts.equipmentcatname = this.equipmentCatObject.name;
                }
                if (this.equipmentparts.name == 'Other') {
                    this.equipmentparts.name = this.equipmentparts.othername;
                }
                this.db.updateEquipmentpart(this.equipmentparts).then(function (result) {
                    _this.viewCtrl.dismiss();
                });
            }
            else {
                this.db.updateEquipmentpart(this.equipmentparts).then(function (result) {
                    _this.viewCtrl.dismiss();
                });
            }
        }
    };
    AddsparepartsPage.prototype.getName = function (nam) {
        if (this.equipmentparts.name == 'Control Valve') {
            this.activeCValve = true;
            this.activePValve = false;
            this.activeOther = false;
            this.activeGuage = false;
            this.activeTransmitter = false;
        }
        else if (this.equipmentparts.name == 'Presssure Safety Valve') {
            this.activePValve = true;
            this.activeCValve = false;
            this.activeMValve = false;
            this.activeOther = false;
            this.activeGuage = false;
            this.activeTransmitter = false;
        }
        else if (this.equipmentparts.name == 'Manual Valve') {
            this.activeMValve = true;
            this.activePValve = false;
            this.activeOther = false;
            this.activeGuage = false;
            this.activeTransmitter = false;
        }
        else if (this.equipmentparts.name == 'Manual Gauge') {
            this.activeGuage = true;
            this.activeMValve = false;
            this.activePValve = false;
            this.activeOther = false;
            this.activeCValve = false;
            this.activeTransmitter = false;
        }
        else if (this.equipmentparts.name == 'Transmitter') {
            this.activeTransmitter = true;
            this.activeGuage = false;
            this.activeMValve = false;
            this.activePValve = false;
            this.activeOther = false;
            this.activeCValve = false;
        }
        else {
            this.activeOther = true;
            this.activeCValve = false;
            this.activeMValve = false;
            this.activePValve = false;
            this.activeGuage = false;
            this.activeTransmitter = false;
        }
    };
    AddsparepartsPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    AddsparepartsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-addspareparts',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\addspareparts\addspareparts.html"*/'<ion-header>\n\n  <ion-navbar color="secondary">\n\n    <ion-buttons left>\n\n      <button color="primary" ion-button (click)="cancel()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title class="title-color">{{title}} Equipment Parts</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-primary50" padding>\n\n  <ion-fab top right edge *ngIf="platform.is(\'cordova\')">\n\n    <button ion-fab mini margin-left (click)="open()" color="secondary"><ion-icon name="phone-portrait"></ion-icon></button>\n\n  </ion-fab>\n\n\n\n  <form margin-top (ngSubmit)="submit()">\n\n      <fieldset [disabled]="showButton">\n\n    <ion-item>\n\n      <ion-input ng2-auto-complete [source]="sparePartsArray" list-formatter="name" (valueChanged)="selectSpareparts($event)" placeholder="Name"\n\n        type="text" [(ngModel)]="equipmentparts.equipmentcatname" name="equipmentcatname"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Part Name</ion-label>\n\n      <ion-select [(ngModel)]="equipmentparts.name" name="name" (ngModelChange)="getName(name)">\n\n        <ion-option *ngFor="let name of names" [value]="name">{{name}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <div *ngIf="activeCValve || activeMValve">\n\n      <ion-item>\n\n        <ion-input placeholder="Type" type="text" [(ngModel)]="equipmentparts.type" name="type"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input placeholder="Tag" type="text" [(ngModel)]="equipmentparts.tag" name="tag"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input placeholder="Size" type="text" [(ngModel)]="equipmentparts.size" name="size"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input placeholder="Spec" type="text" [(ngModel)]="equipmentparts.spec" name="spec"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input placeholder="Rating" type="text" [(ngModel)]="equipmentparts.rating" name="rating"></ion-input>\n\n      </ion-item>\n\n    </div>\n\n    <!-- PV -->\n\n    <div *ngIf="activePValve">\n\n      <ion-item>\n\n        <ion-input placeholder="Tag" type="text" [(ngModel)]="equipmentparts.tag" name="tag"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input placeholder="Size" type="text" [(ngModel)]="equipmentparts.size" name="size"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input placeholder="Set Point" type="text" [(ngModel)]="equipmentparts.setpoint" name="setpoint"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input placeholder="Rating" type="text" [(ngModel)]="equipmentparts.rating" name="rating"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input placeholder="Calibrated No" type="number" [(ngModel)]="equipmentparts.calibratedno" name="calibratedno"></ion-input>\n\n      </ion-item>\n\n    </div>\n\n    <!-- MGuage -->\n\n    <div *ngIf="activeGuage">\n\n      <ion-item>\n\n        <ion-input placeholder="Tag" type="text" [(ngModel)]="equipmentparts.tag" name="tag"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input placeholder="AREA" type="text" [(ngModel)]="equipmentparts.area" name="area"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input placeholder="Line Location" type="text" [(ngModel)]="equipmentparts.linelocation" name="linelocation"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input placeholder="Range (Psi)" type="text" [(ngModel)]="equipmentparts.rangep" name="rangep"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input placeholder="Range (Degree Fahrenheit)" type="text" [(ngModel)]="equipmentparts.rangef" name="rangef"></ion-input>\n\n      </ion-item>\n\n    </div>\n\n     <!-- Transmitter -->\n\n     <div *ngIf="activeTransmitter">\n\n      <ion-item>\n\n        <ion-input placeholder="Tag" type="text" [(ngModel)]="equipmentparts.tag" name="tag"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input placeholder="AREA" type="text" [(ngModel)]="equipmentparts.area" name="area"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input placeholder="Line Location" type="text" [(ngModel)]="equipmentparts.linelocation" name="linelocation"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input placeholder="Instrument Identification" type="text" [(ngModel)]="equipmentparts.instrumentidentification" name="instrumentidentification"></ion-input>\n\n      </ion-item>\n\n    </div>\n\n    <!-- Others -->\n\n    <div *ngIf="activeOther">\n\n      <ion-item>\n\n        <ion-input placeholder="Other Part Name" type="text" [(ngModel)]="equipmentparts.othername" name="othername"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input placeholder="Tag" type="text" [(ngModel)]="equipmentparts.tag" name="tag"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input placeholder="Size" type="text" [(ngModel)]="equipmentparts.size" name="size"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input placeholder="Rating" type="text" [(ngModel)]="equipmentparts.rating" name="rating"></ion-input>\n\n      </ion-item>\n\n    </div>\n\n    <ion-item>\n\n      <ion-textarea placeholder="Additional Info" type="text" [(ngModel)]="equipmentparts.additionalinfo" name="additionalinfo"></ion-textarea>\n\n    </ion-item>\n\n    <button ion-button type="submit" block>Submit</button>\n\n    </fieldset>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\addspareparts\addspareparts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__pouch_service_pouch_service__["a" /* PouchService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */]])
    ], AddsparepartsPage);
    return AddsparepartsPage;
}());

//# sourceMappingURL=addspareparts.js.map

/***/ })

});
//# sourceMappingURL=38.js.map