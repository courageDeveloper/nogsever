webpackJsonp([30],{

/***/ 764:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordPageModule", function() { return ForgotpasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgotpassword__ = __webpack_require__(845);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForgotpasswordPageModule = /** @class */ (function () {
    function ForgotpasswordPageModule() {
    }
    ForgotpasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__forgotpassword__["a" /* ForgotpasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forgotpassword__["a" /* ForgotpasswordPage */]),
            ],
        })
    ], ForgotpasswordPageModule);
    return ForgotpasswordPageModule;
}());

//# sourceMappingURL=forgotpassword.module.js.map

/***/ }),

/***/ 845:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pouch_service_pouch_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_httpservice__ = __webpack_require__(169);
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
 * Generated class for the ForgotpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotpasswordPage = /** @class */ (function () {
    function ForgotpasswordPage(navCtrl, db, httpService, formBuilder, navParams) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.httpService = httpService;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.emailValidate = "[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})";
        this.disabled = true;
        this.emailForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]()
        });
        this.email = {
            email: ''
        };
    }
    ForgotpasswordPage.prototype.ionViewDidEnter = function () {
        this.emailForm = this.formBuilder.group({
            email: [this.email.email, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern(this.emailValidate)])]
        });
    };
    ForgotpasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotpasswordPage');
        this.emailForm = this.formBuilder.group({
            email: [this.email.email, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern(this.emailValidate)])]
        });
    };
    ForgotpasswordPage.prototype.sendEmail = function (supervisor) {
        var _this = this;
        var randNumber = Math.floor((Math.random() * 10000000) + 1);
        this.supervisor.otp = randNumber;
        this.db.updateSupervisor(this.supervisor).then(function (res) {
            _this.httpService.forgotPassword(res).subscribe(function (res) {
            });
            _this.navCtrl.push('otpPage');
        });
    };
    ForgotpasswordPage.prototype.checkEmail = function () {
        var _this = this;
        this.disabled = true;
        this.db.getSupervisors().then(function (data) {
            data = data.filter(function (data) { return data.email == _this.email.email; });
            if (data.length > 0) {
                if (data[0].email == _this.email.email) {
                    _this.disabled = false;
                    _this.supervisor = data[0];
                }
                else {
                    _this.disabled = true;
                }
            }
        });
    };
    ForgotpasswordPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    ForgotpasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-forgotpassword',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\forgotpassword\forgotpassword.html"*/'<!--\n\n  Generated template for the ForgotpasswordPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Forgot Password</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="background-image">\n\n  <div class="bg-color bg-size">\n\n    <form [formGroup]="emailForm">\n\n      <ion-item>\n\n        <ion-input class="placeholder-style" [(ngModel)]="email.email" (ngModelChange)="checkEmail()" placeholder="Enter your registered email address"\n\n          [formControl]="emailForm.controls[\'email\']" type="email" name="email" required></ion-input>\n\n      </ion-item>\n\n      <br>\n\n      <ion-label color="danger" class="error-size" *ngIf="!emailForm.controls.email.valid && emailForm.controls.email.dirty" no-margin>Please\n\n        enter a valid email.</ion-label>\n\n      <ion-label color="danger" no-margin>{{errorMessageUser}}</ion-label>\n\n\n\n      <button ion-button item-right color="secondary" (click)="sendEmail()" full [disabled]="!email.email || disabled">RESET</button>\n\n    </form>\n\n  </div>\n\n  <ion-fab bottom left>\n\n    <button ion-fab mini (click)="back()">\n\n      <ion-icon name="arrow-back"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\forgotpassword\forgotpassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__pouch_service_pouch_service__["a" /* PouchService */], __WEBPACK_IMPORTED_MODULE_4__providers_httpservice__["a" /* HttpserviceProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */]])
    ], ForgotpasswordPage);
    return ForgotpasswordPage;
}());

//# sourceMappingURL=forgotpassword.js.map

/***/ })

});
//# sourceMappingURL=30.js.map