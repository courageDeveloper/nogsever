webpackJsonp([48],{

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpserviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the HttpserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HttpserviceProvider = /** @class */ (function () {
    function HttpserviceProvider(http) {
        this.http = http;
        console.log('Hello HttpserviceProvider Provider');
    }
    HttpserviceProvider.prototype.sendEmail = function (user) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        //return this.http.post('http://localhost:3000/sendemail', user);
        return this.http.post('http://157.230.209.193:3000/sendemail', user);
    };
    HttpserviceProvider.prototype.sendEmailFixed = function (user) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        //return this.http.post('http://localhost:3000/sendemailfixed', user);
        return this.http.post('http://157.230.209.193:3000/sendemailfixed', user);
    };
    HttpserviceProvider.prototype.sendEmailworkorder = function (user) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        return this.http.post('http://157.230.209.193:3000/sendemailworkorder', user);
        //return this.http.post('http://157.230.209.193:3000/sendemailworkorder', user); 
    };
    HttpserviceProvider.prototype.sendEmailfaultregistry = function (user) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        //return this.http.post('http://localhost:3000/sendemailfaultregistry', user);
        return this.http.post('http://157.230.209.193:3000/sendemailfaultregistry', user);
    };
    HttpserviceProvider.prototype.workpermitNotification = function (user) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        return this.http.post('http://157.230.209.193:3000/mobilenotification', user);
        /* return this.http.post('http://157.230.209.193:3000/sendemail', user); */
    };
    HttpserviceProvider.prototype.faultNotification = function (user) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        return this.http.post('http://157.230.209.193:3000/mobilefaultregistry', user);
        /* return this.http.post('http://157.230.209.193:3000/sendemail', user); */
    };
    HttpserviceProvider.prototype.forgotPassword = function (user) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        return this.http.post('http://157.230.209.193:3000/forgotpassword', user);
    };
    HttpserviceProvider.prototype.getIpAddress = function () {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get('https://api.ipify.org?format=json').map(function (res) { return res; });
    };
    HttpserviceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], HttpserviceProvider);
    return HttpserviceProvider;
}());

//# sourceMappingURL=httpservice.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pouch_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/* import {
  setInterval,
  clearInterval
} from 'timers'; */
/*
  Generated class for the PopupProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PopupProvider = /** @class */ (function () {
    function PopupProvider(http, db, altctrl, nav) {
        this.http = http;
        this.db = db;
        this.altctrl = altctrl;
        this.nav = nav;
    }
    PopupProvider.prototype.displayPopUp = function () {
        var _this = this;
        this.localStorageItem = JSON.parse(localStorage.getItem('user'));
        this.db.getSupervisor(this.localStorageItem).then(function (item) {
            _this.db.getWorkorders().then(function (workorders) {
                workorders = workorders.filter(function (data) { return data.department == item.departments && data.responsibility == item.post && data.beepstatus == true && data.dstatus == false; });
                if (workorders.length != 0) {
                    if (workorders[0].beepstatus == true && workorders[0].dstatus == false && workorders[0].department == item.departments) {
                        var setMyInterval = setInterval(function () {
                            console.log('OK');
                            var alert = _this.altctrl.create({
                                title: 'Pending Workorder',
                                message: 'You still have pending work order/orders to attend',
                                buttons: [{
                                        text: 'Cancel',
                                        role: 'cancel'
                                    },
                                    {
                                        text: 'Ok',
                                        handler: function () {
                                            _this.localStorageItem = JSON.parse(localStorage.getItem('user'));
                                            _this.db.getSupervisor(_this.localStorageItem).then(function (item) {
                                                _this.db.getWorkorders().then(function (workorders) {
                                                    workorders = workorders.filter(function (data) { return data.department == item.departments && data.responsibility == item.post && data.beepstatus == true && data.dstatus == false; });
                                                    if (workorders.length == 0) {
                                                        clearInterval(setMyInterval);
                                                    }
                                                    else {
                                                        console.log('Continue');
                                                    }
                                                    //this.nav.getRootNav().push('PreventivemaintenancePage');
                                                });
                                            });
                                            //this.displayPopUp();
                                            //this.nav.push('OperatorhomePage');
                                        }
                                    }
                                ]
                            });
                            alert.present();
                        }, 60000);
                    }
                    else {
                        console.log('Stopped');
                        clearInterval(setMyInterval);
                    }
                }
                else {
                    console.log("Nothing is Pending");
                    clearInterval(setMyInterval);
                }
            });
        });
    };
    //PM
    PopupProvider.prototype.displayPopUpPM = function () {
        var _this = this;
        this.localStorageItem = JSON.parse(localStorage.getItem('user'));
        this.db.getSupervisor(this.localStorageItem).then(function (item) {
            _this.db.getPreventivemaintenances().then(function (preventivemaintenances) {
                preventivemaintenances = preventivemaintenances.filter(function (data) { return data.department == item.departments && data.responsibility == item.post && data.beepstatus == true && data.dstatus == false; });
                if (preventivemaintenances.length != 0) {
                    if (preventivemaintenances[0].beepstatus == true && preventivemaintenances[0].dstatus == false && preventivemaintenances[0].department == item.departments) {
                        var setMyInterval = setInterval(function () {
                            console.log('OK');
                            var alert = _this.altctrl.create({
                                title: 'Pending Preventive maintenance',
                                message: 'You still have pending preventive maintenance/preventive maintenances to attend',
                                buttons: [{
                                        text: 'Cancel',
                                        role: 'cancel'
                                    },
                                    {
                                        text: 'Ok',
                                        handler: function () {
                                            _this.localStorageItem = JSON.parse(localStorage.getItem('user'));
                                            _this.db.getSupervisor(_this.localStorageItem).then(function (item) {
                                                _this.db.getPreventivemaintenances().then(function (preventivemaintenances) {
                                                    preventivemaintenances = preventivemaintenances.filter(function (data) { return data.department == item.departments && data.responsibility == item.post && data.beepstatus == true && data.dstatus == false; });
                                                    if (preventivemaintenances.length == 0) {
                                                        clearInterval(setMyInterval);
                                                    }
                                                    else {
                                                        console.log('Continue');
                                                    }
                                                    //this.nav.getRootNav().push('NewpreventivemaintenancePage');
                                                });
                                            });
                                            //this.displayPopUp();
                                            //this.nav.push('OperatorhomePage');
                                        }
                                    }
                                ]
                            });
                            alert.present();
                        }, 60000);
                    }
                    else {
                        console.log('Stopped');
                        clearInterval(setMyInterval);
                    }
                }
                else {
                    console.log("Nothing is Pending");
                    clearInterval(setMyInterval);
                }
            });
        });
    };
    PopupProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__pouch_service__["a" /* PouchService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* App */]])
    ], PopupProvider);
    return PopupProvider;
}());

