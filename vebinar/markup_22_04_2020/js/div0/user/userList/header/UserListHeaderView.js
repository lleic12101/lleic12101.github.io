///<reference path="../UserListEvent.ts"/>
///<reference path="../../../../lib/events/EventBus.ts"/>
var UserListHeaderView = (function () {
    function UserListHeaderView(j$) {
        var _this = this;
        this.j$ = j$;
        this.totalUsersElement = this.j$("#totalUsersElement");
        this.onlineElement = this.j$("#onlineElement");
        this.goneElement = this.j$("#goneElement");
        this.offlineElement = this.j$("#offlineElement");
        this.onlineElement.click(function () { return _this.onOnlineElementClicked(); });
        this.goneElement.click(function () { return _this.onGoneElementClicked(); });
        this.offlineElement.click(function () { return _this.onOfflineElementClicked(); });
    }
    UserListHeaderView.prototype.setTotalOnline = function (value) {
        this.onlineElement.text("ОНЛАЙН (" + value + ")");
    };
    UserListHeaderView.prototype.setTotalGone = function (value) {
        this.goneElement.text("ВЫШЛИ (" + value + ")");
    };
    UserListHeaderView.prototype.setTotalOffline = function (value) {
        this.offlineElement.text("НЕ ВХОДИЛИ (" + value + ")");
    };
    UserListHeaderView.prototype.onOnlineElementClicked = function () {
        EventBus.dispatchEvent(UserListEvent.SORT_FACTOR_CHANGED, "online");
    };
    UserListHeaderView.prototype.onGoneElementClicked = function () {
        EventBus.dispatchEvent(UserListEvent.SORT_FACTOR_CHANGED, "gone");
    };
    UserListHeaderView.prototype.onOfflineElementClicked = function () {
        EventBus.dispatchEvent(UserListEvent.SORT_FACTOR_CHANGED, "offline");
    };
    return UserListHeaderView;
}());
//# sourceMappingURL=UserListHeaderView.js.map