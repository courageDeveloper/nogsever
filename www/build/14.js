webpackJsonp([14],{

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddfrequencyequipmentPageModule", function() { return AddfrequencyequipmentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addfrequencyequipment__ = __webpack_require__(869);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_tooltips__ = __webpack_require__(817);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AddfrequencyequipmentPageModule = /** @class */ (function () {
    function AddfrequencyequipmentPageModule() {
    }
    AddfrequencyequipmentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__addfrequencyequipment__["a" /* AddfrequencyequipmentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__addfrequencyequipment__["a" /* AddfrequencyequipmentPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic_tooltips__["a" /* TooltipsModule */].forRoot()
            ],
        })
    ], AddfrequencyequipmentPageModule);
    return AddfrequencyequipmentPageModule;
}());

//# sourceMappingURL=addfrequencyequipment.module.js.map

/***/ }),

/***/ 795:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipBox; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);


var TooltipBox = (function () {
    function TooltipBox(elementRef, rnd) {
        var _this = this;
        this.elementRef = elementRef;
        this.rnd = rnd;
        this.fadeState = 'invisible';
        this.init = new Promise(function (resolve) {
            _this.initResolve = resolve;
        });
    }
    Object.defineProperty(TooltipBox.prototype, "arrow", {
        set: function (side) {
            this.rnd.setAttribute(this.getNativeElement(), 'class', 'has-arrow ' + 'arrow-' + side);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipBox.prototype, "posTop", {
        set: function (val) {
            this.rnd.setStyle(this.getNativeElement(), 'top', val + 'px');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipBox.prototype, "posLeft", {
        set: function (val) {
            this.rnd.setStyle(this.getNativeElement(), 'left', val + 'px');
        },
        enumerable: true,
        configurable: true
    });
    TooltipBox.prototype.getNativeElement = function () {
        return this.elementRef.nativeElement;
    };
    TooltipBox.prototype.ngAfterViewInit = function () {
        this.initResolve();
    };
    TooltipBox.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"], args: [{
                    selector: 'tooltip-box',
                    template: "\n    <div *ngIf=\"tooltipHtml; else txt\" [innerHTML]=\"tooltipHtml\"></div>\n    <ng-template #txt>{{ text }}</ng-template>\n  ",
                    animations: [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('fade', [
                            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('visible', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 1 })),
                            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('invisible', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 0 })),
                            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('visible <=> invisible', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms linear')),
                        ]),
                    ],
                    styles: [
                        "\n          :host {\n              background-color: rgba(0, 0, 0, 0.8);\n              color: white;\n              display: inline-block;\n              position: fixed;\n              padding: 15px 25px;\n              font-size: 15px;\n          }\n    ",
                        "\n          :host.has-arrow:before {\n              content: '';\n              border: 5px solid transparent;\n              position: absolute;\n              width: 0;\n              height: 0;\n          }\n    ",
                        ':host.has-arrow.arrow-top:before { border-bottom: 5px solid rgba(0,0,0,0.8); top: -10px; }',
                        ':host.has-arrow.arrow-left:before { border-right: 5px solid rgba(0,0,0,0.8); left: -10px; }',
                        ':host.has-arrow.arrow-right:before { border-left: 5px solid rgba(0,0,0,0.8); right: -10px; }',
                        ':host.has-arrow.arrow-bottom:before { border-top: 5px solid rgba(0,0,0,0.8); bottom: -10px; }',
                    ],
                    changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    /** @nocollapse */
    TooltipBox.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], },
    ]; };
    TooltipBox.propDecorators = {
        "fadeState": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["HostBinding"], args: ['@fade',] },],
        "text": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        "tooltipHtml": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        "arrow": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        "posTop": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        "posLeft": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
    };
    return TooltipBox;
}());

//# sourceMappingURL=tooltip-box.component.js.map

/***/ }),

/***/ 796:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);

