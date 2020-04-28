webpackJsonp([17],{

/***/ 779:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(860);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_local_notifications__ = __webpack_require__(825);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_local_notifications__["b" /* LocalNotifications */]
            ]
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 825:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ELocalNotificationTriggerUnit; });
/* unused harmony export ILocalNotificationActionType */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LocalNotifications; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
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



var ELocalNotificationTriggerUnit;
(function (ELocalNotificationTriggerUnit) {
    ELocalNotificationTriggerUnit["SECOND"] = "second";
    ELocalNotificationTriggerUnit["MINUTE"] = "minute";
    ELocalNotificationTriggerUnit["HOUR"] = "hour";
    ELocalNotificationTriggerUnit["DAY"] = "day";
    ELocalNotificationTriggerUnit["WEEK"] = "week";
    ELocalNotificationTriggerUnit["MONTH"] = "month";
    ELocalNotificationTriggerUnit["QUARTER"] = "quarter";
    ELocalNotificationTriggerUnit["YEAR"] = "year";
    ELocalNotificationTriggerUnit["WEEKDAY"] = "weekday";
    ELocalNotificationTriggerUnit["WEEKDAY_ORDINAL"] = "weekdayOrdinal";
    ELocalNotificationTriggerUnit["WEEK_OF_MONTH"] = "weekOfMonth";
})(ELocalNotificationTriggerUnit || (ELocalNotificationTriggerUnit = {}));
var ILocalNotificationActionType;
(function (ILocalNotificationActionType) {
    ILocalNotificationActionType["INPUT"] = "input";
    ILocalNotificationActionType["BUTTON"] = "button";
})(ILocalNotificationActionType || (ILocalNotificationActionType = {}));
/**
 * @name Local Notifications
 * @description
 * This plugin allows you to display local notifications on the device
 *
 * @usage
 * ```typescript
 * import { LocalNotifications } from '@ionic-native/local-notifications';
 *
 *
 * constructor(private localNotifications: LocalNotifications) { }
 *
 * ...
 *
 *
 * // Schedule a single notification
 * this.localNotifications.schedule({
 *   id: 1,
 *   text: 'Single ILocalNotification',
 *   sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
 *   data: { secret: key }
 * });
 *
 *
 * // Schedule multiple notifications
 * this.localNotifications.schedule([{
 *    id: 1,
 *    text: 'Multi ILocalNotification 1',
 *    sound: isAndroid ? 'file://sound.mp3': 'file://beep.caf',
 *    data: { secret:key }
 *   },{
 *    id: 2,
 *    title: 'Local ILocalNotification Example',
 *    text: 'Multi ILocalNotification 2',
 *    icon: 'http://example.com/icon.png'
 * }]);
 *
 *
 * // Schedule delayed notification
 * this.localNotifications.schedule({
 *    text: 'Delayed ILocalNotification',
 *    trigger: {at: new Date(new Date().getTime() + 3600)},
 *    led: 'FF0000',
 *    sound: null
 * });
 * ```
 * @interfaces
 * ILocalNotification
 */
