let elem = document.querySelector("#elem")
let lock = document.querySelector("#lock")
let unlock = document.querySelector("#unlock")

lock.addEventListener("click", function(){
    elem.disabled = true
})

unlock.addEventListener("click", function(){
    elem.disabled = false
})