var TooltipController = (function () {
    function TooltipController() {
        this.allowMultiple = true;
        this.activeTooltips = [];
    }
    TooltipController.prototype.addTooltip = function (instance) {
        if (instance.hideOthers || !this.allowMultiple && this.activeTooltips.length > 0) {
            this.hideAll();
        }
        this.activeTooltips.push(instance);
    };
    TooltipController.prototype.removeTooltip = function (instance) {
        this.activeTooltips.splice(this.activeTooltips.indexOf(instance), 1);
    };
    TooltipController.prototype.hideAll = function () {
        this.activeTooltips.forEach(function (tooltip) {
            tooltip.removeTooltip();
        });
    };
    TooltipController.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    return TooltipController;
}());

//# sourceMappingURL=tooltip.cotroller.js.map

/***/ }),

/***/ 803:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tooltip; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tooltip_box_component__ = __webpack_require__(795);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tooltip_cotroller__ = __webpack_require__(796);




var Tooltip = (function () {
    function Tooltip(el, appRef, platform, _componentFactoryResolver, tooltipCtrl) {
        this.el = el;
        this.appRef = appRef;
        this.platform = platform;
        this._componentFactoryResolver = _componentFactoryResolver;
        this.tooltipCtrl = tooltipCtrl;
        this.mobileEvent = 'press';
        this.desktopEvent = 'hover';
        this.duration = 3000;
        this._arrow = false;
        this._navTooltip = false;
        this._canShow = true;
        this._active = false;
    }
    Object.defineProperty(Tooltip.prototype, "navTooltip", {
        get: function () {
            return this._navTooltip;
        },
        set: function (val) {
            this._navTooltip = typeof val !== 'boolean' || val !== false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tooltip.prototype, "arrow", {
        get: function () {
            return this._arrow;
        },
        set: function (val) {
            this._arrow = typeof val !== 'boolean' || val !== false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tooltip.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (val) {
            this._active = typeof val !== 'boolean' || val !== false;
            this._active ? this.canShow && this.showTooltip() : this.removeTooltip();
        },
        enumerable: true,
        configurable: true
    });
    Tooltip.prototype.ngAfterViewInit = function () {
        // Show the tooltip immediately after initiating view if set to
        if (this._active) {
            this.trigger();
        }
    };
    Tooltip.prototype.ngOnInit = function () {
        // Set default event type by platform if event is not defined
        if (!this.event) {
            this.event = this.platform.is('mobile') ? this.mobileEvent : this.desktopEvent;
        }
    };
    Object.defineProperty(Tooltip.prototype, "canShow", {
        /**
         * @return {boolean} TRUE if the tooltip can be shown
         */
        get: /**
           * @return {boolean} TRUE if the tooltip can be shown
           */
        function () {
            return this._canShow && ((typeof this.tooltip === 'string' && this.tooltip !== '') || (typeof this.tooltipHtml === 'string' && this.tooltipHtml !== ''));
        },
        /**
         * Set the canShow property
         * Ensure that tooltip is shown only if the tooltip string is not falsey
         */
        set: /**
           * Set the canShow property
           * Ensure that tooltip is shown only if the tooltip string is not falsey
           */
        function (show) {
            this._canShow = show;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Handles the click/press event and shows a tooltip.
     * If a tooltip already exists, it will just reset it's timer.
     */
    /**
       * Handles the click/press event and shows a tooltip.
       * If a tooltip already exists, it will just reset it's timer.
       */
    Tooltip.prototype.trigger = /**
       * Handles the click/press event and shows a tooltip.
       * If a tooltip already exists, it will just reset it's timer.
       */
    function () {
        if (!this.canShow) {
            return;
        }
        if (this.tooltipElement) {
            this._resetTimer();
        }
        else {
            this.showTooltip();
        }
    };
    /**
     * Creates a new tooltip component and adjusts it's properties to show properly.
     */
    /**
       * Creates a new tooltip component and adjusts it's properties to show properly.
       */
    Tooltip.prototype.showTooltip = /**
       * Creates a new tooltip component and adjusts it's properties to show properly.
       */
    function () {
        var _this = this;
        this._createTooltipComponent();
        var tooltipComponent = this.tooltipElement.instance;
        tooltipComponent.text = this.tooltip;
        tooltipComponent.tooltipHtml = this.tooltipHtml;
        tooltipComponent.init.then(function () {
            var tooltipPosition = _this._getTooltipPosition();
            tooltipComponent.posLeft = tooltipPosition.left;
            tooltipComponent.posTop = tooltipPosition.top;
            tooltipComponent.fadeState = 'visible';
            if (_this.arrow) {
                var arrowPosition = void 0;
                if (_this.positionV === 'top') {
                    arrowPosition = 'bottom';
                }
                else if (_this.positionV === 'bottom') {
                    arrowPosition = 'top';
                }
                else if (_this.positionH === 'left') {
                    arrowPosition = 'right';
                }
                else {
                    arrowPosition = 'left';
                }
                tooltipComponent.arrow = arrowPosition;
            }
            if (!_this._active) {
                _this.tooltipTimeout = setTimeout(_this.removeTooltip.bind(_this), _this.duration);
            }
        });
    };
    Tooltip.prototype.onClick = function () {
        if (this.event === 'click') {
            this.trigger();
        }
    };
    Tooltip.prototype.onPress = function () {
        if (this.event === 'press') {
            this.trigger();
        }
    };
    Tooltip.prototype.onMouseEnter = function () {
        if (this.event === 'hover') {
            this.active = true;
        }
    };
    Tooltip.prototype.onMouseLeave = function () {
        if (this.event === 'hover') {
            this.active = false;
        }
    };
    Tooltip.prototype._createTooltipComponent = function () {
        var viewport = this.appRef.components[0]._component
            ._viewport, componentFactory = this._componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_2__tooltip_box_component__["a" /* TooltipBox */]);
        this.tooltipElement = viewport.createComponent(componentFactory);
        this.tooltipCtrl.addTooltip(this);
    };
    Tooltip.prototype._getTooltipPosition = function () {
        var tooltipNativeElement = this.tooltipElement.instance.getNativeElement(), el = this.el.nativeElement, rect = el.getBoundingClientRect();
        var positionLeft, positionTop, spacing = 10;
        if (this.navTooltip) {
            this.positionV = 'bottom';
            this.arrow = false;
            spacing = 20;
        }
        if (this.positionH === 'right') {
            positionLeft = rect.right + spacing;
        }
        else if (this.positionH === 'left') {
            positionLeft = rect.left - spacing - tooltipNativeElement.offsetWidth;
        }
        else if (this.navTooltip) {
            positionLeft = rect.left + el.offsetWidth / 2;
        }
        else {
            positionLeft = rect.left;
        }
        if (this.positionV === 'top') {
            positionTop = rect.top - spacing - tooltipNativeElement.offsetHeight;
        }
        else if (this.positionV === 'bottom') {
            positionTop = rect.bottom + spacing;
        }
        else {
            positionTop =
                rect.top + el.offsetHeight / 2 - tooltipNativeElement.offsetHeight / 2;
        }
        if (+this.topOffset) {
            positionTop += +this.topOffset;
        }
        if (+this.leftOffset) {
            positionLeft += +this.leftOffset;
        }
        if (positionLeft + tooltipNativeElement.offsetWidth + spacing >
            this.platform.width()) {
            positionLeft =
                this.platform.width() - tooltipNativeElement.offsetWidth - spacing;
        }
        else if (positionLeft + tooltipNativeElement.offsetWidth - spacing < 0) {
            positionLeft = spacing;
        }
        if (positionTop + tooltipNativeElement.offsetHeight + spacing > this.platform.height()) {
            positionTop = this.platform.height() - tooltipNativeElement.offsetHeight - spacing;
        }
        else if (positionTop + tooltipNativeElement.offsetHeight - spacing < 0) {
            positionTop = spacing;
        }
        return {
            left: positionLeft,
            top: positionTop,
        };
    };
    Tooltip.prototype.removeTooltip = function () {
        var _this = this;
        if (!this.tooltipElement) {
            this.tooltipElement = undefined;
            this.tooltipTimeout = undefined;
            return;
        }
        this.tooltipElement.instance.fadeState = 'invisible';
        this.canShow = false;
        // wait for animation to finish then clear everything out
        setTimeout(function () {
            if (_this.tooltipElement &&
                typeof _this.tooltipElement.destroy === 'function') {
                _this.tooltipElement.destroy();
            }
            _this.tooltipCtrl.removeTooltip(_this);
            _this.tooltipElement = _this.tooltipTimeout = undefined;
            _this.canShow = true;
        }, 300);
    };
    Tooltip.prototype._resetTimer = function () {
        var _this = this;
        clearTimeout(this.tooltipTimeout);
        this.tooltipTimeout = setTimeout(function () {
            _this.active = false;
        }, this.duration);
    };
    Tooltip.prototype.ngOnDestroy = function () {
        // if the timer hasn't expired or active is true when the component gets destroyed, the tooltip will remain in the DOM
        // this removes it
        this.removeTooltip();
    };
    Tooltip.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[tooltip]',
                },] },
    ];
    /** @nocollapse */
    Tooltip.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], },
        { type: __WEBPACK_IMPORTED_MODULE_3__tooltip_cotroller__["a" /* TooltipController */], },
    ]; };
    Tooltip.propDecorators = {
        "tooltipHtml": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "tooltip": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "positionV": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "positionH": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "event": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "mobileEvent": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "desktopEvent": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "topOffset": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "leftOffset": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "hideOthers": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "navTooltip": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "arrow": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "duration": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "active": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "onClick": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['click',] },],
        "onPress": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['press',] },],
        "onMouseEnter": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['mouseenter',] },],
        "onMouseLeave": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['mouseleave',] },],
    };
    return Tooltip;
}());

