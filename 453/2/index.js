let elem = document.querySelector("#elem")
let btn = document.querySelector("#button")

btn.addEventListener("click", function(){
    let li = document.createElement("li")
    li.textContent = "item"
    elem.appendChild(li)
})



