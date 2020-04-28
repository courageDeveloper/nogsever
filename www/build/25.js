webpackJsonp([25],{

/***/ 770:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorsPageModule", function() { return OperatorsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__operators__ = __webpack_require__(851);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OperatorsPageModule = /** @class */ (function () {
    function OperatorsPageModule() {
    }
    OperatorsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__operators__["a" /* OperatorsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__operators__["a" /* OperatorsPage */]),
            ],
        })
    ], OperatorsPageModule);
    return OperatorsPageModule;
}());

//# sourceMappingURL=operators.module.js.map

/***/ }),

/***/ 851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperatorsPage; });
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
 * Generated class for the OperatorsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OperatorsPage = /** @class */ (function () {
    function OperatorsPage(navCtrl, alertCtrl, platform, modalCtrl, db, navParams) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.db = db;
        this.navParams = navParams;
        this.filteredSupervisors = [];
        this.supervisors = [];
        this.trackByName = function (index, item) {
            return item.id;
        };
    }
    ;
    OperatorsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad OperatorsPage');
        this.platform.ready()
            .then(function () {
            _this._loadSupervisors();
        });
        this.localStorageItem = JSON.parse(localStorage.getItem('user'));
        this.db.getSupervisor(this.localStorageItem).then(function (item) {
            _this.user = item;
        });
    };
    OperatorsPage.prototype.ionViewDidEnter = function () {
        this._loadSupervisors();
    };
    OperatorsPage.prototype._loadSupervisors = function () {
        var _this = this;
        this.db.getSupervisors()
            .then(function (supervisors) {
            if (_this.user != undefined) {
                _this.filteredSupervisors = supervisors.filter(function (data) { return data.departments == _this.user.departments && data.post == 'Operator'; });
                _this.supervisors = supervisors.filter(function (data) { return data.departments == _this.user.departments && data.post == 'Operator'; });
                if (_this.user.departments == 'HSE' || _this.user.departments == 'Admin') {
                    _this.filteredSupervisors = supervisors.filter(function (data) { return data.post == "Operator"; });
                    _this.supervisors = supervisors.filter(function (data) { return data.post == "Operator"; });
                }
            }
        });
    };
    OperatorsPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    OperatorsPage.prototype.newOperator = function () {
        var _this = this;
        var modal = this.modalCtrl.create('AddoperatorPage', { type: 'Add' });
        modal.onDidDismiss(function (data) {
            if (data) {
                _this._loadSupervisors();
            }
        });
        modal.present();
    };
    OperatorsPage.prototype.openOperator = function (operator) {
        var _this = this;
        var loggedInUser = JSON.parse(localStorage.getItem('user'));
        this.db.getSupervisor(loggedInUser).then(function (user) {
            if (user.post != 'Supervisor') {
                var modal = _this.modalCtrl.create('AddoperatorPage', { type: 'Edit', operator: operator });
                modal.onDidDismiss(function (data) {
                    _this._loadSupervisors();
                });
                modal.present();
            }
            else {
                var alert = _this.alertCtrl.create({
                    title: 'NOT ALLOWED!',
                    cssClass: 'alertHeader',
                    message: 'Supervisors are not allowed to Edit',
                    buttons: [
                        {
                            text: 'OK',
                            role: 'cancel'
                        }
                    ]
                });
                alert.present();
            }
        });
    };
    OperatorsPage.prototype.filterSupervisors = function ($event) {
        var value = $event.target.value ? $event.target.value.toLowerCase() : '';
        this.filteredSupervisors = [];
        for (var _i = 0, _a = this.supervisors; _i < _a.length; _i++) {
            var supervisor = _a[_i];
            if (supervisor.name.toLowerCase().indexOf(value) !== -1) {
                this.filteredSupervisors.push(supervisor);
            }
        }
    };
    OperatorsPage.prototype.deleteOperator = function (operator) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Delete operator',
            message: 'Are you sure you want to delete operator: ' + operator.name,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Confirm',
                    handler: function () {
                        _this.db.deleteSupervisor(operator)
                            .then(function (success) {
                            _this._loadSupervisors();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    OperatorsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-operators',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\operators\operators.html"*/'<ion-header>\n\n  <ion-toolbar color="primary">\n\n      <ion-title>Operators</ion-title>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-primary50">\n\n\n\n  <ion-toolbar color="primary">\n\n      <ion-searchbar (ionInput)="filterSupervisors($event)"></ion-searchbar>\n\n  </ion-toolbar>\n\n  \n\n  <ion-fab top right>\n\n      <button ion-fab mini (click)="newOperator()" color="secondary"><ion-icon name="person-add"></ion-icon></button>\n\n  </ion-fab>\n\n\n\n  <ion-list style="width: 100%" [virtualScroll]="filteredSupervisors" [virtualTrackBy]="trackByName" [approxItemHeight]="\'200px\'">\n\n  <ion-card *virtualItem="let operator" style="margin-top: 5px; margin-bottom: 10px;">\n\n      <ion-card-content (press)="deleteOperator(operator, i)">\n\n          <ion-row>\n\n              <ion-item>\n\n                  <ion-avatar item-start (click)="openOperator(operator)">\n\n                      <img [src]="operator.sex == \'Male\' ? \'assets/images/male.png\' : \'assets/images/female.png\'">\n\n                  </ion-avatar>\n\n                  <ion-icon color="secondary" item-right small name="md-create" (click)="openOperator(operator)"></ion-icon>\n\n                  <ion-icon color="danger" item-right small name="ios-trash" (click)="deleteOperator(operator, i)"></ion-icon>\n\n                  \n\n              </ion-item>\n\n          </ion-row>\n\n          <ion-row (click)="openOperator(operator)">\n\n              <h2 text-bold text-uppercase><strong>{{ operator.name }}</strong></h2>\n\n              <p ion-text class="list-price">{{ operator.mobile }}</p>\n\n          </ion-row>\n\n          <ion-row (click)="openOperator(operator)">\n\n              <p class="shop">{{ operator.address }}</p>\n\n              <p class="shop" class="list-price">{{ operator.email }}</p>\n\n          </ion-row>\n\n            <ion-row (click)="openOperator(operator)">\n\n              <p class="shop eng-color">{{ operator.department }}</p>\n\n              <p class="list-price eng-color">{{ operator.position }}</p>\n\n          </ion-row>\n\n      </ion-card-content>\n\n  </ion-card>\n\n</ion-list>\n\n  <ion-fab bottom left>\n\n      <button ion-fab mini (click)="back()">\n\n          <ion-icon name="arrow-back"></ion-icon>\n\n      </button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\operators\operators.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__pouch_service_pouch_service__["a" /* PouchService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */]])
    ], OperatorsPage);
    return OperatorsPage;
}());

//# sourceMappingURL=operators.js.map

/***/ })

});
//# sourceMappingURL=25.js.map