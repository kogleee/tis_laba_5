
let elem = document.querySelector("#elem")
let div = document.createElement("div")
div.className = "www"
div.innerHTML = "<p>text</p><p>text</p><input>"
elem.insertAdjacentElement("beforebegin", div)



