var doc = document;

var saveBtn = doc.querySelector('.mainHeader__saveBtn')
var addBtn = doc.querySelector('.mainHeader__addBtn');
var addBtnWelcome = doc.querySelector('.modalWelcome__add');

var modal = doc.querySelector('.modal');
var closeButton = doc.querySelector('.modal__closeBtn');

var modalFill = doc.querySelector('.modalFill');
var closeButtonFill = doc.querySelector('.modalFill__closeBtn');

var modalEdit = doc.querySelector('.modalEdit');
var closeButtonEdit = doc.querySelector('.modalEdit__closeBtn');

var modalWelcome = doc.querySelector('.modalWelcome');
var closeButtonWelcome = doc.querySelector('.modalWelcome__closeBtn');

var search = doc.querySelector('.mainHeader__input');
var output = doc.querySelector('.mainContent');
var formFields = doc.querySelectorAll('.modal__input');
var clearBtns = doc.querySelectorAll('.modal__clear');
var phoneBase = [];

var okBtn = doc.querySelector('.modal__btn-ok');
var resetBtn = doc.querySelector('.modal__btn-reset');
var closeBtn = doc.querySelector('.modal__btn-close');

var editInputsBlock = doc.querySelector('.modalEdit__inputs');
var editFormFields = doc.querySelectorAll('.modalEdit__input');
var clearEditBtns = doc.querySelectorAll('.modalEdit__clear');

var deleteEditBtn = doc.querySelector('.modalEdit__deleteBtn');
var saveEditBtn = doc.querySelector('.modalEdit__btn-save');
var resetEditBtn = doc.querySelector('.modalEdit__btn-reset');
var closeEditBtn = doc.querySelector('.modalEdit__btn-close');
	
for( var i = 0; i < formFields.length; i++ ) {
	clearBtns[i].id = i;
	clearEditBtns[i].id = i;
	clearBtns[i].onclick = function() {
		formFields[this.id].value = '';
	}
	clearEditBtns[i].onclick = function() {
		editFormFields[this.id].value = '';
	}
}

addBtn.onclick = function(e) {
	e.preventDefault();
	toggleModal();
}

addBtnWelcome.onclick = function(e) {
	e.preventDefault();
	toggleModal();
	toggleModalWelcome();
}

saveBtn.onclick = function() {
	localStorage.setItem('phoneBase', JSON.stringify(phoneBase));
}

okBtn.onclick = function() {
	var phone = {};
	var emptyRequiredToFill = false;
	for( var i = 0; i < formFields.length; i++ ) {
		var fieldName = formFields[i].getAttribute('name');
		if((formFields[i].value).trim() !== '') {
			phone[fieldName] = formFields[i].value;
		} else {
			phone[fieldName] = ' ';
		}		
		if(fieldName === 'surname' || fieldName === 'phoneNumber') {
			if((formFields[i].value).trim() === '') emptyRequiredToFill = true;
		}
	}
	if(emptyRequiredToFill === true) {
		toggleModalFill();
		return;
	}
	phoneBase.push(phone);
	toggleModal();
	resetFields(formFields);
	phonesPrint(phoneBase);
}
resetBtn.onclick = function() {
	resetFields(formFields);
}
closeBtn.onclick = function() {
	toggleModal();
	resetFields(formFields);
}

search.oninput = function() {
	var rightArr = [];
	for(var i = 0; i < phoneBase.length; i++) {
		var obj = phoneBase[i];
		var push = false;
		for( var key in phoneBase[i] ) {
			var currentName = obj[key].toLowerCase();
			var currentValue = this.value.toLowerCase();
			if(currentName.indexOf(currentValue) !== -1) push = true;
		}
		if(push === true) rightArr.push(phoneBase[i]);
	}
	phonesPrint(rightArr);
}

/*
localStorage.setItem('name', 'Dmitry');
localStorage.setItem('surname', 'Stetsenko');
localStorage.setItem('age', '38');

for( key in localStorage ) {
	console.log(key + ': ' + localStorage[key]); 
}

var abonents = ['dima', 'vasya', 'kolya', 'petya'];
localStorage.setItem('abonents', abonents);

console.log(localStorage.getItem('abonents'));

localStorage.removeItem('abonents');

localStorage.clear();

localStorage['newAbonents'] = 'new Abonent';

delete localStorage['newAbonents'];
*/

if(localStorage.getItem('phoneBase') !== null) 
{
	phoneBase = JSON.parse(localStorage.getItem('phoneBase'));	
	phonesPrint(phoneBase);
} else toggleModalWelcome();


