webpackJsonp([37],{

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddworkerschedulePageModule", function() { return AddworkerschedulePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addworkerschedule__ = __webpack_require__(836);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_auto_complete__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_auto_complete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_auto_complete__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AddworkerschedulePageModule = /** @class */ (function () {
    function AddworkerschedulePageModule() {
    }
    AddworkerschedulePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__addworkerschedule__["a" /* AddworkerschedulePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ng2_auto_complete__["Ng2AutoCompleteModule"],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__addworkerschedule__["a" /* AddworkerschedulePage */]),
            ],
        })
    ], AddworkerschedulePageModule);
    return AddworkerschedulePageModule;
}());

//# sourceMappingURL=addworkerschedule.module.js.map

/***/ }),

/***/ 836:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddworkerschedulePage; });
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
 * Generated class for the AddworkerschedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddworkerschedulePage = /** @class */ (function () {
    function AddworkerschedulePage(navCtrl, navParams, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.add = false;
        this.title = 'Edit';
        this.search = false;
        this.shifts = ["Day", "Night"];
        this.departments = ["Process Operations", "HSE", "Instrument", "Mechanical", "Electrical"];
        if (this.navParams.get('type') == 'Add') {
            this.add = true;
            this.title = 'Add';
            this.workerSchedules = {
                /*  id: Math.round((new Date()).getTime()).toString(),
                 rev: '', */
                name: '',
                date: '2018-11-20',
                typeofshift: 'Night',
                department: 'Process Operations'
            };
        }
        else {
            this.workerSchedules = this.navParams.get('workschedule');
        }
    }
    AddworkerschedulePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad AddworkerschedulePage');
        this.workerSchedulesArray = [];
        this.workerSchedules = [{ name: "Biodun Lawal", username: "bio101", sex: "Male", email: "lawal@gmail.com", address: "No 8, east circular road, benin city", position: "Supervisor Engineer", mobile: "08023467585", department: "Electrical" },
            { name: "Kate Omotosho", username: "katie", email: "kate@gmail.com", sex: "Female", address: "No 18, siluko road, benin city", position: "Junior Engineer", mobile: "08023467566", department: "Mechanical" }, { name: "Gabriel Nehikhare", username: "gaby", email: "gabriel@gmail.com", sex: "Male", address: "No 7, Ihama road, benin city", position: "Supervisor Engineer", mobile: "08023467455", department: "Process Operations" },
            { name: "Esosa Igho", username: "sosa", email: "igho@gmail.com", address: "No 7, sapele road, benin city", position: "Engineer", mobile: "08023467545", department: "Instrument" }
        ];
        this.workerSchedules.map(function (res) {
            _this.workerSchedulesArray.push(res.name);
        });
    };
    AddworkerschedulePage.prototype.selectWorkerSchedules = function (newVal) {
        this.workerSchedules.name = newVal;
    };
    AddworkerschedulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-addworkerschedule',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\addworkerschedule\addworkerschedule.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-buttons left>\n      <button color="primary" ion-button (click)="cancel()">\n          <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title class="title-color">{{title}} Worker\'s Schedule</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-primary50" padding>\n  <ion-fab top right edge *ngIf="platform.is(\'cordova\')">\n    <button ion-fab mini margin-left (click)="open()" color="secondary"><ion-icon name="phone-portrait"></ion-icon></button>\n  </ion-fab>\n\n  <form margin-top (ngSubmit)="submit()">\n    <ion-item>\n      <ion-input ng2-auto-complete [source]="workerSchedulesArray" (valueChanged)="selectWorkerSchedules($event)" placeholder="Name" type="text" [(ngModel)]="workerSchedules.name" name="name"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-icon item-right name="md-calendar"></ion-icon>\n        <ion-input placeholder="Date" type="date" [(ngModel)]="workerSchedules.date" name="date"></ion-input>\n      </ion-item>\n   <ion-item>\n        <ion-label>Department</ion-label>\n        <ion-select [(ngModel)]="workerSchedules.department" name="department">\n          <ion-option *ngFor="let department of departments" [value]="department">{{department}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Shift</ion-label>\n        <ion-select [(ngModel)]="workerSchedules.typeofshift" name="typeofshift">\n          <ion-option *ngFor="let typeofshift of shifts" [value]="typeofshift">{{typeofshift}}</ion-option>\n        </ion-select>\n      </ion-item>\n    <button ion-button type="submit" block>Submit</button>\n  </form>\n</ion-content>'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\addworkerschedule\addworkerschedule.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */]])
    ], AddworkerschedulePage);
    return AddworkerschedulePage;
}());

//# sourceMappingURL=addworkerschedule.js.map

/***/ })

});
//# sourceMappingURL=37.js.map