//# sourceMappingURL=tooltip.directive.js.map

/***/ }),

/***/ 817:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tooltip_box_component__ = __webpack_require__(795);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tooltip_directive__ = __webpack_require__(803);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tooltips_module__ = __webpack_require__(818);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__tooltips_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tooltip_cotroller__ = __webpack_require__(796);
/* unused harmony namespace reexport */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 818:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tooltip_cotroller__ = __webpack_require__(796);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tooltip_box_component__ = __webpack_require__(795);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tooltip_directive__ = __webpack_require__(803);





var TooltipsModule = (function () {
    function TooltipsModule() {
    }
    TooltipsModule.forRoot = function () {
        return {
            ngModule: TooltipsModule,
            providers: [__WEBPACK_IMPORTED_MODULE_2__tooltip_cotroller__["a" /* TooltipController */]]
        };
    };
    TooltipsModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    entryComponents: [__WEBPACK_IMPORTED_MODULE_3__tooltip_box_component__["a" /* TooltipBox */]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_4__tooltip_directive__["a" /* Tooltip */], __WEBPACK_IMPORTED_MODULE_3__tooltip_box_component__["a" /* TooltipBox */]],
                    imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicModule */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_4__tooltip_directive__["a" /* Tooltip */]]
                },] },
    ];
    return TooltipsModule;
}());