//# sourceMappingURL=popup.js.map

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 182;

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addengineer/addengineer.module": [
		746,
		47
	],
	"../pages/addequipment/addequipment.module": [
		747,
		46
	],
	"../pages/addequipmentsadd/addequipmentsadd.module": [
		748,
		45
	],
	"../pages/addfaultregistry/addfaultregistry.module": [
		775,
		10
	],
	"../pages/addfrequency/addfrequency.module": [
		749,
		44
	],
	"../pages/addfrequencyequipment/addfrequencyequipment.module": [
		788,
		14
	],
	"../pages/addmanager/addmanager.module": [
		750,
		43
	],
	"../pages/addmaterial/addmaterial.module": [
		752,
		42
	],
	"../pages/addnewpreventivemaintenance/addnewpreventivemaintenance.module": [
		776,
		41
	],
	"../pages/addoperator/addoperator.module": [
		751,
		40
	],
	"../pages/addorder/addorder.module": [
		753,
		39
	],
	"../pages/addorderequipment/addorderequipment.module": [
		789,
		13
	],
	"../pages/addpreventivemaintenance/addpreventivemaintenance.module": [
		777,
		9
	],
	"../pages/addspareparts/addspareparts.module": [
		757,
		38
	],
	"../pages/addworkerschedule/addworkerschedule.module": [
		754,
		37
	],
	"../pages/adminhome/adminhome.module": [
		755,
		36
	],
	"../pages/changepassword/changepassword.module": [
		760,
		35
	],
	"../pages/dailyreport/dailyreport.module": [
		756,
		8
	],
	"../pages/dailyworkorder/dailyworkorder.module": [
		759,
		34
	],
	"../pages/engineers/engineers.module": [
		758,
		33
	],
	"../pages/equipment/equipment.module": [
		779,
		3
	],
	"../pages/equipmentsadd/equipmentsadd.module": [
		761,
		32
	],
	"../pages/faultregistry/faultregistry.module": [
		778,
		31
	],
	"../pages/fixed/fixed.module": [
		762,
		7
	],
	"../pages/forgotpassword/forgotpassword.module": [
		765,
		30
	],
	"../pages/home/home.module": [
		780,
		17
	],
	"../pages/login/login.module": [
		763,
		29
	],
	"../pages/managers/managers.module": [
		764,
		28
	],
	"../pages/material/material.module": [
		767,
		27
	],
	"../pages/newpreventivemaintenance/newpreventivemaintenance.module": [
		790,
		2
	],
	"../pages/operatorhome/operatorhome.module": [
		766,
		26
	],
	"../pages/operators/operators.module": [
		768,
		25
	],
	"../pages/otp/otp.module": [
		769,
		24
	],
	"../pages/preventivemaintenance/preventivemaintenance.module": [
		781,
		23
	],
	"../pages/printdailyreport/printdailyreport.module": [
		770,
		16
	],
	"../pages/printworkpermit/printworkpermit.module": [
		783,
		15
	],
	"../pages/spareparts/spareparts.module": [
		782,
		1
	],
	"../pages/supervisorhome/supervisorhome.module": [
		784,
		22
	],
	"../pages/viewdailyreport/viewdailyreport.module": [
		771,
		21
	],
	"../pages/viewfrequencyequipment/viewfrequencyequipment.module": [
		786,
		12
	],
	"../pages/viewnewpreventivemaintenance/viewnewpreventivemaintenance.module": [
		791,
		0
	],
	"../pages/vieworderequipment/vieworderequipment.module": [
		785,
		11
	],
	"../pages/viewpreventivemaintenance/viewpreventivemaintenance.module": [
		787,
		20
	],
	"../pages/viewsubitems/viewsubitems.module": [
		772,
		6
	],
	"../pages/viewsubitemspm/viewsubitemspm.module": [
		773,
		5
	],
	"../pages/viewworkpermit/viewworkpermit.module": [
		792,
		19
	],
	"../pages/workerschedule/workerschedule.module": [
		774,
		18
	],
	"../pages/workpermit/workpermit.module": [
		793,
		4
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 225;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);



