let btn = document.querySelector("#btn")



function func(){
	if (+this.value >= 10){
		btn.removeEventListener("click", func)
	
	}else this.value = 1 + +this.value
	
	
}

btn.addEventListener("click", func)