let i = 0

function timer(){
	setTimeout(() => {
		console.log(i++)
		timer()
		
	},1000)
}

timer()

