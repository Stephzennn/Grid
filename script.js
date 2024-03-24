

const Container = document.querySelector("#Container");



for (let k = 0; k < 16 ; k++ ){
    for (let k = 0; k < 16 ; k++ ){
        let div = document.createElement('div')
        div.classList = "cell"
        
        Container.appendChild(div)
    }
}