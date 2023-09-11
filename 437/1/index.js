"use strict";

let elem = document.querySelector('#elem');
elem.addEventListener('blur', func);

function func() {
	 let square = () =>{
		return this.value * this.value;
	}
	alert(square())
	
	
}