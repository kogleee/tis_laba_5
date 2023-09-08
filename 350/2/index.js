let input = document.querySelector("#elem")

input.addEventListener("blur", function(){
	let p = document.querySelector("p")
	p.innerHTML = String(input.value ** 2)
	
})