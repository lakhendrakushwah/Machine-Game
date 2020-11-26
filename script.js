window.onload = function(){

var value1 = document.getElementById('value1')
var value2 = document.getElementById('value2')
var value3 = document.getElementById('value3')
let inpspeed = document.getElementById('inpspeed')


let values = [  '😂' , '🙄' , '😎' , '😡' , '😤 ', '😭 ' ]


function getRendomValue(){
   let k =  Math.random() * 6;
   let p = Math.floor(k);
   return values[p] 
}
console.log(getRendomValue())

setInterval( function(){
    value1.innerText = getRendomValue()
    value2.innerText = getRendomValue()
    value3.innerText = getRendomValue()

},100)
//'😂' , '🙄' , '😎' , '🤩' , '😡' , '😤 ', '😭 '


}
