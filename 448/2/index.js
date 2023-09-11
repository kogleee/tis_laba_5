let start = document.querySelector("#start")

function func(){
	setInterval(() =>{
		start.value -= 1
	},1000)
}

func()