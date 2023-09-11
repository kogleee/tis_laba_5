let ul = document.querySelector("ul")
let li = document.querySelectorAll("li")

ul.addEventListener("click", func)


function func(event){
	if (event.target == ul) console.log("click ul")
	else event.target.textContent += "!"
}