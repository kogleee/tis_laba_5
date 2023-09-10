let elem = document.querySelector("input")
let btn1 = document.querySelector("#check")
let btn2 = document.querySelector("#uncheck")

check.addEventListener("click", function(){
    elem.checked = true
})

uncheck.addEventListener("click", function(){
    elem.checked = false
})
