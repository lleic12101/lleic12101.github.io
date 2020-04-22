///<reference path="TeacherTabsModel.ts"/>
///<reference path="../callOnline/CallOnlineView.ts"/>
var TeacherTabsController = (function () {
    function TeacherTabsController(model) {
        var _this = this;
        this.model = model;
        EventBus.addEventListener(CallOnlineView.CALLS_AVAILABILITY_BUTTON_CLICKED, function () { return _this.onAvailabilityButtonClicked(); });
        EventBus.addEventListener(CallOnlineView.CALLS_ENABLED_BUTTON_YES_CLICKED, function () { return _this.onCallsAvailabilityButtonYesClicked(); });
        EventBus.addEventListener(CallOnlineView.CALLS_ENABLED_BUTTON_NO_CLICKED, function () { return _this.onCallsAvailabilityButtonNoClicked(); });
        EventBus.addEventListener(CallOnlineView.CALLS_DISABLED_BUTTON_YES_CLICKED, function () { return _this.onCallsDisabledButtonYesClicked(); });
        EventBus.addEventListener(CallOnlineView.CALLS_DISABLED_BUTTON_NO_CLICKED, function () { return _this.onCallsDisabledButtonNoClicked(); });
    }
    TeacherTabsController.prototype.onAvailabilityButtonClicked = function () {
        this.model.onCallsAvailabilityChangeRequest();
    };
    TeacherTabsController.prototype.onCallsAvailabilityButtonYesClicked = function () {
        this.model.onCallsAvailabilityButtonYesClicked();
    };
    TeacherTabsController.prototype.onCallsAvailabilityButtonNoClicked = function () {
        this.model.onCallsAvailabilityButtonNoClicked();
    };
    TeacherTabsController.prototype.onCallsDisabledButtonYesClicked = function () {
        this.model.onCallsDisabledButtonYesClicked();
    };
    TeacherTabsController.prototype.onCallsDisabledButtonNoClicked = function () {
        this.model.onCallsDisabledButtonNoClicked();
    };
    return TeacherTabsController;
}());
//# sourceMappingURL=TeacherTabsController.js.map