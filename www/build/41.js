webpackJsonp([41],{

/***/ 775:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddnewpreventivemaintenancePageModule", function() { return AddnewpreventivemaintenancePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addnewpreventivemaintenance__ = __webpack_require__(856);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_auto_complete__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_auto_complete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_auto_complete__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AddnewpreventivemaintenancePageModule = /** @class */ (function () {
    function AddnewpreventivemaintenancePageModule() {
    }
    AddnewpreventivemaintenancePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__addnewpreventivemaintenance__["a" /* AddnewpreventivemaintenancePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ng2_auto_complete__["Ng2AutoCompleteModule"],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__addnewpreventivemaintenance__["a" /* AddnewpreventivemaintenancePage */]),
            ],
        })
    ], AddnewpreventivemaintenancePageModule);
    return AddnewpreventivemaintenancePageModule;
}());

//# sourceMappingURL=addnewpreventivemaintenance.module.js.map

/***/ }),

/***/ 856:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddnewpreventivemaintenancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pouch_service_pouch_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_httpservice__ = __webpack_require__(169);
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
 * Generated class for the AddnewpreventivemaintenancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddnewpreventivemaintenancePage = /** @class */ (function () {
    function AddnewpreventivemaintenancePage(navCtrl, viewCtrl, navParams, platform, httpService, db) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.httpService = httpService;
        this.db = db;
        this.add = false;
        this.addFromequip = false;
        this.title = 'Edit';
        this.search = false;
        this.show = false;
        this.partTrue = false;
        this.catTrue = false;
        this.disabled = false;
        this.tagTrue = false;
        this.radioOther = false;
        this.show = false;
        if (this.navParams.get('type') == 'Add') {
            this.add = true;
            this.title = 'Add';
            this.preventivemaintenance = {
                id: Math.round((new Date()).getTime()).toString(),
                rev: '',
                name: '',
                pmno: '',
                datecreated: new Date(),
                datewo: new Date().toJSON().slice(0, 10).replace(/-/g, '-'),
                tagname: '',
                tagid: '',
                equipmentpartname: '',
                steps: '',
                equipmentpartid: '',
                equipmentcatid: '',
                equipmentcatname: '',
                equipmenttag: '',
                faculty: 'OGPOOC',
                exactlocation: '',
                maintenanceitem: '',
                performedby: '',
                precautions: '',
                priority: 'High',
                responsibility: 'Operator',
                status: false,
                gstatus: false,
                dstatus: false,
                ipaddress: '169.159.98.187',
                department: '',
                description: '',
                itemarray: [],
                beepstatus: false,
                frequencydate: new Date(),
                frequency: 3,
                post: '',
                frequencyspandate: '',
                staff: '',
                staffid: '',
                animateswitch: 'false',
                woid: '',
                pmId: ''
            };
            this.db.getPreventivemaintenances().then(function (data) {
                if (data.length != 0) {
                    _this.preventivemaintenance.pmno = data[0].pmno + 1;
                }
                else {
                    _this.preventivemaintenance.pmno = 1;
                }
            });
        }
        else if (this.navParams.get('type') == 'Equipment') {
            this.title = 'Add';
            this.addFromequip = true;
            this.radioOther = true;
            this.preventivemaintenance = this.navParams.get('preventivemaintenance');
            this.db.getPreventivemaintenances().then(function (data) {
                if (data.length != 0) {
                    _this.preventivemaintenance.pmno = data[0].pmno + 1;
                }
                else {
                    _this.preventivemaintenance.pmno = 1;
                }
            });
        }
        else {
            this.preventivemaintenance = this.navParams.get('preventivemaintenance');
            this.radioOther = true;
            var dateString = new Date(this.preventivemaintenance.datewo).toUTCString();
            dateString = dateString.split(' ').slice(0, 4).join(' ');
            var currentDate = new Date().toUTCString();
            currentDate = currentDate.split(' ').slice(0, 4).join(' ');
        }
    }
    AddnewpreventivemaintenancePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.httpService.getIpAddress().subscribe(function (data) {
            _this.preventivemaintenance.ipaddress = data['ip'];
        });
        this.selectedPriority = this.preventivemaintenance.priority;
        this.selectedResponsibility = this.preventivemaintenance.responsibility;
        this.responsibilities = ["Contractor", "Vendor", "Operator"];
        this.worktypes = ["Preventive Maintenance", "Work Order"];
        this.priorities = ["High", "Medium", "Low"];
        console.log('ionViewDidLoad AddnewpreventivemaintenancePage');
        this.db.getEquipmentcats().then(function (res) {
            _this.equipmentsCatArray = [];
            _this.equipmentsCatArray = res;
            _this.equipmentsTagArray = [];
            _this.equipmentsTagArray = res;
        });
        this.db.getEquipmentparts().then(function (res) {
            _this.equipmentsPartArray = [];
            _this.equipmentsPartArray = res;
            _this.equipmentsPartTagArray = [];
            _this.equipmentsPartTagArray = res;
        });
        this.localStorageItem = JSON.parse(localStorage.getItem('user'));
        this.db.getSupervisor(this.localStorageItem).then(function (item) {
            _this.user = item;
            _this.position = item.post;
            if (_this.position != 'Supervisor') {
                _this.disabled = true;
            }
        });
    };
    AddnewpreventivemaintenancePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.localStorageItem = JSON.parse(localStorage.getItem('user'));
        this.db.getSupervisor(this.localStorageItem).then(function (item) {
            _this.user = item;
            _this.position = item.post;
        });
    };
    AddnewpreventivemaintenancePage.prototype.selectEquipmentsCats = function (newVal) {
        this.equipmentCatObject = newVal;
        if (this.add) {
            this.preventivemaintenance.equipmentcatname = newVal.name;
            this.preventivemaintenance.equipmenttag = newVal.tag;
            this.catTrue = true;
        }
        else {
            this.preventivemaintenance.equipmentcatname = newVal;
            this.catTrue = true;
        }
    };
    AddnewpreventivemaintenancePage.prototype.selectEquipmentsTags = function (newVal) {
        this.equipmentTagObject = newVal;
        if (this.add) {
            this.preventivemaintenance.equipmenttag = newVal.tag;
            this.tagTrue = true;
        }
        else {
            this.preventivemaintenance.equipmenttag = newVal;
            this.tagTrue = true;
        }
    };
    AddnewpreventivemaintenancePage.prototype.selectEquipmentsParts = function (newVal) {
        this.equipmentPartObject = newVal;
        if (this.add) {
            this.preventivemaintenance.equipmentpartname = newVal.name;
            this.preventivemaintenance.tagname = newVal.tag;
            this.partTrue = true;
        }
        else {
            this.preventivemaintenance.equipmentpartname = newVal;
            this.partTrue = true;
        }
    };
    AddnewpreventivemaintenancePage.prototype.selectEquipmentsPartsTags = function (newVal) {
        this.equipmentPartTagObject = newVal;
        if (this.add) {
            this.preventivemaintenance.tagname = newVal.tag;
            this.partTrue = true;
        }
        else {
            this.preventivemaintenance.tagname = newVal;
            this.partTrue = true;
        }
    };
    AddnewpreventivemaintenancePage.prototype.submit = function () {
        var _this = this;
        if (this.add || this.addFromequip) {
            this.preventivemaintenance.department = this.user.departments;
            this.preventivemaintenance.post = this.user.post;
            if (typeof this.equipmentCatObject == 'object') {
                this.preventivemaintenance.equipmentcatid = this.equipmentCatObject.id;
            }
            if (typeof this.equipmentPartObject == 'object') {
                this.preventivemaintenance.equipmentpartid = this.equipmentPartObject.id;
            }
            this.preventivemaintenance.staff = this.user.name;
            this.preventivemaintenance.staffid = this.localStorageItem;
            /* if (this.workorder.worktypes == "Work Order") {
              this.workorder.frequency = null;
            }
            else {*/
            this.preventivemaintenance.datewo = "";
            var someDate = new Date();
            var numberOfHoursToAdd = this.preventivemaintenance.frequency;
            var addedDate = someDate.getHours() + Number(numberOfHoursToAdd);
            this.preventivemaintenance.frequencyspandate = someDate.setHours(addedDate);
            //} 
            this.db.savePreventivemaintenance(this.preventivemaintenance).then(function (res) {
                _this.viewCtrl.dismiss(res);
                //Save Alert in Supervisor
                _this.db.getSupervisors().then(function (supervisors) {
                    _this.filterManager = supervisors.filter(function (data) { return data.post == 'Manager'; });
                    _this.filterHse = supervisors.filter(function (data) { return data.departments == 'HSE'; });
                    _this.filterAreaSupervisor = supervisors.filter(function (data) { return data.post == 'Supervisor' && data.departments == _this.user.departments; });
                    if (_this.preventivemaintenance.responsibility == 'Operator') {
                        _this.filterOperator = supervisors.filter(function (data) { return data.post == 'Operator' && data.departments == _this.user.departments; });
                    }
                    _this.supervisorArray = [];
                    _this.filterManager.forEach(function (item) {
                        item.woalert.push(true);
                        _this.db.updateSupervisor(item);
                        _this.supervisorArray.push(item.email);
                    });
                    _this.filterHse.forEach(function (item) {
                        item.woalert.push(true);
                        _this.db.updateSupervisor(item);
                        _this.supervisorArray.push(item.email);
                    });
                    _this.filterAreaSupervisor.forEach(function (item) {
                        item.woalert.push(true);
                        _this.db.updateSupervisor(item);
                        _this.supervisorArray.push(item.email);
                    });
                    if (_this.preventivemaintenance.responsibility == 'Operator') {
                        _this.filterOperator.forEach(function (item) {
                            item.woalert.push(true);
                            _this.db.updateSupervisor(item);
                            _this.supervisorArray.push(item.email);
                        });
                    }
                    var emailInfo = {
                        name: _this.user.name,
                        department: _this.user.departments,
                        email: _this.supervisorArray,
                        phoneNumber: _this.user.mobile,
                        position: _this.user.position,
                        pmno: res.pmno,
                        description: res.description,
                        location: res.exactlocation,
                        facility: res.faculty,
                        type: 'preventivemaintenance',
                        maintenanceitem: res.maintenanceitem,
                        datecreated: res.datecreated,
                        frequencydate: res.frequencydate,
                        datewo: res.datewo,
                        responsibility: res.responsibility
                    };
                    _this.httpService.sendEmailworkorder(emailInfo).subscribe(function (res) {
                    });
                    //if (this.platform.is('cordova')) {
                    _this.httpService.workpermitNotification(emailInfo).subscribe(function (res) {
                    });
                    //}
                });
                _this.user.workorders.push(res.id);
                _this.db.updateSupervisor(_this.user).then(function (data) {
                });
            });
        }
        else {
            if (typeof this.equipmentCatObject == 'object') {
                this.preventivemaintenance.equipmentcatid = this.equipmentCatObject.id;
                this.preventivemaintenance.equipmentcatname = this.equipmentCatObject.name;
            }
            else {
                this.preventivemaintenance.equipmentcatid = this.preventivemaintenance.equipmentcatid;
                this.preventivemaintenance.equipmentcatname = this.preventivemaintenance.equipmentcatname;
            }
            if (typeof this.equipmentTagObject == 'object') {
                this.preventivemaintenance.equipmentcatid = this.equipmentCatObject.id;
                this.preventivemaintenance.equipmenttag = this.equipmentTagObject.tag;
            }
            else {
                this.preventivemaintenance.equipmentcatid = this.preventivemaintenance.equipmentcatid;
                this.preventivemaintenance.equipmenttag = this.preventivemaintenance.equipmenttag;
            }
            if (typeof this.equipmentPartObject == 'object') {
                this.preventivemaintenance.equipmentpartid = this.equipmentPartObject.id;
                this.preventivemaintenance.equipmentpartname = this.equipmentPartObject.name;
            }
            else {
                this.preventivemaintenance.equipmentpartid = this.preventivemaintenance.equipmentpartid;
                this.preventivemaintenance.equipmentpartname = this.preventivemaintenance.equipmentpartname;
            }
            if (typeof this.equipmentPartTagObject == 'object') {
                this.preventivemaintenance.equipmentpartid = this.equipmentPartTagObject.id;
                this.preventivemaintenance.tagname = this.equipmentPartTagObject.tag;
            }
            else {
                this.preventivemaintenance.equipmentpartid = this.preventivemaintenance.equipmentpartid;
                this.preventivemaintenance.tagname = this.preventivemaintenance.tagname;
            }
            if (this.preventivemaintenance.frequencyspandate != "") {
                var someDate = new Date(this.preventivemaintenance.frequencydate);
                var numberOfHoursToAdd = this.preventivemaintenance.frequency;
                var addedDate = someDate.getHours() + Number(numberOfHoursToAdd);
                this.preventivemaintenance.frequencyspandate = someDate.setHours(addedDate);
            }
            this.db.updatePreventivemaintenance(this.preventivemaintenance).then(function (order) {
                _this.viewCtrl.dismiss(order);
            });
        }
    };
    AddnewpreventivemaintenancePage.prototype.checkPMNO = function () {
        var _this = this;
        this.error = "";
        this.db.getPreventivemaintenances().then(function (data) {
            data.forEach(function (item) {
                if (_this.preventivemaintenance.pmno == item.pmno) {
                    _this.error = "PMNO already exists. Use another!";
                }
                else {
                    _this.error = "";
                }
            });
        });
    };
    AddnewpreventivemaintenancePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    AddnewpreventivemaintenancePage.prototype.radioClick = function (event) {
        this.radioOther = true;
    };
    AddnewpreventivemaintenancePage.prototype.radioClickMnth = function () {
        var monthHours = 30 * 24;
        this.preventivemaintenance.frequency = monthHours;
        this.radioOther = false;
    };
    AddnewpreventivemaintenancePage.prototype.radioClickwek = function () {
        var weekHours = 7 * 24;
        this.preventivemaintenance.frequency = weekHours;
        this.radioOther = false;
    };
    AddnewpreventivemaintenancePage.prototype.radioClickday = function () {
        var dailyHours = 24;
        this.preventivemaintenance.frequency = dailyHours;
        this.radioOther = false;
    };
    AddnewpreventivemaintenancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-addnewpreventivemaintenance',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\addnewpreventivemaintenance\addnewpreventivemaintenance.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-buttons left>\n      <button color="primary" ion-button (click)="cancel()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title class="title-color">{{title}} Preventive Maintenance</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-primary50" padding>\n  <ion-fab top right edge *ngIf="platform.is(\'cordova\')">\n    <button ion-fab mini margin-left (click)="open()" color="secondary"><ion-icon name="phone-portrait"></ion-icon></button>\n  </ion-fab>\n\n  <form margin-top (ngSubmit)="submit()">\n    <fieldset [disabled] = \'disabled\'>\n    <ion-input type="hidden" [(ngModel)]="preventivemaintenance.equipmentcatid" name="equipmentcatid"></ion-input>\n    <ion-input type="hidden" [(ngModel)]="preventivemaintenance.equipmentpartid" name="equipmentpartid"></ion-input>\n    <ion-input type="hidden" [(ngModel)]="preventivemaintenance.tagid" name="tagid"></ion-input>\n    <ion-item>\n      <ion-input placeholder="WO/PM No" type="text" [(ngModel)]="preventivemaintenance.pmno" (ngModelChange)="checkPMNO()" name="pmno"\n        disabled></ion-input>\n      <ion-label color="danger" no-margin>{{error}}</ion-label>\n    </ion-item>\n    <!-- <ion-item>\n      <span>Date Created</span>\n      <ion-icon item-right name="md-calendar"></ion-icon>\n      <ion-input placeholder="Date" type="date" [(ngModel)]="pm.date" name="date"></ion-input>\n    </ion-item> -->\n    <ion-item>\n      <ion-input placeholder="Facility" type="text" [(ngModel)]="preventivemaintenance.faculty" name="faculty" disabled></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input placeholder="Location" type="text" [(ngModel)]="preventivemaintenance.exactlocation" name="exactlocation"></ion-input>\n    </ion-item>\n    <ion-item no-padding>\n      <ion-input ng2-auto-complete [source]="equipmentsCatArray" list-formatter="name" (valueChanged)="selectEquipmentsCats($event)"\n        placeholder="Main Equipment Name" type="text" [(ngModel)]="preventivemaintenance.equipmentcatname" name="equipmentcatname"></ion-input>\n    </ion-item>\n    <ion-item no-padding>\n        <ion-input ng2-auto-complete [source]="equipmentsTagArray" list-formatter="tag" (valueChanged)="selectEquipmentsTags($event)"\n          placeholder="Main Equipment Tag" type="text" [(ngModel)]="preventivemaintenance.equipmentcattag" name="equipmenttag"></ion-input>\n      </ion-item>\n    <ion-item no-padding>\n      <ion-input placeholder="Maintenance Items" type="text" [(ngModel)]="preventivemaintenance.maintenanceitem" name="maintenanceitem"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-textarea placeholder="Description" type="text" [(ngModel)]="preventivemaintenance.description" name="description"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-textarea placeholder="Write steps here!" type="text" [(ngModel)]="preventivemaintenance.steps" name="steps"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-textarea placeholder="Write job safety advice!" type="text" [(ngModel)]="preventivemaintenance.precautions" name="precautions"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label>Priority</ion-label>\n      <ion-select [(ngModel)]="preventivemaintenance.priority" name="priority">\n        <ion-option *ngFor="let priority of priorities" [value]="priority" [selected]="selectedPriority == priority">{{priority}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Responsibility</ion-label>\n      <ion-select [(ngModel)]="preventivemaintenance.responsibility" name="responsibility">\n        <ion-option *ngFor="let responsibility of responsibilities" [value]="responsibility" [selected]="selectedResponsibility == responsibility">{{responsibility}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-list radio-group class="list-color">\n\n       <ion-list-header>\n          Enter Frequency\n        </ion-list-header>\n      \n        <ion-item>\n          <ion-label>Daily</ion-label>\n          <ion-radio value="daily" (click)= "radioClickday()"></ion-radio>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label>Weekly</ion-label>\n          <ion-radio value="weekly" (click)= "radioClickwek()"></ion-radio>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label>Monthly</ion-label>\n          <ion-radio value="monthly" (click)= "radioClickMnth()"></ion-radio>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label>Others</ion-label>\n          <ion-radio value="others" (click)="radioClick($event)"></ion-radio>\n        </ion-item>\n      \n      </ion-list>\n    <ion-item *ngIf="radioOther">\n      <ion-label>Enter Frequency in hours</ion-label>\n      <ion-input  type="number" [(ngModel)]="preventivemaintenance.frequency" name="frequency"></ion-input>\n    </ion-item>\n\n    <p class="danger" *ngIf=!show> Enter the period for reminder </p>\n    <button ion-button type="submit" block [disabled]="!preventivemaintenance.pmno || error">Submit</button>\n    </fieldset>\n  </form>\n</ion-content>'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\addnewpreventivemaintenance\addnewpreventivemaintenance.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__providers_httpservice__["a" /* HttpserviceProvider */], __WEBPACK_IMPORTED_MODULE_2__pouch_service_pouch_service__["a" /* PouchService */]])
    ], AddnewpreventivemaintenancePage);
    return AddnewpreventivemaintenancePage;
}());

//# sourceMappingURL=addnewpreventivemaintenance.js.map

/***/ })

});
//# sourceMappingURL=41.js.map