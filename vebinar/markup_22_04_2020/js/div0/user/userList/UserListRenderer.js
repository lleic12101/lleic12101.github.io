///<reference path="../User.ts"/>
var UserListRenderer = (function () {
    function UserListRenderer(j$, data, parent) {
        var _this = this;
        this.onlineClass = "teacher__usersText-green";
        this.offlineClass = "teacher__usersText-gray";
        this.goneClass = "teacher__usersText-red";
        this.j$ = j$;
        this.data = data;
        this.parent = parent;
        this.createChildren();
        this.data.setNameChangedHandler(function (name) { return _this.onUserNameChangedHandler(name); });
        this.data.setStateChangedHandler(function (state) { return _this.onUserStateChangedHandler(state); });
        this.onUserStateChangedHandler(this.data.getState());
        this.onUserNameChangedHandler(this.data.getName());
    }
    UserListRenderer.prototype.destroy = function () {
    };
    UserListRenderer.prototype.onUserNameChangedHandler = function (name) {
        this.nameContainer.text(name);
    };
    UserListRenderer.prototype.onUserStateChangedHandler = function (state) {
        switch (state) {
            case UserState.OFFLINE:
                this.nameContainer.removeClass(this.onlineClass);
                this.nameContainer.removeClass(this.goneClass);
                this.nameContainer.addClass(this.offlineClass);
                break;
            case UserState.ONLINE:
                this.nameContainer.removeClass(this.goneClass);
                this.nameContainer.removeClass(this.offlineClass);
                this.nameContainer.addClass(this.onlineClass);
                break;
            case UserState.WAS_ONLINE:
                this.nameContainer.removeClass(this.offlineClass);
                this.nameContainer.addClass(this.onlineClass);
                this.nameContainer.addClass(this.goneClass);
                break;
        }
    };
    UserListRenderer.prototype.createChildren = function () {
        this.container = this.j$("<div class='teacher__usersLine'></div>");
        this.nameContainer = this.j$("<p class='teacher__usersName " + this.offlineClass + "'>" + this.data.getName() + "</p>");
        this.emailContainer = this.j$("<p class='teacher__usersMail'>" + this.data.getEmail() + "</p>");
        this.nameContainer.appendTo(this.container);
        this.emailContainer.appendTo(this.container);
        this.container.appendTo(this.parent);
    };
    return UserListRenderer;
}());
//# sourceMappingURL=UserListRenderer.js.map