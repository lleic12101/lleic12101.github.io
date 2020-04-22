///<reference path="CallersListModel.ts"/>
///<reference path="../../../../lib/events/EventBus.ts"/>
///<reference path="../../../service/socket/SocketEvent.ts"/>
///<reference path="../callOnline/CallOnlineEvent.ts"/>
var CallersListController = (function () {
    function CallersListController(model) {
        var _this = this;
        this.model = model;
        EventBus.addEventListener(SocketEvent.ON_CALL_REQUEST, function (data) { return _this.onSubscriberCallRequest(data); });
        EventBus.addEventListener(SocketEvent.ON_CALL_REQUEST_TIMED_OUT, function (data) { return _this.onSubscriberCallRequestTimedOut(data); });
        EventBus.addEventListener(CallersListEvent.APPLY_CALL, function (data) { return _this.onApplyCall(data); });
        EventBus.addEventListener(CallOnlineEvent.CALLS_ONLINE_AVAILABILITY_CHANGED, function (enabled) { return _this.onCallsAvailabilityChanged(enabled); });
    }
    CallersListController.prototype.onShowRequest = function () {
        this.model.onShowRequest();
    };
    CallersListController.prototype.onHideRequest = function () {
        this.model.onHideRequest();
    };
    CallersListController.prototype.onSubscriberCallRequest = function (data) {
        this.model.onSubscriberCallRequest(data);
    };
    CallersListController.prototype.onSubscriberCallRequestTimedOut = function (data) {
        this.model.onSubscriberCallRequestTimedOut(data);
    };
    CallersListController.prototype.onApplyCall = function (data) {
        this.model.onCallApplied();
    };
    CallersListController.prototype.onCallsAvailabilityChanged = function (enabled) {
        this.model.onCallsAvailabilityChanged(enabled);
    };
    return CallersListController;
}());
//# sourceMappingURL=CallersListController.js.map