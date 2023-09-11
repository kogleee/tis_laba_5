let a = document.querySelector("a")
let elem = document.querySelector("p")
let input1 = document.querySelector("#input1")
let input2 = document.querySelector("#input2")
a.addEventListener("click", function(event){
	event.preventDefault()
	elem.textContent = +input1.value + +input2.value
} )