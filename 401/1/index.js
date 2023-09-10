let input = document.querySelector("#input")
let elem = document.querySelector("#elem")

input.addEventListener("change", function(){
    elem.textContent = input.value
})