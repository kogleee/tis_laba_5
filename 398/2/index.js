let elem = document.querySelector("#elem")
let btn = document.querySelector("#btn")
let checkbox = document.querySelector("#checkbox")

btn.addEventListener("click", function(){
    if (checkbox.checked){
        elem.textContent = "Hello"
    }
})
