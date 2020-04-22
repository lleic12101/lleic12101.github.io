var TextChatMessageRenderer = (function () {
    function TextChatMessageRenderer(messageData, parentElement, $j) {
        this.messageData = messageData;
        this.parentElement = parentElement;
        this.$j = $j;
        this.createChildren();
    }
    TextChatMessageRenderer.prototype.createChildren = function () {
        var sender = this.messageData.clientData;
        var message = this.linkify(this.messageData.message);
        var container = this.$j("<li></li>");
        //var avatarContainer:any = this.$j("<div class='avatar'></div>");
        //var avatarImage:any = this.$j("<img src='https://i.pinimg.com/originals/06/b5/3d/06b53def284a1c51593dc55b87358ec3.jpg' alt='user avatar'>");
        var messageContainer = this.$j("<div class='messages'></div>");
        var nameContainer = this.$j("<span class='name'>" + sender + "</span>");
        var messageText = this.$j("<span class='text'>" + message + "</span>");
        //avatarImage.appendTo(avatarContainer);
        nameContainer.appendTo(messageContainer);
        messageText.appendTo(messageContainer);
        //avatarContainer.appendTo(container);
        messageContainer.appendTo(container);
        /*
        var senderContainer:any = this.$j("<span class='user'>"+sender+" </span>");
        var textContainer:any = this.$j("<span class='text'>"+message+"</span>");
        
        senderContainer.appendTo(container);
        textContainer.appendTo(container);
        */
        container.appendTo(this.parentElement);
    };
    TextChatMessageRenderer.prototype.linkify = function (inputText) {
        var replacedText, replacePattern1, replacePattern2, replacePattern3;
        //URLs starting with http://, https://, or ftp://
        replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
        replacedText = inputText.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');
        //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
        replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
        replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2</a>');
        //Change email addresses to mailto:: links.
        replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
        replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1">$1</a>');
        return replacedText;
    };
    return TextChatMessageRenderer;
}());
//# sourceMappingURL=TextChatMessageRenderer.js.map