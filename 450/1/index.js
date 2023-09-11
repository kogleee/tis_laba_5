let btn = document.querySelector("#btn")
let elem = document.querySelector("#elem")

btn.addEventListener("click", function(){
	
	setInterval(() => {
		+elem.textContent++
	}, 1000);
})