let p = document.querySelector("p")
let input = document.querySelector("input")

input.addEventListener("blur", function(){
	p.textContent = input.value
})