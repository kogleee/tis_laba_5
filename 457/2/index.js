let parent = document.querySelector("#parent")
let btn = document.querySelector("#button")

btn.addEventListener("click", function(){
    parent.lastElementChild.remove()
})