//# sourceMappingURL=tooltips.module.js.map

/***/ }),

/***/ 869:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddfrequencyequipmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pouch_service_pouch_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_httpservice__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(22);
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
 * Generated class for the AddequipmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddfrequencyequipmentPage = /** @class */ (function () {
    function AddfrequencyequipmentPage(navCtrl, formBuilder, viewCtrl, httpService, db, navParams, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.viewCtrl = viewCtrl;
        this.httpService = httpService;
        this.db = db;
        this.navParams = navParams;
        this.platform = platform;
        this.add = false;
        this.title = 'Edit';
        this.search = false;
        this.showButton = false;
        this.addFromequip = false;
        this.show = false;
        this.partTrue = false;
        this.catTrue = false;
        this.disabled = false;
        this.tagTrue = false;
        this.radioOther = false;
        this.preventiveMaintenaceForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroup"]({
            id: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            rev: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            name: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            pmno: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            datecreated: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            datewo: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            tagname: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            tagid: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            equipmentpartname: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            steps: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            equipmentpartid: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            equipmentcatid: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            equipmentcatname: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            equipmenttag: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            faculty: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            exactlocation: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            maintenanceitem: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            performedby: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            precautions: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            priority: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            responsibility: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            status: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            gstatus: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            dstatus: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            ipaddress: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            department: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            description: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            itemarray: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            beepstatus: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            frequencydate: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            frequency: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            post: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            frequencyspandate: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            staff: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            staffid: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            animateswitch: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            pmId: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            woid: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            itemArray: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]()
        });
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
            this.equipment = this.navParams.get('equipment');
        }
    }
    AddfrequencyequipmentPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.preventiveMaintenaceForm = this.formBuilder.group({
            id: [this.preventivemaintenance.id],
            rev: [this.preventivemaintenance.rev],
            name: [this.preventivemaintenance.name],
            pmno: [this.preventivemaintenance.pmno],
            datecreated: [this.preventivemaintenance.datecreated],
            datewo: [this.preventivemaintenance.datewo],
            tagname: [this.preventivemaintenance.tagname],
            tagid: [this.preventivemaintenance.tagid],
            equipmentpartname: [this.preventivemaintenance.equipmentpartname],
            steps: [this.preventivemaintenance.steps],
            equipmentpartid: [this.preventivemaintenance.equipmentpartid],
            equipmentcatid: [this.preventivemaintenance.equipmentcatid],
            equipmentcatname: [this.preventivemaintenance.equipmentcatname],
            equipmenttag: [this.preventivemaintenance.equipmenttag],
            faculty: [this.preventivemaintenance.faculty],
            exactlocation: [this.preventivemaintenance.exactlocation],
            maintenanceitem: [this.preventivemaintenance.maintenanceitem],
            performedby: [this.preventivemaintenance.performedby],
            precautions: [this.preventivemaintenance.precautions],
            priority: [this.preventivemaintenance.priority],
            responsibility: [this.preventivemaintenance.responsibility],
            status: [this.preventivemaintenance.status],
            gstatus: [this.preventivemaintenance.gstatus],
            dstatus: [this.preventivemaintenance.dstatus],
            ipaddress: [this.preventivemaintenance.ipaddress],
            department: [this.preventivemaintenance.department],
            description: [this.preventivemaintenance.description],
            itemarray: [this.preventivemaintenance.itemarray],
            beepstatus: [this.preventivemaintenance.beepstatus],
            frequencydate: [this.preventivemaintenance.frequencydate],
            frequency: [this.preventivemaintenance.frequency],
            post: [this.preventivemaintenance.post],
            frequencyspandate: [this.preventivemaintenance.frequencyspandate],
            staff: [this.preventivemaintenance.staff],
            staffid: [this.preventivemaintenance.staffid],
            animateswitch: [this.preventivemaintenance.animateswitch],
            woid: [this.preventivemaintenance.woid],
            pmId: [this.preventivemaintenance.pmId],
            itemArray: this.formBuilder.array([
                this.initItemArray(),
            ])
        });
        this.httpService.getIpAddress().subscribe(function (data) {
            _this.preventivemaintenance.ipaddress = data['ip'];
        });
        this.selectedPriority = this.preventivemaintenance.priority;
        this.selectedResponsibility = this.preventivemaintenance.responsibility;
        this.responsibilities = ["Contractor", "Vendor", "Operator"];
        this.priorities = ["High", "Medium", "Low"];
        this.localStorageItem = JSON.parse(localStorage.getItem('user'));
        this.db.getSupervisor(this.localStorageItem).then(function (item) {
            _this.user = item;
            _this.position = item.post;
            if (_this.position != 'Supervisor') {
                _this.disabled = true;
            }
        });
        this.db.getPreventivemaintenance(this.equipment.pmId).then(function (res) {
            if (res == undefined) {
                _this.equipment.pmId = '';
                _this.db.updateEquipmentcat(_this.equipment).then(function (res) {
                });
            }
        });
    };
    AddfrequencyequipmentPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.localStorageItem = JSON.parse(localStorage.getItem('user'));
        this.db.getSupervisor(this.localStorageItem).then(function (item) {
            _this.user = item;
            _this.position = item.post;
        });
    };
    AddfrequencyequipmentPage.prototype.initItemArray = function () {
        return this.formBuilder.group({
            maintenanceitem: [this.preventivemaintenance.maintenanceitem],
            responsibility: [this.preventivemaintenance.responsibility],
            priority: [this.preventivemaintenance.priority],
            itemarray: [this.preventivemaintenance.itemarray],
            steps: [this.preventivemaintenance.steps]
        });
    };
    AddfrequencyequipmentPage.prototype.addItemArray = function () {
        var control = this.preventiveMaintenaceForm.controls['itemArray'];
        control.push(this.initItemArray());
        this.controlArray = control;
        /* var arrayIndex = control.value.length - 2;
        this.preventivemaintenance.maintenanceitem = control.value[arrayIndex].maintenanceitem
        //console.log(arrayIndex);
    
        var itemObject = {
          id: Math.round((new Date()).getTime()).toString(),
          maintenanceItem: this.preventivemaintenance.maintenanceitem,
          steps: this.preventivemaintenance.steps,
          status: true
        }
    
        this.preventivemaintenance.itemarray.push(itemObject); */
    };
    AddfrequencyequipmentPage.prototype.selectEquipmentsCats = function (newVal) {
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
    AddfrequencyequipmentPage.prototype.selectEquipmentsTags = function (newVal) {
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
    AddfrequencyequipmentPage.prototype.selectEquipmentsParts = function (newVal) {
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
    AddfrequencyequipmentPage.prototype.selectEquipmentsPartsTags = function (newVal) {
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
    AddfrequencyequipmentPage.prototype.submit = function () {
        var _this = this;
        if (this.add || this.addFromequip) {
            var control = this.preventiveMaintenaceForm.controls['itemArray'];
            //control.push(this.initItemArray());
            /*  var arrayIndex = control.value.length - 1;
             this.preventivemaintenance.maintenanceitem = control.value[arrayIndex].maintenanceitem; */
            for (var i = 0; i < control.value.length; i++) {
                var itemObject = {
                    id: Math.round((new Date()).getTime()).toString(),
                    maintenanceItem: control.value[i].maintenanceitem,
                    steps: control.value[i].steps,
                    status: true,
                    priority: control.value[i].priority,
                    responsibility: control.value[i].responsibility
                };
                this.preventivemaintenance.itemarray.push(itemObject);
            }
            this.preventivemaintenance.department = this.user.departments;
            this.preventivemaintenance.post = this.user.post;
            //if (typeof this.equipmentCatObject == 'object') {
            this.preventivemaintenance.equipmentcatid = this.equipment.id;
            this.preventivemaintenance.equipmentcatname = this.equipment.name;
            this.preventivemaintenance.equipmenttag = this.equipment.tag;
            //}
            /* if (typeof this.equipmentPartObject == 'object') {
              this.preventivemaintenance.equipmentpartid = this.equipmentPartObject.id;
            } */
            this.preventivemaintenance.staff = this.user.name;
            this.preventivemaintenance.staffid = this.localStorageItem;
            //if (this.workorder.worktypes == "Work Order") {
            //this.workorder.frequency = null;
            //}
            //else {
            this.preventivemaintenance.datewo = "";
            var someDate = new Date();
            var numberOfHoursToAdd = this.preventivemaintenance.frequency;
            var addedDate = someDate.getHours() + Number(numberOfHoursToAdd);
            this.preventivemaintenance.frequencyspandate = someDate.setHours(addedDate);
            //} 
            this.db.savePreventivemaintenance(this.preventivemaintenance).then(function (res) {
                _this.viewCtrl.dismiss(res);
                _this.equipment['pmId'] = res.id;
                _this.db.updateEquipmentcat(_this.equipment).then(function (res) {
                });
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
                        maintenanceitem: res.equipmentcatname,
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
            /* console.log('Update')
            this.db.getPreventivemaintenance(this.equipment.pmId).then(res => {
              this.preventivemaintenance = res;
              const control = <FormArray>this.preventiveMaintenaceForm.controls['itemArray'];
              console.log(control); */
            //control.push(this.initItemArray());
            //var arrayIndex = control.value.length - 1;
            //this.preventivemaintenance.maintenanceitem = control.value[arrayIndex].maintenanceitem;
            /* for (var i = 0; i < control.value.length; i++) {
              var itemObject = {
                id: Math.round((new Date()).getTime()).toString(),
                maintenanceItem: control.value[i].maintenanceitem,
                steps: control.value[i].steps,
                status: true,
                priority: control.value[i].priority,
                responsibility: control.value[i].responsibility
              }
    
              this.preventivemaintenance.itemarray.push(itemObject);
            } */
            /* if (typeof this.equipmentCatObject == 'object') {
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
           } */
            /*  if (this.preventivemaintenance.frequencyspandate != "") {
     
               var someDate = new Date(this.preventivemaintenance.frequencydate);
               var numberOfHoursToAdd = this.preventivemaintenance.frequency;
               var addedDate = someDate.getHours() + Number(numberOfHoursToAdd);
               this.preventivemaintenance.frequencyspandate = someDate.setHours(addedDate);
             }
             this.db.updatePreventivemaintenance(this.preventivemaintenance).then(order => {
               this.viewCtrl.dismiss(order);
             }) */
            //})
        }
    };
    AddfrequencyequipmentPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    AddfrequencyequipmentPage.prototype.radioClick = function (event) {
        this.radioOther = true;
    };
    AddfrequencyequipmentPage.prototype.radioClickMnth = function () {
        var monthHours = 30 * 24;
        this.preventivemaintenance.frequency = monthHours;
        this.radioOther = false;
    };
    AddfrequencyequipmentPage.prototype.radioClickwek = function () {
        var weekHours = 7 * 24;
        this.preventivemaintenance.frequency = weekHours;
        this.radioOther = false;
    };
    AddfrequencyequipmentPage.prototype.radioClickday = function () {
        var dailyHours = 24;
        this.preventivemaintenance.frequency = dailyHours;
        this.radioOther = false;
    };
    AddfrequencyequipmentPage.prototype.deleteItem = function (i) {
        var control = this.preventiveMaintenaceForm.controls['itemArray'];
        control.removeAt(i);
    };
    AddfrequencyequipmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-addfrequencyequipment',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\addfrequencyequipment\addfrequencyequipment.html"*/'<ion-header>\n\n  <ion-navbar color="secondary">\n\n    <ion-buttons left>\n\n      <button color="primary" ion-button (click)="cancel()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title class="title-color">{{title}} Preventive Maintenance</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-primary50" padding>\n\n  <form margin-top [formGroup]="preventiveMaintenaceForm">\n\n    <fieldset [disabled]="showButton">\n\n      <ion-input type="hidden" [(ngModel)]="preventivemaintenance.equipmentcatid" name="equipmentcatid"\n\n        [formControl]="preventiveMaintenaceForm.controls[\'equipmentcatid\']"></ion-input>\n\n      <ion-input type="hidden" [(ngModel)]="preventivemaintenance.equipmentpartid" name="equipmentpartid"\n\n        [formControl]="preventiveMaintenaceForm.controls[\'equipmentpartid\']"></ion-input>\n\n      <ion-input type="hidden" [(ngModel)]="preventivemaintenance.tagid" name="tagid"\n\n        [formControl]="preventiveMaintenaceForm.controls[\'tagid\']"></ion-input>\n\n\n\n      <ion-list radio-group class="list-color">\n\n\n\n        <ion-list-header>\n\n          Enter Frequency\n\n        </ion-list-header>\n\n\n\n        <ion-item>\n\n          <ion-label>Daily</ion-label>\n\n          <ion-radio value="daily" (click)="radioClickday()"></ion-radio>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label>Weekly</ion-label>\n\n          <ion-radio value="weekly" (click)="radioClickwek()"></ion-radio>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label>Monthly</ion-label>\n\n          <ion-radio value="monthly" (click)="radioClickMnth()"></ion-radio>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label>Others</ion-label>\n\n          <ion-radio value="others" (click)="radioClick($event)"></ion-radio>\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n      <ion-item *ngIf="radioOther">\n\n        <ion-label>Enter Frequency in hours</ion-label>\n\n        <ion-input type="number" [(ngModel)]="preventivemaintenance.frequency" name="frequency"\n\n          [formControl]="preventiveMaintenaceForm.controls[\'frequency\']"></ion-input>\n\n      </ion-item>\n\n\n\n      <!--  <ion-item>\n\n        <ion-input placeholder="WO/PM No" type="text" [(ngModel)]="preventivemaintenance.pmno" (ngModelChange)="checkPMNO()" name="pmno"\n\n          disabled></ion-input>\n\n        <ion-label color="danger" no-margin>{{error}}</ion-label>\n\n      </ion-item> -->\n\n      <!-- <ion-item>\n\n        <span>Date Created</span>\n\n        <ion-icon item-right name="md-calendar"></ion-icon>\n\n        <ion-input placeholder="Date" type="date" [(ngModel)]="pm.date" name="date"></ion-input>\n\n      </ion-item> -->\n\n      <!--  <ion-item>\n\n        <ion-input placeholder="Facility" type="text" [(ngModel)]="preventivemaintenance.faculty" name="faculty" disabled></ion-input>\n\n      </ion-item> -->\n\n      <!-- <ion-item>\n\n        <ion-input placeholder="Location" type="text" [(ngModel)]="preventivemaintenance.exactlocation" name="exactlocation"></ion-input>\n\n      </ion-item> -->\n\n      <br>\n\n      <div formArrayName="itemArray">\n\n        <div *ngFor="let item of preventiveMaintenaceForm.controls.itemArray.controls; let i=index">\n\n          <div [formGroupName]="i">\n\n            <ion-icon *ngIf="preventiveMaintenaceForm.controls.itemArray.controls.length > 1" name="close-circle"\n\n              class="float-right" (click)="deleteItem(i)" class="align-icon"></ion-icon>\n\n            <ion-item padding>\n\n              <ion-input placeholder="Maintenance Items" type="text" name="maintenanceitem"\n\n                formControlName="maintenanceitem"></ion-input>\n\n            </ion-item>\n\n            <!-- <ion-item>\n\n        <ion-textarea placeholder="Description" type="text" [(ngModel)]="preventivemaintenance.description" name="description"></ion-textarea>\n\n      </ion-item> -->\n\n            <ion-item>\n\n              <ion-textarea placeholder="Write steps here!" type="text" name="steps" formControlName="steps">\n\n              </ion-textarea>\n\n            </ion-item>\n\n            <!--  <ion-item>\n\n        <ion-textarea placeholder="Write job safety advice!" type="text" [(ngModel)]="preventivemaintenance.precautions" name="precautions"></ion-textarea>\n\n      </ion-item> -->\n\n            <ion-item>\n\n              <ion-label>Priority</ion-label>\n\n              <ion-select name="priority" formControlName="priority">\n\n                <ion-option *ngFor="let priority of priorities" [value]="priority"\n\n                  [selected]="selectedPriority == priority">{{priority}}</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label>Responsibility</ion-label>\n\n              <ion-select name="responsibility" formControlName="responsibility">\n\n                <ion-option *ngFor="let responsibility of responsibilities" [value]="responsibility"\n\n                  [selected]="selectedResponsibility == responsibility">{{responsibility}}</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n          </div>\n\n        </div>\n\n      </div>\n\n\n\n      <button ion-fab mini class="float-right" (click)="addItemArray()">\n\n        <ion-icon name="md-add"></ion-icon>\n\n      </button>\n\n      <button ion-button type="submit" block [disabled]="!preventivemaintenance.pmno || error"\n\n        (click)="submit()">Submit</button>\n\n    </fieldset>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\addfrequencyequipment\addfrequencyequipment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_httpservice__["a" /* HttpserviceProvider */], __WEBPACK_IMPORTED_MODULE_2__pouch_service_pouch_service__["a" /* PouchService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */]])
    ], AddfrequencyequipmentPage);
    return AddfrequencyequipmentPage;
}());

//# sourceMappingURL=addfrequencyequipment.js.map

/***/ })

});
//# sourceMappingURL=14.js.map