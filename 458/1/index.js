let elem = document.querySelector("#elem")

let start = document.createElement("li")
start.textContent = "start"

let finish = document.createElement("li")
finish.textContent = "finish"

elem.prepend(start)
elem.append(finish)