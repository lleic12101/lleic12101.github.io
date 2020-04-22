///<reference path="../User.ts"/>
///<reference path="UserListRenderer.ts"/>
///<reference path="../../../lib/collections/iterators/MapIterator.ts"/>
var UserListView = (function () {
    function UserListView(j$) {
        this.renderers = new Array();
        this.j$ = j$;
        this.showElementWrapper();
        this.listContainer = this.j$("#userList");
    }
    UserListView.prototype.getJQuery = function () {
        return this.j$;
    };
    UserListView.prototype.changeSortFactor = function (sortFactor) {
        var i;
        var totalRenderers = this.renderers.length;
        for (i = 0; i < totalRenderers; i++) {
            var renderer = this.renderers[i];
            renderer.destroy();
        }
        this.listContainer.empty();
        this.renderers = new Array();
        var onlineCollection = new Array();
        var offlineCollection = new Array();
        var goneCollection = new Array();
        var sortedMap = new Map(sortFactor + "_sortedUsers");
        var iterator = this.users.getIterator();
        var user;
        while (iterator.hasNext()) {
            user = iterator.next();
            if (user.getState() == UserState.ONLINE) {
                onlineCollection.push(user);
            }
            else if (user.getState() == UserState.WAS_ONLINE) {
                goneCollection.push(user);
            }
            else if (user.getState() == UserState.OFFLINE) {
                offlineCollection.push(user);
            }
        }
        var sortedArray = new Array();
        switch (sortFactor) {
            case "online":
                sortedArray = sortedArray.concat(onlineCollection);
                sortedArray = sortedArray.concat(goneCollection);
                sortedArray = sortedArray.concat(offlineCollection);
                break;
            case "offline":
                sortedArray = sortedArray.concat(offlineCollection);
                sortedArray = sortedArray.concat(goneCollection);
                sortedArray = sortedArray.concat(onlineCollection);
                break;
            case "gone":
                sortedArray = sortedArray.concat(goneCollection);
                sortedArray = sortedArray.concat(offlineCollection);
                sortedArray = sortedArray.concat(onlineCollection);
                break;
        }
        for (i = 0; i < sortedArray.length; i++) {
            user = sortedArray[i];
            sortedMap.add(user.getEmail(), user);
        }
        var iterator = sortedMap.getIterator();
        while (iterator.hasNext()) {
            var user = iterator.next();
            this.renderers.push(new UserListRenderer(this.j$, user, this.listContainer));
        }
    };
    UserListView.prototype.showElementWrapper = function () {
        this.j$("#userListContainer").css("display", "flex");
    };
    UserListView.prototype.setData = function (data) {
        this.users = data;
        var iterator = data.getIterator();
        while (iterator.hasNext()) {
            var user = iterator.next();
            this.renderers.push(new UserListRenderer(this.j$, user, this.listContainer));
        }
    };
    return UserListView;
}());
//# sourceMappingURL=UserListView.js.map