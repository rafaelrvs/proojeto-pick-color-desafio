

const colors = ['green', 'yellow', 'purple', 'blue', 'red','white','orange','pink', 'azure','grey']
const btn = document.getElementById('btn')
const color = document.querySelector('.color')
let titulo = document.querySelector('titulo')

///escutando ação de click
btn.addEventListener('click', function() {
    
    const randomColor = getRandomColor()
    document.body.style.background = colors[randomColor]
    //escreve a cor no span
    color.textContent = colors[randomColor]
    
    
    
})

/// gera numero randomico
function getRandomColor() {
   
    return Math.floor(Math.random() * colors.length)
    
    

}
