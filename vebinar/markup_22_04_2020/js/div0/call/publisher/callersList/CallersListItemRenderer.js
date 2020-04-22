///<reference path="CallersListEvent.ts"/>
///<reference path="../../../../lib/events/EventBus.ts"/>
var CallersListItemRenderer = (function () {
    function CallersListItemRenderer(j$, data, parent) {
        this.j$ = j$;
        this.data = data;
        this.parent = parent;
        this.createChildren();
    }
    CallersListItemRenderer.prototype.getEmail = function () {
        return this.data.email;
    };
    CallersListItemRenderer.prototype.destroy = function () {
        console.log("destroying renderer email=" + this.data.email);
        this.container.empty();
        this.container.remove();
    };
    CallersListItemRenderer.prototype.createChildren = function () {
        var _this = this;
        var name = this.data.userName;
        var socketId = this.data.socketId;
        var email = this.data.email;
        this.container = this.j$("<div class='teacher__blockTabListItem'></div>");
        var nameElement = this.j$("<p class='teacher__blockTabListItemName'>" + name + "</p>");
        var emailElement = this.j$("<p class='teacher__blockTabListItemMail'>" + email + "</p>");
        var applyButton = this.j$("<button class='teacher__blockTabBtn teacher__blockTabBtn-green btnAcceptPeople'>ПРИНЯТЬ</button>");
        var rejectButton = this.j$("<button class='teacher__blockTabBtn teacher__blockTabBtn-red btnDeclinePeople'>ОТКЛОНИТЬ</button>");
        nameElement.appendTo(this.container);
        emailElement.appendTo(this.container);
        applyButton.appendTo(this.container);
        rejectButton.appendTo(this.container);
        this.container.appendTo(this.parent);
        applyButton.click(function () { return _this.onApplyButtonClicked(); });
        rejectButton.click(function () { return _this.onRejectButtonClicked(); });
        /*
        console.log("create children");
        var name:string = this.data.userName;
        var socketId:string = this.data.socketId;
        var email:string = this.data.email;

        this.container = this.j$("<div style='width: 100%; height: 20px; float: left; display: block;'></div>");
        var nameElement:any = this.j$("<div style='width: 20%; height: 100%; font-size: 1em; display: block; float: left;'>"+name+"</div>");
        var emailElement:any = this.j$("<div style='width: 20%; height: 100%; font-size: 1em; display: block; float: left;'>"+email+"</div>");

        var applyButton:any = this.j$("<div style='width: 30%; display: block; float: left; text-align: center; margin-top: 1em; margin-bottom: 1em;'><button style='' data-socketId='"+socketId+"'>Принять</button></div>");
        var rejectButton:any = this.j$("<div style='width: 30%; display: block; float: left; text-align: center; margin-top: 1em; margin-bottom: 1em;'><button data-socketId='"+socketId+"'>Отклонить</button></div>");
        
        nameElement.appendTo(this.container);
        emailElement.appendTo(this.container);
        applyButton.appendTo(this.container);
        rejectButton.appendTo(this.container);

        this.container.appendTo(this.parent);
        
        applyButton.click(()=>this.onApplyButtonClicked());
        rejectButton.click(()=>this.onRejectButtonClicked());
        */
    };
    CallersListItemRenderer.prototype.onApplyButtonClicked = function () {
        EventBus.dispatchEvent(CallersListEvent.APPLY_CALL, { socketId: this.data.socketId, name: this.data.userName });
        this.container.remove();
    };
    CallersListItemRenderer.prototype.onRejectButtonClicked = function () {
        EventBus.dispatchEvent(CallersListEvent.REJECT_CALL, this.data.socketId);
        this.container.remove();
    };
    return CallersListItemRenderer;
}());
//# sourceMappingURL=CallersListItemRenderer.js.map