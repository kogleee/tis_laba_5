let parent = document.querySelector("#parent")
let elem = document.querySelector("#elem")

let elem2 = document.createElement("li")
elem2.textContent = "new"
elem2.addEventListener("click", function(){
    elem2.textContent += "!"
})

parent.insertBefore(elem2,elem)