window["$"] = __WEBPACK_IMPORTED_MODULE_2_jquery__;
window["jQuery"] = __WEBPACK_IMPORTED_MODULE_2_jquery__;
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_auto_complete__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_auto_complete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_auto_complete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pouch_service_pouch_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__ = __webpack_require__(742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_onesignal__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_froala_editor_js_froala_editor_pkgd_min_js__ = __webpack_require__(744);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_froala_editor_js_froala_editor_pkgd_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_froala_editor_js_froala_editor_pkgd_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_httpservice__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ionic_img_viewer__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pouch_service_popup__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















//import { HomePage } from '../pages/home/home';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_auto_complete__["Ng2AutoCompleteModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_15_ionic_img_viewer__["a" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/addengineer/addengineer.module#AddengineerPageModule', name: 'AddengineerPage', segment: 'addengineer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addequipment/addequipment.module#AddequipmentPageModule', name: 'AddequipmentPage', segment: 'addequipment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addequipmentsadd/addequipmentsadd.module#AddequipmentsaddPageModule', name: 'AddequipmentsaddPage', segment: 'addequipmentsadd', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addfrequency/addfrequency.module#AddfrequencyPageModule', name: 'AddfrequencyPage', segment: 'addfrequency', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addmanager/addmanager.module#AddmanagerPageModule', name: 'AddmanagerPage', segment: 'addmanager', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addoperator/addoperator.module#AddoperatorPageModule', name: 'AddoperatorPage', segment: 'addoperator', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addmaterial/addmaterial.module#AddmaterialPagePageModule', name: 'AddmaterialPage', segment: 'addmaterial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addorder/addorder.module#AddorderPageModule', name: 'AddorderPage', segment: 'addorder', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addworkerschedule/addworkerschedule.module#AddworkerschedulePageModule', name: 'AddworkerschedulePage', segment: 'addworkerschedule', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/adminhome/adminhome.module#AdminHomePageModule', name: 'AdminHomePage', segment: 'adminhome', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dailyreport/dailyreport.module#DailyreportPageModule', name: 'DailyreportPage', segment: 'dailyreport', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addspareparts/addspareparts.module#AddsparepartsPageModule', name: 'AddsparepartsPage', segment: 'addspareparts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/engineers/engineers.module#EngineersPageModule', name: 'EngineersPage', segment: 'engineers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dailyworkorder/dailyworkorder.module#DailyworkorderPageModule', name: 'DailyworkorderPage', segment: 'dailyworkorder', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/changepassword/changepassword.module#AddchangepasswordPageModule', name: 'AddchangepasswordPage', segment: 'changepassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/equipmentsadd/equipmentsadd.module#EquipmentsaddPageModule', name: 'EquipmentsaddPage', segment: 'equipmentsadd', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fixed/fixed.module#FixedPageModule', name: 'FixedPage', segment: 'fixed', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/managers/managers.module#ManagersPageModule', name: 'ManagersPage', segment: 'managers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgotpassword/forgotpassword.module#ForgotpasswordPageModule', name: 'ForgotpasswordPage', segment: 'forgotpassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/operatorhome/operatorhome.module#OperatorhomePageModule', name: 'OperatorhomePage', segment: 'operatorhome', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/material/material.module#materialPageModule', name: 'MaterialPage', segment: 'material', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/operators/operators.module#OperatorsPageModule', name: 'OperatorsPage', segment: 'operators', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/otp/otp.module#otpPageModule', name: 'otpPage', segment: 'otp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/printdailyreport/printdailyreport.module#PrintdailyreportPageModule', name: 'PrintdailyreportPage', segment: 'printdailyreport', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viewdailyreport/viewdailyreport.module#ViewdailyreportPageModule', name: 'ViewdailyreportPage', segment: 'viewdailyreport', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viewsubitems/viewsubitems.module#ViewsubitemsPageModule', name: 'ViewsubitemsPage', segment: 'viewsubitems', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viewsubitemspm/viewsubitemspm.module#ViewsubitemspmPageModule', name: 'ViewsubitemspmPage', segment: 'viewsubitemspm', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/workerschedule/workerschedule.module#WorkerschedulePageModule', name: 'WorkerschedulePage', segment: 'workerschedule', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addfaultregistry/addfaultregistry.module#AddfaultregistryPageModule', name: 'AddfaultregistryPage', segment: 'addfaultregistry', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addnewpreventivemaintenance/addnewpreventivemaintenance.module#AddnewpreventivemaintenancePageModule', name: 'AddnewpreventivemaintenancePage', segment: 'addnewpreventivemaintenance', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addpreventivemaintenance/addpreventivemaintenance.module#AddpreventivemaintenancePageModule', name: 'AddpreventivemaintenancePage', segment: 'addpreventivemaintenance', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/faultregistry/faultregistry.module#FaultregistryPageModule', name: 'FaultregistryPage', segment: 'faultregistry', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/equipment/equipment.module#EquipmentPageModule', name: 'EquipmentPage', segment: 'equipment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/preventivemaintenance/preventivemaintenance.module#PreventivemaintenancePageModule', name: 'PreventivemaintenancePage', segment: 'preventivemaintenance', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/spareparts/spareparts.module#SparepartsPageModule', name: 'SparepartsPage', segment: 'spareparts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/printworkpermit/printworkpermit.module#PrintworkpermitPageModule', name: 'PrintworkpermitPage', segment: 'printworkpermit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/supervisorhome/supervisorhome.module#SupervisorhomePageModule', name: 'SupervisorhomePage', segment: 'supervisorhome', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vieworderequipment/vieworderequipment.module#VieworderequipmentPageModule', name: 'VieworderequipmentPage', segment: 'vieworderequipment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viewfrequencyequipment/viewfrequencyequipment.module#ViewfrequencyequipmentPageModule', name: 'ViewfrequencyequipmentPage', segment: 'viewfrequencyequipment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viewpreventivemaintenance/viewpreventivemaintenance.module#ViewpreventivemaintenancePageModule', name: 'ViewpreventivemaintenancePage', segment: 'viewpreventivemaintenance', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addfrequencyequipment/addfrequencyequipment.module#AddfrequencyequipmentPageModule', name: 'AddfrequencyequipmentPage', segment: 'addfrequencyequipment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addorderequipment/addorderequipment.module#AddorderequipmentPageModule', name: 'AddorderequipmentPage', segment: 'addorderequipment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/newpreventivemaintenance/newpreventivemaintenance.module#NewpreventivemaintenancePageModule', name: 'NewpreventivemaintenancePage', segment: 'newpreventivemaintenance', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viewnewpreventivemaintenance/viewnewpreventivemaintenance.module#ViewnewpreventivemaintenancePageModule', name: 'ViewnewpreventivemaintenancePage', segment: 'viewnewpreventivemaintenance', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viewworkpermit/viewworkpermit.module#ViewworkpermitPageModule', name: 'ViewworkpermitPage', segment: 'viewworkpermit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/workpermit/workpermit.module#WorkpermitPageModule', name: 'WorkpermitPage', segment: 'workpermit', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__pouch_service_pouch_service__["a" /* PouchService */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__providers_httpservice__["a" /* HttpserviceProvider */],
                __WEBPACK_IMPORTED_MODULE_16__pouch_service_popup__["a" /* PopupProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 413:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 420:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Schema; });
/**
 * Schema defining the db relations
 */
var Schema = [
    {
        singular: 'supervisor',
        plural: 'supervisors',
        relations: {
            workpermits: {
                hasMany: {
                    type: 'workpermit',
                    options: {
                        async: true
                    }
                },
            },
            workorders: {
                hasMany: {
                    type: 'workorder',
                    options: {
                        async: true
                    }
                },
            },
            preventivemaintenances: {
                hasMany: {
                    type: 'preventivemaintenance',
                    options: {
                        async: true
                    }
                },
            },
            faultregistrys: {
                hasMany: {
                    type: 'faultregistry',
                    options: {
                        async: true
                    }
                },
            },
            dailyreports: {
                hasMany: {
                    type: 'dailyreport',
                    options: {
                        async: true
                    }
                },
            }
        }
    },
    {
        singular: 'workpermit',
        plural: 'workpermits',
        relations: {
            supervisor: {
                belongsTo: 'supervisor'
            },
        }
    },
    {
        singular: 'workorder',
        plural: 'workorders',
        relations: {
            supervisor: {
                belongsTo: 'supervisor'
            },
        }
    },
    {
        singular: 'preventivemaintenance',
        plural: 'preventivemaintenances',
        relations: {
            supervisor: {
                belongsTo: 'supervisor'
            },
        }
    },
    {
        singular: 'faultregistry',
        plural: 'faultregistrys',
        relations: {
            supervisor: {
                belongsTo: 'supervisor'
            },
        }
    },
    {
        singular: 'dailyreport',
        plural: 'dailyreports',
        relations: {
            supervisor: {
                belongsTo: 'supervisor'
            },
        }
    },
    {
        singular: 'material',
        plural: 'materials',
    },
    {
        singular: 'equipmentpart',
        plural: 'equipmentparts',
        relations: {
            equipmentcat: {
                belongsTo: 'equipmentcat'
            },
            equipmenttags: {
                hasMany: {
                    type: 'equipmenttag',
                    options: {
                        async: true
                    }
                },
            }
        }
    },
    {
        singular: 'equipmentcat',
        plural: 'equipmentcats',
        relations: {
            equipmentparts: {
                hasMany: {
                    type: 'equipmentpart',
                    options: {
                        async: true
                    }
                },
            }
        }
    },
    {
        singular: 'equipmenttag',
        plural: 'equipmenttags',
        relations: {
            equipmentpart: {
                belongsTo: 'equipmentpart'
            },
        }
    },
];
//# sourceMappingURL=relational-schema.js.map

/***/ }),

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pouch_service_pouch_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pouch_service_popup__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_httpservice__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_onesignal__ = __webpack_require__(377);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, oneSignal, httpService, statusBar, db, splashScreen, popUp) {
        var _this = this;
        this.oneSignal = oneSignal;
        this.httpService = httpService;
        this.db = db;
        this.popUp = popUp;
        this.rootPage = 'LoginPage';
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.db.initDB();
            statusBar.styleDefault();
            splashScreen.hide();
            // OneSignal Code start:
            // Enable to debug issues:
            // window["plugins"].OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
            /*  var notificationOpenedCallback = function (jsonData) {
               alert('notificationOpenedCallback: ' + JSON.stringify(jsonData));
             };
       
             window["plugins"].OneSignal
               .startInit("3bcabf2d-92f3-4d45-b7d8-b6d1a9769fb5", "496629233073")
               .handleNotificationOpened(notificationOpenedCallback)
               .endInit(); */
            if (platform.is('cordova')) {
                /* alert("One Signal"); */
                _this.oneSignal.inFocusDisplaying(_this.oneSignal.OSInFocusDisplayOption.Notification);
                _this.oneSignal.startInit('40a46202-dc72-4f76-bc8f-c692e075aec6', '496629233073');
                _this.oneSignal.handleNotificationReceived().subscribe(function (notification) {
                    /* alert(JSON.stringify(notification)); */
                });
                _this.oneSignal.handleNotificationOpened().subscribe(function (data) { return _this.onPushOpened(data.notification.payload); });
                _this.oneSignal.endInit();
            }
            /* else {
              console.log("Logged in web");
            } */
        });
        this.localStorageItem = JSON.parse(localStorage.getItem('user'));
        setTimeout(function () {
            _this.process();
            /* this.popUp.displayPopUp();
            this.popUp.displayPopUpPM(); */
        }, 1000);
    }
    MyApp.prototype.onPushReceived = function (payload) {
        alert('Push recevied:' + payload.body);
    };
    MyApp.prototype.onPushOpened = function (payload) {
        alert('Push opened: ' + payload.body);
    };
    MyApp.prototype.process = function () {
        var _this = this;
        if (this.localStorageItem) {
            this.db.getSupervisor(this.localStorageItem).then(function (item) {
                if (item != undefined) {
                    if (item.post == 'Manager') {
                        _this.rootPage = 'HomePage';
                    }
                    else if (item.post == 'Supervisor') {
                        _this.rootPage = 'SupervisorhomePage';
                    }
                    else if (item.post == 'Operator') {
                        _this.rootPage = 'OperatorhomePage';
                    }
                    else {
                        _this.rootPage = 'AdminHomePage';
                    }
                    _this.userObject = item;
                }
            });
        }
        else {
            this.rootPage = 'LoginPage';
        }
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_6__providers_httpservice__["a" /* HttpserviceProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__pouch_service_pouch_service__["a" /* PouchService */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__pouch_service_popup__["a" /* PopupProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PouchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_from__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_relational_schema__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(21);
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
 * Service provider for PouchDB
 * @name pouch-service.ts
 * @author Agbonaye Osaru - osaru@sarutech.com
 */

//import PouchDB from 'pouchdb';
var PouchDB = __webpack_require__(406);
PouchDB.plugin(__webpack_require__(412));
PouchDB.plugin(__webpack_require__(427));
__webpack_require__(432)(PouchDB);






var PouchService = /** @class */ (function () {
    /**
    * Constructor
    */
    function PouchService(http, _CAMERA, load) {
        this.http = http;
        this._CAMERA = _CAMERA;
        this.load = load;
        this.banners = ['1', '2', '3'];
        console.log('constructor');
    }
    /**
    * Initialize PouchDB database
    */
    PouchService.prototype.initDB = function () {
        this.db = new PouchDB('ogpooc', { adapter: 'websql' });
        this.db.setSchema(__WEBPACK_IMPORTED_MODULE_4__models_relational_schema__["a" /* Schema */]);
        this.enableSyncing();
        this.checkRemoteSync();
        this.db.createIndex({
            index: {
                fields: ['data.product', '_id']
            }
        });
    };
    PouchService.prototype.databaseExist = function (db) {
        return PouchDB.allDbs().then(function (dbs) {
            return dbs.indexOf(db) != -1;
        });
    };
    PouchService.prototype.enableSyncing = function () {
        var options = {
            Auth: {
                username: 'nog',
                password: 'nog%gabby'
            },
            live: true,
            retry: true,
            continuous: true
        };
        this.remote = 'http://157.230.209.193:5984/ogpooc';
        //if (this.remote != undefined) {
        this.db.sync(this.remote, options).on('change', function (change) {
            console.log('check change', change);
            console.log('changed');
        }).on('complete', function (complete) {
            console.log('complete fetch', complete);
            console.log('complete');
        }).on('error', function (err) {
            console.log('offline');
        });
        //}
    };
    PouchService.prototype.loadRemoteDb = function () {
        var options = {
            Auth: {
                username: 'nog',
                password: 'nog%gabby'
            }
        };
        this.remote = 'http://157.230.209.193:5984/ogpooc';
        return this.db.sync(this.remote, options).on('change', function (change) {
            //return true;
        }).on('complete', function (complete) {
            return true;
        }).on('error', function (err) {
            console.log('offline');
        });
    };
    PouchService.prototype.validateUsername = function (username) {
        return this.http.get('http://157.230.209.193/couchdblogin/' + 'auth/validate-username/' + username).map(function (res) { return res.json(); });
    };
    PouchService.prototype.checkRemoteSync = function () {
        this.remote = 'http://157.230.209.193:5984/ogpooc';
        var loading;
        if (this.finishSync == undefined) {
            loading = this.load.create({
                content: 'Syncing, Please wait...'
            });
            loading.present();
            this.db.sync(this.remote).on('complete', function (info) {
                this.finishSync = info;
                console.log(this.finishSync.pull.status);
                if (this.finishSync.pull.status == 'complete') {
                    loading.dismiss();
                }
                console.log('complete', info);
            }).on('error', function (err) {
                console.log('offline');
                loading.dismiss();
            });
        }
    };
    /***********
    * STAFF NOT SUPERVISOR
    **********/
    /**
     * Save a supervisor
     * @param {supervisor} Supervisor
     *
     * @return Promise<Supervisor>
     */
    PouchService.prototype.saveSupervisor = function (supervisor) {
        supervisor.id = Math.floor(Date.now()).toString();
        /* supervisor.post = 'Supervisor' */
        return this.db.rel.save('supervisor', supervisor).then(function (data) {
            if (data && data.supervisors && data.supervisors[0]) {
                return data.supervisors[0];
            }
            return null;
        }).catch(function (err) {
            console.log(err);
        });
    };
    //Get All Supervisors
    PouchService.prototype.getSupervisors = function () {
        return this.db.rel.find('supervisor').then(function (data) {
            var supervisors = data.supervisors ? data.supervisors : [];
            var sortBy = 'DESC';
            switch (sortBy) {
                case 'ASC':
                    supervisors.sort(function (a, b) {
                        return (a.id > b.id) ? 1 : ((a.id > b.id) ? -1 : 0);
                    });
                    break;
                case 'DESC':
                    supervisors.sort(function (a, b) {
                        return (a.id > b.id) ? -1 : ((a.id > b.id) ? 1 : 0);
                    });
                    break;
                default:
                    break;
            }
            return supervisors;
        }).catch(function (err) {
            console.log(err);
        });
    };
    PouchService.prototype.getSupervisor = function (id) {
        return this.db.rel.find('supervisor', id).then(function (data) {
            return data && data.supervisors ? data.supervisors[0] : null;
        }).catch(function (err) {
            console.log(err);
        });
    };
    //Update Supervisor
    PouchService.prototype.updateSupervisor = function (supervisor) {
        return this.db.rel.save('supervisor', supervisor).then(function (data) {
            if (data && data.supervisors && data.supervisors[0]) {
                return data.supervisors[0];
            }
            return null;
        }).catch(function (err) {
            console.log(err);
        });
    };
    PouchService.prototype.deleteSupervisor = function (supervisor) {
        return this.db.rel.del('supervisor', supervisor).then(function (data) {
            return data && data.deleted ? data.deleted : false;
        }).catch(function (err) {
            console.log(err);
        });
    };
    /***********
    * WORKPERMIT
    **********/
    /**
     * Save a workpermit
     * @param {workpermit} Workpermit
     *
     * @return Promise<Workpermit>
     */
    PouchService.prototype.saveWorkpermit = function (workpermit) {
        workpermit.id = Math.floor(Date.now()).toString();
        return this.db.rel.save('workpermit', workpermit).then(function (data) {
            if (data && data.workpermits && data.workpermits[0]) {
                return data.workpermits[0];
            }
            return null;
        }).catch(function (err) {
            console.log(err);
        });
    };
    //Get All Workpermits
    PouchService.prototype.getWorkpermits = function () {
        return this.db.rel.find('workpermit').then(function (data) {
            var workpermits = data.workpermits ? data.workpermits : [];
            var sortBy = 'DESC';
            switch (sortBy) {
                case 'ASC':
                    workpermits.sort(function (a, b) {
                        return (a.id > b.id) ? 1 : ((a.id > b.id) ? -1 : 0);
                    });
                    break;
                case 'DESC':
                    workpermits.sort(function (a, b) {
                        return (a.id > b.id) ? -1 : ((a.id > b.id) ? 1 : 0);
                    });
                    break;
                default:
                    break;
            }
            return workpermits;
        }).catch(function (err) {
            console.log(err);
        });
    };
    PouchService.prototype.getWorkpermit = function (id) {
        return this.db.rel.find('workpermit', id).then(function (data) {
            return data && data.workpermits ? data.workpermits[0] : null;
        }).catch(function (err) {
            console.log(err);
        });
    };
    //Update Workpermit
    PouchService.prototype.updateWorkpermit = function (workpermit) {
        return this.db.rel.save('workpermit', workpermit).then(function (data) {
            if (data && data.workpermits && data.workpermits[0]) {
                return data.workpermits[0];
            }
            return null;
        }).catch(function (err) {
            console.log(err);
        });
    };
    PouchService.prototype.deleteWorkpermit = function (workpermit) {
        return this.db.rel.del('workpermit', workpermit).then(function (data) {
            return data && data.deleted ? data.deleted : false;
        }).catch(function (err) {
            console.log(err);
        });
    };
    /***********
   * WORKORDER
   **********/
    /**
     * Save a workorder
     * @param {workorder} Workorder
     *
     * @return Promise<Workorder>
     */
    PouchService.prototype.saveWorkorder = function (workorder) {
        workorder.id = Math.floor(Date.now()).toString();
        return this.db.rel.save('workorder', workorder).then(function (data) {
            if (data && data.workorders && data.workorders[0]) {
                /* console.log(data.workorders[0]); */
                return data.workorders[0];
            }
            return null;
        }).catch(function (err) {
            console.log(err);
        });
    };
    //Get All Workorders
    PouchService.prototype.getWorkorders = function () {
        return this.db.rel.find('workorder').then(function (data) {
            var workorders = data.workorders ? data.workorders : [];
            var sortBy = 'DESC';
            switch (sortBy) {
                case 'ASC':
                    workorders.sort(function (a, b) {
                        return (a.id > b.id) ? 1 : ((a.id > b.id) ? -1 : 0);
                    });
                    break;
                case 'DESC':
                    workorders.sort(function (a, b) {
                        return (a.id > b.id) ? -1 : ((a.id > b.id) ? 1 : 0);
                    });
                    break;
                default:
                    break;
            }
            return workorders;
        }).catch(function (err) {
            console.log(err);
        });
    };
    PouchService.prototype.getBanners = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].of(this.banners);
    };
    PouchService.prototype.getWorkorders2 = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].of(this.db.rel.find('workorder').then(function (data) {
            var workorders = data.workorders ? data.workorders : [];
            var sortBy = 'DESC';
            switch (sortBy) {
                case 'ASC':
                    workorders.sort(function (a, b) {
                        return (a.id > b.id) ? 1 : ((a.id > b.id) ? -1 : 0);
                    });
                    break;
                case 'DESC':
                    workorders.sort(function (a, b) {
                        return (a.id > b.id) ? -1 : ((a.id > b.id) ? 1 : 0);
                    });
                    break;
                default:
                    break;
            }
            return workorders;
        }).catch(function (err) {
            console.log(err);
        }));
    };
    PouchService.prototype.getWorkorder = function (id) {
        return this.db.rel.find('workorder', id).then(function (data) {
            return data && data.workorders ? data.workorders[0] : null;
        }).catch(function (err) {
            console.log(err);
        });
    };
    //Update Workorder
    PouchService.prototype.updateWorkorder = function (workorder) {
        return this.db.rel.save('workorder', workorder).then(function (data) {
            if (data && data.workorders && data.workorders[0]) {
                return data.workorders[0];
            }
            return null;
        }).catch(function (err) {
            console.log(err);
        });
    };
    PouchService.prototype.deleteWorkorder = function (workorder) {
        return this.db.rel.del('workorder', workorder).then(function (data) {
            return data && data.deleted ? data.deleted : false;
        }).catch(function (err) {
            console.log(err);
        });
    };
    /***********
   * PREVENTIVEMAINTENANCE
   **********/
    /**
     * Save a prevntivemaintenance
     * @param {preventivemaintenance} Preventivemaintenance
     *
     * @return Promise<Preventivemaintenance>
     */
    PouchService.prototype.savePreventivemaintenance = function (preventivemaintenance) {
        preventivemaintenance.id = Math.floor(Date.now()).toString();
        return this.db.rel.save('preventivemaintenance', preventivemaintenance).then(function (data) {
            if (data && data.preventivemaintenances && data.preventivemaintenances[0]) {
                /* console.log(data.preventivemaintenances[0]); */
                return data.preventivemaintenances[0];
            }
            return null;
        }).catch(function (err) {
            console.log(err);
        });
    };
    //Get All Preventivemaintenances
    PouchService.prototype.getPreventivemaintenances = function () {
        return this.db.rel.find('preventivemaintenance').then(function (data) {
            var preventivemaintenances = data.preventivemaintenances ? data.preventivemaintenances : [];
            var sortBy = 'DESC';
            switch (sortBy) {
                case 'ASC':
                    preventivemaintenances.sort(function (a, b) {
                        return (a.id > b.id) ? 1 : ((a.id > b.id) ? -1 : 0);
                    });
                    break;
                case 'DESC':
                    preventivemaintenances.sort(function (a, b) {
                        return (a.id > b.id) ? -1 : ((a.id > b.id) ? 1 : 0);
                    });
                    break;
                default:
                    break;
            }
            return preventivemaintenances;
        }).catch(function (err) {
            console.log(err);
        });
    };
    PouchService.prototype.getPreventivemaintenances2 = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].of(this.db.rel.find('preventivemaintenance').then(function (data) {
            var preventivemaintenances = data.preventivemaintenances ? data.preventivemaintenances : [];
            var sortBy = 'DESC';
            switch (sortBy) {
                case 'ASC':
                    preventivemaintenances.sort(function (a, b) {
                        return (a.id > b.id) ? 1 : ((a.id > b.id) ? -1 : 0);
                    });
                    break;
                case 'DESC':
                    preventivemaintenances.sort(function (a, b) {
                        return (a.id > b.id) ? -1 : ((a.id > b.id) ? 1 : 0);
                    });
                    break;
                default:
                    break;
            }
            return preventivemaintenances;
        }).catch(function (err) {
            console.log(err);
        }));
    };
    PouchService.prototype.getPreventivemaintenance = function (id) {
        return this.db.rel.find('preventivemaintenance', id).then(function (data) {
            return data && data.preventivemaintenances ? data.preventivemaintenances[0] : null;
        }).catch(function (err) {
            console.log(err);
        });
    };
    //Update Preventivemaintenance
    PouchService.prototype.updatePreventivemaintenance = function (preventivemaintenance) {
        return this.db.rel.save('preventivemaintenance', preventivemaintenance).then(function (data) {
            if (data && data.preventivemaintenances && data.preventivemaintenances[0]) {
                return data.preventivemaintenances[0];
            }
            return null;
        }).catch(function (err) {
            console.log(err);
        });
    };
    PouchService.prototype.deletePreventivemaintenance = function (preventivemaintenance) {
        return this.db.rel.del('preventivemaintenance', preventivemaintenance).then(function (data) {
            return data && data.deleted ? data.deleted : false;
        }).catch(function (err) {
            console.log(err);
        });
    };
    /***********
   * EQUIPMENTCATEGORY
   **********/
    /**
     * Save a
     * @param {equipmentcat} Equipmentcat
     *
     * @return Promise<Equipmentcat>
     */
    PouchService.prototype.saveEquipmentcat = function (equipmentcat) {
        //equipmentcat.id = Math.floor(Date.now()).toString();
        return this.db.rel.save('equipmentcat', equipmentcat).then(function (data) {
            if (data && data.equipmentcats && data.equipmentcats[0]) {
                return data.equipmentcats[0];
            }
            return null;
        }).catch(function (err) {
            console.log(err);
        });
    };
    //Get All Equipmentcats
    PouchService.prototype.getEquipmentcats = function () {
        return this.db.rel.find('equipmentcat').then(function (data) {
            var equipmentcats = data.equipmentcats ? data.equipmentcats : [];
            var sortBy = 'DESC';
            switch (sortBy) {
                case 'ASC':
                    equipmentcats.sort(function (a, b) {
                        return (a.id > b.id) ? 1 : ((a.id > b.id) ? -1 : 0);
                    });
                    break;
                case 'DESC':
                    equipmentcats.sort(function (a, b) {
                        return (a.id > b.id) ? -1 : ((a.id > b.id) ? 1 : 0);
                    });
                    break;
                default:
                    break;
            }
            return equipmentcats;
        }).catch(function (err) {
            console.log(err);
        });
    };
    PouchService.prototype.getEquipmentcat = function (id) {
        return this.db.rel.find('equipmentcat', id).then(function (data) {
            return data && data.equipmentcats ? data.equipmentcats[0] : null;
        }).catch(function (err) {
            console.log(err);
        });
    };
    //Update Equipmentcat
    PouchService.prototype.updateEquipmentcat = function (equipmentcat) {
        return this.db.rel.save('equipmentcat', equipmentcat).then(function (data) {
            if (data && data.equipmentcats && data.equipmentcats[0]) {
                return data.equipmentcats[0];
            }
            return null;
        }).catch(function (err) {
            console.log(err);
        });
    };
    PouchService.prototype.deleteEquipmentcat = function (equipmentcat) {
        return this.db.rel.del('equipmentcat', equipmentcat).then(function (data) {
            return data && data.deleted ? data.deleted : false;
        }).catch(function (err) {
            console.log(err);
        });
    };
    /***********
   * EQUIPMENTPART
   **********/
    /**
     * Save a
     * @param {equipmentpart} Equipmentpart
     *
     * @return Promise<equipmentpart>
     */
    PouchService.prototype.saveEquipmentpart = function (equipmentpart) {
        equipmentpart.id = Math.floor(Date.now()).toString();
        return this.db.rel.save('equipmentpart', equipmentpart).then(function (data) {
            if (data && data.equipmentparts && data.equipmentparts[0]) {
                /* console.log(data.equipmentparts[0]); */
                return data.equipmentparts[0];
            }
            return null;
        }).catch(function (err) {
            console.log(err);
        });
    };
    //Get All equipmentparts
    PouchService.prototype.getEquipmentparts = function () {
        return this.db.rel.find('equipmentpart').then(function (data) {
            var equipmentparts = data.equipmentparts ? data.equipmentparts : [];
            var sortBy = 'DESC';
            switch (sortBy) {
                case 'ASC':
                    equipmentparts.sort(function (a, b) {
                        return (a.id > b.id) ? 1 : ((a.id > b.id) ? -1 : 0);
                    });
                    break;
                case 'DESC':
                    equipmentparts.sort(function (a, b) {
                        return (a.id > b.id) ? -1 : ((a.id > b.id) ? 1 : 0);
                    });
                    break;
                default:
                    break;
            }
            return equipmentparts;
        }).catch(function (err) {
            console.log(err);
        });
    };
    PouchService.prototype.getEquipmentpart = function (id) {
        return this.db.rel.find('equipmentpart', id).then(function (data) {
            return data && data.equipmentparts ? data.equipmentparts[0] : null;
        }).catch(function (err) {
            console.log(err);
        });
    };
    //Update equipmentpart
    PouchService.prototype.updateEquipmentpart = function (equipmentpart) {
        return this.db.rel.save('equipmentpart', equipmentpart).then(function (data) {
            if (data && data.equipmentparts && data.equipmentparts[0]) {
                return data.equipmentparts[0];
            }
            return null;
        }).catch(function (err) {
            console.log(err);
        });
    };
    PouchService.prototype.deleteEquipmentpart = function (equipmentpart) {
        return this.db.rel.del('equipmentpart', equipmentpart).then(function (data) {
            return data && data.deleted ? data.deleted : false;
        }).catch(function (err) {
            console.log(err);
        });
    };
    /***********
   * EQUIPMENTADD
   **********/
    /**
     * Save a
     * @param {equipmentsadd} Equipmentsadd
     *
     * @return Promise<equipmentsadd>
     */
    PouchService.prototype.saveEquipmentsadd = function (equipmenttag) {
        equipmenttag.id = Math.floor(Date.now()).toString();
        return this.db.rel.save('equipmenttag', equipmenttag).then(function (data) {
            if (data && data.equipmenttags && data.equipmenttags[0]) {
                /* console.log(data.equipmenttags[0]); */
                return data.equipmenttags[0];
            }
            return null;
        }).catch(function (err) {
            console.log(err);
        });
    };
    //Get All equipmentsadds
    PouchService.prototype.getEquipmentsadds = function () {
        return this.db.rel.find('equipmenttag').then(function (data) {
            var equipmenttags = data.equipmenttags ? data.equipmenttags : [];
            var sortBy = 'DESC';
            switch (sortBy) {
                case 'ASC':
                    equipmenttags.sort(function (a, b) {
                        return (a.id > b.id) ? 1 : ((a.id > b.id) ? -1 : 0);
                    });
                    break;
                case 'DESC':
                    equipmenttags.sort(function (a, b) {
                        return (a.id > b.id) ? -1 : ((a.id > b.id) ? 1 : 0);
                    });
                    break;
                default:
                    break;
            }
            return equipmenttags;
        }).catch(function (err) {
            console.log(err);
        });
    };
    PouchService.prototype.getEquipmentsadd = function (id) {
        return this.db.rel.find('equipmenttag', id).then(function (data) {
            return data && data.equipmenttags ? data.equipmenttags[0] : null;
        }).catch(function (err) {
            console.log(err);
        });
    };
    //Update equipmentsadd
    PouchService.prototype.updateEquipmentsadd = function (equipmenttag) {
        return this.db.rel.save('equipmenttag', equipmenttag).then(function (data) {
            if (data && data.equipmenttags && data.equipmenttags[0]) {
                return data.equipmenttags[0];
            }
            return null;
        }).catch(function (err) {
            console.log(err);
        });
    };
    PouchService.prototype.deleteEquipmentsadd = function (equipmenttag) {
        return this.db.rel.del('equipmenttag', equipmenttag).then(function (data) {
            return data && data.deleted ? data.deleted : false;
        }).catch(function (err) {
            console.log(err);
        });
    };
    /***********
  * faultregistry
  **********/
    /**
     * Save a faultregistry
     * @param {faultregistry} faultregistry
     *
     * @return Promise<faultregistry>
     */
    PouchService.prototype.savefaultregistry = function (faultregistry) {
        faultregistry.id = Math.floor(Date.now()).toString();
        return this.db.rel.save('faultregistry', faultregistry).then(function (data) {
            if (data && data.faultregistrys && data.faultregistrys[0]) {
                /* console.log(data.faultregistrys[0]); */
                return data.faultregistrys[0];
            }
            return null;
        }).catch(function (err) {
            console.log(err);
        });
    };
    //Get All faultregistrys
    PouchService.prototype.getfaultregistrys = function () {
        return this.db.rel.find('faultregistry').then(function (data) {
            var faultregistrys = data.faultregistrys ? data.faultregistrys : [];
            var sortBy = 'DESC';
            switch (sortBy) {
                case 'ASC':
                    faultregistrys.sort(function (a, b) {
                        return (a.id > b.id) ? 1 : ((a.id > b.id) ? -1 : 0);
                    });
                    break;
                case 'DESC':
                    faultregistrys.sort(function (a, b) {
                        return (a.id > b.id) ? -1 : ((a.id > b.id) ? 1 : 0);
                    });
                    break;
                default:
                    break;
            }
            return faultregistrys;
        }).catch(function (err) {
            console.log(err);
        });
    };
    PouchService.prototype.getfaultregistrys2 = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].of(this.db.rel.find('faultregistry').then(function (data) {
            var faultregistrys = data.faultregistrys ? data.faultregistrys : [];
            var sortBy = 'DESC';
            switch (sortBy) {
                case 'ASC':
                    faultregistrys.sort(function (a, b) {
                        return (a.id > b.id) ? 1 : ((a.id > b.id) ? -1 : 0);
                    });
                    break;
                case 'DESC':
                    faultregistrys.sort(function (a, b) {
                        return (a.id > b.id) ? -1 : ((a.id > b.id) ? 1 : 0);
                    });
                    break;
                default:
                    break;
            }
            return faultregistrys;
        }).catch(function (err) {
            console.log(err);
        }));
    };
    PouchService.prototype.getfaultregistry = function (id) {
        return this.db.rel.find('faultregistry', id).then(function (data) {
            return data && data.faultregistrys ? data.faultregistrys[0] : null;
        }).catch(function (err) {
            console.log(err);
        });
    };
    //Update faultregistry
    PouchService.prototype.updatefaultregistry = function (faultregistry) {
        return this.db.rel.save('faultregistry', faultregistry).then(function (data) {
            if (data && data.faultregistrys && data.faultregistrys[0]) {
                return data.faultregistrys[0];
            }
            return null;
        }).catch(function (err) {
            console.log(err);
        });
    };
    PouchService.prototype.deletefaultregistry = function (faultregistry) {
        return this.db.rel.del('faultregistry', faultregistry).then(function (data) {
            return data && data.deleted ? data.deleted : false;
        }).catch(function (err) {
            console.log(err);
        });
    };
    /***********
   * dailyreport
   **********/
    /**
     * Save a dailyreport
     * @param {dailyreport} dailyreport
     *
     * @return Promise<dailyreport>
     */
    PouchService.prototype.savedailyreport = function (dailyreport) {
        dailyreport.id = Math.floor(Date.now()).toString();
        return this.db.rel.save('dailyreport', dailyreport).then(function (data) {
            if (data && data.dailyreports && data.dailyreports[0]) {
                /* console.log(data.dailyreports[0]); */
                return data.dailyreports[0];
            }
            return null;
        }).catch(function (err) {
            console.log(err);
        });
    };
    //Get All dailyreports
    PouchService.prototype.getdailyreports = function () {
        return this.db.rel.find('dailyreport').then(function (data) {
            var dailyreports = data.dailyreports ? data.dailyreports : [];
            var sortBy = 'DESC';
            switch (sortBy) {
                case 'ASC':
                    dailyreports.sort(function (a, b) {
                        return (a.id > b.id) ? 1 : ((a.id > b.id) ? -1 : 0);
                    });
                    break;
                case 'DESC':
                    dailyreports.sort(function (a, b) {
                        return (a.id > b.id) ? -1 : ((a.id > b.id) ? 1 : 0);
                    });
                    break;
                default:
                    break;
            }
            return dailyreports;
        }).catch(function (err) {
            console.log(err);
        });
    };
    PouchService.prototype.getdailyreports2 = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].of(this.db.rel.find('dailyreport').then(function (data) {
            var dailyreports = data.dailyreports ? data.dailyreports : [];
            var sortBy = 'DESC';
            switch (sortBy) {
                case 'ASC':
                    dailyreports.sort(function (a, b) {
                        return (a.id > b.id) ? 1 : ((a.id > b.id) ? -1 : 0);
                    });
                    break;
                case 'DESC':
                    dailyreports.sort(function (a, b) {
                        return (a.id > b.id) ? -1 : ((a.id > b.id) ? 1 : 0);
                    });
                    break;
                default:
                    break;
            }
            return dailyreports;
        }).catch(function (err) {
            console.log(err);
        }));
    };
    PouchService.prototype.getdailyreport = function (id) {
        return this.db.rel.find('dailyreport', id).then(function (data) {
            return data && data.dailyreports ? data.dailyreports[0] : null;
        }).catch(function (err) {
            console.log(err);
        });
    };
    //Update dailyreport
    PouchService.prototype.updatedailyreport = function (dailyreport) {
        return this.db.rel.save('dailyreport', dailyreport).then(function (data) {
            if (data && data.dailyreports && data.dailyreports[0]) {
                return data.dailyreports[0];
            }
            return null;
        }).catch(function (err) {
            console.log(err);
        });
    };
    PouchService.prototype.deletedailyreport = function (dailyreport) {
        return this.db.rel.del('dailyreport', dailyreport).then(function (data) {
            return data && data.deleted ? data.deleted : false;
        }).catch(function (err) {
            console.log(err);
        });
    };
    /***********
  * Material
  **********/
    /**
     * Save a
     * @param {material} material
     *
     * @return Promise<material>
     */
    PouchService.prototype.savematerial = function (material) {
        material.id = Math.floor(Date.now()).toString();
        return this.db.rel.save('material', material).then(function (data) {
            if (data && data.materials && data.materials[0]) {
                /* console.log(data.materials[0]); */
                return data.materials[0];
            }
            return null;
        }).catch(function (err) {
            console.log(err);
        });
    };
    //Get All materials
    PouchService.prototype.getmaterials = function () {
        return this.db.rel.find('material').then(function (data) {
            var materials = data.materials ? data.materials : [];
            var sortBy = 'DESC';
            switch (sortBy) {
                case 'ASC':
                    materials.sort(function (a, b) {
                        return (a.id > b.id) ? 1 : ((a.id > b.id) ? -1 : 0);
                    });
                    break;
                case 'DESC':
                    materials.sort(function (a, b) {
                        return (a.id > b.id) ? -1 : ((a.id > b.id) ? 1 : 0);
                    });
                    break;
                default:
                    break;
            }
            return materials;
        }).catch(function (err) {
            console.log(err);
        });
    };
    PouchService.prototype.getmaterial = function (id) {
        return this.db.rel.find('material', id).then(function (data) {
            return data && data.materials ? data.materials[0] : null;
        }).catch(function (err) {
            console.log(err);
        });
    };
    //Update material
    PouchService.prototype.updatematerial = function (material) {
        return this.db.rel.save('material', material).then(function (data) {
            if (data && data.materials && data.materials[0]) {
                return data.materials[0];
            }
            return null;
        }).catch(function (err) {
            console.log(err);
        });
    };
    PouchService.prototype.deletematerial = function (material) {
        return this.db.rel.del('material', material).then(function (data) {
            return data && data.deleted ? data.deleted : false;
        }).catch(function (err) {
            console.log(err);
        });
    };
    PouchService.prototype.takePhoto = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this._CAMERA.getPicture({
                destinationType: _this._CAMERA.DestinationType.DATA_URL,
                targetWidth: 320,
                targetHeight: 240
            }).then(function (data) {
                _this.cameraImage = "data:image/jpeg;base64," + data;
                resolve(_this.cameraImage);
            });
        });
    };
    PouchService.prototype.selectPhotograph = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var cameraOptions = {
                sourceType: _this._CAMERA.PictureSourceType.PHOTOLIBRARY,
                destinationType: _this._CAMERA.DestinationType.DATA_URL,
                quality: 100,
                targetWidth: 320,
                targetHeight: 240,
                encodingType: _this._CAMERA.EncodingType.JPEG,
                correctOrientation: true
            };
            _this._CAMERA.getPicture(cameraOptions).then(function (data) {
                _this.cameraImage = "data:image/jpeg;base64," + data;
                resolve(_this.cameraImage);
            });
        });
    };
    PouchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["o" /* LoadingController */]])
    ], PouchService);
    return PouchService;
}());

//# sourceMappingURL=pouch.service.js.map

/***/ })

},[381]);
//# sourceMappingURL=main.js.map