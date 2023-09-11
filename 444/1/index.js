let i = 10;
let unterval = setInterval(() =>{
	console.log(--i)
	if (i <= 0) clearInterval(unterval)
}, 1000)