///<reference path="TeacherTabsView.ts"/>
var TeacherTabsModel = (function () {
    function TeacherTabsModel(view) {
        this.view = view;
    }
    TeacherTabsModel.prototype.onCallsAvailabilityChangeRequest = function () {
        this.view.hideNotes();
    };
    TeacherTabsModel.prototype.onCallsAvailabilityButtonYesClicked = function () {
        this.view.showPodcast();
        this.view.showCallersList();
    };
    TeacherTabsModel.prototype.onCallsAvailabilityButtonNoClicked = function () {
        //this.view.showSavedNote();
    };
    TeacherTabsModel.prototype.onCallsDisabledButtonYesClicked = function () {
        this.view.hidePodcast();
        this.view.hideCallersList();
    };
    TeacherTabsModel.prototype.onCallsDisabledButtonNoClicked = function () {
        this.view.showCallersList();
    };
    return TeacherTabsModel;
}());
//# sourceMappingURL=TeacherTabsModel.js.map