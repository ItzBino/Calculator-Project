display = document.getElementById('display')

buttons = document.querySelectorAll('button');

function appendToDisplay(value){
    display.value += value
}

function clearDisplay(){
    display.value = ""
}


function square(){
    const square = display.value * display.value
    display.value = square
}

function cube(){
   const num = display.value * display.value * display.value
    display.value = num
}

function result(){
     const output = eval(display.value)
      display.value = output
}