///<reference path="UserListModel.ts"/>
///<reference path="../../service/socket/SocketEvent.ts"/>
var UserListController = (function () {
    function UserListController(model) {
        var _this = this;
        this.model = model;
        EventBus.addEventListener(UserListEvent.SORT_FACTOR_CHANGED, function (sortFactor) { return _this.onSortFactorChanged(sortFactor); });
        EventBus.addEventListener(SocketEvent.ON_SUBSCRIBER_ADDED, function (data) { return _this.onSubscriberAdded(data); });
        EventBus.addEventListener(SocketEvent.ON_SUBSCRIBER_REMOVED, function (data) { return _this.onSubscriberRemoved(data); });
    }
    UserListController.prototype.setRoomName = function (roomName) {
        this.model.setRoomName(roomName);
    };
    UserListController.prototype.setUsers = function (data) {
        this.model.onUsersCollection(data);
    };
    UserListController.prototype.getUsers = function () {
        return this.model.getUsers();
    };
    UserListController.prototype.onSortFactorChanged = function (sortFactor) {
        this.model.onSortFactorChanged(sortFactor);
    };
    UserListController.prototype.onSubscriberAdded = function (data) {
        this.model.onSubscriberAdded(data);
    };
    UserListController.prototype.onSubscriberRemoved = function (data) {
        this.model.onSubscriberRemoved(data);
    };
    return UserListController;
}());
//# sourceMappingURL=UserListController.js.map