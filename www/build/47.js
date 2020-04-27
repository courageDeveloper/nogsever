webpackJsonp([47],{

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddengineerPageModule", function() { return AddengineerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addengineer__ = __webpack_require__(827);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddengineerPageModule = /** @class */ (function () {
    function AddengineerPageModule() {
    }
    AddengineerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__addengineer__["a" /* AddengineerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__addengineer__["a" /* AddengineerPage */]),
            ]
        })
    ], AddengineerPageModule);
    return AddengineerPageModule;
}());

//# sourceMappingURL=addengineer.module.js.map

/***/ }),

/***/ 827:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddengineerPage; });
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
 * Generated class for the AddengineerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddengineerPage = /** @class */ (function () {
    function AddengineerPage(navCtrl, formBuilder, viewCtrl, navParams, db, platform) {
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
        this.supervisorForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroup"]({
            id: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](),
            rev: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](),
            name: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](),
            mobile: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](),
            address: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](),
            email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](),
            otp: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](),
            sex: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](),
            position: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](),
            departments: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](),
            username: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](),
            password: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]()
        });
        this.departments = ["Process Operations", "HSE", "Instrument", "Mechanical", "Electrical"];
        if (this.navParams.get('type') == 'Add') {
            this.add = true;
            this.title = 'Add';
            this.supervisor = {
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
                post: 'Supervisor',
                workpermits: [],
                workorders: [],
                woalert: [],
                faultregistrys: [],
                dailyreports: []
            };
        }
        else {
            this.supervisor = this.navParams.get('engineer');
        }
    }
    AddengineerPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    AddengineerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddengineerPage');
        this.supervisorForm = this.formBuilder.group({
            id: [this.supervisor.id],
            rev: [this.supervisor.rev],
            name: [this.supervisor.name],
            mobile: [this.supervisor.mobile],
            address: [this.supervisor.address],
            email: [this.supervisor.email, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].pattern(this.emailValidate)])],
            sex: [this.supervisor.sex],
            position: [this.supervisor.position],
            otp: [this.supervisor.otp],
            departments: [this.supervisor.departments],
            username: [this.supervisor.username],
            password: [this.supervisor.password],
            post: [this.supervisor.post],
            woalert: [this.supervisor.woalert]
        });
    };
    AddengineerPage.prototype.ionViewDidEnter = function () {
        this.supervisorForm = this.formBuilder.group({
            id: [this.supervisor.id],
            rev: [this.supervisor.rev],
            name: [this.supervisor.name],
            mobile: [this.supervisor.mobile],
            address: [this.supervisor.address],
            otp: [this.supervisor.otp],
            email: [this.supervisor.email, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].pattern(this.emailValidate)])],
            sex: [this.supervisor.sex],
            position: [this.supervisor.position],
            departments: [this.supervisor.departments],
            username: [this.supervisor.username],
            password: [this.supervisor.password],
            post: [this.supervisor.post],
            woalert: [this.supervisor.woalert]
        });
    };
    AddengineerPage.prototype.submit = function () {
        var _this = this;
        if (this.add) {
            this.db.saveSupervisor(this.supervisor).then(function (res) {
                _this.viewCtrl.dismiss(res);
            });
        }
        else {
            //this.supervisor.workorders = [];
            //this.supervisor.woalert = [];
            this.db.updateSupervisor(this.supervisor).then(function (result) {
                _this.viewCtrl.dismiss();
            });
        }
    };
    AddengineerPage.prototype.checkUser = function () {
        var _this = this;
        if (this.add) {
            this.disabled = false;
            this.errorMessage = "";
            this.db.getSupervisors().then(function (data) {
                data.forEach(function (item) {
                    if (_this.supervisor.username == item.username) {
                        _this.errorMessage = "This User already exists";
                        _this.disabled = true;
                    }
                });
            });
        }
    };
    AddengineerPage.prototype.checkEmail = function () {
        var _this = this;
        if (this.add) {
            this.disabled = false;
            this.errorMessageUser = "";
            this.db.getSupervisors().then(function (data) {
                data.forEach(function (item) {
                    if (_this.supervisor.email == item.email) {
                        _this.errorMessageUser = "This email already exists";
                        _this.disabled = true;
                    }
                });
            });
        }
    };
    AddengineerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-addengineer',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\addengineer\addengineer.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-buttons left>\n      <button color="primary" ion-button (click)="cancel()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title class="title-color">{{title}} Supervisor</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-primary50" padding>\n  <ion-fab top right edge *ngIf="platform.is(\'cordova\')">\n    <button ion-fab mini margin-left (click)="open()" color="secondary"><ion-icon name="phone-portrait"></ion-icon></button>\n  </ion-fab>\n\n  <form margin-top [formGroup]="supervisorForm" (ngSubmit)="submit()">\n    <ion-item>\n      <ion-input placeholder="Full Name" type="text" [(ngModel)]="supervisor.name" name="name" [formControl]="supervisorForm.controls[\'name\']"\n        required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input placeholder="Phone Number" type="text" [(ngModel)]="supervisor.mobile" name="mobile" [formControl]="supervisorForm.controls[\'mobile\']"\n        required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input placeholder="Email" type="email" [(ngModel)]="supervisor.email" name="email" (ngModelChange)="checkEmail()" [formControl]="supervisorForm.controls[\'email\']"\n        required></ion-input>\n        <br>\n      <ion-label color="danger" class="error-size" *ngIf="!supervisorForm.controls.email.valid && supervisorForm.controls.email.dirty"\n        no-margin>Please enter a valid email.</ion-label>\n        <ion-label color="danger" no-margin>{{errorMessageUser}}</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-input placeholder="Username" type="text" [(ngModel)]="supervisor.username" name="username" (ngModelChange)="checkUser()" [formControl]="supervisorForm.controls[\'username\']"\n        required></ion-input>\n        <ion-label color="danger" no-margin>{{errorMessage}}</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-input placeholder="Position" type="text" [(ngModel)]="supervisor.position" name="position" [formControl]="supervisorForm.controls[\'position\']"\n        required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input placeholder="Address" type="text" [(ngModel)]="supervisor.address" name="address" [formControl]="supervisorForm.controls[\'address\']"\n        required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Department</ion-label>\n      <ion-select [(ngModel)]="supervisor.departments" name="departments" [formControl]="supervisorForm.controls[\'departments\']">\n        <ion-option *ngFor="let department of departments" [value]="department">{{department}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-input placeholder="Password" [(ngModel)]="supervisor.password" type="password" name="password" [formControl]="supervisorForm.controls[\'password\']"\n        required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Sex</ion-label>\n      <ion-select [(ngModel)]="supervisor.sex" name="sex" [formControl]="supervisorForm.controls[\'sex\']">\n        <ion-option value="Male">Male</ion-option>\n        <ion-option value="Female">Female</ion-option>\n      </ion-select>\n    </ion-item>\n    <button ion-button type="submit" block [disabled]=\'supervisorForm.invalid || disabled\'>Submit</button>\n  </form>\n</ion-content>'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\addengineer\addengineer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__pouch_service_pouch_service__["a" /* PouchService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */]])
    ], AddengineerPage);
    return AddengineerPage;
}());

//# sourceMappingURL=addengineer.js.map

/***/ })

});
//# sourceMappingURL=47.js.map