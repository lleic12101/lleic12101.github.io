///<reference path="UserListHeaderView.ts"/>
///<reference path="../../User.ts"/>
var UserListHeaderModel = (function () {
    function UserListHeaderModel(view) {
        this.totalOnline = 0;
        this.totalGone = 0;
        this.totalOffline = 0;
        this.view = view;
    }
    UserListHeaderModel.prototype.setUsers = function (users) {
        this.users = users;
        this.onUserStateChanged();
    };
    UserListHeaderModel.prototype.onUserStateChanged = function () {
        if (!this.users) {
            return;
        }
        this.totalOnline = 0;
        this.totalGone = 0;
        this.totalOffline = 0;
        var iterator = this.users.getIterator();
        while (iterator.hasNext()) {
            var user = iterator.next();
            if (user.getState() == UserState.OFFLINE) {
                this.totalOffline++;
            }
            else if (user.getState() == UserState.WAS_ONLINE) {
                this.totalGone++;
            }
            else if (user.getState() == UserState.ONLINE) {
                this.totalOnline++;
            }
        }
        this.view.setTotalGone(this.totalGone);
        this.view.setTotalOnline(this.totalOnline);
        this.view.setTotalOffline(this.totalOffline);
    };
    return UserListHeaderModel;
}());
//# sourceMappingURL=UserListHeaderModel.js.map