display = document.getElementById('display')

buttons = document.querySelectorAll('button');

function appendToDisplay(value){
    display.value += value
}

function clearDisplay(){
    display.value = ""
}


function squareRoot(){
    num = Number(display.value)
    square = Math.sqrt(num)
    display.value = square
}

function result(){
      output = eval(display.value)
      display.value = output
}