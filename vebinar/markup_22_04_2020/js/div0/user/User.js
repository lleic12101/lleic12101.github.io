///<reference path="UserState.ts"/>
///<reference path="../../lib/events/EventBus.ts"/>
///<reference path="userList/UserListEvent.ts"/>
var User = (function () {
    function User(name, password, email) {
        this.state = UserState.OFFLINE;
        this.name = name;
        if (!name || name == "undefined") {
            this.name = "имя пока не указано";
        }
        this.password = password;
        this.email = email;
        EventBus.dispatchEvent(UserListEvent.USER_STATE_CHANGED, null);
    }
    User.prototype.getState = function () {
        return this.state;
    };
    User.prototype.setState = function (state) {
        if (state == UserState.OFFLINE) {
            if (this.state == UserState.ONLINE) {
                this.state = UserState.WAS_ONLINE;
            }
        }
        else {
            this.state = state;
        }
        if (this.stateChangedHandler) {
            this.stateChangedHandler(this.state);
        }
        EventBus.dispatchEvent(UserListEvent.USER_STATE_CHANGED, null);
    };
    User.prototype.setName = function (name) {
        if (name != this.name) {
            this.name = name;
            if (this.nameChangedHandler) {
                this.nameChangedHandler(name);
            }
        }
    };
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.getPassword = function () {
        return this.password;
    };
    User.prototype.getEmail = function () {
        return this.email;
    };
    User.prototype.setStateChangedHandler = function (handler) {
        this.stateChangedHandler = handler;
    };
    User.prototype.setNameChangedHandler = function (handler) {
        this.nameChangedHandler = handler;
    };
    return User;
}());
//# sourceMappingURL=User.js.map