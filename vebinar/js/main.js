var watcherBlock = document.querySelector('.watcher__block');
var chatHeader = document.querySelector('.chat__header');
var chatBodyWatcher = document.querySelector('.chat__body-watcher');

if(window.innerWidth > 736){
    var chatBodyHeight = (24 + video.clientHeight + watcherBlock.clientHeight) - chatHeader.clientHeight - chatFooter.clientHeight - 4;
    chatBodyWatcher.style.height = chatBodyHeight + 'px';
}

var callBtn = document.querySelector('.watcher__button-call');
callBtn.addEventListener("click", function () {
   document.querySelector('.watcher__buttonBlockText-dots').style.opacity = 1;
});