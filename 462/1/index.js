let input = document.querySelector("#input")
let btn = document.querySelector("#button")

btn.addEventListener("click", function(){
    let input2 = input.cloneNode(true)
    document.body.appendChild(input2)
})

