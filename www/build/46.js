webpackJsonp([46],{

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddequipmentPageModule", function() { return AddequipmentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addequipment__ = __webpack_require__(828);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddequipmentPageModule = /** @class */ (function () {
    function AddequipmentPageModule() {
    }
    AddequipmentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__addequipment__["a" /* AddequipmentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__addequipment__["a" /* AddequipmentPage */]),
            ],
        })
    ], AddequipmentPageModule);
    return AddequipmentPageModule;
}());

//# sourceMappingURL=addequipment.module.js.map

/***/ }),

/***/ 828:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddequipmentPage; });
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
 * Generated class for the AddequipmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddequipmentPage = /** @class */ (function () {
    function AddequipmentPage(navCtrl, viewCtrl, db, navParams, platform) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.db = db;
        this.navParams = navParams;
        this.platform = platform;
        this.add = false;
        this.title = 'Edit';
        this.search = false;
        this.showButton = false;
        if (this.navParams.get('type') == 'Add') {
            this.add = true;
            this.title = 'Add';
            this.equipmentcats = {
                id: Math.round((new Date()).getTime()).toString(),
                rev: '',
                name: '',
                tag: '',
                size: '',
                designcondition: '',
                designtemperature: '',
                additionalinfo: '',
                equipmentparts: []
            };
        }
        else {
            this.equipmentcats = this.navParams.get('equipment');
        }
    }
    AddequipmentPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.localStorageItem = JSON.parse(localStorage.getItem('user'));
        console.log('ionViewDidLoad AddequipmentPage');
        this.db.getSupervisor(this.localStorageItem).then(function (item) {
            _this.user = item;
            _this.position = item.post;
            if (_this.position == 'Operator') {
                _this.showButton = true;
            }
        });
    };
    AddequipmentPage.prototype.submit = function () {
        var _this = this;
        if (this.add) {
            var arrayCheck = ['name', 'tag', 'size', 'spec', 'designcondition', 'designtemperature', 'additionalinfo'];
            for (var i = 0; i < arrayCheck.length; i++) {
                if (this.equipmentcats[arrayCheck[i]] == '') {
                    this.equipmentcats[arrayCheck[i]] = 'N/A';
                }
            }
            this.db.saveEquipmentcat(this.equipmentcats).then(function (res) {
                _this.viewCtrl.dismiss(res);
            });
        }
        else {
            this.db.updateEquipmentcat(this.equipmentcats).then(function (result) {
                _this.viewCtrl.dismiss();
            });
        }
    };
    AddequipmentPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    AddequipmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-addequipment',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\addequipment\addequipment.html"*/'<ion-header>\n\n  <ion-navbar color="secondary">\n\n    <ion-buttons left>\n\n      <button color="primary" ion-button (click)="cancel()">\n\n          <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title class="title-color">{{title}} Equipments</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-primary50" padding>\n\n  \n\n  <form margin-top (ngSubmit)="submit()">\n\n    <fieldset [disabled]="showButton">\n\n    <ion-item>\n\n      <ion-input placeholder="Name" type="text" [(ngModel)]="equipmentcats.name" name="name"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-input placeholder="Tag" type="text" [(ngModel)]="equipmentcats.tag" name="tag"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-input placeholder="Size" type="text" [(ngModel)]="equipmentcats.size" name="size"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-input placeholder="Design Condition" type="text" [(ngModel)]="equipmentcats.designcondition" name="designcondition"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-input placeholder="Design Temperature" type="text" [(ngModel)]="equipmentcats.designtemperature" name="designtemperature"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-textarea placeholder="Additional Info" type="text" [(ngModel)]="equipmentcats.additionalinfo" name="additionalinfo"></ion-textarea>\n\n    </ion-item>\n\n    <button ion-button type="submit" block>Submit</button>\n\n    </fieldset>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\addequipment\addequipment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__pouch_service_pouch_service__["a" /* PouchService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */]])
    ], AddequipmentPage);
    return AddequipmentPage;
}());

//# sourceMappingURL=addequipment.js.map

/***/ })

});
//# sourceMappingURL=46.js.map