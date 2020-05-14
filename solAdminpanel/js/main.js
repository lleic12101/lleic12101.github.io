//video controls
$('.audioIcon').click(function () {
   $(this).toggleClass('video__control-audio-active');
});
$('.videoIcon').click(function () {
    $(this).toggleClass('video-control-video-active');
});
$('.messageIcon').click(function () {
    $(this).removeClass('video__control-message-active');
});

//autoscroll
var hasAutoScrolling = true;
$('.switch-btn').click(function () {
    $(this).toggleClass('switch-on');
    hasAutoScrolling = !hasAutoScrolling;
    console.log(hasAutoScrolling);
});

//chat
const input = document.querySelector('.input-message');
const sendButton = document.querySelector('.send-message');
const chatBody = document.querySelector('.chat__body');
const chatList = chatBody.querySelector('ul');
function sendMessage() {
    if (input.value.length === 0) {
        return false;
    }
    if (!(input.value.length >= 250)) {
        chatList.innerHTML += `
                  <li>
                      <div class="messages">
                          <span class="name name-admin">Admin</span>
                          <span class="text">${input.value}</span>
                      </div>
                  </li>
              `;
        if(hasAutoScrolling == true) chatBody.scrollTo({ top: chatList.offsetHeight, behavior: 'smooth' });
        input.value = '';
    }
}
sendButton.addEventListener('click', (function () {
    sendMessage();
}));
input.addEventListener('keydown', (function (e) {
    if (e.keyCode === 13) {
        sendMessage();
    }
}));

//private chat
const inputPrivate = document.querySelector('.input-message-private');
const sendButtonPrivate = document.querySelector('.send-message-private');
const chatBodyPrivate = document.querySelector('.privateChat__body');
function sendMessagePrivate() {
    var now = new Date().toLocaleTimeString().slice(0,-3);
    if (inputPrivate.value.length === 0) {
        return false;
    }
    if (!(inputPrivate.value.length >= 250)) {
        chatBodyPrivate.innerHTML += `
                   <div class="privateChat__bodyMessage">
                    <p class="privateChat__bodyMessageText">${inputPrivate.value}</p>
                    <p class="privateChat__bodyMessageTime">${now}</p>
                   </div>
              `;
        // if(hasAutoScrolling == true)
        chatBodyPrivate.scrollTo({ top: chatList.offsetHeight, behavior: 'smooth' });
        inputPrivate.value = '';
    }
}
sendButtonPrivate.addEventListener('click', (function () {
    sendMessagePrivate();
}));
inputPrivate.addEventListener('keydown', (function (e) {
    if (e.keyCode === 13) {
        sendMessagePrivate();
    }
}));

//manage tabs
$('.manageBlock__headerBtn').click(function () {
   $('.manageBlock__headerBtn').removeClass('manageBlock__headerBtn-active');
   $(this).addClass('manageBlock__headerBtn-active');
   $("#item__support").removeClass('manageBlock__item-active');
   $("#item__users").removeClass('manageBlock__item-active');
   $("#item__" + this.id).addClass('manageBlock__item-active');
});

//manage controls
$('.manageUsers__tableContol').click(function () {
    $(this).toggleClass('manageUsers__tableContol-disabled');
});

//manage opened item
$('.manageSupport__item').click(function(){
    if(!$(this).hasClass('opened')){
        $(this).addClass('opened');
        $(this).addClass('manageSupport__item-active');
    }
});
$('.manageSupport__itemHide').click(function(e){
    e.stopPropagation();
    $(this).parent().removeClass('opened');
    $(this).parent().removeClass('manageSupport__item-active');
    console.log($(this).parent());
});

//test
