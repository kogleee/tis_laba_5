let start = document.querySelector("#start")
let end = document.querySelector("#end")
let i = 100;
let interval;



start.addEventListener("click", function func(){
	interval = setInterval(function(){
		console.log(i--)
		if( i < 1){
			console.log()
			clearInterval(interval)
		}
	}, 100);
	
})
	
	

end.addEventListener("click", function(){
	clearInterval(interval)
})


