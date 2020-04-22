///<reference path="Caller.ts"/>
///<reference path="../currentCall/CurrentCallView.ts"/>
///<reference path="../currentCall/CurrentCallModel.ts"/>
///<reference path="../currentCall/CurrentCallController.ts"/>
///<reference path="../callersList/CallersListView.ts"/>
///<reference path="../callersList/CallersListModel.ts"/>
///<reference path="../callersList/CallersListController.ts"/>
///<reference path="../../../../lib/events/EventBus.ts"/>
var CallOnlineView = (function () {
    function CallOnlineView(j$) {
        var _this = this;
        this.callEnabledColor = "#1abd61";
        this.callDisabledColor = "#CC432D";
        this.j$ = j$;
        this.createCallersList();
        this.createCurrentCallElement();
        this.j$("#publisherCallOnlineElement").show();
        this.approveOptionChangeYesButton = this.j$("#btnOpenYes");
        this.approveOptionChangeNoButton = this.j$("#btnOpenNo");
        this.declineOptionChangeYesButton = this.j$("#btnCloseYes");
        this.declineOptionChangeNoButton = this.j$("#btnCloseNo");
        this.callOnlineAvailabilityToggleButton = this.j$("#callOnlineAvailabilityToggleButton");
        this.callOnlineAvailabilityInfoContainer = this.j$("#callOnlineAvailabilityInfo");
        this.callAvailabilityContainer = this.j$("#callAvailabilityContainer");
        this.currentCallStopButton = this.j$("#btnTalkingStop");
        //this.callOnlineAvailabilityToggleButton.change(()=>this.onCallsAvailabilityButtonClicked());
        this.callOnlineAvailabilityToggleButton.click(function () { return _this.onCallsAvailabilityButtonClicked(); });
        this.createListeners();
    }
    CallOnlineView.prototype.setTalkingToSubscriber = function (caller) {
        this.currentCaller = caller;
        this.currentCallController.setCaller(caller);
    };
    CallOnlineView.prototype.showCallersList = function () {
        this.hideEnableCallsIntentConfirmation();
        this.hideDisableCallsIntentConfirmation();
        this.callersListController.onShowRequest();
    };
    CallOnlineView.prototype.hideCallersList = function () {
        this.callersListController.onHideRequest();
    };
    CallOnlineView.prototype.showCurrentCall = function () {
        console.log("show current call");
        this.showCurrentCallerBlock();
        this.updateCurrentCallerName();
        this.currentCallController.onShowRequest();
    };
    CallOnlineView.prototype.hideCurrentCall = function () {
        this.currentCallController.onHideRequest();
        this.hideCurrentCallerBlock();
    };
    CallOnlineView.prototype.setCurrentCallCanceled = function () {
        this.currentCallController.cancelCurrentCall();
    };
    CallOnlineView.prototype.changeCallsAvailability = function (enabled) {
        if (enabled) {
            this.onCallsEnabled();
        }
        else {
            this.onCallsDisabled();
        }
    };
    CallOnlineView.prototype.showCallOnlineAvailabilityIntentConfirmation = function (enabledIntent) {
        if (enabledIntent) {
            // show enable calls confirmation
            this.showEnableCallsIntentConfirmation();
            this.hideDisableCallsIntentConfirmation();
        }
        else {
            // show disable call confirmation
            this.showDisableCallsIntentConfirmation();
            this.hideEnableCallsIntentConfirmation();
            this.callersListController.onHideRequest();
        }
    };
    CallOnlineView.prototype.hideCallOnlineAvailabilityIntentConfirmation = function () {
        this.hideEnableCallsIntentConfirmation();
    };
    CallOnlineView.prototype.hideCallOnlineDisabledIntentConfirmation = function () {
        this.hideDisableCallsIntentConfirmation();
    };
    CallOnlineView.prototype.showCurrentCallerBlock = function () {
        this.j$("#tabTalking").addClass("teacher__blockTab-active");
    };
    CallOnlineView.prototype.hideCurrentCallerBlock = function () {
        this.j$("#tabTalking").removeClass("teacher__blockTab-active");
    };
    CallOnlineView.prototype.setCurrentCallTotalSeconds = function (currentCallTotalSeconds) {
        var humanSeconds = formatSecondsToHumanTime(currentCallTotalSeconds);
        this.j$("#currentCallDuration").text(humanSeconds);
    };
    CallOnlineView.prototype.onCallsDisabled = function () {
        this.j$("#teacher__blockTabHeader").removeClass("teacher__blockTabHeader-green");
        this.j$("#callOnlineAvailabilityToggleButton").attr("src", "styles/img/darkBtn.png");
        this.j$("#teacher__blockTabHeaderText").text("ЗВОНКИ В ЭФИР ЗАРЕШЕНЫ");
        this.hideEnableCallsIntentConfirmation();
        this.hideDisableCallsIntentConfirmation();
    };
    CallOnlineView.prototype.onCallsEnabled = function () {
        this.j$("#teacher__blockTabHeader").addClass("teacher__blockTabHeader-green");
        this.j$("#callOnlineAvailabilityToggleButton").attr("src", "styles/img/lightBtn.png");
        this.j$("#teacher__blockTabHeaderText").text("ЗВОНКИ В ЭФИР РАЗРЕШЕНЫ");
        this.hideEnableCallsIntentConfirmation();
        this.hideDisableCallsIntentConfirmation();
    };
    CallOnlineView.prototype.hideEnableCallsIntentConfirmation = function () {
        this.j$("#tabYes").removeClass("teacher__blockTabCalls-active");
    };
    CallOnlineView.prototype.showEnableCallsIntentConfirmation = function () {
        this.j$("#tabCalls").addClass("teacher__blockTab-active");
        this.j$("#tabYes").addClass("teacher__blockTabCalls-active");
    };
    CallOnlineView.prototype.hideDisableCallsIntentConfirmation = function () {
        this.j$("#tabNo").removeClass("teacher__blockTabCalls-active");
    };
    CallOnlineView.prototype.showDisableCallsIntentConfirmation = function () {
        this.j$("#tabCalls").addClass("teacher__blockTab-active");
        this.j$("#tabNo").addClass("teacher__blockTabCalls-active");
    };
    CallOnlineView.prototype.createCurrentCallElement = function () {
        var currentCallView = new CurrentCallView(this.j$);
        var currentCallModel = new CurrentCallModel(currentCallView);
        this.currentCallController = new CurrentCallController(currentCallModel);
    };
    CallOnlineView.prototype.createCallersList = function () {
        var callersListView = new CallersListView(this.j$);
        var callersListModel = new CallersListModel(callersListView);
        this.callersListController = new CallersListController(callersListModel);
    };
    CallOnlineView.prototype.onCallsAvailabilityButtonClicked = function () {
        EventBus.dispatchEvent(CallOnlineView.CALLS_AVAILABILITY_BUTTON_CLICKED, null);
    };
    CallOnlineView.prototype.createListeners = function () {
        var _this = this;
        this.approveOptionChangeYesButton.click(function () { return _this.onApproveOptionChangeYesButtonClicked(); });
        this.approveOptionChangeNoButton.click(function () { return _this.onApproveOptionChangeNoButtonClicked(); });
        this.declineOptionChangeYesButton.click(function () { return _this.onDeclineOptionChangeYesButtonClicked(); });
        this.declineOptionChangeNoButton.click(function () { return _this.onDeclineOptionChangeNoButtonClicked(); });
        this.currentCallStopButton.click(function () { return _this.onCancelCurrentCallClicked(); });
    };
    CallOnlineView.prototype.onApproveOptionChangeYesButtonClicked = function () {
        EventBus.dispatchEvent(CallOnlineView.CALLS_ENABLED_BUTTON_YES_CLICKED, null);
    };
    CallOnlineView.prototype.onApproveOptionChangeNoButtonClicked = function () {
        EventBus.dispatchEvent(CallOnlineView.CALLS_ENABLED_BUTTON_NO_CLICKED, null);
    };
    CallOnlineView.prototype.onDeclineOptionChangeYesButtonClicked = function () {
        EventBus.dispatchEvent(CallOnlineView.CALLS_DISABLED_BUTTON_YES_CLICKED, null);
    };
    CallOnlineView.prototype.onDeclineOptionChangeNoButtonClicked = function () {
        EventBus.dispatchEvent(CallOnlineView.CALLS_DISABLED_BUTTON_NO_CLICKED, null);
    };
    CallOnlineView.prototype.updateCurrentCallerName = function () {
        this.j$("#currentCallerName").text(this.currentCaller.getName());
    };
    CallOnlineView.prototype.onCancelCurrentCallClicked = function () {
        console.log("onCancelCurrentCallClicked");
        this.hideCurrentCallerBlock();
        this.showCallersList();
        EventBus.dispatchEvent(CallOnlineEvent.PUBLISHER_CANCELED_CURRENT_CALL, this.currentCaller.getSocketId());
    };
    CallOnlineView.CALLS_AVAILABILITY_BUTTON_CLICKED = "CALLS_AVAILABILITY_BUTTON_CLICKED";
    CallOnlineView.CALLS_ENABLED_BUTTON_YES_CLICKED = "CALLS_ENABLED_BUTTON_YES_CLICKED";
    CallOnlineView.CALLS_ENABLED_BUTTON_NO_CLICKED = "CALLS_ENABLED_BUTTON_NO_CLICKED";
    CallOnlineView.CALLS_DISABLED_BUTTON_YES_CLICKED = "CALLS_DISABLED_BUTTON_YES_CLICKED";
    CallOnlineView.CALLS_DISABLED_BUTTON_NO_CLICKED = "CALLS_DISABLED_BUTTON_NO_CLICKED";
    return CallOnlineView;
}());
//# sourceMappingURL=CallOnlineView.js.map