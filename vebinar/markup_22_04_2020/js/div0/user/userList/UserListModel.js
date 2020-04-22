///<reference path="UserListView.ts"/>
///<reference path="../User.ts"/>
///<reference path="UserParser.ts"/>
///<reference path="header/UserListHeaderController.ts"/>
///<reference path="../../service/site/SiteService.ts"/>
var UserListModel = (function () {
    function UserListModel(view) {
        var _this = this;
        this.view = view;
        this.createHeader();
        EventBus.addEventListener("SITE_USERS_COLLECTION", function (data) { return _this.onUsersCollectionLoaded(data); });
        //this.createSiteService();
    }
    UserListModel.prototype.setRoomName = function (roomName) {
        console.log("set room name " + roomName);
        this.roomName = roomName;
        if (!this.siteService) {
            this.createSiteService();
        }
    };
    UserListModel.prototype.onUsersCollection = function (users) {
        var parser = new UserParser(users);
        this.collection = parser.parse();
        this.view.setData(this.collection);
        this.header.setUsers(this.collection);
    };
    UserListModel.prototype.getUsers = function () {
        return this.collection;
    };
    UserListModel.prototype.onSortFactorChanged = function (sortFactor) {
        this.view.changeSortFactor(sortFactor);
    };
    UserListModel.prototype.onSubscriberAdded = function (data) {
        console.log("onSubscriberAdded data=", data);
        if (this.collection) {
            var email = data.email;
            var name = data.name;
            var currentUser = this.collection.get(email);
            if (currentUser) {
                currentUser.setName(name);
                currentUser.setState(UserState.ONLINE);
            }
            else {
                console.error("user by email '" + email + "' not found");
            }
        }
    };
    UserListModel.prototype.onSubscriberRemoved = function (data) {
        console.log("onSubscriberRemoved data=", data);
        if (this.collection) {
            var email = data.email;
            var name = data.name;
            var currentUser = this.collection.get(email);
            if (currentUser) {
                currentUser.setName(name);
                currentUser.setState(UserState.OFFLINE);
            }
            else {
                console.error("user by email '" + email + "' not found");
            }
        }
    };
    UserListModel.prototype.createHeader = function () {
        this.header = new UserListHeaderController(new UserListHeaderModel(new UserListHeaderView(this.view.getJQuery())));
    };
    UserListModel.prototype.createSiteService = function () {
        console.log("load users for room " + this.roomName);
        var siteService = new SiteService(this.view.getJQuery());
        siteService.getUsers(this.roomName);
    };
    UserListModel.prototype.onUsersCollectionLoaded = function (data) {
        console.log("onUsersCollectionLoaded  data=", data);
        this.onUsersCollection(data);
    };
    return UserListModel;
}());
//# sourceMappingURL=UserListModel.js.map