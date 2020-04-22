//markup_22_04_2020
// text chat
var totalChars = 0;
var hasAutoScrolling = true;
var chatBody;
var chatList;
var maxChars = 250;
// end of text chat

var isFullscreen = false;
var role = "SUBSCRIBER";


$('#autoscrollCheck').click(function () {
    if(hasAutoScrolling == true) hasAutoScrolling = false;
    else hasAutoScrolling = true;
});
//endOfMArkup22_04_2020

function startApplication(_role){
    role = _role;
    createTextChat();
    createFullscreen();

    if(role == "SUBSCRIBER"){
        $("#fullscreenButton").show();
    }
    else{
        createTeacherTabs();
        createUsersList();
        createCallOnlinePublisherElement();
        $("#publisherCallOnlineElement").css("display", "flex"); // в демонстрации почему-то включается block, не стал тратить время и искать отчего. В продакшене включается flex Чтобы увидеть, эту строку можно закомментировать
    }
}

// fullscreen
function createFullscreen(){
    $("#fullscreenButton").click(function(){
        console.log("clicked");
        isFullscreen=!isFullscreen;
        if(isFullscreen){
            onToggleFullScreen();
        }
        else{
            onToggleNormalScreen();
        }
    });
}

//markup_22_04_2020
function onToggleFullScreen(){

    console.log("onToggleFullScreen");

    $(".teacher__column-2").hide();
    $(".teacher__block").hide();
    $(".chat__wrapper").addClass("chat__wrapper-hide");
    $(".container").addClass("container-fluid");
    $(".container__video").addClass("container__video-hide");
    $(".wrapper__column:first-child").css( { marginRight : "0px" } );

    var body = document.querySelector('body');
    var video = document.querySelector('.video');

    var videoHeight = "100vh";
    video.style.height = videoHeight;
    var videoWidth = video.clientHeight * 1.777777777777778;
    video.style.width = videoWidth + "px";
    if(video.clientWidth > body.clientWidth) {
        var videoWidth = "100vw";
        video.style.width = videoWidth;
        var videoHeight = video.clientWidth / 1.777777777777778;
        video.style.height = videoHeight + "px";
    }

    $(".wrapper__column").addClass('wrapper__column-active');
    document.querySelector('.wrapper__column').style.marginTop = 0;
}

function onToggleNormalScreen(){

    console.log("onToggleNormalScreen");

    if(role == "PUBLISHER"){
        $(".teacher__column-2").show();
        $(".teacher__block").show();
    }

    $(".chat__wrapper").removeClass("chat__wrapper-hide");
    $(".container").removeClass("container-fluid");
    $(".container__video").removeClass("container__video-hide");
    $(".wrapper__column").removeClass('wrapper__column-active');


    document.querySelector('.video').style.height = "";
    document.querySelector('.video').style.width = "";

    if(window.innerWidth > 736) {
        document.querySelector('.wrapper__column').style.marginTop = '24px';
        $(".wrapper__column:first-child").css( { marginRight : "24px" } );
    }
}
// end of fullscreen


// TEXT CHAT //
function createTextChat(){
    chatBody = $(".chat__body");
    chatList = $("#textMessagesContainer");
    var autoscrollCheckBox = $("#textChatAutoscrollCheckBox"); // он сейчас закомментирован в html

    var textareas = document.querySelector('.input-message'),
        hiddenDiv = document.createElement('div'),
        content = null;

    textareas.classList.add('txtstuff');
    hiddenDiv.classList.add('txta');
    hiddenDiv.style.display = 'none';
    hiddenDiv.style.whiteSpace = 'pre-wrap';
    hiddenDiv.style.wordWrap = 'break-word';
    textareas.addEventListener('input', function() {
        textareas.parentNode.appendChild(hiddenDiv);
        textareas.style.resize = 'none';
        textareas.style.overflow = 'hidden';
        content =  textareas.value;
        content = content.replace(/\n/g, '<br>');
        hiddenDiv.innerHTML = content + '<br style="line-height: 3px;">';
        hiddenDiv.style.visibility = 'hidden';
        hiddenDiv.style.display = 'block';
        textareas.style.height = hiddenDiv.offsetHeight + 'px';
        hiddenDiv.style.visibility = 'visible';
        hiddenDiv.style.display = 'none';
    });
    
    $("#sendTextMessageButton").click((event)=>sendTextChatMessage(event));
    $('#textMessageInput').on('keyup', (event)=>onInputKeyUp(event));
    autoscrollCheckBox.change(()=>onAutoscrollChanged());
}

function sendTextChatMessage(){
    var message = $("#textMessageInput").val();

    if(message == "" || message == undefined || message == null){
        console.error("empty message");
        alert("Нельзя отправить пустое сообщение");
    }
    else{

        var messageData = {clientData:"Имя пользователя", message:message};
        
        new TextChatMessageRenderer(messageData, $("#textMessagesContainer"), $);

        if(hasAutoScrolling){
            scrollToBottom();
        }
        clearTotalChars();
        clearInput();
    }
    $('.input-message').css( { height : "16px" } );
}
//endOfMArkup22_04_2020

function onInputKeyUp(event){
    if (event.keyCode === 13) {
        if(totalChars == 0){
            return false;
        }
        sendTextChatMessage();
        clearTotalChars();
        clearInput();
        event.preventDefault();
        return false;
    }
    else{
        var currentText = $('#textMessageInput').val();
        totalChars = currentText.length;

        if(totalChars < maxChars + 1){
            onCharsTotalChanged();
        }
        else{
            currentText = currentText.substr(0, totalChars-1);
            $('#textMessageInput').val(currentText);
            return false;
        }
    }
    return true;
}

function clearInput(){
    $('#textMessageInput').val("");
}

function scrollToBottom() {
    var scrollValue = chatList.height();
    chatBody.animate({ scrollTop: scrollValue }, 1000);
}
function clearTotalChars(){
    totalChars = 0;
    $("#totalChars").text(totalChars);
}
function onCharsTotalChanged() {
    $("#totalChars").text(totalChars);
}
function onAutoscrollChanged() {
    hasAutoScrolling = !hasAutoScrolling;
}
// END OF TEXT CHAT


// TEACHER TABS
function createTeacherTabs(){
    console.log("create teacher tabs");
    new TeacherTabsController(new TeacherTabsModel(new TeacherTabsView($)));
}
function createCallOnlinePublisherElement(){
    var callOnlineView = new CallOnlineView($);
    var callOnlineModel = new CallOnlineModel(callOnlineView);

    var callOnlineControllerPublisher = new CallOnlineController(callOnlineModel);
}

function createUsersList(){
    usersList = new UserListController(new UserListModel(new UserListView($)));
}

function loadUsers(){
    usersList.setRoomName(roomName);
}
// END OF TEACHER TABS