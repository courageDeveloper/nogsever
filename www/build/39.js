webpackJsonp([39],{

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddorderPageModule", function() { return AddorderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addorder__ = __webpack_require__(832);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddorderPageModule = /** @class */ (function () {
    function AddorderPageModule() {
    }
    AddorderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__addorder__["a" /* AddorderPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__addorder__["a" /* AddorderPage */]),
            ],
        })
    ], AddorderPageModule);
    return AddorderPageModule;
}());

//# sourceMappingURL=addorder.module.js.map

/***/ }),

/***/ 832:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddorderPage; });
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
var AddorderPage = /** @class */ (function () {
    function AddorderPage(navCtrl, viewCtrl, modalCtrl, db, navParams, platform) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.db = db;
        this.navParams = navParams;
        this.platform = platform;
        this.add = false;
        this.title = 'Edit';
        this.search = false;
        this.showButton = false;
        if (this.navParams.get('type') == 'Equipment') {
            this.add = true;
            this.title = 'Add';
            this.equipment = this.navParams.get('equipment');
        }
    }
    AddorderPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.localStorageItem = JSON.parse(localStorage.getItem('user'));
        console.log('ionViewDidLoad AddorderPage');
        this.db.getSupervisor(this.localStorageItem).then(function (item) {
            _this.user = item;
            _this.position = item.post;
            if (_this.position == 'Operator') {
                _this.showButton = true;
            }
        });
    };
    AddorderPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    AddorderPage.prototype.Addorder = function (equipment) {
        var modal = this.modalCtrl.create('AddorderequipmentPage', { type: 'Add', equipment: equipment });
        modal.onDidDismiss(function (data) {
        });
        modal.present();
        this.viewCtrl.dismiss();
    };
    AddorderPage.prototype.Vieworder = function (equipment) {
        var _this = this;
        this.db.getWorkorder(this.equipment.woId).then(function (res) {
            var workorder = res;
            var modal = _this.modalCtrl.create('ViewpreventivemaintenancePage', { type: 'View', equipment: equipment, workorder: workorder });
            modal.onDidDismiss(function (data) {
            });
            modal.present();
            _this.viewCtrl.dismiss();
        });
    };
    AddorderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-addorder',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\addorder\addorder.html"*/'<ion-header>\n\n  <ion-navbar color="secondary">\n\n    <ion-buttons left>\n\n      <button color="primary" ion-button (click)="cancel()">\n\n          <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title class="title-color">{{title}} Work Order</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-primary50" padding>\n\n  <ion-card style="margin-top: 25px; margin-bottom: 30px;">\n\n  <ion-row>\n\n    <ion-item>\n\n      <h2 text-bold text-uppercase><strong>Name:</strong> {{equipment.name }}</h2>\n\n      <p ion-text class="list-price"><strong>Tag:</strong> {{ equipment.tag }}</p>\n\n    </ion-item>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-item>\n\n      <h2 text-bold text-uppercase><strong>Size:</strong> {{equipment.size }}</h2>\n\n      <h2 text-bold text-uppercase><strong>Design Condition:</strong> {{equipment.designcondition}}</h2>\n\n    </ion-item>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-col><button ion-button small (click)="Addorder(equipment)" color="secondary">Add Work Order</button></ion-col>\n\n    <ion-col><button ion-button small (click)="Vieworder(equipment)" color="secondary">View Work Order</button></ion-col>\n\n  </ion-row>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\addorder\addorder.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__pouch_service_pouch_service__["a" /* PouchService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */]])
    ], AddorderPage);
    return AddorderPage;
}());

//# sourceMappingURL=addorder.js.map

/***/ })

});
//# sourceMappingURL=39.js.map