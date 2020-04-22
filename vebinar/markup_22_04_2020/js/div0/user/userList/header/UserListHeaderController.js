///<reference path="UserListHeaderModel.ts"/>
var UserListHeaderController = (function () {
    function UserListHeaderController(model) {
        var _this = this;
        this.model = model;
        EventBus.addEventListener(UserListEvent.USER_STATE_CHANGED, function () { return _this.onUserStateChanged(); });
    }
    UserListHeaderController.prototype.setUsers = function (users) {
        this.model.setUsers(users);
    };
    UserListHeaderController.prototype.onUserStateChanged = function () {
        this.model.onUserStateChanged();
    };
    return UserListHeaderController;
}());
//# sourceMappingURL=UserListHeaderController.js.map