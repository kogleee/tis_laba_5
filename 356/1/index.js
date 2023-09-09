let elems = document.querySelectorAll(".elem")
let btn = document.querySelector("#btn")


function func(){
	for (let elem of elems){
		elem.innerHTML = "text"
	}
}

btn.addEventListener("click", func)