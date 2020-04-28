webpackJsonp([44],{

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddfrequencyPageModule", function() { return AddfrequencyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addfrequency__ = __webpack_require__(831);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddfrequencyPageModule = /** @class */ (function () {
    function AddfrequencyPageModule() {
    }
    AddfrequencyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__addfrequency__["a" /* AddfrequencyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__addfrequency__["a" /* AddfrequencyPage */]),
            ],
        })
    ], AddfrequencyPageModule);
    return AddfrequencyPageModule;
}());

//# sourceMappingURL=addfrequency.module.js.map

/***/ }),

/***/ 831:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddfrequencyPage; });
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
var AddfrequencyPage = /** @class */ (function () {
    function AddfrequencyPage(navCtrl, viewCtrl, modalCtrl, db, navParams, platform) {
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
    AddfrequencyPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.localStorageItem = JSON.parse(localStorage.getItem('user'));
        console.log('ionViewDidLoad AddfrequencyPage');
        this.db.getSupervisor(this.localStorageItem).then(function (item) {
            _this.user = item;
            _this.position = item.post;
            if (_this.position == 'Operator') {
                _this.showButton = true;
            }
        });
    };
    AddfrequencyPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    AddfrequencyPage.prototype.Addfrequency = function (equipment) {
        var modal = this.modalCtrl.create('AddfrequencyequipmentPage', { type: 'Add', equipment: equipment });
        modal.onDidDismiss(function (data) {
        });
        modal.present();
        this.viewCtrl.dismiss();
    };
    AddfrequencyPage.prototype.Viewfrequency = function (equipment) {
        var _this = this;
        this.db.getPreventivemaintenance(this.equipment.pmId).then(function (res) {
            var preventivemaintenance = res;
            var modal = _this.modalCtrl.create('ViewnewpreventivemaintenancePage', { type: 'Edit', equipment: equipment, preventivemaintenance: preventivemaintenance });
            modal.onDidDismiss(function (data) {
            });
            modal.present();
            _this.viewCtrl.dismiss();
        });
    };
    AddfrequencyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-addfrequency',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\addfrequency\addfrequency.html"*/'<ion-header>\n\n  <ion-navbar color="secondary">\n\n    <ion-buttons left>\n\n      <button color="primary" ion-button (click)="cancel()">\n\n          <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title class="title-color">{{title}} Frequency</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-primary50" padding>\n\n  <ion-card style="margin-top: 25px; margin-bottom: 30px;">\n\n  <ion-row>\n\n    <ion-item>\n\n      <h2 text-bold text-uppercase><strong>Name:</strong> {{equipment.name }}</h2>\n\n      <p ion-text class="list-price"><strong>Tag:</strong> {{ equipment.tag }}</p>\n\n    </ion-item>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-item>\n\n      <h2 text-bold text-uppercase><strong>Size:</strong> {{equipment.size }}</h2>\n\n      <h2 text-bold text-uppercase><strong>Design Condition:</strong> {{equipment.designcondition}}</h2>\n\n    </ion-item>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-col><button ion-button small (click)="Addfrequency(equipment)" color="secondary">Add Frequency</button></ion-col>\n\n    <ion-col><button ion-button small (click)="Viewfrequency(equipment)" color="secondary">View Frequency</button></ion-col>\n\n  </ion-row>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\addfrequency\addfrequency.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__pouch_service_pouch_service__["a" /* PouchService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */]])
    ], AddfrequencyPage);
    return AddfrequencyPage;
}());

//# sourceMappingURL=addfrequency.js.map

/***/ })

});
//# sourceMappingURL=44.js.map