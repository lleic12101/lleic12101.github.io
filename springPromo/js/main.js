//Copy to clipboard
var btns = document.querySelectorAll('.success__dataCopyBtn');
for(var i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', function(){
        navigator.clipboard.writeText(this.parentNode.querySelector('.success__dataInput').value);
    });
}
