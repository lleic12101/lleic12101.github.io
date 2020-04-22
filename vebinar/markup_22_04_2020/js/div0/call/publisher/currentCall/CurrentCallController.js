///<reference path="CurrentCallModel.ts"/>
///<reference path="../callOnline/Caller.ts"/>
var CurrentCallController = (function () {
    function CurrentCallController(model) {
        this.model = model;
    }
    CurrentCallController.prototype.setCaller = function (caller) {
        this.model.setCaller(caller);
    };
    CurrentCallController.prototype.onShowRequest = function () {
        this.model.onShowRequest();
    };
    CurrentCallController.prototype.onHideRequest = function () {
        this.model.onHideRequest();
    };
    CurrentCallController.prototype.cancelCurrentCall = function () {
        this.model.onCancelCurrentCall();
    };
    return CurrentCallController;
}());
//# sourceMappingURL=CurrentCallController.js.map