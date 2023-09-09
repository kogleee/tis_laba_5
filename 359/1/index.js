let btn = document.querySelector("#btn")
let elem = document.querySelector("a")


function func(){
	elem.textContent += ` (${elem.href})`
	btn.removeEventListener("click", func)
}
btn.addEventListener("click",func)