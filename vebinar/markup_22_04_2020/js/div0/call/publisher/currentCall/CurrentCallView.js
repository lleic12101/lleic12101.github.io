///<reference path="../callOnline/Caller.ts"/>
///<reference path="../../../../lib/events/EventBus.ts"/>
///<reference path="CurrentCallEvent.ts"/>
var CurrentCallView = (function () {
    function CurrentCallView(j$) {
        var _this = this;
        this.j$ = j$;
        this.container = this.j$("#currentCall");
        this.cancelCallButton = this.j$("#cancelCurrentCallButton");
        this.cancelCallButton.click(function () { return _this.onCancelCallClicked(); });
    }
    CurrentCallView.prototype.setCaller = function (caller) {
        console.log("setCaller caller=", caller);
        this.caller = caller;
        this.j$("#currentCallName").text("Вы разговариваете с " + this.caller.getName());
    };
    CurrentCallView.prototype.show = function () {
        this.container.show();
    };
    CurrentCallView.prototype.hide = function () {
        this.container.hide();
    };
    CurrentCallView.prototype.onCancelCallClicked = function () {
        console.log("onCancelCallClicked socketId=" + this.caller.getSocketId());
        EventBus.dispatchEvent(CurrentCallEvent.CANCEL_CURRENT_CALL, this.caller.getSocketId());
    };
    return CurrentCallView;
}());
//# sourceMappingURL=CurrentCallView.js.map