let start = document.querySelector("#start")
let i = 100;
start.addEventListener("click", function func(){
	
	setInterval(function(){
		console.log(i--)
	}, 1000);
	this.removeEventListener("click", func)
});


