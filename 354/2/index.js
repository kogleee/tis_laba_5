let btn = document.querySelector("#btn")

btn.addEventListener("click", function(){
	this.value = String(+this.value + 1)
})
