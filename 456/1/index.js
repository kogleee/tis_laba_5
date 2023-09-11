let elem = document.querySelector("#elem")
let text = document.querySelector("#text")

for(let i = 1; i <=5; i++){
    let input = document.createElement("input")
    input.addEventListener("blur", function(){
        text.textContent = input.value
    })
    elem.appendChild(input)
}


