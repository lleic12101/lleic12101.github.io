///<reference path="CurrentCallView.ts"/>
///<reference path="../callOnline/Caller.ts"/>
var CurrentCallModel = (function () {
    function CurrentCallModel(view) {
        this.view = view;
    }
    CurrentCallModel.prototype.setCaller = function (caller) {
        this.caller = caller;
        this.view.setCaller(caller);
    };
    CurrentCallModel.prototype.onShowRequest = function () {
        this.view.show();
    };
    CurrentCallModel.prototype.onHideRequest = function () {
        this.view.hide();
    };
    CurrentCallModel.prototype.onCancelCurrentCall = function () {
        console.log("current call view onCancelCurrentCall. need to destroy Timer");
    };
    return CurrentCallModel;
}());
//# sourceMappingURL=CurrentCallModel.js.map