let input = document.querySelector("#input")

input.addEventListener("click", function(event){
	if (event.altKey) input.style.background = "red"
})