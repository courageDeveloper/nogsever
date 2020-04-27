webpackJsonp([45],{

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddequipmentsaddPageModule", function() { return AddequipmentsaddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addequipmentsadd__ = __webpack_require__(829);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_auto_complete__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_auto_complete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_auto_complete__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AddequipmentsaddPageModule = /** @class */ (function () {
    function AddequipmentsaddPageModule() {
    }
    AddequipmentsaddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__addequipmentsadd__["a" /* AddequipmentsaddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ng2_auto_complete__["Ng2AutoCompleteModule"],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__addequipmentsadd__["a" /* AddequipmentsaddPage */]),
            ],
        })
    ], AddequipmentsaddPageModule);
    return AddequipmentsaddPageModule;
}());

//# sourceMappingURL=addequipmentsadd.module.js.map

/***/ }),

/***/ 829:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddequipmentsaddPage; });
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
var AddequipmentsaddPage = /** @class */ (function () {
    function AddequipmentsaddPage(navCtrl, viewCtrl, db, navParams, platform) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.db = db;
        this.navParams = navParams;
        this.platform = platform;
        this.add = false;
        this.title = 'Edit';
        this.search = false;
        if (this.navParams.get('type') == 'Add') {
            this.add = true;
            this.title = 'Add';
            this.equipmentsadds = {
                id: Math.round((new Date()).getTime()).toString(),
                rev: '',
                tagname: '',
                equipmentcatname: '',
                equipmentcatid: '',
                equipmentpartid: '',
                equipmentpartname: ''
            };
        }
        else {
            this.equipmentsadds = this.navParams.get('equipmentsadd');
        }
    }
    AddequipmentsaddPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad AddsparepartsPage');
        this.db.getEquipmentcats().then(function (res) {
            _this.equipmentsCatArray = [];
            _this.equipmentsCatArray = res;
        });
        this.db.getEquipmentparts().then(function (res) {
            _this.equipmentsPartArray = [];
            _this.equipmentsPartArray = res;
        });
    };
    AddequipmentsaddPage.prototype.selectEquipmentsCats = function (newVal) {
        this.equipmentCatObject = newVal;
        /* if(this.add){
        this.equipmentCatObject.equipmentparts.forEach(item => {
          this.db.getEquipmentpart(item).then(res => {
            this.equipmentsPartArray.push(res);
          })
        })
      } */
        if (this.add) {
            this.equipmentsadds.equipmentcatname = newVal.name;
        }
        else {
            this.equipmentsadds.equipmentcatname = newVal;
        }
    };
    AddequipmentsaddPage.prototype.selectEquipmentsParts = function (newVal) {
        this.equipmentPartObject = newVal;
        if (this.add) {
            this.equipmentsadds.equipmentpartname = newVal.name;
        }
        else {
            this.equipmentsadds.equipmentpartname = newVal;
        }
    };
    AddequipmentsaddPage.prototype.submit = function () {
        var _this = this;
        if (this.add) {
            this.equipmentsadds.equipmentcatid = this.equipmentCatObject.id;
            this.equipmentsadds.equipmentpartid = this.equipmentPartObject.id;
            this.db.saveEquipmentsadd(this.equipmentsadds).then(function (res) {
                _this.viewCtrl.dismiss(res);
                _this.equipmentPartObject.equipmenttags.push(res.id);
                _this.db.updateEquipmentpart(_this.equipmentPartObject).then(function (res) {
                });
            });
        }
        else {
            if (typeof this.equipmentCatObject == 'object') {
                this.equipmentsadds.equipmentcatid = this.equipmentCatObject.id;
                this.equipmentsadds.equipmentcatname = this.equipmentCatObject.name;
            }
            else {
                this.equipmentsadds.equipmentcatid = this.equipmentsadds.equipmentcatid;
                this.equipmentsadds.equipmentcatname = this.equipmentsadds.equipmentcatname;
            }
            if (typeof this.equipmentPartObject == 'object') {
                this.equipmentsadds.equipmentpartid = this.equipmentPartObject.id;
                this.equipmentsadds.equipmentpartname = this.equipmentPartObject.name;
            }
            else {
                this.equipmentsadds.equipmentpartid = this.equipmentsadds.equipmentpartid;
                this.equipmentsadds.equipmentpartname = this.equipmentsadds.equipmentpartname;
            }
            this.db.updateEquipmentsadd(this.equipmentsadds).then(function (result) {
                _this.viewCtrl.dismiss();
            });
        }
    };
    AddequipmentsaddPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    AddequipmentsaddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-addequipmentsadd',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\addequipmentsadd\addequipmentsadd.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-buttons left>\n      <button color="primary" ion-button (click)="cancel()">\n          <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title class="title-color">{{title}} Equipments</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-primary50" padding>\n  <ion-fab top right edge *ngIf="platform.is(\'cordova\')">\n    <button ion-fab mini margin-left (click)="open()" color="secondary"><ion-icon name="phone-portrait"></ion-icon></button>\n  </ion-fab>\n\n  <form margin-top (ngSubmit)="submit()">\n    <ion-item>\n      <ion-input ng2-auto-complete [source]="equipmentsCatArray" list-formatter="name" (valueChanged)="selectEquipmentsCats($event)" placeholder="Category Name" type="text" [(ngModel)]="equipmentsadds.equipmentcatname" name="equipmentcatname"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input ng2-auto-complete [source]="equipmentsPartArray" list-formatter="name" (valueChanged)="selectEquipmentsParts($event)" placeholder="Part Name" type="text" [(ngModel)]="equipmentsadds.equipmentpartname" name="equipmentpartname"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input placeholder="Tag name" type="text" [(ngModel)]="equipmentsadds.tagname" name="tagname"></ion-input>\n    </ion-item>\n    <button ion-button type="submit" block>Submit</button>\n  </form>\n</ion-content>'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\addequipmentsadd\addequipmentsadd.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__pouch_service_pouch_service__["a" /* PouchService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */]])
    ], AddequipmentsaddPage);
    return AddequipmentsaddPage;
}());

//# sourceMappingURL=addequipmentsadd.js.map

/***/ })

});
//# sourceMappingURL=45.js.map