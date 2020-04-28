webpackJsonp([8],{

/***/ 762:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyreportPageModule", function() { return DailyreportPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dailyreport__ = __webpack_require__(843);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_auto_complete__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_auto_complete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_auto_complete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_froala_wysiwyg__ = __webpack_require__(806);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DailyreportPageModule = /** @class */ (function () {
    function DailyreportPageModule() {
    }
    DailyreportPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dailyreport__["a" /* DailyreportPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dailyreport__["a" /* DailyreportPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ng2_auto_complete__["Ng2AutoCompleteModule"],
                __WEBPACK_IMPORTED_MODULE_4_angular_froala_wysiwyg__["a" /* FroalaEditorModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_angular_froala_wysiwyg__["b" /* FroalaViewModule */].forRoot()
            ],
        })
    ], DailyreportPageModule);
    return DailyreportPageModule;
}());

//# sourceMappingURL=dailyreport.module.js.map

/***/ }),

/***/ 797:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_directive__ = __webpack_require__(798);
/* unused harmony reexport FroalaEditorDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_module__ = __webpack_require__(807);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__editor_module__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 798:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FroalaEditorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(22);
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


var FroalaEditorDirective = /** @class */ (function () {
    function FroalaEditorDirective(el, zone) {
        this.zone = zone;
        // editor options
        this._opts = {
            immediateAngularModelUpdate: false,
            angularIgnoreAttrs: null
        };
        this.SPECIAL_TAGS = ['img', 'button', 'input', 'a'];
        this.INNER_HTML_ATTR = 'innerHTML';
        this._hasSpecialTag = false;
        this._listeningEvents = [];
        this._editorInitialized = false;
        this._oldModel = null;
        // Begin ControlValueAccesor methods.
        this.onChange = function (_) { };
        this.onTouched = function () { };
        // froalaModel directive as output: update model if editor contentChanged
        this.froalaModelChange = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        // froalaInit directive as output: send manual editor initialization
        this.froalaInit = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        var element = el.nativeElement;
        // check if the element is a special tag
        if (this.SPECIAL_TAGS.indexOf(element.tagName.toLowerCase()) != -1) {
            this._hasSpecialTag = true;
        }
        // jquery wrap and store element
        this._$element = $(element);
        this.zone = zone;
    }
    FroalaEditorDirective_1 = FroalaEditorDirective;
    // Form model content changed.
    FroalaEditorDirective.prototype.writeValue = function (content) {
        this.updateEditor(content);
    };
    FroalaEditorDirective.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    FroalaEditorDirective.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    Object.defineProperty(FroalaEditorDirective.prototype, "froalaEditor", {
        // End ControlValueAccesor methods.
        // froalaEditor directive as input: store the editor options
        set: function (opts) {
            this._opts = opts || this._opts;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FroalaEditorDirective.prototype, "froalaModel", {
        // froalaModel directive as input: store initial editor content
        set: function (content) {
            this.updateEditor(content);
        },
        enumerable: true,
        configurable: true
    });
    // Update editor with model contents.
    FroalaEditorDirective.prototype.updateEditor = function (content) {
        if (JSON.stringify(this._oldModel) == JSON.stringify(content)) {
            return;
        }
        if (!this._hasSpecialTag) {
            this._oldModel = content;
        }
        else {
            this._model = content;
        }
        if (this._editorInitialized) {
            if (!this._hasSpecialTag) {
                this._$element.froalaEditor('html.set', content);
            }
            else {
                this.setContent();
            }
        }
        else {
            if (!this._hasSpecialTag) {
                this._$element.html(content);
            }
            else {
                this.setContent();
            }
        }
    };
    // update model if editor contentChanged
    FroalaEditorDirective.prototype.updateModel = function () {
        var _this = this;
        this.zone.run(function () {
            var modelContent = null;
            if (_this._hasSpecialTag) {
                var attributeNodes = _this._$element[0].attributes;
                var attrs = {};
                for (var i = 0; i < attributeNodes.length; i++) {
                    var attrName = attributeNodes[i].name;
                    if (_this._opts.angularIgnoreAttrs && _this._opts.angularIgnoreAttrs.indexOf(attrName) != -1) {
                        continue;
                    }
                    attrs[attrName] = attributeNodes[i].value;
                }
                if (_this._$element[0].innerHTML) {
                    attrs[_this.INNER_HTML_ATTR] = _this._$element[0].innerHTML;
                }
                modelContent = attrs;
            }
            else {
                var returnedHtml = _this._$element.froalaEditor('html.get');
                if (typeof returnedHtml === 'string') {
                    modelContent = returnedHtml;
                }
            }
            _this._oldModel = modelContent;
            // Update froalaModel.
            _this.froalaModelChange.emit(modelContent);
            // Update form model.
            _this.onChange(modelContent);
        });
    };
    // register event on jquery element
    FroalaEditorDirective.prototype.registerEvent = function (element, eventName, callback) {
        if (!element || !eventName || !callback) {
            return;
        }
        this._listeningEvents.push(eventName);
        element.on(eventName, callback);
    };
    FroalaEditorDirective.prototype.initListeners = function () {
        var self = this;
        // bind contentChange and keyup event to froalaModel
        this.registerEvent(this._$element, 'froalaEditor.contentChanged', function () {
            setTimeout(function () {
                self.updateModel();
            }, 0);
        });
        if (this._opts.immediateAngularModelUpdate) {
            this.registerEvent(this._editor, 'keyup', function () {
                setTimeout(function () {
                    self.updateModel();
                }, 0);
            });
        }
    };
    // register events from editor options
    FroalaEditorDirective.prototype.registerFroalaEvents = function () {
        if (!this._opts.events) {
            return;
        }
        for (var eventName in this._opts.events) {
            if (this._opts.events.hasOwnProperty(eventName)) {
                this.registerEvent(this._$element, eventName, this._opts.events[eventName]);
            }
        }
    };
    FroalaEditorDirective.prototype.createEditor = function () {
        var _this = this;
        if (this._editorInitialized) {
            return;
        }
        this.setContent(true);
        // Registering events before initializing the editor will bind the initialized event correctly.
        this.registerFroalaEvents();
        this.initListeners();
        // init editor
        this.zone.runOutsideAngular(function () {
            _this._$element.on('froalaEditor.initialized', function () {
                _this._editorInitialized = true;
            });
            _this._editor = _this._$element.froalaEditor(_this._opts).data('froala.editor').$el;
        });
    };
    FroalaEditorDirective.prototype.setHtml = function () {
        this._$element.froalaEditor('html.set', this._model || '', true);
        // This will reset the undo stack everytime the model changes externally. Can we fix this?
        this._$element.froalaEditor('undo.reset');
        this._$element.froalaEditor('undo.saveStep');
    };
    FroalaEditorDirective.prototype.setContent = function (firstTime) {
        if (firstTime === void 0) { firstTime = false; }
        var self = this;
        // Set initial content
        if (this._model || this._model == '') {
            this._oldModel = this._model;
            if (this._hasSpecialTag) {
                var tags = this._model;
                // add tags on element
                if (tags) {
                    for (var attr in tags) {
                        if (tags.hasOwnProperty(attr) && attr != this.INNER_HTML_ATTR) {
                            this._$element.attr(attr, tags[attr]);
                        }
                    }
                    if (tags.hasOwnProperty(this.INNER_HTML_ATTR)) {
                        this._$element[0].innerHTML = tags[this.INNER_HTML_ATTR];
                    }
                }
            }
            else {
                if (firstTime) {
                    this.registerEvent(this._$element, 'froalaEditor.initialized', function () {
                        self.setHtml();
                    });
                }
                else {
                    self.setHtml();
                }
            }
        }
    };
    FroalaEditorDirective.prototype.destroyEditor = function () {
        if (this._editorInitialized) {
            this._$element.off(this._listeningEvents.join(" "));
            this._editor.off('keyup');
            this._$element.froalaEditor('destroy');
            this._listeningEvents.length = 0;
            this._editorInitialized = false;
        }
    };
    FroalaEditorDirective.prototype.getEditor = function () {
        if (this._$element) {
            return this._$element.froalaEditor.bind(this._$element);
        }
        return null;
    };
    // send manual editor initialization
    FroalaEditorDirective.prototype.generateManualController = function () {
        var self = this;
        var controls = {
            initialize: this.createEditor.bind(this),
            destroy: this.destroyEditor.bind(this),
            getEditor: this.getEditor.bind(this),
        };
        this.froalaInit.emit(controls);
    };
    // TODO not sure if ngOnInit is executed after @inputs
    FroalaEditorDirective.prototype.ngOnInit = function () {
        // check if output froalaInit is present. Maybe observers is private and should not be used?? TODO how to better test that an output directive is present.
        if (!this.froalaInit.observers.length) {
            this.createEditor();
        }
        else {
            this.generateManualController();
        }
    };
    FroalaEditorDirective.prototype.ngOnDestroy = function () {
        this.destroyEditor();
    };
    var FroalaEditorDirective_1;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FroalaEditorDirective.prototype, "froalaEditor", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FroalaEditorDirective.prototype, "froalaModel", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"])
    ], FroalaEditorDirective.prototype, "froalaModelChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"])
    ], FroalaEditorDirective.prototype, "froalaInit", void 0);
    FroalaEditorDirective = FroalaEditorDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"])({
            selector: '[froalaEditor]',
            exportAs: 'froalaEditor',
            providers: [{
                    provide: __WEBPACK_IMPORTED_MODULE_0__angular_forms__["NG_VALUE_ACCESSOR"], useExisting: Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return FroalaEditorDirective_1; }),
                    multi: true
                }]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgZone"]])
    ], FroalaEditorDirective);
    return FroalaEditorDirective;
}());

