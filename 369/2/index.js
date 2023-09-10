let elems = document.querySelectorAll("div")
for(let elem of elems){
    elem.addEventListener("click", function(){
        elem.textContent += String(elem.dataset.num)
    })
    
}

