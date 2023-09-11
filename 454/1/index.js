let elem = document.querySelector("#elem")
let btn = document.querySelector("#button")

btn.addEventListener("click", function(){
    let li = document.createElement("li")
    li.textContent = "item"
	li.addEventListener("click", function(){
		li.textContent += "!"
	})
    elem.appendChild(li)
})



