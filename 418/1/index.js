let elem = document.querySelector("#elem")

elem.addEventListener("keypress", function(event){
	console.log(event.key + " " + event.code)
})