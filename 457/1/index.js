let elems = document.querySelectorAll("li")

for(let elem of elems){
    elem.addEventListener("click", function(){
        elem.remove()
    })
}


