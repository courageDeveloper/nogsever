webpackJsonp([18],{

/***/ 773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkerschedulePageModule", function() { return WorkerschedulePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__workerschedule__ = __webpack_require__(854);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WorkerschedulePageModule = /** @class */ (function () {
    function WorkerschedulePageModule() {
    }
    WorkerschedulePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__workerschedule__["a" /* WorkerschedulePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__workerschedule__["a" /* WorkerschedulePage */]),
            ],
        })
    ], WorkerschedulePageModule);
    return WorkerschedulePageModule;
}());

//# sourceMappingURL=workerschedule.module.js.map

/***/ }),

/***/ 854:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkerschedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
 * Generated class for the WorkerschedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WorkerschedulePage = /** @class */ (function () {
    function WorkerschedulePage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.trackByName = function (index, item) {
            return item.id;
        };
    }
    WorkerschedulePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WorkerschedulePage');
        this.filteredWorkschedules = [{ name: "Biodun Lawal", date: "2018-11-05", typeofshift: "Night", department: "Electrical" },
            { name: "Kate Omotosho", date: "2018-11-012", typeofshift: "Day", department: "Mechanical" }, { name: "Gabriel Nehikhare", date: "2018-11-15", typeofshift: "Night", department: "Process Operations" },
            { name: "Esosa Igho", date: "2018-11-05", typeofshift: "Night", department: "Instrument" }
        ];
    };
    WorkerschedulePage.prototype.back = function () {
        this.navCtrl.pop();
    };
    WorkerschedulePage.prototype.newWorkschedules = function () {
        var modal = this.modalCtrl.create('AddworkerschedulePage', { type: 'Add' });
        modal.onDidDismiss(function (data) {
            if (data) {
                //this._loadCustomers();
            }
        });
        modal.present();
    };
    WorkerschedulePage.prototype.openWorkschedules = function (workschedule) {
        var modal = this.modalCtrl.create('AddworkerschedulePage', { type: 'Edit', workschedule: workschedule });
        modal.onDidDismiss(function (data) {
            //this._loadCustomers();
        });
        modal.present();
    };
    WorkerschedulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-workerschedule',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\workerschedule\workerschedule.html"*/'<ion-header>\n\n  <ion-toolbar color="primary">\n\n    <ion-title>Worker\'s Schedule</ion-title>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-primary50">\n\n\n\n  <ion-toolbar color="primary">\n\n    <ion-searchbar (ionInput)="filteredWorkschedules($event)"></ion-searchbar>\n\n  </ion-toolbar>\n\n\n\n  <ion-fab top right edge>\n\n    <button ion-fab mini (click)="newWorkschedules()" color="secondary"><ion-icon name="ios-create"></ion-icon></button>\n\n  </ion-fab>\n\n\n\n  <ion-list style="width: 100%" [virtualScroll]="filteredWorkschedules" [virtualTrackBy]="trackByName" [approxItemHeight]="\'200px\'">\n\n  <ion-card *virtualItem="let workschedule" style="margin-top: 15px; margin-bottom: 20px;">\n\n    <ion-card-content (press)="deleteWorkschedules(workschedule, i)">\n\n      <ion-row>\n\n        <ion-item>\n\n          <ion-icon color="secondary" item-right small name="md-create" (click)="openWorkschedules(workschedule)"></ion-icon>\n\n          <ion-icon color="danger" item-right small name="ios-trash" (click)="deleteWorkschedules(workschedule, i)"></ion-icon>\n\n        </ion-item>\n\n      </ion-row>\n\n      <ion-row (click)="openWorkschedules(workschedule)">\n\n        <h2 text-bold text-uppercase><strong>{{ workschedule.name }}</strong></h2>\n\n        <p ion-text class="list-price">{{ workschedule.date }}</p>\n\n      </ion-row>\n\n      <ion-row (click)="openWorkschedules(workschedule)">\n\n        <p class="shop eng-color"><strong>{{workschedule.typeofshift }}</strong></p>\n\n        <p class="shop" class="list-price eng-color">{{ workschedule.department}}</p>\n\n      </ion-row>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-list>\n\n  <ion-fab bottom left>\n\n    <button ion-fab mini (click)="back()">\n\n            <ion-icon name="arrow-back"></ion-icon>\n\n        </button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\workerschedule\workerschedule.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */]])
    ], WorkerschedulePage);
    return WorkerschedulePage;
}());

//# sourceMappingURL=workerschedule.js.map

/***/ })

});
//# sourceMappingURL=18.js.map