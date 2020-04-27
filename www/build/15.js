webpackJsonp([15],{

/***/ 783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintworkpermitPageModule", function() { return PrintworkpermitPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__printworkpermit__ = __webpack_require__(864);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_printer__ = __webpack_require__(824);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PrintworkpermitPageModule = /** @class */ (function () {
    function PrintworkpermitPageModule() {
    }
    PrintworkpermitPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__printworkpermit__["a" /* PrintworkpermitPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__printworkpermit__["a" /* PrintworkpermitPage */]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_printer__["a" /* Printer */]
            ]
        })
    ], PrintworkpermitPageModule);
    return PrintworkpermitPageModule;
}());

//# sourceMappingURL=printworkpermit.module.js.map

/***/ }),

/***/ 824:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Printer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(68);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
 * @name Printer
 * @description Prints documents or HTML rendered content
 * @usage
 * ```typescript
 * import { Printer, PrintOptions } from '@ionic-native/printer';
 *
 * constructor(private printer: Printer) { }
 *
 * ...
 *
 * this.printer.isAvailable().then(onSuccess, onError);
 *
 * let options: PrintOptions = {
 *      name: 'MyDocument',
 *      printerId: 'printer007',
 *      duplex: true,
 *      landscape: true,
 *      grayscale: true
 *    };
 *
 * this.printer.print(content, options).then(onSuccess, onError);
 * ```
 * @interfaces
 * PrintOptions
 */
