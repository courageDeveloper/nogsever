webpackJsonp([24],{

/***/ 768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "otpPageModule", function() { return otpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__otp__ = __webpack_require__(849);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var otpPageModule = /** @class */ (function () {
    function otpPageModule() {
    }
    otpPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__otp__["a" /* otpPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__otp__["a" /* otpPage */]),
            ],
        })
    ], otpPageModule);
    return otpPageModule;
}());

//# sourceMappingURL=otp.module.js.map

/***/ }),

/***/ 849:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return otpPage; });
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
 * Generated class for the otpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var otpPage = /** @class */ (function () {
    function otpPage(navCtrl, modalCtrl, db, httpService, formBuilder, navParams) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.db = db;
        this.httpService = httpService;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.emailValidate = "[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})";
        this.errorMessageUser = "";
        this.disabled = true;
        this.otpForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            otp: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]()
        });
        this.otp = {
            otp: ''
        };
    }
    otpPage.prototype.ionViewDidEnter = function () {
        this.errorMessageUser = "";
        this.otpForm = this.formBuilder.group({
            otp: [this.otp.otp]
        });
    };
    otpPage.prototype.ionViewDidLoad = function () {
        this.errorMessageUser = "";
        console.log('ionViewDidLoad otpPage');
        this.otpForm = this.formBuilder.group({
            otp: [this.otp.otp]
        });
    };
    otpPage.prototype.sendEmail = function () {
        var _this = this;
        var randNumber = Math.floor((Math.random() * 10000000) + 1);
        this.supervisor.otp = randNumber;
        this.db.updateSupervisor(this.supervisor).then(function (res) {
            _this.httpService.forgotPassword(res).subscribe(function (res) {
            });
        });
    };
    otpPage.prototype.checkOtp = function () {
        var _this = this;
        this.errorMessageUser = "";
        this.disabled = true;
        this.db.getSupervisors().then(function (data) {
            data = data.filter(function (data) { return data.otp != "" && data.otp == _this.otp.otp; });
            if (data.length > 0) {
                if (data[0].otp == _this.otp.otp) {
                    _this.disabled = false;
                    /* this.supervisor = data[0]; */
                    _this.errorMessageUser = "";
                    var modal = _this.modalCtrl.create('AddchangepasswordPage', { engineer: data[0] });
                    modal.onDidDismiss(function (data) {
                        if (data) {
                            console.log("data");
                        }
                    });
                    modal.present();
                }
                else {
                    console.log("No item yet");
                }
            }
            else {
                _this.errorMessageUser = "Wrong OTP code, pls check email or try processing again";
            }
        });
    };
    otpPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    otpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-otp',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\otp\otp.html"*/'<!--\n\n  Generated template for the ForgotpasswordPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Enter OTP Code</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="background-image">\n\n  <div class="bg-color bg-size">\n\n    <form [formGroup]="otpForm">\n\n      <ion-item>\n\n        <ion-input class="placeholder-style" [(ngModel)]="otp.otp" (ngModelChange)="checkOtp()" placeholder="Enter your registered otp code"\n\n          [formControl]="otpForm.controls[\'otp\']" type="otp" name="otp" required></ion-input>\n\n      </ion-item>\n\n      <br>\n\n      <ion-label color="danger" no-margin>{{errorMessageUser}}</ion-label>\n\n\n\n      <!-- <button ion-button item-right color="secondary" (click)="sendEmail()" full [disabled]="!email.email || disabled">RESET</button> -->\n\n    </form>\n\n  </div>\n\n  <ion-fab bottom left>\n\n    <button ion-fab mini (click)="back()">\n\n      <ion-icon name="arrow-back"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\otp\otp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__pouch_service_pouch_service__["a" /* PouchService */], __WEBPACK_IMPORTED_MODULE_4__providers_httpservice__["a" /* HttpserviceProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */]])
    ], otpPage);
    return otpPage;
}());

//# sourceMappingURL=otp.js.map

/***/ })

});
//# sourceMappingURL=24.js.map