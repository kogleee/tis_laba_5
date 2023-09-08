let input = document.querySelector("#elem")


input.addEventListener("focus", function(){
	
	input.value = "1"
	
})

input.addEventListener("blur", function(){
	
	input.value = "2"
	
})