//# sourceMappingURL=editor.directive.js.map

/***/ }),

/***/ 799:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view_directive__ = __webpack_require__(800);
/* unused harmony reexport FroalaViewDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_module__ = __webpack_require__(808);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__view_module__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 800:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FroalaViewDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FroalaViewDirective = /** @class */ (function () {
    function FroalaViewDirective(renderer, element) {
        this.renderer = renderer;
        this._element = element.nativeElement;
    }
    Object.defineProperty(FroalaViewDirective.prototype, "froalaView", {
        // update content model as it comes
        set: function (content) {
            this._element.innerHTML = content;
        },
        enumerable: true,
        configurable: true
    });
    FroalaViewDirective.prototype.ngAfterViewInit = function () {
        this.renderer.setElementClass(this._element, "fr-view", true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], FroalaViewDirective.prototype, "froalaView", null);
    FroalaViewDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[froalaView]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], FroalaViewDirective);
    return FroalaViewDirective;
}());

//# sourceMappingURL=view.directive.js.map

/***/ }),

/***/ 806:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FERootModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor__ = __webpack_require__(797);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view__ = __webpack_require__(799);
/* unused harmony reexport FroalaEditorDirective */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__editor__["a"]; });
/* unused harmony reexport FroalaViewDirective */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__view__["a"]; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MODULES = [
    __WEBPACK_IMPORTED_MODULE_1__editor__["a" /* FroalaEditorModule */],
    __WEBPACK_IMPORTED_MODULE_2__view__["a" /* FroalaViewModule */]
];
var FERootModule = /** @class */ (function () {
    function FERootModule() {
    }
    FERootModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__editor__["a" /* FroalaEditorModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__view__["a" /* FroalaViewModule */].forRoot()
            ],
            exports: MODULES
        })
    ], FERootModule);
    return FERootModule;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 807:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FroalaEditorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_directive__ = __webpack_require__(798);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FroalaEditorModule = /** @class */ (function () {
    function FroalaEditorModule() {
    }
    FroalaEditorModule_1 = FroalaEditorModule;
    FroalaEditorModule.forRoot = function () {
        return { ngModule: FroalaEditorModule_1, providers: [] };
    };
    var FroalaEditorModule_1;
    FroalaEditorModule = FroalaEditorModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__editor_directive__["a" /* FroalaEditorDirective */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__editor_directive__["a" /* FroalaEditorDirective */]]
        })
    ], FroalaEditorModule);
    return FroalaEditorModule;
}());

