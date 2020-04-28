webpackJsonp([34],{

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyworkorderPageModule", function() { return DailyworkorderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dailyworkorder__ = __webpack_require__(839);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DailyworkorderPageModule = /** @class */ (function () {
    function DailyworkorderPageModule() {
    }
    DailyworkorderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dailyworkorder__["a" /* DailyworkorderPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dailyworkorder__["a" /* DailyworkorderPage */]),
            ],
        })
    ], DailyworkorderPageModule);
    return DailyworkorderPageModule;
}());

//# sourceMappingURL=dailyworkorder.module.js.map

/***/ }),

/***/ 839:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DailyworkorderPage; });
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
 * Generated class for the DailyworkorderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DailyworkorderPage = /** @class */ (function () {
    function DailyworkorderPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.trackByName = function (index, item) {
            return item.responsibility;
        };
    }
    DailyworkorderPage.prototype.ionViewDidLoad = function () {
        var currentDate = this.navParams.get('currentDate');
        console.log('ionViewDidLoad WorkorderPage');
        this.filterWorkorder = [{ worktype: "Preventive maintenance(PM)", responsibility: "Operator", department: "Instrument and Process", frequency: "45 days", location: "OGPOOC", worktypeno: "PM-001", equipment: "XHP seperator", description: "Calibration of PIT-0900 on XHP seperator" },
            { worktype: "Work Order(WO)", responsibility: "Operator", department: "Mechanical and Process", frequency: "2018-11-21", location: "OGPOOC", worktypeno: "WO-001", equipment: "Compressor 1 K-3600", description: "Service compressor 1 piston cylinder" }
        ];
    };
    DailyworkorderPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    DailyworkorderPage.prototype.newWorkorder = function () {
        var modal = this.modalCtrl.create('AddworkorderPage', { type: 'Add' });
        modal.onDidDismiss(function (data) {
            if (data) {
                //this._loadCustomers();
            }
        });
        modal.present();
    };
    DailyworkorderPage.prototype.openWorkorder = function (workorder) {
        var modal = this.modalCtrl.create('AddworkorderPage', { type: 'Edit', workorder: workorder });
        modal.onDidDismiss(function (data) {
            //this._loadCustomers();
        });
        modal.present();
    };
    DailyworkorderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dailyworkorder',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\dailyworkorder\dailyworkorder.html"*/'<ion-header>\n\n  <ion-toolbar color="primary">\n\n    <ion-title>Work Order</ion-title>\n\n\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-primary50">\n\n\n\n  <ion-toolbar color="primary">\n\n    <ion-searchbar (ionInput)="filterWorkorder($event)"></ion-searchbar>\n\n  </ion-toolbar>\n\n\n\n  <ion-fab top right edge>\n\n    <button ion-fab mini (click)="newWorkorder()" color="secondary"><ion-icon name="ios-copy"></ion-icon></button>\n\n  </ion-fab>\n\n\n\n  <ion-list style="width: 100%" [virtualScroll]="filterWorkorder" [virtualTrackBy]="trackByName" [approxItemHeight]="\'200px\'">\n\n  <ion-card *virtualItem="let workorder" style="margin-top: 25px; margin-bottom: 30px;">\n\n    <ion-card-content (press)="deleteWorkorder(workorder, i)">\n\n      <ion-row>\n\n        <ion-item>\n\n          <ion-icon color="secondary" item-right small name="md-create" (click)="openWorkorder(workorder)"></ion-icon>\n\n          <ion-icon color="danger" item-right small name="ios-trash" (click)="deleteWorkorder(workorder, i)"></ion-icon>\n\n\n\n        </ion-item>\n\n      </ion-row>\n\n      <ion-row (click)="openWorkorder(workorder)">\n\n        <h2 text-bold><strong>{{ workorder.worktype }}</strong></h2>\n\n        <p ion-text class="list-price">{{ workorder.responsibility }}</p>\n\n      </ion-row>\n\n      <ion-row (click)="openWorkorder(workorder)">\n\n        <p text-bold>{{ workorder.department }}</p>\n\n        <p ion-text class="list-price">{{ workorder.frequency }}</p>\n\n      </ion-row>\n\n      <ion-row (click)="openWorkorder(workorder)">\n\n        <p class="shop">{{ workorder.location }}</p>\n\n        <p  class="list-price">{{ workorder.worktypeno }}</p>\n\n      </ion-row>\n\n      <ion-row (click)="openWorkorder(workorder)">\n\n        <p class="shop eng-color">{{ workorder.equipment }}</p>\n\n        <p class="list-price eng-color">{{ workorder.description }}</p>\n\n      </ion-row>\n\n      <ion-row>\n\n        <!-- <button ion-button small color="attrgreen" class="list-price">Approve</button> -->\n\n        <button ion-button small color="danger" class="list-price">Dismiss</button>\n\n      </ion-row>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-list>\n\n  <ion-fab bottom left>\n\n    <button ion-fab mini (click)="back()">\n\n            <ion-icon name="arrow-back"></ion-icon>\n\n        </button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\dailyworkorder\dailyworkorder.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */]])
    ], DailyworkorderPage);
    return DailyworkorderPage;
}());

//# sourceMappingURL=dailyworkorder.js.map

/***/ })

});
//# sourceMappingURL=34.js.map