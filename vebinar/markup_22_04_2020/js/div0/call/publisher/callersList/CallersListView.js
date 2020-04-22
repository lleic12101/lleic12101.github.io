///<reference path="CallersListItemRenderer.ts"/>
var CallersListView = (function () {
    function CallersListView(j$) {
        this.renderers = new Array();
        this.j$ = j$;
        this.container = this.j$("#tabList");
        this.listElement = this.j$("#callersList");
    }
    CallersListView.prototype.addCallerRequest = function (data) {
        var renderer = new CallersListItemRenderer(this.j$, data, this.container);
        this.renderers.push(renderer);
    };
    CallersListView.prototype.removeCallerRequest = function (data) {
        var emailToRemove = data.email;
        var total = this.renderers.length;
        var i;
        for (i = 0; i < total; i++) {
            var renderer = this.renderers[i];
            var email = renderer.getEmail();
            if (email == emailToRemove) {
                renderer.destroy();
                this.renderers.splice(i, 1);
                break;
            }
        }
    };
    CallersListView.prototype.removeCallerRequests = function () {
        var total = this.renderers.length;
        var i;
        for (i = 0; i < total; i++) {
            var renderer = this.renderers[i];
            renderer.destroy();
            this.renderers.splice(i, 1);
        }
        console.log("total renderers=" + this.renderers.length);
    };
    CallersListView.prototype.hide = function () {
        this.container.removeClass("teacher__blockTabCalls-active");
    };
    CallersListView.prototype.show = function () {
        try {
            this.j$(".teacher__blockTab-calls").removClass("teacher__blockTabCalls-active");
        }
        catch (error) {
        }
        this.container.addClass("teacher__blockTabCalls-active");
    };
    return CallersListView;
}());
//# sourceMappingURL=CallersListView.js.map