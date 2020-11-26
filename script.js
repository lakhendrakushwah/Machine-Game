

let value1 = document.getElementById('value1')
let value2 = document.getElementById('value2')
let value3 = document.getElementById('values3')
let inpspeed = document.getElementById('inpspeed')


let values = [    '😂' , '🙄' , '😎' , '🤩' , '😡' , '😤 ', '😭 ' ]


function getRendomValue(){
   return values[Math.floor(Math.random() * 7)]
}

setInterval( function(){
    value1.innerText = getRendomValue()
    value2.innerText = getRendomValue()
    value3.innerText = getRendomValue()

},100)

