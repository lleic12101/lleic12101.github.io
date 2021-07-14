var doc = document;

//conversation video change
doc.getElementById("conversation-change").onclick = function () {
    doc.querySelector('.main-conversation').classList.toggle('main-conversation-video');
    doc.querySelector('.main-chat__items').classList.toggle('main-chat__items-short');
    doc.querySelector(".main-chat__items").scrollTop = doc.querySelector(".main-chat__items").scrollHeight;
};

//contacts list tabs
doc.getElementById("contactsBtn").onclick = function () {
    doc.querySelector('#contactsTab').classList.add('main-list__tab-active');
    doc.querySelector('#invitationsTab').classList.remove('main-list__tab-active');

    doc.querySelector('#contactsBtn').classList.add('main-list__button-active');
    doc.querySelector('#invitationsBtn').classList.remove('main-list__button-active');
};
doc.getElementById("invitationsBtn").onclick = function () {
    doc.querySelector('#invitationsTab').classList.add('main-list__tab-active');
    doc.querySelector('#contactsTab').classList.remove('main-list__tab-active');

    doc.querySelector('#invitationsBtn').classList.add('main-list__button-active');
    doc.querySelector('#contactsBtn').classList.remove('main-list__button-active');
};
doc.getElementById("closeNewInvitations").onclick = function () {
    doc.querySelector('#newInvitations').classList.remove('visible');
};

//scroll chat to top
window.onload = function () {
    doc.querySelector(".main-chat__items").scrollTop = doc.querySelector(".main-chat__items").scrollHeight;
};

//chat viewer
doc.getElementById("closeViewer").onclick = function () {
    doc.querySelector('.main-chat__viewer').classList.remove('visible');
};
var chat_imgs = doc.querySelectorAll(".main-chat__itemImg");
for (var i = 0; i < chat_imgs.length; i++) {
    chat_imgs[i].onclick = function () {
        console.log(123);
        doc.querySelector('.main-chat__viewer').classList.add('visible');
        doc.querySelector('.main-chat__viewerImg').src = this.src;
    };
}

//modal
var modal = document.querySelector('.modal');
function toggleModal() {
    modal.classList.toggle('show-modal');
}
function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}
toggleModal();
doc.querySelector(".modal-content__close").onclick = function () {
    toggleModal();
};
window.addEventListener("click", windowOnClick);

//smiles
doc.getElementById("smileButton").onclick = function () {
    doc.querySelector('#stickerBlock').classList.remove('visible');
    doc.querySelector('#smileBlock').classList.toggle('visible');
};

//stickers
doc.getElementById("stickerButton").onclick = function () {
    doc.querySelector('#smileBlock').classList.remove('visible');
    doc.querySelector('#stickerBlock').classList.toggle('visible');
};