

let Container = document.querySelector("#Container");

const num = document.querySelector("#numberOfSquares")
numberOfSquares = 16
wholeFunction( numberOfSquares)
num.addEventListener('click' , function() {
    let prevNumber = numberOfSquares 
    numberOfSquares = prompt("How many Squares Per Side")
    
    while(Container.firstChild){
        Container.removeChild(Container.firstChild);
    }
    
   wholeFunction(numberOfSquares)
})


function wholeFunction (numberOfSquares) {
    
const Container = document.querySelector("#Container");
for (let k = 0; k < numberOfSquares ; k++ ){
    for (let y = 0; y < numberOfSquares ; y++ ){
        let div = document.createElement('div')
        div.classList = "cell"
        div.id = "cell" + "K" + k.toString() + "Y" + y.toString();
        div.innerText = k.toString() + y.toString();
        
        Container.appendChild(div)
    }
}


const cell = document.querySelectorAll(".cell")


function changeBackground(x) {
   
    x.classList.add("cell2");

}



for (let k = 0; k < numberOfSquares ; k++ ){
    for (let y = 0; y <  numberOfSquares; y++ ){
        const cell = document.querySelector("#" +"cell" + "K" + k.toString() + "Y" +y.toString())
        
        console.log(cell.id)
        
        cell.addEventListener('mouseenter', function() {
            changeBackground(cell)
        })
    }
}
}










