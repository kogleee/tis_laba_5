let inputs = document.querySelectorAll("input[type='radio']")
let elem = document.querySelector("#elem")
let btn = document.querySelector("#btn")

btn.addEventListener("click", function(){
    for (let input of inputs){
        if (input.checked){
            elem.textContent = input.value
        }
    }
})
