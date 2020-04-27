webpackJsonp([11],{

/***/ 785:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VieworderequipmentPageModule", function() { return VieworderequipmentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vieworderequipment__ = __webpack_require__(866);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_tooltips__ = __webpack_require__(817);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var VieworderequipmentPageModule = /** @class */ (function () {
    function VieworderequipmentPageModule() {
    }
    VieworderequipmentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__vieworderequipment__["a" /* VieworderequipmentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__vieworderequipment__["a" /* VieworderequipmentPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic_tooltips__["a" /* TooltipsModule */].forRoot()
            ],
        })
    ], VieworderequipmentPageModule);
    return VieworderequipmentPageModule;
}());

//# sourceMappingURL=vieworderequipment.module.js.map

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

/***/ 866:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VieworderequipmentPage; });
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
var VieworderequipmentPage = /** @class */ (function () {
    function VieworderequipmentPage(navCtrl, formBuilder, viewCtrl, httpService, db, navParams, platform) {
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
        this.workOrderForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroup"]({
            id: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            rev: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            name: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            workorderno: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
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
            workprocedure: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
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
            woid: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            woId: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            itemArray: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]()
        });
        if (this.navParams.get('type') == 'View') {
            this.add = true;
            this.title = 'View';
            this.workorder = {
                id: Math.round((new Date()).getTime()).toString(),
                rev: '',
                name: '',
                workorderno: 0,
                worktypes: 'Work Order',
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
                workprocedure: '',
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
            this.equipment = this.navParams.get('equipment');
            this.workorder = this.navParams.get('workorder');
        }
    }
    VieworderequipmentPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.workOrderForm = this.formBuilder.group({
            id: [this.workorder.id],
            rev: [this.workorder.rev],
            name: [this.workorder.name],
            workorderno: [this.workorder.workorderno],
            datecreated: [this.workorder.datecreated],
            datewo: [this.workorder.datewo],
            tagname: [this.workorder.tagname],
            tagid: [this.workorder.tagid],
            equipmentpartname: [this.workorder.equipmentpartname],
            steps: [this.workorder.steps],
            equipmentpartid: [this.workorder.equipmentpartid],
            equipmentcatid: [this.workorder.equipmentcatid],
            equipmentcatname: [this.workorder.equipmentcatname],
            equipmenttag: [this.workorder.equipmenttag],
            faculty: [this.workorder.faculty],
            exactlocation: [this.workorder.exactlocation],
            maintenanceitem: [this.workorder.maintenanceitem],
            performedby: [this.workorder.performedby],
            precautions: [this.workorder.precautions],
            priority: [this.workorder.priority],
            responsibility: [this.workorder.responsibility],
            status: [this.workorder.status],
            gstatus: [this.workorder.gstatus],
            dstatus: [this.workorder.dstatus],
            ipaddress: [this.workorder.ipaddress],
            department: [this.workorder.department],
            description: [this.workorder.description],
            itemarray: [this.workorder.itemarray],
            beepstatus: [this.workorder.beepstatus],
            frequencydate: [this.workorder.frequencydate],
            frequency: [this.workorder.frequency],
            post: [this.workorder.post],
            frequencyspandate: [this.workorder.frequencyspandate],
            staff: [this.workorder.staff],
            staffid: [this.workorder.staffid],
            animateswitch: [this.workorder.animateswitch],
            woid: [this.workorder.woid],
            woId: [this.workorder.woId],
            itemArray: this.formBuilder.array([
                this.initItemArray(),
            ])
        });
        this.httpService.getIpAddress().subscribe(function (data) {
            _this.workorder.ipaddress = data['ip'];
        });
        this.selectedPriority = this.workorder.priority;
        this.selectedResponsibility = this.workorder.responsibility;
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
    };
    VieworderequipmentPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.localStorageItem = JSON.parse(localStorage.getItem('user'));
        this.db.getSupervisor(this.localStorageItem).then(function (item) {
            _this.user = item;
            _this.position = item.post;
        });
    };
    VieworderequipmentPage.prototype.initItemArray = function () {
        return this.formBuilder.group({
            maintenanceitem: [this.workorder.maintenanceitem],
            responsibility: [this.workorder.responsibility],
            priority: [this.workorder.priority],
            itemarray: [this.workorder.itemarray],
            steps: [this.workorder.steps]
        });
    };
    VieworderequipmentPage.prototype.addItemArray = function () {
        var control = this.workOrderForm.controls['itemArray'];
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
    VieworderequipmentPage.prototype.selectEquipmentsCats = function (newVal) {
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
    VieworderequipmentPage.prototype.selectEquipmentsTags = function (newVal) {
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
    VieworderequipmentPage.prototype.selectEquipmentsParts = function (newVal) {
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
    VieworderequipmentPage.prototype.selectEquipmentsPartsTags = function (newVal) {
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
    VieworderequipmentPage.prototype.submit = function (item, i, event) {
        this.workorder.itemarray.splice(i, item);
        if (this.workorder.frequencyspandate != "") {
            var someDate = new Date(this.workorder.frequencydate);
            var numberOfHoursToAdd = this.workorder.frequency;
            var addedDate = someDate.getHours() + Number(numberOfHoursToAdd);
            this.workorder.frequencyspandate = someDate.setHours(addedDate);
        }
        this.db.updateWorkorder(this.workorder).then(function (order) {
            //this.viewCtrl.dismiss(order);
        });
        /*  console.log('Update')
           const control = <FormArray>this.preventiveMaintenaceForm.controls['itemArray'];
           console.log(control);
           
           for (var i = 0; i < control.value.length; i++) {
             var itemObject = {
               id: Math.round((new Date()).getTime()).toString(),
               maintenanceItem: control.value[i].maintenanceitem,
               steps: control.value[i].steps,
               status: true,
               priority: control.value[i].priority,
               responsibility: control.value[i].responsibility
             }
    
             this.preventivemaintenance.itemarray.push(itemObject);
           }
    
           if (this.preventivemaintenance.frequencyspandate != "") {
    
             var someDate = new Date(this.preventivemaintenance.frequencydate);
             var numberOfHoursToAdd = this.preventivemaintenance.frequency;
             var addedDate = someDate.getHours() + Number(numberOfHoursToAdd);
             this.preventivemaintenance.frequencyspandate = someDate.setHours(addedDate);
           }
           this.db.updatePreventivemaintenance(this.preventivemaintenance).then(order => {
             this.viewCtrl.dismiss(order);
           }) */
    };
    VieworderequipmentPage.prototype.submitNew = function () {
        if (this.equipment.woId != '') {
            var control = this.workOrderForm.controls['itemArray'];
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
                this.workorder.itemarray.push(itemObject);
            }
            if (this.workorder.frequencyspandate != "") {
                var someDate = new Date(this.workorder.frequencydate);
                var numberOfHoursToAdd = this.workorder.frequency;
                var addedDate = someDate.getHours() + Number(numberOfHoursToAdd);
                this.workorder.frequencyspandate = someDate.setHours(addedDate);
            }
            this.db.updateWorkorder(this.workorder).then(function (order) {
                //this.viewCtrl.dismiss(order);
            });
        }
    };
    VieworderequipmentPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    VieworderequipmentPage.prototype.radioClick = function (event) {
        this.radioOther = true;
    };
    VieworderequipmentPage.prototype.radioClickMnth = function () {
        var monthHours = 30 * 24;
        this.workorder.frequency = monthHours;
        this.radioOther = false;
    };
    VieworderequipmentPage.prototype.radioClickwek = function () {
        var weekHours = 7 * 24;
        this.workorder.frequency = weekHours;
        this.radioOther = false;
    };
    VieworderequipmentPage.prototype.radioClickday = function () {
        var dailyHours = 24;
        this.workorder.frequency = dailyHours;
        this.radioOther = false;
    };
    VieworderequipmentPage.prototype.deleteItem = function (item, i) {
        this.workorder.itemarray.splice(i, 1);
        this.db.updateWorkorder(this.workorder).then(function (order) {
        });
        /* const control = <FormArray>this.preventivemaintenance.itemarray;
        control.removeAt(i); */
    };
    VieworderequipmentPage.prototype.deleteItemAdded = function (i) {
        var control = this.workOrderForm.controls['itemArray'];
        control.removeAt(i);
    };
    VieworderequipmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-vieworderequipment',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\vieworderequipment\vieworderequipment.html"*/'<ion-header>\n\n  <ion-navbar color="secondary">\n\n    <ion-buttons left>\n\n      <button color="primary" ion-button (click)="cancel()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title class="title-color">{{title}} Work Order</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-primary50" padding>\n\n  <!-- <form margin-top > -->\n\n    <fieldset [disabled]="showButton">\n\n      <ion-input type="hidden" [(ngModel)]="workorder.equipmentcatid" name="equipmentcatid"\n\n        ></ion-input>\n\n      <ion-input type="hidden" [(ngModel)]="workorder.equipmentpartid" name="equipmentpartid"\n\n        ></ion-input>\n\n      <ion-input type="hidden" [(ngModel)]="workorder.tagid" name="tagid"\n\n        ></ion-input>\n\n\n\n        <ion-item>\n\n          <span>Date Created</span>\n\n          <ion-icon item-right name="md-calendar"></ion-icon>\n\n          <ion-input placeholder="Date" type="date" [(ngModel)]="workorder.datewo" name="datewo"></ion-input>\n\n        </ion-item>\n\n      <!--  <ion-item>\n\n        <ion-input placeholder="WO/PM No" type="text" [(ngModel)]="preventivemaintenance.pmno" (ngModelChange)="checkPMNO()" name="pmno"\n\n          disabled></ion-input>\n\n        <ion-label color="danger" no-margin>{{error}}</ion-label>\n\n      </ion-item> -->\n\n      <!-- <ion-item>\n\n        <span>Date Created</span>\n\n        <ion-icon item-right name="md-calendar"></ion-icon>\n\n        <ion-input placeholder="Date" type="date" [(ngModel)]="pm.date" name="date"></ion-input>\n\n      </ion-item> -->\n\n      <!--  <ion-item>\n\n        <ion-input placeholder="Facility" type="text" [(ngModel)]="preventivemaintenance.faculty" name="faculty" disabled></ion-input>\n\n      </ion-item> -->\n\n      <!-- <ion-item>\n\n        <ion-input placeholder="Location" type="text" [(ngModel)]="preventivemaintenance.exactlocation" name="exactlocation"></ion-input>\n\n      </ion-item> -->\n\n      <br>\n\n      <div *ngFor="let item of workorder.itemarray; let i=index">\n\n        <ion-icon name="close-circle" class="float-right" (click)="deleteItem(item, i)" class="align-icon"\n\n          ></ion-icon>\n\n        <ion-item padding>\n\n          <ion-input placeholder="Maintenance Items" type="text" \n\n            name="maintenanceItem" [(ngModel)]="item.maintenanceItem"></ion-input>\n\n        </ion-item>\n\n        <!-- <ion-item>\n\n        <ion-textarea placeholder="Description" type="text" [(ngModel)]="preventivemaintenance.description" name="description"></ion-textarea>\n\n      </ion-item> -->\n\n        <ion-item>\n\n          <ion-textarea placeholder="Write steps here!" type="text" \n\n            name="steps" [(ngModel)]="item.steps"></ion-textarea>\n\n        </ion-item>\n\n        <!--  <ion-item>\n\n        <ion-textarea placeholder="Write job safety advice!" type="text" [(ngModel)]="preventivemaintenance.precautions" name="precautions"></ion-textarea>\n\n      </ion-item> -->\n\n        <ion-item>\n\n          <ion-label>Priority</ion-label>\n\n          <ion-select  name="priority" [(ngModel)]="item.priority">\n\n            <ion-option *ngFor="let priority of priorities" [value]="priority"\n\n              [selected]="selectedPriority == priority">{{priority}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>Responsibility</ion-label>\n\n          <ion-select  name="responsibility" [(ngModel)]="item.responsibility">\n\n            <ion-option *ngFor="let responsibility of responsibilities" [value]="responsibility"\n\n              [selected]="selectedResponsibility == responsibility">{{responsibility}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <button ion-button type="submit" block [disabled]="!workorder.workorderno || error"\n\n        (click)="submit(item, i, $event)">Update</button>\n\n        </div>\n\n      </fieldset>\n\n        \n\n      <br>\n\n      <form margin-top [formGroup]="workOrderForm">\n\n      <div formArrayName="itemArray">\n\n      <div *ngFor="let item of workOrderForm.controls.itemArray.controls; let i=index">\n\n          <div  [formGroupName]="i">\n\n        <ion-icon *ngIf="workOrderForm.controls.itemArray.controls.length > 1" name="close-circle" class="float-right" (click)="deleteItemAdded(i)" class="align-icon"\n\n          ></ion-icon>\n\n        <ion-item padding>\n\n          <ion-input placeholder="Maintenance Items" type="text" \n\n            name="maintenanceitem" formControlName="maintenanceitem"></ion-input>\n\n        </ion-item>\n\n        <!-- <ion-item>\n\n        <ion-textarea placeholder="Description" type="text" [(ngModel)]="preventivemaintenance.description" name="description"></ion-textarea>\n\n      </ion-item> -->\n\n        <ion-item>\n\n          <ion-textarea placeholder="Write steps here!" type="text" \n\n            name="steps" formControlName="steps"></ion-textarea>\n\n        </ion-item>\n\n        <!--  <ion-item>\n\n        <ion-textarea placeholder="Write job safety advice!" type="text" [(ngModel)]="preventivemaintenance.precautions" name="precautions"></ion-textarea>\n\n      </ion-item> -->\n\n        <ion-item>\n\n          <ion-label>Priority</ion-label>\n\n          <ion-select  name="priority"\n\n            formControlName="priority">\n\n            <ion-option *ngFor="let priority of priorities" [value]="priority"\n\n              [selected]="selectedPriority == priority">{{priority}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>Responsibility</ion-label>\n\n          <ion-select  name="responsibility"\n\n            formControlName="responsibility">\n\n            <ion-option *ngFor="let responsibility of responsibilities" [value]="responsibility"\n\n              [selected]="selectedResponsibility == responsibility">{{responsibility}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        </div>\n\n        </div>\n\n      </div>\n\n\n\n      <button ion-fab mini class="float-right" (click)="addItemArray()">\n\n        <ion-icon name="md-add"></ion-icon>\n\n      </button>\n\n      <button ion-button type="submit" block [disabled]="!workorder.workorderno || error"\n\n        (click)="submitNew()">Submit</button>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\vieworderequipment\vieworderequipment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_httpservice__["a" /* HttpserviceProvider */], __WEBPACK_IMPORTED_MODULE_2__pouch_service_pouch_service__["a" /* PouchService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */]])
    ], VieworderequipmentPage);
    return VieworderequipmentPage;
}());

//# sourceMappingURL=vieworderequipment.js.map

/***/ })

});
//# sourceMappingURL=11.js.map