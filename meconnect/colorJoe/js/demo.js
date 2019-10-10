fixScale(document);

main();

function main() {
    function e(parent, text) {
        var elem = document.createElement('div');
        elem.innerHTML = text;
        parent.appendChild(elem);
    }
	var pickers  = document.querySelectorAll('#closeablePicker');
	for( var i = 0; i < pickers.length; i++ ){
		var cj = colorjoe.rgb(pickers[i], pickers[i].parentNode.querySelector('.main__settingColorBlock').style.background, [
                          'close',
                          'currentColor'
		]);
	}
}
