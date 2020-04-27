webpackJsonp([29],{

/***/ 763:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(844);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 844:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, db, load) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.load = load;
        this.error = "";
        this.user = [];
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.ionViewDidEnter = function () {
        //this.db.checkRemoteSync();
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.error = "";
        this.db.getEquipmentcats().then(function (equipments) {
        });
        //Get Staffs
        this.db.getSupervisors().then(function (user) {
            var found = false;
            for (var i = 0; i < user.length; i++) {
                if (user[i].username == _this.username && user[i].password == _this.password && user[i].post == "Manager") {
                    found = true;
                    localStorage.setItem('user', JSON.stringify(user[i].id));
                    _this.navCtrl.setRoot('HomePage');
                }
                else if (user[i].username == _this.username && user[i].password == _this.password && user[i].post == "Supervisor") {
                    found = true;
                    localStorage.setItem('user', JSON.stringify(user[i].id));
                    _this.navCtrl.setRoot('SupervisorhomePage');
                }
                else if (user[i].username == _this.username && user[i].password == _this.password && user[i].post == "Operator") {
                    found = true;
                    localStorage.setItem('user', JSON.stringify(user[i].id));
                    _this.navCtrl.setRoot('OperatorhomePage');
                }
                else if (user[i].username == _this.username && user[i].password == _this.password && user[i].post == "Admin") {
                    found = true;
                    localStorage.setItem('user', JSON.stringify(user[i].id));
                    _this.navCtrl.setRoot('AdminHomePage');
                }
            }
            if (found == false) {
                _this.error = "Username or Password is not correct, click forgot password for account recovery";
            }
        });
    };
    LoginPage.prototype.navFpassword = function () {
        this.navCtrl.push("ForgotpasswordPage");
    };
    LoginPage.prototype.sync = function () {
        this.db.initDB();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\login\login.html"*/'<ion-content class="background-image">\n\n  <div class="bg-color bg-size">\n\n    <button ion-button attrgreen class="padding-end" (click)="sync()"> SYNC </button>\n\n    <ion-list text-center class="bottom-align">\n\n      <img src="assets/images/NOG-LOGO.jpg" width="250px" />\n\n    </ion-list>\n\n\n\n    <span class="txt-align" padding>\n\n      <h1>Welcome!</h1>\n\n      <p tect-center>Login into your account.</p>\n\n    </span>\n\n    \n\n    <ion-item>\n\n      <ion-label>\n\n        <ion-icon name="person"></ion-icon>\n\n      </ion-label>\n\n      <ion-input [(ngModel)]="username" placeholder="Username" type="text"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>\n\n        <ion-icon name="lock"></ion-icon>\n\n      </ion-label>\n\n      <ion-input [(ngModel)]="password" placeholder="Password" type="password"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-list text-center>\n\n      <button ion-button full primary (click)="login()">Login</button>\n\n      <p class="red"><strong>{{ error }}</strong></p>\n\n    </ion-list>\n\n\n\n\n\n\n\n    <ion-list margin text-center>\n\n      <span><a class="fgt-color" (click)="navFpassword()"><b>Forgot Password?</b></a></span>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__pouch_service_pouch_service__["a" /* PouchService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=29.js.map