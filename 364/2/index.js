let p = document.querySelector("p")
let input1 = document.querySelector("#el1")
let input2 = document.querySelector("#el2")
let btn = document.querySelector("#btn")

btn.addEventListener("click",function(){
	p.textContent = +input1.value + +input2.value
})
