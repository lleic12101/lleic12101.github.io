///<reference path="CallersListView.ts"/>
var CallersListModel = (function () {
    function CallersListModel(view) {
        this.view = view;
    }
    CallersListModel.prototype.onSubscriberCallRequest = function (data) {
        console.log("onSubscriberCallRequest data=", data);
        this.view.addCallerRequest(data);
    };
    CallersListModel.prototype.onSubscriberCallRequestTimedOut = function (data) {
        this.view.removeCallerRequest(data);
    };
    CallersListModel.prototype.onCallApplied = function () {
        this.view.hide();
    };
    CallersListModel.prototype.onHideRequest = function () {
        this.view.hide();
    };
    CallersListModel.prototype.onShowRequest = function () {
        this.view.show();
    };
    CallersListModel.prototype.onCallsAvailabilityChanged = function (enabled) {
        this.view.removeCallerRequests();
    };
    return CallersListModel;
}());
//# sourceMappingURL=CallersListModel.js.map