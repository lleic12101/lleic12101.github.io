var Caller = (function () {
    function Caller(name, email, socketId) {
        this.name = name;
        this.email = email;
        this.socketId = socketId;
    }
    Caller.prototype.getName = function () {
        return this.name;
    };
    Caller.prototype.getEmail = function () {
        return this.email;
    };
    Caller.prototype.getSocketId = function () {
        return this.socketId;
    };
    return Caller;
}());
//# sourceMappingURL=Caller.js.map