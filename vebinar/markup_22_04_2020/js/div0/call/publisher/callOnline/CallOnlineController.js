///<reference path="CallOnlineModel.ts"/>
///<reference path="../teacherTabs/TeacherTabsEvent.ts"/>
var CallOnlineController = (function () {
    function CallOnlineController(model) {
        var _this = this;
        this.model = model;
        EventBus.addEventListener(CallersListEvent.APPLY_CALL, function (data) { return _this.onApplyCall(data); });
        EventBus.addEventListener(CurrentCallEvent.CANCEL_CURRENT_CALL, function (socketId) { return _this.onCancelCurrentCall(socketId); });
        EventBus.addEventListener(CallOnlineView.CALLS_AVAILABILITY_BUTTON_CLICKED, function () { return _this.onAvailabilityButtonClicked(); });
        EventBus.addEventListener(CallOnlineView.CALLS_ENABLED_BUTTON_YES_CLICKED, function () { return _this.onCallsEnabledButtonYesClicked(); });
        EventBus.addEventListener(CallOnlineView.CALLS_ENABLED_BUTTON_NO_CLICKED, function () { return _this.onCallsAvailabilityButtonNoClicked(); });
        EventBus.addEventListener(CallOnlineView.CALLS_DISABLED_BUTTON_YES_CLICKED, function () { return _this.onCallsDisabledButtonYesClicked(); });
        EventBus.addEventListener(CallOnlineView.CALLS_DISABLED_BUTTON_NO_CLICKED, function () { return _this.onCallsDisabledButtonNoClicked(); });
        EventBus.addEventListener(CallOnlineEvent.PUBLISHER_CANCELED_CURRENT_CALL, function () { return _this.onCallCanceled(); });
        EventBus.addEventListener(TeacherTabsEvent.ON_SHOW_CALLERS_LIST, function () { return _this.onShowCalersList(); });
    }
    CallOnlineController.prototype.getCurrentCallerName = function () {
        return this.model.getCurrentCallerName();
    };
    CallOnlineController.prototype.onCurrentCallCanceled = function () {
        this.model.onCurrentCallCanceled();
    };
    CallOnlineController.prototype.onApplyCall = function (data) {
        this.model.onCallApplied(data);
    };
    CallOnlineController.prototype.onCancelCurrentCall = function (socketId) {
        this.model.onCancelCurrentCall();
    };
    CallOnlineController.prototype.onAvailabilityButtonClicked = function () {
        this.model.onAvailabilityButtonClicked();
    };
    CallOnlineController.prototype.onCallsEnabledButtonYesClicked = function () {
        this.model.onCallsEnabledButtonYesClicked();
    };
    CallOnlineController.prototype.onCallsAvailabilityButtonNoClicked = function () {
        this.model.onCallsEnabledButtonNoClicked();
    };
    CallOnlineController.prototype.onCallsDisabledButtonYesClicked = function () {
        this.model.onCallsDisabledButtonYesClicked();
    };
    CallOnlineController.prototype.onCallsDisabledButtonNoClicked = function () {
        this.model.onCallsDisabledButtonNoClicked();
    };
    CallOnlineController.prototype.onShowCalersList = function () {
        this.model.onShowCallersList();
    };
    CallOnlineController.prototype.onCallCanceled = function () {
        this.model.onCallCanceled();
    };
    return CallOnlineController;
}());
//# sourceMappingURL=CallOnlineController.js.map