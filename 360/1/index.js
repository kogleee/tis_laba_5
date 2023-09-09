let elems = document.querySelectorAll(".elem")

for (let elem of elems){
	elem.addEventListener("click", func)
}


function func(){
	this.textContent += "!"
	this.removeEventListener("click", func)
}