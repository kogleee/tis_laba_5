let input1 = document.querySelector("#input1")

let input2 = document.querySelector("#input2")

input1.addEventListener("input", function(){
    
    for (let i = 1; i < input1.value.length + 1; i++){
        if (i == 2){
           
            input2.focus()
        }
    }

    
})

input2.addEventListener("input", function(){
    for (let i = 1; i <input2.value.length + 1; i++){
        if (i == 2){
            input2.blur()
        }
    }

})