var Printer = (function (_super) {
    __extends(Printer, _super);
    function Printer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Printer_1 = Printer;
    /**
     * Checks whether the device is capable of printing (uses `check()` internally)
     * @returns {Promise<boolean>}
     */
    /**
       * Checks whether the device is capable of printing (uses `check()` internally)
       * @returns {Promise<boolean>}
       */
    Printer.prototype.isAvailable = /**
       * Checks whether the device is capable of printing (uses `check()` internally)
       * @returns {Promise<boolean>}
       */
    function () {
        return this.check()
            .then(function (res) { return Promise.resolve(res.avail); });
    };
    /**
     * Checks if the printer service is available (iOS) or if printer services are installed and enabled (Android).
     * @return {Promise<any>} returns a promise that resolve with an object indicating whether printing is available, and providing the number of printers available
     */
    /**
       * Checks if the printer service is available (iOS) or if printer services are installed and enabled (Android).
       * @return {Promise<any>} returns a promise that resolve with an object indicating whether printing is available, and providing the number of printers available
       */
    Printer.prototype.check = /**
       * Checks if the printer service is available (iOS) or if printer services are installed and enabled (Android).
       * @return {Promise<any>} returns a promise that resolve with an object indicating whether printing is available, and providing the number of printers available
       */
    function () {
        return new Promise(function (resolve) {
            Printer_1.getPlugin()
                .check(function (avail, count) {
                resolve({ avail: avail, count: count });
            });
        });
    };
    /**
     * Displays a system interface allowing the user to select an available printer. To speak with a printer directly you need to know the network address by picking them before via `printer.pick`.
     * @returns {Promise<any>}
     */
    /**
       * Displays a system interface allowing the user to select an available printer. To speak with a printer directly you need to know the network address by picking them before via `printer.pick`.
       * @returns {Promise<any>}
       */
    Printer.prototype.pick = /**
       * Displays a system interface allowing the user to select an available printer. To speak with a printer directly you need to know the network address by picking them before via `printer.pick`.
       * @returns {Promise<any>}
       */
    function () { return; };
    /**
     * Sends content to the printer.
     * @param content {string | HTMLElement} The content to print. Can be a URL or an HTML string. If a HTML DOM Object is provided, its innerHtml property value will be used.
     * @param options {PrintOptions} optional. The options to pass to the printer
     * @returns {Promise<any>}
     */
    /**
       * Sends content to the printer.
       * @param content {string | HTMLElement} The content to print. Can be a URL or an HTML string. If a HTML DOM Object is provided, its innerHtml property value will be used.
       * @param options {PrintOptions} optional. The options to pass to the printer
       * @returns {Promise<any>}
       */
    Printer.prototype.print = /**
       * Sends content to the printer.
       * @param content {string | HTMLElement} The content to print. Can be a URL or an HTML string. If a HTML DOM Object is provided, its innerHtml property value will be used.
       * @param options {PrintOptions} optional. The options to pass to the printer
       * @returns {Promise<any>}
       */
    function (content, options) { return; };
    Printer.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Printer.prototype, "check", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Printer.prototype, "pick", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            successIndex: 2,
            errorIndex: 4
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], Printer.prototype, "print", null);
    /**
     * @name Printer
     * @description Prints documents or HTML rendered content
     * @usage
     * ```typescript
     * import { Printer, PrintOptions } from '@ionic-native/printer';
     *
     * constructor(private printer: Printer) { }
     *
     * ...
     *
     * this.printer.isAvailable().then(onSuccess, onError);
     *
     * let options: PrintOptions = {
     *      name: 'MyDocument',
     *      printerId: 'printer007',
     *      duplex: true,
     *      landscape: true,
     *      grayscale: true
     *    };
     *
     * this.printer.print(content, options).then(onSuccess, onError);
     * ```
     * @interfaces
     * PrintOptions
     */
    Printer = Printer_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* Plugin */])({
            pluginName: 'Printer',
            plugin: 'cordova-plugin-printer',
            pluginRef: 'cordova.plugins.printer',
            repo: 'https://github.com/katzer/cordova-plugin-printer',
            platforms: ['Android', 'iOS', 'Windows']
        })
    ], Printer);
    return Printer;
    var Printer_1;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 864:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrintworkpermitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pouch_service_pouch_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_printer__ = __webpack_require__(824);
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
 * Generated class for the PrintworkpermitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PrintworkpermitPage = /** @class */ (function () {
    function PrintworkpermitPage(platform, navCtrl, viewCtrl, printer, httpService, alertCtrl, db, navParams) {
        var _this = this;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.printer = printer;
        this.httpService = httpService;
        this.alertCtrl = alertCtrl;
        this.db = db;
        this.navParams = navParams;
        this.filteredWorkpermit = [];
        this.workpermits = [];
        this.show = false;
        this.disabled = false;
        this.disabled2 = false;
        this.options = {
            name: 'Work Permit',
            //printerId: 'printer007',
            duplex: true,
            landscape: true,
            grayscale: true
        };
        this.workpermit = this.navParams.get('workpermit');
        var date1 = new Date(this.workpermit.startdate);
        var date2 = new Date(this.workpermit.enddate);
        var timeDiff = Math.abs(date2.getTime() - date1.getTime());
        this.duration = Math.ceil(timeDiff / (1000 * 3600 * 24));
        //FOR MANAGER
        if (this.workpermit.managerid != "") {
            this.db.getSupervisor(this.workpermit.managerid).then(function (manager) {
                _this.managerName = manager.name;
            });
            if (this.workpermit.managerdisapprove == true) {
                this.mastatus = "Disapproved";
            }
            else {
                this.mastatus = "Approved";
            }
        }
        //END MANAGER
        //FOR HSE
        if (this.workpermit.hseid != "") {
            this.db.getSupervisor(this.workpermit.hseid).then(function (hse) {
                _this.hseName = hse.name;
            });
            if (this.workpermit.hsedisapprove == true) {
                this.hseastatus = "Disapproved";
            }
            else {
                this.hseastatus = "Approved";
            }
        }
        //END HSE
        //FOR SUPERVISOR
        if (this.workpermit.areasupervisorid != "") {
            this.db.getSupervisor(this.workpermit.areasupervisorid).then(function (supervisor) {
                _this.supervisorName = supervisor.name;
            });
            if (this.workpermit.areasupervisordisapprove == true) {
                this.supervisorastatus = "Disapproved";
            }
            else {
                this.supervisorastatus = "Approved";
            }
        }
        //END SUPERVISOR
    }
    PrintworkpermitPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.localStorageItem = JSON.parse(localStorage.getItem('user'));
        console.log('ionViewDidLoad PrintworkpermitPage');
        this.db.getSupervisor(this.localStorageItem).then(function (item) {
            _this.user = item;
            _this.position = item.post;
            if (_this.position == 'Operator' || _this.position == 'Admin') {
                _this.show = true;
            }
        });
        this._loadWorkpermits();
    };
    PrintworkpermitPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.localStorageItem = JSON.parse(localStorage.getItem('user'));
        this.db.getSupervisor(this.localStorageItem).then(function (item) {
            _this.user = item;
            _this.position = item.post;
            if (_this.position == 'Operator' || _this.position == 'Admin') {
                _this.show = true;
            }
        });
        this._loadWorkpermits();
        if (this.platform.is('cordova')) {
            this.printMobile();
        }
        else {
            this.printPermit();
        }
    };
    PrintworkpermitPage.prototype._loadWorkpermits = function () {
        this.workpermit = this.navParams.get('workpermit');
    };
    PrintworkpermitPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    PrintworkpermitPage.prototype.newWorkPermit = function () {
        this.navCtrl.push('WorkpermitPage', { type: 'Add' });
    };
    PrintworkpermitPage.prototype.openWorkpermit = function (workpermit) {
        this.navCtrl.push('WorkpermitPage', { type: 'Edit', workpermit: workpermit });
    };
    PrintworkpermitPage.prototype.filterWorkpermits = function ($event) {
        var value = $event.target.value ? $event.target.value.toLowerCase() : '';
        this.filteredWorkpermit = [];
        for (var _i = 0, _a = this.workpermits; _i < _a.length; _i++) {
            var workpermit = _a[_i];
            if (workpermit.ptwno.toLowerCase().indexOf(value) !== -1) {
                this.filteredWorkpermit.push(workpermit);
            }
        }
    };
    PrintworkpermitPage.prototype.deleteWorkpermit = function (workpermit) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Delete Workpermit',
            message: 'Are you sure you want to delete workpermit: ' + workpermit.ptwno,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Confirm',
                    handler: function () {
                        _this.db.deleteWorkpermit(workpermit)
                            .then(function (success) {
                            _this._loadWorkpermits();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    PrintworkpermitPage.prototype.approve = function (workpermit) {
        var _this = this;
        if (this.user.post == 'Supervisor' && this.user.departments != 'HSE') {
            workpermit.areasupervisorid = this.user.id;
            workpermit.areasupervisordisapprove = false;
            workpermit.sastatus = true;
            workpermit.areasupervisordate = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
            this.db.updateWorkpermit(workpermit).then(function (item) {
                if (_this.user.id == item.areasupervisorid) {
                    item['disabled'] = true;
                    item['disabled2'] = false;
                }
                _this.db.getSupervisor(item.permitholderid).then(function (res) {
                    var emailInfo = {
                        name: _this.user.name,
                        department: _this.user.departments,
                        email: res.email,
                        phoneNumber: _this.user.mobile,
                        position: _this.user.position,
                        ptwno: item.ptwno,
                        description: item.description,
                        location: item.exactlocation,
                        facility: item.faculty,
                        type: 'approve'
                    };
                    _this.httpService.sendEmail(emailInfo).subscribe(function (res) {
                    });
                });
            });
        }
        else if (this.user.post == 'Manager') {
            workpermit.managerid = this.user.id;
            workpermit.managerdisapprove = false;
            workpermit.mastatus = true;
            workpermit.managerdate = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
            this.db.updateWorkpermit(workpermit).then(function (item) {
                if (_this.user.id == item.managerid) {
                    item['disabled'] = true;
                    item['disabled2'] = false;
                }
                _this.db.getSupervisor(item.permitholderid).then(function (res) {
                    var emailInfo = {
                        name: _this.user.name,
                        department: _this.user.departments,
                        email: res.email,
                        phoneNumber: _this.user.mobile,
                        position: _this.user.position,
                        ptwno: item.ptwno,
                        description: item.description,
                        location: item.exactlocation,
                        facility: item.faculty,
                        type: 'approve'
                    };
                    _this.httpService.sendEmail(emailInfo).subscribe(function (res) {
                    });
                });
            });
        }
        else if (this.user.post == 'Supervisor' && this.user.departments == 'HSE') {
            workpermit.hseid = this.user.id;
            workpermit.hsedisapprove = false;
            workpermit.hastatus = true;
            workpermit.hsedate = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
            this.db.updateWorkpermit(workpermit).then(function (item) {
                if (_this.user.id == item.hseid) {
                    item['disabled'] = true;
                    item['disabled2'] = false;
                }
                _this.db.getSupervisor(item.permitholderid).then(function (res) {
                    var emailInfo = {
                        name: _this.user.name,
                        department: _this.user.departments,
                        email: res.email,
                        phoneNumber: _this.user.mobile,
                        position: _this.user.position,
                        ptwno: item.ptwno,
                        description: item.description,
                        location: item.exactlocation,
                        facility: item.faculty,
                        type: 'approve'
                    };
                    _this.httpService.sendEmail(emailInfo).subscribe(function (res) {
                    });
                });
            });
        }
    };
    PrintworkpermitPage.prototype.disapprove = function (workpermit) {
        var _this = this;
        if (this.user.post == 'Supervisor' && this.user.departments != 'HSE') {
            workpermit.areasupervisorid = this.user.id;
            workpermit.areasupervisordisapprove = true;
            workpermit.sastatus = true;
            workpermit.areasupervisordate = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
            this.db.updateWorkpermit(workpermit).then(function (item) {
                if (_this.user.id == item.areasupervisorid) {
                    item['disabled'] = false;
                    item['disabled2'] = true;
                }
                _this.db.getSupervisor(item.permitholderid).then(function (res) {
                    var emailInfo = {
                        name: _this.user.name,
                        department: _this.user.departments,
                        email: res.email,
                        phoneNumber: _this.user.mobile,
                        position: _this.user.position,
                        ptwno: item.ptwno,
                        description: item.description,
                        location: item.exactlocation,
                        facility: item.faculty,
                        type: 'disapprove'
                    };
                    _this.httpService.sendEmail(emailInfo).subscribe(function (res) {
                    });
                });
            });
        }
        else if (this.user.post == 'Manager') {
            workpermit.managerid = this.user.id;
            workpermit.managerdisapprove = true;
            workpermit.mastatus = true;
            workpermit.managerdate = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
            this.db.updateWorkpermit(workpermit).then(function (item) {
                if (_this.user.id == item.managerid) {
                    item['disabled'] = false;
                    item['disabled2'] = true;
                }
                _this.db.getSupervisor(item.permitholderid).then(function (res) {
                    var emailInfo = {
                        name: _this.user.name,
                        department: _this.user.departments,
                        email: res.email,
                        phoneNumber: _this.user.mobile,
                        position: _this.user.position,
                        ptwno: item.ptwno,
                        description: item.description,
                        location: item.exactlocation,
                        facility: item.faculty,
                        type: 'disapprove'
                    };
                    _this.httpService.sendEmail(emailInfo).subscribe(function (res) {
                    });
                });
            });
        }
        else if (this.user.post == 'Supervisor' && this.user.departments == 'HSE') {
            workpermit.hseid = this.user.id;
            workpermit.hsedisapprove = true;
            workpermit.hastatus = true;
            workpermit.hsedate = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
            this.db.updateWorkpermit(workpermit).then(function (item) {
                if (_this.user.id == item.hseid) {
                    item['disabled'] = false;
                    item['disabled2'] = true;
                }
                _this.db.getSupervisor(item.permitholderid).then(function (res) {
                    var emailInfo = {
                        name: _this.user.name,
                        department: _this.user.departments,
                        email: res.email,
                        phoneNumber: _this.user.mobile,
                        position: _this.user.position,
                        ptwno: item.ptwno,
                        description: item.description,
                        location: item.exactlocation,
                        facility: item.faculty,
                        type: 'disapprove'
                    };
                    _this.httpService.sendEmail(emailInfo).subscribe(function (res) {
                    });
                });
            });
        }
    };
    PrintworkpermitPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    PrintworkpermitPage.prototype.printPermit = function () {
        var win;
        win = window;
        var printContent = document.getElementById('printArea').innerHTML;
        var printWindow = win.open('', '_blank', 'top=0,left=0,height=auto,width=auto');
        printWindow.document.open();
        printWindow.document.write("<html><head><title>Work Permit ", "</title><style>\n       \n    table {\n      border-collapse: collapse;\n    }\n    \n    table, td, th {\n      border: 1px solid black;\n    }\n\n    .print-margin{\n       margin-top: 5px;\n    }\n\n    .txt-align{\n      text-align: center;\n      max-width: 60%;\n  }\n    .print-td{\n      width: 40%;\n    }\n\n    .print-orient{\n      font-size: 0.5rem;\n     \n    }\n    .logo-print{\n      width:291px;\n      height:109px;\n      display: list-item;\n      list-style-image: url(../assets/images/NOG-LOGO.jpg);\n      list-style-position: inside;\n    }\n\n           </style></head><body></body></html>");
        printWindow.document.write(printContent);
        printWindow.document.close();
        printWindow.print();
    };
    PrintworkpermitPage.prototype.printMobile = function () {
        var _this = this;
        this.printer.isAvailable().then(function (success) {
            _this.printer.print(document.getElementById('printArea').innerHTML, _this.options).then();
        }, function (error) {
            console.log('printer not available');
        });
    };
    PrintworkpermitPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-printworkpermit',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\printworkpermit\printworkpermit.html"*/'<ion-header>\n\n  <ion-navbar color="secondary">\n\n    <ion-buttons right>\n\n      <button color="primary" ion-button (click)="cancel()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title class="title-color">Print Work Permit</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div style="overflow-x:auto">\n\n    <div id="printArea">\n\n      <div *ngFor="let workpermit of workpermit; let i = index">\n\n        <ion-row class="txt-align">\n\n          <ion-col>\n\n            <img class="printed-div logo-print" src="assets/images/NOG-LOGO.jpg" width="250px" />\n\n          </ion-col>\n\n          <ion-col class="txt-align">\n\n            <h1><b> Network Oil & Gas Limited </b></h1>\n\n            <h2 color="danger" style="color:#f53d3d; text-align: center">Permit to Work</h2>\n\n          </ion-col>\n\n          <ion-col>\n\n            PTWNO: {{workpermit.ptwno}}\n\n          </ion-col>\n\n        </ion-row>\n\n        <table>\n\n          <tr class="border-line">\n\n            <td class="border-line td1">\n\n              <ion-row align-items-stretch>\n\n                <ion-col> <strong class="txt-orient txt-size print-orient"> SECTION 1 TO BE COMPLETED BY THE PERMIT HOLDER\n\n                    </strong> </ion-col>\n\n              </ion-row>\n\n            </td>\n\n            <td class="print-td">\n\n              <div>\n\n\n\n                <ion-row>\n\n                  <ion-col> <b>Date: </b></ion-col>\n\n                </ion-row>\n\n                <ion-row>\n\n                  <div class="print-margin">\n\n                    <ion-col><b> Facility/installation: </b>{{workpermit.faculty}}</ion-col>\n\n                  </div>\n\n                  <div class="print-margin">\n\n                    <ion-col align-self-center><b> Exact Location: </b> {{workpermit.exactlocation}} </ion-col>\n\n                  </div>\n\n                </ion-row>\n\n                <ion-row>\n\n                  <div class="print-margin">\n\n                    <ion-col> <b>Description of Work: </b> {{workpermit.description}} </ion-col>\n\n                  </div>\n\n                </ion-row>\n\n                <ion-row>\n\n                  <div class="print-margin">\n\n                    <ion-col> <b>Equipments/Tools/Materials to be used: </b> {{workpermit.equipmentpartname}} </ion-col>\n\n                  </div>\n\n                </ion-row>\n\n                <ion-row>\n\n                  <div class="print-margin">\n\n                    <ion-col><b> Start Date/Time: </b>{{workpermit.startdate}}</ion-col>\n\n                  </div>\n\n                  <div class="print-margin">\n\n                    <ion-col align-self-center><b> Duration:</b> {{duration}} days</ion-col>\n\n                  </div>\n\n                  <div class="print-margin">\n\n                    <ion-col align-self-center><b> No of Workers: </b> {{workpermit.noofworkers}} </ion-col>\n\n                  </div>\n\n                </ion-row>\n\n              </div>\n\n            </td>\n\n          </tr>\n\n          <tr class="border-line">\n\n            <td class="border-line">\n\n              <ion-row align-items-stretch>\n\n                <div class="print-margin">\n\n                  <ion-col> <strong class="txt-orient txt-size print-align print-orient"> SECTION 2 TO BE COMPLETED BY THE AUTHORISED\n\n                      PERSON AND THE AREA AUTHORITY SITE SUPERVISOR </strong> </ion-col>\n\n                </div>\n\n              </ion-row>\n\n            </td>\n\n            <td class="td-3 print-td">\n\n              <div class="align-3">\n\n                <ion-row>\n\n                  <div class="print-margin">\n\n                    <ion-col>\n\n                      <b>SAFETY PRECAUTIONS TO BE TAKEN: </b>\n\n                    </ion-col>\n\n                  </div>\n\n                </ion-row>\n\n                <ion-row>\n\n                  <div class="print-margin">\n\n                    <ion-col>\n\n                      WORK PLACE\n\n                      <ol>\n\n                        <li>Gas Test</li>\n\n                        <li>Warning Signs</li>\n\n                        <li>Safety Notice</li>\n\n                        <li>Temporary Demarcation</li>\n\n                        <li>Temporary Road Closure</li>\n\n                        <li>Additional Lighting</li>\n\n                        <li>Work Platform/Ladder</li>\n\n                      </ol>\n\n                    </ion-col>\n\n                  </div>\n\n                  <ion-col align-self-center>\n\n                    PERSONAL\n\n                    <ol>\n\n                      <li>Safety Helmet</li>\n\n                      <li>Safety Shoes</li>\n\n                      <li>Safety Notice</li>\n\n                      <li>Safety Googles</li>\n\n                      <li>Protective Apron</li>\n\n                      <li>Nose Mask</li>\n\n                      <li>Hearing Protection</li>\n\n                      <li>Breathing Apparatus</li>\n\n                      <li>Dotted Gloves</li>\n\n                      <li>Welding Glooves</li>\n\n                      <li>Safety Harness</li>\n\n                    </ol>\n\n                  </ion-col>\n\n                </ion-row>\n\n                <ion-row>\n\n                  <div class="print-margin">\n\n                    <ion-col> <b>Additional Precautions: </b> {{workpermit.precautions}} </ion-col>\n\n                  </div>\n\n                </ion-row>\n\n              </div>\n\n            </td>\n\n            <td class="border-line td-4">\n\n              <ion-row>\n\n                <div class="print-margin">\n\n                  <ion-col> <strong class="txt-orient txt-size print-orient">AREA AUTHORITY</strong> </ion-col>\n\n                </div>\n\n              </ion-row>\n\n            </td>\n\n            <td class="border-line">\n\n              <div class="align-4">\n\n                <ion-row>\n\n                  <div class="print-margin">\n\n                    <ion-col> <strong>SECTION 3</strong> </ion-col>\n\n                  </div>\n\n                </ion-row>\n\n                <ion-row>\n\n                  <div class="print-margin">\n\n                    <ion-col>I authorise that work may be carried out Provided the <br> stated Precautions and preparations\n\n                      are observed and clearance given by the Area Authority Site Supervisor.\n\n                    </ion-col>\n\n                  </div>\n\n                </ion-row>\n\n                <ion-row>\n\n                  <div class="print-margin">\n\n                    <ion-col>\n\n                      <b>Name: {{managerName}}</b>\n\n                    </ion-col>\n\n                  </div>\n\n                </ion-row>\n\n                <ion-row>\n\n                  <div class="print-margin">\n\n                    <ion-col>\n\n                      <b>Date: {{workpermit.managerdate}}</b>\n\n                    </ion-col>\n\n                  </div>\n\n                </ion-row>\n\n                <ion-row>\n\n                  <div class="print-margin">\n\n                    <ion-col>\n\n                      <b>Status: {{mastatus}}</b>\n\n                    </ion-col>\n\n                  </div>\n\n                </ion-row>\n\n              </div>\n\n            </td>\n\n          </tr>\n\n          <tr class="border-line">\n\n            <td class="border-line td1">\n\n              <ion-row align-items-stretch>\n\n                <ion-col> <strong class="txt-orient txt-size print-orient"> SECTION 4 TO BE COMPLETED BY AREA AUTH SITE SUPERVISOR\n\n                    </strong> </ion-col>\n\n              </ion-row>\n\n            </td>\n\n            <td class="print-td">\n\n              <div class="align-3">\n\n                <ion-row>\n\n                  <ion-col> <b>VALIDITY AND RENEWAL OF PERMIT</b></ion-col>\n\n                </ion-row>\n\n                <ion-row>\n\n                  <ion-col> Maximum Validity without renewal is 12 hours </ion-col>\n\n                </ion-row>\n\n                <ion-row>\n\n                  <div class="print-margin">\n\n                    <ion-col> <b>Date:</b> </ion-col>\n\n                  </div>\n\n                  <div class="print-margin">\n\n                    <ion-col> <b>Valid from:</b> </ion-col>\n\n                  </div>\n\n                  <div class="print-margin">\n\n                    <ion-col> <b>Until:</b> </ion-col>\n\n                  </div>\n\n                  <div class="print-margin">\n\n                    <ion-col> <b>Initial:</b> </ion-col>\n\n                  </div>\n\n                </ion-row>\n\n              </div>\n\n            </td>\n\n            <td class="border-line td-4">\n\n              <ion-row>\n\n                <ion-col> <strong class="txt-orient txt-size print-orient">AREA AUTHORITY SITE SUPERVISOR</strong> </ion-col>\n\n              </ion-row>\n\n            </td>\n\n            <td class="border-line">\n\n              <div class="align-3">\n\n                <ion-row>\n\n                  <div class="print-margin">\n\n                    <ion-col>I am satisfied that all the required safety Precautions have been taken, <br> all the Application\n\n                      Certificates are issued, work can therefore commence\n\n                    </ion-col>\n\n                  </div>\n\n                </ion-row>\n\n                <ion-row>\n\n                  <div class="print-margin">\n\n                    <ion-col>\n\n                      <b>Name: {{hseName}} </b>\n\n                    </ion-col>\n\n                  </div>\n\n                </ion-row>\n\n                <ion-row>\n\n                  <div class="print-margin">\n\n                    <ion-col>\n\n                      <b>Date: {{workpermit.hsedate}} </b>\n\n                    </ion-col>\n\n                  </div>\n\n                </ion-row>\n\n                <ion-row>\n\n                  <div class="print-margin">\n\n                    <ion-col>\n\n                      <b>Status: {{hseastatus}}</b>\n\n                    </ion-col>\n\n                  </div>\n\n                </ion-row>\n\n              </div>\n\n            </td>\n\n          </tr>\n\n          <tr class="border-line">\n\n            <td class="border-line td1">\n\n              <ion-row align-items-stretch>\n\n                <ion-col> <strong class="txt-orient txt-size print-orient"> SECTION 5 BY PERMIT HOLDER & AUTHORISED PERSON\n\n                    </strong> </ion-col>\n\n              </ion-row>\n\n            </td>\n\n            <td class="print-td">\n\n              <div>\n\n                <ion-row>\n\n                  <ion-col> <b>HANDBACK OF WORK</b></ion-col>\n\n                </ion-row>\n\n                <ion-row>\n\n                  <div class="print-margin">\n\n                    <ion-col> The job is completed and worksite cleared </ion-col>\n\n                    <ion-col> <input type="checkbox" /> </ion-col>\n\n                  </div>\n\n                </ion-row>\n\n                <ion-row>\n\n                  <div class="print-margin">\n\n                    <ion-col> The job is suspended/not completed </ion-col>\n\n                    <ion-col> <input type="checkbox" /> </ion-col>\n\n                  </div>\n\n                </ion-row>\n\n                <ion-row>\n\n                  <div class="print-margin">\n\n                    <ion-col> <b>Reason:</b> </ion-col>\n\n                  </div>\n\n                </ion-row>\n\n                <ion-row>\n\n                  <div class="print-margin">\n\n                    <ion-col> <b>Name:</b> </ion-col>\n\n                  </div>\n\n                  <div class="print-margin">\n\n                    <ion-col> <b>Date:</b> </ion-col>\n\n                  </div>\n\n                </ion-row>\n\n              </div>\n\n            </td>\n\n            <td class="border-line td-4">\n\n              <ion-row>\n\n                <ion-col> <strong class="txt-orient txt-size print-orient">AUTHORISED PERSON</strong> </ion-col>\n\n              </ion-row>\n\n            </td>\n\n            <td class="border-line">\n\n              <div class="align-3">\n\n                <ion-row>\n\n                  <ion-col>I confirm that the Safety Precautions specified will be observed\n\n                  </ion-col>\n\n                </ion-row>\n\n                <ion-row>\n\n                  <div class="print-margin">\n\n                    <ion-col>\n\n                      <b>Name: {{supervisorName}}</b>\n\n                    </ion-col>\n\n                  </div>\n\n                </ion-row>\n\n                <ion-row>\n\n                  <div class="print-margin">\n\n                    <ion-col>\n\n                      <b>Date: {{workpermit.areasupervisordate}}</b>\n\n                    </ion-col>\n\n                  </div>\n\n                  <div class="print-margin">\n\n                    <ion-col>\n\n                      <b>Signature: </b>\n\n                    </ion-col>\n\n                  </div>\n\n                </ion-row>\n\n                <ion-row>\n\n                  <div class="print-margin">\n\n                    <ion-col>\n\n                      <b>Status: {{supervisorastatus}}</b>\n\n                    </ion-col>\n\n                  </div>\n\n                </ion-row>\n\n              </div>\n\n            </td>\n\n          </tr>\n\n          <tr>\n\n            <td class="border-line td-4">\n\n\n\n            </td>\n\n            <td class="border-line print-td">\n\n\n\n            </td>\n\n            <td class="border-line td-4">\n\n              <ion-row>\n\n                <ion-col> <strong class="txt-orient txt-size print-orient">PERMIT HOLDER</strong> </ion-col>\n\n              </ion-row>\n\n            </td>\n\n            <td class="border-line">\n\n              <div class="align-3">\n\n                <ion-row>\n\n                  <ion-col>I confirm that i have read the Safety Precautions specified and they will be observed\n\n                  </ion-col>\n\n                </ion-row>\n\n                <ion-row>\n\n                  <div class="print-margin">\n\n                    <ion-col>\n\n                      <b>Name: {{workpermit.permitholdername}} </b>\n\n                    </ion-col>\n\n                  </div>\n\n                </ion-row>\n\n                <ion-row>\n\n                  <div class="print-margin">\n\n                    <ion-col>\n\n                      <b>Date: {{workpermit.datecreated}} </b>\n\n                    </ion-col>\n\n                  </div>\n\n                  <div class="print-margin">\n\n                    <ion-col>\n\n                      <b>Signature: </b>\n\n                    </ion-col>\n\n                  </div>\n\n                </ion-row>\n\n                <ion-row>\n\n                  <div class="print-margin">\n\n                    <ion-col>\n\n                      <b>Status: {{workpermit.status}}</b>\n\n                    </ion-col>\n\n                  </div>\n\n                </ion-row>\n\n              </div>\n\n            </td>\n\n          </tr>\n\n          <tr>\n\n            <td class="border-line td-4">\n\n\n\n            </td>\n\n            <td class="border-line print-td">\n\n\n\n            </td>\n\n            <td class="border-line td-4">\n\n              <ion-row>\n\n                <ion-col> <strong class="txt-orient txt-size print-orient">BY AUTHORISED PERSON</strong> </ion-col>\n\n              </ion-row>\n\n            </td>\n\n            <td class="border-line">\n\n              <div class="align-3">\n\n                <ion-row>\n\n                  <ion-col> <b>HAND OVER OF WORK</b></ion-col>\n\n                </ion-row>\n\n                <ion-row>\n\n                  <div class="print-margin">\n\n                    <ion-col> <b>From Time:</b> </ion-col>\n\n                  </div>\n\n                  <div class="print-margin">\n\n                    <ion-col> <b>Initial:</b> </ion-col>\n\n                  </div>\n\n                  <div class="print-margin">\n\n                    <ion-col> <b>to:</b> </ion-col>\n\n                  </div>\n\n                  <div class="print-margin">\n\n                    <ion-col> <b>Initial:</b> </ion-col>\n\n                  </div>\n\n                  <div class="print-margin">\n\n                    <ion-col> <b>Date:</b> </ion-col>\n\n                  </div>\n\n                </ion-row>\n\n              </div>\n\n            </td>\n\n          </tr>\n\n          <tr>\n\n            <td class="border-line td-4">\n\n\n\n            </td>\n\n            <td class="border-line print-td">\n\n\n\n            </td>\n\n            <td class="border-line td-4">\n\n              <ion-row>\n\n                <ion-col> <strong class="txt-orient txt-size print-orient">AREA AUTHORITY SITE SUPERVISOR</strong> </ion-col>\n\n              </ion-row>\n\n            </td>\n\n            <td class="border-line">\n\n              <div class="align-3">\n\n                <ion-row>\n\n                  <ion-col> <b>WORK ACCEPTANCE AND CLOSURE OF PERMIT</b></ion-col>\n\n                </ion-row>\n\n                <ion-row>\n\n                  <div class="print-margin">\n\n                    <ion-col>\n\n                      Job acceptance as stated and permit to work closed.\n\n                    </ion-col>\n\n                  </div>\n\n                </ion-row>\n\n                <ion-row>\n\n\n\n                  <ion-col>\n\n                    <b>Name: </b>\n\n                  </ion-col>\n\n                </ion-row>\n\n                <ion-row>\n\n                  <ion-col>\n\n                    <b>Date: </b>\n\n                  </ion-col>\n\n                  <ion-col>\n\n                    <b>Time: </b>\n\n                  </ion-col>\n\n                  <ion-col>\n\n                    <b>Signature: </b>\n\n                  </ion-col>\n\n                </ion-row>\n\n              </div>\n\n            </td>\n\n          </tr>\n\n        </table>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\printworkpermit\printworkpermit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_printer__["a" /* Printer */], __WEBPACK_IMPORTED_MODULE_4__providers_httpservice__["a" /* HttpserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__pouch_service_pouch_service__["a" /* PouchService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */]])
    ], PrintworkpermitPage);
    return PrintworkpermitPage;
}());

//# sourceMappingURL=printworkpermit.js.map

/***/ })

});
//# sourceMappingURL=15.js.map