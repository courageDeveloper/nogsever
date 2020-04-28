webpackJsonp([16],{

/***/ 769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintdailyreportPageModule", function() { return PrintdailyreportPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__printdailyreport__ = __webpack_require__(850);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_printer__ = __webpack_require__(824);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PrintdailyreportPageModule = /** @class */ (function () {
    function PrintdailyreportPageModule() {
    }
    PrintdailyreportPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__printdailyreport__["a" /* PrintdailyreportPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__printdailyreport__["a" /* PrintdailyreportPage */]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_printer__["a" /* Printer */]
            ]
        })
    ], PrintdailyreportPageModule);
    return PrintdailyreportPageModule;
}());

//# sourceMappingURL=printdailyreport.module.js.map

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

/***/ 850:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrintdailyreportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_printer__ = __webpack_require__(824);
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
 * Generated class for the PrintdailyreportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PrintdailyreportPage = /** @class */ (function () {
    function PrintdailyreportPage(platform, printer, navCtrl, viewCtrl, navParams) {
        this.platform = platform;
        this.printer = printer;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.options = {
            name: 'Daily Report',
            //printerId: 'printer007',
            duplex: true,
            landscape: true,
            grayscale: true
        };
        this.loop = false;
        this.dailyReport = this.navParams.get('dailyreport');
    }
    PrintdailyreportPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrintdailyreportPage');
        if (this.platform.is('cordova')) {
            this.printMobile();
        }
        else {
            this.printPermit();
        }
    };
    PrintdailyreportPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    PrintdailyreportPage.prototype.printPermit = function () {
        var win;
        win = window;
        var printContent = document.getElementById('printArea').innerHTML;
        var printWindow = win.open('', '_blank', 'top=0,left=0,height=auto,width=auto');
        printWindow.document.open();
        printWindow.document.write("<html><head><title>Daily Reprot ", "</title><style>\n       \n    table {\n      border-collapse: collapse;\n      width: 100%;\n    }\n    .print-align {\n        text-align: center;\n    }\n    td {\n      padding: 5px 0px 5px 15px;\n      }\n\n    table, td, th {\n      border: 1px solid black;\n    }\n\n    .print-margin{\n       margin-top: 5px;\n    }\n\n    .txt-align{\n      text-align: center;\n      max-width: 60%;\n  }\n    .print-td{\n      width: 40%;\n    }\n\n    .print-orient{\n      font-size: 0.5rem;\n     \n    }\n    .logo-print{\n      width:291px;\n      height:109px;\n      display: list-item;\n      list-style-image: url(../assets/images/NOG-LOGO.jpg);\n      list-style-position: inside;\n    }\n\n           </style></head><body></body></html>");
        printWindow.document.write(printContent);
        printWindow.document.close();
        printWindow.print();
    };
    PrintdailyreportPage.prototype.printMobile = function () {
        var _this = this;
        this.printer.isAvailable().then(function (success) {
            _this.printer.print(document.getElementById('printArea').innerHTML, _this.options).then();
        }, function (error) {
            console.log('printer not available');
        });
    };
    PrintdailyreportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-printdailyreport',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\printdailyreport\printdailyreport.html"*/'<!--\n\n  Generated template for the PrintdailyreportPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="secondary">\n\n    <ion-buttons right>\n\n      <button color="primary" ion-button (click)="cancel()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title class="title-color">Print Daily Report</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div style="overflow-x:auto">\n\n    <div id="printArea">\n\n      <div *ngFor="let dailyReport of dailyReport; let i = index">\n\n        <ion-row class="wlm-msg" align-items-start>\n\n          <ion-col align-self-baseline col-12>\n\n            <ion-list text-center class="bottom-align">\n\n              <img class="logo-print" src="assets/images/NOG-LOGO.jpg" width="200px" />\n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col class="txt-align">\n\n            <h1 style="text-align: center"><b> Network Oil & Gas Limited </b></h1>\n\n            <h2 color="danger" style="color:#f53d3d; text-align: center">Daily Report</h2>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>\n\n            Date Created: {{dailyReport.datecreated}}\n\n          </ion-col>\n\n        </ion-row>\n\n        <table>\n\n          <tr class="border-line">\n\n            <th>\n\n              Oil Production\n\n            </th>\n\n            <th>\n\n              Gas Production\n\n            </th>\n\n          </tr>\n\n          <tr>\n\n            <td>\n\n              {{dailyReport.optrain1}} (Oil produced from oil stabilization train 1)\n\n            </td>\n\n            <td>\n\n              {{dailyReport.tgngc}} (Total gas exported to NGC)\n\n            </td>\n\n          </tr>\n\n          <tr>\n\n            <td>\n\n              {{dailyReport.optrain2}} (Oil produced from oil stabilization train 2)\n\n            </td>\n\n            <td>\n\n              {{dailyReport.tghp}} (Total gas fled from HP)\n\n            </td>\n\n          </tr>\n\n          <tr>\n\n            <td>\n\n              {{dailyReport.opsurgevessel}} (Oil produced to surge vessel)\n\n            </td>\n\n            <td>\n\n              {{dailyReport.tglp}} (Total gas fled from LP)\n\n            </td>\n\n          </tr>\n\n          <tr>\n\n            <td>\n\n              {{dailyReport.otnpdc}} (Oil transferred to NPDC storage tank)\n\n            </td>\n\n            <td>\n\n              {{dailyReport.tvfuelgas}} (Total volume of fuel gas)\n\n            </td>\n\n          </tr>\n\n        </table>\n\n\n\n        <!-- Equipment Status -->\n\n        <ion-row align-items-start>\n\n          <ion-col align-self-baseline col-12>\n\n            <ion-list text-center class="print-align">\n\n              <strong> Equipment Status </strong>\n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n        <table>\n\n          <tr class="border-line">\n\n            <th>\n\n              Equipment Name\n\n            </th>\n\n            <th>\n\n              Status\n\n            </th>\n\n          </tr>\n\n          <tr>\n\n            <td>\n\n              Gas Compressor 1\n\n            </td>\n\n            <td>\n\n              {{dailyReport.gascompressor1}}\n\n            </td>\n\n          </tr>\n\n          <tr>\n\n            <td>\n\n              Gas Compressor 2\n\n            </td>\n\n            <td>\n\n              {{dailyReport.gascompressor2}}\n\n            </td>\n\n          </tr>\n\n          <tr>\n\n            <td>\n\n              Process Train 1\n\n            </td>\n\n            <td>\n\n              {{dailyReport.pt1}}\n\n            </td>\n\n          </tr>\n\n          <tr>\n\n            <td>\n\n              Process Train 2\n\n            </td>\n\n            <td>\n\n              {{dailyReport.pt2}}\n\n            </td>\n\n          </tr>\n\n          <tr>\n\n            <td>\n\n              Instrument Air Compressor A\n\n            </td>\n\n            <td>\n\n              {{dailyReport.iaircompressora}}\n\n            </td>\n\n          </tr>\n\n          <tr>\n\n            <td>\n\n              Instrument Air Compressor B\n\n            </td>\n\n            <td>\n\n              {{dailyReport.iaircompressorb}}\n\n            </td>\n\n          </tr>\n\n          <tr>\n\n            <td>\n\n              Gas Gen 1\n\n            </td>\n\n            <td>\n\n              {{dailyReport.gasgen1}}\n\n            </td>\n\n          </tr>\n\n          <tr>\n\n            <td>\n\n              Gas Gen 3\n\n            </td>\n\n            <td>\n\n              {{dailyReport.gasgen3}}\n\n            </td>\n\n          </tr>\n\n          <tr>\n\n            <td>\n\n              Gas Gen 4\n\n            </td>\n\n            <td>\n\n              {{dailyReport.gasgen4}}\n\n            </td>\n\n          </tr>\n\n          <tr>\n\n            <td>\n\n              Gas Gen 5\n\n            </td>\n\n            <td>\n\n              {{dailyReport.gasgen5}}\n\n            </td>\n\n          </tr>\n\n          <tr>\n\n            <td>\n\n              Diesel Gen Set\n\n            </td>\n\n            <td>\n\n              {{dailyReport.dieselgenset}}\n\n            </td>\n\n          </tr>\n\n        </table>\n\n\n\n        <!-- Daily Activities -->\n\n        <ion-row align-items-start>\n\n          <ion-col align-self-baseline col-12>\n\n            <ion-list text-center>\n\n              <strong> Daily Activities </strong>\n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n        <table>\n\n          <tr class="border-line">\n\n            <th>\n\n              Department\n\n            </th>\n\n            <th>\n\n              Activities\n\n            </th>\n\n          </tr>\n\n          <tr>\n\n            <td>\n\n              {{dailyReport.department}}\n\n            </td>\n\n            <td>\n\n              {{dailyReport.dailyactivities}}\n\n            </td>\n\n          </tr>\n\n        </table>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\printdailyreport\printdailyreport.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_printer__["a" /* Printer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */]])
    ], PrintdailyreportPage);
    return PrintdailyreportPage;
}());

//# sourceMappingURL=printdailyreport.js.map

/***/ })

});
//# sourceMappingURL=16.js.map