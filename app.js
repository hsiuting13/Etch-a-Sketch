const container = document.querySelector(".container");

function defaultGrid(){
    for(let i = 0; i < 256; i++){
        const div = document.createElement("div");
        div.classList.add("boxes");
        container.appendChild(div);
    }
}
defaultGrid();