webpackJsonp([43],{

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddmanagerPageModule", function() { return AddmanagerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addmanager__ = __webpack_require__(830);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddmanagerPageModule = /** @class */ (function () {
    function AddmanagerPageModule() {
    }
    AddmanagerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__addmanager__["a" /* AddmanagerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__addmanager__["a" /* AddmanagerPage */]),
            ]
        })
    ], AddmanagerPageModule);
    return AddmanagerPageModule;
}());

//# sourceMappingURL=addmanager.module.js.map

/***/ }),

/***/ 830:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddmanagerPage; });
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
 * Generated class for the AddmanagerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddmanagerPage = /** @class */ (function () {
    function AddmanagerPage(navCtrl, formBuilder, viewCtrl, navParams, db, platform) {
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
        this.managerForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroup"]({
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
            password: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]()
        });
        this.departments = ["Process Operations", "HSE", "Instrument", "Mechanical", "Electrical"];
        if (this.navParams.get('type') == 'Add') {
            this.add = true;
            this.title = 'Add';
            this.manager = {
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
                password: '',
                otp: '',
                post: 'Manager',
                workpermits: [],
                workorders: [],
                woalert: [],
                faultregistrys: [],
                dailyreports: []
            };
        }
        else {
            this.manager = this.navParams.get('manager');
        }
    }
    AddmanagerPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    AddmanagerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddmanagerPage');
        this.managerForm = this.formBuilder.group({
            id: [this.manager.id],
            rev: [this.manager.rev],
            name: [this.manager.name],
            mobile: [this.manager.mobile],
            address: [this.manager.address],
            email: [this.manager.email, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].pattern(this.emailValidate)])],
            sex: [this.manager.sex],
            position: [this.manager.position],
            otp: [this.manager.otp],
            departments: [this.manager.departments],
            username: [this.manager.username],
            password: [this.manager.password],
            post: [this.manager.post],
            woalert: [this.manager.woalert]
        });
    };
    AddmanagerPage.prototype.ionViewDidEnter = function () {
        this.managerForm = this.formBuilder.group({
            id: [this.manager.id],
            rev: [this.manager.rev],
            name: [this.manager.name],
            mobile: [this.manager.mobile],
            address: [this.manager.address],
            email: [this.manager.email, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].pattern(this.emailValidate)])],
            sex: [this.manager.sex],
            otp: [this.manager.otp],
            position: [this.manager.position],
            departments: [this.manager.departments],
            username: [this.manager.username],
            password: [this.manager.password],
            post: [this.manager.post],
            woalert: [this.manager.woalert]
        });
    };
    AddmanagerPage.prototype.submit = function () {
        var _this = this;
        if (this.add) {
            this.db.saveSupervisor(this.manager).then(function (res) {
                _this.viewCtrl.dismiss(res);
            });
        }
        else {
            //this.manager.workorders = [];
            //this.manager.woalert = [];
            this.db.updateSupervisor(this.manager).then(function (result) {
                _this.viewCtrl.dismiss();
            });
        }
    };
    AddmanagerPage.prototype.checkUser = function () {
        var _this = this;
        if (this.add) {
            this.disabled = false;
            this.errorMessage = "";
            this.db.getSupervisors().then(function (data) {
                data.forEach(function (item) {
                    if (_this.manager.username == item.username) {
                        _this.errorMessage = "This User already exists";
                        _this.disabled = true;
                    }
                });
            });
        }
    };
    AddmanagerPage.prototype.checkEmail = function () {
        var _this = this;
        if (this.add) {
            this.disabled = false;
            this.errorMessageUser = "";
            this.db.getSupervisors().then(function (data) {
                data.forEach(function (item) {
                    if (_this.manager.email == item.email) {
                        _this.errorMessageUser = "This email already exists";
                        _this.disabled = true;
                    }
                });
            });
        }
    };
    AddmanagerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-addmanager',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\addmanager\addmanager.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-buttons left>\n      <button color="primary" ion-button (click)="cancel()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title class="title-color">{{title}} Manager</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-primary50" padding>\n  <ion-fab top right edge *ngIf="platform.is(\'cordova\')">\n    <button ion-fab mini margin-left (click)="open()" color="secondary"><ion-icon name="phone-portrait"></ion-icon></button>\n  </ion-fab>\n\n  <form margin-top [formGroup]="managerForm" (ngSubmit)="submit()">\n    <ion-item>\n      <ion-input placeholder="Full Name" type="text" [(ngModel)]="manager.name" name="name" [formControl]="managerForm.controls[\'name\']"\n        required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input placeholder="Phone Number" type="text" [(ngModel)]="manager.mobile" name="mobile" [formControl]="managerForm.controls[\'mobile\']"\n        required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input placeholder="Email" type="email" [(ngModel)]="manager.email" name="email" (ngModelChange)="checkEmail()" [formControl]="managerForm.controls[\'email\']"\n        required></ion-input>\n        <br>\n      <ion-label color="danger" class="error-size" *ngIf="!managerForm.controls.email.valid && managerForm.controls.email.dirty"\n        no-margin>Please enter a valid email.</ion-label>\n        <ion-label color="danger" no-margin>{{errorMessageUser}}</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-input placeholder="Username" type="text" [(ngModel)]="manager.username" name="username" (ngModelChange)="checkUser()" [formControl]="managerForm.controls[\'username\']"\n        required></ion-input>\n        <ion-label color="danger" no-margin>{{errorMessage}}</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-input placeholder="Position" type="text" [(ngModel)]="manager.position" name="position" [formControl]="managerForm.controls[\'position\']"\n        required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input placeholder="Address" type="text" [(ngModel)]="manager.address" name="address" [formControl]="managerForm.controls[\'address\']"\n        required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Department</ion-label>\n      <ion-select [(ngModel)]="manager.departments" name="departments" [formControl]="managerForm.controls[\'departments\']">\n        <ion-option *ngFor="let department of departments" [value]="department">{{department}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-input placeholder="Password" [(ngModel)]="manager.password" type="password" name="password" [formControl]="managerForm.controls[\'password\']"\n        required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Sex</ion-label>\n      <ion-select [(ngModel)]="manager.sex" name="sex" [formControl]="managerForm.controls[\'sex\']">\n        <ion-option value="Male">Male</ion-option>\n        <ion-option value="Female">Female</ion-option>\n      </ion-select>\n    </ion-item>\n    <button ion-button type="submit" block [disabled]=\'managerForm.invalid || disabled\'>Submit</button>\n  </form>\n</ion-content>'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\addmanager\addmanager.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__pouch_service_pouch_service__["a" /* PouchService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */]])
    ], AddmanagerPage);
    return AddmanagerPage;
}());

//# sourceMappingURL=addmanager.js.map

/***/ })

});
//# sourceMappingURL=43.js.map