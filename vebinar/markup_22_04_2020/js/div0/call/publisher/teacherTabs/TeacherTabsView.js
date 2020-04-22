///<reference path="TeacherTabsEvent.ts"/>
///<reference path="../../../../lib/events/EventBus.ts"/>
var TeacherTabsView = (function () {
    function TeacherTabsView(j$) {
        this.currentNote = "one";
        this.j$ = j$;
        this.notesOneTab = this.j$("#btnNotice1");
        this.notesTwoTab = this.j$("#btnNotice2");
        this.callsEnabledTab = this.j$("#btnCalls");
        this.tabOneContent = this.j$("#tabNotice1");
        this.tabTwoContent = this.j$("#tabNotice2");
        this.createListeners();
    }
    TeacherTabsView.prototype.hideNotes = function () {
        this.hideNoteOne();
        this.hideNoteTwo();
    };
    TeacherTabsView.prototype.showPodcast = function () {
        this.j$("#btnCalls").addClass("teacher__blockBtn-active");
        this.j$("#btnCalls").addClass("teacher__blockBtn-sygnal-green");
        this.unselectTabOne();
        this.unselectTabTwo();
    };
    TeacherTabsView.prototype.hidePodcast = function () {
        this.j$("#btnCalls").removeClass("teacher__blockBtn-active");
        this.j$("#btnCalls").removeClass("teacher__blockBtn-sygnal-green");
    };
    TeacherTabsView.prototype.showCallersList = function () {
        this.showList();
        this.hideNoteOne();
        this.hideNoteTwo();
    };
    TeacherTabsView.prototype.hideCallersList = function () {
        this.hideList();
        this.showNoteOne();
        this.selectTabOne();
        this.unselectTabTwo();
    };
    TeacherTabsView.prototype.showSavedNote = function () {
        if (this.currentNote == "one") {
            this.showNoteOne();
        }
        else {
            this.showNoteTwo();
        }
    };
    TeacherTabsView.prototype.hideCallsEnabledConfirmation = function () {
        this.j$("#tabYes").removeClass("teacher__blockTabCalls-active");
    };
    TeacherTabsView.prototype.showList = function () {
        this.j$("#tabList").addClass("teacher__blockTabCalls-active");
    };
    TeacherTabsView.prototype.hideList = function () {
        this.j$("#tabList").removeClass("teacher__blockTabCalls-active");
    };
    TeacherTabsView.prototype.selectTabOne = function () {
        this.notesOneTab.addClass("teacher__blockBtn-active");
    };
    TeacherTabsView.prototype.unselectTabOne = function () {
        this.notesOneTab.removeClass("teacher__blockBtn-active");
        this.notesOneTab.removeClass("teacher__blockBtn-switcher-calling");
    };
    TeacherTabsView.prototype.selectTabTwo = function () {
        this.notesTwoTab.addClass("teacher__blockBtn-active");
    };
    TeacherTabsView.prototype.unselectTabTwo = function () {
        this.notesTwoTab.removeClass("teacher__blockBtn-active");
        this.notesTwoTab.removeClass("teacher__blockBtn-switcher-calling");
    };
    TeacherTabsView.prototype.createListeners = function () {
        var _this = this;
        this.notesOneTab.click(function () { return _this.onNotesOneClicked(); });
        this.notesTwoTab.click(function () { return _this.onNotesTwoClicked(); });
        this.j$("#btnCalls").click(function () { return _this.onShowPodcastClicked(); });
    };
    TeacherTabsView.prototype.showNoteOne = function () {
        this.tabOneContent.attr('style', 'display: flex !important');
        this.j$("#tabCalls").removeClass("teacher__blockTab-active");
    };
    TeacherTabsView.prototype.hideNoteOne = function () {
        this.tabOneContent.attr('style', 'display: none !important');
    };
    TeacherTabsView.prototype.showNoteTwo = function () {
        this.tabTwoContent.attr('style', 'display: flex !important');
        this.j$("#tabCalls").removeClass("teacher__blockTab-active");
    };
    TeacherTabsView.prototype.hideNoteTwo = function () {
        this.tabTwoContent.attr('style', 'display: none !important');
    };
    TeacherTabsView.prototype.onNotesOneClicked = function () {
        this.currentNote = "one";
        this.unselectTabTwo();
        this.selectTabOne();
        this.hideNoteTwo();
        this.showNoteOne();
        this.hideList();
    };
    TeacherTabsView.prototype.onNotesTwoClicked = function () {
        this.currentNote = "two";
        this.unselectTabOne();
        this.selectTabTwo();
        this.hideNoteOne();
        this.showNoteTwo();
        this.hideList();
    };
    TeacherTabsView.prototype.onShowPodcastClicked = function () {
        this.unselectTabOne();
        this.unselectTabTwo();
        this.hideNoteOne();
        this.hideNoteTwo();
        this.j$("#tabCalls").addClass("teacher__blockTab-active");
        this.j$(".teacher__blockTab-calls").removeClass("teacher__blockTabContent");
        this.j$("#tabList").addClass("teacher__blockTabCalls-active");
    };
    return TeacherTabsView;
}());
//# sourceMappingURL=TeacherTabsView.js.map