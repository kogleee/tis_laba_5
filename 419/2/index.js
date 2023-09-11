let elem = document.querySelector("#elem")

elem.addEventListener("click", function(event){
	if (event.shiftKey){
		
		event.target.textContent += "2"
	}
	else event.target.textContent += "1"
})