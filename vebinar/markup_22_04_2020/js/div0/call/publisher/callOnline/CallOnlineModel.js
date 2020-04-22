///<reference path="CallOnlineView.ts"/>
///<reference path="../callersList/CallersListView.ts"/>
///<reference path="../callersList/CallersListModel.ts"/>
///<reference path="../callersList/CallersListController.ts"/>
///<reference path="Caller.ts"/>
///<reference path="../currentCall/CurrentCallView.ts"/>
///<reference path="../currentCall/CurrentCallModel.ts"/>
///<reference path="../currentCall/CurrentCallController.ts"/>
///<reference path="CallOnlineEvent.ts"/>
///<reference path="../../../../lib/events/EventBus.ts"/>
var CallOnlineModel = (function () {
    function CallOnlineModel(view) {
        this.enabled = false;
        this.enabledIntent = false;
        this.currentCallTotalSeconds = 0;
        this.view = view;
        this.state = CallOnlineModel.CALLS_ENABLED;
    }
    CallOnlineModel.prototype.getCurrentCallerName = function () {
        if (this.currentCaller) {
            return this.currentCaller.getName();
        }
    };
    CallOnlineModel.prototype.onCallApplied = function (data) {
        console.log("onCallApplied data=", data);
        this.state = CallOnlineModel.TALKING;
        this.currentCaller = new Caller(data.name, data.email, data.socketId);
        this.onStateChanged();
        EventBus.dispatchEvent(CallOnlineModel.CURRENT_CALLER_CHANGED, this.currentCaller);
    };
    CallOnlineModel.prototype.onCancelCurrentCall = function () {
        this.state = CallOnlineModel.CURRENT_CALL_CANCELED;
        this.onStateChanged();
        this.state = CallOnlineModel.CALLS_ENABLED;
        this.onStateChanged();
        this.currentCaller = null;
    };
    CallOnlineModel.prototype.onCurrentCallCanceled = function () {
        this.onCallCanceled();
        this.view.showCallersList();
        this.view.hideCurrentCall();
        this.currentCaller = null;
    };
    CallOnlineModel.prototype.onAvailabilityButtonClicked = function () {
        this.enabledIntent = !this.enabledIntent;
        this.view.showCallOnlineAvailabilityIntentConfirmation(this.enabledIntent);
    };
    CallOnlineModel.prototype.onCallsEnabledButtonYesClicked = function () {
        this.enabled = !this.enabled;
        this.view.changeCallsAvailability(this.enabled);
        EventBus.dispatchEvent(CallOnlineEvent.CALLS_ONLINE_AVAILABILITY_CHANGED, this.enabled);
    };
    CallOnlineModel.prototype.onCallsEnabledButtonNoClicked = function () {
        this.enabledIntent = false;
        this.enabled = false;
        this.view.hideCallOnlineAvailabilityIntentConfirmation();
    };
    CallOnlineModel.prototype.onCallsDisabledButtonYesClicked = function () {
        this.enabled = false;
        this.view.changeCallsAvailability(this.enabled);
        EventBus.dispatchEvent(CallOnlineEvent.CALLS_ONLINE_AVAILABILITY_CHANGED, this.enabled);
    };
    CallOnlineModel.prototype.onCallsDisabledButtonNoClicked = function () {
        this.enabledIntent = true;
        this.enabled = true;
        this.view.hideCallOnlineDisabledIntentConfirmation();
    };
    CallOnlineModel.prototype.onShowCallersList = function () {
        this.view.showCallersList();
    };
    CallOnlineModel.prototype.onCallCanceled = function () {
        clearInterval(this.currentCallInterval);
        this.currentCallTotalSeconds = 0;
        this.view.setCurrentCallTotalSeconds(this.currentCallTotalSeconds);
    };
    CallOnlineModel.prototype.onStateChanged = function () {
        switch (this.state) {
            case CallOnlineModel.CALLS_ENABLED:
                this.view.showCallersList();
                this.view.hideCurrentCall();
                break;
            case CallOnlineModel.CALLS_DISABLED:
                this.view.hideCallersList();
                this.view.hideCurrentCall();
                break;
            case CallOnlineModel.TALKING:
                console.log("Talking to " + this.currentCaller.getName() + "...");
                this.view.setTalkingToSubscriber(this.currentCaller);
                this.view.showCurrentCall();
                this.view.hideCallersList();
                this.startCurrentCallInterval();
                break;
            case CallOnlineModel.CURRENT_CALL_CANCELED:
                this.view.setCurrentCallCanceled();
                break;
        }
    };
    CallOnlineModel.prototype.startCurrentCallInterval = function () {
        var _this = this;
        this.currentCallInterval = setInterval(function () { return _this.onCurrentCallIntervalTick(); }, 1000);
    };
    CallOnlineModel.prototype.onCurrentCallIntervalTick = function () {
        this.currentCallTotalSeconds++;
        this.view.setCurrentCallTotalSeconds(this.currentCallTotalSeconds);
    };
    CallOnlineModel.CALLS_ENABLED = "CALLS_ENABLED";
    CallOnlineModel.CALLS_AVAILABILITY_CHANGE_REQUEST_ASK_AGAIN = "CALLS_AVAILABILITY_CHANGE_REQUEST_ASK_AGAIN";
    CallOnlineModel.CALLS_DISABLED = "CALLS_DISABLED";
    CallOnlineModel.TALKING = "TALKING";
    CallOnlineModel.CURRENT_CALL_CANCELED = "CURRENT_CALL_CANCELED";
    CallOnlineModel.CURRENT_CALLER_CHANGED = "CURRENT_CALLER_CHANGED";
    return CallOnlineModel;
}());
//# sourceMappingURL=CallOnlineModel.js.map