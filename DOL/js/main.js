var doc = document;

//conversation video change
doc.getElementById("conversation-change").onclick = function () {
    doc.querySelector('.main-conversation').classList.toggle('main-conversation-video');
    doc.querySelector('.main-chat__items').classList.toggle('main-chat__items-short');
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