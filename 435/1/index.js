"use strict";

let elem = document.querySelector('#elem');
elem.addEventListener('blur', func);

function func() {
	let self = this
	alert( square() );
	
	function square() {
		return self.value * self.value;
	}
}