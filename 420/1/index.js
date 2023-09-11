let a = document.querySelector("a")

a.addEventListener("click", function(event){
	event.preventDefault()
	a.textContent += a.href
})