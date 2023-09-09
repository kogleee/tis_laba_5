let elems = document.querySelectorAll("li")

let res = 0;
for (let elem of elems){
	let sum = 0;
	for (let i of elem.textContent){
		sum += +i
		
	} 

	if (sum == 6){
		res += +elem.textContent
	}
}

console.log(res)
