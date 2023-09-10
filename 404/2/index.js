let checkbox = document.querySelector('#checkbox');
let btn = document.querySelector('button');
let div = document.querySelector('div');

btn.addEventListener('click', function() {
	if (checkbox.checked) {
		div.textContent = '111';
	} else {
		div.textContent = '222';
	}
});