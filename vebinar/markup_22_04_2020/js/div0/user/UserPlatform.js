var UserPlatform = (function () {
    function UserPlatform() {
        var nVer = navigator.appVersion;
        var nAgt = navigator.userAgent;
        this.browserName = navigator.appName;
        this.fullVersion = '' + parseFloat(navigator.appVersion);
        this.majorVersion = parseInt(navigator.appVersion, 10);
        var nameOffset, verOffset, ix;
        // In Opera, the true version is after "Opera" or after "Version"
        if ((verOffset = nAgt.indexOf("Opera")) != -1) {
            this.browserName = "Opera";
            this.fullVersion = nAgt.substring(verOffset + 6);
            if ((verOffset = nAgt.indexOf("Version")) != -1)
                this.fullVersion = nAgt.substring(verOffset + 8);
        }
        else if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
            this.browserName = "Microsoft Internet Explorer";
            this.fullVersion = nAgt.substring(verOffset + 5);
        }
        else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
            this.browserName = "Chrome";
            this.fullVersion = nAgt.substring(verOffset + 7);
        }
        else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
            this.browserName = "Safari";
            this.fullVersion = nAgt.substring(verOffset + 7);
            if ((verOffset = nAgt.indexOf("Version")) != -1)
                this.fullVersion = nAgt.substring(verOffset + 8);
        }
        else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
            this.browserName = "Firefox";
            this.fullVersion = nAgt.substring(verOffset + 8);
        }
        else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) <
            (verOffset = nAgt.lastIndexOf('/'))) {
            this.browserName = nAgt.substring(nameOffset, verOffset);
            this.fullVersion = nAgt.substring(verOffset + 1);
            if (this.browserName.toLowerCase() == this.browserName.toUpperCase()) {
                this.browserName = navigator.appName;
            }
        }
        // trim the fullVersion string at semicolon/space if present
        if ((ix = this.fullVersion.indexOf(";")) != -1)
            this.fullVersion = this.fullVersion.substring(0, ix);
        if ((ix = this.fullVersion.indexOf(" ")) != -1)
            this.fullVersion = this.fullVersion.substring(0, ix);
        this.majorVersion = parseInt('' + this.fullVersion, 10);
        if (isNaN(this.majorVersion)) {
            this.fullVersion = '' + parseFloat(navigator.appVersion);
            this.majorVersion = parseInt(navigator.appVersion, 10);
        }
        this.navigatorAppName = navigator.appName;
        this.navigatorUserAgent = navigator.userAgent;
        /*
        document.write(''
            +'Browser name  = '+browserName+'<br>'
            +'Full version  = '+fullVersion+'<br>'
            +'Major version = '+majorVersion+'<br>'
            +'navigator.appName = '+navigator.appName+'<br>'
            +'navigator.userAgent = '+navigator.userAgent+'<br>'
        )
        */
    }
    UserPlatform.prototype.getProperties = function () {
        return "browserName=" + this.browserName + " \n</br>fullVersion=" + this.fullVersion + " \n</br>majorVersion=" + this.majorVersion + " \n</br>navigatorAppName=" + this.navigatorAppName + " \n</br>navigatorUserAgent=" + this.navigatorUserAgent;
    };
    return UserPlatform;
}());
//# sourceMappingURL=UserPlatform.js.map