//# sourceMappingURL=editor.module.js.map

/***/ }),

/***/ 808:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FroalaViewModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_directive__ = __webpack_require__(800);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FroalaViewModule = /** @class */ (function () {
    function FroalaViewModule() {
    }
    FroalaViewModule_1 = FroalaViewModule;
    FroalaViewModule.forRoot = function () {
        return { ngModule: FroalaViewModule_1, providers: [] };
    };
    var FroalaViewModule_1;
    FroalaViewModule = FroalaViewModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__view_directive__["a" /* FroalaViewDirective */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__view_directive__["a" /* FroalaViewDirective */]]
        })
    ], FroalaViewModule);
    return FroalaViewModule;
}());

//# sourceMappingURL=view.module.js.map

/***/ }),

/***/ 843:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DailyreportPage; });
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
 * Generated class for the DailyreportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DailyreportPage = /** @class */ (function () {
    function DailyreportPage(navCtrl, navParams, db, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.viewCtrl = viewCtrl;
        this.add = false;
        this.title = 'Edit';
        this.search = false;
        this.disabled = false;
        this.localStorageItem = JSON.parse(localStorage.getItem('user'));
        if (this.navParams.get('type') == 'Add') {
            this.add = true;
            this.title = 'Add';
            this.dailyreport = {
                id: Math.round((new Date()).getTime()).toString(),
                rev: '',
                datecreated: new Date().toJSON().slice(0, 10).replace(/-/g, '-'),
                staffid: '',
                staffname: '',
                department: 'Mechanical',
                optrain1: '',
                optrain2: '',
                opsurgevessel: '',
                otnpdc: '',
                tgngc: '',
                tghp: '',
                tglp: '',
                tvfuelgas: '',
                gascompressor1: 'Running',
                gascompressor2: 'Standby',
                pt1: 'Standby',
                pt2: 'Standby',
                iaircompressora: 'Standby',
                iaircompressorb: 'Standby',
                gasgen1: 'Running',
                gasgen3: 'Running',
                gasgen4: 'Faulty',
                gasgen5: 'Faulty',
                dieselgenset: 'Running',
                dailyactivities: ''
            };
        }
        else {
            this.dailyreport = this.navParams.get('dailyreport');
        }
    }
    DailyreportPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.db.getSupervisor(this.localStorageItem).then(function (item) {
            _this.user = item;
            _this.position = item.post;
            _this.selectedDepartment = "Mechanical";
            if (_this.position == 'Manager' || _this.position == 'Admin') {
                _this.disabled = true;
            }
        });
        this.selectedGas = "Down";
        console.log('ionViewDidLoad DailyreportPage');
        this.statuses = ["Running", "Standby", "Faulty"];
        this.departments = ["Process Operations", "HSE", "Instrument", "Mechanical", "Electrical"];
    };
    DailyreportPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.localStorageItem = JSON.parse(localStorage.getItem('user'));
        this.db.getSupervisor(this.localStorageItem).then(function (item) {
            _this.user = item;
            _this.position = item.post;
            if (_this.position == 'Manager' || _this.position == 'Admin') {
                _this.disabled = true;
            }
        });
    };
    DailyreportPage.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
        this.slides.lockSwipes(true);
        this.startSlide = this.slides.isBeginning();
    };
    DailyreportPage.prototype.next = function () {
        this.slides.lockSwipes(false);
        this.slides.slideNext(500, true);
    };
    DailyreportPage.prototype.prev = function () {
        this.slides.lockSwipes(false);
        this.slides.slidePrev(500, true);
    };
    DailyreportPage.prototype.home = function () {
        if (this.position == 'Manager') {
            this.navCtrl.setRoot('HomePage');
        }
        else if (this.position == 'Supervisor') {
            this.navCtrl.setRoot('SupervisorhomePage');
        }
        else if (this.position == 'Admin') {
            this.navCtrl.setRoot('AdminHomePage');
        }
        else {
            this.navCtrl.setRoot('OperatorhomePage');
        }
    };
    DailyreportPage.prototype.submit = function () {
        var _this = this;
        if (this.add) {
            this.dailyreport.staffid = this.user.id;
            this.dailyreport.staffname = this.user.name;
            this.db.savedailyreport(this.dailyreport).then(function (res) {
                _this.viewCtrl.dismiss();
            });
        }
        else {
            this.db.updatedailyreport(this.dailyreport).then(function (res) {
                _this.viewCtrl.dismiss();
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Slides */])
    ], DailyreportPage.prototype, "slides", void 0);
    DailyreportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dailyreport',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\dailyreport\dailyreport.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-toolbar color="primary">\n\n    <ion-title>\n\n      <ion-buttons>\n\n        <button (click)="home()" ion-button icon-only>\n\n          <ion-icon name="ios-home"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-title>\n\n\n\n  </ion-toolbar>\n\n</ion-header>\n\n<!-- Themes  register-flat-->\n\n<ion-content class="background-image">\n\n  <ion-grid no-padding class="bg-color">\n\n    <ion-row header align-items-start align-items-stretch>\n\n      <!-- Section form>-->\n\n      <ion-col class="margin-top" col-10 offset-1 col-md-10 offset-md-1>\n\n        <ion-slides (ionSlideDidChange)="slideChanged()">\n\n          <ion-slide>\n\n            <form no-padding>\n\n\n\n              <ion-row class="wlm-msg" align-items-start>\n\n                <ion-col align-self-baseline col-12>\n\n                  <ion-list text-center>\n\n                    <img src="assets/images/NOG-LOGO.jpg" class="img-size" />\n\n                  </ion-list>\n\n                  <h1><strong>Daily Report</strong></h1>\n\n                  <h2> <b>Production Report</b> </h2>\n\n                </ion-col>\n\n              </ion-row>\n\n              <!-- Input-field -->\n\n              <ion-row>\n\n                <ion-col col-6>\n\n                  <fieldset [disabled]="disabled">\n\n                    <strong class="oil">Oil Production</strong>\n\n\n\n                    <div input-field>\n\n                      <!-- Input-field-text -->\n\n                      <ion-item>\n\n                        <ion-input placeholder="Oil produced from oil stabilization train 1" type="text" [(ngModel)]="dailyreport.optrain1" name="optrain1"></ion-input>\n\n                      </ion-item>\n\n                    </div>\n\n                    <div input-field>\n\n                      <!-- Input-field-text -->\n\n                      <ion-item>\n\n                        <ion-input placeholder="Oil produced from oil stabilization train 2" type="text" [(ngModel)]="dailyreport.optrain2" name="optrain2"></ion-input>\n\n                      </ion-item>\n\n                    </div>\n\n                    <div input-field>\n\n                      <!-- Input-field-text -->\n\n                      <ion-item>\n\n                        <ion-input placeholder="Oil produced to surge vessel" type="text" [(ngModel)]="dailyreport.opsurgevessel" name="opsurgevessel"></ion-input>\n\n                      </ion-item>\n\n                    </div>\n\n                    <div input-field>\n\n                      <!-- Input-field-text -->\n\n                      <ion-item>\n\n                        <ion-input placeholder="Oil transferred to NPDC storage tank" type="text" [(ngModel)]="dailyreport.otnpdc" name="otnpdc"></ion-input>\n\n                      </ion-item>\n\n                    </div>\n\n                    <br>\n\n                  </fieldset>\n\n                </ion-col>\n\n                <ion-col col-6>\n\n                  <fieldset [disabled]="disabled">\n\n                    <strong class="gas">Gas Production</strong>\n\n                    <div input-field>\n\n                      <!-- Input-field-text -->\n\n                      <ion-item>\n\n                        <ion-input placeholder="Total gas exported to NGC" type="text" [(ngModel)]="dailyreport.tgngc" name="tgngc"></ion-input>\n\n                      </ion-item>\n\n                    </div>\n\n                    <div input-field>\n\n                      <!-- Input-field-text -->\n\n                      <ion-item>\n\n                        <ion-input placeholder="Total gas fled from HP" type="text" [(ngModel)]="dailyreport.tghp" name="tghp"></ion-input>\n\n                      </ion-item>\n\n                    </div>\n\n                    <div input-field>\n\n                      <!-- Input-field-text -->\n\n                      <ion-item>\n\n                        <ion-input placeholder="Total gas fled from LP" type="text" [(ngModel)]="dailyreport.tglp" name="tglp"></ion-input>\n\n                      </ion-item>\n\n                    </div>\n\n                    <div input-field>\n\n                      <!-- Input-field-text -->\n\n                      <ion-item>\n\n                        <ion-input placeholder="Total volume of fuel gas" type="text" [(ngModel)]="dailyreport.tvfuelgas" name="tvfuelgas"></ion-input>\n\n                      </ion-item>\n\n                    </div>\n\n                    <br>\n\n                  </fieldset>\n\n                </ion-col>\n\n                <!-- Login button -->\n\n                <ion-col col-12 no-padding>\n\n                  <button no-margin ion-button color="primary" full text-uppercase (click)="next()">Next</button>\n\n                </ion-col>\n\n\n\n              </ion-row>\n\n\n\n            </form>\n\n          </ion-slide>\n\n          <ion-slide>\n\n            <form padding>\n\n              <ion-row class="wlm-msg" align-items-start>\n\n                <ion-col align-self-baseline col-12>\n\n                  <ion-list text-center>\n\n                    <img src="assets/images/NOG-LOGO.jpg" class="img-size" />\n\n                  </ion-list>\n\n                  <h1><strong>Equipment Status</strong></h1>\n\n                </ion-col>\n\n              </ion-row>\n\n              <!-- Input-field -->\n\n              <ion-row>\n\n                <ion-col col-12>\n\n                  <div>\n\n                    <fieldset [disabled]="disabled">\n\n                      <div input-field>\n\n                        <!-- Input-field-password -->\n\n                        <!-- <ion-label><strong>Gas Compressor 1</strong></ion-label> -->\n\n                        <ion-item>\n\n                          <ion-label>Gas Compressor 1</ion-label>\n\n                          <ion-select [(ngModel)]="dailyreport.gascompressor1" name="gascompressor1">\n\n                            <ion-option *ngFor="let gascompressor1 of statuses" [value]="gascompressor1" [selected]="selectedGas == gascompressor1">{{gascompressor1}}</ion-option>\n\n                          </ion-select>\n\n                        </ion-item>\n\n                      </div>\n\n                      <div input-field>\n\n                        <ion-item>\n\n                          <ion-label>Gas Compressor 2</ion-label>\n\n                          <ion-select [(ngModel)]="dailyreport.gascompressor2" name="gascompressor2">\n\n                            <ion-option *ngFor="let gascompressor2 of statuses" [value]="gascompressor2" [selected]="selectedGas == gascompressor2">{{gascompressor2}}</ion-option>\n\n                          </ion-select>\n\n                        </ion-item>\n\n                      </div>\n\n                      <div input-field>\n\n                        <ion-item>\n\n                          <ion-label>Process Train 1</ion-label>\n\n                          <ion-select [(ngModel)]="dailyreport.pt1" name="pt1">\n\n                            <ion-option *ngFor="let pt1 of statuses" [value]="pt1" [selected]="selectedGas == pt1">{{pt1}}</ion-option>\n\n                          </ion-select>\n\n                        </ion-item>\n\n                      </div>\n\n                      <div input-field>\n\n                        <ion-item>\n\n                          <ion-label>Process Train 2</ion-label>\n\n                          <ion-select [(ngModel)]="dailyreport.pt2" name="pt2">\n\n                            <ion-option *ngFor="let pt2 of statuses" [value]="pt2" [selected]="selectedGas == pt2">{{pt2}}</ion-option>\n\n                          </ion-select>\n\n                        </ion-item>\n\n                      </div>\n\n                      <div input-field>\n\n                        <ion-item>\n\n                          <ion-label>Instrument Air Compressor A</ion-label>\n\n                          <ion-select [(ngModel)]="dailyreport.iaircompressora" name="iaircompressora">\n\n                            <ion-option *ngFor="let iaircompressora of statuses" [value]="iaircompressora" [selected]="selectedGas == iaircompressora">{{iaircompressora}}</ion-option>\n\n                          </ion-select>\n\n                        </ion-item>\n\n                      </div>\n\n                      <div input-field>\n\n                        <ion-item>\n\n                          <ion-label>Instrument Air Compressor B</ion-label>\n\n                          <ion-select [(ngModel)]="dailyreport.iaircompressorb" name="iaircompressorb">\n\n                            <ion-option *ngFor="let iaircompressorb of statuses" [value]="iaircompressorb" [selected]="selectedGas == iaircompressorb">{{iaircompressorb}}</ion-option>\n\n                          </ion-select>\n\n                        </ion-item>\n\n                      </div>\n\n                      <div input-field>\n\n                        <ion-item>\n\n                          <ion-label>Gas Gen 1</ion-label>\n\n                          <ion-select [(ngModel)]="dailyreport.gasgen1" name="gasgen1">\n\n                            <ion-option *ngFor="let gasgen1 of statuses" [value]="gasgen1" [selected]="selectedGas == gasgen1">{{gasgen1}}</ion-option>\n\n                          </ion-select>\n\n                        </ion-item>\n\n                      </div>\n\n                      <div input-field>\n\n                        <ion-item>\n\n                          <ion-label>Gas Gen 3</ion-label>\n\n                          <ion-select [(ngModel)]="dailyreport.gasgen3" name="gasgen3">\n\n                            <ion-option *ngFor="let gasgen3 of statuses" [value]="gasgen3" [selected]="selectedGas == gasgen3">{{gasgen3}}</ion-option>\n\n                          </ion-select>\n\n                        </ion-item>\n\n                      </div>\n\n                      <div input-field>\n\n                        <ion-item>\n\n                          <ion-label>Gas Gen 4</ion-label>\n\n                          <ion-select [(ngModel)]="dailyreport.gasgen4" name="gasgen4">\n\n                            <ion-option *ngFor="let gasgen4 of statuses" [value]="gasgen4" [selected]="selectedGas == gasgen4">{{gasgen4}}</ion-option>\n\n                          </ion-select>\n\n                        </ion-item>\n\n                      </div>\n\n                      <div input-field>\n\n                        <ion-item>\n\n                          <ion-label>Gas Gen 5</ion-label>\n\n                          <ion-select [(ngModel)]="dailyreport.gasgen5" name="gasgen5">\n\n                            <ion-option *ngFor="let gasgen5 of statuses" [value]="gasgen5" [selected]="selectedGas == gasgen5">{{gasgen5}}</ion-option>\n\n                          </ion-select>\n\n                        </ion-item>\n\n                      </div>\n\n                      <div input-field>\n\n                        <ion-item>\n\n                          <ion-label>Diesel Gen Set</ion-label>\n\n                          <ion-select [(ngModel)]="dailyreport.dieselgenset" name="dieselgenset">\n\n                            <ion-option *ngFor="let dieselgenset of statuses" [value]="dieselgenset" [selected]="selectedGas == dieselgenset">{{dieselgenset}}</ion-option>\n\n                          </ion-select>\n\n                        </ion-item>\n\n                      </div>\n\n                      <br>\n\n                    </fieldset>\n\n                  </div>\n\n                  <!-- Login button -->\n\n                  <ion-col col-12 no-padding>\n\n                    <button no-margin ion-button color="primary" full text-uppercase (click)="next()">Next</button>\n\n                  </ion-col>\n\n                </ion-col>\n\n              </ion-row>\n\n\n\n            </form>\n\n          </ion-slide>\n\n          <ion-slide>\n\n            <form padding>\n\n              <fieldset [disabled]="disabled">\n\n                <ion-row class="wlm-msg" align-items-start>\n\n                  <ion-col align-self-baseline col-12>\n\n                    <ion-list text-center>\n\n                      <img src="assets/images/NOG-LOGO.jpg" class="img-size" />\n\n                    </ion-list>\n\n                    <h1><strong>Daily Activities</strong></h1>\n\n                  </ion-col>\n\n                </ion-row>\n\n                <!-- Input-field -->\n\n                <ion-row>\n\n                  <ion-col col-12>\n\n                    <div input-field>\n\n                      <ion-item>\n\n                        <ion-label>Department</ion-label>\n\n                        <ion-select [(ngModel)]="dailyreport.department" name="department">\n\n                          <ion-option *ngFor="let department of departments" [value]="department" [selected]="selectedDepartment == department">{{department}}</ion-option>\n\n                        </ion-select>\n\n                      </ion-item>\n\n                    </div>\n\n                    <br>\n\n                    <div input-field>\n\n                      <!-- Input-field-text -->\n\n                      <ion-item>\n\n                        <ion-textarea placeholder="Daily Activities" type="text" rows="15" [(ngModel)]="dailyreport.dailyactivities" name="dailyactivities"></ion-textarea>\n\n                      </ion-item>\n\n                    </div>\n\n                    <br>\n\n                    <!-- Login button -->\n\n                    <ion-col col-12 no-padding>\n\n                      <button no-margin ion-button color="primary" full text-uppercase (click)="submit()">Submit</button>\n\n                    </ion-col>\n\n                  </ion-col>\n\n                </ion-row>\n\n              </fieldset>\n\n            </form>\n\n          </ion-slide>\n\n        </ion-slides>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-fab bottom right *ngIf="!startSlide">\n\n    <button ion-fab color="primary" (click)="prev()" mini> <ion-icon name="arrow-back"> </ion-icon> </button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\dailyreport\dailyreport.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__pouch_service_pouch_service__["a" /* PouchService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */]])
    ], DailyreportPage);
    return DailyreportPage;
}());

//# sourceMappingURL=dailyreport.js.map

/***/ })

});
//# sourceMappingURL=8.js.map