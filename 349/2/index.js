let btn = document.querySelector("#btn")

btn.addEventListener("click", function(){
	let elem = document.querySelector("#elem")
	let p = document.querySelector("p")
	p.innerHTML = elem.value
})