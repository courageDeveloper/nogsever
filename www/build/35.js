webpackJsonp([35],{

/***/ 756:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddchangepasswordPageModule", function() { return AddchangepasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__changepassword__ = __webpack_require__(837);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddchangepasswordPageModule = /** @class */ (function () {
    function AddchangepasswordPageModule() {
    }
    AddchangepasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__changepassword__["a" /* AddchangepasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__changepassword__["a" /* AddchangepasswordPage */]),
            ]
        })
    ], AddchangepasswordPageModule);
    return AddchangepasswordPageModule;
}());

//# sourceMappingURL=changepassword.module.js.map

/***/ }),

/***/ 837:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddchangepasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pouch_service_pouch_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(22);
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
 * Generated class for the AddchangepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddchangepasswordPage = /** @class */ (function () {
    function AddchangepasswordPage(navCtrl, formBuilder, viewCtrl, navParams, db, platform) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.db = db;
        this.platform = platform;
        this.add = false;
        this.title = 'Edit';
        this.search = false;
        this.disabled = false;
        this.emailValidate = "[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})";
        this.changePasswordForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroup"]({
            newpassword: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](),
            password: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]()
        });
        this.supervisor = this.navParams.get('engineer');
        this.changePassword = {
            newpassword: '',
            password: ''
        };
    }
    AddchangepasswordPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    AddchangepasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddchangepasswordPage');
        this.changePasswordForm = this.formBuilder.group({
            newpassword: [this.changePassword.newpassword],
            password: [this.changePassword.password],
        });
    };
    AddchangepasswordPage.prototype.ionViewDidEnter = function () {
        this.changePasswordForm = this.formBuilder.group({
            newpassword: [this.changePassword.newpassword],
            password: [this.changePassword.password],
        });
    };
    AddchangepasswordPage.prototype.submit = function () {
        var _this = this;
        if (this.changePassword.newpassword != this.changePassword.password) {
            this.errorMessage = "Confirm password does not match New password.";
        }
        else {
            this.supervisor.password = this.changePassword.password;
            this.db.updateSupervisor(this.supervisor).then(function (result) {
                _this.viewCtrl.dismiss();
            });
        }
    };
    AddchangepasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-changepassword',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\changepassword\changepassword.html"*/'<ion-header>\n\n  <ion-navbar color="secondary">\n\n    <ion-buttons left>\n\n      <button color="primary" ion-button (click)="cancel()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title class="title-color">Change Password</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-primary50" padding>\n\n  <ion-fab top right edge *ngIf="platform.is(\'cordova\')">\n\n    <button ion-fab mini margin-left (click)="open()" color="secondary"><ion-icon name="phone-portrait"></ion-icon></button>\n\n  </ion-fab>\n\n\n\n  <form margin-top [formGroup]="changePasswordForm" (ngSubmit)="submit()">\n\n    \n\n    <ion-item>\n\n      <ion-input placeholder="New Password" [(ngModel)]="changePassword.newpassword" type="password" name="newpassword" [formControl]="changePasswordForm.controls[\'newpassword\']"\n\n        required></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-input placeholder="Confirm Password" [(ngModel)]="changePassword.password" type="password" name="password" [formControl]="changePasswordForm.controls[\'password\']"\n\n        required></ion-input>\n\n    </ion-item>\n\n    <ion-label color="danger" no-margin>{{errorMessage}}</ion-label>\n\n    <button ion-button type="submit" block [disabled]=\'changePasswordForm.invalid\'>Submit</button>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\changepassword\changepassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__pouch_service_pouch_service__["a" /* PouchService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */]])
    ], AddchangepasswordPage);
    return AddchangepasswordPage;
}());

//# sourceMappingURL=changepassword.js.map

/***/ })

});
//# sourceMappingURL=35.js.map