function resetFields(fields) {
	for( var i = 0; i < fields.length; i++ ) {
		fields[i].value = '';
	}
}
function phonesPrint(arr) {
	output.innerHTML = '';
	for( var i = 0; i < arr.length; i++ ) {
		var newDiv = doc.createElement('div');
		newDiv.classList.add('mainContent__phoneBlock');
		var newH = doc.createElement('h1');
		newH.classList.add('mainContent__phoneHeadline');
		var newDivP = doc.createElement('div');
		newDivP.classList.add('mainContent__phonePBlock');
		var newIcons = doc.createElement('p');
		newIcons.classList.add('mainContent__iconsBlock');
		newIcons.innerHTML = '<span class="mainContent__iconEdit"><i class="fas fa-user-edit"></i></span>' + 
							 '<span class="mainContent__iconDown"><i class="fas fa-chevron-down"></i></span>' + 
							 '<span class="mainContent__iconUp"><i class="fas fa-chevron-up"></i></span>';
							 
		for( var key in arr[i]) {
			var obj = arr[i];
			if( (obj[key]).trim() !== '' ) {
				if( key === 'surname' || key === 'name1' || key === 'name2') {
					newH.innerHTML += obj[key] + ' ';
				} else {
					newDivP.innerHTML += '<p>' + key + ': ' + obj[key] + '</p>';
				}
			}
			newDiv.appendChild(newH);
			newDiv.appendChild(newIcons);
			newDiv.appendChild(newDivP);
			output.appendChild(newDiv);
		}
	}
	buttonsUpdate()
}
function buttonsUpdate(type) {
	var buttons = doc.querySelectorAll('.mainContent__phoneBlock');
	var edits = doc.querySelectorAll('.mainContent__iconEdit');
	for( var i = 0; i < buttons.length; i++ ) {
		buttons[i].id = i;
		buttons[i].onclick = function() {
			var pBlock = this.querySelector('.mainContent__phonePBlock');
			pBlock.classList.toggle('mainContent__phonePBlock-active');
			var iconDown = this.querySelector('.mainContent__iconDown');
			iconDown.classList.toggle('mainContent__iconDown-hidden');
			var iconUp = this.querySelector('.mainContent__iconUp');
			iconUp.classList.toggle('mainContent__iconUp-active');
			var iconEdit = this.querySelector('.mainContent__iconEdit');
			iconEdit.classList.toggle('mainContent__iconEdit-active');
		}
		edits[i].id = i;
		edits[i].onclick = function(e) {
			e.stopPropagation();
			var currentObj = phoneBase[this.id];
			var objBuffer = [];
			for( var key in currentObj) {
				objBuffer.push(currentObj[key]);
			}
			for( var i = 0; i < editFormFields.length; i++ ) {
				editFormFields[i].value = (objBuffer[i]).trim();
			}
			var editsId = this.id;
			deleteEditBtn.onclick = function() {
				phoneBase.splice(editsId, 1);
				toggleModalEdit();
				resetFields(editFormFields);
				phonesPrint(phoneBase);
			}
			saveEditBtn.onclick = function() {
				var emptyRequiredToFill = false;
				var currObj = phoneBase[editsId];
				for( var i = 0; i < editFormFields.length; i++ ) {
					var fieldName = editFormFields[i].getAttribute('name');
					if((editFormFields[i].value).trim() !== '') {
						currObj[fieldName] = editFormFields[i].value;
					} else {
						currObj[fieldName] = ' ';
					}		
					if(fieldName === 'surname' || fieldName === 'phoneNumber') {
						if((editFormFields[i].value).trim() === '') emptyRequiredToFill = true;
					}
				}
				if(emptyRequiredToFill === true) {
					toggleModalFill();
					return;
				}
				toggleModalEdit();
				resetFields(editFormFields);
				phonesPrint(phoneBase);
			}
			resetEditBtn.onclick = function() {
				resetFields(editFormFields);
			}
			closeEditBtn.onclick = function() {
				toggleModalEdit();
				resetFields(editFormFields);
			}
		toggleModalEdit();
		}
	}
}

function toggleModal() {
    modal.classList.toggle('show-modal');
}
function toggleModalFill() {
    modalFill.classList.toggle('show-modalFill');
}
function toggleModalEdit() {
    modalEdit.classList.toggle('show-modalEdit');
}
function toggleModalWelcome() {
    modalWelcome.classList.toggle('show-modalWelcome');
}
function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
	if (event.target === modalFill) {
        toggleModalFill();
    }
	if (event.target === modalEdit) {
        toggleModalEdit();
    }
	if (event.target === modalWelcome) {
        toggleModalWelcome();
    }
}

closeButton.addEventListener("click", toggleModal);
closeButtonFill.addEventListener("click", toggleModalFill);
closeButtonEdit.addEventListener("click", toggleModalEdit);
closeButtonWelcome.addEventListener("click", toggleModalWelcome);
window.addEventListener("click", windowOnClick);