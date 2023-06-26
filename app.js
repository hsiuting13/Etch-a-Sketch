const container = document.querySelector(".container");
const start = document.querySelector(".start");
const reset = document.querySelector(".reset");
const black = document.querySelector(".black");
const random = document.querySelector(".random");
const colorPick = document.querySelector("#colorPicker")
let number;

function defaultGrid(number){
    for(let i = 0; i < number*number; i++){
        const div = document.createElement("div");
        div.classList.add("boxes");
        div.style.cssText = `height:${Math.floor(960/number)}px; width:${Math.floor(960/number)}px`
        container.appendChild(div);
    }
}

function randomCol(number) {
    return Math.floor(Math.random() * (number + 1));
}



defaultGrid(16);
// the div will change if the cursor touch different places
container.addEventListener("mouseover", (e) => {
    if(e.target.matches(".boxes")){
        e.target.style.backgroundColor = "black";  
        }       
    })
start.addEventListener("click", () => {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
    number = Number(prompt("What is the number of squares per side for new grid? Max 100, Min 1"));
    // defaultGrid(number);
    if(typeof number === 'number' && number > 0){
        return defaultGrid(number);
    } else{
        alert("Plz, type a number between 1 to 100")
        return defaultGrid(16);
    }
    
   
})


black.addEventListener("click", () => {
    container.addEventListener("mouseover", (e) => {
        if(e.target.matches(".boxes")){
            e.target.style.backgroundColor = "black";  
        }       
    })
})

random.addEventListener("click", () => {
    container.addEventListener("mouseover", (e) => {
        const rndCol = `rgb(${randomCol(255)}, ${randomCol(255)}, ${randomCol(255)})`
        if(e.target.matches(".boxes")){
            e.target.style.backgroundColor = rndCol;  
        }       
    })
})

colorPick.addEventListener("input", () => {
    container.addEventListener("mouseover", (e) => {
        if(e.target.matches(".boxes")){
            e.target.style.backgroundColor = colorPick.value;  
        }       
    })
})
reset.addEventListener("click", () => {
    container.childNodes.forEach(x => x.style.backgroundColor = "aliceblue") 
})

