let elem = document.querySelector("#elem")
let btn = document.querySelector("#btn")

btn.addEventListener("click", function(){
	setInterval(() =>{
		+elem.textContent--
	},1000)
})