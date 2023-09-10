let elem = document.querySelector("#elem")
let p = document.querySelector("p")
elem.addEventListener("blur", function(){
    p.textContent = elem.value
})

