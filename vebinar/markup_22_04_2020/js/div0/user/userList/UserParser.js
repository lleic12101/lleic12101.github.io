///<reference path="../User.ts"/>
var UserParser = (function () {
    function UserParser(data) {
        this.collection = new Map("users");
        this.data = data;
    }
    UserParser.prototype.parse = function () {
        var array = JSON.parse(this.data);
        var i;
        var total = array.length;
        for (i = 0; i < total; i++) {
            var userData = array[i];
            var user = new User(userData.name, "", userData.email);
            this.collection.add(userData.email, user);
        }
        return this.collection;
    };
    return UserParser;
}());
//# sourceMappingURL=UserParser.js.map