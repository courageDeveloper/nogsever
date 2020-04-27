webpackJsonp([9],{

/***/ 777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddpreventivemaintenancePageModule", function() { return AddpreventivemaintenancePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addpreventivemaintenance__ = __webpack_require__(858);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_froala_wysiwyg__ = __webpack_require__(806);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_auto_complete__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_auto_complete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_auto_complete__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AddpreventivemaintenancePageModule = /** @class */ (function () {
    function AddpreventivemaintenancePageModule() {
    }
    AddpreventivemaintenancePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__addpreventivemaintenance__["a" /* AddpreventivemaintenancePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__addpreventivemaintenance__["a" /* AddpreventivemaintenancePage */]),
                __WEBPACK_IMPORTED_MODULE_3_angular_froala_wysiwyg__["a" /* FroalaEditorModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3_angular_froala_wysiwyg__["b" /* FroalaViewModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_ng2_auto_complete__["Ng2AutoCompleteModule"]
            ],
        })
    ], AddpreventivemaintenancePageModule);
    return AddpreventivemaintenancePageModule;
}());

//# sourceMappingURL=addpreventivemaintenance.module.js.map

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

/***/ 858:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddpreventivemaintenancePage; });
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
 * Generated class for the AddpreventivemaintenancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddpreventivemaintenancePage = /** @class */ (function () {
    function AddpreventivemaintenancePage(navCtrl, viewCtrl, httpService, navParams, platform, db) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.httpService = httpService;
        this.navParams = navParams;
        this.platform = platform;
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
        this.show = true;
        if (this.navParams.get('type') == 'Add') {
            this.add = true;
            this.title = 'Add';
            this.workorder = {
                id: Math.round((new Date()).getTime()).toString(),
                rev: '',
                name: '',
                datecreated: new Date(),
                datewo: new Date().toJSON().slice(0, 10).replace(/-/g, '-'),
                workorderno: 0,
                tagname: '',
                tagid: '',
                steps: '',
                maintenanceitem: '',
                itemarray: [],
                performedby: '',
                equipmentpartname: '',
                equipmentpartid: '',
                equipmentcatid: '',
                equipmentcatname: '',
                equipmenttag: '',
                faculty: 'OGPOOC',
                exactlocation: '',
                workprocedure: '',
                precautions: '',
                priority: 'High',
                responsibility: 'Operator',
                status: false,
                gstatus: false,
                dstatus: false,
                department: '',
                ipaddress: '169.159.98.187',
                worktypes: 'Work Order',
                description: '',
                beepstatus: false,
                frequencydate: new Date(),
                frequency: 3,
                post: '',
                frequencyspandate: '',
                staff: '',
                staffid: '',
                animateswitch: 'false',
                woid: '',
                woId: ''
            };
            this.db.getWorkorders().then(function (data) {
                if (data.length != 0) {
                    _this.workorder.workorderno = data[0].workorderno + 1;
                }
                else {
                    _this.workorder.workorderno = 1;
                }
            });
        }
        else if (this.navParams.get('type') == 'Equipment') {
            this.title = 'Add';
            this.addFromequip = true;
            this.workorder = this.navParams.get('workorder');
            this.db.getWorkorders().then(function (data) {
                if (data.length != 0) {
                    _this.workorder.workorderno = data[0].workorderno + 1;
                }
                else {
                    _this.workorder.workorderno = 1;
                }
            });
        }
        else {
            this.workorder = this.navParams.get('workorder');
            if (this.workorder.worktypes == 'Work Order') {
                this.show = true;
            }
            else if (this.workorder.worktypes == "Preventive Maintenance") {
                this.show = false;
            }
            var dateString = new Date(this.workorder.datewo).toUTCString();
            dateString = dateString.split(' ').slice(0, 4).join(' ');
            var currentDate = new Date().toUTCString();
            currentDate = currentDate.split(' ').slice(0, 4).join(' ');
        }
    }
    AddpreventivemaintenancePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.httpService.getIpAddress().subscribe(function (data) {
            _this.workorder.ipaddress = data['ip'];
        });
        this.selectedPriority = this.workorder.priority;
        this.selectedWorktype = this.workorder.worktypes;
        this.selectedResponsibility = this.workorder.responsibility;
        this.responsibilities = ["Contractor", "Vendor", "Operator"];
        this.worktypes = ["Work Order"];
        this.priorities = ["High", "Medium", "Low"];
        console.log('ionViewDidLoad AddpreventivemaintenancePage');
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
    AddpreventivemaintenancePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.localStorageItem = JSON.parse(localStorage.getItem('user'));
        this.db.getSupervisor(this.localStorageItem).then(function (item) {
            _this.user = item;
            _this.position = item.post;
        });
    };
    AddpreventivemaintenancePage.prototype.selectEquipmentsCats = function (newVal) {
        this.equipmentCatObject = newVal;
        if (this.add) {
            this.workorder.equipmentcatname = newVal.name;
            this.workorder.equipmenttag = newVal.tag;
            this.catTrue = true;
        }
        else {
            this.workorder.equipmentcatname = newVal;
            this.catTrue = true;
        }
    };
    AddpreventivemaintenancePage.prototype.selectEquipmentsTags = function (newVal) {
        this.equipmentTagObject = newVal;
        if (this.add) {
            this.workorder.equipmenttag = newVal.tag;
            this.tagTrue = true;
        }
        else {
            this.workorder.equipmenttag = newVal;
            this.tagTrue = true;
        }
    };
    AddpreventivemaintenancePage.prototype.selectEquipmentsParts = function (newVal) {
        this.equipmentPartObject = newVal;
        if (this.add) {
            this.workorder.equipmentpartname = newVal.name;
            this.workorder.tagname = newVal.tag;
            this.partTrue = true;
        }
        else {
            this.workorder.equipmentpartname = newVal;
            this.partTrue = true;
        }
    };
    AddpreventivemaintenancePage.prototype.selectEquipmentsPartsTags = function (newVal) {
        this.equipmentPartTagObject = newVal;
        if (this.add) {
            this.workorder.tagname = newVal.tag;
            this.partTrue = true;
        }
        else {
            this.workorder.tagname = newVal;
            this.partTrue = true;
        }
    };
    AddpreventivemaintenancePage.prototype.getWorktype = function (worktype) {
        if (this.workorder.worktypes == "Work Order") {
            this.show = true;
        }
        else if (this.workorder.worktypes == "Preventive Maintenance") {
            this.show = false;
        }
    };
    AddpreventivemaintenancePage.prototype.submit = function () {
        var _this = this;
        if (this.add || this.addFromequip) {
            this.workorder.department = this.user.departments;
            this.workorder.post = this.user.post;
            if (typeof this.equipmentCatObject == 'object') {
                this.workorder.equipmentcatid = this.equipmentCatObject.id;
            }
            if (typeof this.equipmentPartObject == 'object') {
                this.workorder.equipmentpartid = this.equipmentPartObject.id;
            }
            this.workorder.staff = this.user.name;
            this.workorder.staffid = this.localStorageItem;
            if (this.workorder.worktypes == "Work Order") {
                this.workorder.frequency = null;
            }
            else {
                this.workorder.datewo = "";
                var someDate = new Date();
                var numberOfDaysToAdd = this.workorder.frequency;
                var addedDate = someDate.getDate() + Number(numberOfDaysToAdd);
                this.workorder.frequencyspandate = someDate.setDate(addedDate);
            }
            this.db.saveWorkorder(this.workorder).then(function (res) {
                _this.viewCtrl.dismiss(res);
                //Save Alert in Supervisor
                _this.db.getSupervisors().then(function (supervisors) {
                    _this.filterManager = supervisors.filter(function (data) { return data.post == 'Manager'; });
                    _this.filterHse = supervisors.filter(function (data) { return data.departments == 'HSE'; });
                    _this.filterAreaSupervisor = supervisors.filter(function (data) { return data.post == 'Supervisor' && data.departments == _this.user.departments; });
                    if (_this.workorder.responsibility == 'Operator') {
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
                    if (_this.workorder.responsibility == 'Operator') {
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
                        wono: res.workorderno,
                        description: res.description,
                        location: res.exactlocation,
                        facility: res.faculty,
                        type: 'workorder',
                        jobtype: res.worktypes,
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
                this.workorder.equipmentcatid = this.equipmentCatObject.id;
                this.workorder.equipmentcatname = this.equipmentCatObject.name;
            }
            else {
                this.workorder.equipmentcatid = this.workorder.equipmentcatid;
                this.workorder.equipmentcatname = this.workorder.equipmentcatname;
            }
            if (typeof this.equipmentTagObject == 'object') {
                this.workorder.equipmentcatid = this.equipmentCatObject.id;
                this.workorder.equipmenttag = this.equipmentTagObject.tag;
            }
            else {
                this.workorder.equipmentcatid = this.workorder.equipmentcatid;
                this.workorder.equipmenttag = this.workorder.equipmenttag;
            }
            if (typeof this.equipmentPartObject == 'object') {
                this.workorder.equipmentpartid = this.equipmentPartObject.id;
                this.workorder.equipmentpartname = this.equipmentPartObject.name;
            }
            else {
                this.workorder.equipmentpartid = this.workorder.equipmentpartid;
                this.workorder.equipmentpartname = this.workorder.equipmentpartname;
            }
            if (typeof this.equipmentPartTagObject == 'object') {
                this.workorder.equipmentpartid = this.equipmentPartTagObject.id;
                this.workorder.tagname = this.equipmentPartTagObject.tag;
            }
            else {
                this.workorder.equipmentpartid = this.workorder.equipmentpartid;
                this.workorder.tagname = this.workorder.tagname;
            }
            if (this.workorder.frequencyspandate != "") {
                var someDate = new Date(this.workorder.frequencydate);
                var numberOfDaysToAdd = this.workorder.frequency;
                var addedDate = someDate.getDate() + Number(numberOfDaysToAdd);
                this.workorder.frequencyspandate = someDate.setDate(addedDate);
            }
            this.db.updateWorkorder(this.workorder).then(function (order) {
                _this.viewCtrl.dismiss(order);
            });
        }
    };
    AddpreventivemaintenancePage.prototype.checkWONO = function () {
        var _this = this;
        this.error = "";
        this.db.getWorkorders().then(function (data) {
            data.forEach(function (item) {
                if (_this.workorder.workorderno == item.workorderno) {
                    _this.error = "WONO already exists.Use another!";
                }
                else {
                    _this.error = "";
                }
            });
        });
    };
    AddpreventivemaintenancePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    AddpreventivemaintenancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-addpreventivemaintenance',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\addpreventivemaintenance\addpreventivemaintenance.html"*/'<ion-header>\n\n  <ion-navbar color="secondary">\n\n    <ion-buttons left>\n\n      <button color="primary" ion-button (click)="cancel()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title class="title-color">{{title}} Preventive Maintenance</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-primary50" padding>\n\n  <ion-fab top right edge *ngIf="platform.is(\'cordova\')">\n\n    <button ion-fab mini margin-left (click)="open()" color="secondary"><ion-icon name="phone-portrait"></ion-icon></button>\n\n  </ion-fab>\n\n\n\n  <form margin-top (ngSubmit)="submit()">\n\n    <fieldset [disabled] = \'disabled\'>\n\n    <ion-input type="hidden" [(ngModel)]="workorder.equipmentcatid" name="equipmentcatid"></ion-input>\n\n    <ion-input type="hidden" [(ngModel)]="workorder.equipmentpartid" name="equipmentpartid"></ion-input>\n\n    <ion-input type="hidden" [(ngModel)]="workorder.tagid" name="tagid"></ion-input>\n\n    <ion-item>\n\n      <ion-input placeholder="WO/PM No" type="text" [(ngModel)]="workorder.workorderno" (ngModelChange)="checkWONO()" name="workorderno"\n\n        disabled></ion-input>\n\n      <ion-label color="danger" no-margin>{{error}}</ion-label>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Work Type</ion-label>\n\n      <ion-select [(ngModel)]="workorder.worktypes" (ngModelChange)="getWorktype(worktype)" name="worktype">\n\n        <ion-option *ngFor="let worktype of worktypes" [value]="worktype" [selected]="selectedWorktype == worktype">{{worktype}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-input placeholder="Name" type="text" [(ngModel)]="workorder.name" name="name"></ion-input>\n\n    </ion-item>\n\n    <!-- <ion-item>\n\n      <span>Date Created</span>\n\n      <ion-icon item-right name="md-calendar"></ion-icon>\n\n      <ion-input placeholder="Date" type="date" [(ngModel)]="pm.date" name="date"></ion-input>\n\n    </ion-item> -->\n\n    <ion-item>\n\n      <ion-input placeholder="Facility" type="text" [(ngModel)]="workorder.faculty" name="faculty" disabled></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-input placeholder="Location" type="text" [(ngModel)]="workorder.exactlocation" name="exactlocation"></ion-input>\n\n    </ion-item>\n\n    <ion-item no-padding>\n\n      <ion-input ng2-auto-complete [source]="equipmentsCatArray" list-formatter="name" (valueChanged)="selectEquipmentsCats($event)"\n\n        placeholder="Main Equipment Name" type="text" [(ngModel)]="workorder.equipmentcatname" name="equipmentcatname"></ion-input>\n\n    </ion-item>\n\n    <ion-item no-padding>\n\n        <ion-input ng2-auto-complete [source]="equipmentsTagArray" list-formatter="tag" (valueChanged)="selectEquipmentsTags($event)"\n\n          placeholder="Main Equipment Tag" type="text" [(ngModel)]="workorder.equipmentcattag" name="equipmenttag"></ion-input>\n\n      </ion-item>\n\n    <ion-item no-padding>\n\n      <ion-input ng2-auto-complete [source]="equipmentsPartArray" list-formatter="name" (valueChanged)="selectEquipmentsParts($event)"\n\n        placeholder="Part Name" type="text" [(ngModel)]="workorder.equipmentpartname" name="equipmentpartname"></ion-input>\n\n    </ion-item>\n\n    <ion-item no-padding>\n\n      <ion-input ng2-auto-complete [source]="equipmentsPartTagArray" list-formatter="tag" (valueChanged)="selectEquipmentsPartsTags($event)"\n\n        placeholder="Part Tag" type="text" [(ngModel)]="workorder.tagname" name="tagname"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-textarea placeholder="Description" type="text" [(ngModel)]="workorder.description" name="description"></ion-textarea>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-textarea placeholder="Write work procedure here!" type="text" [(ngModel)]="workorder.workprocedure" name="workprocedure"></ion-textarea>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-textarea placeholder="Write job safety advice!" type="text" [(ngModel)]="workorder.precautions" name="precautions"></ion-textarea>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Priority</ion-label>\n\n      <ion-select [(ngModel)]="workorder.priority" name="priority">\n\n        <ion-option *ngFor="let priority of priorities" [value]="priority" [selected]="selectedPriority == priority">{{priority}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Responsibility</ion-label>\n\n      <ion-select [(ngModel)]="workorder.responsibility" name="responsibility">\n\n        <ion-option *ngFor="let responsibility of responsibilities" [value]="responsibility" [selected]="selectedResponsibility == responsibility">{{responsibility}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item *ngIf=show>\n\n      <span>Date Created</span>\n\n      <ion-icon item-right name="md-calendar"></ion-icon>\n\n      <ion-input placeholder="Date" type="date" [(ngModel)]="workorder.datewo" name="datewo"></ion-input>\n\n    </ion-item>\n\n    <ion-item *ngIf=!show>\n\n      <ion-input placeholder="Frequency in days" type="number" [(ngModel)]="workorder.frequency" name="frequency"></ion-input>\n\n    </ion-item>\n\n    <p class="danger" *ngIf=!show> Enter the period for reminder </p>\n\n    <button ion-button type="submit" block [disabled]="!workorder.workorderno || error">Submit</button>\n\n    </fieldset>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\addpreventivemaintenance\addpreventivemaintenance.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_httpservice__["a" /* HttpserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__pouch_service_pouch_service__["a" /* PouchService */]])
    ], AddpreventivemaintenancePage);
    return AddpreventivemaintenancePage;
}());

//# sourceMappingURL=addpreventivemaintenance.js.map

/***/ })

});
//# sourceMappingURL=9.js.map