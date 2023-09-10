let input = document.querySelector("#input")


input.addEventListener("input", function(){
    let count = 0;
    for (let i = 0; i < input.value.length; i++ ){
        count += 1;
        console.log(count)
    }
    if (count == 5){
        alert("5 slovey")
    }
})