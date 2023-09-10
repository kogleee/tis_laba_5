let elem = document.querySelector("#elem")

let checkbox = document.querySelector("#checkbox")

checkbox.addEventListener("change", function(){
    elem.textContent = checkbox.value
})


