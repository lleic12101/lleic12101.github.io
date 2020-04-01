var watcherBlock = document.querySelector('.watcher__block');
var chatHeader = document.querySelector('.chat__header');
var chatBodyWatcher = document.querySelector('.chat__body-watcher');

if(window.innerWidth > 1228){
    var chatBodyHeight = (24 + video.clientHeight + watcherBlock.clientHeight) - chatHeader.clientHeight - chatFooter.clientHeight - 4;
    chatBodyWatcher.style.height = chatBodyHeight + 'px';
}