var LocalNotifications = (function (_super) {
    __extends(LocalNotifications, _super);
    function LocalNotifications() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Informs if the app has the permission to show notifications.
     * @returns {Promise<boolean>}
     */
    /**
       * Informs if the app has the permission to show notifications.
       * @returns {Promise<boolean>}
       */
    LocalNotifications.prototype.hasPermission = /**
       * Informs if the app has the permission to show notifications.
       * @returns {Promise<boolean>}
       */
    function () {
        return;
    };
    /**
     * Request permission to show notifications if not already granted.
     * @returns {Promise<boolean>}
     */
    /**
       * Request permission to show notifications if not already granted.
       * @returns {Promise<boolean>}
       */
    LocalNotifications.prototype.requestPermission = /**
       * Request permission to show notifications if not already granted.
       * @returns {Promise<boolean>}
       */
    function () {
        return;
    };
    /**
     * Schedules a single or multiple notifications
     * @param options {Notification | Array<ILocalNotification>} optional
     */
    /**
       * Schedules a single or multiple notifications
       * @param options {Notification | Array<ILocalNotification>} optional
       */
    LocalNotifications.prototype.schedule = /**
       * Schedules a single or multiple notifications
       * @param options {Notification | Array<ILocalNotification>} optional
       */
    function (options) { };
    /**
     * Updates a previously scheduled notification. Must include the id in the options parameter.
     * @param options {ILocalNotification} optional
     */
    /**
       * Updates a previously scheduled notification. Must include the id in the options parameter.
       * @param options {ILocalNotification} optional
       */
    LocalNotifications.prototype.update = /**
       * Updates a previously scheduled notification. Must include the id in the options parameter.
       * @param options {ILocalNotification} optional
       */
    function (options) { };
    /**
     * Clears single or multiple notifications
     * @param notificationId {any} A single notification id, or an array of notification ids.
     * @returns {Promise<any>} Returns a promise when the notification had been cleared
     */
    /**
       * Clears single or multiple notifications
       * @param notificationId {any} A single notification id, or an array of notification ids.
       * @returns {Promise<any>} Returns a promise when the notification had been cleared
       */
    LocalNotifications.prototype.clear = /**
       * Clears single or multiple notifications
       * @param notificationId {any} A single notification id, or an array of notification ids.
       * @returns {Promise<any>} Returns a promise when the notification had been cleared
       */
    function (notificationId) {
        return;
    };
    /**
     * Clears all notifications
     * @returns {Promise<any>} Returns a promise when all notifications have cleared
     */
    /**
       * Clears all notifications
       * @returns {Promise<any>} Returns a promise when all notifications have cleared
       */
    LocalNotifications.prototype.clearAll = /**
       * Clears all notifications
       * @returns {Promise<any>} Returns a promise when all notifications have cleared
       */
    function () {
        return;
    };
    /**
     * Cancels single or multiple notifications
     * @param notificationId {any} A single notification id, or an array of notification ids.
     * @returns {Promise<any>} Returns a promise when the notification is canceled
     */
    /**
       * Cancels single or multiple notifications
       * @param notificationId {any} A single notification id, or an array of notification ids.
       * @returns {Promise<any>} Returns a promise when the notification is canceled
       */
    LocalNotifications.prototype.cancel = /**
       * Cancels single or multiple notifications
       * @param notificationId {any} A single notification id, or an array of notification ids.
       * @returns {Promise<any>} Returns a promise when the notification is canceled
       */
    function (notificationId) {
        return;
    };
    /**
     * Cancels all notifications
     * @returns {Promise<any>} Returns a promise when all notifications are canceled
     */
    /**
       * Cancels all notifications
       * @returns {Promise<any>} Returns a promise when all notifications are canceled
       */
    LocalNotifications.prototype.cancelAll = /**
       * Cancels all notifications
       * @returns {Promise<any>} Returns a promise when all notifications are canceled
       */
    function () {
        return;
    };
    /**
     * Checks presence of a notification
     * @param notificationId {number}
     * @returns {Promise<boolean>}
     */
    /**
       * Checks presence of a notification
       * @param notificationId {number}
       * @returns {Promise<boolean>}
       */
    LocalNotifications.prototype.isPresent = /**
       * Checks presence of a notification
       * @param notificationId {number}
       * @returns {Promise<boolean>}
       */
    function (notificationId) {
        return;
    };
    /**
     * Checks is a notification is scheduled
     * @param notificationId {number}
     * @returns {Promise<boolean>}
     */
    /**
       * Checks is a notification is scheduled
       * @param notificationId {number}
       * @returns {Promise<boolean>}
       */
    LocalNotifications.prototype.isScheduled = /**
       * Checks is a notification is scheduled
       * @param notificationId {number}
       * @returns {Promise<boolean>}
       */
    function (notificationId) {
        return;
    };
    /**
     * Checks if a notification is triggered
     * @param notificationId {number}
     * @returns {Promise<boolean>}
     */
    /**
       * Checks if a notification is triggered
       * @param notificationId {number}
       * @returns {Promise<boolean>}
       */
    LocalNotifications.prototype.isTriggered = /**
       * Checks if a notification is triggered
       * @param notificationId {number}
       * @returns {Promise<boolean>}
       */
    function (notificationId) {
        return;
    };
    /**
     * Check if a notification has a given type.
     * @param {number} id The ID of the notification.
     * @param {string} type  The type of the notification.
     * @returns {Promise<boolean>}
     */
    /**
       * Check if a notification has a given type.
       * @param {number} id The ID of the notification.
       * @param {string} type  The type of the notification.
       * @returns {Promise<boolean>}
       */
    LocalNotifications.prototype.hasType = /**
       * Check if a notification has a given type.
       * @param {number} id The ID of the notification.
       * @param {string} type  The type of the notification.
       * @returns {Promise<boolean>}
       */
    function (id, type) {
        return;
    };
    /**
     * Get the type (triggered, scheduled) for the notification.
     * @param {number} id The ID of the notification.
     */
    /**
       * Get the type (triggered, scheduled) for the notification.
       * @param {number} id The ID of the notification.
       */
    LocalNotifications.prototype.getType = /**
       * Get the type (triggered, scheduled) for the notification.
       * @param {number} id The ID of the notification.
       */
    function (id) {
        return;
    };
    /**
     * Get all the notification ids
     * @returns {Promise<Array<number>>}
     */
    /**
       * Get all the notification ids
       * @returns {Promise<Array<number>>}
       */
    LocalNotifications.prototype.getIds = /**
       * Get all the notification ids
       * @returns {Promise<Array<number>>}
       */
    function () {
        return;
    };
    /**
     * Get the ids of scheduled notifications
     * @returns {Promise<Array<number>>} Returns a promise
     */
    /**
       * Get the ids of scheduled notifications
       * @returns {Promise<Array<number>>} Returns a promise
       */
    LocalNotifications.prototype.getScheduledIds = /**
       * Get the ids of scheduled notifications
       * @returns {Promise<Array<number>>} Returns a promise
       */
    function () {
        return;
    };
    /**
     * Get the ids of triggered notifications
     * @returns {Promise<Array<number>>}
     */
    /**
       * Get the ids of triggered notifications
       * @returns {Promise<Array<number>>}
       */
    LocalNotifications.prototype.getTriggeredIds = /**
       * Get the ids of triggered notifications
       * @returns {Promise<Array<number>>}
       */
    function () {
        return;
    };
    /**
     * Get a notification object
     * @param notificationId {any} The id of the notification to get
     * @returns {Promise<ILocalNotification>}
     */
    /**
       * Get a notification object
       * @param notificationId {any} The id of the notification to get
       * @returns {Promise<ILocalNotification>}
       */
    LocalNotifications.prototype.get = /**
       * Get a notification object
       * @param notificationId {any} The id of the notification to get
       * @returns {Promise<ILocalNotification>}
       */
    function (notificationId) {
        return;
    };
    /**
     * Get all notification objects
     * @returns {Promise<Array<ILocalNotification>>}
     */
    /**
       * Get all notification objects
       * @returns {Promise<Array<ILocalNotification>>}
       */
    LocalNotifications.prototype.getAll = /**
       * Get all notification objects
       * @returns {Promise<Array<ILocalNotification>>}
       */
    function () {
        return;
    };
    /**
     * Adds a group of actions
     * @param groupId The id of the action group
     * @param actions The actions of this group
     * @returns {Promise<any>}
     */
    /**
       * Adds a group of actions
       * @param groupId The id of the action group
       * @param actions The actions of this group
       * @returns {Promise<any>}
       */
    LocalNotifications.prototype.addActions = /**
       * Adds a group of actions
       * @param groupId The id of the action group
       * @param actions The actions of this group
       * @returns {Promise<any>}
       */
    function (groupId, actions) {
        return;
    };
    /**
     * Removes a group of actions
     * @param groupId The id of the action group
     * @returns {Promise<any>}
     */
    /**
       * Removes a group of actions
       * @param groupId The id of the action group
       * @returns {Promise<any>}
       */
    LocalNotifications.prototype.removeActions = /**
       * Removes a group of actions
       * @param groupId The id of the action group
       * @returns {Promise<any>}
       */
    function (groupId) {
        return;
    };
    /**
     * Checks if a group of actions is defined
     * @param groupId The id of the action group
     * @returns {Promise<boolean>} Whether the group is defined
     */
    /**
       * Checks if a group of actions is defined
       * @param groupId The id of the action group
       * @returns {Promise<boolean>} Whether the group is defined
       */
    LocalNotifications.prototype.hasActions = /**
       * Checks if a group of actions is defined
       * @param groupId The id of the action group
       * @returns {Promise<boolean>} Whether the group is defined
       */
    function (groupId) {
        return;
    };
    /**
     * Gets the (platform specific) default settings.
     * @returns {Promise<any>} An object with all default settings
     */
    /**
       * Gets the (platform specific) default settings.
       * @returns {Promise<any>} An object with all default settings
       */
    LocalNotifications.prototype.getDefaults = /**
       * Gets the (platform specific) default settings.
       * @returns {Promise<any>} An object with all default settings
       */
    function () {
        return;
    };
    /**
     * Overwrites the (platform specific) default settings.
     * @returns {Promise<any>}
     */
    /**
       * Overwrites the (platform specific) default settings.
       * @returns {Promise<any>}
       */
    LocalNotifications.prototype.setDefaults = /**
       * Overwrites the (platform specific) default settings.
       * @returns {Promise<any>}
       */
    function (defaults) {
        return;
    };
    /**
     * List of all scheduled notifications
     * @returns {Promise<Array<ILocalNotification>>}
     */
    /**
       * List of all scheduled notifications
       * @returns {Promise<Array<ILocalNotification>>}
       */
    LocalNotifications.prototype.getScheduled = /**
       * List of all scheduled notifications
       * @returns {Promise<Array<ILocalNotification>>}
       */
    function () {
        return;
    };
    /**
     * List of all triggered notifications
     * @returns {Promise<Array<ILocalNotification>>}
     */
    /**
       * List of all triggered notifications
       * @returns {Promise<Array<ILocalNotification>>}
       */
    LocalNotifications.prototype.getTriggered = /**
       * List of all triggered notifications
       * @returns {Promise<Array<ILocalNotification>>}
       */
    function () {
        return;
    };
    /**
     * Sets a callback for a specific event
     * @param eventName {string} The name of the event. Available events: schedule, trigger, click, update, clear, clearall, cancel, cancelall. Custom event names are possible for actions
     * @return {Observable}
     */
    /**
       * Sets a callback for a specific event
       * @param eventName {string} The name of the event. Available events: schedule, trigger, click, update, clear, clearall, cancel, cancelall. Custom event names are possible for actions
       * @return {Observable}
       */
    LocalNotifications.prototype.on = /**
       * Sets a callback for a specific event
       * @param eventName {string} The name of the event. Available events: schedule, trigger, click, update, clear, clearall, cancel, cancelall. Custom event names are possible for actions
       * @return {Observable}
       */
    function (eventName) {
        return;
    };
    /**
     * Not an official interface, however its possible to manually fire events.
     * @param eventName The name of the event. Available events: schedule, trigger, click, update, clear, clearall, cancel, cancelall. Custom event names are possible for actions
     * @param args Optional arguments
     */
    /**
       * Not an official interface, however its possible to manually fire events.
       * @param eventName The name of the event. Available events: schedule, trigger, click, update, clear, clearall, cancel, cancelall. Custom event names are possible for actions
       * @param args Optional arguments
       */
    LocalNotifications.prototype.fireEvent = /**
       * Not an official interface, however its possible to manually fire events.
       * @param eventName The name of the event. Available events: schedule, trigger, click, update, clear, clearall, cancel, cancelall. Custom event names are possible for actions
       * @param args Optional arguments
       */
    function (eventName, args) { };
    /**
     * Fire queued events once the device is ready and all listeners are registered.
     * @returns {Promise<any>}
     */
    /**
       * Fire queued events once the device is ready and all listeners are registered.
       * @returns {Promise<any>}
       */
    LocalNotifications.prototype.fireQueuedEvents = /**
       * Fire queued events once the device is ready and all listeners are registered.
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    LocalNotifications.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], LocalNotifications.prototype, "hasPermission", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], LocalNotifications.prototype, "requestPermission", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            sync: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], LocalNotifications.prototype, "schedule", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            sync: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], LocalNotifications.prototype, "update", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], LocalNotifications.prototype, "clear", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], LocalNotifications.prototype, "clearAll", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], LocalNotifications.prototype, "cancel", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], LocalNotifications.prototype, "cancelAll", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], LocalNotifications.prototype, "isPresent", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], LocalNotifications.prototype, "isScheduled", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], LocalNotifications.prototype, "isTriggered", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, String]),
        __metadata("design:returntype", Promise)
    ], LocalNotifications.prototype, "hasType", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], LocalNotifications.prototype, "getType", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], LocalNotifications.prototype, "getIds", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], LocalNotifications.prototype, "getScheduledIds", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], LocalNotifications.prototype, "getTriggeredIds", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], LocalNotifications.prototype, "get", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], LocalNotifications.prototype, "getAll", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Array]),
        __metadata("design:returntype", Promise)
    ], LocalNotifications.prototype, "addActions", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], LocalNotifications.prototype, "removeActions", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], LocalNotifications.prototype, "hasActions", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            sync: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], LocalNotifications.prototype, "getDefaults", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            sync: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], LocalNotifications.prototype, "setDefaults", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], LocalNotifications.prototype, "getScheduled", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], LocalNotifications.prototype, "getTriggered", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            observable: true,
            clearFunction: 'un',
            clearWithArgs: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
    ], LocalNotifications.prototype, "on", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            sync: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", void 0)
    ], LocalNotifications.prototype, "fireEvent", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], LocalNotifications.prototype, "fireQueuedEvents", null);
    /**
     * @name Local Notifications
     * @description
     * This plugin allows you to display local notifications on the device
     *
     * @usage
     * ```typescript
     * import { LocalNotifications } from '@ionic-native/local-notifications';
     *
     *
     * constructor(private localNotifications: LocalNotifications) { }
     *
     * ...
     *
     *
     * // Schedule a single notification
     * this.localNotifications.schedule({
     *   id: 1,
     *   text: 'Single ILocalNotification',
     *   sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
     *   data: { secret: key }
     * });
     *
     *
     * // Schedule multiple notifications
     * this.localNotifications.schedule([{
     *    id: 1,
     *    text: 'Multi ILocalNotification 1',
     *    sound: isAndroid ? 'file://sound.mp3': 'file://beep.caf',
     *    data: { secret:key }
     *   },{
     *    id: 2,
     *    title: 'Local ILocalNotification Example',
     *    text: 'Multi ILocalNotification 2',
     *    icon: 'http://example.com/icon.png'
     * }]);
     *
     *
     * // Schedule delayed notification
     * this.localNotifications.schedule({
     *    text: 'Delayed ILocalNotification',
     *    trigger: {at: new Date(new Date().getTime() + 3600)},
     *    led: 'FF0000',
     *    sound: null
     * });
     * ```
     * @interfaces
     * ILocalNotification
     */
    LocalNotifications = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* Plugin */])({
            pluginName: 'LocalNotifications',
            plugin: 'cordova-plugin-local-notification',
            pluginRef: 'cordova.plugins.notification.local',
            repo: 'https://github.com/katzer/cordova-plugin-local-notifications',
            platforms: ['Android', 'iOS', 'Windows']
        })
    ], LocalNotifications);
    return LocalNotifications;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 860:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pouch_service_pouch_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_local_notifications__ = __webpack_require__(825);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pouch_service_popup__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, alertctrl, plt, db, localNotification, popUp) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertctrl = alertctrl;
        this.plt = plt;
        this.db = db;
        this.localNotification = localNotification;
        this.popUp = popUp;
        this.show = false;
        this.showWork = false;
        this.filteredWorkpermit = [];
        this.workpermits = [];
        this.filteredFaultregistry = [];
        this.faultregistrys = [];
        this.localStorageItem = JSON.parse(localStorage.getItem('user'));
        this.db.getSupervisor(this.localStorageItem).then(function (item) {
            _this.user = item;
            _this.name = item.name;
            _this.position = item.position;
        });
        if (this.plt.is('cordova')) {
            this.plt.ready().then(function (res) {
                _this.localNotification.on('click').subscribe(function (notification) {
                    var json = JSON.parse(notification.mydata);
                    var alert = _this.alertctrl.create({
                        title: notification.title,
                        subTitle: json.mydata
                    });
                    alert.present();
                });
            });
        }
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad SupervisorhomePage');
        this.localStorageItem = JSON.parse(localStorage.getItem('user'));
        this.db.getSupervisor(this.localStorageItem).then(function (item) {
            _this.user = item;
            _this.name = item.name;
            _this.position = item.position;
        });
        this._loadWorkpermits();
        this._loadWorkorder();
        this._loadFaultregistry();
        this.dailyWorkorder();
        this.allReport();
        this.allWorkpermit();
        this.allEquipments();
        this.allFaultregistrys();
        this._loadMateriallist();
    };
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.popUp.displayPopUp();
        this.localStorageItem = JSON.parse(localStorage.getItem('user'));
        console.log('ionViewDidLoad ViewworkpermitPage');
        this.db.getSupervisor(this.localStorageItem).then(function (item) {
            _this.user = item;
        });
        this._loadWorkpermits();
        this._loadWorkorder();
        this._loadFaultregistry();
        this.dailyWorkorder();
        this.allReport();
        this.allWorkpermit();
        this.allEquipments();
        this.allFaultregistrys();
        this._loadMateriallist();
    };
    HomePage.prototype._loadWorkorder = function () {
        var _this = this;
        this.localStorageItem = JSON.parse(localStorage.getItem('user'));
        this.db.getSupervisor(this.localStorageItem).then(function (item) {
            _this.filteredWorkorderLength = item.woalert.length;
        });
    };
    HomePage.prototype._loadFaultregistry = function () {
        var _this = this;
        this.db.getfaultregistrys()
            .then(function (faultregistrys) {
            _this.filteredFaultregistry = faultregistrys.filter(function (data) { return data.managerstatus == true; });
            _this.filteredFaultreistryLength = _this.filteredFaultregistry.length;
        });
    };
    HomePage.prototype._loadMateriallist = function () {
        var _this = this;
        this.db.getmaterials()
            .then(function (materialList) {
            _this.materialList = materialList.length;
        });
    };
    HomePage.prototype._loadWorkpermits = function () {
        var _this = this;
        this.db.getWorkpermits()
            .then(function (workpermits) {
            _this.filteredWorkpermit = workpermits.filter(function (data) { return data.mstatus == true || data.fixed == true; });
            _this.filteredWorkpermitLength = _this.filteredWorkpermit.length;
        });
    };
    HomePage.prototype.dailyWorkorder = function () {
        var _this = this;
        this.db.getWorkorders().then(function (res) {
            _this.totalWolength = res.length;
            if (_this.currentDate == undefined) {
                _this.dailyWo = res.filter(function (data) { return new Date(data.datecreated).toJSON().slice(0, 10).replace(/-/g, '-') == new Date().toJSON().slice(0, 10).replace(/-/g, '-'); });
                _this.dailyWolength = _this.dailyWo.length;
            }
            else {
                _this.dailyWo = res.filter(function (data) { return new Date(data.datecreated).toJSON().slice(0, 10).replace(/-/g, '-') == _this.currentDate; });
                _this.dailyWolength = _this.dailyWo.length;
            }
        });
    };
    HomePage.prototype.allReport = function () {
        var _this = this;
        this.db.getdailyreports().then(function (res) {
            _this.dailyallReport = res.filter(function (data) { return data.datecreated == new Date().toJSON().slice(0, 10).replace(/-/g, '-'); });
            _this.dailyallReportlength = _this.dailyallReport.length;
        });
    };
    HomePage.prototype.allWorkpermit = function () {
        var _this = this;
        this.db.getWorkpermits().then(function (res) {
            _this.deptWorkpermitslength = res.length;
        });
    };
    HomePage.prototype.allEquipments = function () {
        var _this = this;
        this.db.getEquipmentcats().then(function (res) {
            _this.equipmentLength = res.length;
        });
    };
    HomePage.prototype.allFaultregistrys = function () {
        var _this = this;
        this.db.getfaultregistrys().then(function (res) {
            _this.faultRegistrylength = res.length;
        });
    };
    HomePage.prototype.toggleSelection = function (index) {
        this.show = !this.show;
        this.showWork = false;
    };
    HomePage.prototype.toggleSelection2 = function (index) {
        this.showWork = !this.showWork;
        this.show = false;
    };
    HomePage.prototype.openEngineer = function () {
        this.navCtrl.push('EngineersPage');
    };
    HomePage.prototype.openRegistry = function () {
        var _this = this;
        this.navCtrl.push('FaultregistryPage');
        this.db.getfaultregistrys()
            .then(function (faultregistrys) {
            _this.filteredFaultregistry = faultregistrys.filter(function (data) { return data.managerstatus == true; });
            _this.filteredFaultregistry.forEach(function (item) {
                item.managerstatus = false;
                _this.db.updatefaultregistry(item).then(function (res) {
                    _this._loadFaultregistry();
                });
            });
        });
    };
    HomePage.prototype.openPm = function () {
        var _this = this;
        this.navCtrl.push('PreventivemaintenancePage');
        this.db.getSupervisor(this.localStorageItem).then(function (data) {
            data.woalert = [];
            _this.db.updateSupervisor(data).then(function (res) {
                _this._loadWorkorder();
            });
        });
    };
    HomePage.prototype.openWorkorder = function () {
        this.navCtrl.push('WorkorderPage');
    };
    HomePage.prototype.openSpareparts = function () {
        this.navCtrl.push('SparepartsPage');
    };
    HomePage.prototype.openMaterial = function () {
        this.navCtrl.push('MaterialPage');
    };
    HomePage.prototype.openEquipments = function () {
        this.navCtrl.push('EquipmentPage');
    };
    HomePage.prototype.openDailyreport = function () {
        this.navCtrl.push('ViewdailyreportPage');
    };
    HomePage.prototype.openWorkerschedules = function () {
        this.navCtrl.push('WorkerschedulePage');
    };
    HomePage.prototype.openWorkPermit = function () {
        var _this = this;
        this.navCtrl.push('ViewworkpermitPage');
        this.db.getWorkpermits()
            .then(function (workpermits) {
            _this.filteredWorkpermit = workpermits.filter(function (data) { return data.mstatus == true; });
            _this.filteredWorkpermit.forEach(function (item) {
                item.mstatus = false;
                item.fixed = false;
                _this.db.updateWorkpermit(item).then(function (res) {
                    _this._loadWorkpermits();
                });
            });
        });
    };
    HomePage.prototype.dailyWorkPermit = function () {
        this.navCtrl.push('ViewworkpermitPage');
    };
    HomePage.prototype.dailyWO = function () {
        this.navCtrl.push('DailyworkorderPage');
    };
    HomePage.prototype.dailyReport = function () {
        this.navCtrl.push('DailyreportPage');
    };
    HomePage.prototype.logOut = function () {
        localStorage.removeItem('user');
        this.navCtrl.push('LoginPage');
    };
    HomePage.prototype.genNotify = function () {
        alert("This Works");
        if (this.plt.is('cordova')) {
            this.localNotification.schedule({
                id: 1,
                title: 'Attention',
                text: 'Courage Notification',
                data: { mydata: 'My hidden message' },
                trigger: { in: 5, unit: __WEBPACK_IMPORTED_MODULE_3__ionic_native_local_notifications__["a" /* ELocalNotificationTriggerUnit */].SECOND },
                led: 'FF0000',
                sound: null
            });
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\home\home.html"*/'<ion-split-pane id=\'home\'>\n\n  <ion-menu type="overlay" [content]="mycontent" class="bg-primary50">\n\n    <ion-content class="bg-primary50 margin-top">\n\n      <ion-list>\n\n        <button color="dark" ion-item detail-push (click)="openEngineer()"><span class="icon-color"><ion-icon name="person-add" padding-right padding-left></ion-icon>Supervisors</span><ion-icon class="icon-color2" item-right name="ios-arrow-forward"></ion-icon></button>\n\n        <button color="dark" ion-item detail-push (click)="openRegistry()"><span class="icon-color"><ion-icon name="ios-clipboard" padding-right padding-left ></ion-icon>Fault Registry</span><ion-icon item-right class="icon-color2" name="ios-arrow-forward"></ion-icon> <ion-badge *ngIf="filteredFaultreistryLength!=0" id="notifications-badge" color="danger">{{filteredFaultreistryLength}}</ion-badge></button>\n\n        <button color="dark" ion-item detail-push (click)="openPm()"><span class="icon-color"><ion-icon name="ios-construct" padding-right padding-left ></ion-icon>PM/Work Order</span><ion-icon item-right class="icon-color2" name="ios-arrow-forward"></ion-icon> <ion-badge *ngIf="filteredWorkorderLength!=0" id="notifications-badge" color="danger">{{filteredWorkorderLength}}</ion-badge></button>\n\n        <button color="dark" ion-item detail-push (click)="openDailyreport()"><span class="icon-color"><ion-icon name="ios-copy" padding-right padding-left ></ion-icon>Total Daily Reports</span><ion-icon item-right class="icon-color2" name="ios-arrow-forward"></ion-icon></button>\n\n        <button color="dark" ion-item detail-push (click)="openWorkPermit()"><span class="icon-color"><ion-icon name="ios-clipboard" padding-right padding-left></ion-icon>Work Permit</span><ion-icon class="icon-color2" item-right name="ios-arrow-forward"></ion-icon> <ion-badge *ngIf="filteredWorkpermitLength!=0" id="notifications-badge" color="danger">{{filteredWorkpermitLength}}</ion-badge></button>\n\n        <button color="dark" ion-item detail-push (click)="toggleSelection(index)"><span class="icon-color"><ion-icon name="hammer" padding-right padding-left ></ion-icon>Equipments</span><ion-icon *ngIf="!show" item-right class="icon-color2" name="ios-arrow-forward"></ion-icon><ion-icon *ngIf="show" item-right class="icon-color2" name="ios-arrow-down"></ion-icon></button>\n\n        <button *ngIf="show" color="light" ion-item detail-push (click)="openEquipments()"><span><ion-icon name="ios-add" padding-right padding-left ></ion-icon>Equipment Category</span><ion-icon item-right class="icon-color2" name="ios-arrow-forward"></ion-icon></button>\n\n        <button *ngIf="show" color="light" ion-item detail-push (click)="openSpareparts()"><span><ion-icon name="ios-build" padding-right padding-left ></ion-icon>Equipment Parts</span><ion-icon item-right class="icon-color2" name="ios-arrow-forward"></ion-icon></button>\n\n        <!-- <button *ngIf="show" color="light" ion-item detail-push (click)="openAddequipments()"><span><ion-icon name="md-backspace" padding-right padding-left ></ion-icon>Add Equipments</span><ion-icon item-right class="icon-color2" name="ios-arrow-forward"></ion-icon></button>   -->\n\n        <!-- <button  color="dark" ion-item detail-push (click)="openSpareparts()"><span class="icon-color"><ion-icon name="ios-build" padding-right padding-left ></ion-icon>Spare Parts</span><ion-icon item-right class="icon-color2" name="ios-arrow-forward"></ion-icon></button> -->\n\n        <!-- <button color="dark" ion-item detail-push><span class="icon-color"><ion-icon name="md-contacts" padding-right padding-left ></ion-icon>Workers Schedule</span><ion-icon item-right class="icon-color2" name="ios-arrow-forward"></ion-icon></button> -->\n\n        <button color="dark" ion-item detail-push (click)="openMaterial()"><span class="icon-color"><ion-icon name="ios-clipboard" padding-right padding-left></ion-icon>Material List</span><ion-icon class="icon-color2" item-right name="ios-arrow-forward"></ion-icon></button>\n\n        <!-- <button color="dark" ion-item detail-push (click)="openEngineer()"><span class="icon-color"><ion-icon name="ios-clipboard" padding-right padding-left></ion-icon>Operation Manual</span><ion-icon class="icon-color2" item-right name="ios-arrow-forward"></ion-icon></button> -->\n\n      </ion-list>\n\n    </ion-content>\n\n  </ion-menu>\n\n  <ion-nav #mycontent main swipeBackEnabled="false"></ion-nav>\n\n\n\n  <ion-header>\n\n    <ion-navbar hideBackButton color="primary">\n\n      <ion-title>\n\n        NO&G PM\n\n      </ion-title>\n\n      <div class="align-user"> <strong>{{name}}</strong><br> ({{position}})</div>\n\n      <ion-buttons end>\n\n        <button (click)="logOut()" ion-button icon-only>\n\n                    <ion-icon name="ios-exit-outline"></ion-icon>\n\n                </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n  <ion-content class="background-image">\n\n    <div class="bg-color bg-size">\n\n      <div>\n\n        <ion-row class="wlm-msg" align-items-start>\n\n          <ion-col align-self-baseline col-12>\n\n            <ion-list text-center>\n\n              <img src="assets/images/NOG-LOGO.jpg" width="200px" />\n\n              <h3 class="title">OGPOOC (CMMS)</h3>\n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>\n\n            <ion-card>\n\n              <form>\n\n                <ion-item>\n\n                  <ion-icon item-right name="md-calendar"></ion-icon>\n\n                  <ion-input [(ngModel)]="currentDate" (ngModelChange)="dailyWorkorder()" placeholder="Date" type="date" name="date"></ion-input>\n\n                </ion-item>\n\n              </form>\n\n              <ion-item>\n\n                <ion-icon item-left name="document"></ion-icon>\n\n                <strong color="dark">Daily Work Order/PM actions</strong>\n\n              </ion-item>\n\n              <ion-item class="txt-size">{{dailyWolength}}</ion-item>\n\n              <ion-item><button ion-button item-right (click)="openPm()" small>View Work Orders</button></ion-item>\n\n            </ion-card>\n\n          </ion-col>\n\n           <ion-col>\n\n            <ion-card>\n\n              <form>\n\n                <ion-item>\n\n                </ion-item>\n\n              </form>\n\n              <ion-item>\n\n                <ion-icon item-left name="ios-clipboard"></ion-icon>\n\n                <strong color="dark">Daily Reports</strong>\n\n              </ion-item>\n\n              <ion-item class="txt-size">{{dailyallReportlength}}</ion-item>\n\n              <ion-item><button ion-button item-right (click)="openDailyreport()" small>View Work Daily Reports</button></ion-item>\n\n            </ion-card>\n\n          </ion-col>\n\n          <ion-col>\n\n            <ion-card>\n\n              <ion-item>\n\n              </ion-item>\n\n              <ion-item>\n\n                <ion-icon item-left name="document"></ion-icon>\n\n                <strong color="dark">Work Permit</strong>\n\n              </ion-item>\n\n              <ion-item class="txt-size">{{deptWorkpermitslength}}</ion-item>\n\n              <ion-item><button ion-button item-right small (click)="openWorkPermit()">View Work Permit List</button></ion-item>\n\n            </ion-card>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-span="3">\n\n            <ion-card class="card-point">\n\n              <ion-item>\n\n                <ion-icon item-left name="ios-clipboard"></ion-icon>\n\n                <strong color="dark">Available Material</strong>\n\n              </ion-item>\n\n              <ion-item class="txt-size">{{materialList}}</ion-item>\n\n              <ion-item><button ion-button item-right (click)="openMaterial()" small>View Material List</button></ion-item>\n\n            </ion-card>\n\n          </ion-col>\n\n          <ion-col col-span="3">\n\n            <ion-card>\n\n              <ion-item>\n\n                <ion-icon item-left name="ios-construct"></ion-icon>\n\n                <strong color="dark">Equipmets</strong>\n\n              </ion-item>\n\n              <ion-item class="txt-size">{{equipmentLength}}</ion-item>\n\n              <ion-item><button ion-button item-right small (click)="openEquipments()">View Equipments</button></ion-item>\n\n            </ion-card>\n\n          </ion-col>\n\n          <ion-col col-span="3">\n\n            <ion-card>\n\n              <ion-item>\n\n                <ion-icon item-left name="ios-cog"></ion-icon>\n\n                <strong color="dark">No of Fault Registry</strong>\n\n              </ion-item>\n\n              <ion-item class="txt-size">{{faultRegistrylength}}</ion-item>\n\n              <ion-item><button ion-button item-right small (click)="openRegistry()">View Fault Registry</button></ion-item>\n\n            </ion-card>\n\n          </ion-col>\n\n          <ion-col col-span="3">\n\n            <ion-card class="card-point">\n\n              <ion-item>\n\n                <ion-icon item-left name="ios-folder-open"></ion-icon>\n\n                <strong color="dark">Total No of PM/Work Order History</strong>\n\n              </ion-item>\n\n              <ion-item class="txt-size">{{totalWolength}}</ion-item>\n\n              <ion-item><button ion-button item-right small (click)="openPm()">View PM</button></ion-item>\n\n            </ion-card>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n\n\n      </div>\n\n      <ion-fab class="align-bottom" bottom left menuToggle>\n\n        <button ion-fab mini>\n\n              <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n      </ion-fab>\n\n    </div>\n\n  </ion-content>\n\n</ion-split-pane>'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nogsever\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__pouch_service_pouch_service__["a" /* PouchService */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_local_notifications__["b" /* LocalNotifications */], __WEBPACK_IMPORTED_MODULE_4__pouch_service_popup__["a" /* PopupProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=17.js.map