webpackJsonp([33],{

/***/ 757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngineersPageModule", function() { return EngineersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__engineers__ = __webpack_require__(838);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EngineersPageModule = /** @class */ (function () {
    function EngineersPageModule() {
    }
    EngineersPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__engineers__["a" /* EngineersPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__engineers__["a" /* EngineersPage */]),
            ],
        })
    ], EngineersPageModule);
    return EngineersPageModule;
}());

//# sourceMappingURL=engineers.module.js.map

/***/ }),

/***/ 838:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EngineersPage; });
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
 * Generated class for the EngineersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EngineersPage = /** @class */ (function () {
    function EngineersPage(navCtrl, alertCtrl, platform, db, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.db = db;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.filteredSupervisors = [];
        this.supervisors = [];
        this.trackByName = function (index, item) {
            return item.id;
        };
    }
    EngineersPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad EngineersPage');
        this.platform.ready()
            .then(function () {
            _this._loadSupervisors();
        });
        this.localStorageItem = JSON.parse(localStorage.getItem('user'));
        this.db.getSupervisor(this.localStorageItem).then(function (item) {
            _this.user = item;
        });
    };
    /**
    * On display page
    */
    EngineersPage.prototype.ionViewDidEnter = function () {
        this._loadSupervisors();
    };
    EngineersPage.prototype._loadSupervisors = function () {
        var _this = this;
        this.db.getSupervisors()
            .then(function (supervisors) {
            _this.filteredSupervisors = supervisors.filter(function (data) { return data.post == 'Supervisor'; });
            _this.supervisors = supervisors.filter(function (data) { return data.post == 'Supervisor'; });
        });
    };
    EngineersPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    EngineersPage.prototype.newEngineer = function () {
        var _this = this;
        var modal = this.modalCtrl.create('AddengineerPage', { type: 'Add' });
        modal.onDidDismiss(function (data) {
            if (data) {
                _this._loadSupervisors();
            }
        });
        modal.present();
    };
    EngineersPage.prototype.openEngineer = function (engineer) {
        var _this = this;
        var modal = this.modalCtrl.create('AddengineerPage', { type: 'Edit', engineer: engineer });
        modal.onDidDismiss(function (data) {
            _this._loadSupervisors();
        });
        modal.present();
    };
    EngineersPage.prototype.filterSupervisors = function ($event) {
        var value = $event.target.value ? $event.target.value.toLowerCase() : '';
        this.filteredSupervisors = [];
        for (var _i = 0, _a = this.supervisors; _i < _a.length; _i++) {
            var supervisor = _a[_i];
            if (supervisor.name.toLowerCase().indexOf(value) !== -1) {
                this.filteredSupervisors.push(supervisor);
            }
        }
    };
    EngineersPage.prototype.deleteEngineer = function (engineer) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Delete engineer',
            message: 'Are you sure you want to delete engineer: ' + engineer.name,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Confirm',
                    handler: function () {
                        _this.db.deleteSupervisor(engineer)
                            .then(function (success) {
                            _this._loadSupervisors();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    EngineersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-engineers',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\engineers\engineers.html"*/'<ion-header>\n\n    <ion-toolbar color="primary">\n\n        <ion-title>Supervisors</ion-title>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-primary50">\n\n\n\n    <ion-toolbar color="primary">\n\n        <ion-searchbar (ionInput)="filterSupervisors($event)"></ion-searchbar>\n\n    </ion-toolbar>\n\n    \n\n    <ion-fab top right>\n\n        <button ion-fab mini (click)="newEngineer()" color="secondary"><ion-icon name="person-add"></ion-icon></button>\n\n    </ion-fab>\n\n\n\n    <ion-list style="width: 100%" [virtualScroll]="filteredSupervisors" [virtualTrackBy]="trackByName" [approxItemHeight]="\'200px\'">\n\n    <ion-card *virtualItem="let engineer" style="margin-top: 5px;">\n\n        <ion-card-content (press)="deleteEngineer(engineer, i)">\n\n            <ion-row>\n\n                <ion-item>\n\n                    <ion-avatar item-start (click)="openEngineer(engineer)">\n\n                        <img [src]="engineer.sex == \'Male\' ? \'assets/images/male.png\' : \'assets/images/female.png\'">\n\n                    </ion-avatar>\n\n                    <ion-icon color="secondary" item-right small name="md-create" (click)="openEngineer(engineer)"></ion-icon>\n\n                    <ion-icon color="danger" item-right small name="ios-trash" (click)="deleteEngineer(engineer, i)"></ion-icon>\n\n                    \n\n                </ion-item>\n\n            </ion-row>\n\n            <ion-row (click)="openEngineer(engineer)">\n\n                <h2 text-bold text-uppercase><strong>{{ engineer.name }}</strong></h2>\n\n                <p ion-text class="list-price">{{ engineer.mobile }}</p>\n\n            </ion-row>\n\n            <ion-row (click)="openEngineer(engineer)">\n\n                <p class="shop">{{ engineer.address }}</p>\n\n                <p class="shop" class="list-price">{{ engineer.email }}</p>\n\n            </ion-row>\n\n              <ion-row (click)="openEngineer(engineer)">\n\n                <p class="shop eng-color">{{ engineer.department }}</p>\n\n                <p class="list-price eng-color">{{ engineer.position }}</p>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    </ion-list>\n\n    <ion-fab bottom left>\n\n        <button ion-fab mini (click)="back()">\n\n            <ion-icon name="arrow-back"></ion-icon>\n\n        </button>\n\n    </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\engineers\engineers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__pouch_service_pouch_service__["a" /* PouchService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */]])
    ], EngineersPage);
    return EngineersPage;
}());

//# sourceMappingURL=engineers.js.map

/***/ })

});
//# sourceMappingURL=33.js.map