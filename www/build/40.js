webpackJsonp([40],{

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddoperatorPageModule", function() { return AddoperatorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addoperator__ = __webpack_require__(834);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddoperatorPageModule = /** @class */ (function () {
    function AddoperatorPageModule() {
    }
    AddoperatorPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__addoperator__["a" /* AddoperatorPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__addoperator__["a" /* AddoperatorPage */]),
            ]
        })
    ], AddoperatorPageModule);
    return AddoperatorPageModule;
}());

//# sourceMappingURL=addoperator.module.js.map

/***/ }),

/***/ 834:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddoperatorPage; });
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
 * Generated class for the AddoperatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddoperatorPage = /** @class */ (function () {
    function AddoperatorPage(navCtrl, formBuilder, viewCtrl, navParams, db, platform) {
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
        this.operatorForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroup"]({
            id: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](),
            rev: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](),
            name: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](),
            mobile: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](),
            address: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](),
            email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](),
            sex: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](),
            otp: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](),
            position: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](),
            departments: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](),
            username: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](),
            password: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](),
            post: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]()
        });
        this.departments = ["Process Operations", "HSE", "Instrument", "Mechanical", "Electrical"];
        if (this.navParams.get('type') == 'Add') {
            this.add = true;
            this.title = 'Add';
            this.operator = {
                id: Math.round((new Date()).getTime()).toString(),
                rev: '',
                name: '',
                mobile: '',
                address: '',
                email: '',
                sex: 'Male',
                position: '',
                departments: 'Process Operations',
                username: '',
                otp: '',
                password: '',
                post: 'Operator',
                workpermits: [],
                workorders: [],
                woalert: [],
                faultregistrys: [],
                dailyreports: []
            };
        }
        else {
            this.operator = this.navParams.get('operator');
        }
    }
    AddoperatorPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    AddoperatorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddoperatorPage');
        this.operatorForm = this.formBuilder.group({
            id: [this.operator.id],
            rev: [this.operator.rev],
            name: [this.operator.name],
            mobile: [this.operator.mobile],
            address: [this.operator.address],
            email: [this.operator.email, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].pattern(this.emailValidate)])],
            sex: [this.operator.sex],
            otp: [this.operator.otp],
            position: [this.operator.position],
            departments: [this.operator.departments],
            username: [this.operator.username],
            password: [this.operator.password],
            post: [this.operator.post],
            woalert: [this.operator.woalert]
        });
    };
    AddoperatorPage.prototype.ionViewDidEnter = function () {
        this.operatorForm = this.formBuilder.group({
            id: [this.operator.id],
            rev: [this.operator.rev],
            name: [this.operator.name],
            mobile: [this.operator.mobile],
            otp: [this.operator.otp],
            address: [this.operator.address],
            email: [this.operator.email, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].pattern(this.emailValidate)])],
            sex: [this.operator.sex],
            position: [this.operator.position],
            departments: [this.operator.departments],
            username: [this.operator.username],
            password: [this.operator.password],
            post: [this.operator.post],
            woalert: [this.operator.woalert]
        });
    };
    AddoperatorPage.prototype.submit = function () {
        var _this = this;
        if (this.add) {
            this.db.saveSupervisor(this.operator).then(function (res) {
                _this.viewCtrl.dismiss(res);
            });
        }
        else {
            //this.operator.workorders = [];
            //this.operator.woalert = [];
            this.db.updateSupervisor(this.operator).then(function (result) {
                _this.viewCtrl.dismiss();
            });
        }
    };
    AddoperatorPage.prototype.checkUser = function () {
        var _this = this;
        if (this.add) {
            this.disabled = false;
            this.errorMessage = "";
            this.db.getSupervisors().then(function (data) {
                data.forEach(function (item) {
                    if (_this.operator.username == item.username) {
                        _this.errorMessage = "This User already exists";
                        _this.disabled = true;
                    }
                });
            });
        }
    };
    AddoperatorPage.prototype.checkEmail = function () {
        var _this = this;
        if (this.add) {
            this.disabled = false;
            this.errorMessageUser = "";
            this.db.getSupervisors().then(function (data) {
                data.forEach(function (item) {
                    if (_this.operator.email == item.email) {
                        _this.errorMessageUser = "This email already exists";
                        _this.disabled = true;
                    }
                });
            });
        }
    };
    AddoperatorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-addoperator',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\addoperator\addoperator.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-buttons left>\n      <button color="primary" ion-button (click)="cancel()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title class="title-color">{{title}} Operator</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-primary50" padding>\n  <ion-fab top right edge *ngIf="platform.is(\'cordova\')">\n    <button ion-fab mini margin-left (click)="open()" color="secondary"><ion-icon name="phone-portrait"></ion-icon></button>\n  </ion-fab>\n\n  <form margin-top [formGroup]="operatorForm" (ngSubmit)="submit()">\n    <ion-item>\n      <ion-input placeholder="Full Name" type="text" [(ngModel)]="operator.name" name="name" [formControl]="operatorForm.controls[\'name\']"\n        required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input placeholder="Phone Number" type="text" [(ngModel)]="operator.mobile" name="mobile" [formControl]="operatorForm.controls[\'mobile\']"\n        required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input placeholder="Email" type="email" [(ngModel)]="operator.email" name="email" (ngModelChange)="checkEmail()" [formControl]="operatorForm.controls[\'email\']"\n        required></ion-input>\n        <br>\n      <ion-label color="danger" class="error-size" *ngIf="!operatorForm.controls.email.valid && operatorForm.controls.email.dirty"\n        no-margin>Please enter a valid email.</ion-label>\n        <ion-label color="danger" no-margin>{{errorMessageUser}}</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-input placeholder="Username" type="text" [(ngModel)]="operator.username" name="username" (ngModelChange)="checkUser()" [formControl]="operatorForm.controls[\'username\']"\n        required></ion-input>\n        <ion-label color="danger" no-margin>{{errorMessage}}</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-input placeholder="Position" type="text" [(ngModel)]="operator.position" name="position" [formControl]="operatorForm.controls[\'position\']"\n        required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input placeholder="Address" type="text" [(ngModel)]="operator.address" name="address" [formControl]="operatorForm.controls[\'address\']"\n        required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Department</ion-label>\n      <ion-select [(ngModel)]="operator.departments" name="departments" [formControl]="operatorForm.controls[\'departments\']">\n        <ion-option *ngFor="let department of departments" [value]="department">{{department}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-input placeholder="Password" [(ngModel)]="operator.password" type="password" name="password" [formControl]="operatorForm.controls[\'password\']"\n        required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Sex</ion-label>\n      <ion-select [(ngModel)]="operator.sex" name="sex" [formControl]="operatorForm.controls[\'sex\']">\n        <ion-option value="Male">Male</ion-option>\n        <ion-option value="Female">Female</ion-option>\n      </ion-select>\n    </ion-item>\n    <button ion-button type="submit" block [disabled]=\'operatorForm.invalid || disabled\'>Submit</button>\n  </form>\n</ion-content>'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\addoperator\addoperator.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__pouch_service_pouch_service__["a" /* PouchService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */]])
    ], AddoperatorPage);
    return AddoperatorPage;
}());

//# sourceMappingURL=addoperator.js.map

/***/ })

});
//# sourceMappingURL=40.js.map