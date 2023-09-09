let elems = document.querySelectorAll(".elem")

function func(){
	this.innerHTML = this.innerHTML ** 2
}

for (let elem of elems){
	elem.addEventListener("click", func)
}