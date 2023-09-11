"use strict";

let elem = document.querySelector('#elem');
elem.addEventListener('blur', func);

function func() {
	
	alert( square(this) );
	
	function square(self) {
		return self.value * self.value;
	}
}