let elems = document.querySelectorAll(".elem")
let btn = document.querySelector("#btn")

btn.addEventListener("click", function(){
	let i = 1
	for (let elem of elems){
		elem.innerHTML += " " + i
		i++
	}
})