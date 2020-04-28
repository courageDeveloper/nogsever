webpackJsonp([27],{

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "materialPageModule", function() { return materialPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material__ = __webpack_require__(846);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var materialPageModule = /** @class */ (function () {
    function materialPageModule() {
    }
    materialPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__material__["a" /* MaterialPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__material__["a" /* MaterialPage */]),
            ],
        })
    ], materialPageModule);
    return materialPageModule;
}());

//# sourceMappingURL=material.module.js.map

/***/ }),

/***/ 846:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pouch_service_pouch_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(93);
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
 * Generated class for the materialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MaterialPage = /** @class */ (function () {
    function MaterialPage(navCtrl, http, alertCtrl, db, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.db = db;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.filteredmaterial = [];
        this.material = [];
        this.show = false;
        this.showButton = false;
        this.alert = false;
        this.tableCheck = false;
        /* handleFiles(event) {
          console.log(event);
          this.files = event.target.files;
          console.log(this.files);
      
          var reader: FileReader = new FileReader();
          reader.readAsDataURL(this.files[0]);
          console.log(reader);
      
          reader.onload = (e) => {
            this.convertFiles = reader.result;
            console.log(this.convertFiles);
            return new Promise((resolve, reject) => {
              var url = this.convertFiles;
              var oReq = new XMLHttpRequest();
              var workbook: any;
              oReq.open("GET", url, true);
              oReq.responseType = "arraybuffer";
              oReq.onload = (e) => {
                if (oReq.status >= 200 && oReq.status < 300) {
                  var arraybuffer = oReq.response;
                  var data = new Uint8Array(arraybuffer);
                  var arr = new Array();
                  for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
                  var bstr = arr.join("");
                  workbook = XLSX.read(bstr, { type: "binary" });
                  var worksheetname = workbook.SheetNames[0];
                  var worksheet = workbook.Sheets[worksheetname];
                  var json = XLSX.utils.sheet_to_json(worksheet, { raw: true });
      
                  json.forEach(item => {
                    var arrayCheck = ['NAME', 'TAG', 'SIZE', 'SPEC', 'DESIGN CONDITION', 'MATERIAL', 'P&ID', 'DESIGN TEMPERATURE', 'CORROSION ALLOWANCE'];
                    for (var i = 0; i < arrayCheck.length; i++) {
                      console.log(item[arrayCheck[i]]);
                      if (item[arrayCheck[i]] == undefined) {
                        item[arrayCheck[i]] = 'N/A';
                      }
                    }
                    var equipmet = {
                      id: Math.round((new Date()).getTime()).toString(),
                      rev: '',
                      name: item['NAME'],
                      tag: item['TAG'],
                      size: item['SIZE'],
                      designcondition: item['DESIGN CONDITION'],
                      designtemperature: item['DESIGN TEMPERATURE'],
                      additionalinfo: 'MATERIAL: ' + item['MATERIAL'] + ' P&ID: ' + item['P&ID'] + ' CORROSION ALLOWANCE: ' + item['CORROSION ALLOWANCE'],
                      materialparts: []
                    }
                    this.db.savematerialcat(equipmet).then(res => {
                      this._loadmaterialcats();
                    });
                  })
                  resolve('Finished generating JSON');
                } else {
                  reject(console.log('XMLHttpRequest failed; error code:' + oReq.statusText));
                }
              }
              oReq.send();
            });
          }
      
        } */
        this.trackByName = function (index, item) {
            return item.id;
        };
    }
    MaterialPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.localStorageItem = JSON.parse(localStorage.getItem('user'));
        console.log('ionViewDidLoad materialPage');
        this.db.getSupervisor(this.localStorageItem).then(function (item) {
            _this.user = item;
            _this.position = item.post;
            if (_this.position == 'Manager' || _this.position == 'Supervisor' || _this.position == 'Admin') {
                _this.showButton = true;
            }
        });
        this._loadmaterialcats();
    };
    /**
     * On display page
     */
    MaterialPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.localStorageItem = JSON.parse(localStorage.getItem('user'));
        this.db.getSupervisor(this.localStorageItem).then(function (item) {
            _this.user = item;
            _this.position = item.post;
            if (_this.position == 'Manager' || _this.position == 'Supervisor' || _this.position == 'Admin') {
                _this.showButton = true;
            }
        });
        this._loadmaterialcats();
    };
    MaterialPage.prototype._loadmaterialcats = function () {
        var _this = this;
        this.db.getmaterials()
            .then(function (material) {
            _this.filteredmaterial = material;
            _this.material = material;
        });
    };
    MaterialPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    MaterialPage.prototype.newmaterialcat = function () {
        var _this = this;
        var modal = this.modalCtrl.create('AddmaterialPage', { type: 'Add' });
        modal.onDidDismiss(function (data) {
            if (data) {
                _this._loadmaterialcats();
            }
        });
        modal.present();
    };
    MaterialPage.prototype.openmaterialcat = function (material) {
        var _this = this;
        var modal = this.modalCtrl.create('AddmaterialPage', { type: 'Edit', material: material });
        modal.onDidDismiss(function (data) {
            _this._loadmaterialcats();
        });
        modal.present();
    };
    MaterialPage.prototype.filtermaterialcats = function ($event) {
        var value = $event.target.value ? $event.target.value.toLowerCase() : '';
        this.filteredmaterial = [];
        for (var _i = 0, _a = this.material; _i < _a.length; _i++) {
            var material = _a[_i];
            if (material.name.toLowerCase().indexOf(value) !== -1) {
                this.filteredmaterial.push(material);
            }
        }
    };
    MaterialPage.prototype.deletematerialcat = function (material) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Delete material category',
            message: 'Are you sure you want to delete material category: ' + material.name,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Confirm',
                    handler: function () {
                        _this.db.deletematerial(material)
                            .then(function (success) {
                            _this._loadmaterialcats();
                            _this.tableCheck = false;
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    MaterialPage.prototype.activate = function () {
        this.show = true;
    };
    MaterialPage.prototype.checkboxClicked = function (material, event) {
        if (event._value) {
            material['selected'] = true;
        }
        else {
            material['selected'] = false;
        }
        this.newMaterials = this.material.filter(function (data) { return data['selected'] == true; });
        if (this.newMaterials.length > 0) {
            this.tableCheck = true;
            event._value = true;
        }
        else {
            this.tableCheck = false;
        }
    };
    MaterialPage.prototype.deleteSelected = function () {
        var _this = this;
        if (this.showButton == true) {
            var alert_1 = this.alertCtrl.create({
                title: 'Delete Material',
                message: 'Are you sure you want to delete Selected Materials ',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    },
                    {
                        text: 'Confirm',
                        handler: function () {
                            _this.newMaterials.forEach(function (material) {
                                _this.db.deletematerial(material)
                                    .then(function (success) {
                                    _this._loadmaterialcats();
                                });
                            });
                        }
                    }
                ]
            });
            alert_1.present();
        }
    };
    MaterialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-material',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\material\material.html"*/'<ion-header>\n\n  <ion-toolbar color="primary">\n\n    <ion-title>Material List</ion-title>\n\n\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-primary50">\n\n\n\n  <ion-toolbar color="primary">\n\n    <ion-searchbar (ionInput)="filtermaterialcats($event)"></ion-searchbar>\n\n  </ion-toolbar>\n\n\n\n  <ion-fab top right>\n\n    <button ion-fab mini (click)="newmaterialcat()" color="secondary"><ion-icon name="ios-construct"></ion-icon></button>\n\n  </ion-fab>\n\n\n\n  <div class="wrapper" *ngIf="tableCheck">\n\n    <button class="align-center" color="primary" title="Delete Material" ion-fab mini (click)="deleteSelected()"><ion-icon\n\n        name="trash"></ion-icon></button>\n\n  </div>\n\n\n\n  <!-- <button ion-button small *ngIf="!show" class="align-right"  (click)="activate()" color="secondary">Import</button>\n\n  <button ion-button small *ngIf="show" class="align-right" color="secondary"><a href="assets/images/samplematerials.xlsx">Download Sample</a></button>\n\n  <input accept="*" *ngIf="show" class="margin-btm" type="file" (change)="handleFiles($event)" /> -->\n\n  <ion-list style="width: 100%" [virtualScroll]="filteredmaterial" [virtualTrackBy]="trackByName" [approxItemHeight]="\'200px\'">\n\n    <ion-card *virtualItem="let material" style="margin-top: 5px; margin-bottom: 10px;">\n\n      <ion-card-content (press)="deletematerialcat(material, i)">\n\n        <ion-row>\n\n          <ion-item>\n\n            <ion-checkbox color="primary" (ionChange)="checkboxClicked(material, $event)"></ion-checkbox>\n\n          </ion-item>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-item>\n\n            <ion-icon color="secondary" item-right small name="md-create" (click)="openmaterialcat(material)"></ion-icon>\n\n            <ion-icon color="danger" item-right small name="ios-trash" (click)="deletematerialcat(material, i)"></ion-icon>\n\n\n\n          </ion-item>\n\n        </ion-row>\n\n        <ion-row (click)="openmaterialcat(material)">\n\n          <h2 text-bold text-uppercase><strong>Date:</strong> {{material.date }}</h2>\n\n        </ion-row>\n\n        <ion-row (click)="openmaterialcat(material)">\n\n          <h2 text-bold text-uppercase><strong>Name:</strong> {{material.name }}</h2>\n\n          <p ion-text class="list-price"><strong>Quantity:</strong> {{ material.quantity }}</p>\n\n        </ion-row>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-list>\n\n  <ion-fab bottom left>\n\n    <button ion-fab mini (click)="back()">\n\n      <ion-icon name="arrow-back"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\material\material.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__pouch_service_pouch_service__["a" /* PouchService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */]])
    ], MaterialPage);
    return MaterialPage;
}());

//# sourceMappingURL=material.js.map

/***/ })

});
//# sourceMappingURL=27.js.map