webpackJsonp([32],{

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentsaddPageModule", function() { return EquipmentsaddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__equipmentsadd__ = __webpack_require__(841);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EquipmentsaddPageModule = /** @class */ (function () {
    function EquipmentsaddPageModule() {
    }
    EquipmentsaddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__equipmentsadd__["a" /* EquipmentsaddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__equipmentsadd__["a" /* EquipmentsaddPage */]),
            ],
        })
    ], EquipmentsaddPageModule);
    return EquipmentsaddPageModule;
}());

//# sourceMappingURL=equipmentsadd.module.js.map

/***/ }),

/***/ 841:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquipmentsaddPage; });
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
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EquipmentsaddPage = /** @class */ (function () {
    function EquipmentsaddPage(navCtrl, db, alertCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.filteredEquipmentsadd = [];
        this.equipmentsadd = [];
        this.trackByName = function (index, item) {
            return item.id;
        };
    }
    EquipmentsaddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SparepartsPage');
        this._loadEquipmentsadd();
    };
    /**
    * On display page
    */
    EquipmentsaddPage.prototype.ionViewDidEnter = function () {
        this._loadEquipmentsadd();
    };
    EquipmentsaddPage.prototype._loadEquipmentsadd = function () {
        var _this = this;
        this.db.getEquipmentsadds()
            .then(function (equipmentsadd) {
            _this.filteredEquipmentsadd = equipmentsadd;
            _this.equipmentsadd = equipmentsadd;
        });
    };
    EquipmentsaddPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    EquipmentsaddPage.prototype.newEquipmentsadd = function () {
        var _this = this;
        var modal = this.modalCtrl.create('AddequipmentsaddPage', { type: 'Add' });
        modal.onDidDismiss(function (data) {
            if (data) {
                _this._loadEquipmentsadd();
            }
        });
        modal.present();
    };
    EquipmentsaddPage.prototype.openEquipmentsadd = function (equipmentsadd) {
        var _this = this;
        var modal = this.modalCtrl.create('AddequipmentsaddPage', { type: 'Edit', equipmentsadd: equipmentsadd });
        modal.onDidDismiss(function (data) {
            _this._loadEquipmentsadd();
        });
        modal.present();
    };
    EquipmentsaddPage.prototype.filterEquipmentsadd = function ($event) {
        var value = $event.target.value ? $event.target.value.toLowerCase() : '';
        this.filteredEquipmentsadd = [];
        for (var _i = 0, _a = this.equipmentsadd; _i < _a.length; _i++) {
            var equipmentadd = _a[_i];
            if (equipmentadd.tagname.toLowerCase().indexOf(value) !== -1) {
                this.filteredEquipmentsadd.push(equipmentadd);
            }
        }
    };
    EquipmentsaddPage.prototype.deleteEquipmentsadd = function (equipmentsadd) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Delete Equipment',
            message: 'Are you sure you want to delete Equipment: ' + equipmentsadd.tagname,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Confirm',
                    handler: function () {
                        _this.db.deleteEquipmentsadd(equipmentsadd)
                            .then(function (success) {
                            _this._loadEquipmentsadd();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    EquipmentsaddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-equipmentsadd',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\equipmentsadd\equipmentsadd.html"*/'<ion-header>\n\n  <ion-toolbar color="primary">\n\n    <ion-title>Add Equipments</ion-title>\n\n\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-primary50">\n\n\n\n  <ion-toolbar color="primary">\n\n    <ion-searchbar (ionInput)="filterEquipmentsadd($event)"></ion-searchbar>\n\n  </ion-toolbar>\n\n\n\n  <ion-fab top right>\n\n    <button ion-fab mini (click)="newEquipmentsadd()" color="secondary"><ion-icon name="ios-hammer"></ion-icon></button>\n\n  </ion-fab>\n\n\n\n  <ion-list style="width: 100%" [virtualScroll]="filteredEquipmentsadd" [virtualTrackBy]="trackByName" [approxItemHeight]="\'200px\'">\n\n  <ion-card *virtualItem="let equipmentsadd" style="margin-top: 5px; margin-bottom: 10px;">\n\n    <ion-card-content (press)="deleteEquipmentsadd(equipmentsadd, i)">\n\n      <ion-row>\n\n        <ion-item>\n\n          <ion-icon color="secondary" item-right small name="md-create" (click)="openEquipmentsadd(equipmentsadd)"></ion-icon>\n\n          <ion-icon color="danger" item-right small name="ios-trash" (click)="deleteEquipmentsadd(equipmentsadd, i)"></ion-icon>\n\n\n\n        </ion-item>\n\n      </ion-row>\n\n      <ion-row (click)="openEquipmentsadd(equipmentsadd)">\n\n        <h2 text-bold text-uppercase><strong>{{equipmentsadd.tagname}}</strong></h2>\n\n      </ion-row>\n\n      <ion-row (click)="openEquipmentsadd(equipmentsadd)">\n\n          <p ion-text>{{equipmentsadd.equipmentcatname}}</p>\n\n        <p class="list-price eng-color">{{ equipmentsadd.equipmentpartname }}</p>\n\n    </ion-row>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  </ion-list>\n\n  <ion-fab bottom left>\n\n    <button ion-fab mini (click)="back()">\n\n            <ion-icon name="arrow-back"></ion-icon>\n\n        </button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\equipmentsadd\equipmentsadd.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__pouch_service_pouch_service__["a" /* PouchService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */]])
    ], EquipmentsaddPage);
    return EquipmentsaddPage;
}());

//# sourceMappingURL=equipmentsadd.js.map

/***/ })

});
//# sourceMappingURL=32.js.map